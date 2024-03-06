const express = require('express');
const router = express.Router();
const validateToken = require('../middlewares/authenticateToken');
const { UserRegister, UserLogin, currentUserProfile } = require('../controllers/AuthController')

// DEFAULT ROUTES
router.post('/register', UserRegister);
router.post('/login', UserLogin);
router.get('/user/profile', validateToken, currentUserProfile);


module.exports = router;
