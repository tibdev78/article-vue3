interface StorePayload {
  data: unknown;
}

interface IRootState {
  root: boolean;
  version: string;
}

export { StorePayload, IRootState };
