import { ThemeProvider } from "@mui/material/styles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./pages/Shared/Navbar/Navbar";
import { theme } from "./theme/theme";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
    },
  ]);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
