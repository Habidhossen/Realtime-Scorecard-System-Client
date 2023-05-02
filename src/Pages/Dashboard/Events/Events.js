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
import EventsTable from "./EventsTable";

const Events = () => {
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
            Manage Sport Events
          </Typography>
          <Button variant="contained" onClick={handleClickOpen}>
            Add New Event
          </Button>
        </Box>
        <Dialog
          open={open}
          onClose={handleClose}
          component="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <DialogTitle>Create a new event</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Event Name"
              type="text"
              fullWidth
              variant="outlined"
              size="small"
              {...register("name", { required: true })}
              error={errors.name}
              helperText={errors.name && "Event name is required"}
            />

            <TextField
              sx={{ width: "50%", paddingRight: "4px" }}
              autoFocus
              margin="dense"
              id="startDate"
              label="Start Date"
              type="date"
              variant="outlined"
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
              {...register("startDate", { required: true })}
              error={errors.startDate}
              helperText={errors.startDate && "Start date is required"}
            />

            <TextField
              sx={{ width: "50%", paddingLeft: "4px", marginBottom: "8px" }}
              autoFocus
              margin="dense"
              id="endDate"
              label="End Date"
              type="date"
              variant="outlined"
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
              {...register("endDate", { required: true })}
              error={errors.endDate}
              helperText={errors.endDate && "End date is required"}
            />

            <FormControl fullWidth size="small">
              <InputLabel id="sport">Sport</InputLabel>
              <Select
                labelId="sport"
                id="sport"
                label="Sport"
                {...register("sport", { required: true })}
                error={errors.sport}
              >
                <MenuItem value="Cricket">Cricket</MenuItem>
                <MenuItem value="Football">Football</MenuItem>
              </Select>
              <FormHelperText sx={{ color: "#d32f2f" }}>
                {errors.sport && "Sport is required"}
              </FormHelperText>
            </FormControl>

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
              helperText={errors.venue && "Venue is required"}
            />

            <TextField
              autoFocus
              margin="dense"
              id="desc"
              label="Description"
              type="text"
              multiline
              rows={4}
              fullWidth
              variant="outlined"
              size="small"
              {...register("desc", { required: true })}
              error={errors.desc}
              helperText={errors.desc && "Description is required"}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Save</Button>
          </DialogActions>
        </Dialog>
      </Box>
      {/* render table components */}
      <EventsTable />
    </Box>
  );
};

export default Events;
