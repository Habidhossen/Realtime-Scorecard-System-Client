import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  const bannerStyles = {
    backgroundImage:
      "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://i.ibb.co/wsnVPg8/cricket-scorecard-banner.png)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100vh",
    minHeight: "600px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "20px",
  };

  const bannerTextStyles = {
    color: "white",
    maxWidth: "600px",
    marginTop: "60px",
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
            fontWeight: "bold",
            fontSize: "60px",
          }}
        >
          Get{" "}
          <Typography
            component="span"
            variant="span"
            sx={{
              background:
                "-webkit-linear-gradient(102.55deg, #85f8c1 20.86%, #078a5b 92.2%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Live Sports
          </Typography>{" "}
          and Updates
        </Typography>
        <Typography variant="subtitle1" marginTop={2} marginBottom={2}>
          Stay up-to-date with live scores, match schedules, and exciting sports
          events. Discover the latest news and immerse yourself in the world of
          university sports. Experience the thrill of real-time updates and
          embrace the camaraderie of university sports. Don't miss a moment - be
          a part of our University Real-time Scorecard System today!
        </Typography>
        <Link to="" style={bannerButton}>
          <PlayCircleIcon /> Watch Live
        </Link>
      </Box>
    </Box>
  );
};

export default Banner;
