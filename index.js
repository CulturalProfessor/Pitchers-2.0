const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userroutes = require('./routes/userroutes')
const pitchroute = require('./routes/pitchroute')
const app = express()
app.use(express.json())
app.use(cors())


const CONNETION_URL = "mongodb+srv://vinayak:25JUL2001@cluster0.loxbtih.mongodb.net/?retryWrites=true&w=majority";
mongoose.set("strictQuery", false);
mongoose
.connect(CONNETION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log("MongoDB connected");
})
.catch((err) => {
  console.log(err);
});


app.use('/', userroutes)
app.use('/pitch',pitchroute)
const PORT = process.env.port||3001
app.listen(PORT,()=>{
    console.log(`Server running on PORT ${PORT}`);
})