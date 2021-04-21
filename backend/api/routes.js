
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
  // get User
  app.post('/Users/', (req, res) =>
    Users.get(req, res)
  )

  app.post('/Users/edit', (req, res) =>
    Users.edit(req, res)
  )

  app.post('/Users/delete', (req, res) =>
    Users.delete(req, res)
  )

  // app.get('/Users/verify/:uniqueString', (req, res) => {
  //   Users.verify(req, res)
  // })
    
  
}