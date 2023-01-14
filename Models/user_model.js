const mongoose = require('mongoose')

const User_Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
    },
    email: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required:true
    },
    Role: {
        type: String,
        required:true
    }
})

const User_model = mongoose.model('user_model', User_Schema);
module.exports = User_model