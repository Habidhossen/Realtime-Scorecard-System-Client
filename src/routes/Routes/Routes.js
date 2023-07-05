import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main/Main";
import AdminProfile from "../../pages/Dashboard/AdminProfile/AdminProfile";
import Cricket from "../../pages/Dashboard/Cricket/Cricket";
import Dashboard from "../../pages/Dashboard/Dashboard/Dashboard";
import DashboardHome from "../../pages/Dashboard/DashboardHome/DashboardHome";
import Events from "../../pages/Dashboard/Events/Events";
import Football from "../../pages/Dashboard/Football/Football";
import LiveStreaming from "../../pages/Dashboard/LiveStreaming/LiveStreaming";
import MakeAdmin from "../../pages/Dashboard/MakeAdmin/MakeAdmin";
import ManageCricketMatch from "../../pages/Dashboard/ManageCricketMatch/ManageCricketMatch";
import News from "../../pages/Dashboard/News/News";
import AboutPage from "../../pages/Home/AboutPage/AboutPage";
import AllCricketMatches from "../../pages/Home/AllCricketMatches/AllCricketMatches";
import AllSportsEvents from "../../pages/Home/AllSportsEvents/AllSportsEvents";
import AllSportsNews from "../../pages/Home/AllSportsNews/AllSportsNews";
import Home from "../../pages/Home/Home/Home";
import LatestMatchDetails from "../../pages/Home/LatestMatch/LatestMatchDetails";
import SportsNewsDetails from "../../pages/Home/SportsNews/SportsNewsDetails";
import WatchLiveMatch from "../../pages/Home/WatchLiveMatch/WatchLiveMatch";
import Login from "../../pages/Login/Login";
import DisplayError from "../../pages/Shared/DisplayError/DisplayError";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
        path: "/all-sports-news",
        element: <AllSportsNews />,
      },
      {
        path: "/sport-news/:newsId",
        element: <SportsNewsDetails />,
      },
      {
        path: "/latest-match-details",
        element: <LatestMatchDetails />,
      },
      {
        path: "/live-match",
        element: <WatchLiveMatch />,
      },
      {
        path: "/all-sports-events",
        element: <AllSportsEvents />,
      },
      {
        path: "/cricket-matches",
        element: <AllCricketMatches />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    errorElement: <DisplayError />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome />,
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
        path: "/dashboard/manage-cricket-match",
        element: <ManageCricketMatch />,
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
