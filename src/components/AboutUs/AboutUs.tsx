import { Box, Typography } from "@/src/html";

const AboutUs = () => {
   return (
      <Box
         id="aboutUs"
         sx={{
            width: "100%",
            height: "100%",
            margin: "0 auto",
            backgroundColor: "background.default",
            padding: "40px",
            boxSizing: "border-box",
         }}
      >
         <Typography
            sx={{
               fontSize: "2.5rem",
               fontWeight: 700,
               textAlign: "center",
               color: "text.hint",
               marginBottom: "20px",
               fontFamily: "Open Sans",
            }}
         >
            About Us
         </Typography>
         <Typography
            variant="body1"
            component="p"
            sx={{
               fontSize: "1.2rem",
               textAlign: "center",
               color: "text.secondary",
               marginBottom: "40px",
               maxWidth: "700px",
               margin: "0 auto",
            }}
         >
            Based in the Philippines, BridgewaVes Konnect Company specializes in providing
            world-class Virtual Assistants to businesses in North America and beyond. We
            combine Filipino professionalism, work ethic, and global business standards to
            give you the best outsourcing experience.
         </Typography>
      </Box>
   );
};

export default AboutUs;
