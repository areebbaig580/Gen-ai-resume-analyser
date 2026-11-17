const jwt = require('jsonwebtoken');
const blackListToken = require("../models/tokenBlacklist.model");

async function authUser(req, res, next) {
    const token = req.cookies.token;

    if (!token) {
        return res.status(402).json({
            message: "Token not found"
        })
    };

    const isTokenBlacklisted = await blackListToken.findOne({ token });

    if (isTokenBlacklisted) {
        return res.status(402).json({
            message: "Unauthorised user"
        })
    }

    try {
        const decoded = await jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;

    } catch (err) {
        err
        return res.status(401).json({ message: "unauthorised access" })
    }
    next();

}

module.exports = { authUser }