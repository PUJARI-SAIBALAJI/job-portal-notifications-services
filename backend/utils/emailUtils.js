const transporter = require('../config/mailConfig');

const sendEmail = async ({ to, subject, text, html }) => {
  const mailOptions = {
    from: `"Job Portal" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    text,
    html,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
