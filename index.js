const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userroutes = require('./routes/userroutes')
const pitchroute = require('./routes/pitchroute')
const app = express()
app.use(express.json())
app.use(cors())
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost/Pitchers')
const db = mongoose.connection
db.on('open', () => {
    console.log('Database connected successfully!');
})
app.use('/', userroutes)
app.use('/pitch',pitchroute)
const PORT = process.env.port||3001
app.listen(PORT)