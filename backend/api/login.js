const mongoose = require('mongoose')
const app = require('express')
const User = require('../models/user.model.js')


exports.doWork = function (app) {
    app.post('/api/login', async (req, res) => {
        const body = req.body;

        const Email = body.Email
        const Password = body.Password

        User.find({ Email, Password},
            (error, result) => {
            if (error) {
                res.status(400)
                res.send('Failed to login')
            } else if (result) {
                res.status(200)
                res.send(result)
            } else {
                res.status(400)
                res.send('Something done broke in login.js')
            }
        })
    })
}