import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import Loader from "../../Shared/Loader/Loader";
import CricketMatchCard from "../Matches/CricketMatchCard";

const AllCricketMatches = () => {
  // fetch data from database by react query
  const { data: cricketMatches, isLoading, refetch } = useQuery(
    "CricketMatch",
    () =>
      fetch("http://localhost:5000/api/v1/cricket-match").then((res) =>
        res.json()
      )
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
        All Cricket Matches
      </Typography>

      {/* Render Cricket Match Card */}
      <Grid container spacing={2}>
        {cricketMatches.data.map((match) => (
          <CricketMatchCard key={match._id} match={match} />
        ))}
      </Grid>
    </Container>
  );
};

export default AllCricketMatches;
