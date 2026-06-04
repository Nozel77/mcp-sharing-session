"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ProgressDots } from "@/components/ProgressDots";
import { SlideNav } from "@/components/SlideNav";
import { SLIDES } from "@/data/slides";
import type { RemoteSnapshot } from "@/lib/remote/types";

async function syncSlide(slide: number, total: number) {
  await fetch("/api/remote", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action: "sync", slide, total }),
  }).catch(() => {});
}

export function SlideShow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const total = SLIDES.length;
  const slideRef = useRef(currentSlide);

  const setSlide = useCallback(
    (nextSlide: number, shouldSync = true) => {
      const clamped = Math.max(0, Math.min(nextSlide, total - 1));
      slideRef.current = clamped;
      setCurrentSlide(clamped);

      if (shouldSync) {
        void syncSlide(clamped, total);
      }
    },
    [total],
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

  useEffect(() => {
    slideRef.current = currentSlide;
  }, [currentSlide]);

  useEffect(() => {
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
  }, [setSlide, total]);

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
    <main className="min-h-screen bg-[#0a0e1a] text-[#e2e8f0]">
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
      <SlideNav current={currentSlide} total={total} onPrev={goPrev} onNext={goNext} onRestart={restart} />
    </main>
  );
}
