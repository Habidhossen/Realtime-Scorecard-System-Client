import { Button, Chip, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const CurrentMatch = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h6">Live Match</Typography>
      <Box my={3} sx={{ display: "flex", alignItems: "center" }}>
        <Typography variant="h4">Team A</Typography>
        <Chip
          label="VS"
          color="primary"
          size="small"
          sx={{ marginX: "20px" }}
        />
        <Typography variant="h4">Team B</Typography>
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography variant="body1">CSE Sports</Typography>
        <Typography variant="body1">1 Jan 2024, 7:00 PM</Typography>
        <Typography variant="body1">XYZ Stadium</Typography>
      </Box>
      <Box my={3}>
        <Button variant="contained" color="primary">
          Watch Live
        </Button>
      </Box>
    </Container>
  );
};

export default CurrentMatch;
