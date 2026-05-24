const Task = require("../models/Task");

const getDashboardStats = async (req, res) => {

  try {

    const totalTasks = await Task.countDocuments();

    const pending = await Task.countDocuments({
      status: "Pending",
    });

    const inProgress = await Task.countDocuments({
      status: "In Progress",
    });

    const completed = await Task.countDocuments({
      status: "Completed",
    });

    res.json({
      totalTasks,
      pending,
      inProgress,
      completed,
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