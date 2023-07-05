import { Container, Paper, Typography } from "@mui/material";
import React from "react";

const AboutPage = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: "120px", marginBottom: "50px" }}>
      <Paper
        sx={{
          backgroundImage:
            "linear-gradient(102.55deg, #85f8c1 20.86%, #078a5b 92.2%)",
          color: "text",
          borderRadius: "8px",
          padding: "30px 20px",
        }}
      >
        <Typography
          component="h6"
          variant="h6"
          sx={{
            fontSize: "16px",
          }}
        >
          Welcome to the University Real-time Scorecard System! <br /> <br />
          The "University Real-time Scorecard System" is a state-of-the-art
          project designed for cricket and football enthusiasts in the
          university sports domain. It aims to provide an immersive experience
          by delivering real-time updates, scores, news, and match schedules.
          <br />
          Stay connected with the latest cricket and football scores from
          universities nationwide, ensuring you never miss a run, wicket, goal,
          or match outcome. Plan your viewing in advance with the comprehensive
          match schedule. <br />
          Get the latest sports news, including team announcements, player
          transfers, and injury updates, keeping you informed about the
          university sports scene. Stay updated on exciting sports events,
          including tournaments, championships, and friendly matches. <br />
          The system goes beyond scorecards by offering live match broadcasting,
          allowing you to watch your favorite cricket and football matches in
          real-time from anywhere. Engage with fellow sports enthusiasts in a
          vibrant community, participating in discussions and sharing insights.
          <br />
          With a user-friendly interface, navigating through match updates, news
          articles, and event details becomes effortless. Join the "University
          Real-time Scorecard System" to embrace the spirit of university sports
          and elevate your cricket and football viewing experience. <br />
          <br />
          Stay connected, informed, and passionate about university sports with
          this comprehensive real-time scorecard system developed by Habid
          Hossen.
        </Typography>
      </Paper>
    </Container>
  );
};

export default AboutPage;
