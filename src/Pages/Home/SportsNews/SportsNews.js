import { Box, Container, Typography } from "@mui/material";
import React from "react";
import SportsNewsCard from "./SportsNewsCard";

const SportsNews = () => {
  const newsData = [
    {
      id: 1,
      newsTitle:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nulla asperiores aliquid laboriosam.",
      newsDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A odio quod est id tenetur, cumque ad ea magni aliquam quam molestiae sint quo dolorum suscipit. Maxime corporis suscipit dolor, cum earum quod commodi quas ea.",
      publishDate: "25 May 2023",
      newsCover:
        "https://preview.colorlib.com/theme/soccer/images/bg_3.jpg.webp",
    },
    {
      id: 2,
      newsTitle:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nulla asperiores aliquid laboriosam.",
      newsDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A odio quod est id tenetur, cumque ad ea magni aliquam quam molestiae sint quo dolorum suscipit. Maxime corporis suscipit dolor, cum earum quod commodi quas ea.",
      publishDate: "26 May 2023",
      newsCover:
        "https://preview.colorlib.com/theme/soccer/images/bg_3.jpg.webp",
    },
    {
      id: 3,
      newsTitle:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nulla asperiores aliquid laboriosam.",
      newsDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A odio quod est id tenetur, cumque ad ea magni aliquam quam molestiae sint quo dolorum suscipit. Maxime corporis suscipit dolor, cum earum quod commodi quas ea.",
      publishDate: "27 May 2023",
      newsCover:
        "https://preview.colorlib.com/theme/soccer/images/bg_3.jpg.webp",
    },
    {
      id: 4,
      newsTitle:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nulla asperiores aliquid laboriosam.",
      newsDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A odio quod est id tenetur, cumque ad ea magni aliquam quam molestiae sint quo dolorum suscipit. Maxime corporis suscipit dolor, cum earum quod commodi quas ea.",
      publishDate: "28 May 2023",
      newsCover:
        "https://preview.colorlib.com/theme/soccer/images/bg_3.jpg.webp",
    },
  ];

  return (
    <Container maxWidth="lg">
      <Typography
        component="h6"
        variant="h6"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "26px",
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
        {newsData.map((news) => (
          <SportsNewsCard />
        ))}
      </Box>
    </Container>
  );
};

export default SportsNews;
