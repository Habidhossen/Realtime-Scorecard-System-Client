import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import { Box, Button, Container, Paper, Typography } from "@mui/material";
import Lottie from "lottie-react";
import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import liveAnimation from "../../../assets/lotties/live-02.json";
import vsAnimation from "../../../assets/lotties/vs.json";
import Loader from "../../Shared/Loader/Loader";

const LatestMatch = () => {
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
          Recent{" "}
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
            Match
          </Typography>
        </Typography>
      </Box>
      {/* content */}
      <Paper
        elevation={0}
        sx={{
          borderRadius: "10px",
          padding: "30px 40px",
          boxShadow:
            "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid #d1d1d1",
            paddingBottom: "8px",
          }}
        >
          <Box sx={{ display: "flex", gap: "8px" }}>
            {status === "In Progress" && (
              <Lottie animationData={liveAnimation} style={{ width: "40px" }} />
            )}
            <Typography
              component="h6"
              variant="h6"
              sx={{
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              {name}
            </Typography>
          </Box>
          <Box>
            <Typography
              component="p"
              variant="p"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "2px",
                fontSize: "14px",
              }}
            >
              <LocationOnRoundedIcon
                sx={{ fontSize: "16px", color: "#b80f9d" }}
              />{" "}
              {venue} &nbsp;•&nbsp; {date}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "16px",
          }}
        >
          <Box>
            <Typography
              component="h6"
              variant="h6"
              sx={{
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              {battingTeam.name}
            </Typography>
            <Typography
              component="h6"
              variant="h6"
              sx={{
                fontSize: "14px",
              }}
            >
              <Typography
                component="span"
                variant="span"
                sx={{
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                {`${battingTeam.runs}/${battingTeam.wickets}`}
              </Typography>
              {` (${battingTeam.overs} ov)`}
            </Typography>
          </Box>
          <Box>
            <Lottie animationData={vsAnimation} style={{ width: "60px" }} />
          </Box>
          <Box>
            <Typography
              component="h6"
              variant="h6"
              sx={{
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              {bowlingTeam.name}
            </Typography>
            <Typography
              component="h6"
              variant="h6"
              sx={{
                fontSize: "14px",
              }}
            >
              <Typography
                component="span"
                variant="span"
                sx={{
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                {`${bowlingTeam.runs}/${bowlingTeam.wickets}`}
              </Typography>
              {` (${bowlingTeam.overs} ov)`}
            </Typography>
          </Box>
        </Box>

        <Typography
          component="p"
          variant="p"
          sx={{
            fontSize: "13px",
            color: "#b80f9d",
            marginTop: "6px",
            marginBottom: "16px",
          }}
        >
          {status === "In Progress"
            ? `${tossWinner} won the toss and elect to ${tossChoice}`
            : status}
        </Typography>

        <Button
          component={Link}
          to="/latest-match-details"
          size="small"
          variant="contained"
          sx={{
            background: "linear-gradient(45deg, #b80f9d 7.77%, #1b1e5c 95.22%)",
          }}
        >
          Live Score <ArrowRightAltIcon />
        </Button>
      </Paper>
    </Container>
  );
};

export default LatestMatch;
