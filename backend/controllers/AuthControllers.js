const User = require('../models/User');
const jwt = require('jsonwebtoken');
const argon2 = require('argon2');
const dotenv = require('dotenv');
dotenv.config();

exports.signup = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        if (!name || !email || !password) {
            return res.status(403).json({
                success: false,
                message: "All fields are required"
            });
        }

        const userExists = await User.findOne({email});
        if (userExists) {
            return res.status(402).json({
                success: false,
                message: "User already exists"
            });
        }

        const hashPassword = await argon2.hash(password);
        const user = await User.create ({name, email, password: hashPassword});

        const payload = {
            id: user._id,
            name: user.name,
            email: user.email
        }

        const token = jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: '1d'});

        return res.status(200).json({
            success: true,
            message: "SignUp Successfully",
            token: token,
            name: user.name
        });

    } catch (err) {
        console.log("Some error occured during signup: ", err);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(403).json({
                success: false,
                message: "All fields are required"
            });
        }

        const user = await User.findOne({email});
        if (!user) {
            return res.status(402).json({
                success: false,
                message: "Email or password is incorrect!"
            });
        }

        const isMatch = await argon2.verify(user.password, password);
        if (!isMatch) {
            return res.status(403).json({
                success: false,
                message: "Email or password is incorrect!",
            });
        }

        const payload = {
            id: user._id,
            name: user.name,
            email: user.email
        }

        const token = jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: '1d'});

        return res.status(200).json({
            success: true,
            message: "Login Successful",
            token: token,
            name: user.name
        });

    } catch (err) {
        console.log("Some error occured during login: ", err);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}