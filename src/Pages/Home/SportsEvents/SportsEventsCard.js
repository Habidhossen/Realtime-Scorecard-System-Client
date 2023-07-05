import { Grid, Paper, Typography } from "@mui/material";
import React from "react";

const SportsEventsCard = ({ event }) => {
  return (
    <Grid item xs={12} sm={12} md={12}>
      <Paper
        sx={{
          backgroundImage:
            "linear-gradient(105.89deg, #b80f9d 7.77%, #1b1e5c 95.22%)",
          color: "#ffffff",
          borderRadius: "8px",
          padding: "50px",
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
          }}
        >
          ({event.sportType} Event)
        </Typography>
        <Typography
          component="p"
          variant="p"
          sx={{
            textAlign: "center",
            fontSize: "16px",
            marginY: "40px",
          }}
        >
          {event.desc}
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
    </Grid>
  );
};

export default SportsEventsCard;
