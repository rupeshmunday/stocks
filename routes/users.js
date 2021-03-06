const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const AuthHelper = require('../helper/Auth');
//controllers need to be added.


// Showing home page
// router.get("/", userController.test);
// Showing secret page
router.post("/home", userController.home);
// Handling user signup
router.post("/register", userController.register);
//Showing login form
router.post("/login", userController.login);
// //Handling user login
// router.post("/login", function (req, res) {
//     res.send(req.body);
//     // res.send(req.body);
// });
//Handling user logout
// router.get("/logout", userController.logout);

module.exports = router;
