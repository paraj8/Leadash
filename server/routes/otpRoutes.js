const express = require("express");

const router = express.Router();

const {
  sendOtp,
  verifyOtp,
} = require("../controllers/otpController");

const sendEmail = require("../utils/sendEmail"); 

router.post("/send", sendOtp);
router.post("/verify", verifyOtp);

/* TEST EMAIL ROUTE */
router.get("/test-email", async (req, res) => {
  try {
    await sendEmail(
      "your-email@gmail.com",
      "Test Email",
      "<h1>Leadash Email Test</h1>"
    );

    res.json({
      message: "Email sent successfully",
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;