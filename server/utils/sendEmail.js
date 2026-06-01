const axios = require("axios");

const sendEmail = async (to, subject, html) => {
  try {
    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: "Leadash",
          email: process.env.SENDER_EMAIL,
        },
        to: [
          {
            email: to,
          },
        ],
        subject: subject,
        htmlContent: html,
      },
      {
        headers: {
          "api-key": process.env.BREVO_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Email sent:", response.data.messageId);
    return response.data;
  } catch (error) {
    console.log(
      "Email Error:",
      error.response?.data || error.message
    );
    throw new Error("Email sending failed");
  }
};

module.exports = sendEmail;