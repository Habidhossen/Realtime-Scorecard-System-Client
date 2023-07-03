import { Paper, Typography } from "@mui/material";
import React from "react";

const SportsEventsCard = ({ event }) => {
  return (
    <Paper
      sx={{
        backgroundImage: "linear-gradient(to right, #673AB7, #512DA8)",
        color: "#ffffff",
        borderRadius: "8px",
        paddingY: "60px",
      }}
    >
      <Typography
        component="h6"
        variant="h6"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "34px",
          textTransform: "uppercase",
          marginBottom: "38px",
        }}
      >
        {event.eventName}
      </Typography>
      <Typography
        component="h6"
        variant="h6"
        sx={{
          textAlign: "center",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        {event.startDate} - {event.endDate}
      </Typography>
      <Typography
        component="h6"
        variant="h6"
        sx={{
          textAlign: "center",
          fontSize: "16px",
        }}
      >
        Venue: {event.venue}
      </Typography>
    </Paper>
  );
};

export default SportsEventsCard;
