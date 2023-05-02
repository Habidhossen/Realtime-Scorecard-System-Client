import PhotoCamera from "@mui/icons-material/PhotoCamera";
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
    console.log(data);
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
            Manage Sport Blogs
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
          <DialogTitle>Create a new blog post</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Title"
              type="text"
              fullWidth
              variant="standard"
              {...register("title", { required: true })}
              error={errors.title}
              helperText={errors.title && "Blog title is required"}
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
              variant="standard"
              {...register("content", { required: true })}
              error={errors.content}
              helperText={errors.content && "Blog content is required"}
            />
            <Button
              sx={{ marginTop: "10px" }}
              variant="outlined"
              component="label"
              startIcon={<PhotoCamera />}
            >
              Upload Cover Image
              <input hidden accept="image/*" multiple type="file" />
            </Button>
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
