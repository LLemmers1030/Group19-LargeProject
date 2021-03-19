const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    Email: 'string',
    Password: 'string',
    FirstName: 'string',
    LastName: 'string'
})
const User = mongoose.model('User', UserSchema)

module.exports = User