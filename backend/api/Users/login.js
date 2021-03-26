const mongoose = require('mongoose')
const app = require('express')
const bcrypt = require('bcrypt')
const User = require('../../models/user.model.js')


exports.doWork = function (app) {
    app.post('/Users/login', async (req, res) => {
        const body = req.body
        const Email = body.Email

        // use findOne() instead of find because there should only be 1 email
        // let's us use result.Password instead of result[0].Password
        await User.findOne({ Email }, async (error, result) => {
            if (error) {
                res.status(400).send(error)
            } else {
                try {
                    if (await bcrypt.compare(body.Password, result.Password)) {
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