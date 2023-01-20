const mongoose = require("mongoose");
const User_model = require("../Models/user_model");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const secretKey = 'randomsecret'
class Auth_controller {
    static user_register = async (req, res) => {
        const { name, age, email, password, Role } = req.body;
        const isnewuser = await User_model.findOne({
            email: email
        })
        if (!isnewuser) {
            const hashedPass = await bcrypt.hash(password,10)
            const newuser = User_model({
                name: name,
                age: age,
                email: email,
                password: hashedPass,
                Role: Role
            })
            const saveuser = await newuser.save();
            res.status(200).json({
                "message": "Account created successfully!"
            })
        }
        else {
            res.status(400).json({
                "message": "Email id already exists"
            })
        }
    }
    static user_login = async (req, res) => {
        const { email, password } = req.body;
        const isnewuser = await User_model.findOne({
            email: email
        })
        if (!isnewuser) {
            res.status(404).json({
                "message": "Invalid details"
            })
        }
        else {
            console.log(password);
            const ispasscorrect = await bcrypt.compare(password, isnewuser.password)
            console.log(ispasscorrect);
            if (ispasscorrect) {
                const token = jwt.sign({ email, password }, secretKey, { expiresIn: '1h' })
                console.log(token);
                res.status(200).json({
                    "message": "Login successfull!",
                })
            }
            else {
                res.status(404).json({
                    "message": "Invalid details"
                })
            }
        }
    }
}

module.exports = Auth_controller