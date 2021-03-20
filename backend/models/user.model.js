const mongoose = require('mongoose')

// const UserSchema = mongoose.Schema({
//     Email: 'string',
//     Password: 'string',
//     FirstName: 'string',
//     LastName: 'string'
// })

const UserSchema = new mongoose.Schema({
    Email: { type: String },
    Password: { type: String },
    FirstName: { type: String },
    LastName: { type: String }
})


const User = mongoose.model('User', UserSchema)

module.exports = User