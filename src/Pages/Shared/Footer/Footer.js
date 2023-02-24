import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Box my={3}>
      <Typography component="p" align="center">
        Copyright © {year} Habid Hossen. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
