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

export type RemoteCommand = "prev" | "next" | "restart" | "set";

export type RemoteCommandPayload = {
  command: RemoteCommand;
  deviceId: string;
  total: number;
  slide?: number;
  sentAt: number;
};

export type RemoteStatePayload = {
  currentSlide: number;
  total: number;
  updatedAt: number;
};

export type RemotePairPayload = {
  deviceId: string;
  name: string;
  sentAt: number;
};
