const mongoose = require('mongoose')

const Pitch_Schema = new mongoose.Schema({
    company_name: {
        type: String,
        required: true
    },
    pitcher_name: {
        type: String,
        required:true
    },
    educational_background: {
        type: String,
        required:true
    },
    money: {
        type: Number,
        required:true
    },
    equity: {
        type: Number,
        required:true
    },
    description: {
        type: String,
        required:true
    }
})

const Pitch_model = mongoose.model('Pitch_model', Pitch_Schema)
module.exports = Pitch_model;