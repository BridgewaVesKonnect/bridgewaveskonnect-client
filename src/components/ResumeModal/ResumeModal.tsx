import {
   Box,
   Button,
   TextField,
   Typography,
   FormGroup,
   FormControl,
   Dialog,
   DialogActions,
   DialogContent,
   DialogTitle,
} from "@/src/html";
import { Close, CloudUpload } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { ChangeEvent, DragEvent, FormEvent, useState } from "react";

interface ResumeModalProps {
   open: boolean;
   onClose: () => void;
}

interface FormData {
   name: string;
   label: string;
   errorMessage: string;
   rules: string;
   error: boolean;
   multiline: boolean;
   type: string;
   maxLength?: number;
   disabled?: boolean;
   file?: File | null;
   value?: string;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ open, onClose }) => {
   const [formData, setFormData] = useState<FormData[]>([
      {
         name: "fullName",
         label: "Full Name",
         errorMessage: "",
         rules: "required",
         error: false,
         multiline: false,
         type: "text",
         maxLength: 100,
         disabled: false,
         value: "",
      },
      {
         name: "phone",
         label: "Phone Number",
         errorMessage: "",
         rules: "required|phone",
         error: false,
         multiline: false,
         type: "text",
         maxLength: 15,
         disabled: false,
         value: "",
      },
      {
         name: "email",
         label: "Email Address",
         errorMessage: "",
         rules: "required|email",
         error: false,
         multiline: false,
         type: "text",
         maxLength: 100,
         disabled: false,
         value: "",
      },
      {
         name: "file",
         label: "Upload Resume",
         errorMessage: "",
         rules: "required|file",
         error: false,
         multiline: false,
         type: "file",
         disabled: false,
         file: null,
      },
   ]);

   const [dragOver, setDragOver] = useState(false);

   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;

      setFormData((prev) =>
         prev.map((field) => (field.name === name ? { ...field, value } : field)),
      );
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
         setFormData((prev) =>
            prev.map((field) => (field.name === "file" ? { ...field, file } : field)),
         );
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
               sx={{ fontWeight: 500, color: "primary.main" }}
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
               <FormGroup
                  sx={{
                     display: "flex",
                     flexDirection: "column",
                     gap: "10px",
                     width: "100%",
                  }}
               >
                  {formData.map((field, index) => (
                     <FormControl key={index} variant="outlined" fullWidth>
                        {field.type === "text" ? (
                           <TextField
                              key={field.name}
                              name={field.name}
                              label={field.label}
                              onChange={handleChange}
                              fullWidth
                              error={field.error}
                              helperText={field.errorMessage}
                              multiline={field.multiline}
                              type={field.type}
                              disabled={field.disabled}
                              variant="outlined"
                              value={field.value}
                              slotProps={{
                                 htmlInput: {
                                    maxLength: field.maxLength,
                                 },
                              }}
                              sx={{
                                 ":hover .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "primary.main",
                                 },
                              }}
                           />
                        ) : (
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
                              <CloudUpload
                                 fontSize="large"
                                 color={dragOver ? "primary" : "action"}
                              />
                              <Typography
                                 variant="body1"
                                 sx={{
                                    mt: 1,
                                    mb: 1,
                                    color: "text.secondary",
                                    fontSize: "1rem",
                                    fontFamily: "Open Sans, sans-serif",
                                 }}
                              >
                                 {field.file
                                    ? `File: ${field.file.name}`
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
                                 <Button
                                    variant="outlined"
                                    component="span"
                                    sx={{ mt: 1 }}
                                 >
                                    Choose File
                                 </Button>
                              </label>
                           </Box>
                        )}
                     </FormControl>
                  ))}
               </FormGroup>
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
