const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Sign up 
router.post('/user', userController.addUser, (req, res) => {
  console.log(res.locals.newUser)
  res.status(200).json(res.locals.newUser)
});




module.exports = router;