"use client";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";
import { colors } from "./colors";
const ThemeRepository = ({ children }: { children: React.ReactNode }) => {
   const themeOptions: ThemeOptions = {
      palette: {
         ...colors,
      },
      typography: {
         fontFamily: '"Open Sans", "Raleway", sans-serif',
      },
      mixins: {},
      shape: {},
      breakpoints: {
         keys: ["xs", "sm", "md", "lg", "xl"],
         values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
         unit: "px",
      },
      components: {},
   };

   const theme = createTheme(themeOptions);

   return (
      <ThemeProvider theme={theme}>
         <CssBaseline />
         {children}
      </ThemeProvider>
   );
};

export default ThemeRepository;
