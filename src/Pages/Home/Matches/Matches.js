import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Loader from "../../Shared/Loader/Loader";
import CricketMatchCard from "./CricketMatchCard";

const Matches = () => {
  // fetch data from database by react query
  const { data: cricketMatches, isLoading, refetch } = useQuery(
    "CricketMatch",
    () =>
      fetch(
        "https://realtime-cricket-scorecard-server.onrender.com/api/v1/cricket-match"
      ).then((res) => res.json())
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
          All{" "}
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
            Cricket Matches
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
            to="cricket-matches"
            size="small"
            color="primary"
          >
            More Matches <ArrowRightAltIcon />
          </Button>
        </Box>
      </Box>

      {/* Render Cricket Match Card */}
      <Grid container spacing={2}>
        {cricketMatches.data
          .map((match) => <CricketMatchCard key={match._id} match={match} />)
          .reverse()
          .slice(0, 3)}
      </Grid>
    </Container>
  );
};

export default Matches;
