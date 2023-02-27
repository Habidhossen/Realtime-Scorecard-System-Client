import {
  AccountCircleRounded,
  AdminPanelSettingsRounded,
  ArticleRounded,
  ChevronLeftRounded,
  EmojiEventsRounded,
  GridViewRounded,
  LogoutRounded,
  NotesRounded,
  SmartDisplayRounded,
  SportsCricketRounded,
  SportsSoccerRounded,
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
import * as React from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

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
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="absolute" color="secondary" open={open}>
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
          <h4>Profile</h4>
          {/* <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton> */}
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
          <ListItemButton component={Link} to="/dashboard">
            <ListItemIcon>
              <GridViewRounded />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>

          <ListItemButton component={Link} to="live-streaming">
            <ListItemIcon>
              <SmartDisplayRounded />
            </ListItemIcon>
            <ListItemText primary="Live Streaming" />
          </ListItemButton>

          <ListItemButton component={Link} to="cricket">
            <ListItemIcon>
              <SportsCricketRounded />
            </ListItemIcon>
            <ListItemText primary="Cricket Match" />
          </ListItemButton>

          <ListItemButton component={Link} to="football">
            <ListItemIcon>
              <SportsSoccerRounded />
            </ListItemIcon>
            <ListItemText primary="Football Match" />
          </ListItemButton>

          <ListItemButton component={Link} to="add-news">
            <ListItemIcon>
              <ArticleRounded />
            </ListItemIcon>
            <ListItemText primary="Sports News" />
          </ListItemButton>

          <ListItemButton component={Link} to="create-event">
            <ListItemIcon>
              <EmojiEventsRounded />
            </ListItemIcon>
            <ListItemText primary="Sports Event" />
          </ListItemButton>

          <Divider sx={{ my: 1 }} />

          {/* List Header */}
          <ListSubheader component="div" inset>
            Others
          </ListSubheader>

          <ListItemButton component={Link} to="account">
            <ListItemIcon>
              <AccountCircleRounded />
            </ListItemIcon>
            <ListItemText primary="Account" />
          </ListItemButton>

          <ListItemButton component={Link} to="make-admin">
            <ListItemIcon>
              <AdminPanelSettingsRounded />
            </ListItemIcon>
            <ListItemText primary="Make Admin" />
          </ListItemButton>

          <ListItemButton component={Link} to="logout">
            <ListItemIcon>
              <LogoutRounded />
            </ListItemIcon>
            <ListItemText primary="Logout" />
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
