const express = require('express')
const Pitch_controller = require('../Controllers/Pitch_controller')
const verifytoken = require('../middleware/verifytoken')
const route = express.Router()

route.post('/add',verifytoken, Pitch_controller.addPitch)

module.exports = route