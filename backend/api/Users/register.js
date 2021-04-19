// const mongoose = require('mongoose')
// const app = require('express')
const bcrypt = require('bcrypt')
const User = require('../../models/user.model.js')


exports.register = async (req, res) => {
    const body = req.body
    const Email = body.Email
    const uniquString = randString()
    const isValid = false

    try {
        let user = await User.findOne({ Email })
        if (user)
            return res.status(400).send('Email already in use')

        
        const hashedPassword = await bcrypt.hash(body.Password, 10)
        
        user = new User({
            Email: body.Email,
            Password: hashedPassword,
            FirstName: body.FirstName,
            LastName: body.LastName,
            Admin: false,
            isValid: isValid,
            uniquString: uniquString
        })

        user.save((error) => {
            if (error) {
                res.status(400).send(error)
            } else {
                res.status(200).send('Registered')
            }
        })
    } catch {
        res.status(500).send()
    }
    sendEmail(email)
    res.redirect('back')
}

const randString = () => {
    const len = 8
    let randStr = ''
    for (let i = 0; i < len; i++) {
        const ch = Math.floor((math.random() * 10) + 1)
        randStr += ch
    }

    return randStr
}

const sendMail = (email, uniqueString) => {
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
        html: `Press <a href=http://localhost:3000/verify/${uniqueString}> here </a> to verity your email. Thanks`
    };

    Transport.sendMail(mailOptions, function(error, respnse) {
        if (error){
            console.log(error);
        } else {
            console.log("Message sent");
        }
    });
}

// exports.doWork = function (app) {
//     app.post('/Users/register', async (req, res) => {
//         const body = req.body
//         const Email = body.Email

//         try {
//             let user = await User.findOne({ Email })
//             if (user)
//                 return res.status(400).send('Email already in use')

            
//             const hashedPassword = await bcrypt.hash(body.Password, 10)
            
//             user = new User({
//                 Email: body.Email,
//                 Password: hashedPassword,
//                 FirstName: body.FirstName,
//                 LastName: body.LastName,
//                 Admin: false
//             })

//             user.save((error) => {
//                 if (error) {
//                     res.status(400).send(error)
//                 } else {
//                     res.status(200).send('Registered')
//                 }
//             })
//         } catch {
//             res.status(500).send()
//         }
//     })
// }