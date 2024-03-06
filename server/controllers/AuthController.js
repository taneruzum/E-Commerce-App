const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const jwebtoken = require('jsonwebtoken');
const UserModel = require('../models/userModel');

//@desc User Registration
//@route POST /register
//@access PUBLİC
const UserRegister = asyncHandler(async (req, res) => {
    console.log("Veri değeri: ", req.body);
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(400);
        throw new Error("Tüm alan doldurulmalıdır...");
    }

    const existingUser = await UserModel.findOne({ $or: [{ username: username }, { email: email }] });
    if (existingUser) {
        res.status(409);
        throw new Error("Bu kullanıcı adı veya e-posta adresi zaten kayıtlı.");
    }

    //Hashed password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await UserModel.create({
        username,
        email,
        password: hashedPassword,
    })
    if (newUser) {
        res.status(201).json(newUser);
    } else {
        res.status(400);
        throw new Error("Kullanıcı bilgileri geçerli değildir.");
    }
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

    const checkUser = await UserModel.findOne({ email: email });

    if (checkUser && (await bcrypt.compare(password, checkUser.password))) {
        const accessToken = jwebtoken.sign({
            user: {
                username: checkUser.username,
                email: checkUser.email,
                id: checkUser.id,
            },

        },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "10m" }
        )
        res.status(200).json(accessToken);
    } else {
        res.status(401);
        throw new Error("E-posta veya şifre geçersiz.")

    }

});

//@desc Current User Profile
//@route GET /user/profile
//@access PRIVATE
const currentUserProfile = asyncHandler(async (req, res) => {

    res.json(req.user)

});


//@desc Admin Login
//@route POST /login
//@access PRIVATE
const AdminLogin = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Admin girişi yapıldı.' });
});

module.exports = {
    UserRegister,
    UserLogin,
    AdminLogin,
    currentUserProfile
};