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
    console.log(data);
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
                <MenuItem value="Team A">Team A</MenuItem>
                <MenuItem value="Team B">Team B</MenuItem>
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
