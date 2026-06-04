export type RemoteDeviceStatus = "pending" | "approved";

export type RemoteDevice = {
  id: string;
  name: string;
  status: RemoteDeviceStatus;
  lastSeen: number;
};

export type RemoteSnapshot = {
  pairingCode: string;
  currentSlide: number;
  total: number;
  devices: RemoteDevice[];
  updatedAt: number;
};

