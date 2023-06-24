import { Box } from "@mui/material";
import React from "react";
import { ScaleLoader } from "react-spinners";

const Loader = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="350px"
    >
      <ScaleLoader />
    </Box>
  );
};

export default Loader;
