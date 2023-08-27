import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { Container, Typography } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loader from "../../Shared/Loader/Loader";

const SportsNewsDetails = () => {
  const { newsId } = useParams(); // get newsId from params

  // fetch data from database by react query
  const { data: news, isLoading } = useQuery("news", () =>
    fetch(
      `https://realtime-cricket-scorecard-server.onrender.com/api/v1/news/${newsId}`
    ).then((res) => res.json())
  );

  // loading
  if (isLoading) {
    return <Loader />;
  }

  // destructuring news data values
  const { newsTitle, coverImgLink, content, publishDate } = news.data;

  return (
    <Container
      maxWidth="md"
      sx={{
        marginY: "90px",
        background: "white",
        paddingY: "24px",
        borderRadius: "8px",
      }}
    >
      <img src={coverImgLink} alt="" style={{ width: "100%" }} />
      <Typography
        component="p"
        variant="p"
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          fontSize: "14px",
          marginY: "8px",
        }}
      >
        <CalendarTodayIcon sx={{ fontSize: "13px" }} /> {publishDate}
      </Typography>
      <Typography
        component="h6"
        variant="h6"
        sx={{
          fontWeight: "bold",
          fontSize: "18px",
          marginY: "10px",
        }}
      >
        {newsTitle}
      </Typography>
      <Typography
        component="p"
        variant="p"
        sx={{
          fontSize: "16px",
          marginY: "10px",
        }}
      >
        {content}
      </Typography>
    </Container>
  );
};

export default SportsNewsDetails;
