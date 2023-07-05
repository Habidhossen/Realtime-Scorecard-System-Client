import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Loader from "../../Shared/Loader/Loader";
import SportsEventsCard from "./SportsEventsCard";

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
    <Container maxWidth="lg" sx={{ marginY: "90px" }}>
      {/* Comp Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "30px",
        }}
      >
        <Typography
          component="h6"
          variant="h6"
          sx={{
            fontWeight: "bold",
            fontSize: "24px",
          }}
        >
          Upcoming{" "}
          <Typography
            component="span"
            variant="span"
            sx={{
              background:
                "-webkit-linear-gradient(45deg, #b80f9d 7.77%, #1b1e5c 95.22%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Sport Events
          </Typography>
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            sx={{
              fontWeight: "bold",
              fontSize: "15px",
              textTransform: "capitalize",
              background:
                "-webkit-linear-gradient(45deg, #b80f9d 7.77%, #1b1e5c 95.22%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            component={Link}
            to="all-sports-events"
            size="small"
            color="primary"
          >
            See more Events <ArrowRightAltIcon />
          </Button>
        </Box>
      </Box>

      {/* rendering sports events card */}
      {events.data
        .map((event) => <SportsEventsCard key={event._id} event={event} />)
        .slice(0, 1)}
    </Container>
  );
};

export default SportsEvents;
