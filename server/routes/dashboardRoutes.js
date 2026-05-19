const express = require("express");
const router = express.Router();

const { getStats } = require("../controllers/dashboardController");
const protect = require("../middleware/authMiddleware");

// DASHBOARD STATS
router.get("/stats", protect, getStats);

module.exports = router;