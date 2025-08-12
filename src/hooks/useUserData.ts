"use client";
import { useEffect } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { State, AppDispatch } from "@/src/state/store/store";
import { fetchUsersAction } from "@/src/state/store/user/action";
import { useDispatch } from "react-redux";

export function useUserData() {
   const dispatch = useDispatch<AppDispatch>();

   const { users } = useSelector((state: State) => {
      return {
         users: state.users,
      };
   }, shallowEqual);

   const sideEffect = () => {
      dispatch(fetchUsersAction());
   };

   useEffect(sideEffect, [dispatch]);

   return { users };
}
