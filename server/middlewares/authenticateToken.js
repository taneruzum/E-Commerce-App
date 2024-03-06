const asyncHandler = require('express-async-handler');
const jwebtoken = require('jsonwebtoken');

const validateToken = asyncHandler(async (req, res, next) => {

    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;

    if (authHeader && authHeader.startsWith('Bearer')) {
        token = authHeader.split(" ")[1];
        jwebtoken.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if (err) {
                res.status(401);
                throw new Error("Kullanıcı doğrulanamadı!");
            }
            req.user = decoded.user;
            next();
        });
        if (!token) {
            res.status(401);
            throw new Error("Kullanıcı doğrulanamadı ya da jeton eksik.");
        }
    };

});

module.exports = validateToken;