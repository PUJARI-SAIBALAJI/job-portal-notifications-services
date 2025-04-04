const sendEmail = require('../utils/emailUtil');

const sendNotification = async (req, res) => {
  const { email, subject, message } = req.body;

  try {
    await sendEmail({
      to: email,
      subject,
      text: message,
      html: `<p>${message}</p>`,
    });

    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to send email', error: err.message });
  }
};

module.exports = { sendNotification };
