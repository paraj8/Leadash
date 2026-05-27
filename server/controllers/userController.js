const User = require("../models/User");
const Task = require("../models/Task");

/* ================= GET ALL MANAGERS ================= */

const getManagers = async (req, res) => {

  try {

    const managers = await User.find({
      role: "manager",
    }).select("-password");

    const managersWithTasks = await Promise.all(

      managers.map(async (manager) => {

        const taskCount = await Task.countDocuments({
          createdBy: manager._id,
        });

        return {
          ...manager._doc,
          tasks: taskCount,
        };

      })

    );

    res.status(200).json(managersWithTasks);

  } catch (err) {

    res.status(500).json({
      message: "Failed to fetch managers",
    });

  }

};

module.exports = {
  getManagers,
};