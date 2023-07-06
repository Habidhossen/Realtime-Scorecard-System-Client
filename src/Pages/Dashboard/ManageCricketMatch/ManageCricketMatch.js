import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import Loader from "../../Shared/Loader/Loader";

const ManageCricketMatch = () => {
  // fetch data from database by react query
  const { data: cricketMatches, isLoading, refetch } = useQuery(
    "cricketMatch",
    () =>
      fetch("http://localhost:5000/api/v1/cricket-match").then((res) =>
        res.json()
      )
  );

  // loading
  if (isLoading) {
    return <Loader />;
  }

  // handle service delete button
  const handleDeleteBtn = (id) => {
    const confirm = window.confirm("Are you sure you want to Delete?");

    if (confirm) {
      fetch(`http://localhost:5000/api/v1/cricket-match/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "success") {
            toast.success("Successfully match deleted!");
            refetch();
          }
        });
    }
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
            Manage Cricket Match
          </Typography>
        </Box>
      </Box>

      {/* render table components */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Match</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Total Over</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Venue</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Date and Time</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cricketMatches.data.map((row, index) => (
              <TableRow key={row._id} sx={{}}>
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>{row.totalOver} over</TableCell>
                <TableCell>{row.venue}</TableCell>
                <TableCell>{row.date}</TableCell>
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
    </Box>
  );
};

export default ManageCricketMatch;
