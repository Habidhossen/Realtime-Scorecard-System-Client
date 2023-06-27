import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Box, Button, Container, Paper, Typography } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Loader from "../../Shared/Loader/Loader";

const SportsEvents = () => {
  // fetch data from database by react query
  const { data: events, isLoading, refetch } = useQuery("event", () =>
    fetch("http://localhost:5000/api/v1/event").then((res) => res.json())
  );

  // loading
  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container maxWidth="lg" sx={{ marginTop: "70px" }}>
      <Typography
        component="h6"
        variant="h6"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "24px",
          marginY: "20px",
        }}
      >
        Upcoming Sport Events
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

      {/* footer button */}
      <Box
        sx={{ display: "flex", justifyContent: "flex-end", marginTop: "10px" }}
      >
        <Button
          sx={{
            fontWeight: "bold",
            fontSize: "15px",
            textTransform: "capitalize",
          }}
          component={Link}
          to="all-sports-events"
          size="small"
          color="primary"
        >
          See more Events <ArrowRightAltIcon />
        </Button>
      </Box>
    </Container>
  );
};

export default SportsEvents;
