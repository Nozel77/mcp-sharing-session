"use client";

import { Check, MonitorSmartphone, RefreshCw, Trash2, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { RemoteSnapshot } from "@/lib/remote/types";

async function postRemote(body: Record<string, unknown>) {
  await fetch("/api/remote", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

export function RemotePairingPanel() {
  const [snapshot, setSnapshot] = useState<RemoteSnapshot | null>(null);

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

  const pending = snapshot?.devices.filter((device) => device.status === "pending") ?? [];
  const approved = snapshot?.devices.filter((device) => device.status === "approved") ?? [];

  return (
    <aside className="fixed right-4 top-4 z-40 hidden w-80 rounded-lg border border-[#234879] bg-[#07101f]/90 p-4 text-white shadow-2xl shadow-black/30 backdrop-blur-md lg:block">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <MonitorSmartphone className="size-4 text-[#4BB8FA]" />
          Remote HP
        </div>
        <Badge className="bg-[#1591DC]/20 text-[#C4E2F5]">/remote</Badge>
      </div>

      <div className="mt-4 rounded-md border border-[#234879] bg-[#0b1b33] p-3">
        <p className="text-xs text-[#8fb9d8]">Kode pairing</p>
        <p className="mt-1 font-mono text-2xl font-bold tracking-widest text-[#F5FBFF]">
          {snapshot?.pairingCode ?? "------"}
        </p>
      </div>

      <div className="mt-4 space-y-3">
        {pending.length ? <p className="text-xs font-semibold uppercase text-[#fbbf24]">Menunggu approval</p> : null}
        {pending.map((device) => (
          <div key={device.id} className="flex items-center justify-between gap-2 rounded-md border border-[#234879] bg-[#10213d]/80 p-2">
            <span className="min-w-0 truncate text-sm">{device.name}</span>
            <div className="flex gap-1">
              <Button size="icon" className="size-8 bg-[#34d399] text-[#07101f] hover:bg-[#34d399]/90" onClick={() => postRemote({ action: "approve", deviceId: device.id })}>
                <Check className="size-4" />
              </Button>
              <Button size="icon" variant="outline" className="size-8 border-[#234879] bg-transparent text-[#C4E2F5]" onClick={() => postRemote({ action: "reject", deviceId: device.id })}>
                <X className="size-4" />
              </Button>
            </div>
          </div>
        ))}

        <p className="text-xs font-semibold uppercase text-[#8fb9d8]">Approved</p>
        {approved.length ? (
          approved.map((device) => (
            <div key={device.id} className="flex items-center justify-between gap-2 rounded-md border border-[#234879] bg-[#0b1b33]/80 p-2">
              <span className="min-w-0 truncate text-sm text-[#C4E2F5]">{device.name}</span>
              <Button size="icon" variant="ghost" className="size-8 text-[#8fb9d8] hover:bg-[#15325c] hover:text-white" onClick={() => postRemote({ action: "remove", deviceId: device.id })}>
                <Trash2 className="size-4" />
              </Button>
            </div>
          ))
        ) : (
          <p className="rounded-md border border-dashed border-[#234879] px-3 py-2 text-xs text-[#8fb9d8]">
            Belum ada HP yang di-pair.
          </p>
        )}
      </div>

      <div className="mt-4 flex items-center gap-2 text-xs text-[#8fb9d8]">
        <RefreshCw className="size-3" />
        Desktop dan HP harus buka server yang sama.
      </div>
    </aside>
  );
}
