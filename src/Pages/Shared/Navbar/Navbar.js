import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import { Link } from "react-router-dom";

const drawerWidth = 240;
// const navItems = ["Home", "About", "Contact"];

const navItems = [
  {
    name: "Home",
    href: "home",
  },
  {
    name: "About",
    href: "about",
  },
  {
    name: "Contact",
    href: "contact",
  },
];

/* const menuItems = (
  <>
    <li>
      <NavLink className="nav-link" to="/">
        Home
      </NavLink>
    </li>
    <li>
      <NavLink className="nav-link" to="/courses">
        Courses
      </NavLink>
    </li>
    <li>
      <NavLink className="nav-link" to="/semester">
        Semester
      </NavLink>
    </li>
    <li>
      <NavLink className="nav-link" to="/department">
        Department
      </NavLink>
    </li>
    <li>
      <NavLink className="nav-link" to="/about">
        About
      </NavLink>
    </li>
  </>
); */

const Navbar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Scorecard
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <li>
            <Link to={item.href}>{item.name}</Link>
          </li>
          // <ListItem key={item} disablePadding>
          //   <ListItemButton sx={{ textAlign: "center" }}>
          //     <ListItemText primary={item} />
          //   </ListItemButton>
          // </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
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
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Scorecard
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Link to={item.href}>{item.name}</Link>

              // <Button
              //   key={item}
              //   sx={{ color: "#fff", textTransform: "capitalize" }}
              // >
              //   {item}
              // </Button>
            ))}
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
      {/* <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          unde fugit veniam eius, perspiciatis sunt? Corporis qui ducimus
        </Typography>
      </Box> */}
    </Box>
  );
};

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
