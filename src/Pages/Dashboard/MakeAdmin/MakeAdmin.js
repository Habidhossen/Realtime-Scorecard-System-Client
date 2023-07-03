import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AdminTable from "./AdminTable";

const MakeAdmin = () => {
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
            Manage Admin
          </Typography>
          <Button variant="contained" onClick={handleClickOpen}>
            Make Admin
          </Button>
        </Box>
        <Dialog
          open={open}
          onClose={handleClose}
          component="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <DialogTitle>Create a new admin</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="text"
              fullWidth
              variant="outlined"
              size="small"
              {...register("name", { required: true })}
              error={errors.name}
              helperText={errors.name && "Name is required"}
            />
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Email"
              type="email"
              fullWidth
              variant="outlined"
              size="small"
              {...register("email", { required: true })}
              error={errors.email}
              helperText={errors.email && "Email is required"}
            />
            <TextField
              autoFocus
              margin="dense"
              id="password"
              label="Password"
              type="password"
              fullWidth
              variant="outlined"
              size="small"
              {...register("password", { required: true })}
              error={errors.password}
              helperText={errors.password && "Password is required"}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Save</Button>
          </DialogActions>
        </Dialog>
      </Box>
      {/* render table components */}
      <AdminTable />
    </Box>
  );
};

export default MakeAdmin;
