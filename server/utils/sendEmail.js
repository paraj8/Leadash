const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

console.log("HOST:", process.env.EMAIL_HOST);
console.log("PORT:", process.env.EMAIL_PORT);
console.log("USER:", process.env.EMAIL_USER);
console.log("PASS EXISTS:", !!process.env.EMAIL_PASS);

transporter.verify((error) => {
  if (error) {
    console.log("SMTP ERROR:", error);
  } else {
    console.log("SMTP READY");
  }
});

const sendEmail = async (to, subject, html) => {
  const info = await transporter.sendMail({
    from: `"Leadash" <leadash8@gmail.com>`,
    to,
    subject,
    html,
  });

  console.log("Email sent:", info.messageId);

  return info;
};

module.exports = sendEmail;