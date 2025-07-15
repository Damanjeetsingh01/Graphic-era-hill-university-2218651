

const log = (message, meta = {}) => {
  const timestamp = new Date().toISOString();
  console.log(`[LOG] ${timestamp} - ${message}`, meta);

  const existing = JSON.parse(localStorage.getItem("logs") || "[]");
  existing.push({ timestamp, message, ...meta });
  localStorage.setItem("logs", JSON.stringify(existing));
};

export default log;
