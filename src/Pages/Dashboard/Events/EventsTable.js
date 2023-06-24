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
import { useQuery } from "react-query";
import Loader from "../../Shared/Loader/Loader";

const EventsTable = () => {
  // fetch data from database by react query
  const { data: events, isLoading, refetch } = useQuery("event", () =>
    fetch("http://localhost:5000/api/v1/event").then((res) => res.json())
  );

  // loading
  if (isLoading) {
    return <Loader />;
  }

  // handle service delete button
  const handleDeleteBtn = (id) => {
    const confirm = window.confirm("Are you sure you want to Delete?");

    if (confirm) {
      fetch(`http://localhost:5000/api/v1/event/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "success") {
            // toast.success("Event deleted successfully", {
            //   autoClose: 3000,
            // });
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
            <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Start Date</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>End Date</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Sports</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Venue</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {events.data.map((row, index) => (
            <TableRow key={row._id} sx={{}}>
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell>{row.eventName}</TableCell>
              <TableCell>{row.startDate}</TableCell>
              <TableCell>{row.endDate}</TableCell>
              <TableCell>{row.sportType}</TableCell>
              <TableCell>{row.venue}</TableCell>
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

export default EventsTable;
