const nodemailer = require("nodemailer");
require("dotenv").config();
const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.user,
    pass: process.env.pass,
  },
});

const sendMail = async (to, subject, body) => {
  const mailOptions = {
    from: process.env.user,
    to: to,
    subject: subject,
    html: body,
  };
  try {
    let mail = await transport.sendMail(mailOptions);
    console.log("Email sent successfully", mail);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = sendMail;
