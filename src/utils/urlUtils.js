export const shortenUrl = (original, shortcode, validity) => {
  const urls = JSON.parse(localStorage.getItem("urls")) || [];
  const code = shortcode || Math.random().toString(36).substring(2, 7);
  const expiry = validity ? new Date(Date.now() + validity * 60000).toISOString() : "Never";

  urls.push({
    original,
    shortcode: code,
    expiry,
    clicks: [],
  });

  localStorage.setItem("urls", JSON.stringify(urls));
};
