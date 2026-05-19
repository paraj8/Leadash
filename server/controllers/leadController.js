const Lead = require("../models/Lead");

// CREATE LEAD
const createLead = async (req, res) => {
  try {
    const { title, company, status, notes, priority } = req.body;

    const lead = await Lead.create({
      title,
      company,
      status,
      notes,
      priority,
      createdBy: req.user.id,
    });

    res.status(201).json({
      message: "Lead created successfully",
      lead,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET LEADS AS PER THE ROLE
const getLeads = async (req, res) => {
  try {
    let leads;

    // ADMIN → sees everything
    if (req.user.role === "admin") {
      leads = await Lead.find()
        .populate("createdBy", "name email role")
        .populate("assignedTo", "name email role");
    }

    // RECRUITER → sees only assigned leads
    else if (req.user.role === "recruiter") {
      leads = await Lead.find({ assignedTo: req.user.id })
        .populate("createdBy", "name email role")
        .populate("assignedTo", "name email role");
    }

    // CANDIDATE → limited access
    else {
      leads = await Lead.find({ createdBy: req.user.id })
        .populate("createdBy", "name email role");
    }

    res.json(leads);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE LEAD
const updateLead = async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);

    if (!lead) {
      return res.status(404).json({ message: "Lead not found" });
    }

    const updatedLead = await Lead.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json({
      message: "Lead updated successfully",
      updatedLead,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE LEAD
const deleteLead = async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);

    if (!lead) {
      return res.status(404).json({ message: "Lead not found" });
    }

    await lead.deleteOne();

    res.json({ message: "Lead deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//ASSIGNING LEAD
const assignLead = async (req, res) => {
  try {
    const { userId } = req.body;

    const lead = await Lead.findById(req.params.id);

    if (!lead) {
      return res.status(404).json({ message: "Lead not found" });
    }

    lead.assignedTo = userId;
    await lead.save();

    res.json({
      message: "Lead assigned successfully",
      lead,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createLead,
  getLeads,
  updateLead,
  deleteLead,
  assignLead
};