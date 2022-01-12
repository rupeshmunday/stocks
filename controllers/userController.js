const user = require('../models/user');
exports.register = function (req, res) {
    // var email = req.body.email;
    // var password = req.body.password;
    res.send({
        email: '',
        password: ''    
    });
};

exports.home = function (req, res) {
    res.send("<p>Hello this is home page</p>");
};

exports.post_register = function (req, res) {
    res.send("Hello registration page")
};

exports.login = function (req, res) {
    res.send("Hello login page");
};

exports.logout =  function (req, res) {
    res.send("Hi logging out");
    res.redirect("/home");
};

// exports.isLoggedIn = function (req, res, next) {
//     if (req.isAuthenticated()) return next();
//     res.redirect("/login");
// }