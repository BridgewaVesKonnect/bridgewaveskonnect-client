"use client";
import { searchUserAction } from "@/src/state/store/user/action";
import { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/src/state/store/store";
export function useSearch() {
   const dispatch = useDispatch<AppDispatch>();
   const [searchTerm, setSearchTerm] = useState("");
   const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(null);
   const [isTyping, setIsTyping] = useState(false);

   const handleSearchChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
         const value = e.target.value;
         setSearchTerm(value);
         setIsTyping(true);

         if (typingTimeout) {
            clearTimeout(typingTimeout);
         }

         setTypingTimeout(
            setTimeout(() => {
               setIsTyping(false);
               dispatch(searchUserAction(value));
            }, 500),
         );
      },
      [typingTimeout],
   );

   const sideEffect = () => {
      return () => {
         if (typingTimeout) {
            clearTimeout(typingTimeout);
         }
      };
   };

   useEffect(sideEffect, [typingTimeout]);

   return {
      searchTerm,
      isTyping,
      handleSearchChange,
   };
}
