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

    
console.log("DECODED TOKEN:", decoded);
console.log("REQ USER:", req.user);

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

/* ================= GET TASK BY ID ================= */

const getTaskById = async (req, res) => {

  try {

    const task = await Task.findById(req.params.id)

      .populate("workers", "name email")

      .populate(
        "createdBy",
        "_id name email"
      );

    if (!task) {

      return res.status(404).json({
        message: "Task not found",
      });

    }

    res.status(200).json(task);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

/* ================= GET TASKS ================= */

const getTasks = async (req, res) => {

  try {

    let query = {};

    /* ================= WORKER ================= */

    if (req.user.role === "worker") {

      query = {
        workers: req.user.id,
      };

    }

    const tasks = await Task.find(query)

      .populate("workers", "name email")

      .populate(
        "createdBy",
        "_id name email"
      )

      .sort({ createdAt: -1 });

    res.json(tasks);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

/* ================= DASHBOARD STATS ================= */

const getDashboardStats = async (req, res) => {

  try {

    /* ===== ALL TASKS ===== */

    const totalTasks =
      await Task.countDocuments();

    const pendingTasks =
      await Task.countDocuments({
        status: "Pending",
      });

    const inProgressTasks =
      await Task.countDocuments({
        status: "In Progress",
      });

    const completedTasks =
      await Task.countDocuments({
        status: "Completed",
      });

    /* ===== YOUR TASKS ===== */

    const yourTotalTasks =
      await Task.countDocuments({
        createdBy: req.user.id,
      });

    const yourPendingTasks =
      await Task.countDocuments({
        createdBy: req.user.id,
        status: "Pending",
      });

    const yourInProgressTasks =
      await Task.countDocuments({
        createdBy: req.user.id,
        status: "In Progress",
      });

    const yourCompletedTasks =
      await Task.countDocuments({
        createdBy: req.user.id,
        status: "Completed",
      });

    /* ================= ASSIGNED TASKS ================= */

    const assignedTotalTasks =
      await Task.countDocuments({
        workers: req.user.id,
      });

    const assignedPendingTasks =
      await Task.countDocuments({
        workers: req.user.id,
        status: "Pending",
      });

    const assignedInProgressTasks =
      await Task.countDocuments({
        workers: req.user.id,
        status: "In Progress",
      });

    const assignedCompletedTasks =
      await Task.countDocuments({
        workers: req.user.id,
        status: "Completed",
      });

    res.status(200).json({

      allTasks: {
        totalTasks,
        pendingTasks,
        inProgressTasks,
        completedTasks,
      },

      yourTasks: {
        totalTasks: yourTotalTasks,
        pendingTasks: yourPendingTasks,
        inProgressTasks: yourInProgressTasks,
        completedTasks: yourCompletedTasks,
      },

      assignedTasks: {
        totalTasks: assignedTotalTasks,
        pendingTasks: assignedPendingTasks,
        inProgressTasks: assignedInProgressTasks,
        completedTasks: assignedCompletedTasks,
      },

    });

  } catch (err) {

    res.status(500).json({
      message: "Failed to fetch dashboard stats",
    });

  }

};

/* ================= UPDATE TASK ================= */

const updateTask = async (req, res) => {

  try {

    const task = await Task.findById(req.params.id);

    if (!task) {

      return res.status(404).json({
        message: "Task not found",
      });

    }

    /* ================= ACCESS CONTROL ================= */

    /* MANAGER/ADMIN WHO CREATED TASK */

    const isCreator =
      task.createdBy.toString() === req.user.id;

    /* WORKER ASSIGNED TO TASK */

    const tasks = await Task.find({});
console.log(tasks);

    const isAssignedWorker =
      task.workers.some(
        (worker) =>
          worker.toString() === req.user.id
        
      );

    /* DENY IF NO ACCESS */

    if (!isCreator && !isAssignedWorker) {

      return res.status(403).json({
        message: "Access denied",
      });

    }

    /* WORKERS CAN ONLY CHANGE STATUS */

    if (isAssignedWorker && !isCreator) {

      task.status =
        req.body.status || task.status;

    }

    /* CREATOR CAN CHANGE EVERYTHING */

    else {

      task.status =
        req.body.status || task.status;

      task.priority =
        req.body.priority || task.priority;

      task.deadline =
        req.body.deadline || task.deadline;

    }

    const updatedTask = await task.save();

    res.json(updatedTask);

  } catch (error) {

    res.status(500).json({
      message: "Failed to update task",
    });

  }

};


module.exports = {
  createTask,
  getTasks,
  getTaskById,
  getDashboardStats,
  updateTask,
};