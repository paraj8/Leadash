const Otp = require("../models/Otp");
const generateOtp = require("../utils/generateOtp");
const sendEmail = require("../utils/sendEmail");
const User = require("../models/User");

/* ================= SEND OTP ================= */

const sendOtp = async (req, res) => {
  try {
    const { email } = req.body;

    console.log("OTP REQUEST RECEIVED");

    if (!email) {
      return res.status(400).json({ message: "Email required" });
    }

    const otp = generateOtp();

    const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

    // 🔥 SAFE DB OPERATIONS
    await Otp.deleteMany({ email });

    await Otp.create({ email, otp, expiresAt });

    console.log("OTP SAVED:", otp);

    await sendEmail(email, "OTP", `<h1>${otp}</h1>`);

    console.log("EMAIL SENT");

    return res.json({ message: "OTP sent" });

  } catch (error) {
    console.log("🔥 ERROR:", error);

    return res.status(500).json({
      message: error.message,
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