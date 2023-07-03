import { Container, Typography } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import Loader from "../../Shared/Loader/Loader";
import SportsEventsCard from "../SportsEvents/SportsEventsCard";

const AllSportsEvents = () => {
  // fetch data from database by react query
  const { data: events, isLoading, refetch } = useQuery("event", () =>
    fetch("http://localhost:5000/api/v1/event").then((res) => res.json())
  );

  // loading
  if (isLoading) {
    return <Loader />;
  }
  return (
    <Container maxWidth="lg" sx={{ marginY: "100px" }}>
      <Typography
        component="h6"
        variant="h6"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "24px",
          marginBottom: "40px",
        }}
      >
        Upcoming All Sport Events
      </Typography>

      {/* rendering sports events card */}
      {events.data.map((event) => (
        <SportsEventsCard key={event._id} event={event} />
      ))}
    </Container>
  );
};

export default AllSportsEvents;
