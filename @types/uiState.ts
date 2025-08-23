interface UIPayload {
   innerHeight: number | null;
   innerWidth: number | null;
   scrollEvents?: Event | null;
}

type InitializeState = {
   innerHeight: number | null;
   innerWidth: number | null;
   scrollEvents: Event | null;
};

export type { InitializeState, UIPayload };
