import React, { useState } from "react";
import { TextField, Button, Stack } from "@mui/material";
import { shortenUrl } from "../utils/urlUtils";

const ShortenForm = () => {
  const [url, setUrl] = useState("");
  const [shortcode, setShortcode] = useState("");
  const [validity, setValidity] = useState("");

  const handleSubmit = () => {
    if (!url.match(/^https?:\/\//)) {
      alert("Please enter a valid URL (starts with http/https)");
      return;
    }

    shortenUrl(url, shortcode, validity);
    setUrl("");
    setShortcode("");
    setValidity("");
  };

  return (
    <Stack spacing={2}>
      <TextField label="Original URL" value={url} onChange={(e) => setUrl(e.target.value)} />
      <TextField label="Custom Shortcode (Optional)" value={shortcode} onChange={(e) => setShortcode(e.target.value)} />
      <TextField label="Validity in Minutes (Optional)" value={validity} type="number" onChange={(e) => setValidity(e.target.value)} />
      <Button variant="contained" onClick={handleSubmit}>Shorten</Button>
    </Stack>
  );
};

export default ShortenForm;
