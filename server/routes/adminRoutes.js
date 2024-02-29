const express = require('express');
const adminRouter = express.Router();
const { AdminLogin } = require('../controllers/AuthController')

// ADMIN ROUTES
adminRouter.route('/login').post(AdminLogin);

module.exports = adminRouter;