import { common, green, red } from "@mui/material/colors";

export const colors = {
   mode: "light" as "light" | "dark",

   primary: {
      main: green[700],
      light: green[300],
      dark: green[700],
      contrastText: green[900],
      contrast: green[900] + "36",
   },

   secondary: {
      main: "#121038",
      light: "#2a2a5a",
      dark: "#0a0a20",
   },

   error: {
      main: red[500],
      light: red[300],
      dark: red[700],
   },

   warning: {
      main: "#ff9800",
      light: "#ffc947",
      dark: "#c66900",
   },

   info: {
      main: "#2196f3",
      light: "#6ec6ff",
      dark: "#0069c0",
   },

   success: {
      main: "#4caf50",
      light: "#80e27e",
      dark: "#087f23",
   },

   background: {
      default: common.white,
      paper: common.white,
      primary: green[800],
      secondary: common.black,
      neutral: "#f5f5f5",
      primaryLight: green[400],
   },

   text: {
      primary: common.white,
      secondary: common.black,
      disabled: "#9e9e9e",
      hint: green[800],
   },

   neutral: {
      main: "rgba(0, 0, 0, 0.23)",
      secondary: "rgba(0, 0, 0, 0.54)",
   },
};
