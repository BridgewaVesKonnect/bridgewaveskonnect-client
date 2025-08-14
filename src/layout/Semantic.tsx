import { AppBar, Box, Drawer, Link, Toolbar, Typography } from "@/src/html";
import { useEffect, useState } from "react";

const Semantic = ({
   children,
   data,
}: {
   children: React.ReactNode;
   data: Record<string, React.RefObject<HTMLDivElement | null>>;
}) => {
   const navLinks = [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Carrer", href: "/carrer" },
   ];
   const [navTheme, setNavTheme] = useState("#fff");

   const scrollEventHandler: () => void = () => {
      const headingRef = data.headingRef?.current;
      if (headingRef) {
         const rect = headingRef.getBoundingClientRect();
         if (rect.bottom <= 15 && navTheme === "#fff") {
            setNavTheme("#000");
         } else {
            setNavTheme("#fff");
         }
      }
   };

   const eventsHandlers = {
      scroll: scrollEventHandler,
      resize: () => {
         console.log("Resize event triggered");
      },
   };

   useEffect(() => {
      Object.keys(eventsHandlers).forEach((event) => {
         window.addEventListener(
            event,
            eventsHandlers[event as keyof typeof eventsHandlers],
         );
      });

      return () => {
         Object.keys(eventsHandlers).forEach((event) => {
            window.removeEventListener(
               event,
               eventsHandlers[event as keyof typeof eventsHandlers],
            );
         });
      };
   }, []);

   return (
      <Box>
         <AppBar position="fixed" component={"div"}>
            <Toolbar>
               <Box
                  sx={{
                     display: "flex",
                     alignItems: "center",
                     justifyContent: "space-between",
                     width: "100%",
                     flexWrap: "wrap",
                  }}
               >
                  <Box>
                     <Typography
                        variant="h6"
                        component="div"
                        sx={{
                           fontWeight: "bold",
                           fontSize: "1.5rem",
                           fontFamily: "Raleway",
                           letterSpacing: "0.1rem",
                           textTransform: "uppercase",
                           color: navTheme,
                           transition: "color 0.3s ease-in-out",
                        }}
                     >
                        bridgewaveskonnect
                     </Typography>
                  </Box>
                  <Box sx={{ display: "flex", gap: 6 }}>
                     {navLinks.map((link, index) => (
                        <Link
                           key={index}
                           href={link.href}
                           style={{
                              textDecoration: "none",
                              color: navTheme,
                              fontFamily: "Raleway",
                              fontWeight: 500,
                              fontSize: "1.2rem",
                              letterSpacing: "0.05rem",
                              transition: "color 0.3s ease-in-out",
                           }}
                        >
                           {link.name}
                        </Link>
                     ))}
                  </Box>
               </Box>
            </Toolbar>
         </AppBar>
         <Drawer
            variant="permanent"
            anchor="right"
            sx={{
               "display": "none",
               "width": 240,
               "flexShrink": 0,
               "& .MuiDrawer-paper": {
                  width: 240,
                  boxSizing: "border-box",
               },
            }}
            open={false}
         >
            <Toolbar />
            <Box sx={{ overflow: "auto" }}>{/* Add your navigation items here */}</Box>
         </Drawer>
         <Box
            component="main"
            sx={{
               boxSizing: "border-box",
            }}
         >
            {children}
         </Box>
      </Box>
   );
};

export default Semantic;
