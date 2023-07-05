import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import Loader from "../../Shared/Loader/Loader";
import SportsNewsCard from "../SportsNews/SportsNewsCard";

const AllSportsNews = () => {
  // fetch data from database by react query
  const { data: news, isLoading, refetch } = useQuery("news", () =>
    fetch("http://localhost:5000/api/v1/news").then((res) => res.json())
  );

  // loading
  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container maxWidth="lg" sx={{ marginY: "90px" }}>
      <Typography
        component="h6"
        variant="h6"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "24px",
          marginBottom: "30px",
          background:
            "-webkit-linear-gradient(45deg, #b80f9d 7.77%, #1b1e5c 95.22%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        All Sport News
      </Typography>

      <Grid container spacing={2}>
        {news.data
          .map((news) => <SportsNewsCard key={news._id} news={news} />)
          .reverse()}
      </Grid>
    </Container>
  );
};

export default AllSportsNews;
