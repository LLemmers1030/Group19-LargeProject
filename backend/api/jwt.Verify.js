const mongoose = require('mongoose')
const app = require('express')
const bcrypt = require('bcrypt')
const User = require('../models/user.model.js')

const jwt = require('jsonwebtoken')


exports.doWork = function (app) {
    app.post('/jwt/verify', async (req, res) => {
        //console.log(req.body)
        var token = req.body.Authorization
        jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
            if (error) { 
                res.status(500).send('JWT decode error')
                console.log(error)
            }
            else {
                res.status(200).send(decoded)
                console.log(decoded) // bar   
            }
            
          });
    })
}
