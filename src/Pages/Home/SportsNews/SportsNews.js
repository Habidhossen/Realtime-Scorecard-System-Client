import { Container, Grid, Typography } from "@mui/material";
import React from "react";

const SportsNews = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        textAlign: "center",
        marginY: "100px",
      }}
    >
      <Typography variant="h6">Latest Sports News</Typography>
      <Grid container rowSpacing={1}>
        <Grid xs={12} md={6} lg={6}></Grid>
        <Grid xs={12} md={6} lg={6}></Grid>
      </Grid>
    </Container>
  );
};

export default SportsNews;
