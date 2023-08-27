import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Loader from "../../Shared/Loader/Loader";
import SportsNewsCard from "./SportsNewsCard";

const SportsNews = () => {
  // fetch data from database by react query
  const { data: news, isLoading, refetch } = useQuery("news", () =>
    fetch(
      "https://realtime-cricket-scorecard-server.onrender.com/api/v1/news"
    ).then((res) => res.json())
  );

  // loading
  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container maxWidth="lg" sx={{ marginY: "90px" }}>
      {/* Comp Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "30px",
        }}
      >
        <Typography
          component="h6"
          variant="h6"
          sx={{
            fontWeight: "bold",
            fontSize: "24px",
          }}
        >
          Latest{" "}
          <Typography
            component="span"
            variant="span"
            sx={{
              background:
                "-webkit-linear-gradient(45deg, #b80f9d 7.77%, #1b1e5c 95.22%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Sport News
          </Typography>
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            sx={{
              fontWeight: "bold",
              fontSize: "15px",
              textTransform: "capitalize",
              background:
                "-webkit-linear-gradient(45deg, #b80f9d 7.77%, #1b1e5c 95.22%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            component={Link}
            to="all-sports-news"
            size="small"
            color="primary"
          >
            See all News <ArrowRightAltIcon />
          </Button>
        </Box>
      </Box>

      <Grid container spacing={2}>
        {news.data
          .map((news) => <SportsNewsCard key={news._id} news={news} />)
          .reverse()
          .slice(0, 3)}
      </Grid>
    </Container>
  );
};

export default SportsNews;
