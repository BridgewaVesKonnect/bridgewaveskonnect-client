import { Box, Button, Typography } from "@/src/html";
import { forwardRef, SyntheticEvent } from "react";
const Heading = forwardRef<HTMLDivElement, {}>((_, ref) => {
   const bookConsultationHandler = (event: SyntheticEvent) => {
      event.preventDefault();
      // const bookConsultationSection = document.getElementById(
      //    "bookConsultation",
      // ) as HTMLDivElement;
      // if (bookConsultationSection) {
      //    bookConsultationSection.scrollIntoView({ behavior: "smooth", block: "center" });
      // }
   };
   return (
      <Box
         id="heading"
         sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: {
               xs: "column",
               sm: "column",
               md: "row",
            },
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
               justifyContent: {
                  xm: "center",
                  sm: "center",
                  md: "start",
               },
               alignItems: {
                  xm: "center",
                  sm: "center",
                  md: "start",
               },
               width: "100%",
               height: "100%",
               maxWidth: {
                  md: "700px",
               },
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
                  textAlign: {
                     xs: "center",
                     sm: "center",
                     md: "left",
                  },
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
                  textAlign: {
                     xs: "center",
                     sm: "center",
                     md: "left",
                  },
               }}
            >
               "Your partner in success, connecting you with the best virtual talent"
            </Typography>
            <Box
               sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: {
                     xs: "center",
                     sm: "center",
                     md: "start",
                  },
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
                     textAlign: {
                        xs: "center",
                        sm: "center",
                        md: "left",
                     },
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
                  onClick={bookConsultationHandler}
               >
                  Book a Free Consultation
               </Button>
            </Box>
         </Box>
         <Box
            sx={{
               flex: 1,
               display: {
                  xs: "none",
                  sm: "none",
                  md: "flex",
               },
               justifyContent: "center",
               alignItems: "center",
               marginLeft: 4,
               width: "100%",
               height: "100%",
               maxWidth: "700px",
               margin: "0 auto",
            }}
         >
            <img
               alt="Hero Image"
               style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  marginTop: 85,
                  opacity: 0.5,
               }}
               src="http://localhost:3000//static/images/heading.jpg"
            />
         </Box>
      </Box>
   );
});

export default Heading;
