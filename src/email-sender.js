const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "protonmail",
  auth: {
    user: "rashidi@protonmail.com",
    pass: "your_password",
  },
});

const mailOptions = {
  from: "rashidi@protonmail.com",
  to: "recipient@example.com",
  subject: "It is done",
  text: "Your request has been authourized for clearence.",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("Error sending email:", error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
