import MenuIcon from "@mui/icons-material/Menu";
import { Button, ListItem, ListItemButton, ListItemText } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link } from "react-router-dom";

const drawerWidth = 240;
// const navItems = ["Home", "About", "Contact"];

const navItems = [
  {
    name: "Home",
    href: "",
  },
  {
    name: "Watch Live",
    href: "live-match",
  },
  {
    name: "Match Schedule",
    href: "match-schedule",
  },
  {
    name: "Sports News",
    href: "all-sports-news",
  },
  {
    name: "Sports Events",
    href: "all-sports-events",
  },
  {
    name: "About",
    href: "about",
  },
];

const Navbar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        component="h6"
        variant="h6"
        sx={{ my: 2, fontSize: "16px", fontWeight: "bold" }}
      >
        Scorecard
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              component={Link}
              to={item.href}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Button variant="outlined" color="secondary" component={Link} to="/login">
        Login
      </Button>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" elevation={0} color="white">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              fontSize: "20px",
              fontWeight: "bold",
              color: "#000000",
              textDecoration: "none",
            }}
          >
            Scorecard
          </Typography>
          {/* <Box
            component={Link}
            to="/h"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Scorecard
          </Box> */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item, index) => (
              <Button
                key={index}
                component={Link}
                to={item.href}
                sx={{ color: "#000", textTransform: "capitalize" }}
              >
                {item.name}
              </Button>
            ))}
            <Button
              variant="outlined"
              color="secondary"
              size="medium"
              component={Link}
              to="/login"
            >
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Navbar;
