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
    //   date: "2023-05-04";
    //   teamA: "BD";
    //   teamAPlayer1Name: "Sakib Al Hasan";
    //   teamAPlayer1Type: "All-rounder";
    //   teamB: "IND";
    //   tossChoice: "Bat";
    //   tossWinner: "teamA";
    //   totalOver: "10";
    //   venue: "Dhaka";
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
        player1: {
          name: data.teamAPlayer1Name,
          type: data.teamAPlayer1Type,
        },
        player2: {
          name: data.teamAPlayer1Name,
          type: data.teamAPlayer1Type,
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
            <TextField
              sx={{ width: "50%", paddingRight: "8px" }}
              autoFocus
              margin="dense"
              id="teamAPlayer1Name"
              label="Player 1 Name"
              type="text"
              variant="outlined"
              size="small"
              {...register("teamAPlayer1Name")}
            />
            <FormControl sx={{ width: "50%", marginTop: "8px" }} size="small">
              <InputLabel id="teamAPlayer1Type">Player Type</InputLabel>
              <Select
                labelId="teamAPlayer1Type"
                id="teamAPlayer1Type"
                label="Player Type"
                {...register("teamAPlayer1Type")}
              >
                <MenuItem value="Batsman">Batsman</MenuItem>
                <MenuItem value="Bowler">Bowler</MenuItem>
                <MenuItem value="Fielder">Fielder</MenuItem>
                <MenuItem value="Wicket-keeper">Wicket-keeper</MenuItem>
                <MenuItem value="All-rounder">All-rounder</MenuItem>
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
