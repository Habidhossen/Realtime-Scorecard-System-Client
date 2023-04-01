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
import React from "react";
import NewsTable from "./NewsTable";

const News = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
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
            All Blogs
          </Typography>
          <Button variant="contained" onClick={handleClickOpen}>
            Add New blog
          </Button>
        </Box>
        <Dialog open={open} onClose={handleClose}>
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
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Save</Button>
          </DialogActions>
        </Dialog>
      </Box>
      <NewsTable />
    </Box>
  );
};

export default News;
