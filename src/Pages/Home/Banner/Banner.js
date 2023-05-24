import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  const bannerStyles = {
    backgroundImage:
      "url(https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  };

  const bannerTextStyles = {
    color: "white",
    textShadow: "1px 1px #000000",
    maxWidth: "600px",
    margin: "0 auto",
  };

  const bannerButton = {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    backgroundColor: "transparent",
    color: "white",
    border: "white 1.5px solid",
    borderRadius: "30px",
    padding: "12px 28px",
    textDecoration: "none",
  };

  return (
    <Box style={bannerStyles}>
      <Box style={bannerTextStyles}>
        <Typography
          component="h1"
          variant="h1"
          sx={{
            // textAlign: "center",
            fontWeight: "bold",
            fontSize: "60px",
          }}
        >
          Get Live Sports and Updated
        </Typography>
        <Typography variant="subtitle1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
          dignissimos tempora quis dicta exercitationem nihil ipsa impedit
          natus, aut nostrum.
        </Typography>
        <Link to="" style={bannerButton}>
          <PlayCircleIcon /> Watch Live
        </Link>
      </Box>
    </Box>
  );
};

export default Banner;
