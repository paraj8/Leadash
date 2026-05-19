const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema(
  {
    title: String,
    company: String,
    status: {
      type: String,
      enum: ["pending", "contacted", "hired", "rejected"],
      default: "pending",
    },
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    notes: String,
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Lead", leadSchema);