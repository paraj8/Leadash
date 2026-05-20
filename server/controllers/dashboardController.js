const Lead = require("../models/Lead");

const getDashboardStats = async (req, res) => {
  try {
    const totalLeads = await Lead.countDocuments();

    const pending = await Lead.countDocuments({
      status: "Pending",
    });

    const contacted = await Lead.countDocuments({
      status: "Contacted",
    });

    const hired = await Lead.countDocuments({
      status: "Hired",
    });

    const rejected = await Lead.countDocuments({
      status: "Rejected",
    });

    res.json({
      totalLeads,
      pending,
      contacted,
      hired,
      rejected,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getDashboardStats,
};