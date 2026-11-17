const jwt = require('jsonwebtoken');

async function authUser(req, res, next) {
    const token = req.cookies.token;

    if (!token) {
        return res.status(402).json({
            message: "user not authorised"
        })
    };

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;

    } catch (err) {
        err
        return res.status(401).json({ message: "unauthorised access" })
    }
    next();

}

module.exports = { authUser }