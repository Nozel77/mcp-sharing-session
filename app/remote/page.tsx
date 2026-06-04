"use client";

import { ChevronLeft, ChevronRight, Eye, EyeOff, Maximize2, RotateCcw, Smartphone } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { RemoteSnapshot } from "@/lib/remote/types";

async function postRemote(body: Record<string, unknown>) {
  const response = await fetch("/api/remote", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error ?? "Request gagal.");
  return data;
}

export default function RemotePage() {
  const [snapshot, setSnapshot] = useState<RemoteSnapshot | null>(null);
  const [deviceId, setDeviceId] = useState(() =>
    typeof window === "undefined" ? "" : (localStorage.getItem("mcpRemoteDeviceId") ?? ""),
  );
  const [name, setName] = useState(() =>
    typeof window === "undefined" ? "" : (localStorage.getItem("mcpRemoteName") ?? ""),
  );
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [controlsHidden, setControlsHidden] = useState(() =>
    typeof window === "undefined" ? false : localStorage.getItem("mcpRemoteControlsHidden") === "true",
  );

  useEffect(() => {
    fetch("/api/remote?format=json")
      .then((response) => response.json())
      .then((data: RemoteSnapshot) => setSnapshot(data))
      .catch(() => {});

    const events = new EventSource("/api/remote");
    events.addEventListener("state", (event) => {
      setSnapshot(JSON.parse((event as MessageEvent).data));
    });

    return () => events.close();
  }, []);

  const device = useMemo(() => snapshot?.devices.find((item) => item.id === deviceId), [deviceId, snapshot?.devices]);
  const approved = device?.status === "approved";

  async function pair() {
    setError("");
    try {
      const remoteName = name.trim() || "HP Remote";
      const result = await postRemote({ action: "pair", code: code.trim(), name: remoteName, deviceId });
      localStorage.setItem("mcpRemoteDeviceId", result.deviceId);
      localStorage.setItem("mcpRemoteName", remoteName);
      setDeviceId(result.deviceId);
      setName(remoteName);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Pairing gagal.");
    }
  }

  async function command(value: "prev" | "next" | "restart") {
    setError("");
    try {
      await postRemote({ action: "command", command: value, deviceId, total: snapshot?.total ?? 10 });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Command gagal.");
    }
  }

  function toggleFullscreen() {
    if (document.fullscreenElement) {
      void document.exitFullscreen();
      return;
    }

    void document.documentElement.requestFullscreen?.();
  }

  function hideControls() {
    localStorage.setItem("mcpRemoteControlsHidden", "true");
    setControlsHidden(true);
  }

  function showControls() {
    localStorage.setItem("mcpRemoteControlsHidden", "false");
    setControlsHidden(false);
  }

  return (
    <main className="min-h-dvh bg-[#07101f] px-4 py-6 text-white">
      <section className="mx-auto flex min-h-[calc(100dvh-48px)] max-w-md flex-col">
        <div className="flex items-center justify-between gap-3">
          <div className="flex size-11 items-center justify-center rounded-lg border border-[#4BB8FA]/40 bg-[#1591DC]/18 text-[#4BB8FA]">
            <Smartphone className="size-5" />
          </div>
          <div className="min-w-0 flex-1">
            <h1 className="text-xl font-bold">Remote Slide</h1>
            <p className="text-sm text-[#8fb9d8]">Pair HP ini dari desktop presenter.</p>
          </div>
          <div className="flex gap-2">
            <Button size="icon" variant="outline" aria-label="Fullscreen" className="border-[#234879] bg-[#10213d] text-[#C4E2F5]" onClick={toggleFullscreen}>
              <Maximize2 className="size-4" />
            </Button>
            <Button size="icon" variant="outline" aria-label="Hide controls" className="border-[#234879] bg-[#10213d] text-[#C4E2F5]" onClick={hideControls}>
              <EyeOff className="size-4" />
            </Button>
          </div>
        </div>

        {!approved ? (
          <div className="mt-8 rounded-xl border border-[#234879] bg-[#10213d]/80 p-4">
            <label className="text-xs font-semibold uppercase text-[#8fb9d8]" htmlFor="remote-name">
              Nama HP
            </label>
            <Input
              id="remote-name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Contoh: HP Adit"
              className="mt-2 border-[#234879] bg-[#07101f] text-white"
            />
            <label className="mt-4 block text-xs font-semibold uppercase text-[#8fb9d8]" htmlFor="pair-code">
              Kode Pairing
            </label>
            <Input
              id="pair-code"
              inputMode="numeric"
              value={code}
              onChange={(event) => setCode(event.target.value)}
              placeholder="777777"
              className="mt-2 border-[#234879] bg-[#07101f] font-mono text-white"
            />
            <Button className="mt-4 w-full bg-[#1591DC] text-white hover:bg-[#1591DC]/90" onClick={pair}>
              Request Pairing
            </Button>
            {error ? <p className="mt-3 text-sm text-red-300">{error}</p> : null}
          </div>
        ) : null}

        {controlsHidden ? (
          <div className="grid flex-1 place-items-center">
            <Button
              onClick={showControls}
              className="border border-[#234879] bg-[#10213d] text-[#C4E2F5] hover:bg-[#15325c]"
            >
              <Eye className="size-4" />
              Show Controls
            </Button>
          </div>
        ) : (
        <div className="mt-8 grid flex-1 grid-rows-[1fr_auto_1fr] gap-4">
          <Button
            disabled={!approved}
            className="h-full min-h-32 rounded-xl bg-gradient-to-r from-[#2C5EAD] via-[#1591DC] to-[#4BB8FA] text-lg font-bold text-white"
            onClick={() => command("next")}
          >
            Next
            <ChevronRight className="size-6" />
          </Button>
          <div className="grid grid-cols-2 gap-4">
            <Button disabled={!approved} variant="outline" className="h-16 border-[#234879] bg-[#10213d] text-[#C4E2F5]" onClick={() => command("prev")}>
              <ChevronLeft className="size-5" />
              Prev
            </Button>
            <Button disabled={!approved} variant="outline" className="h-16 border-[#234879] bg-[#10213d] text-[#C4E2F5]" onClick={() => command("restart")}>
              <RotateCcw className="size-5" />
              Restart
            </Button>
          </div>
          <div className="rounded-xl border border-[#234879] bg-[#0b1b33]/80 p-4 text-center">
            <p className="text-sm text-[#8fb9d8]">Slide aktif</p>
            <p className="mt-2 text-3xl font-bold">
              {(snapshot?.currentSlide ?? 0) + 1} / {snapshot?.total ?? 10}
            </p>
          </div>
        </div>
        )}
      </section>
    </main>
  );
}
