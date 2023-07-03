import { Container } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loader from "../../Shared/Loader/Loader";

const SportsNewsDetails = () => {
  const { newsId } = useParams(); // get newsId from params

  // fetch data from database by react query
  const { data: news, isLoading } = useQuery("news", () =>
    fetch(`http://localhost:5000/api/v1/news/${newsId}`).then((res) =>
      res.json()
    )
  );

  // loading
  if (isLoading) {
    return <Loader />;
  }

  // destructuring news data values
  const { newsTitle, coverImgLink, content, publishDate } = news.data;

  return <Container></Container>;
};

export default SportsNewsDetails;
