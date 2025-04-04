const express = require('express');
const { sendNotification } = require('../controllers/emailController');
const router = express.Router();

router.post('/send-email', sendNotification);

module.exports = router;
