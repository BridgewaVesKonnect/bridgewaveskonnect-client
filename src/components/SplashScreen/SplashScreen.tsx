import { env } from "@/src/config";
import { Box, Img } from "@/src/html";

const SplashScreen = () => {
   return (
      <Box
         sx={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#ffffff",
            zIndex: 1300,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: "hidden",
         }}
      >
         <Img
            src={`${env.origin}/static/images/logo.webp`}
            alt="BridgeWaves Konnect"
            style={{
               width: "50px",
               height: "50px",
               display: "block",
               margin: "auto",
            }}
         />
      </Box>
   );
};

export default SplashScreen;
