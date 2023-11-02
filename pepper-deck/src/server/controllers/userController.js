const db = require("../models/userModel");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const salt = bcrypt.genSaltSync(10);

const userController = {};

userController.createUser = async (req, res, next) => {
  const { userName, userPassword } = req.body;
  console.log("CREATED USER", req.body);

  const uniqueUserQuery = `SELECT COUNT(*) FROM Users WHERE username = '${userName}';`;

  await db
    .query(uniqueUserQuery)
    .then((result) => {
      console.log(
        "uniqueUser Result: ",
        result.rows[0].count,
        "; type: ",
        typeof result.rows[0].count
      );
      if (Number(result.rows[0].count) >= 1) {
        res.locals.usernameTaken = true;
        return next();
      }
    })
    .catch((err) => {
      return next({
        log: "Express error handler caught error in userController.createUser",
        status: err.status,
        message: { err: err },
      });
    });

  const hashedPassword = bcrypt
    .hashSync(userPassword, salt)
    .then((data) => data)
    .catch((err) => {
      return next({
        log: "Express error handler caught error in userController.createUser",
        status: err.status,
        message: { err: err },
      });
    });

  const createUserQuery = `INSERT INTO users ("_id", "username", "password") VALUES ('${crypto.randomUUID()}', '${userName}', '${hashedPassword}');`;

  db.query(createUserQuery)
    .then((result) => {
      console.log("creatueUser result: ", result);
      // res.locals.userID = idk
      return next();
    })
    .catch((err) => {
      return next({
        log: "Express error handler caught error in userController.createUser",
        status: err.status,
        message: { err: err },
      });
    });

  // res.locals.newUser
};

userController.login = (req, res, next) => {
  // check database if user exists
  const { userName, userPassword } = req.body;

  const findUserQuery = `SELECT password FROM Users WHERE username = '${userName}';`;

  db.query(findUserQuery)
    .then((result) => {
      console.log("login result: ", result);
      if (
        result.rows.length &&
        bcrypt.compareSync(userPassword, result.rows[0].password)
      ) {
        res.locals.loginSuccess = true;
        res.locals.userID = result._id;
      } else {
        res.locals.loginSuccess = false;
      }
      return next();
    })
    .catch((err) => {
      return next({
        log: "Express error handler caught error in userController.login",
        status: err.status,
        message: { err: err },
      });
    });
};

module.exports = userController;
