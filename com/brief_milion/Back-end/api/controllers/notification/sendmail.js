const nodemailer = require("nodemailer");

exports.sendMail = async (to) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.ADMIN_EMAIL, 
      pass: process.env.ADMIN_PASSWORD, 
    },
  });

  let mailOptions = {
    from: process.env.ADMIN_EMAIL,
    to: to,
    subject: "Participation validated",
    html: "<h1>Participation validated</h1>",
  };

  let info = await transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      return console.log(err);
    }
  });
};
