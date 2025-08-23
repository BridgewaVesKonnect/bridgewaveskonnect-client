import CloseIcon from "@mui/icons-material/Close";
import { Box, IconButton, Modal, Tooltip } from "@mui/material";
import { InlineWidget } from "react-calendly";
const Calendly = ({
   open,
   onClose,
}: {
   open: boolean;
   onClose: (event: React.MouseEvent | React.KeyboardEvent, reason?: string) => void;
}) => {
   return (
      <Modal open={open} disableEscapeKeyDown onClose={onClose}>
         <Box
            sx={{
               position: "absolute",
               top: "50%",
               left: "50%",
               transform: "translate(-50%, -50%)",
               width: "100%",
               maxWidth: 600,
               bgcolor: "background.paper",
               borderRadius: 2,
               boxShadow: 24,
               p: 2,
               outline: "none",
            }}
         >
            <Tooltip title="Close" arrow>
               <IconButton
                  onClick={onClose}
                  sx={{ position: "absolute", top: 8, right: 8 }}
                  aria-label="close"
               >
                  <CloseIcon />
               </IconButton>
            </Tooltip>
            <Box>
               <InlineWidget
                  url="https://calendly.com/bridgewaveskonnect-info/30min"
                  styles={{ height: "600px", width: "100%", marginTop: "20px" }}
               />
            </Box>
         </Box>
      </Modal>
   );
};

export default Calendly;
