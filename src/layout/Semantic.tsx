import { AppBar, Box, Drawer, Img, Link, Toolbar, Typography } from "@/src/html";
import { State } from "@/src/state/store/store";
import { Close, Menu } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import { usePathname } from "next/navigation";
import { SyntheticEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Semantic = ({ children }: { children: React.ReactNode }) => {
   const pathname = usePathname();
   const navLinks = [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Contact Us", href: "/contact-us" },
      { name: "Career", href: "/career" },
   ];
   const [navTheme, setNavTheme] = useState("#fff");

   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const { scrollEvents } = useSelector((state: State) => state.ui);

   useEffect(() => {
      if (pathname === "/career") {
         setNavTheme("#388e3c");
         return;
      }
      const headingRef = document.querySelector("#heading");
      if (headingRef) {
         const rect = headingRef.getBoundingClientRect();
         if (rect.bottom <= 15 && navTheme === "#fff") {
            setNavTheme("#388e3c");
         } else if (rect.bottom > 15 && navTheme === "#388e3c") {
            setNavTheme("#fff");
         }
      }
   }, [scrollEvents, pathname, navTheme]);

   const onClickLinks = (event: SyntheticEvent, links: string) => {
      const onSlide = ["/contact-us", "/about"];
      if (onSlide.includes(links)) {
         event.preventDefault();

         if (links === "/about") {
            const aboutUs = document.getElementById("aboutUs") as HTMLDivElement;
            if (aboutUs) {
               aboutUs.scrollIntoView({ behavior: "smooth", block: "center" });
            }
         }

         if (links === "/contact-us") {
            const contactUs = document.getElementById("footer") as HTMLDivElement;
            if (contactUs) {
               contactUs.scrollIntoView({ behavior: "smooth", block: "center" });
            }
         }
      }
   };

   const onClickMenu = (event: SyntheticEvent) => {
      event.preventDefault();
      setIsMenuOpen(!isMenuOpen);
   };

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
                  <Box
                     sx={{
                        display: "flex",
                        alignItems: "start",
                        gap: 2,
                     }}
                  >
                     <Box
                        sx={{
                           display: "flex",
                           alignItems: "center",
                           gap: 2,
                           maxWidth: 55,
                           maxHeight: 55,
                           overflow: "hidden",
                        }}
                     >
                        <Img
                           alt="Bridgewaves Konnect"
                           style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "contain",
                           }}
                           src={`https://bridgewaveskonnect.com/static/images/logo.webp`}
                        />
                     </Box>
                     <Box
                        sx={{
                           display: "flex",
                           flexDirection: "column",
                           justifyContent: "center",
                        }}
                     >
                        <Typography
                           variant="h6"
                           component="div"
                           sx={{
                              display: {
                                 xs: "none",
                                 sm: "none",
                                 md: "block",
                              },
                              fontFamily: "Raleway",
                              fontWeight: 600,
                              fontSize: "1.5rem",
                              color: "#b89425",
                           }}
                        >
                           BridgewaVes Konnect
                        </Typography>
                        <Typography
                           variant="h6"
                           component="div"
                           sx={{
                              display: {
                                 xs: "none",
                                 sm: "none",
                                 md: "block",
                              },
                              fontFamily: "Raleway",
                              fontWeight: 300,
                              fontSize: "0.9rem",
                              color: navTheme,
                           }}
                        >
                           Bridging gaps, Empowering growth.
                        </Typography>
                     </Box>
                  </Box>
                  <Box
                     sx={{
                        display: {
                           xs: "none",
                           sm: "none",
                           md: "flex",
                        },
                        gap: 6,
                     }}
                  >
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
                           onClick={(event) => onClickLinks(event, link.href)}
                        >
                           {link.name}
                        </Link>
                     ))}
                  </Box>
                  <IconButton
                     sx={{
                        display: {
                           xs: "block",
                           sm: "block",
                           md: "none",
                        },
                     }}
                     onClick={onClickMenu}
                  >
                     <Menu
                        fontSize="medium"
                        sx={{
                           color: navTheme,
                        }}
                     />
                  </IconButton>
               </Box>
            </Toolbar>
         </AppBar>
         <Drawer
            open={isMenuOpen}
            onClose={onClickMenu}
            variant="temporary"
            anchor="right"
            role="presentation"
            sx={{
               "width": 260,
               "flexShrink": 0,
               "& .MuiDrawer-paper": {
                  width: 260,
                  boxSizing: "border-box",
               },
            }}
         >
            <Box sx={{ overflow: "auto" }}>
               <Box
                  sx={{
                     display: "flex",
                     justifyContent: "space-between",
                     width: "100%",
                     padding: "10px",
                     boxSizing: "border-box",
                     alignItems: "center",
                     borderBottom: "1px solid #ccc",
                  }}
               >
                  <Box
                     sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "start",
                     }}
                  >
                     <Typography
                        variant="h6"
                        component="div"
                        sx={{
                           fontFamily: "Raleway",
                           fontWeight: 600,
                           fontSize: "0.9rem",
                           color: "#b89425",
                        }}
                     >
                        BridgewaVes Konnect
                     </Typography>
                     <Typography
                        variant="h6"
                        component="div"
                        sx={{
                           fontFamily: "Raleway",
                           fontWeight: 300,
                           fontSize: "0.7rem",
                           color: "text.secondary",
                        }}
                     >
                        Bridging gaps, Empowering growth.
                     </Typography>
                  </Box>
                  <IconButton onClick={onClickMenu}>
                     <Close
                        fontSize="medium"
                        sx={{
                           color: "#000",
                        }}
                     />
                  </IconButton>
               </Box>
               {navLinks.map((link, index) => (
                  <Link
                     key={index}
                     href={link.href}
                     style={{
                        textDecoration: "none",
                        display: "block",
                        width: "100%",
                        boxSizing: "border-box",
                        padding: "10px 20px",
                        borderBottom: "1px solid #ccc",
                     }}
                     onClick={(event) => {
                        onClickLinks(event, link.href);
                        setIsMenuOpen(false);
                     }}
                  >
                     <Typography
                        variant="h6"
                        component="div"
                        sx={{
                           fontFamily: "Open Sans",
                           fontWeight: 500,
                           fontSize: "1rem",
                           color: "text.secondary",
                        }}
                     >
                        {link.name}
                     </Typography>
                  </Link>
               ))}
            </Box>
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
