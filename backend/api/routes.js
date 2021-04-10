const Users = require('./Users/modules')

module.exports = function (app) {
  // register
  app.post('/Users/register', (req, res) =>
    Users.register(req, res)
  )
  // login
  app.post('/Users/login', (req, res) =>
    Users.login(req, res)
  )
  
}