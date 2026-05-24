const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const requirementRoutes = require("./routes/requirementRoutes");

const app = express();

/* ================= DATABASE ================= */

connectDB();

/* ================= MIDDLEWARE ================= */

app.use(cors());

app.use(express.json());

/* ================= ROUTES ================= */

app.use("/api/auth", authRoutes);

app.use("/api/requirements", requirementRoutes);

/* ================= TEST ROUTE ================= */

app.get("/", (req, res) => {
  res.send("API is running...");
});

/* ================= SERVER ================= */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});