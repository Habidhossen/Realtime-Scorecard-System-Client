import { ThemeProvider } from "@mui/material/styles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./Layouts/Main/Main";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login";
import DisplayError from "./pages/Shared/DisplayError/DisplayError";
import Signup from "./pages/Signup/Signup";
import { theme } from "./theme/theme";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <DisplayError />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
      ],
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
