const bcrypt = require('bcrypt')
const User = require('../../models/user.model.js')
const Token = require('../../models/token.model.js')


// in: email, resetToken, password
// out: error bool
exports.resetValidate = async (req, res) => {
    const body = req.body
    const Email = body.Email
    const resetToken = body.Token
    const Password = body.Password

    var token
    try {        
        // delete old token if it exists
        token = await Token.findOne({ Email });
        if (token) {
            return res.status(400).send('Invalid or expired reset token')
        }
    } catch {
        return res.status(500).send()
    }
    
    const isValid = await bcrypt.compare(token, resetToken.token);
    if (!isValid) {
        return res.status(400).send('Invalid or expired password reset token')
    }

    const hash = await bcrypt.hash(Password, 10)
    await User.updateOne({ Email }, { Password: hash })


    res.status(200).json({ Error: false })
}