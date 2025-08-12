"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/src/state/store/store";
import {
   createUserAction,
   updateUserAction,
   deleteUserAction,
} from "@/src/state/store/user/action";

export function useUsers() {
   const dispatch = useDispatch<AppDispatch>();
   const [openDialog, setOpenDialog] = useState(false);
   const [currentUser, setCurrentUser] = useState<User | null>(null);
   const [formData, setFormData] = useState({ name: "" });

   const createUser = async (userData: { name: string }) => {
      dispatch(createUserAction(userData));
   };

   const updateUser = async (id: number, userData: { name: string }) => {
      dispatch(
         updateUserAction({
            id,
            name: userData.name,
         }),
      );
   };

   const deleteUser = async (id: number) => {
      dispatch(deleteUserAction(id));
   };

   const handleAddUser = function handleAddUser() {
      setCurrentUser(null);
      setFormData({ name: "" });
      setOpenDialog(true);
   };

   const handleEditUser = function handleEditUser(user: User) {
      setCurrentUser(user);
      setFormData({ name: user.name });
      setOpenDialog(true);
   };

   const handleDeleteUser = async function handleDeleteUser(id: number) {
      if (window.confirm("Are you sure you want to delete this user?")) {
         await deleteUser(id);
      }
   };

   const handleDialogClose = function handleDialogClose() {
      setOpenDialog(false);
      setCurrentUser(null);
   };

   const handleFormChange = function handleFormChange(
      e: React.ChangeEvent<HTMLInputElement>,
   ) {
      const { name, value } = e.target;
      setFormData((prev) => ({
         ...prev,
         [name]: value,
      }));
   };

   const handleFormSubmit = async function handleFormSubmit(e: React.FormEvent) {
      e.preventDefault();

      try {
         if (currentUser) {
            await updateUser(currentUser.id, formData);
         } else {
            await createUser(formData);
         }
         handleDialogClose();
      } catch (err) {
         console.error("Form submission error:", err);
      }
   };

   return {
      openDialog,
      currentUser,
      formData,
      handleAddUser,
      handleEditUser,
      handleDeleteUser,
      handleDialogClose,
      handleFormChange,
      handleFormSubmit,
   };
}
