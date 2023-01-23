import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  // color palette customization
  palette: {
    primary: {
      main: "#f52225",
    },
    secondary: {
      main: "#8067f0",
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
