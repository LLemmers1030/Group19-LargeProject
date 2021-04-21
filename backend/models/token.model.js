const mongoose = require('mongoose')

const TokenSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        ref: "user"
      },
      token: {
        type: String,
        required: true
      },
      createdAt: {
        type: Date,
        default: Date.now,
        expires: 3600 // this is the expiry time in seconds
      }
})

const Token = mongoose.model('Tokens', TokenSchema)

module.exports = Token