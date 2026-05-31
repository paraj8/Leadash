const Otp = require("../models/Otp");
const generateOtp = require("../utils/generateOtp");
const sendEmail = require("../utils/sendEmail");
const User = require("../models/User");

/* ================= SEND OTP ================= */

const sendOtp = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        message: "Email is required",
      });
    }

    await Otp.deleteMany({ email });

    const otp = generateOtp();

    const expiresAt = new Date(
      Date.now() + 10 * 60 * 1000
    );

    await Otp.create({
      email,
      otp,
      expiresAt,
    });

    console.log("OTP:", otp);

    await sendEmail(
      email,
      "Your Leadash Verification Code",
      `
      <h2>Email Verification</h2>
      <p>Your OTP is:</p>
      <h1>${otp}</h1>
      <p>This code expires in 10 minutes.</p>
      `
    );

    res.status(200).json({
      message: "OTP generated successfully",
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Failed to generate OTP",
    });
  }
};

/* ================= VERIFY OTP ================= */

const verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const otpRecord = await Otp.findOne({
      email,
      otp,
    });

    if (!otpRecord) {
      return res.status(400).json({
        message: "Invalid OTP",
      });
    }

    await User.findOneAndUpdate(
      { email },
      { isVerified: true }
    );

    await Otp.deleteMany({ email });

    res.status(200).json({
      message: "Email verified successfully",
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  sendOtp,
  verifyOtp,
};