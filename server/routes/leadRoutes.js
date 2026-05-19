const express = require("express");
const router = express.Router();

const {
  createLead,
  getLeads,
  updateLead,
  deleteLead,
} = require("../controllers/leadController");

const protect = require("../middleware/authMiddleware");
const roleCheck = require("../middleware/roleMiddleware");

// CREATE (admin, recruiter)
router.post("/", protect, roleCheck("admin", "recruiter"), createLead);

// READ (all logged-in users)
router.get("/", protect, getLeads);

// UPDATE (admin, recruiter)
router.put("/:id", protect, roleCheck("admin", "recruiter"), updateLead);

// DELETE (ONLY admin)
router.delete("/:id", protect, roleCheck("admin"), deleteLead);

module.exports = router;