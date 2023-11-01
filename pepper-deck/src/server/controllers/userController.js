const db = require("../models/userModel");
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

const userController = {};

userController.createUser = (req, res, next) => {

  const { userName, userPassword } = req.body;

  const hasedPassword = bcrypt.hash(userPassword, 10)
    .then(data => data)
    .catch(err => next({
      log: 'Express error handler caught error in userController.createUser',
      status: err.status,
      message: {err: err}
    }));

  const createUserQuery = `INSERT INTO users ('_id', 'username', 'password') VALUES ('${crypto.randomUUID()}', '${userName}', '${hasedPassword}');`;

  db.query(createUserQuery)
    .then(result => {
      console.log('RESULT: ', result)
      return next();
    })
    .catch(err => {
      return next({
        log: 'Express error handler caught error in userController.createUser',
        status: err.status,
        message: {err: err}
      })
    })
  
  // res.locals.newUser 
  
};

userController.login = (req, res, next) => {
  // check database if user exists
  
  // res.locals.user  
}

module.exports = userController;
