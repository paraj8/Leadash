const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    company: { type: String, required: true },

    status: {
      type: String,
      enum: ["Pending", "Contacted", "Hired", "Rejected"],
      default: "Pending",
    },

    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Low",
    },

    notes: String,

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Lead", leadSchema);