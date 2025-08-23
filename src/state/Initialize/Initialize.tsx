import { Box } from "@/src/html";
import { UIEvents } from "@/src/state/store/ui/events";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Initialize = ({ children }: { children: React.ReactNode }) => {
   const dispatch = useDispatch();

   const scrollEventHandler: (events: Event) => void = (events) => {
      dispatch({
         type: UIEvents.scrollEvents,
         payload: {
            scrollEvents: events,
         },
      });
   };

   const resizeEventHandler: () => void = () => {
      dispatch({
         type: UIEvents.initialize,
         payload: {
            innerHeight: window.innerHeight,
            innerWidth: window.innerWidth,
         },
      });
   };

   const eventsHandlers = {
      scroll: scrollEventHandler,
      resize: resizeEventHandler,
   };

   useEffect(() => {
      dispatch({
         type: UIEvents.initialize,
         payload: {
            innerHeight: window.innerHeight,
            innerWidth: window.innerWidth,
         },
      });

      Object.keys(eventsHandlers).forEach((event) => {
         window.addEventListener(
            event,
            eventsHandlers[event as keyof typeof eventsHandlers],
         );
      });

      return () => {
         Object.keys(eventsHandlers).forEach((event) => {
            window.removeEventListener(
               event,
               eventsHandlers[event as keyof typeof eventsHandlers],
            );
         });
      };
   }, []);

   return <Box>{children}</Box>;
};

export default Initialize;
