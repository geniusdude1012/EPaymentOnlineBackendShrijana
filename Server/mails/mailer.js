const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  service: "gmail",
  requireTLS: true,
  secureConnection: false,
  debug: true,
  logger: true,
  auth: {
    user: "epayment2423@gmail.com",
    pass: "yift hfpn krsg hhwr",
  },
});
const sendEmail = async (email, subject, content) => {
  try {
    var mailOptions = {
      from: process.env.SMTP_EMAIL,
      to: email,
      subject: subject,
      html: content,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      }
      console.log("Email sent ");
    });
  } catch (err) {
    console.log(err.message);
  }
};
module.exports = sendEmail;
