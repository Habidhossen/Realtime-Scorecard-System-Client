import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import NewsTable from "./NewsTable";

const News = () => {
  // modal state
  const [open, setOpen] = useState(false);

  // modal open
  const handleClickOpen = () => {
    setOpen(true);
  };
  // modal close
  const handleClose = () => {
    setOpen(false);
  };

  // handle react-hook-form
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  // handle form data
  const onSubmit = (data) => {
    // get formatted current date
    const currentDate = new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    // Check if the user provided a value for 'coverImgLink'
    if (!data.coverImgLink) {
      data.coverImgLink =
        "https://i.ibb.co/sCJj8SN/cricket-scorecard-news-cover.png"; // If 'coverImgLink' is not provided, set the default value
    }
    // create a new formatted object
    const newsData = {
      newsTitle: data.title,
      coverImgLink: data.coverImgLink,
      content: data.content,
      publishDate: currentDate,
    };

    // send data to the server
    fetch(
      "https://realtime-cricket-scorecard-server.onrender.com/api/v1/news",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newsData),
      }
    )
      .then((response) => response.json())
      .then((data) => data);
    toast.success("Successfully news added!");
    reset();
    handleClose();
  };

  return (
    <Box>
      <Box mb={4}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography component="h6" variant="h6" sx={{ fontWeight: "bold" }}>
            Manage Sport News
          </Typography>
          <Button variant="contained" onClick={handleClickOpen}>
            Add New blog
          </Button>
        </Box>
        <Dialog
          open={open}
          onClose={handleClose}
          component="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <DialogTitle>Create a new sport news</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Title"
              type="text"
              fullWidth
              variant="outlined"
              size="small"
              {...register("title", { required: true })}
              error={errors.title}
              helperText={errors.title && "News title is required"}
            />
            <TextField
              autoFocus
              margin="dense"
              id="coverImgLink"
              label="Cover Image Link"
              type="text"
              fullWidth
              variant="outlined"
              size="small"
              {...register("coverImgLink")}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Content"
              type="text"
              multiline
              rows={4}
              fullWidth
              variant="outlined"
              size="small"
              {...register("content", { required: true })}
              error={errors.content}
              helperText={errors.content && "News content is required"}
            />
            {/* <Button
              sx={{ marginTop: "10px" }}
              variant="outlined"
              component="label"
              startIcon={<PhotoCamera />}
            >
              Upload Cover Image
              <input hidden accept="image/*" multiple type="file" />
            </Button> */}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Save</Button>
          </DialogActions>
        </Dialog>
      </Box>
      {/* render table components */}
      <NewsTable />
    </Box>
  );
};

export default News;
