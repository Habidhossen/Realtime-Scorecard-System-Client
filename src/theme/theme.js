import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  // color palette customization
  palette: {
    primary: {
      main: "#8067f0",
    },
    secondary: {
      main: "#f52225",
    },
    custom: {
      red: "#f52225",
      green: "#1cbe59",
      purple: "#8067f0",
    },
  },

  // font customization
  typography: {
    fontFamily: "Source Sans Pro, sans-serif",
  },
});
