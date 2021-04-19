const jwt = require('jsonwebtoken')
const User = require('../../models/user.model')

// in: JWT
// out: Users data
exports.get = async (req, res) => {
    const JWT = req.body.JWT
    console.log(JWT);

    jwt.verify(JWT, process.env.JWT_SECRET, async (error, decoded) => {
        if (error) {
            res.status(400).json({ Error: true })
        } else {
            const Email = decoded.Email
            await User.findOne({ Email }, async (error, result) => {
                if (error) {
                    res.status(400).json({ Error: true })
                } else {
                    res.status(200).json({
                        Email: result.Email,
                        Username: result.Username
                        //Password: result.Password,
                        //FirstName: result.FirstName,
                        //LastName: result.LastName
                    })
                }
            })
        }
    })
}
