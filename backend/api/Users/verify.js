// const mongoose = require('mongoose')
// const app = require('express')
const bcrypt = require('bcrypt')
const User = require('../../models/user.model.js')

exports.verify = async (req, res) => {
    const { uniqueString } = req.params

    const user = await User.findOne({ uniqueString: uniqueString})
    if (user) {
        user.isValid = true
        await user.save()
        res.redirect('/')
    } else {
        res.json({ Error: true})
    }
}