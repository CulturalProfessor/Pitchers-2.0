const express = require('express')
const Auth_controller = require('../Controllers/Auth_controller')
const route = express.Router()

route.post('/login', Auth_controller.user_login)
route.post('/register', Auth_controller.user_register)

module.exports = route