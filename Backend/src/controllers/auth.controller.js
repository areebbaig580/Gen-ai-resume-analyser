const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

async function registerUser(req, res) {
    try {

        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({
                message: "Please provide email username passworda"
            })
        };

        const isUserExist = await userModel.findOne({
            $or: [{ username }, { email }]
        });

        if (isUserExist) {
            return res.status(400).json({
                message: "User alredy exist"
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
            message: "User register succesfully",
            username,
            email
        });
    } catch (err) {
        console.log(err)
    }

}

module.exports = { registerUser }