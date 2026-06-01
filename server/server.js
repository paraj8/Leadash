const express = require("express");
const cors = require("cors");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const connectDB = require("./config/db");
const otpRoutes = require("./routes/otpRoutes");
const authRoutes = require("./routes/authRoutes");
const requirementRoutes = require("./routes/requirementRoutes");
const workerProfileRoutes = require("./routes/workerProfileRoutes");
const taskRoutes = require("./routes/taskRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

/* ================= DATABASE ================= */

connectDB();

/* ================= MIDDLEWARE ================= */

app.use(cors());

app.use(express.json());

/* ================= ROUTES ================= */


app.use("/api/otp", otpRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/requirements", requirementRoutes);
app.use("/api/worker-profile", workerProfileRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/users", userRoutes);

/* ================= TEST ROUTE ================= */

app.get("/", (req, res) => {
  res.send("API is running...");
});

/* ================= SERVER ================= */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});