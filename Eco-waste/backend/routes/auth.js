const express = require('express');
const router = express.Router();
const authController = require('/backend/routes/controllers/authController.js');

// Login Route
router.post('/login', authController.login);

// Signup Route
router.post('/signup', authController.signup);

module.exports = router;
