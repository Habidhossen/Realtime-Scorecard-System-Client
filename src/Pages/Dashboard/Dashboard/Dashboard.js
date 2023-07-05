import {
  AdminPanelSettingsRounded,
  ArticleRounded,
  ChevronLeftRounded,
  EmojiEventsRounded,
  GridViewRounded,
  LogoutRounded,
  NotesRounded,
  ScoreboardRounded,
  SmartDisplayRounded,
  SportsCricketRounded,
} from "@mui/icons-material";
import {
  Box,
  Container,
  CssBaseline,
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Toolbar,
  Typography,
} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import MuiDrawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import { signOut } from "firebase/auth";
import * as React from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../../Firebase/Firebase.init";

// Drawer Code
const drawerWidth = 240;
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const Dashboard = () => {
  // handle Side Drawer
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  // handle Active List Button
  const [selectedLink, setSelectedLink] = useState("dashboard");
  const setActive = (link) => {
    setSelectedLink(link);
  };

  // get user info from useAuthState
  const [user] = useAuthState(auth);

  // handle logout
  const logout = () => {
    signOut(auth);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="absolute" color="primary" open={open}>
        <Toolbar
          sx={{
            pr: "24px", // keep right padding when drawer closed
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <NotesRounded />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Admin Dashboard
          </Typography>
          <Box>
            <Typography
              variant="h6"
              component="h6"
              sx={{ fontSize: "14px", fontWeight: "bold", textAlign: "end" }}
            >
              {user.displayName}
            </Typography>
            <Typography
              variant="p"
              component="p"
              sx={{ fontSize: "13px", textAlign: "end" }}
            >
              {user.email}
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1],
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftRounded />
          </IconButton>
        </Toolbar>
        <Divider />

        {/* SIDE BAR */}
        <List component="nav">
          {/* Dashboard-List Routes */}
          <ListItemButton
            component={Link}
            to="/dashboard"
            selected={"dashboard" === selectedLink}
            onClick={() => {
              setActive("dashboard");
            }}
          >
            <ListItemIcon>
              <GridViewRounded />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>

          <ListItemButton
            component={Link}
            to="live-streaming"
            selected={"live-streaming" === selectedLink}
            onClick={() => {
              setActive("live-streaming");
            }}
          >
            <ListItemIcon>
              <SmartDisplayRounded />
            </ListItemIcon>
            <ListItemText primary="Live Streaming" />
          </ListItemButton>

          <ListItemButton
            component={Link}
            to="cricket"
            selected={"cricket" === selectedLink}
            onClick={() => {
              setActive("cricket");
            }}
          >
            <ListItemIcon>
              <SportsCricketRounded />
            </ListItemIcon>
            <ListItemText primary="Live Cricket Match" />
          </ListItemButton>

          <ListItemButton
            component={Link}
            to="manage-cricket-match"
            selected={"manage-cricket-match" === selectedLink}
            onClick={() => {
              setActive("manage-cricket-match");
            }}
          >
            <ListItemIcon>
              <ScoreboardRounded />
            </ListItemIcon>
            <ListItemText primary="Manage Cricket Match" />
          </ListItemButton>

          {/* <ListItemButton
            component={Link}
            to="football"
            selected={"football" === selectedLink}
            onClick={() => {
              setActive("football");
            }}
          >
            <ListItemIcon>
              <SportsSoccerRounded />
            </ListItemIcon>
            <ListItemText primary="Football Match" />
          </ListItemButton> */}

          <ListItemButton
            component={Link}
            to="news"
            selected={"news" === selectedLink}
            onClick={() => {
              setActive("news");
            }}
          >
            <ListItemIcon>
              <ArticleRounded />
            </ListItemIcon>
            <ListItemText primary="Sport News" />
          </ListItemButton>

          <ListItemButton
            component={Link}
            to="events"
            selected={"events" === selectedLink}
            onClick={() => {
              setActive("events");
            }}
          >
            <ListItemIcon>
              <EmojiEventsRounded />
            </ListItemIcon>
            <ListItemText primary="Sport Event" />
          </ListItemButton>

          <Divider sx={{ my: 1 }} />

          {/* List Header */}
          <ListSubheader component="div" inset>
            Others
          </ListSubheader>

          {/* <ListItemButton
            component={Link}
            to="account"
            selected={"account" === selectedLink}
            onClick={() => {
              setActive("account");
            }}
          >
            <ListItemIcon>
              <AccountCircleRounded />
            </ListItemIcon>
            <ListItemText primary="Account" />
          </ListItemButton> */}

          <ListItemButton
            component={Link}
            to="make-admin"
            selected={"make-admin" === selectedLink}
            onClick={() => {
              setActive("make-admin");
            }}
          >
            <ListItemIcon>
              <AdminPanelSettingsRounded />
            </ListItemIcon>
            <ListItemText primary="Manage Admin" />
          </ListItemButton>

          <ListItemButton onClick={logout}>
            <ListItemIcon>
              <LogoutRounded sx={{ color: "red" }} />
            </ListItemIcon>
            <ListItemText primary="Logout" sx={{ color: "red" }} />
          </ListItemButton>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          {/* Dashboard main content here... */}
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard;
