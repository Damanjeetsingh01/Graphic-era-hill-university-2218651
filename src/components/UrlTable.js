import React from "react";
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";

const UrlTable = () => {
  const urls = JSON.parse(localStorage.getItem("urls")) || [];

  return (
    <>
      <Typography variant="h6">Shortened URLs</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Original</TableCell>
            <TableCell>Short</TableCell>
            <TableCell>Expiry</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {urls.map((u, i) => (
            <TableRow key={i}>
              <TableCell>{u.original}</TableCell>
              <TableCell><a href={`/${u.shortcode}`}>{window.location.origin}/{u.shortcode}</a></TableCell>
              <TableCell>{u.expiry}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default UrlTable;
