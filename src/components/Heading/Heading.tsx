import { Box, Button, Typography } from "@/src/html";

const Heading = () => {
   return (
      <Box
         sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            height: "100%",
            backgroundColor: "background.primary",
            padding: "0 35px 50px 35px",
         }}
      >
         <Box
            sx={{
               marginTop: 14,
               flex: 1,
               display: "flex",
               flexDirection: "column",
               justifyContent: "start",
               alignItems: "start",
               width: "100%",
               height: "100%",
               maxWidth: "700px",
               marginRight: 2,
            }}
         >
            <Typography
               variant="h1"
               component="div"
               sx={{
                  fontWeight: 600,
                  fontSize: "2.5rem",
                  fontFamily: "Open Sans",
                  letterSpacing: "0.1rem",
                  marginTop: 4,
                  color: "text.primary",
               }}
            >
               “Bridging gaps. Empowering your business with our Top 1% Filipino Virtual
               Assistants”
            </Typography>
            <Typography
               variant="h2"
               component="div"
               sx={{
                  fontWeight: 400,
                  fontSize: "1.5rem",
                  fontFamily: "Open Sans",
                  letterSpacing: "0.05rem",
                  marginTop: 2,
                  color: "text.primary",
               }}
            >
               "Your partner in success, connecting you with the best virtual talent"
            </Typography>
            <Box
               sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  marginTop: 3,
                  gap: 2,
               }}
            >
               <Typography
                  variant="body1"
                  component="div"
                  sx={{
                     fontWeight: 400,
                     fontSize: "0.999rem",
                     fontFamily: "Open Sans",
                     letterSpacing: "0.05rem",
                     marginTop: 2,
                     color: "text.primary",
                  }}
               >
                  Get Started Today
               </Typography>

               <Button
                  type="button"
                  variant="contained"
                  sx={{
                     backgroundColor: "primary.main",
                     color: "text.primary",
                     padding: "10px 20px",
                     fontSize: "1rem",
                     fontFamily: "Open Sans",
                  }}
               >
                  Book a Free Consultation
               </Button>
            </Box>
         </Box>
         <Box
            sx={{
               flex: 1,
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
               marginLeft: 4,
               width: "100%",
               height: "100%",
               maxWidth: "400px",
               margin: "0 auto",
            }}
         >
            <img
               alt="Hero Image"
               style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                  marginTop: 85,
               }}
               src="https://www.abroadworks.com/wp-content/uploads/2024/11/hero.webp"
            />
         </Box>
      </Box>
   );
};

export default Heading;
