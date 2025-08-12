import { Box, Typography } from "@/src/html";
import { Email, Facebook, Language, LinkedIn, Phone } from "@mui/icons-material";
import { Divider } from "@mui/material";

const Footer = () => {
   return (
      <Box
         component="footer"
         sx={{
            width: "100%",
            backgroundColor: "#f8fafc",
            padding: "40px 30px",
            boxSizing: "border-box",
            textAlign: "center",
         }}
      >
         <Box
            sx={{
               display: "flex",
               justifyContent: "space-between",
               alignItems: "center",
               marginBottom: "30px",
            }}
         >
            <Box
               sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "start",
                  alignItems: "start",
                  gap: "10px",
               }}
            >
               <Typography
                  variant="h4"
                  sx={{
                     fontSize: "1.5rem",
                     color: "text.hint",
                     fontWeight: 600,
                     fontFamily: "Open Sans",
                  }}
               >
                  BRIDGEWAVESKONNECT
               </Typography>

               <Typography
                  variant="h6"
                  sx={{
                     fontSize: "0.999rem",
                     color: "text.secondary",
                     fontWeight: 400,
                     fontFamily: "Open Sans",
                  }}
               >
                  Your partner in success, connecting you with the best virtual talent
               </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "20px" }}>
               <Box
                  sx={{
                     "display": "flex",
                     "alignItems": "center",
                     "justifyContent": "center",
                     "height": "50px",
                     "width": "50px",
                     "borderRadius": "50%",
                     "backgroundColor": "background.primaryLight",
                     "boxShadow": "0 2px 4px rgba(0, 0, 0, 0.1)",
                     "padding": "10px",
                     "cursor": "pointer",
                     "&:hover": {
                        backgroundColor: "background.primary",
                     },
                  }}
               >
                  <Facebook sx={{ fontSize: "1.5rem", color: "text.primar" }} />
               </Box>
               <Box
                  sx={{
                     "display": "flex",
                     "alignItems": "center",
                     "justifyContent": "center",
                     "height": "50px",
                     "width": "50px",
                     "borderRadius": "50%",
                     "backgroundColor": "background.primaryLight",
                     "boxShadow": "0 2px 4px rgba(0, 0, 0, 0.1)",
                     "padding": "10px",
                     "cursor": "pointer",
                     "&:hover": {
                        backgroundColor: "background.primary",
                     },
                  }}
               >
                  <LinkedIn sx={{ fontSize: "1.5rem", color: "text.primar" }} />
               </Box>
            </Box>
         </Box>
         <Box
            sx={{
               width: "100%",
               margin: "0 auto",
               display: "flex",
               flexDirection: { xs: "column", md: "row" },
               justifyContent: "space-between",
               alignItems: "start",
               gap: "20px",
               marginBottom: "20px",
            }}
         >
            <Box
               sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  alignItems: { xs: "center", md: "flex-start" },
               }}
            >
               <Box
                  sx={{
                     display: "flex",
                     gap: "10px",
                     alignItems: { xs: "center", md: "flex-start" },
                  }}
               >
                  <Email sx={{ fontSize: "1.6rem", color: "text.hint" }} />
                  <Typography
                     variant="body2"
                     sx={{
                        fontSize: "1rem",
                        color: "text.secondary",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        fontWeight: 500,
                        fontFamily: "Open Sans",
                     }}
                  >
                     info@bridgewaveskonnect.com
                  </Typography>
               </Box>

               <Box
                  sx={{
                     display: "flex",
                     gap: "10px",
                     alignItems: { xs: "center", md: "flex-start" },
                  }}
               >
                  <Phone sx={{ fontSize: "1.6rem", color: "text.hint" }} />
                  <Typography
                     variant="body2"
                     sx={{
                        fontSize: "1rem",
                        color: "text.secondary",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        fontWeight: 500,
                        fontFamily: "Open Sans",
                     }}
                  >
                     +63 917 123 4567
                  </Typography>
               </Box>
               <Box
                  sx={{
                     display: "flex",
                     gap: "10px",
                     alignItems: { xs: "center", md: "flex-start" },
                  }}
               >
                  <Language sx={{ fontSize: "1.6rem", color: "text.hint" }} />
                  <Typography
                     variant="body2"
                     sx={{
                        fontSize: "1rem",
                        color: "text.secondary",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        fontWeight: 500,
                        fontFamily: "Open Sans",
                     }}
                  >
                     www.bridgewaveskonnect.com
                  </Typography>
               </Box>
            </Box>
            <Box
               sx={{
                  flex: 1,
                  display: "flex",
                  gap: "20px",
                  justifyContent: "end",
                  alignItems: "start",
               }}
            >
               <Box
                  sx={{
                     display: "flex",
                     flexDirection: "column",
                     gap: "15px",
                     alignItems: { xs: "center", md: "flex-end" },
                     marginRight: "70px",
                  }}
               >
                  <Typography
                     variant="h5"
                     sx={{
                        fontSize: "1.2rem",
                        color: "text.hint",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        fontWeight: 500,
                        fontFamily: "Open Sans",
                     }}
                  >
                     Solutions
                  </Typography>

                  <Box
                     sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                        alignItems: { xs: "center", md: "flex-end" },
                     }}
                  >
                     <Typography
                        variant="h5"
                        sx={{
                           fontSize: "1rem",
                           color: "text.secondary",
                           display: "flex",
                           alignItems: "center",
                           gap: "8px",
                           fontWeight: 500,
                           fontFamily: "Open Sans",
                        }}
                     >
                        Virtual Assistants
                     </Typography>
                     <Typography
                        variant="h5"
                        sx={{
                           fontSize: "1rem",
                           color: "text.secondary",
                           display: "flex",
                           alignItems: "center",
                           gap: "8px",
                           fontWeight: 500,
                           fontFamily: "Open Sans",
                        }}
                     >
                        Remote Staffing
                     </Typography>
                  </Box>
               </Box>
               <Box
                  sx={{
                     display: "flex",
                     flexDirection: "column",
                     gap: "10px",
                     alignItems: { xs: "center", md: "flex-end" },
                  }}
               >
                  <Typography
                     variant="h5"
                     sx={{
                        fontSize: "1.2rem",
                        color: "text.hint",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        fontWeight: 500,
                        fontFamily: "Open Sans",
                     }}
                  >
                     Legal
                  </Typography>

                  <Box
                     sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "15px",
                        alignItems: { xs: "center", md: "flex-end" },
                     }}
                  >
                     <Typography
                        variant="h5"
                        sx={{
                           fontSize: "1rem",
                           color: "text.secondary",
                           display: "flex",
                           alignItems: "center",
                           gap: "8px",
                           fontWeight: 500,
                           fontFamily: "Open Sans",
                        }}
                     >
                        Contact
                     </Typography>
                     <Typography
                        variant="h5"
                        sx={{
                           fontSize: "1rem",
                           color: "text.secondary",
                           display: "flex",
                           alignItems: "center",
                           gap: "8px",
                           fontWeight: 500,
                           fontFamily: "Open Sans",
                        }}
                     >
                        Privacy Policy
                     </Typography>

                     <Typography
                        variant="h5"
                        sx={{
                           fontSize: "1rem",
                           color: "text.secondary",
                           display: "flex",
                           alignItems: "center",
                           gap: "8px",
                           fontWeight: 500,
                           fontFamily: "Open Sans",
                        }}
                     >
                        Terms of Service
                     </Typography>

                     <Typography
                        variant="h5"
                        sx={{
                           fontSize: "1rem",
                           color: "text.secondary",
                           display: "flex",
                           alignItems: "center",
                           gap: "8px",
                           fontWeight: 500,
                           fontFamily: "Open Sans",
                        }}
                     >
                        Cookie Policy
                     </Typography>
                     <Typography
                        variant="h5"
                        sx={{
                           fontSize: "1rem",
                           color: "text.secondary",
                           display: "flex",
                           alignItems: "center",
                           gap: "8px",
                           fontWeight: 500,
                           fontFamily: "Open Sans",
                        }}
                     >
                        Data Policy
                     </Typography>
                  </Box>
               </Box>
            </Box>
         </Box>
         <Divider></Divider>
         <Typography
            variant="body2"
            sx={{
               fontSize: "0.9rem",
               color: "text.secondary",
               marginTop: "20px",
               fontFamily: "Open Sans",
               letterSpacing: "0.05rem",
               fontWeight: 400,
            }}
         >
            © {new Date().getFullYear()} BridgewaVes Konnect. All rights reserved.
         </Typography>
      </Box>
   );
};

export default Footer;
