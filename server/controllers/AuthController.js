const asyncHandler = require('express-async-handler');

//@desc User Registration
//@route POST /register
//@access PUBLİC
const UserRegister = asyncHandler(async (req, res) => {
    console.log("Value of body", req.body);
    const { name, job, age } = req.body;
    if (!name || !job || !age) {
        res.status(400);
        throw new Error("Tüm alan doldurulmalıdır...");
    }
    res.status(201).json({ message: 'New user created' });
});

//@desc User Login
//@route POST /login
//@access PUBLİC
const UserLogin = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'User logged in' });
});

const AdminLogin = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Admin Login Succesfully' });
});

module.exports = {
    UserRegister,
    UserLogin,
    AdminLogin
};