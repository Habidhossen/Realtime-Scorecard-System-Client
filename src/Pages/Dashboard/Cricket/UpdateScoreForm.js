import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

const UpdateScoreForm = ({ bowlingTeam, battingTeam, matchId }) => {
  // handle react-hook-form
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  // handle form data
  const onSubmit = (data) => {
    const updateScoreData = {
      ball: "1",
      ...data,
    };

    // send data to the server
    fetch(`http://localhost:5000/api/v1/update-cricket-score/${matchId}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updateScoreData),
    })
      .then((response) => response.json())
      .then((data) => data);
    // toast.success("Event added successfully", {
    //   theme: "colored",
    //   autoClose: 3000,
    // });
    reset();
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ height: "370px", padding: "14px" }}
    >
      {/* Select Batsman */}
      <Typography
        component="p"
        variant="p"
        sx={{ fontSize: "14px", fontWeight: "bold", marginBottom: "8px" }}
      >
        Select Batsman
      </Typography>
      <FormControl size="small" sx={{ width: "50%", paddingRight: "8px" }}>
        <InputLabel id="strikeBatsman">Strike</InputLabel>
        <Select
          labelId="strikeBatsman"
          id="strikeBatsman"
          label="Strike"
          defaultValue=""
          {...register("strikeBatsman")}
        >
          {battingTeam.players
            .filter((player) => player.dismissals === "Not Out") //filter data which players are Not Out yet
            .map((player) => (
              <MenuItem key={player._id} value={player._id}>
                {player.name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      <FormControl size="small" sx={{ width: "50%" }}>
        <InputLabel id="nonStrikeBatsman">Non-Strike</InputLabel>
        <Select
          labelId="nonStrikeBatsman"
          id="nonStrikeBatsman"
          label="Non-Strike"
          defaultValue=""
          {...register("nonStrikeBatsman")}
        >
          {battingTeam.players
            .filter((player) => player.dismissals === "Not Out") //filter data which players are Not Out yet
            .map((player) => (
              <MenuItem key={player._id} value={player._id}>
                {player.name}
              </MenuItem>
            ))}
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
        <InputLabel id="strikeBowler">Bowler</InputLabel>
        <Select
          labelId="strikeBowler"
          id="strikeBowler"
          label="Bowler"
          defaultValue=""
          {...register("strikeBowler")}
        >
          {bowlingTeam.players.map((player) => (
            <MenuItem key={player._id} value={player._id}>
              {player.name}
            </MenuItem>
          ))}
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
      <FormControl size="small" sx={{ width: "50%", paddingRight: "8px" }}>
        <InputLabel id="run">Run</InputLabel>
        <Select
          labelId="run"
          id="run"
          label="Run"
          defaultValue="0"
          {...register("run")}
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
        <InputLabel id="extraRunType">Select if the run is extra</InputLabel>
        <Select
          labelId="extraRunType"
          id="extraRunType"
          label="Select if the run is extra"
          defaultValue=""
          {...register("extraRunType")}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Wide">Wide</MenuItem>
          <MenuItem value="No ball">No ball</MenuItem>
        </Select>
      </FormControl>
      <FormControl size="small" fullWidth sx={{ marginTop: "10px" }}>
        <InputLabel id="outType">Select if the Batsman is out</InputLabel>
        <Select
          labelId="outType"
          id="outType"
          label="Select if the Batsman is out"
          defaultValue="Not Out"
          {...register("outType")}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
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
  );
};

export default UpdateScoreForm;
