const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/greet", (req, res) => {
  const name = req.query.name || "World";
  const message = `Hello, ${name}! Welcome to Fullstack App`;
  res.json({ message: message });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
