const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const blackListToken = require("../models/tokenBlacklist.model");

async function registerUser(req, res) {
    try {

        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({
                message: "Please provide email username password"
            })
        };

        const isUserExist = await userModel.findOne({
            $or: [{ username }, { email }]
        });

        if (isUserExist) {
            return res.status(400).json({
                message: "User already exist"
            })
        };

        const hashPassword = await bcrypt.hash(password, 10);

        const user = await userModel.create({
            username: username,
            email: email,
            password: hashPassword,
        })

        const token = jwt.sign(
            { id: user._id, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.cookie('token', token);

        return res.status(201).json({
            message: "User registered succesfully",
            username,
            email
        });
    } catch (err) {
        console.log(err)
        return res.status(400).json({
            message: "Some error occured!"
        })
    }

};

async function loginUser(req, res) {
    try {

        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({
                message: "Please provide username and password"
            })
        };

        const user = await userModel.findOne({ username }).select('+password');

        if (!user) {
            return res.status(402).json({
                message: "user does not exist"
            })
        };

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(402).json({
                message: "Incorrect password"
            })
        }

        const token = await jwt.sign(
            { id: user._id, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        )

        res.cookie('token', token);

        return res.status(201).json({
            message: "user loggged in successfully",
            username
        })
    } catch (err) {
        console.log(err)
        return res.status(400).json({
            message: "user not found"
        })
    }
}

async function getUser(req, res) {
    try {
        const id = req.user.id;

        if (!id) {
            return res.status(400).json({
                message: "User not available"
            })
        };

        const user = await userModel.findById(id);

        if (!user) {
            return res.status(400).json({
                message: "User does not exist"
            })
        };

        return res.status(201).json({
            user,
        });

    } catch (err) {
        err
        return res.status(400).json({
            message: "user not found"
        })
    }
}

async function logoutUser(req, res) {
    try {

        const token = req.cookies.token;

        if (token) {
            await blackListToken.create({ token });
        }

        res.clearCookie('token');

        return res.status(200).json({
            message: "User logged out succesfully"
        })
    } catch (err) {
        err
        return res.status(400).json({
            message: "user not found"
        })
    }
}

module.exports = { registerUser, loginUser, getUser, logoutUser }