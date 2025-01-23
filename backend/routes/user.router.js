const express = require('express');
const userController = require('../controllers/user.controller');

const router = express.Router();

// Signup route
router.post('/signup', userController.signup);

// Login route
router.post('/login', userController.login);

module.exports = router;