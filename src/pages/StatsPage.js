import React from "react";
import { Typography, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

const StatsPage = () => {
  const urls = JSON.parse(localStorage.getItem("urls")) || [];

  return (
    <div>
      <Typography variant="h5" gutterBottom>Click Stats</Typography>
      {urls.map((url, i) => (
        <div key={i}>
          <Typography variant="subtitle1">{url.original}</Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Timestamp</TableCell>
                <TableCell>Source</TableCell>
                <TableCell>Location</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {url.clicks.map((click, j) => (
                <TableRow key={j}>
                  <TableCell>{click.timestamp}</TableCell>
                  <TableCell>{click.source}</TableCell>
                  <TableCell>{click.location}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ))}
    </div>
  );
};

export default StatsPage;
