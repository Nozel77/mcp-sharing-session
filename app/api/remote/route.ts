import type { RemoteDevice, RemoteSnapshot } from "@/lib/remote/types";
import { REMOTE_PAIRING_CODE } from "@/lib/remote/config";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

type RemoteState = {
  pairingCode: string;
  currentSlide: number;
  total: number;
  devices: Map<string, RemoteDevice>;
  clients: Set<ReadableStreamDefaultController<Uint8Array>>;
  updatedAt: number;
};

const encoder = new TextEncoder();
const globalRemote = globalThis as typeof globalThis & { __mcpRemoteState?: RemoteState };

function createPairingCode() {
  return REMOTE_PAIRING_CODE;
}

function getState() {
  globalRemote.__mcpRemoteState ??= {
    pairingCode: createPairingCode(),
    currentSlide: 0,
    total: 10,
    devices: new Map(),
    clients: new Set(),
    updatedAt: Date.now(),
  };

  return globalRemote.__mcpRemoteState;
}

function snapshot(state = getState()): RemoteSnapshot {
  return {
    pairingCode: state.pairingCode,
    currentSlide: state.currentSlide,
    total: state.total,
    devices: Array.from(state.devices.values()).sort((a, b) => b.lastSeen - a.lastSeen),
    updatedAt: state.updatedAt,
  };
}

function clampSlide(value: number, total: number) {
  if (!Number.isFinite(value)) return 0;
  return Math.max(0, Math.min(Math.trunc(value), Math.max(0, total - 1)));
}

function send(controller: ReadableStreamDefaultController<Uint8Array>, data: RemoteSnapshot) {
  controller.enqueue(encoder.encode(`event: state\ndata: ${JSON.stringify(data)}\n\n`));
}

function broadcast() {
  const state = getState();
  state.updatedAt = Date.now();
  const data = snapshot(state);

  for (const controller of state.clients) {
    try {
      send(controller, data);
    } catch {
      state.clients.delete(controller);
    }
  }
}

function json(data: unknown, status = 200) {
  return Response.json(data, { status });
}

export async function GET(request: Request) {
  const state = getState();
  const url = new URL(request.url);

  if (url.searchParams.get("format") === "json") {
    return json(snapshot(state));
  }

  let heartbeat: ReturnType<typeof setInterval>;
  let activeController: ReadableStreamDefaultController<Uint8Array> | null = null;
  const stream = new ReadableStream<Uint8Array>({
    start(controller) {
      activeController = controller;
      state.clients.add(controller);
      controller.enqueue(encoder.encode(": connected\n\n"));
      send(controller, snapshot(state));

      heartbeat = setInterval(() => {
        try {
          controller.enqueue(encoder.encode(": heartbeat\n\n"));
        } catch {
          clearInterval(heartbeat);
          state.clients.delete(controller);
        }
      }, 15000);
    },
    cancel() {
      clearInterval(heartbeat);
      if (activeController) state.clients.delete(activeController);
    },
  });

  return new Response(stream, {
    headers: {
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
      "Content-Type": "text/event-stream",
    },
  });
}

export async function POST(request: Request) {
  const state = getState();
  const body = await request.json().catch(() => ({}));
  const action = typeof body.action === "string" ? body.action : "";

  if (action === "pair") {
    const code = String(body.code ?? "").trim();
    const name = String(body.name ?? "Remote").trim().slice(0, 40) || "Remote";

    if (code !== state.pairingCode) {
      return json({ error: "Kode pairing salah." }, 403);
    }

    const id = typeof body.deviceId === "string" && body.deviceId ? body.deviceId : crypto.randomUUID();
    const previous = state.devices.get(id);

    state.devices.clear();
    state.devices.set(id, {
      id,
      name,
      status: previous?.status ?? "approved",
      lastSeen: Date.now(),
    });
    broadcast();

    return json({ deviceId: id, status: state.devices.get(id)?.status });
  }

  if (action === "approve" || action === "reject" || action === "remove") {
    const deviceId = String(body.deviceId ?? "");
    const device = state.devices.get(deviceId);

    if (!device) return json({ error: "Device tidak ditemukan." }, 404);

    if (action === "approve") {
      state.devices.set(deviceId, { ...device, status: "approved", lastSeen: Date.now() });
    } else {
      state.devices.delete(deviceId);
    }

    broadcast();
    return json({ ok: true });
  }

  if (action === "sync") {
    state.total = Math.max(1, Number(body.total) || state.total);
    state.currentSlide = clampSlide(Number(body.slide), state.total);
    broadcast();
    return json({ ok: true });
  }

  if (action === "command") {
    const deviceId = String(body.deviceId ?? "");
    const device = state.devices.get(deviceId);

    if (!device || device.status !== "approved") {
      return json({ error: "Remote belum di-approve." }, 403);
    }

    state.total = Math.max(1, Number(body.total) || state.total);
    state.devices.set(deviceId, { ...device, lastSeen: Date.now() });

    if (body.command === "next") state.currentSlide = clampSlide(state.currentSlide + 1, state.total);
    if (body.command === "prev") state.currentSlide = clampSlide(state.currentSlide - 1, state.total);
    if (body.command === "restart") state.currentSlide = 0;
    if (body.command === "set") state.currentSlide = clampSlide(Number(body.slide), state.total);

    broadcast();
    return json({ ok: true, currentSlide: state.currentSlide });
  }

  return json({ error: "Action tidak dikenal." }, 400);
}
