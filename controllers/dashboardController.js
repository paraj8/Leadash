const Lead = require("../models/Lead");

// GET DASHBOARD STATS
const getStats = async (req, res) => {
  try {
    const totalLeads = await Lead.countDocuments();

    const pending = await Lead.countDocuments({ status: "pending" });
    const contacted = await Lead.countDocuments({ status: "contacted" });
    const hired = await Lead.countDocuments({ status: "hired" });
    const rejected = await Lead.countDocuments({ status: "rejected" });

    res.json({
      totalLeads,
      pending,
      contacted,
      hired,
      rejected,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getStats };