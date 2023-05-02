import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes/Routes/Routes";
import { theme } from "./theme/theme";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
