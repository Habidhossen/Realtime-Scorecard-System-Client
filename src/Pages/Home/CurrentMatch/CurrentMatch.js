import { Container, Paper, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const CurrentMatch = () => {
  // scorecard button
  const scorecardButton = {
    display: "inline-flex",
    alignItems: "center",
    gap: "4px",
    fontSize: "14px",
    backgroundColor: "transparent",
    color: "black",
    border: "black 1.5px solid",
    borderRadius: "30px",
    padding: "8px 20px",
    textDecoration: "none",
  };

  return (
    <Container maxWidth="lg" sx={{ marginTop: "70px" }}>
      <Typography
        component="h6"
        variant="h6"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "24px",
          marginY: "20px",
        }}
      >
        Live Cricket Matches
      </Typography>
      <Paper
        elevation={0}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "8px",
          paddingY: "50px",
        }}
      >
        <Typography
          component="h6"
          variant="h6"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "18px",
            marginBottom: "4px",
          }}
        >
          Bangladesh vs India
        </Typography>
        <Typography
          component="p"
          variant="p"
          sx={{
            textAlign: "center",
            fontSize: "14px",
            marginBottom: "14px",
          }}
        >
          Bangladesh won the toss and elect Bat
        </Typography>
        <Typography
          component="h6"
          variant="h6"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "22px",
            marginBottom: "40px",
          }}
        >
          Bangladesh 56/0 (8.2 overs)
        </Typography>
        <Link to="" style={scorecardButton}>
          Scorecard & more info
        </Link>
      </Paper>
    </Container>
  );
};

export default CurrentMatch;
