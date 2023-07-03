import { Container, Paper, Typography } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Loader from "../../Shared/Loader/Loader";

const LatestMatch = () => {
  // scorecard button
  const scorecardButton = {
    display: "inline-flex",
    alignItems: "center",
    gap: "4px",
    fontSize: "14px",
    backgroundColor: "transparent",
    color: "black",
    border: "black 1.5px solid",
    borderRadius: "30px",
    padding: "8px 20px",
    textDecoration: "none",
  };

  // fetch data from database by react query
  const {
    data: currentCricketMatches,
    isLoading,
    refetch,
  } = useQuery("currentCricketMatch", () =>
    fetch("http://localhost:5000/api/v1/latest-cricket-match").then((res) =>
      res.json()
    )
  );

  // loading
  if (isLoading) {
    return <Loader />;
  }

  // destructuring Match Value
  const {
    _id,
    name,
    tossChoice,
    tossWinner,
    totalOver,
    venue,
    date,
    status,
    matchWinner,
    team1,
    team2,
  } = currentCricketMatches.data[0];

  // get Batting Team Name
  const battingTeamName =
    tossChoice === "Bat"
      ? tossWinner
      : tossWinner === team1.name
      ? team2.name
      : team1.name;

  // set Batting and Bowling Team data
  let battingTeam, bowlingTeam;
  if (battingTeamName === team1.name) {
    battingTeam = team1;
    bowlingTeam = team2;
  } else {
    battingTeam = team2;
    bowlingTeam = team1;
  }

  // get Batting and Bowling Team total Wickets
  const battingTeamTotalWickets = battingTeam.players.length - 1;
  const bowlingTeamTotalWickets = bowlingTeam.players.length - 1;

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
        Recent Cricket Matches
      </Typography>
      <Paper
        elevation={0}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "8px",
          paddingY: "50px",
        }}
      >
        <Typography
          component="h6"
          variant="h6"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "18px",
            marginBottom: "4px",
          }}
        >
          {battingTeam.name} vs {bowlingTeam.name}
        </Typography>
        <Typography
          component="p"
          variant="p"
          sx={{
            textAlign: "center",
            fontSize: "14px",
            marginBottom: "14px",
          }}
        >
          {tossWinner} won the toss and elect to {tossChoice}
        </Typography>
        <Typography
          component="h6"
          variant="h6"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "22px",
            marginBottom: "40px",
          }}
        >
          {`${bowlingTeam.name} ${bowlingTeam.runs}/${bowlingTeam.wickets} (${bowlingTeam.overs} overs)`}
        </Typography>
        <Link to="/latest-match-details" style={scorecardButton}>
          Scorecard & more info
        </Link>
      </Paper>
    </Container>
  );
};

export default LatestMatch;
