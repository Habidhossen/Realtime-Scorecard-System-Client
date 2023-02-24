import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Banner = () => {
  const bannerStyles = {
    backgroundImage:
      "url(https://preview.colorlib.com/theme/soccer/images/bg_3.jpg.webp)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "calc(100vh - 64px)", // 64px is the height of the AppBar, adjust as needed
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: "64px",
  };

  const bannerTextStyles = {
    color: "white",
    textShadow: "1px 1px #000000",
    maxWidth: "600px",
    margin: "0 auto",
  };

  return (
    <Box style={bannerStyles}>
      <Box style={bannerTextStyles}>
        <Typography variant="h1" component="h1" gutterBottom>
          Get Live Sports and Updated
        </Typography>
        <Typography variant="subtitle1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
          dignissimos tempora quis dicta exercitationem nihil ipsa impedit
          natus, aut nostrum.
        </Typography>
        <Button variant="outlined" size="large" color="primary">
          Watch Live
        </Button>
      </Box>
    </Box>
  );
};

export default Banner;
