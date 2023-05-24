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

const SportsNewsCard = () => {
  return (
    <Box gridColumn="span 4">
      <Card sx={{ maxWidth: 370 }}>
        <CardMedia
          sx={{ height: 180 }}
          image="https://preview.colorlib.com/theme/soccer/images/bg_3.jpg.webp"
        />
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
            <CalendarTodayIcon sx={{ fontSize: "13px" }} /> 25 May 2023
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nulla
            asperiores aliquid laboriosam.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A odio
            quod est id tenetur, cumque ad ea magni aliquam quam molestiae sint
            quo dolorum suscipit. Maxime corporis suscipit dolor, cum earum quod
            commodi quas ea.
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            component={Link}
            to="sports-details"
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
