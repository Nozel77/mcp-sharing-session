"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Eye } from "lucide-react";
import { ProgressDots } from "@/components/ProgressDots";
import { SlideNav } from "@/components/SlideNav";
import { Button } from "@/components/ui/button";
import { SLIDES } from "@/data/slides";
import { REMOTE_PAIRING_CODE } from "@/lib/remote/config";
import { getSupabaseRemoteClient, isSupabaseRemoteEnabled, REMOTE_CHANNEL_NAME } from "@/lib/remote/supabase";
import type { RemoteCommandPayload, RemoteSnapshot } from "@/lib/remote/types";

async function syncSlide(slide: number, total: number) {
  await fetch("/api/remote", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action: "sync", slide, total }),
  }).catch(() => {});
}

function clampSlide(value: number, total: number) {
  if (!Number.isFinite(value)) return 0;
  return Math.max(0, Math.min(Math.trunc(value), Math.max(0, total - 1)));
}

export function SlideShow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPresenter] = useState(() => {
    if (typeof window === "undefined") return false;

    return new URLSearchParams(window.location.search).get("presenter") === REMOTE_PAIRING_CODE;
  });
  const [controlsHidden, setControlsHidden] = useState(() =>
    typeof window === "undefined" ? false : localStorage.getItem("mcpDesktopControlsHidden") === "true",
  );
  const total = SLIDES.length;
  const slideRef = useRef(currentSlide);
  const remoteChannelRef = useRef<ReturnType<NonNullable<ReturnType<typeof getSupabaseRemoteClient>>["channel"]> | null>(
    null,
  );

  const broadcastState = useCallback((slide: number) => {
    const channel = remoteChannelRef.current;
    if (!channel) return;

    void channel.send({
      type: "broadcast",
      event: "state",
      payload: {
        currentSlide: slide,
        total,
        updatedAt: Date.now(),
      },
    });
  }, [total]);

  const setSlide = useCallback(
    (nextSlide: number, shouldSync = true) => {
      const clamped = Math.max(0, Math.min(nextSlide, total - 1));
      slideRef.current = clamped;
      setCurrentSlide(clamped);

      if (shouldSync) {
        if (isPresenter) {
          if (isSupabaseRemoteEnabled()) {
            broadcastState(clamped);
          } else {
            void syncSlide(clamped, total);
          }
        }
      }
    },
    [broadcastState, isPresenter, total],
  );

  const goNext = useCallback(() => {
    setSlide(slideRef.current + 1);
  }, [setSlide]);

  const goPrev = useCallback(() => {
    setSlide(slideRef.current - 1);
  }, [setSlide]);

  const restart = useCallback(() => {
    setSlide(0);
  }, [setSlide]);

  const toggleFullscreen = useCallback(() => {
    if (document.fullscreenElement) {
      void document.exitFullscreen();
      return;
    }

    void document.documentElement.requestFullscreen?.();
  }, []);

  const hideControls = useCallback(() => {
    localStorage.setItem("mcpDesktopControlsHidden", "true");
    setControlsHidden(true);
  }, []);

  const showControls = useCallback(() => {
    localStorage.setItem("mcpDesktopControlsHidden", "false");
    setControlsHidden(false);
  }, []);

  useEffect(() => {
    slideRef.current = currentSlide;
  }, [currentSlide]);

  useEffect(() => {
    if (!isPresenter) return;

    const supabase = getSupabaseRemoteClient();

    if (supabase) {
      const channel = supabase
        .channel(REMOTE_CHANNEL_NAME)
        .on("broadcast", { event: "command" }, ({ payload }: { payload: RemoteCommandPayload }) => {
          if (payload.command === "next") setSlide(slideRef.current + 1);
          if (payload.command === "prev") setSlide(slideRef.current - 1);
          if (payload.command === "restart") setSlide(0);
          if (payload.command === "set") setSlide(clampSlide(Number(payload.slide), total));
        })
        .subscribe((status) => {
          if (status === "SUBSCRIBED") {
            broadcastState(slideRef.current);
          }
        });

      remoteChannelRef.current = channel;

      return () => {
        remoteChannelRef.current = null;
        void supabase.removeChannel(channel);
      };
    }

    void syncSlide(slideRef.current, total);

    const events = new EventSource("/api/remote");
    events.addEventListener("state", (event) => {
      const snapshot = JSON.parse((event as MessageEvent).data) as RemoteSnapshot;
      const nextSlide = Math.max(0, Math.min(snapshot.currentSlide, total - 1));

      if (nextSlide !== slideRef.current) {
        setSlide(nextSlide, false);
      }
    });

    return () => events.close();
  }, [broadcastState, isPresenter, setSlide, total]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") goNext();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "Escape") restart();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev, restart]);

  const ActiveSlide = useMemo(() => SLIDES[currentSlide].component, [currentSlide]);

  return (
    <main className="h-dvh overflow-hidden bg-[#0a0e1a] text-[#e2e8f0]">
      <ProgressDots total={total} current={currentSlide} />
      <AnimatePresence mode="wait">
        <motion.div
          key={SLIDES[currentSlide].id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <ActiveSlide />
        </motion.div>
      </AnimatePresence>
      {controlsHidden ? (
        <Button
          size="icon"
          onClick={showControls}
          aria-label="Show controls"
          className="fixed bottom-4 right-4 z-50 border border-[#234879] bg-[#10213d]/90 text-[#C4E2F5] shadow-lg shadow-black/30 hover:bg-[#15325c]"
        >
          <Eye className="size-4" />
        </Button>
      ) : (
        <SlideNav
          current={currentSlide}
          total={total}
          onPrev={goPrev}
          onNext={goNext}
          onRestart={restart}
          onFullscreen={toggleFullscreen}
          onHideControls={hideControls}
        />
      )}
    </main>
  );
}
