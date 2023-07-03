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

      {/* rendering sports events card */}
      {events.data
        .map((event) => <SportsEventsCard key={event._id} event={event} />)
        .slice(0, 1)}

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
