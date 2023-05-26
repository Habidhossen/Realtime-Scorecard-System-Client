import { Container, Paper, Typography } from "@mui/material";
import React from "react";

const AllSportsEvents = () => {
  return (
    <Container maxWidth="lg" sx={{ marginx: "0px" }}>
      <Typography
        component="h6"
        variant="h6"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "26px",
          marginY: "20px",
        }}
      >
        ALl Sport Events
      </Typography>
      <Paper
        sx={{
          backgroundImage: "linear-gradient(to right, #673AB7, #512DA8)",
          color: "#ffffff",
          borderRadius: "8px",
          paddingY: "60px",
        }}
      >
        <Typography
          component="h6"
          variant="h6"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "34px",
            textTransform: "uppercase",
            marginBottom: "38px",
          }}
        >
          CSE Sports Tournament 2023
        </Typography>
        <Typography
          component="h6"
          variant="h6"
          sx={{
            textAlign: "center",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          20 July 2023 - 20 August 2023
        </Typography>
        <Typography
          component="h6"
          variant="h6"
          sx={{
            textAlign: "center",
            fontSize: "16px",
          }}
        >
          Venue: Bangabandhu Freedom Square
        </Typography>
      </Paper>
    </Container>
  );
};

export default AllSportsEvents;
