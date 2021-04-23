// const mongoose = require('mongoose')
// const app = require('express')
const bcrypt = require('bcrypt')
const nodemailer = require('nodemailer')
const User = require('../../models/user.model.js')


// in: email, password, firstName, lastName
// out: JWT, error bool
exports.register = async (req, res) => {
    const body = req.body
    const Email = body.Email
    const uniqueString = randString()

    try {
        let user = await User.findOne({ Email })
        if (user) {
            return res.status(400).send('Email already in use')
        }
            
        const hashedPassword = await bcrypt.hash(body.Password, 10)
        
        user = new User({
            Email: body.Email,
            Password: hashedPassword,
            FirstName: body.FirstName,
            LastName: body.LastName,
            Admin: false,
            isValid: false,
            uniqueString: uniqueString
        })
        
        user.save((error) => {
            if (error) {
                res.status(400).send('User is not saving')
            } else {
                res.status(200).send('Check email to verify account')
            }
        })

    } catch {
        res.status(500).send()
    }
    sendEmail(Email, uniqueString)
}

const randString = () => {
    const len = 8
    let randStr = ''
    for (let i = 0; i < len; i++) {
        const ch = Math.floor((Math.random() * 10) + 1)
        randStr += ch
    }

    return randStr
}

const sendEmail = (email, uniqueString) => {
    var Transport = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: process.env.EMAIL_ADDRESS,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    var mailOptions;
    let sender = "Jack's Mobile Homepark";
    mailOptions = {
        from: sender,
        to: email,
        subject: "Email Confirmation",
        html: `Press <a href=https://group19-housinngmanager.app.com/verify/${uniqueString}> here </a> to verity your email. Thanks`
        // Local html: `Press <a href=http://localhost:3000/verify/${uniqueString}> here </a> to verity your email. Thanks`
        //html: `Paste this token into the login page for the first time: ${uniqueString}`
    };

    Transport.sendMail(mailOptions, function(error, respnse) {
        if (error){
            console.log(error);
        } else {
            console.log("Message sent");
        }
    });
}