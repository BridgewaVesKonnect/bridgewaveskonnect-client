import type { InitializeState, UIPayload } from "@/@types/uiState";

import { UIEvents } from "./events";

const initState: InitializeState = {
   innerHeight: null,
   innerWidth: null,
   scrollEvents: null,
};

const uiReducer = (
   state = initState,
   { type, payload }: { type: string; payload: UIPayload },
) => {
   switch (type) {
      case UIEvents.initialize:
         return {
            ...state,
            innerHeight: payload.innerHeight,
            innerWidth: payload.innerWidth,
         };

      case UIEvents.scrollEvents:
         return {
            ...state,
            scrollEvents: payload.scrollEvents || null,
         };
      default:
         return state;
   }
};
export default uiReducer;
