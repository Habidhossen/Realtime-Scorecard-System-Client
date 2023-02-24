import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography
} from "@mui/material";
import React from "react";

const Login = () => {
  
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <form>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#fff",
          width: "320px",
          padding: "30px 20px",
          borderRadius: "10px",
          margin: "150px auto",
        }}
      >
        <Typography variant="h6" textAlign="center" fontWeight="600" mb={4}>
          Please login
        </Typography>

        <FormControl sx={{ mb: 2 }} variant="outlined">
          <TextField
            id=""
            type="email"
            label="Email"
            variant="outlined"
            color="secondary"
            required
          />
        </FormControl>

        <FormControl
          sx={{ mb: 3 }}
          variant="outlined"
          color="secondary"
          required
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  // aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          color="secondary"
          size="large"
        >
          Login
        </Button>
      </Box>
    </form>
  );
};

export default Login;
