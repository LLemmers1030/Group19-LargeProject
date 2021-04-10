const Users = require('./Users/modules')

module.exports = function (app) {
  // register route
  // app.route('/Users/register', () =>
  //   app.post(Users.register(req, res))
  // )
  
  app.post('/Users/register', async (req, res) =>
    Users.register(req, res)
  )

  // login route
  // app.route('/Users/login', () =>
  //   app.post(Users.login(req, res))
  // )
    
  app.post('/Users/login', async (req, res) =>
    Users.login(req, res)
  )
  
  }