const express = require('express');
const router = express.Router();
const { UserRegister, UserLogin } = require('../controllers/AuthController')

// DEFAULT ROUTES
router.route('/register').post(UserRegister);

router.route('/login').post(UserLogin);

module.exports = router;
