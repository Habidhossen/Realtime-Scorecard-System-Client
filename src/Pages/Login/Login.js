import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
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
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
        width: "350px",
        padding: "40px 30px",
        borderRadius: "10px",
        margin: "150px auto",
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
      <FormControl sx={{ mb: 5 }} variant="outlined">
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
      <Button type="submit" variant="contained" color="primary" size="large">
        Login
      </Button>
    </Box>
  );
};

export default Login;
