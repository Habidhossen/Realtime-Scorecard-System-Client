import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";
import Loader from "../Shared/Loader/Loader";

const Login = () => {
  // handle react-hook-form
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const [
    signInWithEmailAndPassword,
    emailUser,
    emailLoading,
    emailError,
  ] = useSignInWithEmailAndPassword(auth);

  // handling login
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  // use navigate hook
  const navigate = useNavigate();

  // if get user
  useEffect(() => {
    if (emailUser) {
      navigate("/dashboard");
    }
  }, [emailUser]);

  // loading
  if (emailLoading) {
    return <Loader />;
  }

  // declare a variable for the error message
  let errorMessage = "";

  // check for errors and updateError
  if (emailError) {
    errorMessage = "Error: " + (emailError && emailError.message);
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
        width: "350px",
        padding: "40px 30px",
        borderRadius: "10px",
        margin: "150px auto 100px auto",
      }}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Typography variant="h6" textAlign="center" fontWeight="600" mb={4}>
        Please login
      </Typography>

      <FormControl sx={{ mb: 2 }} variant="outlined">
        <TextField
          type="email"
          label="Email"
          variant="outlined"
          color="primary"
          {...register("email", { required: true })}
          error={errors.email}
          helperText={errors.email && "Email is required"}
        />
      </FormControl>
      <FormControl variant="outlined">
        <TextField
          type="password"
          label="Password"
          variant="outlined"
          color="primary"
          {...register("password", { required: true })}
          error={errors.password}
          helperText={errors.password && "Password is required"}
        />
      </FormControl>
      <Typography
        variant="span"
        component="span"
        sx={{
          marginY: "8px",
          fontSize: "14px",
          textAlign: "center",
          color: "red",
        }}
      >
        {errorMessage}
      </Typography>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="large"
        sx={{
          background: "linear-gradient(150deg, #b80f9d 7.77%, #1b1e5c 95.22%)",
          marginBottom: "8px",
          marginTop: "16px",
        }}
      >
        Login
      </Button>
    </Box>
  );
};

export default Login;
