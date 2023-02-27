import { Button, Container, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const DisplayError = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <Typography variant="h1">404</Typography>
      <Typography variant="h5" style={{ marginTop: "16px" }}>
        Page not found
      </Typography>
      <Typography variant="body1" style={{ marginTop: "16px" }}>
        The page you are looking for might have been removed or is temporarily
        unavailable.
      </Typography>
      <Button
        component={Link}
        to="/"
        variant="contained"
        color="primary"
        style={{ marginTop: "16px" }}
      >
        Go to Home
      </Button>
    </Container>
  );
};

export default DisplayError;
