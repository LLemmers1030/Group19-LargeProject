const mongoose = require('mongoose')
const app = require('express')
const bcrypt = require('bcrypt')
const User = require('../models/user.model.js')


// exports.doWork = function (app) {
//     app.post('/api/login', async (req, res) => {
//         const body = req.body;

//         const Email = body.Email
//         const Password = body.Password

//         User.find({ Email, Password},
//             (error, result) => {
//             if (error) {
//                 res.status(400)
//                 res.send('Failed to login')
//             } else if (result) {
//                 res.status(200)
//                 res.send(result)
//             } else {
//                 res.status(400)
//                 res.send('Something done broke in login.js')
//             }
//         })
//     })
// }

exports.doWork = function (app) {
    app.post('/api/login', async (req, res) => {
        const body = req.body
        const Email = body.Email
        const Password = body.Password

        // use findOne() instead of find because there should only be 1 email
        // let's us use result.Password instead of result[0].Password
        await User.findOne({ Email }, async (error, result) => {
            if (error) {
                res.status(400).send(error)
            } else {
                try {
                    if (await bcrypt.compare(Password, result.Password)) {
                        // make JWT
                        res.status(200).send('Login success')
                    } else {
                        // make it vague in production
                        res.status(400).send('Bad email:password')
                    }
                } catch {
                    // make it vague in production
                    res.status(400).send('Email does not exist')
                }
            }
        })
    })
}