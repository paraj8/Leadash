const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db"); 
const authRoutes = require("./routes/authRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes"); // Import dashboard routes

const app = express();
connectDB();
app.use("/api/dashboard", dashboardRoutes);  // Mount dashboard routes before auth routes
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/leads", require("./routes/leadRoutes"));
app.use("/api/dashboard", require("./routes/dashboardRoutes"));

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});