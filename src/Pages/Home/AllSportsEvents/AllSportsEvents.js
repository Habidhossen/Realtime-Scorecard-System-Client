import { Container, Grid, Typography } from "@mui/material";
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
    <Container maxWidth="lg" sx={{ marginY: "90px" }}>
      <Typography
        component="h6"
        variant="h6"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "24px",
          marginBottom: "30px",
          background:
            "-webkit-linear-gradient(45deg, #b80f9d 7.77%, #1b1e5c 95.22%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        All Sport Events
      </Typography>

      <Grid container spacing={4}>
        {events.data
          .map((event) => <SportsEventsCard key={event._id} event={event} />)
          .reverse()}
      </Grid>
    </Container>
  );
};

export default AllSportsEvents;
