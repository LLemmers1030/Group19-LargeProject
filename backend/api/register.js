const mongoose = require('mongoose')
const app = require('express')
const User = require('../models/user.model.js')


exports.doWork = function (app) {
    app.post('/api/register', async (req, res) => {
        const body = req.body;
        const user = new User(body)
        user.save((error) => {
            if (error) {
                res.status(400)
                res.send('Failed to add a user to database')
            } else {
                res.status(200)
                res.send('Successfully added a user to database')
            }
        })
    })
}