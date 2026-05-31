const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {

    name: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["admin", "manager", "worker"],
      default: "worker", // default role is worker 
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    isVerified: {
      type: Boolean,
      default: false,
    },

  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);