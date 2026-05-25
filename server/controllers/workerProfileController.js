const WorkerProfile = require("../models/WorkerProfile");

/* ================= SAVE PROFILE ================= */

const saveWorkerProfile = async (req, res) => {

  try {

    const {
      name,
      email,
      mobile,
      experience,
      bio,
      skills,
    } = req.body;

    const WorkerProfile = require("../models/WorkerProfile");

    /* ================= CHECK EXISTING PROFILE ================= */

    let profile = await WorkerProfile.findOne({
      user: req.user.id,
    });

    /* ================= UPDATE PROFILE ================= */

    if (profile) {

      profile.name = name;
      profile.email = email;
      profile.mobile = mobile;
      profile.experience = experience;
      profile.bio = bio;
      profile.skills = skills;

      await profile.save();

      return res.status(200).json({
        message: "Profile updated successfully",
        profile,
      });

    }

    /* ================= CREATE PROFILE ================= */

    profile = await WorkerProfile.create({
      user: req.user.id,
      name,
      email,
      mobile,
      experience,
      bio,
      skills,
    });

    res.status(201).json({
      message: "Profile created successfully",
      profile,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

/* ================= GET PROFILE ================= */

const getWorkerProfile = async (req, res) => {

  try {

    const profile = await WorkerProfile.findOne({
      user: req.user.id,
    });

    if (!profile) {

      return res.status(404).json({
        message: "Profile not found",
      });

    }

    res.status(200).json(profile);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

/* ================= GET ALL WORKERS ================= */

const getAllWorkers = async (req, res) => {

  try {

    const workers = await WorkerProfile.find().sort({
      createdAt: -1,
    });

    res.json(workers);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

module.exports = {
  saveWorkerProfile,
  getWorkerProfile,
  getAllWorkers,
};