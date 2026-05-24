const express = require("express");

const router = express.Router();

const {
  addCompany,
  getCompanies,
  addSkill,
  getSkills,
} = require("../controllers/requirementController");

const protect = require("../middleware/authMiddleware");

/* ================= COMPANY ================= */

router.post("/companies", protect, addCompany);

router.get("/companies", protect, getCompanies);

/* ================= SKILLS ================= */

router.post("/skills", protect, addSkill);

router.get("/skills", protect, getSkills);

module.exports = router;