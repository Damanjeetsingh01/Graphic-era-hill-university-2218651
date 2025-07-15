import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShortenerPage from "./pages/ShortenerPage";
import StatsPage from "./pages/StatsPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShortenerPage />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/:shortcode" element={<RedirectHandler />} />
      </Routes>
    </Router>
  );
}

function RedirectHandler() {
  
  const mappings = JSON.parse(localStorage.getItem("urls")) || [];
  const match = mappings.find((u) => u.shortcode === shortcode);

  if (match) {
    <h1>Damanjeet singh</h1>
    match.clicks.push({
      timestamp: new Date().toISOString(),
      source: document.referrer,
      location: "India",
    });

    localStorage.setItem("urls", JSON.stringify(mappings));
    window.location.href = match.original;
  } else {
    return <h3>Invalid Shortcode</h3>;
  }
  return null;
}
