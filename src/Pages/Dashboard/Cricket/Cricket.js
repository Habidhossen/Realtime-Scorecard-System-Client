import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
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

  // handle form data
  const onSubmit = (data) => {
    // {
    //   teamNameA: "BD";
    //   teamNameB: "IND";
    //   tossChoice: "Bat";
    //   tossWinner: "BD";
    //   totalOver: "10";
    //   venue: "Dhaka";
    //   date: "2023-05-04";
    // }

    const newMatchData = {
      teamNameA: data.teamA,
      teamNameB: data.teamB,
      tossWinner: data.tossWinner === "teamA" ? data.teamA : data.teamB,
      tossChoice: data.tossChoice,
      totalOver: data.totalOver,
      venue: data.venue,
      date: data.date,
      teamInfoA: {
        captain: {
          name: data.teamACaptainName,
          type: data.teamACaptainType,
        },
        player1: {
          name: data.teamAPlayerName1,
          type: data.teamAPlayerType1,
        },
        player2: {
          name: data.teamAPlayerName2,
          type: data.teamAPlayerType2,
        },
        player3: {
          name: data.teamAPlayerName3,
          type: data.teamAPlayerType3,
        },
        player4: {
          name: data.teamAPlayerName4,
          type: data.teamAPlayerType4,
        },
        player5: {
          name: data.teamAPlayerName5,
          type: data.teamAPlayerType5,
        },
      },
      teamInfoB: {
        captain: {
          name: data.teamBCaptainName,
          type: data.teamBCaptainType,
        },
        player1: {
          name: data.teamBPlayerName1,
          type: data.teamBPlayerType1,
        },
        player2: {
          name: data.teamBPlayerName2,
          type: data.teamBPlayerType2,
        },
        player3: {
          name: data.teamBPlayerName3,
          type: data.teamBPlayerType3,
        },
        player4: {
          name: data.teamBPlayerName4,
          type: data.teamBPlayerType4,
        },
        player5: {
          name: data.teamBPlayerName5,
          type: data.teamBPlayerType5,
        },
      },
    };

    console.log(newMatchData);
    // console.log(
    //   `${newMatchData.tossWinner} won the toss and elected to ${newMatchData.tossChoice} first`
    // );

    handleClose();
  };

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
            Manage Cricket Match
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
              label="Date"
              type="date"
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
          </DialogContent>

          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Save</Button>
          </DialogActions>
        </Dialog>
      </Box>
      {/* render table components */}
      {/* <NewsTable /> */}
    </Box>
  );
};

export default Cricket;
