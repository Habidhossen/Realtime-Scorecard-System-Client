import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";

const CricketMatchCard = ({ match }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Paper
        elevation={0}
        sx={{
          borderRadius: "10px",
          padding: "20px 14px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
          }}
        >
          <Typography
            component="p"
            variant="p"
            sx={{
              fontSize: "14px",
            }}
          >
            {match.date}
          </Typography>
          <Typography
            component="p"
            variant="p"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "2px",
              fontSize: "14px",
            }}
          >
            <LocationOnRoundedIcon
              sx={{ fontSize: "16px", color: "#b80f9d" }}
            />{" "}
            {match.venue}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            component="h6"
            variant="h6"
            sx={{
              textTransform: "uppercase",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            {match.team1.name}
          </Typography>
          <Typography
            component="h6"
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            <Typography
              component="span"
              variant="span"
              sx={{
                fontWeight: "400",
                fontSize: "13px",
              }}
            >
              {`(${match.team1.overs}/${match.totalOver} over) `}
            </Typography>
            {`${match.team1.runs}/${match.team1.wickets}`}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            component="h6"
            variant="h6"
            sx={{
              textTransform: "uppercase",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            {match.team2.name}
          </Typography>
          <Typography
            component="h6"
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            <Typography
              component="span"
              variant="span"
              sx={{
                fontWeight: "400",
                fontSize: "13px",
              }}
            >
              {`(${match.team2.overs}/${match.totalOver} over) `}
            </Typography>
            {`${match.team2.runs}/${match.team2.wickets}`}
          </Typography>
        </Box>

        <Typography
          component="p"
          variant="p"
          sx={{
            fontSize: "14px",
            marginTop: "20px",
            color: "#b80f9d",
          }}
        >
          {match.status}
        </Typography>
      </Paper>
    </Grid>
  );
};

export default CricketMatchCard;
