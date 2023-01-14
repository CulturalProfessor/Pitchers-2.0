const mongoose = require('mongoose')

const Pitch_Schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required:true
    },
    message: {
        type: String,
        required:true
    }
})

const Pitch_model = mongoose.model('Pitch_model', Pitch_Schema)
module.exports = Pitch_model;