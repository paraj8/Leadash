const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const roleCheck = require("../middleware/roleMiddleware");

const {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  getDashboardStats,
} = require("../controllers/taskController");




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
  roleCheck("worker", "admin", "manager"),
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
  roleCheck("worker", "admin", "manager"),
  updateTask
);

router.get(
  "/:id",
  protect,
  getTaskById
);

module.exports = router;