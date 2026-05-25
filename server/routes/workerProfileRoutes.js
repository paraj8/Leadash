const express = require("express");

const router = express.Router();

const {
  saveWorkerProfile,
  getWorkerProfile,
  getAllWorkers,
} = require("../controllers/workerProfileController");

const protect = require("../middleware/authMiddleware");
const roleCheck = require("../middleware/roleMiddleware");

/* ================= WORKER PROFILE ================= */

router.post(
  "/",
  protect,
  roleCheck("worker"),
  saveWorkerProfile
);

router.get(
  "/",
  protect,
  roleCheck("worker"),
  getWorkerProfile
);

router.get(
  "/all",
  protect,
  roleCheck("manager","admin"),
  getAllWorkers
);

module.exports = router;