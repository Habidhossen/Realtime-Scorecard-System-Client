import {
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

const ScorecardTable = ({ bowlingTeam, battingTeam }) => {
  return (
    <div>
      {/* SCORECARD TABLE (Batting Team) */}
      <TableContainer component={Paper}>
        <Typography
          component="h6"
          variant="h6"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "16px",
            marginY: "14px",
          }}
        >
          {battingTeam.name} Batting Scorecard
        </Typography>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Batsman</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>DM</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>R</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>B</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>4s</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>6s</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>SR</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {battingTeam.players.map((row) => (
              <TableRow key={row._id} sx={{}}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.dismissals}</TableCell>
                <TableCell>{row.runsScored}</TableCell>
                <TableCell>{row.ballsFaced}</TableCell>
                <TableCell>{row.fours}</TableCell>
                <TableCell>{row.sixes}</TableCell>
                <TableCell>{row.strikeRate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* SCORECARD TABLE (Bowling Team) */}
      <TableContainer component={Paper} sx={{ marginTop: "16px" }}>
        <Typography
          component="h6"
          variant="h6"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "16px",
            marginY: "14px",
          }}
        >
          {bowlingTeam.name} Bowling Scorecard
        </Typography>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Bowler</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Over</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>R</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>W</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>NB</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>WD</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>ECO</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bowlingTeam.players.map((row) => (
              <TableRow key={row._id} sx={{}}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{`${Math.floor(
                  row.ballsBowled / 6
                )}.${row.ballsBowled % 6}`}</TableCell>
                <TableCell>{row.runsConceded}</TableCell>
                <TableCell>{row.wicketsTaken}</TableCell>
                <TableCell>{row.noBalls}</TableCell>
                <TableCell>{row.wideBalls}</TableCell>
                <TableCell>{row.economyRate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* SCORECARD TABLE (Batting Team) */}
      <TableContainer component={Paper} sx={{ marginTop: "16px" }}>
        <Typography
          component="h6"
          variant="h6"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "16px",
            marginY: "14px",
          }}
        >
          {bowlingTeam.name} Batting Scorecard
        </Typography>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Batsman</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>DM</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>R</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>B</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>4s</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>6s</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>SR</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bowlingTeam.players.map((row) => (
              <TableRow key={row._id} sx={{}}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.dismissals}</TableCell>
                <TableCell>{row.runsScored}</TableCell>
                <TableCell>{row.ballsFaced}</TableCell>
                <TableCell>{row.fours}</TableCell>
                <TableCell>{row.sixes}</TableCell>
                <TableCell>{row.strikeRate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* SCORECARD TABLE (Bowling Team) */}
      <TableContainer component={Paper} sx={{ marginTop: "16px" }}>
        <Typography
          component="h6"
          variant="h6"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "16px",
            marginY: "14px",
          }}
        >
          {battingTeam.name} Bowling Scorecard
        </Typography>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Bowler</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Over</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>R</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>W</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>NB</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>WD</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>ECO</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {battingTeam.players.map((row) => (
              <TableRow key={row._id} sx={{}}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{`${Math.floor(
                  row.ballsBowled / 6
                )}.${row.ballsBowled % 6}`}</TableCell>
                <TableCell>{row.runsConceded}</TableCell>
                <TableCell>{row.wicketsTaken}</TableCell>
                <TableCell>{row.noBalls}</TableCell>
                <TableCell>{row.wideBalls}</TableCell>
                <TableCell>{row.economyRate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ScorecardTable;
