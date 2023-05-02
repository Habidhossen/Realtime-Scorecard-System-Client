import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main/Main";
import AdminProfile from "../../pages/Dashboard/AdminProfile/AdminProfile";
import Cricket from "../../pages/Dashboard/Cricket/Cricket";
import Dashboard from "../../pages/Dashboard/Dashboard/Dashboard";
import Events from "../../pages/Dashboard/Events/Events";
import Football from "../../pages/Dashboard/Football/Football";
import LiveStreaming from "../../pages/Dashboard/LiveStreaming/LiveStreaming";
import MakeAdmin from "../../pages/Dashboard/MakeAdmin/MakeAdmin";
import News from "../../pages/Dashboard/News/News";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import DisplayError from "../../pages/Shared/DisplayError/DisplayError";
import Signup from "../../pages/Signup/Signup";

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
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <DisplayError />,
    children: [
      {
        path: "/dashboard",
        element: <h1>Welcome to Dashboard</h1>,
      },
      {
        path: "/dashboard/live-streaming",
        element: <LiveStreaming />,
      },
      {
        path: "/dashboard/cricket",
        element: <Cricket />,
      },
      {
        path: "/dashboard/football",
        element: <Football />,
      },
      {
        path: "/dashboard/news",
        element: <News />,
      },
      {
        path: "/dashboard/events",
        element: <Events />,
      },
      {
        path: "/dashboard/account",
        element: <AdminProfile />,
      },
      {
        path: "/dashboard/make-admin",
        element: <MakeAdmin />,
      },
    ],
  },
]);

export default router;
