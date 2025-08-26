import { Close, CloudUpload } from "@mui/icons-material";
import {
   Box,
   Button,
   Dialog,
   DialogActions,
   DialogContent,
   DialogTitle,
   IconButton,
   TextField,
   Typography,
} from "@mui/material";
import React, { ChangeEvent, DragEvent, FormEvent, useState } from "react";

interface ResumeModalProps {
   open: boolean;
   onClose: () => void;
}

interface FormData {
   fullName: string;
   phone: string;
   email: string;
   file: File | null;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ open, onClose }) => {
   const [formData, setFormData] = useState<FormData>({
      fullName: "",
      phone: "",
      email: "",
      file: null,
   });

   const [dragOver, setDragOver] = useState(false);

   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
   };

   const handleFileDrop = (
      e: DragEvent<HTMLDivElement> | ChangeEvent<HTMLInputElement>,
   ) => {
      e.preventDefault();
      setDragOver(false);

      let file: File | undefined;

      if ("dataTransfer" in e) {
         file = e.dataTransfer?.files?.[0];
      } else if (e.target.files) {
         file = e.target.files[0];
      }

      if (file) {
         setFormData((prev) => ({ ...prev, file }));
      }
   };

   const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      console.log("Submitted Data:", formData);
      // TODO: send data to API
      onClose();
   };

   return (
      <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
         <DialogTitle>
            <Typography
               variant="h6"
               component="span"
               sx={{ fontWeight: "bold", color: "primary.main" }}
            >
               Apply for a Job
            </Typography>

            <IconButton
               aria-label="close"
               onClick={onClose}
               sx={{ position: "absolute", right: 8, top: 8 }}
            >
               <Close />
            </IconButton>
         </DialogTitle>

         <form onSubmit={handleSubmit}>
            <DialogContent dividers>
               <TextField
                  name="fullName"
                  label="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  required
               />
               <TextField
                  name="phone"
                  label="Phone Number"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  required
               />
               <TextField
                  name="email"
                  label="Email Address"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  required
               />

               {/* Drag and Drop File Upload */}
               <Box
                  onDrop={handleFileDrop}
                  onDragOver={(e) => {
                     e.preventDefault();
                     setDragOver(true);
                  }}
                  onDragLeave={() => setDragOver(false)}
                  sx={{
                     mt: 2,
                     p: 3,
                     border: "2px dashed",
                     borderColor: dragOver ? "primary.main" : "grey.400",
                     borderRadius: 2,
                     textAlign: "center",
                     cursor: "pointer",
                  }}
               >
                  <CloudUpload fontSize="large" color={dragOver ? "primary" : "action"} />
                  <Typography variant="body1" sx={{ mt: 1 }}>
                     {formData.file
                        ? `File: ${formData.file.name}`
                        : "Drag & drop resume here or click to upload"}
                  </Typography>
                  <input
                     type="file"
                     accept=".pdf,.doc,.docx"
                     onChange={handleFileDrop}
                     style={{ display: "none" }}
                     id="resume-upload"
                  />
                  <label htmlFor="resume-upload">
                     <Button variant="outlined" component="span" sx={{ mt: 1 }}>
                        Choose File
                     </Button>
                  </label>
               </Box>
            </DialogContent>

            <DialogActions>
               <Button onClick={onClose} color="secondary">
                  Cancel
               </Button>
               <Button type="submit" variant="contained" color="primary">
                  Submit
               </Button>
            </DialogActions>
         </form>
      </Dialog>
   );
};

export default ResumeModal;
