const express = require("express");

const router = express.Router();

const {
  getManagers,
} = require("../controllers/userController");

const protect = require("../middleware/authMiddleware");

const roleCheck = require("../middleware/roleMiddleware");

/* ================= MANAGERS ================= */

router.get(
  "/managers",
  protect,
  roleCheck("admin"),
  getManagers
);

module.exports = router;