const Otp = require("../models/Otp");
const User = require("../models/User");
const generateOtp = require("../utils/generateOtp");
const sendEmail = require("../utils/sendEmail");

/* ================= SEND OTP ================= */

const sendOtp = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        message: "Email is required",
      });
    }

    // remove old OTPs
    await Otp.deleteMany({ email });

    // generate OTP
    const otp = generateOtp();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

    // store OTP
    await Otp.create({
      email,
      otp,
      expiresAt,
    });

    console.log("OTP GENERATED:", otp);

    // send email
    await sendEmail(
      email,
      "Your Leadash OTP Code",
      `
        <div style="font-family:Arial">
          <h2>OTP Verification</h2>
          <p>Your OTP code is:</p>
          <h1 style="letter-spacing:4px">${otp}</h1>
          <p>This code will expire in 10 minutes.</p>
        </div>
      `
    );

    return res.status(200).json({
      message: "OTP sent successfully",
    });

  } catch (error) {
    console.log("OTP ERROR:", error);
    return res.status(500).json({
      message: error.message,
    });
  }
};

/* ================= VERIFY OTP ================= */

const verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const record = await Otp.findOne({ email, otp });

    if (!record) {
      return res.status(400).json({
        message: "Invalid OTP",
      });
    }

    // check expiry
    if (record.expiresAt < new Date()) {
      return res.status(400).json({
        message: "OTP expired",
      });
    }

    // verify user
    await User.findOneAndUpdate(
      { email },
      { isVerified: true }
    );

    // cleanup
    await Otp.deleteMany({ email });

    return res.status(200).json({
      message: "Email verified successfully",
    });

  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  sendOtp,
  verifyOtp,
};