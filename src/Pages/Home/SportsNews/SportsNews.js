import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const SportsNews = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        textAlign: "center",
        marginY: "100px",
      }}
    >
      <Typography variant="h6">Latest Sports News</Typography>
      <Grid container rowSpacing={1}>
        <Grid xs={12} md={6} lg={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://preview.colorlib.com/theme/soccer/images/bg_3.jpg.webp"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                News headline!
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
                quam molestiae sed necessitatibus explicabo itaque aspernatur
                obcaecati minima expedita consectetur!
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Read More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid xs={12} md={6} lg={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://preview.colorlib.com/theme/soccer/images/bg_3.jpg.webp"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                News headline!
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
                quam molestiae sed necessitatibus explicabo itaque aspernatur
                obcaecati minima expedita consectetur!
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Read More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid xs={12} md={6} lg={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://preview.colorlib.com/theme/soccer/images/bg_3.jpg.webp"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                News headline!
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
                quam molestiae sed necessitatibus explicabo itaque aspernatur
                obcaecati minima expedita consectetur!
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Read More</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SportsNews;
