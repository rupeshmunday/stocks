const express=require('express');
const router= express.Router();
const User= require('../models/userSchema');
var passport = require("passport");



// Showing home page
router.get("/", function (req, res) {
    res.render('register', {
        email: '',
        password: ''    
    });
});
// Showing secret page
router.get("/home", isLoggedIn, function (req, res) {
    res.render("home");
});
// Showing register form
router.get("/register", function (req, res) {
    res.render('register', {
        email: '',
        password: ''    
    });
});
// Handling user signup
router.post("/register", function (req, res) {
    var email = req.body.email;
    var password = req.body.password;
    User.register(new User({ email: email }),
    password, function (err, user) {
        if (err) {
            console.log(err);
            return res.render("register");
        }
        passport.authenticate("local")(
        req, res, function () {
            req.flash('success', 'You have logged in');
            res.render("home");
        });
    });
});
//Showing login form
router.get("/login", function (req, res) {
    res.render('login', {
        email: '',
        password: ''     
    });
});
//Handling user login
router.post("/login", passport.authenticate("local", {
    successRedirect: "/home",
    failureRedirect: "/login"
}), function (req, res) {

});
//Handling user logout
router.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
    });
    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) return next();
        res.redirect("/login");
    }

module.exports =router;
