const express = require("express");

const router = express.Router();

const {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  getDashboardStats,
} = require("../controllers/taskController");

const protect = require("../middleware/authMiddleware");
const roleCheck = require("../middleware/roleMiddleware");

/* ================= DASHBOARD ================= */

router.get(
  "/dashboard-stats",
  protect,

  getDashboardStats
);

/* ================= TASKS ================= */

router.post(
  "/",
  protect,
  roleCheck("admin", "manager"),
  createTask
);

router.get(
  "/",
  protect,
  getTasks
);

router.put(
  "/:id",
  protect,
  roleCheck("admin", "manager"),
  updateTask
);

router.get(
  "/:id",
  protect,
  getTaskById
);

module.exports = router;