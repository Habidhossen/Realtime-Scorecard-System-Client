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
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import auth from "../../../Firebase/Firebase.init";
import Loader from "../../Shared/Loader/Loader";
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

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, {
    sendEmailVerification: true,
  });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  // navigate hook
  const navigate = useNavigate();

  // handle registration using name, email and password
  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    saveUserDB(data.name, data.email);
  };

  // save user to database
  const saveUserDB = (name, email) => {
    const createUserData = { name, email };
    fetch("http://localhost:5000/api/v1/admin", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(createUserData),
    })
      .then((response) => response.json())
      .then((data) => {
        toast.success("Successfully admin added!");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // loading
  if (loading || updating) {
    return <Loader />;
  }

  // declare a variable for the error message
  let errorMessage = "";

  // check for errors and updateError
  if (error || updateError) {
    errorMessage =
      "Error: " +
      ((error && error.message) || (updateError && updateError.message));
  }

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
              {...register("password", {
                required: true,
              })}
              error={errors.password}
              helperText={errors.password && "Password is required"}
            />
          </DialogContent>
          <Typography
            variant="span"
            component="span"
            sx={{ fontSize: "16px", color: "red" }}
          >
            {errorMessage}
          </Typography>
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
