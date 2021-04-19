const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../../models/user.model')

exports.edit = async (req, res) => {
    const body = req.body
    const JWT = body.JWT

    jwt.verify(JWT, process.env.JWT_SECRET, async (error, decoded) => {
        if (error) {
            res.status(400).json({ Error: true })
        } else {
            const Email = decoded.Email
            const FirstName = body.FirstName
            const LastName = body.LastName
            const Password = body.Password

            const hashedPassword = await bcrypt.hash(Password, 10)

            const Update = {
                FirstName: FirstName,
                LastName: LastName,
                Password: hashedPassword
            }

            await User.findOneAndUpdate({ Email }, Update, { new: true }, async (error, result) => {
                if (error) {
                    res.status(400).json({ Error: true })
                } else {
                    res.status(200).json({ result, Error: false })
                }
            })
        }
    })
}