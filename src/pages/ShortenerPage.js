import React from "react";
import ShortenForm from "../components/ShortenForm";
import UrlTable from "../components/UrlTable";
import { Container, Typography } from "@mui/material";

const ShortenerPage = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>URL Shortener</Typography>
      <ShortenForm />
      <UrlTable />
    </Container>
  );
};

export default ShortenerPage;
