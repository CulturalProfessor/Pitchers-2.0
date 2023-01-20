const jwt = require('jsonwebtoken')
require('dotenv').config()
const secretKey = "randomsecret"
var userdata
const verifytoken = (req, res, next) => {
    const bearerheader = req.headers['authorization']
    if (bearerheader !== undefined) {
        const tokenArr = bearerheader.split(' ')
        const token = tokenArr[1]
        const temp = jwt.verify(token, secretKey, (err, authdata) => {
            if (err) {
                res.status(400).json({
                    message: "Invalid Token"
                })
            }
            else {
                userdata = authdata
                console.log(authdata);
                next()
            }
        })
    } else {
        res.status(400).json({
            message: "Authorization unsuccussfull"
        })
        return
    }
}
module.exports = verifytoken;
