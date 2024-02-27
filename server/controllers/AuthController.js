const express = require('express');
const asyncHandler = require('express-async-handler');
const UserModel = require('./models/UserModel');

const router = express.Router();

// Kullanıcı Kayıt İşlemi
router.post('/register', asyncHandler(async (req, res) => {
  const { username, password, email } = req.body;

  const userExists = await UserModel.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('Bu e-posta adresi zaten kayıtlı');
  }

  const user = await UserModel.create({
    username,
    password,
    email
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error('Geçersiz kullanıcı verisi');
  }
}));

// Kullanıcı Giriş İşlemi
router.post('/login', asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
    });
  } else {
    res.status(401);
    throw new Error('Geçersiz e-posta veya şifre');
  }
}));

module.exports = router;
