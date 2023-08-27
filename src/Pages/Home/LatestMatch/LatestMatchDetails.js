import { Box, Container, Paper, Typography } from "@mui/material";
import Lottie from "lottie-react";
import React from "react";
import { useQuery } from "react-query";
import liveAnimation from "../../../assets/lotties/live-02.json";
import ScorecardTable from "../../Dashboard/Cricket/ScorecardTable";
import Loader from "../../Shared/Loader/Loader";

const LatestMatchDetails = () => {
  // fetch data from database by react query
  const {
    data: currentCricketMatches,
    isLoading,
    refetch,
  } = useQuery("currentCricketMatch", () =>
    fetch(
      "https://realtime-cricket-scorecard-server.onrender.com/api/v1/latest-cricket-match"
    ).then((res) => res.json())
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
    <Container sx={{ marginTop: "86px", marginBottom: "26px" }}>
      <Typography
        component="h6"
        variant="h6"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        <Typography
          component="span"
          variant="span"
          sx={{
            background:
              "-webkit-linear-gradient(180deg, #b80f9d 7.77%, #1b1e5c 95.22%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {battingTeam.name} vs {bowlingTeam.name}
        </Typography>{" "}
        Match Details
      </Typography>

      {/* live animation */}
      {status === "In Progress" && (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Lottie animationData={liveAnimation} style={{ width: "40px" }} />
        </Box>
      )}

      <Paper
        elevation={0}
        sx={{
          padding: "18px",
          borderRadius: "18px",
          marginBottom: "20px",
          marginTop: "24px",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            component="h6"
            variant="h6"
            sx={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}
          >
            {battingTeam.name}
          </Typography>
          <Typography
            component="h6"
            variant="h6"
            sx={{ textAlign: "center", fontSize: "15px" }}
          >
            {`(${battingTeam.overs}/${totalOver} ov) `}
            <Typography
              variant="span"
              component="span"
              sx={{ fontSize: "18px", fontWeight: "bold" }}
            >
              {`${battingTeam.runs}-${battingTeam.wickets}`}
            </Typography>
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid #d1d1d1",
            paddingBottom: "10px",
          }}
        >
          <Typography
            component="h6"
            variant="h6"
            sx={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}
          >
            {bowlingTeam.name}
          </Typography>
          <Typography
            component="h6"
            variant="h6"
            sx={{ textAlign: "center", fontSize: "15px" }}
          >
            {`(${bowlingTeam.overs}/${totalOver} ov) `}
            <Typography
              variant="span"
              component="span"
              sx={{ fontSize: "18px", fontWeight: "bold" }}
            >
              {`${bowlingTeam.runs}-${bowlingTeam.wickets}`}
            </Typography>
          </Typography>
        </Box>

        <Typography
          component="p"
          variant="p"
          sx={{
            fontSize: "13px",
            marginTop: "6px",
          }}
        >
          {battingTeam.name} RR:{" "}
          {(battingTeam.runs / battingTeam.overs).toFixed(2)} &nbsp;•&nbsp;{" "}
          {bowlingTeam.name} RR:{" "}
          {(bowlingTeam.runs / bowlingTeam.overs).toFixed(2)}
        </Typography>

        <Typography
          component="p"
          variant="p"
          sx={{
            fontSize: "12px",
            textTransform: "uppercase",
            marginTop: "30px",
            marginBottom: "3px",
          }}
        >
          Match Profile
        </Typography>
        <Typography component="p" variant="p" sx={{ fontSize: "14px" }}>
          <b>Match status:</b> {status}
        </Typography>

        <Typography component="p" variant="p" sx={{ fontSize: "14px" }}>
          <b>Total over:</b> {totalOver} over
        </Typography>

        <Typography component="p" variant="p" sx={{ fontSize: "14px" }}>
          <b>Toss status:</b> {tossWinner} won the toss and elect to{" "}
          {tossChoice}
        </Typography>

        <Typography component="p" variant="p" sx={{ fontSize: "14px" }}>
          <b>Venue:</b> {venue}
        </Typography>

        <Typography component="p" variant="p" sx={{ fontSize: "14px" }}>
          <b>Date and Time:</b> {date}
        </Typography>

        <Typography
          component="p"
          variant="p"
          sx={{
            fontSize: "12px",
            textTransform: "uppercase",
            marginBottom: "3px",
            marginTop: "16px",
          }}
        >
          Team Profile
        </Typography>

        <Typography component="p" variant="p" sx={{ fontSize: "14px" }}>
          <b>Captain:</b> {team1.captain.name} ({team1.name}) &{" "}
          {team2.captain.name} ({team2.name})
        </Typography>

        <Typography component="p" variant="p" sx={{ fontSize: "14px" }}>
          <b>{team1.name} Squad:</b>{" "}
          {team1.players.map(
            (player) => player.name + " (" + player.type + ")" + ", "
          )}
        </Typography>

        <Typography component="p" variant="p" sx={{ fontSize: "14px" }}>
          <b>{team2.name} Squad:</b>{" "}
          {team2.players.map(
            (player) => player.name + " (" + player.type + ")" + ", "
          )}
        </Typography>
      </Paper>
      {/* rendering Scorecard Table */}
      <ScorecardTable bowlingTeam={bowlingTeam} battingTeam={battingTeam} />
    </Container>
  );
};

export default LatestMatchDetails;
