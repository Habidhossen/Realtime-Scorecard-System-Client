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

const EventsTable = () => {
  const eventRows = [
    {
      id: 1,
      eventName: "CSE Cricket Sports",
      startDate: "1 June 2023",
      endDate: "30 June 2023",
      sports: "Cricket",
      venue: "Bangabandhu Freedom Square",
    },
    {
      id: 2,
      eventName: "Pharmacy Cricket Sports",
      startDate: "1 July 2023",
      endDate: "30 July 2023",
      sports: "Cricket",
      venue: "Bangabandhu Freedom Square",
    },
  ];

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
          {eventRows.map((row) => (
            <TableRow key={row.id} sx={{}}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>{row.eventName}</TableCell>
              <TableCell>{row.startDate}</TableCell>
              <TableCell>{row.endDate}</TableCell>
              <TableCell>{row.sports}</TableCell>
              <TableCell>{row.venue}</TableCell>
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

export default EventsTable;
