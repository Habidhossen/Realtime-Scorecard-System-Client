import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import Loader from "../../Shared/Loader/Loader";
import ScoreUpdateFormA from "./ScoreUpdateFormA";
import ScoreUpdateFormB from "./ScoreUpdateFormB";
import ScorecardTable from "./ScorecardTable";

const Cricket = () => {
  // modal state
  const [open, setOpen] = useState(false);

  // modal open
  const handleClickOpen = () => {
    setOpen(true);
  };
  // modal close
  const handleClose = () => {
    setOpen(false);
  };

  // handle react-hook-form
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    // formatted Date and Time
    const formattedDateTime = new Date(data.date).toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
    // create a modified MatchData object
    const matchData = {
      name: `${data.teamA} vs ${data.teamB} Cricket Match`,
      tossChoice: data.tossChoice,
      tossWinner: data.tossWinner === "teamA" ? data.teamA : data.teamB,
      totalOver: data.totalOver,
      venue: data.venue,
      date: formattedDateTime,
      status: "In Progress", // Replace with the actual result
      matchWinner: "", // Replace with the actual match winner
      team1: {
        name: data.teamA,
        captain: {
          name: data.teamACaptainName,
          type: data.teamACaptainType,
        },
        players: [],
        overs: 0,
        wickets: 0,
        runs: 0,
        balls: 0,
      },
      team2: {
        name: data.teamB,
        captain: {
          name: data.teamBCaptainName,
          type: data.teamBCaptainType,
        },
        players: [],
        overs: 0,
        wickets: 0,
        runs: 0,
        balls: 0,
      },
    };
    // team A player object declare
    const teamAPlayers = [
      {
        name: data.teamACaptainName,
        type: data.teamACaptainType,
        runsScored: 0,
        ballsFaced: 0,
        fours: 0,
        sixes: 0,
        dismissals: "Not Out",
        wicketsTaken: 0,
        ballsBowled: 0,
        runsConceded: 0,
        economyRate: 0,
        strikeRate: 0,
        wideBalls: 0,
        noBalls: 0,
      },
      {
        name: data.teamAPlayerName1,
        type: data.teamAPlayerType1,
        runsScored: 0,
        ballsFaced: 0,
        fours: 0,
        sixes: 0,
        dismissals: "Not Out",
        wicketsTaken: 0,
        ballsBowled: 0,
        runsConceded: 0,
        economyRate: 0,
        strikeRate: 0,
        wideBalls: 0,
        noBalls: 0,
      },
      {
        name: data.teamAPlayerName2,
        type: data.teamAPlayerType2,
        runsScored: 0,
        ballsFaced: 0,
        fours: 0,
        sixes: 0,
        dismissals: "Not Out",
        wicketsTaken: 0,
        ballsBowled: 0,
        runsConceded: 0,
        economyRate: 0,
        strikeRate: 0,
        wideBalls: 0,
        noBalls: 0,
      },
      {
        name: data.teamAPlayerName3,
        type: data.teamAPlayerType3,
        runsScored: 0,
        ballsFaced: 0,
        fours: 0,
        sixes: 0,
        dismissals: "Not Out",
        wicketsTaken: 0,
        ballsBowled: 0,
        runsConceded: 0,
        economyRate: 0,
        strikeRate: 0,
        wideBalls: 0,
        noBalls: 0,
      },
      {
        name: data.teamAPlayerName4,
        type: data.teamAPlayerType4,
        runsScored: 0,
        ballsFaced: 0,
        fours: 0,
        sixes: 0,
        dismissals: "Not Out",
        wicketsTaken: 0,
        ballsBowled: 0,
        runsConceded: 0,
        economyRate: 0,
        strikeRate: 0,
        wideBalls: 0,
        noBalls: 0,
      },
      {
        name: data.teamAPlayerName5,
        type: data.teamAPlayerType5,
        runsScored: 0,
        ballsFaced: 0,
        fours: 0,
        sixes: 0,
        dismissals: "Not Out",
        wicketsTaken: 0,
        ballsBowled: 0,
        runsConceded: 0,
        economyRate: 0,
        strikeRate: 0,
        wideBalls: 0,
        noBalls: 0,
      },
      {
        name: data.teamAPlayerName6,
        type: data.teamAPlayerType6,
        runsScored: 0,
        ballsFaced: 0,
        fours: 0,
        sixes: 0,
        dismissals: "Not Out",
        wicketsTaken: 0,
        ballsBowled: 0,
        runsConceded: 0,
        economyRate: 0,
        strikeRate: 0,
        wideBalls: 0,
        noBalls: 0,
      },
      {
        name: data.teamAPlayerName7,
        type: data.teamAPlayerType7,
        runsScored: 0,
        ballsFaced: 0,
        fours: 0,
        sixes: 0,
        dismissals: "Not Out",
        wicketsTaken: 0,
        ballsBowled: 0,
        runsConceded: 0,
        economyRate: 0,
        strikeRate: 0,
        wideBalls: 0,
        noBalls: 0,
      },
      {
        name: data.teamAPlayerName8,
        type: data.teamAPlayerType8,
        runsScored: 0,
        ballsFaced: 0,
        fours: 0,
        sixes: 0,
        dismissals: "Not Out",
        wicketsTaken: 0,
        ballsBowled: 0,
        runsConceded: 0,
        economyRate: 0,
        strikeRate: 0,
        wideBalls: 0,
        noBalls: 0,
      },
      {
        name: data.teamAPlayerName9,
        type: data.teamAPlayerType9,
        runsScored: 0,
        ballsFaced: 0,
        fours: 0,
        sixes: 0,
        dismissals: "Not Out",
        wicketsTaken: 0,
        ballsBowled: 0,
        runsConceded: 0,
        economyRate: 0,
        strikeRate: 0,
        wideBalls: 0,
        noBalls: 0,
      },
      {
        name: data.teamAPlayerName10,
        type: data.teamAPlayerType10,
        runsScored: 0,
        ballsFaced: 0,
        fours: 0,
        sixes: 0,
        dismissals: "Not Out",
        wicketsTaken: 0,
        ballsBowled: 0,
        runsConceded: 0,
        economyRate: 0,
        strikeRate: 0,
        wideBalls: 0,
        noBalls: 0,
      },
    ];
    // team B player object declare
    const teamBPlayers = [
      {
        name: data.teamBCaptainName,
        type: data.teamBCaptainType,
        runsScored: 0,
        ballsFaced: 0,
        fours: 0,
        sixes: 0,
        dismissals: "Not Out",
        wicketsTaken: 0,
        ballsBowled: 0,
        runsConceded: 0,
        economyRate: 0,
        strikeRate: 0,
        wideBalls: 0,
        noBalls: 0,
      },
      {
        name: data.teamBPlayerName1,
        type: data.teamBPlayerType1,
        runsScored: 0,
        ballsFaced: 0,
        fours: 0,
        sixes: 0,
        dismissals: "Not Out",
        wicketsTaken: 0,
        ballsBowled: 0,
        runsConceded: 0,
        economyRate: 0,
        strikeRate: 0,
        wideBalls: 0,
        noBalls: 0,
      },
      {
        name: data.teamBPlayerName2,
        type: data.teamBPlayerType2,
        runsScored: 0,
        ballsFaced: 0,
        fours: 0,
        sixes: 0,
        dismissals: "Not Out",
        wicketsTaken: 0,
        ballsBowled: 0,
        runsConceded: 0,
        economyRate: 0,
        strikeRate: 0,
        wideBalls: 0,
        noBalls: 0,
      },
      {
        name: data.teamBPlayerName3,
        type: data.teamBPlayerType3,
        runsScored: 0,
        ballsFaced: 0,
        fours: 0,
        sixes: 0,
        dismissals: "Not Out",
        wicketsTaken: 0,
        ballsBowled: 0,
        runsConceded: 0,
        economyRate: 0,
        strikeRate: 0,
        wideBalls: 0,
        noBalls: 0,
      },
      {
        name: data.teamBPlayerName4,
        type: data.teamBPlayerType4,
        runsScored: 0,
        ballsFaced: 0,
        fours: 0,
        sixes: 0,
        dismissals: "Not Out",
        wicketsTaken: 0,
        ballsBowled: 0,
        runsConceded: 0,
        economyRate: 0,
        strikeRate: 0,
        wideBalls: 0,
        noBalls: 0,
      },
      {
        name: data.teamBPlayerName5,
        type: data.teamBPlayerType5,
        runsScored: 0,
        ballsFaced: 0,
        fours: 0,
        sixes: 0,
        dismissals: "Not Out",
        wicketsTaken: 0,
        ballsBowled: 0,
        runsConceded: 0,
        economyRate: 0,
        strikeRate: 0,
        wideBalls: 0,
        noBalls: 0,
      },
      {
        name: data.teamBPlayerName6,
        type: data.teamBPlayerType6,
        runsScored: 0,
        ballsFaced: 0,
        fours: 0,
        sixes: 0,
        dismissals: "Not Out",
        wicketsTaken: 0,
        ballsBowled: 0,
        runsConceded: 0,
        economyRate: 0,
        strikeRate: 0,
        wideBalls: 0,
        noBalls: 0,
      },
      {
        name: data.teamBPlayerName7,
        type: data.teamBPlayerType7,
        runsScored: 0,
        ballsFaced: 0,
        fours: 0,
        sixes: 0,
        dismissals: "Not Out",
        wicketsTaken: 0,
        ballsBowled: 0,
        runsConceded: 0,
        economyRate: 0,
        strikeRate: 0,
        wideBalls: 0,
        noBalls: 0,
      },
      {
        name: data.teamBPlayerName8,
        type: data.teamBPlayerType8,
        runsScored: 0,
        ballsFaced: 0,
        fours: 0,
        sixes: 0,
        dismissals: "Not Out",
        wicketsTaken: 0,
        ballsBowled: 0,
        runsConceded: 0,
        economyRate: 0,
        strikeRate: 0,
        wideBalls: 0,
        noBalls: 0,
      },
      {
        name: data.teamBPlayerName9,
        type: data.teamBPlayerType9,
        runsScored: 0,
        ballsFaced: 0,
        fours: 0,
        sixes: 0,
        dismissals: "Not Out",
        wicketsTaken: 0,
        ballsBowled: 0,
        runsConceded: 0,
        economyRate: 0,
        wideBalls: 0,
        noBalls: 0,
        strikeRate: 0,
      },
      {
        name: data.teamBPlayerName10,
        type: data.teamBPlayerType10,
        runsScored: 0,
        ballsFaced: 0,
        fours: 0,
        sixes: 0,
        dismissals: "Not Out",
        wicketsTaken: 0,
        ballsBowled: 0,
        runsConceded: 0,
        economyRate: 0,
        strikeRate: 0,
        wideBalls: 0,
        noBalls: 0,
      },
    ];
    // if data field is empty player will not add in array
    teamAPlayers.forEach((player) => {
      if (player.name !== "") {
        matchData.team1.players.push(player);
      }
    });
    // if data field is empty player will not add in array
    teamBPlayers.forEach((player) => {
      if (player.name !== "") {
        matchData.team2.players.push(player);
      }
    });

    // send data to the server
    fetch("http://localhost:5000/api/v1/cricket-match", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(matchData),
    })
      .then((response) => response.json())
      .then((data) => data);
    // toast.success("Event added successfully", {
    //   theme: "colored",
    //   autoClose: 3000,
    // });
    reset();
    handleClose();
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
    <Box>
      {/* ADD NEW MATCH COMPONENTS*/}
      <Box mb={4}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography component="h6" variant="h6" sx={{ fontWeight: "bold" }}>
            Live Cricket Match
          </Typography>
          <Button variant="contained" onClick={handleClickOpen}>
            Add Cricket Match
          </Button>
        </Box>
        <Dialog
          open={open}
          onClose={handleClose}
          component="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <DialogTitle>Create a new cricket match</DialogTitle>

          {/* Match Basic Info */}
          <DialogContent>
            <TextField
              sx={{ width: "50%", paddingRight: "8px" }}
              autoFocus
              margin="dense"
              id="teamA"
              label="Team A Name"
              type="text"
              variant="outlined"
              size="small"
              {...register("teamA", { required: true })}
              error={errors.teamA}
              helperText={errors.teamA && "Team A name is required"}
            />
            <TextField
              sx={{ width: "50%", marginBottom: "8px" }}
              autoFocus
              margin="dense"
              id="teamB"
              label="Team B Name"
              type="text"
              variant="outlined"
              size="small"
              {...register("teamB", { required: true })}
              error={errors.teamB}
              helperText={errors.teamB && "Team B name is required"}
            />
            <FormControl
              sx={{ width: "50%", paddingRight: "8px" }}
              size="small"
            >
              <InputLabel id="tossWinner">Toss Winner</InputLabel>
              <Select
                labelId="tossWinner"
                id="tossWinner"
                label="Toss Winner"
                {...register("tossWinner", { required: true })}
                error={errors.tossWinner}
              >
                <MenuItem value="teamA">Team A</MenuItem>
                <MenuItem value="teamB">Team B</MenuItem>
              </Select>
              <FormHelperText sx={{ color: "#d32f2f" }}>
                {errors.tossWinner && "Toss Winner is required"}
              </FormHelperText>
            </FormControl>
            <FormControl sx={{ width: "50%" }} size="small">
              <InputLabel id="tossChoice">Toss Choice</InputLabel>
              <Select
                labelId="tossChoice"
                id="tossChoice"
                label="Toss Choice"
                {...register("tossChoice", { required: true })}
                error={errors.tossChoice}
              >
                <MenuItem value="Bat">Bat</MenuItem>
                <MenuItem value="Ball">Ball</MenuItem>
              </Select>
              <FormHelperText sx={{ color: "#d32f2f" }}>
                {errors.tossChoice && "Toss Choice is required"}
              </FormHelperText>
            </FormControl>
            <TextField
              autoFocus
              margin="dense"
              id="totalOver"
              label="Total Over"
              type="number"
              fullWidth
              variant="outlined"
              size="small"
              {...register("totalOver", {
                required: "Total Over is required",
                max: {
                  value: 20,
                  message: "Total Over must be 20 or less",
                },
              })}
              error={errors.totalOver}
              helperText={errors.totalOver && errors.totalOver.message}
            />
            <TextField
              autoFocus
              margin="dense"
              id="venue"
              label="Venue"
              type="text"
              fullWidth
              variant="outlined"
              size="small"
              {...register("venue", { required: true })}
              error={errors.venue}
              helperText={errors.venue && "Venue name is required"}
            />
            <TextField
              autoFocus
              margin="dense"
              id="date"
              label="Date & Time"
              type="datetime-local"
              fullWidth
              variant="outlined"
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
              {...register("date", { required: true })}
              error={errors.date}
              helperText={errors.date && "Date is required"}
            />

            {/* Team A Info */}
            <Typography
              component="h6"
              variant="h6"
              sx={{ fontSize: "14px", marginTop: "10px" }}
            >
              Team A Information
            </Typography>

            {/* Team A Captain */}
            <TextField
              sx={{ width: "50%", paddingRight: "8px" }}
              autoFocus
              margin="dense"
              id="teamACaptainName"
              label="Captain Name"
              type="text"
              variant="outlined"
              size="small"
              {...register("teamACaptainName", { required: true })}
              error={errors.teamACaptainName}
              helperText={errors.teamACaptainName && "Captain Name is required"}
            />
            <FormControl sx={{ width: "50%", marginTop: "8px" }} size="small">
              <InputLabel id="teamACaptainType">Player Type</InputLabel>
              <Select
                labelId="teamACaptainType"
                id="teamACaptainType"
                label="Player Type"
                defaultValue="All-rounder"
                {...register("teamACaptainType")}
              >
                <MenuItem value="All-rounder">All-rounder</MenuItem>
                <MenuItem value="Batsman">Batsman</MenuItem>
                <MenuItem value="Bowler">Bowler</MenuItem>
                <MenuItem value="Fielder">Fielder</MenuItem>
                <MenuItem value="Wicket-keeper">Wicket-keeper</MenuItem>
              </Select>
            </FormControl>

            {/* Player 1 */}
            <TextField
              sx={{ width: "50%", paddingRight: "8px" }}
              autoFocus
              margin="dense"
              id="teamAPlayerName1"
              label="Player Name 1"
              type="text"
              variant="outlined"
              size="small"
              {...register("teamAPlayerName1", { required: true })}
              error={errors.teamAPlayerName1}
              helperText={errors.teamAPlayerName1 && "Player Name is required"}
            />
            <FormControl sx={{ width: "50%", marginTop: "8px" }} size="small">
              <InputLabel id="teamAPlayerType1">Player Type</InputLabel>
              <Select
                labelId="teamAPlayerType1"
                id="teamAPlayerType1"
                label="Player Type"
                defaultValue="All-rounder"
                {...register("teamAPlayerType1")}
              >
                <MenuItem value="All-rounder">All-rounder</MenuItem>
                <MenuItem value="Batsman">Batsman</MenuItem>
                <MenuItem value="Bowler">Bowler</MenuItem>
                <MenuItem value="Fielder">Fielder</MenuItem>
                <MenuItem value="Wicket-keeper">Wicket-keeper</MenuItem>
              </Select>
            </FormControl>

            {/* Player 2 */}
            <TextField
              sx={{ width: "50%", paddingRight: "8px" }}
              autoFocus
              margin="dense"
              id="teamAPlayerName2"
              label="Player Name 2"
              type="text"
              variant="outlined"
              size="small"
              {...register("teamAPlayerName2", { required: true })}
              error={errors.teamAPlayerName2}
              helperText={errors.teamAPlayerName2 && "Player Name is required"}
            />
            <FormControl sx={{ width: "50%", marginTop: "8px" }} size="small">
              <InputLabel id="teamAPlayerType2">Player Type</InputLabel>
              <Select
                labelId="teamAPlayerType2"
                id="teamAPlayerType2"
                label="Player Type"
                defaultValue="All-rounder"
                {...register("teamAPlayerType2")}
              >
                <MenuItem value="All-rounder">All-rounder</MenuItem>
                <MenuItem value="Batsman">Batsman</MenuItem>
                <MenuItem value="Bowler">Bowler</MenuItem>
                <MenuItem value="Fielder">Fielder</MenuItem>
                <MenuItem value="Wicket-keeper">Wicket-keeper</MenuItem>
              </Select>
            </FormControl>

            {/* Player 3 */}
            <TextField
              sx={{ width: "50%", paddingRight: "8px" }}
              autoFocus
              margin="dense"
              id="teamAPlayerName3"
              label="Player Name 3"
              type="text"
              variant="outlined"
              size="small"
              {...register("teamAPlayerName3", { required: true })}
              error={errors.teamAPlayerName3}
              helperText={errors.teamAPlayerName3 && "Player Name is required"}
            />
            <FormControl sx={{ width: "50%", marginTop: "8px" }} size="small">
              <InputLabel id="teamAPlayerType3">Player Type</InputLabel>
              <Select
                labelId="teamAPlayerType3"
                id="teamAPlayerType3"
                label="Player Type"
                defaultValue="All-rounder"
                {...register("teamAPlayerType3")}
              >
                <MenuItem value="All-rounder">All-rounder</MenuItem>
                <MenuItem value="Batsman">Batsman</MenuItem>
                <MenuItem value="Bowler">Bowler</MenuItem>
                <MenuItem value="Fielder">Fielder</MenuItem>
                <MenuItem value="Wicket-keeper">Wicket-keeper</MenuItem>
              </Select>
            </FormControl>

            {/* Player 4 */}
            <TextField
              sx={{ width: "50%", paddingRight: "8px" }}
              autoFocus
              margin="dense"
              id="teamAPlayerName4"
              label="Player Name 4"
              type="text"
              variant="outlined"
              size="small"
              {...register("teamAPlayerName4", { required: true })}
              error={errors.teamAPlayerName4}
              helperText={errors.teamAPlayerName4 && "Player Name is required"}
            />
            <FormControl sx={{ width: "50%", marginTop: "8px" }} size="small">
              <InputLabel id="teamAPlayerType4">Player Type</InputLabel>
              <Select
                labelId="teamAPlayerType4"
                id="teamAPlayerType4"
                label="Player Type"
                defaultValue="All-rounder"
                {...register("teamAPlayerType4")}
              >
                <MenuItem value="All-rounder">All-rounder</MenuItem>
                <MenuItem value="Batsman">Batsman</MenuItem>
                <MenuItem value="Bowler">Bowler</MenuItem>
                <MenuItem value="Fielder">Fielder</MenuItem>
                <MenuItem value="Wicket-keeper">Wicket-keeper</MenuItem>
              </Select>
            </FormControl>

            {/* Player 5 */}
            <TextField
              sx={{ width: "50%", paddingRight: "8px" }}
              autoFocus
              margin="dense"
              id="teamAPlayerName5"
              label="Player Name 5"
              type="text"
              variant="outlined"
              size="small"
              {...register("teamAPlayerName5", { required: true })}
              error={errors.teamAPlayerName5}
              helperText={errors.teamAPlayerName5 && "Player Name is required"}
            />
            <FormControl sx={{ width: "50%", marginTop: "8px" }} size="small">
              <InputLabel id="teamAPlayerType5">Player Type</InputLabel>
              <Select
                labelId="teamAPlayerType5"
                id="teamAPlayerType5"
                label="Player Type"
                defaultValue="All-rounder"
                {...register("teamAPlayerType5")}
              >
                <MenuItem value="All-rounder">All-rounder</MenuItem>
                <MenuItem value="Batsman">Batsman</MenuItem>
                <MenuItem value="Bowler">Bowler</MenuItem>
                <MenuItem value="Fielder">Fielder</MenuItem>
                <MenuItem value="Wicket-keeper">Wicket-keeper</MenuItem>
              </Select>
            </FormControl>

            {/* Player 6 */}
            <TextField
              sx={{ width: "50%", paddingRight: "8px" }}
              autoFocus
              margin="dense"
              id="teamAPlayerName6"
              label="Player Name 6"
              type="text"
              variant="outlined"
              size="small"
              {...register("teamAPlayerName6")}
            />
            <FormControl sx={{ width: "50%", marginTop: "8px" }} size="small">
              <InputLabel id="teamAPlayerType6">Player Type</InputLabel>
              <Select
                labelId="teamAPlayerType6"
                id="teamAPlayerType6"
                label="Player Type"
                defaultValue="All-rounder"
                {...register("teamAPlayerType6")}
              >
                <MenuItem value="All-rounder">All-rounder</MenuItem>
                <MenuItem value="Batsman">Batsman</MenuItem>
                <MenuItem value="Bowler">Bowler</MenuItem>
                <MenuItem value="Fielder">Fielder</MenuItem>
                <MenuItem value="Wicket-keeper">Wicket-keeper</MenuItem>
              </Select>
            </FormControl>

            {/* Player 7 */}
            <TextField
              sx={{ width: "50%", paddingRight: "8px" }}
              autoFocus
              margin="dense"
              id="teamAPlayerName7"
              label="Player Name 7"
              type="text"
              variant="outlined"
              size="small"
              {...register("teamAPlayerName7")}
            />
            <FormControl sx={{ width: "50%", marginTop: "8px" }} size="small">
              <InputLabel id="teamAPlayerType7">Player Type</InputLabel>
              <Select
                labelId="teamAPlayerType7"
                id="teamAPlayerType7"
                label="Player Type"
                defaultValue="All-rounder"
                {...register("teamAPlayerType7")}
              >
                <MenuItem value="All-rounder">All-rounder</MenuItem>
                <MenuItem value="Batsman">Batsman</MenuItem>
                <MenuItem value="Bowler">Bowler</MenuItem>
                <MenuItem value="Fielder">Fielder</MenuItem>
                <MenuItem value="Wicket-keeper">Wicket-keeper</MenuItem>
              </Select>
            </FormControl>

            {/* Player 8 */}
            <TextField
              sx={{ width: "50%", paddingRight: "8px" }}
              autoFocus
              margin="dense"
              id="teamAPlayerName8"
              label="Player Name 8"
              type="text"
              variant="outlined"
              size="small"
              {...register("teamAPlayerName8")}
            />
            <FormControl sx={{ width: "50%", marginTop: "8px" }} size="small">
              <InputLabel id="teamAPlayerType8">Player Type</InputLabel>
              <Select
                labelId="teamAPlayerType8"
                id="teamAPlayerType8"
                label="Player Type"
                defaultValue="All-rounder"
                {...register("teamAPlayerType8")}
              >
                <MenuItem value="All-rounder">All-rounder</MenuItem>
                <MenuItem value="Batsman">Batsman</MenuItem>
                <MenuItem value="Bowler">Bowler</MenuItem>
                <MenuItem value="Fielder">Fielder</MenuItem>
                <MenuItem value="Wicket-keeper">Wicket-keeper</MenuItem>
              </Select>
            </FormControl>

            {/* Player 9 */}
            <TextField
              sx={{ width: "50%", paddingRight: "8px" }}
              autoFocus
              margin="dense"
              id="teamAPlayerName9"
              label="Player Name 9"
              type="text"
              variant="outlined"
              size="small"
              {...register("teamAPlayerName9")}
            />
            <FormControl sx={{ width: "50%", marginTop: "8px" }} size="small">
              <InputLabel id="teamAPlayerType9">Player Type</InputLabel>
              <Select
                labelId="teamAPlayerType9"
                id="teamAPlayerType9"
                label="Player Type"
                defaultValue="All-rounder"
                {...register("teamAPlayerType9")}
              >
                <MenuItem value="All-rounder">All-rounder</MenuItem>
                <MenuItem value="Batsman">Batsman</MenuItem>
                <MenuItem value="Bowler">Bowler</MenuItem>
                <MenuItem value="Fielder">Fielder</MenuItem>
                <MenuItem value="Wicket-keeper">Wicket-keeper</MenuItem>
              </Select>
            </FormControl>

            {/* Player 10 */}
            <TextField
              sx={{ width: "50%", paddingRight: "8px" }}
              autoFocus
              margin="dense"
              id="teamAPlayerName10"
              label="Player Name 10"
              type="text"
              variant="outlined"
              size="small"
              {...register("teamAPlayerName10")}
            />
            <FormControl sx={{ width: "50%", marginTop: "8px" }} size="small">
              <InputLabel id="teamAPlayerType10">Player Type</InputLabel>
              <Select
                labelId="teamAPlayerType10"
                id="teamAPlayerType10"
                label="Player Type"
                defaultValue="All-rounder"
                {...register("teamAPlayerType10")}
              >
                <MenuItem value="All-rounder">All-rounder</MenuItem>
                <MenuItem value="Batsman">Batsman</MenuItem>
                <MenuItem value="Bowler">Bowler</MenuItem>
                <MenuItem value="Fielder">Fielder</MenuItem>
                <MenuItem value="Wicket-keeper">Wicket-keeper</MenuItem>
              </Select>
            </FormControl>

            {/* Team B Info */}
            <Typography
              component="h6"
              variant="h6"
              sx={{ fontSize: "14px", marginTop: "10px" }}
            >
              Team B Information
            </Typography>

            {/* Team B Captain */}
            <TextField
              sx={{ width: "50%", paddingRight: "8px" }}
              autoFocus
              margin="dense"
              id="teamBCaptainName"
              label="Captain Name"
              type="text"
              variant="outlined"
              size="small"
              {...register("teamBCaptainName", { required: true })}
              error={errors.teamBCaptainName}
              helperText={errors.teamBCaptainName && "Captain Name is required"}
            />
            <FormControl sx={{ width: "50%", marginTop: "8px" }} size="small">
              <InputLabel id="teamBCaptainType">Player Type</InputLabel>
              <Select
                labelId="teamBCaptainType"
                id="teamBCaptainType"
                label="Player Type"
                defaultValue="All-rounder"
                {...register("teamBCaptainType")}
              >
                <MenuItem value="All-rounder">All-rounder</MenuItem>
                <MenuItem value="Batsman">Batsman</MenuItem>
                <MenuItem value="Bowler">Bowler</MenuItem>
                <MenuItem value="Fielder">Fielder</MenuItem>
                <MenuItem value="Wicket-keeper">Wicket-keeper</MenuItem>
              </Select>
            </FormControl>

            {/* Player 1 */}
            <TextField
              sx={{ width: "50%", paddingRight: "8px" }}
              autoFocus
              margin="dense"
              id="teamBPlayerName1"
              label="Player Name 1"
              type="text"
              variant="outlined"
              size="small"
              {...register("teamBPlayerName1", { required: true })}
              error={errors.teamBPlayerName1}
              helperText={errors.teamBPlayerName1 && "Player Name is required"}
            />
            <FormControl sx={{ width: "50%", marginTop: "8px" }} size="small">
              <InputLabel id="teamBPlayerType1">Player Type</InputLabel>
              <Select
                labelId="teamBPlayerType1"
                id="teamBPlayerType1"
                label="Player Type"
                defaultValue="All-rounder"
                {...register("teamBPlayerType1")}
              >
                <MenuItem value="All-rounder">All-rounder</MenuItem>
                <MenuItem value="Batsman">Batsman</MenuItem>
                <MenuItem value="Bowler">Bowler</MenuItem>
                <MenuItem value="Fielder">Fielder</MenuItem>
                <MenuItem value="Wicket-keeper">Wicket-keeper</MenuItem>
              </Select>
            </FormControl>

            {/* Player 2 */}
            <TextField
              sx={{ width: "50%", paddingRight: "8px" }}
              autoFocus
              margin="dense"
              id="teamBPlayerName2"
              label="Player Name 2"
              type="text"
              variant="outlined"
              size="small"
              {...register("teamBPlayerName2", { required: true })}
              error={errors.teamBPlayerName2}
              helperText={errors.teamBPlayerName2 && "Player Name is required"}
            />
            <FormControl sx={{ width: "50%", marginTop: "8px" }} size="small">
              <InputLabel id="teamBPlayerType2">Player Type</InputLabel>
              <Select
                labelId="teamBPlayerType2"
                id="teamBPlayerType2"
                label="Player Type"
                defaultValue="All-rounder"
                {...register("teamBPlayerType2")}
              >
                <MenuItem value="All-rounder">All-rounder</MenuItem>
                <MenuItem value="Batsman">Batsman</MenuItem>
                <MenuItem value="Bowler">Bowler</MenuItem>
                <MenuItem value="Fielder">Fielder</MenuItem>
                <MenuItem value="Wicket-keeper">Wicket-keeper</MenuItem>
              </Select>
            </FormControl>

            {/* Player 3 */}
            <TextField
              sx={{ width: "50%", paddingRight: "8px" }}
              autoFocus
              margin="dense"
              id="teamBPlayerName3"
              label="Player Name 3"
              type="text"
              variant="outlined"
              size="small"
              {...register("teamBPlayerName3", { required: true })}
              error={errors.teamBPlayerName3}
              helperText={errors.teamBPlayerName3 && "Player Name is required"}
            />
            <FormControl sx={{ width: "50%", marginTop: "8px" }} size="small">
              <InputLabel id="teamBPlayerType3">Player Type</InputLabel>
              <Select
                labelId="teamBPlayerType3"
                id="teamBPlayerType3"
                label="Player Type"
                defaultValue="All-rounder"
                {...register("teamBPlayerType3")}
              >
                <MenuItem value="All-rounder">All-rounder</MenuItem>
                <MenuItem value="Batsman">Batsman</MenuItem>
                <MenuItem value="Bowler">Bowler</MenuItem>
                <MenuItem value="Fielder">Fielder</MenuItem>
                <MenuItem value="Wicket-keeper">Wicket-keeper</MenuItem>
              </Select>
            </FormControl>

            {/* Player 4 */}
            <TextField
              sx={{ width: "50%", paddingRight: "8px" }}
              autoFocus
              margin="dense"
              id="teamBPlayerName4"
              label="Player Name 4"
              type="text"
              variant="outlined"
              size="small"
              {...register("teamBPlayerName4", { required: true })}
              error={errors.teamBPlayerName4}
              helperText={errors.teamBPlayerName4 && "Player Name is required"}
            />
            <FormControl sx={{ width: "50%", marginTop: "8px" }} size="small">
              <InputLabel id="teamBPlayerType4">Player Type</InputLabel>
              <Select
                labelId="teamBPlayerType4"
                id="teamBPlayerType4"
                label="Player Type"
                defaultValue="All-rounder"
                {...register("teamBPlayerType4")}
              >
                <MenuItem value="All-rounder">All-rounder</MenuItem>
                <MenuItem value="Batsman">Batsman</MenuItem>
                <MenuItem value="Bowler">Bowler</MenuItem>
                <MenuItem value="Fielder">Fielder</MenuItem>
                <MenuItem value="Wicket-keeper">Wicket-keeper</MenuItem>
              </Select>
            </FormControl>

            {/* Player 5 */}
            <TextField
              sx={{ width: "50%", paddingRight: "8px" }}
              autoFocus
              margin="dense"
              id="teamBPlayerName5"
              label="Player Name 5"
              type="text"
              variant="outlined"
              size="small"
              {...register("teamBPlayerName5", { required: true })}
              error={errors.teamBPlayerName5}
              helperText={errors.teamBPlayerName5 && "Player Name is required"}
            />
            <FormControl sx={{ width: "50%", marginTop: "8px" }} size="small">
              <InputLabel id="teamBPlayerType5">Player Type</InputLabel>
              <Select
                labelId="teamBPlayerType5"
                id="teamBPlayerType5"
                label="Player Type"
                defaultValue="All-rounder"
                {...register("teamBPlayerType5")}
              >
                <MenuItem value="All-rounder">All-rounder</MenuItem>
                <MenuItem value="Batsman">Batsman</MenuItem>
                <MenuItem value="Bowler">Bowler</MenuItem>
                <MenuItem value="Fielder">Fielder</MenuItem>
                <MenuItem value="Wicket-keeper">Wicket-keeper</MenuItem>
              </Select>
            </FormControl>

            {/* Player 6 */}
            <TextField
              sx={{ width: "50%", paddingRight: "8px" }}
              autoFocus
              margin="dense"
              id="teamBPlayerName6"
              label="Player Name 6"
              type="text"
              variant="outlined"
              size="small"
              {...register("teamBPlayerName6")}
            />
            <FormControl sx={{ width: "50%", marginTop: "8px" }} size="small">
              <InputLabel id="teamBPlayerType6">Player Type</InputLabel>
              <Select
                labelId="teamBPlayerType6"
                id="teamBPlayerType6"
                label="Player Type"
                defaultValue="All-rounder"
                {...register("teamBPlayerType6")}
              >
                <MenuItem value="All-rounder">All-rounder</MenuItem>
                <MenuItem value="Batsman">Batsman</MenuItem>
                <MenuItem value="Bowler">Bowler</MenuItem>
                <MenuItem value="Fielder">Fielder</MenuItem>
                <MenuItem value="Wicket-keeper">Wicket-keeper</MenuItem>
              </Select>
            </FormControl>

            {/* Player 7 */}
            <TextField
              sx={{ width: "50%", paddingRight: "8px" }}
              autoFocus
              margin="dense"
              id="teamBPlayerName7"
              label="Player Name 7"
              type="text"
              variant="outlined"
              size="small"
              {...register("teamBPlayerName7")}
            />
            <FormControl sx={{ width: "50%", marginTop: "8px" }} size="small">
              <InputLabel id="teamBPlayerType7">Player Type</InputLabel>
              <Select
                labelId="teamBPlayerType7"
                id="teamBPlayerType7"
                label="Player Type"
                defaultValue="All-rounder"
                {...register("teamBPlayerType7")}
              >
                <MenuItem value="All-rounder">All-rounder</MenuItem>
                <MenuItem value="Batsman">Batsman</MenuItem>
                <MenuItem value="Bowler">Bowler</MenuItem>
                <MenuItem value="Fielder">Fielder</MenuItem>
                <MenuItem value="Wicket-keeper">Wicket-keeper</MenuItem>
              </Select>
            </FormControl>

            {/* Player 8 */}
            <TextField
              sx={{ width: "50%", paddingRight: "8px" }}
              autoFocus
              margin="dense"
              id="teamBPlayerName8"
              label="Player Name 8"
              type="text"
              variant="outlined"
              size="small"
              {...register("teamBPlayerName8")}
            />
            <FormControl sx={{ width: "50%", marginTop: "8px" }} size="small">
              <InputLabel id="teamBPlayerType8">Player Type</InputLabel>
              <Select
                labelId="teamBPlayerType8"
                id="teamBPlayerType8"
                label="Player Type"
                defaultValue="All-rounder"
                {...register("teamBPlayerType8")}
              >
                <MenuItem value="All-rounder">All-rounder</MenuItem>
                <MenuItem value="Batsman">Batsman</MenuItem>
                <MenuItem value="Bowler">Bowler</MenuItem>
                <MenuItem value="Fielder">Fielder</MenuItem>
                <MenuItem value="Wicket-keeper">Wicket-keeper</MenuItem>
              </Select>
            </FormControl>

            {/* Player 9 */}
            <TextField
              sx={{ width: "50%", paddingRight: "8px" }}
              autoFocus
              margin="dense"
              id="teamBPlayerName9"
              label="Player Name 9"
              type="text"
              variant="outlined"
              size="small"
              {...register("teamBPlayerName9")}
            />
            <FormControl sx={{ width: "50%", marginTop: "8px" }} size="small">
              <InputLabel id="teamBPlayerType9">Player Type</InputLabel>
              <Select
                labelId="teamBPlayerType9"
                id="teamBPlayerType9"
                label="Player Type"
                defaultValue="All-rounder"
                {...register("teamBPlayerType9")}
              >
                <MenuItem value="All-rounder">All-rounder</MenuItem>
                <MenuItem value="Batsman">Batsman</MenuItem>
                <MenuItem value="Bowler">Bowler</MenuItem>
                <MenuItem value="Fielder">Fielder</MenuItem>
                <MenuItem value="Wicket-keeper">Wicket-keeper</MenuItem>
              </Select>
            </FormControl>

            {/* Player 10 */}
            <TextField
              sx={{ width: "50%", paddingRight: "8px" }}
              autoFocus
              margin="dense"
              id="teamBPlayerName10"
              label="Player Name 10"
              type="text"
              variant="outlined"
              size="small"
              {...register("teamBPlayerName10")}
            />
            <FormControl sx={{ width: "50%", marginTop: "8px" }} size="small">
              <InputLabel id="teamBPlayerType10">Player Type</InputLabel>
              <Select
                labelId="teamBPlayerType10"
                id="teamBPlayerType10"
                label="Player Type"
                defaultValue="All-rounder"
                {...register("teamBPlayerType10")}
              >
                <MenuItem value="All-rounder">All-rounder</MenuItem>
                <MenuItem value="Batsman">Batsman</MenuItem>
                <MenuItem value="Bowler">Bowler</MenuItem>
                <MenuItem value="Fielder">Fielder</MenuItem>
                <MenuItem value="Wicket-keeper">Wicket-keeper</MenuItem>
              </Select>
            </FormControl>
          </DialogContent>

          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Save</Button>
          </DialogActions>
        </Dialog>
      </Box>
      {/* SCORECARD HEADER COMPONENTS */}
      <Paper elevation={0} sx={{ padding: "14px", marginBottom: "8px" }}>
        <Typography
          component="h6"
          variant="h6"
          sx={{
            color: "#009270",
            textAlign: "center",
            fontWeight: "700",
            fontSize: "15px",
            marginBottom: "2px",
          }}
        >
          {name} (Live)
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography
              component="h6"
              variant="h6"
              sx={{ textAlign: "center", fontSize: "20px", fontWeight: "bold" }}
            >
              {`${battingTeam.name} ${battingTeam.runs}/${battingTeam.wickets} (${battingTeam.overs} overs)`}
            </Typography>
            <Typography
              component="p"
              variant="p"
              sx={{
                fontSize: "12px",
                textTransform: "uppercase",
                marginBottom: "3px",
              }}
            >
              Run rate: {(battingTeam.runs / battingTeam.overs).toFixed(2)}
            </Typography>

            {battingTeam.name === matchWinner && (
              <Typography
                component="p"
                variant="p"
                sx={{
                  color: "#1866db",
                  fontSize: "13px",
                  fontWeight: "bold",
                  marginBottom: "3px",
                }}
              >
                {status}
              </Typography>
            )}
          </Box>

          <Box>
            <Typography
              component="h6"
              variant="h6"
              sx={{ textAlign: "center", fontSize: "20px", fontWeight: "bold" }}
            >
              {`${bowlingTeam.name} ${bowlingTeam.runs}/${bowlingTeam.wickets} (${bowlingTeam.overs} overs)`}
            </Typography>
            <Typography
              component="p"
              variant="p"
              sx={{
                fontSize: "12px",
                textTransform: "uppercase",
                marginBottom: "3px",
              }}
            >
              Run rate: {(bowlingTeam.runs / bowlingTeam.overs).toFixed(2)}
            </Typography>

            {bowlingTeam.balls >= 1 ||
              bowlingTeam.runs <=
                battingTeam.run(
                  bowlingTeam.runs >= battingTeam.runs && (
                    <Typography
                      component="p"
                      variant="p"
                      sx={{
                        color: "#E90B37",
                        fontSize: "13px",
                        fontWeight: "700",
                        marginBottom: "3px",
                      }}
                    >
                      {`${bowlingTeam.name} need ${battingTeam.runs -
                        bowlingTeam.runs} runs in ${totalOver * 6 -
                        bowlingTeam.balls} balls`}
                    </Typography>
                  )
                )}

            {bowlingTeam.name === matchWinner && (
              <Typography
                component="p"
                variant="p"
                sx={{
                  color: "#1866db",
                  fontSize: "13px",
                  fontWeight: "bold",
                  marginBottom: "3px",
                }}
              >
                {status}
              </Typography>
            )}

            {/* {bowlingTeam.name === matchWinner ? (
              <Typography
                component="p"
                variant="p"
                sx={{
                  color: "#1866db",
                  fontSize: "13px",
                  fontWeight: "bold",
                  marginBottom: "3px",
                }}
              >
                {status}
              </Typography>
            ) : (
              bowlingTeam.balls >= 1 && (
                <Typography
                  component="p"
                  variant="p"
                  sx={{
                    color: "#E90B37",
                    fontSize: "13px",
                    fontWeight: "700",
                    marginBottom: "3px",
                  }}
                >
                  {`${bowlingTeam.name} needs ${battingTeam.runs -
                    bowlingTeam.runs} runs`}
                </Typography>
              )
            )} */}
          </Box>
        </Box>
      </Paper>

      {/* SCORECARD COMPONENTS */}
      <Grid container spacing={2} sx={{ marginBottom: "20px" }}>
        <Grid item xs={6}>
          <Paper sx={{ height: "370px", padding: "14px" }}>
            <Typography
              component="p"
              variant="p"
              sx={{
                fontSize: "12px",
                textTransform: "uppercase",
                marginBottom: "3px",
              }}
            >
              Match Profile
            </Typography>
            <Typography component="p" variant="p" sx={{ fontSize: "14px" }}>
              <b>Match status:</b> {status}
            </Typography>

            <Typography component="p" variant="p" sx={{ fontSize: "14px" }}>
              <b>Total over:</b> {totalOver}
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
                marginTop: "10px",
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
        </Grid>

        <Grid item xs={6}>
          {/* Render UpdateScoreForm Components */}

          {battingTeam.wickets >= battingTeamTotalWickets ||
          battingTeam.overs >= totalOver ? (
            <ScoreUpdateFormB
              matchId={_id}
              status={status}
              totalOver={totalOver}
              bowlingTeam={bowlingTeam}
              battingTeam={battingTeam}
              bowlingTeamTotalWickets={bowlingTeamTotalWickets}
            />
          ) : (
            <ScoreUpdateFormA
              matchId={_id}
              bowlingTeam={bowlingTeam}
              battingTeam={battingTeam}
              battingTeamTotalWickets={battingTeamTotalWickets}
              bowlingTeamTotalWickets={bowlingTeamTotalWickets}
            />
          )}
        </Grid>
      </Grid>
      {/* SCORECARD TABLE COMPONENTS */}
      <ScorecardTable bowlingTeam={bowlingTeam} battingTeam={battingTeam} />
    </Box>
  );
};

export default Cricket;
