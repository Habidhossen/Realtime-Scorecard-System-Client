import { Box, Typography } from "@mui/material";
import React from "react";
import Footer from "../../Shared/Footer/Footer";

const DashboardHome = () => {
  // get formatted current date
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Box>
      <Box sx={{ marginBottom: "380px" }}>
        <Typography
          variant="h6"
          component="h6"
          sx={{ fontSize: "24px", fontWeight: "bold", textAlign: "center" }}
        >
          Welcome to Realtime Scorecard System Dashboard
        </Typography>
        <Typography
          variant="h6"
          component="h6"
          sx={{ fontSize: "18px", textAlign: "center" }}
        >
          {currentDate}
        </Typography>
      </Box>

      <Footer />
    </Box>
  );
};

export default DashboardHome;
