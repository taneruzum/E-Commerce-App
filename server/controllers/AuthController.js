const asyncHandler = require('express-async-handler');
const UserModel = require('../models/userModel');

//@desc User Registration
//@route POST /register
//@access PUBLİC
const UserRegister = asyncHandler(async (req, res) => {
    console.log("Value of body", req.body);
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(400);
        throw new Error("Tüm alan doldurulmalıdır...");
    }

    const newUser = await UserModel.create({
        username,
        email,
        password,
    })
    res.status(201).json(newUser);
});

//@desc User Login
//@route POST /login
//@access PUBLİC
const UserLogin = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({ error: 'E-mail ve şifre zorunlu alanlardır.' });
        return;
    }

    const checkUser = await UserModel.findOne({ email: email, password: password });
    if (!checkUser) {
        res.status(400).json({ error: 'Kullanıcı adı veya şifre yanlış.' });
        return;
    }

    res.status(200).json({ message: 'User logged in' });

});

//@desc Admin Login
//@route POST /login
//@access PRIVATE
const AdminLogin = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Admin Login Succesfully' });
});

module.exports = {
    UserRegister,
    UserLogin,
    AdminLogin
};