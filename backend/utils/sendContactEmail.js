const nodemailer = require("nodemailer");

let transporter;

const getTransporter = () => {
  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS } = process.env;
  const port = Number(SMTP_PORT);

  if (!SMTP_HOST || !Number.isInteger(port) || !SMTP_USER || !SMTP_PASS) {
    throw new Error("SMTP settings are missing or invalid.");
  }

  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: SMTP_SECURE === "true",
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS
      }
    });
  }

  return transporter;
};

const sendContactEmail = async ({ name, email, subject, message }) => {
  const mailTransporter = getTransporter();

  await mailTransporter.sendMail({
    from: process.env.SMTP_USER,
    to: process.env.CONTACT_EMAIL || "shahrozafzal262@gmail.com",
    replyTo: email,
    subject: `Portfolio contact: ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`
  });
};

module.exports = sendContactEmail;
