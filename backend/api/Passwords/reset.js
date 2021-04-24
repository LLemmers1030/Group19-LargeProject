const bcrypt = require('bcrypt')
const crypto = require('crypto')
const nodemailer = require('nodemailer')
const User = require('../../models/user.model.js')
const Token = require('../../models/token.model.js')


// in: email
// out: nodemailer email, error bool
exports.reset = async (req, res) => {
    const body = req.body
    const Email = body.Email

    var user
    try {
        user = await User.findOne({ Email })
        if (!user) // change to 200 later for security
            return res.status(400).send('Email not in use')
    } catch {
        return res.status(500).send()
    }
    // delete old token if it exists
    let token = await Token.findOne({ email: Email });
    if (token) {
        await token.deleteOne()
    }

    let resetToken = crypto.randomBytes(32).toString("hex")
    const hash = await bcrypt.hash(resetToken, 10)

    await new Token({
        // @ts-ignore
        email: user.Email,
        token: hash,
        createdAt: Date.now(),
    }).save();

    res.status(200).json({ Error: false })
    sendEmail(Email, resetToken, req)
}


const sendEmail = (email, resetToken, req) => {
    var Transport = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: process.env.EMAIL_ADDRESS,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    var url
    if (process.env.NODE_ENV === 'production') {
        var url = req.protocol + '://' + req.host + '/Passwords/reset/' + resetToken + '/' + email
    } else {
        var url = req.protocol + '://' + req.host + ':3000' + '/Passwords/reset/' + resetToken + '/' + email
    }

    var mailOptions = {
        from: "Jack's Mobile Homepark",
        to: email,
        subject: "Password Reset",
        html: `Click <a href=${url}> here </a> to reset your password`
        // html: `Click <a href=https://group19-housingmanager.herokuapp.com/Passwords/reset/${resetToken}/${email}> here </a> to reset your password`
        // Local html: `Click <a href=http://localhost:3000/Passwords/reset/${resetToken}/${email}> here </a> to reset your password`
    };

    Transport.sendMail(mailOptions, function (error, respnse) {
        if (error) {
            console.log(error);
        } else {
            console.log("Message sent");
        }
    });
}