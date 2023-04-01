import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  // color palette customization
  palette: {
    primary: {
      main: "#120942",
    },
    secondary: {
      main: "#416a59",
    },
    accent: {
      main: "#943d24",
    },
    heading: {
      main: "#0f172a",
    },
    text: {
      main: "#555264",
    },
    white: {
      main: "#ffffff",
    },
  },

  // font customization
  typography: {
    fontFamily: "Source Sans Pro, sans-serif",
  },
});
