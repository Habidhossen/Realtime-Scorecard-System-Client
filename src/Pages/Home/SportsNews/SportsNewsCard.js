import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const SportsNewsCard = ({ news }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
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
            variant="contained"
            sx={{
              background:
                "linear-gradient(45deg, #b80f9d 7.77%, #1b1e5c 95.22%)",
              marginBottom: "8px",
              marginLeft: "8px",
            }}
          >
            Read More <ArrowRightAltIcon />
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default SportsNewsCard;
