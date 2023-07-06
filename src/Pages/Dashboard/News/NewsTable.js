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
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import Loader from "../../Shared/Loader/Loader";

const NewsTable = () => {
  // fetch data from database by react query
  const { data: news, isLoading, refetch } = useQuery("news", () =>
    fetch("http://localhost:5000/api/v1/news").then((res) => res.json())
  );

  // loading
  if (isLoading) {
    return <Loader />;
  }

  // handle service delete button
  const handleDeleteBtn = (id) => {
    const confirm = window.confirm("Are you sure you want to Delete?");

    if (confirm) {
      fetch(`http://localhost:5000/api/v1/news/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "success") {
            toast.success("Successfully news deleted!");
            refetch();
          }
        });
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Index</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>News Title</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Content</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Publish Date</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {news.data.map((row, index) => (
            <TableRow key={row._id} sx={{}}>
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell>{row.newsTitle}</TableCell>
              <TableCell>{row.content.substring(0, 30) + " ..."}</TableCell>
              <TableCell>{row.publishDate}</TableCell>
              <TableCell>
                <Button
                  onClick={() => handleDeleteBtn(row._id)}
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
