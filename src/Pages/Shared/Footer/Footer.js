import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Box sx={{ backgroundColor: "#ffffff", paddingY: "24px" }}>
      <Typography
        component="p"
        variant="p"
        align="center"
        sx={{ fontSize: "13px", marginBottom: "4px" }}
      >
        Copyright © {year} Habid Hossen. All rights reserved.
      </Typography>
      <Typography
        component="p"
        variant="p"
        align="center"
        sx={{ fontSize: "13px", fontWeight: "600" }}
      >
        A Real-time Scorecard System
      </Typography>
    </Box>
  );
};

export default Footer;
