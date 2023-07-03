import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const SportsNewsCard = ({ news }) => {
  return (
    <Box gridColumn="span 4">
      <Card sx={{ maxWidth: 370 }}>
        <CardMedia sx={{ height: 180 }} image={news.coverImgLink} />
        <CardContent>
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
            <CalendarTodayIcon sx={{ fontSize: "13px" }} /> {news.publishDate}
          </Typography>
          <Typography
            component="h6"
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontSize: "16px",
              marginY: "10px",
            }}
          >
            {news.newsTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {news.content}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            component={Link}
            to={`/sport-news/${news._id}`}
            size="small"
            color="primary"
          >
            Read More <ArrowRightAltIcon />
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default SportsNewsCard;
