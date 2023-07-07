import { Box, Typography } from "@mui/material";
import React from "react";
import Footer from "../../Shared/Footer/Footer";

const DashboardHome = () => {
  // get formatted current date
  const currentDateTime = new Date();
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  const formattedDateTime = currentDateTime.toLocaleDateString(
    "en-US",
    options
  );

  return (
    <Box>
      <Box sx={{ marginBottom: "380px" }}>
        <Typography
          variant="h6"
          component="h6"
          sx={{
            fontSize: "24px",
            fontWeight: "bold",
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          Welcome to Realtime Scorecard System Dashboard
        </Typography>
        <Typography
          variant="h6"
          component="h6"
          sx={{
            fontSize: "18px",
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          {formattedDateTime}
        </Typography>
      </Box>

      <Footer />
    </Box>
  );
};

export default DashboardHome;
