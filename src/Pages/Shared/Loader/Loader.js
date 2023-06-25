import { Paper, Skeleton } from "@mui/material";
import React from "react";

const Loader = () => {
  return (
    <Paper elevation={0} sx={{ padding: "20px" }}>
      <Skeleton animation="pulse" variant="text" width={400} />
      <Skeleton animation="pulse" variant="text" width={700} />
      <Skeleton animation="pulse" variant="text" />
      <Skeleton animation="pulse" variant="text" />
      <Skeleton
        sx={{ marginTop: "20px" }}
        animation="pulse"
        variant="text"
        width={400}
      />
      <Skeleton animation="pulse" variant="text" width={700} />
      <Skeleton animation="pulse" variant="text" />
      <Skeleton animation="pulse" variant="text" />
      <Skeleton
        sx={{ marginTop: "20px" }}
        animation="pulse"
        variant="text"
        width={400}
      />
      <Skeleton animation="pulse" variant="text" width={700} />
      <Skeleton animation="pulse" variant="text" />
      <Skeleton animation="pulse" variant="text" />
      <Skeleton
        sx={{ marginTop: "20px" }}
        animation="pulse"
        variant="text"
        width={400}
      />
      <Skeleton animation="pulse" variant="text" width={700} />
      <Skeleton animation="pulse" variant="text" />
      <Skeleton animation="pulse" variant="text" />
    </Paper>
  );
};

export default Loader;
