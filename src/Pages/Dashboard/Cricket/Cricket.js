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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

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
      status: "", // Replace with the actual result
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
        dismissals: "",
        wicketsTaken: 0,
        oversBowled: 0,
        runsConceded: 0,
        economyRate: 0,
        strikeRate: 0,
      },
      {
        name: data.teamAPlayerName1,
        type: data.teamAPlayerType1,
        runsScored: 0,
        ballsFaced: 0,
        fours: 0,
        sixes: 0,
        dismissals: "",
        wicketsTaken: 0,
        oversBowled: 0,
        runsConceded: 0,
        economyRate: 0,
        strikeRate: 0,
      },
      {
        name: data.teamAPlayerName2,
        type: data.teamAPlayerType2,
        runsScored: 0,
        ballsFaced: 0,
        fours: 0,
        sixes: 0,
        dismissals: "",
        wicketsTaken: 0,
        oversBowled: 0,
        runsConceded: 0,
        economyRate: 0,
        strikeRate: 0,
      },
      {
        name: data.teamAPlayerName3,
        type: data.teamAPlayerType3,
        runsScored: 0,
        ballsFaced: 0,
        fours: 0,
        sixes: 0,
        dismissals: "",
        wicketsTaken: 0,
        oversBowled: 0,
        runsConceded: 0,
        economyRate: 0,
        strikeRate: 0,
      },
      {
        name: data.teamAPlayerName4,
        type: data.teamAPlayerType4,
        runsScored: 0,
        ballsFaced: 0,
        fours: 0,
        sixes: 0,
        dismissals: "",
        wicketsTaken: 0,
        oversBowled: 0,
        runsConceded: 0,
        economyRate: 0,
        strikeRate: 0,
      },
      {
        name: data.teamAPlayerName5,
        type: data.teamAPlayerType5,
        runsScored: 0,
        ballsFaced: 0,
        fours: 0,
        sixes: 0,
        dismissals: "",
        wicketsTaken: 0,
        oversBowled: 0,
        runsConceded: 0,
        economyRate: 0,
        strikeRate: 0,
      },
      {
        name: data.teamAPlayerName6,
        type: data.teamAPlayerType6,
        runsScored: 0,
        ballsFaced: 0,
        fours: 0,
        sixes: 0,
        dismissals: "",
        wicketsTaken: 0,
        oversBowled: 0,
        runsConceded: 0,
        economyRate: 0,
        strikeRate: 0,
      },
      {
        name: data.teamAPlayerName7,
        type: data.teamAPlayerType7,
        runsScored: 0,
        ballsFaced: 0,
        fours: 0,
        sixes: 0,
        dismissals: "",
        wicketsTaken: 0,
        oversBowled: 0,
        runsConceded: 0,
        economyRate: 0,
        strikeRate: 0,
      },
      {
        name: data.teamAPlayerName8,
        type: data.teamAPlayerType8,
        runsScored: 0,
        ballsFaced: 0,
        fours: 0,
        sixes: 0,
        dismissals: "",
        wicketsTaken: 0,
        oversBowled: 0,
        runsConceded: 0,
        economyRate: 0,
        strikeRate: 0,
      },
      {
        name: data.teamAPlayerName9,
        type: data.teamAPlayerType9,
        runsScored: 0,
        ballsFaced: 0,
        fours: 0,
        sixes: 0,
        dismissals: "",
        wicketsTaken: 0,
        oversBowled: 0,
        runsConceded: 0,
        economyRate: 0,
        strikeRate: 0,
      },
      {
        name: data.teamAPlayerName10,
        type: data.teamAPlayerType10,
        runsScored: 0,
        ballsFaced: 0,
        fours: 0,
        sixes: 0,
        dismissals: "",
        wicketsTaken: 0,
        oversBowled: 0,
        runsConceded: 0,
        economyRate: 0,
        strikeRate: 0,
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
        dismissals: "",
        wicketsTaken: 0,
        oversBowled: 0,
        runsConceded: 0,
        economyRate: 0,
        strikeRate: 0,
      },
      {
        name: data.teamBPlayerName1,
        type: data.teamBPlayerType1,
        runsScored: 0,
        ballsFaced: 0,
        fours: 0,
        sixes: 0,
        dismissals: "",
        wicketsTaken: 0,
        oversBowled: 0,
        runsConceded: 0,
        economyRate: 0,
        strikeRate: 0,
      },
      {
        name: data.teamBPlayerName2,
        type: data.teamBPlayerType2,
        runsScored: 0,
        ballsFaced: 0,
        fours: 0,
        sixes: 0,
        dismissals: "",
        wicketsTaken: 0,
        oversBowled: 0,
        runsConceded: 0,
        economyRate: 0,
        strikeRate: 0,
      },
      {
        name: data.teamBPlayerName3,
        type: data.teamBPlayerType3,
        runsScored: 0,
        ballsFaced: 0,
        fours: 0,
        sixes: 0,
        dismissals: "",
        wicketsTaken: 0,
        oversBowled: 0,
        runsConceded: 0,
        economyRate: 0,
        strikeRate: 0,
      },
      {
        name: data.teamBPlayerName4,
        type: data.teamBPlayerType4,
        runsScored: 0,
        ballsFaced: 0,
        fours: 0,
        sixes: 0,
        dismissals: "",
        wicketsTaken: 0,
        oversBowled: 0,
        runsConceded: 0,
        economyRate: 0,
        strikeRate: 0,
      },
      {
        name: data.teamBPlayerName5,
        type: data.teamBPlayerType5,
        runsScored: 0,
        ballsFaced: 0,
        fours: 0,
        sixes: 0,
        dismissals: "",
        wicketsTaken: 0,
        oversBowled: 0,
        runsConceded: 0,
        economyRate: 0,
        strikeRate: 0,
      },
      {
        name: data.teamBPlayerName6,
        type: data.teamBPlayerType6,
        runsScored: 0,
        ballsFaced: 0,
        fours: 0,
        sixes: 0,
        dismissals: "",
        wicketsTaken: 0,
        oversBowled: 0,
        runsConceded: 0,
        economyRate: 0,
        strikeRate: 0,
      },
      {
        name: data.teamBPlayerName7,
        type: data.teamBPlayerType7,
        runsScored: 0,
        ballsFaced: 0,
        fours: 0,
        sixes: 0,
        dismissals: "",
        wicketsTaken: 0,
        oversBowled: 0,
        runsConceded: 0,
        economyRate: 0,
        strikeRate: 0,
      },
      {
        name: data.teamBPlayerName8,
        type: data.teamBPlayerType8,
        runsScored: 0,
        ballsFaced: 0,
        fours: 0,
        sixes: 0,
        dismissals: "",
        wicketsTaken: 0,
        oversBowled: 0,
        runsConceded: 0,
        economyRate: 0,
        strikeRate: 0,
      },
      {
        name: data.teamBPlayerName9,
        type: data.teamBPlayerType9,
        runsScored: 0,
        ballsFaced: 0,
        fours: 0,
        sixes: 0,
        dismissals: "",
        wicketsTaken: 0,
        oversBowled: 0,
        runsConceded: 0,
        economyRate: 0,
        strikeRate: 0,
      },
      {
        name: data.teamBPlayerName10,
        type: data.teamBPlayerType10,
        runsScored: 0,
        ballsFaced: 0,
        fours: 0,
        sixes: 0,
        dismissals: "",
        wicketsTaken: 0,
        oversBowled: 0,
        runsConceded: 0,
        economyRate: 0,
        strikeRate: 0,
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

  const battingRows = [
    {
      id: 1,
      batsman: "Sakib al Hasan",
      dm: "Not Out",
      run: 35,
      boundaries: 3,
      overBoundaries: 2,
      sr: 102.0,
    },
    {
      id: 2,
      batsman: "Mahmudullah Riyad",
      dm: "Out",
      run: 68,
      boundaries: 6,
      overBoundaries: 3,
      sr: 122.5,
    },
    {
      id: 3,
      batsman: "Tamim Iqbal",
      dm: "Not Out",
      run: 112,
      boundaries: 14,
      overBoundaries: 5,
      sr: 136.8,
    },
    {
      id: 4,
      batsman: "Mushfiqur Rahim",
      dm: "Out",
      run: 42,
      boundaries: 4,
      overBoundaries: 1,
      sr: 110.3,
    },
    {
      id: 5,
      batsman: "Mustafizur Rahman",
      dm: "Out",
      run: 15,
      boundaries: 1,
      overBoundaries: 0,
      sr: 83.3,
    },
  ];
  const bowlingRows = [
    {
      id: 1,
      bowler: "Jasprit Bumrah",
      over: 4,
      run: 27,
      wicket: 1,
      noBall: 1,
      wide: 2,
      economy: 6.75,
    },
    {
      id: 2,
      bowler: "Ravindra Jadeja",
      over: 5,
      run: 18,
      wicket: 2,
      noBall: 0,
      wide: 1,
      economy: 3.6,
    },
    {
      id: 3,
      bowler: "Bhuvneshwar Kumar",
      over: 5,
      run: 24,
      wicket: 3,
      noBall: 0,
      wide: 1,
      economy: 4.8,
    },
  ];
  return (
    <Box>
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
      {/* SCORECARD COMPONENTS */}
      <Grid container spacing={2} sx={{ marginBottom: "20px" }}>
        <Grid item xs={6}>
          <Paper sx={{ height: "370px", padding: "14px" }}>
            <Typography
              component="h6"
              variant="h6"
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "18px",
                marginBottom: "12px",
              }}
            >
              Bangladesh vs India
            </Typography>
            <Typography component="p" variant="p" sx={{ fontSize: "15px" }}>
              <b>Total over:</b> 10
            </Typography>
            <Typography component="p" variant="p" sx={{ fontSize: "15px" }}>
              <b>Toss status:</b> Bangladesh won the toss and elect to Bat
            </Typography>
            <Typography component="p" variant="p" sx={{ fontSize: "15px" }}>
              <b>Venue:</b> Mirpur National Stadium
            </Typography>
            <Typography component="p" variant="p" sx={{ fontSize: "15px" }}>
              <b>Date and Time:</b> June 10, 2023
            </Typography>

            <Typography component="p" variant="p" sx={{ fontSize: "15px" }}>
              <b>Bangladesh Squad:</b> Shakib Al Hasan, Tamim Iqbal, Mushfiqur
              Rahim, Mashrafe Mortaza
            </Typography>
            <Typography component="p" variant="p" sx={{ fontSize: "15px" }}>
              <b>India Squad:</b> Shakib Al Hasan, Tamim Iqbal, Mushfiqur Rahim,
              Mashrafe Mortaza
            </Typography>

            <Typography
              component="h6"
              variant="h6"
              sx={{ fontWeight: "bold", marginTop: "20px" }}
            >
              Bangladesh 56/0 (8.2 overs)
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper sx={{ height: "370px", padding: "14px" }}>
            {/* Select Batsman */}
            <Typography
              component="p"
              variant="p"
              sx={{ fontSize: "14px", fontWeight: "bold", marginBottom: "8px" }}
            >
              Select Batsman
            </Typography>
            <FormControl
              size="small"
              sx={{ width: "50%", paddingRight: "8px" }}
            >
              <InputLabel id="teamAPlayerType3">Strike</InputLabel>
              <Select
                labelId="teamAPlayerType3"
                id="teamAPlayerType3"
                label="Strike"
                defaultValue=""
                {...register("teamAPlayerType3")}
              >
                <MenuItem value="All-rounder">All-rounder</MenuItem>
                <MenuItem value="Batsman">Batsman</MenuItem>
                <MenuItem value="Bowler">Bowler</MenuItem>
                <MenuItem value="Fielder">Fielder</MenuItem>
                <MenuItem value="Wicket-keeper">Wicket-keeper</MenuItem>
              </Select>
            </FormControl>
            <FormControl size="small" sx={{ width: "50%" }}>
              <InputLabel id="teamAPlayerType3">Non-Strike</InputLabel>
              <Select
                labelId="teamAPlayerType3"
                id="teamAPlayerType3"
                label="Non-Strike"
                defaultValue=""
                {...register("teamAPlayerType3")}
              >
                <MenuItem value="All-rounder">All-rounder</MenuItem>
                <MenuItem value="Batsman">Batsman</MenuItem>
                <MenuItem value="Bowler">Bowler</MenuItem>
                <MenuItem value="Fielder">Fielder</MenuItem>
                <MenuItem value="Wicket-keeper">Wicket-keeper</MenuItem>
              </Select>
            </FormControl>

            {/* Select Bowler */}
            <Typography
              component="p"
              variant="p"
              sx={{
                fontSize: "14px",
                fontWeight: "bold",
                marginBottom: "8px",
                marginTop: "10px",
              }}
            >
              Select Bowler
            </Typography>
            <FormControl size="small" fullWidth>
              <InputLabel id="teamAPlayerType3">Bowler</InputLabel>
              <Select
                labelId="teamAPlayerType3"
                id="teamAPlayerType3"
                label="Bowler"
                defaultValue=""
                {...register("teamAPlayerType3")}
              >
                <MenuItem value="All-rounder">All-rounder</MenuItem>
                <MenuItem value="Batsman">Batsman</MenuItem>
                <MenuItem value="Bowler">Bowler</MenuItem>
                <MenuItem value="Fielder">Fielder</MenuItem>
                <MenuItem value="Wicket-keeper">Wicket-keeper</MenuItem>
              </Select>
            </FormControl>

            {/* Ball by Ball Update */}
            <Typography
              component="p"
              variant="p"
              sx={{
                fontSize: "14px",
                fontWeight: "bold",
                marginBottom: "12px",
                marginTop: "12px",
                textAlign: "center",
              }}
            >
              Ball by Ball Update
            </Typography>
            <FormControl
              size="small"
              sx={{ width: "50%", paddingRight: "8px" }}
            >
              <InputLabel id="teamAPlayerType3">Run</InputLabel>
              <Select
                labelId="teamAPlayerType3"
                id="teamAPlayerType3"
                label="Run"
                defaultValue="0"
                {...register("teamAPlayerType3")}
              >
                <MenuItem value="0">0</MenuItem>
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
                <MenuItem value="4">4</MenuItem>
                <MenuItem value="5">5</MenuItem>
                <MenuItem value="6">6</MenuItem>
                <MenuItem value="7">7</MenuItem>
              </Select>
            </FormControl>
            <FormControl size="small" sx={{ width: "50%" }}>
              <InputLabel id="teamAPlayerType3">
                Select if the run is extra
              </InputLabel>
              <Select
                labelId="teamAPlayerType3"
                id="teamAPlayerType3"
                label="Select if the run is extra"
                defaultValue=""
                {...register("teamAPlayerType3")}
              >
                <MenuItem value="Wide">Wide</MenuItem>
                <MenuItem value="No ball">No ball</MenuItem>
              </Select>
            </FormControl>
            <FormControl size="small" fullWidth sx={{ marginTop: "10px" }}>
              <InputLabel id="teamAPlayerType3">
                Select if the Batsman is out
              </InputLabel>
              <Select
                labelId="teamAPlayerType3"
                id="teamAPlayerType3"
                label="Select if the Batsman is out"
                defaultValue=""
                {...register("teamAPlayerType3")}
              >
                <MenuItem value="Bowled">Bowled</MenuItem>
                <MenuItem value="Catch out">Catch out</MenuItem>
                <MenuItem value="Run out">Run out</MenuItem>
                <MenuItem value="LBW">LBW</MenuItem>
                <MenuItem value="Stumped">Stumped</MenuItem>
                <MenuItem value="Hit wicket">Hit wicket</MenuItem>
              </Select>
            </FormControl>

            {/* update score button */}
            <Button
              type="submit"
              color="secondary"
              variant="contained"
              fullWidth
              sx={{ marginTop: "20px" }}
            >
              Update Score
            </Button>
          </Paper>
        </Grid>
      </Grid>

      {/* SCORECARD TABLE (Batting Team) */}
      <TableContainer component={Paper}>
        <Typography
          component="h6"
          variant="h6"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "16px",
            marginY: "14px",
          }}
        >
          Batting Scorecard
        </Typography>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Batsman</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>DM</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>R</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>4s</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>6s</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>SR</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {battingRows.map((row) => (
              <TableRow key={row.id} sx={{}}>
                <TableCell>{row.batsman}</TableCell>
                <TableCell>{row.dm}</TableCell>
                <TableCell>{row.run}</TableCell>
                <TableCell>{row.boundaries}</TableCell>
                <TableCell>{row.overBoundaries}</TableCell>
                <TableCell>{row.sr}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* SCORECARD TABLE (Bowling Team) */}
      <TableContainer component={Paper} sx={{ marginTop: "16px" }}>
        <Typography
          component="h6"
          variant="h6"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "16px",
            marginY: "14px",
          }}
        >
          Bowling Scorecard
        </Typography>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Bowler</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Over</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>R</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>W</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>NB</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>WD</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>ECO</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bowlingRows.map((row) => (
              <TableRow key={row.id} sx={{}}>
                <TableCell>{row.bowler}</TableCell>
                <TableCell>{row.over}</TableCell>
                <TableCell>{row.run}</TableCell>
                <TableCell>{row.wicket}</TableCell>
                <TableCell>{row.noBall}</TableCell>
                <TableCell>{row.wide}</TableCell>
                <TableCell>{row.economy}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Cricket;
