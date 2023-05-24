import DeleteIcon from "@mui/icons-material/Delete";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const blogRows = [
  {
    id: 1,
    blogTitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a elit in nisi varius placerat.",
    publishDate: "20 May 2023",
  },
  {
    id: 2,
    blogTitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a elit in nisi varius placerat.",
    publishDate: "24 May 2023",
  },
  {
    id: 3,
    blogTitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a elit in nisi varius placerat.",
    publishDate: "26 May 2023",
  },
];

const NewsTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Index</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Blog Title</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Publish Date</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {blogRows.map((row) => (
            <TableRow key={row.id} sx={{}}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>{row.blogTitle}</TableCell>
              <TableCell>{row.publishDate}</TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  color="error"
                  size="small"
                  startIcon={<DeleteIcon />}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default NewsTable;
