const express=require('express');
const router= express.Router();
const User = require('../models/user');
const passport = require('passport');
const userController = require('../controllers/userController');
//controllers need to be added.


// Showing home page
// router.get("/", userController.test);
// Showing secret page
router.get("/home", userController.home);
// Handling user signup
router.post("/register", userController.post_register);
//Showing login form
router.get("/login", userController.login);
// //Handling user login
// router.post("/login", function (req, res) {
//     res.send(req.body);
//     // res.send(req.body);
// });
//Handling user logout
router.get("/logout", userController.logout);

module.exports = router;
