import { Box, Button, Chip, Container, Grid, Typography } from "@mui/material";
import React from "react";

const UpcomingMatch = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        textAlign: "center",
        marginY: "100px",
      }}
    >
      <Typography variant="h6">Upcoming Match</Typography>
      <Grid container rowSpacing={1}>
        <Grid xs={12} md={6} lg={6}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Box display="flex" alignItems="center" my={3}>
              <Typography variant="h4">Team A</Typography>
              <Chip
                label="VS"
                color="secondary"
                size="small"
                sx={{ marginX: "20px" }}
              />
              <Typography variant="h4">Team B</Typography>
            </Box>
            <Box textAlign="center">
              <Typography variant="body1">CSE Sports</Typography>
              <Typography variant="body1">1 Jan 2024, 7:00 PM</Typography>
              <Typography variant="body1">XYZ Stadium</Typography>
            </Box>
            <Box my={3}>
              <Button variant="contained" color="secondary">
                More Info
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid xs={12} md={6} lg={6}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Box display="flex" alignItems="center" my={3}>
              <Typography variant="h4">Team C</Typography>
              <Chip
                label="VS"
                color="secondary"
                size="small"
                sx={{ marginX: "20px" }}
              />
              <Typography variant="h4">Team D</Typography>
            </Box>
            <Box textAlign="center">
              <Typography variant="body1">CSE Sports</Typography>
              <Typography variant="body1">1 Jan 2024, 7:00 PM</Typography>
              <Typography variant="body1">XYZ Stadium</Typography>
            </Box>
            <Box my={3}>
              <Button variant="contained" color="secondary">
                More Info
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UpcomingMatch;
