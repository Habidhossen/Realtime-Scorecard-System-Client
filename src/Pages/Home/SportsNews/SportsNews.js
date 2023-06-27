import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Loader from "../../Shared/Loader/Loader";
import SportsNewsCard from "./SportsNewsCard";

const SportsNews = () => {
  // fetch data from database by react query
  const { data: news, isLoading, refetch } = useQuery("news", () =>
    fetch("http://localhost:5000/api/v1/news").then((res) => res.json())
  );

  // loading
  if (isLoading) {
    return <Loader />;
  }

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
        Latest Sport News
      </Typography>

      {/* <Grid container>
        {newsData.map((news) => (
          <SportsNewsCard />
        ))}
      </Grid> */}

      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        {news.data.map((news) => (
          <SportsNewsCard key={news._id} news={news} />
        ))}
      </Box>

      {/* footer button */}
      <Box
        sx={{ display: "flex", justifyContent: "flex-end", marginTop: "10px" }}
      >
        <Button
          sx={{
            fontWeight: "bold",
            fontSize: "15px",
            textTransform: "capitalize",
          }}
          component={Link}
          to="all-sports-news"
          size="small"
          color="primary"
        >
          See all News <ArrowRightAltIcon />
        </Button>
      </Box>
    </Container>
  );
};

export default SportsNews;
