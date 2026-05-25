const Company = require("../models/ompany");
const Skill = require("../models/kill");

/* ================= ADD COMPANY ================= */

const addCompany = async (req, res) => {

  try {

    const { name } = req.body;

    if (!name) {
      return res.status(400).json({
        message: "Company name is required",
      });
    }

    const existingCompany = await Company.findOne({ name });

    if (existingCompany) {
      return res.status(400).json({
        message: "Company already exists",
      });
    }

    const company = await Company.create({
      name,
    });

    res.status(201).json(company);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

/* ================= GET COMPANIES ================= */

const getCompanies = async (req, res) => {

  try {

    const companies = await Company.find().sort({
      createdAt: -1,
    });

    res.json(companies);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

/* ================= ADD SKILL ================= */

const addSkill = async (req, res) => {

  try {

    const { name } = req.body;

    if (!name) {
      return res.status(400).json({
        message: "Skill name is required",
      });
    }

    const existingSkill = await Skill.findOne({ name });

    if (existingSkill) {
      return res.status(400).json({
        message: "Skill already exists",
      });
    }

    const skill = await Skill.create({
      name,
    });

    res.status(201).json(skill);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

/* ================= GET SKILLS ================= */

const getSkills = async (req, res) => {

  try {

    const skills = await Skill.find().sort({
      createdAt: -1,
    });

    res.json(skills);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

module.exports = {
  addCompany,
  getCompanies,
  addSkill,
  getSkills,
};