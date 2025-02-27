const express = require("express");
const mongoose = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(express.json());

// Default route to check if API is running
app.get("/", (req, res) => {
  res.send("Auth API is running! Use /api/auth for authentication routes.");
});

// Authentication routes
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Auth API running on port ${PORT}`));
