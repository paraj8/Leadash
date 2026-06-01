const Otp = require("../models/Otp");
const User = require("../models/User");
const generateOtp = require("../utils/generateOtp");
const sendEmail = require("../utils/sendEmail");

/* ================= OTP EMAIL TEMPLATE ================= */
const otpEmailTemplate = (otp) => `
  <div style="
    font-family: Arial;
    background: linear-gradient(135deg,#020617,#0f172a);
    padding: 40px;
    text-align: center;
    color: #e2e8f0;
  ">

    <div style="
      max-width: 460px;
      margin: auto;
      background: rgba(255,255,255,0.05);
      padding: 30px;
      border-radius: 16px;
      border: 1px solid rgba(255,255,255,0.1);
      box-shadow: 0 0 25px rgba(34,211,238,0.2);
    ">

      <h1 style="color:#22d3ee; margin-bottom:10px;">
        Leadash Verification
      </h1>

      <p style="color:#94a3b8;">
        Use this OTP to verify your account
      </p>

      <div style="
        font-size: 34px;
        letter-spacing: 8px;
        font-weight: bold;
        color: #fff;
        margin: 25px 0;
        padding: 15px;
        background: rgba(34,211,238,0.08);
        border: 1px solid rgba(34,211,238,0.3);
        border-radius: 12px;
      ">
        ${otp}
      </div>

      <p style="color:#64748b; font-size:12px;">
        This code expires in 10 minutes
      </p>

      <p style="margin-top:20px; font-size:11px; color:#475569;">
        If you didn’t request this, ignore this email.
      </p>

    </div>
  </div>
`;

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

    // send email (SAAS STYLE)
    await sendEmail(
      email,
      "Your Leadash OTP Code",
      otpEmailTemplate(otp)
    );

    return res.status(200).json({
      message: "OTP sent successfully",
    });

  } catch (error) {
    console.log("OTP ERROR:", error);
    return res.status(500).json({
      message: "Failed to send OTP",
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

    // expiry check
    if (record.expiresAt < new Date()) {
      await Otp.deleteMany({ email });
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