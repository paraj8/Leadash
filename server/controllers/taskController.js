const Task = require("../models/Task");

/* ================= CREATE TASK ================= */

const createTask = async (req, res) => {

  try {

    const {
      title,
      company,
      department,
      skill,
      note,
      workers,
    } = req.body;

    if (
      !title ||
      !company ||
      !department ||
      !skill
    ) {
      return res.status(400).json({
        message: "All required fields must be filled",
      });
    }

    const task = await Task.create({
      title,
      company,
      department,
      skill,
      note,
      workers,
      createdBy: req.user.id,
    });

    res.status(201).json(task);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

/* ================= GET TASKS ================= */

const getTasks = async (req, res) => {

  try {

    const tasks = await Task.find()
      .populate("workers")
      .sort({
        createdAt: -1,
      });

    res.json(tasks);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

module.exports = {
  createTask,
  getTasks,
};