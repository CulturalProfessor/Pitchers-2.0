const Pitch_model = require("../Models/Pitch_model")

class Pitch_controller {
    static addPitch = async (req, res) => {
        const { company_name, pitcher_name, educational_background, money, equity,description } = req.body
        if (company_name && pitcher_name && educational_background&&money&&equity) {
            const newPitch = Pitch_model({
                company_name: company_name,
                pitcher_name: pitcher_name,
                educational_background: educational_background,
                money: money,
                equity: equity,
                description:description
            })
            const savePitch = newPitch.save()
            res.status(200).json({
                message: "Pitch added successfully"
            })
        } else {
            res.status(400).json({
                message: "Please fill all the details"
            })
        }
    }
}

module.exports = Pitch_controller