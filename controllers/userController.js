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
    var email = req.body.email;
    var password = req.body.password;
    User.register(new User({ email: email }),
    password, function (err, user) {
        if (err) {
            console.log(err);
            return res.render("register");
        }
    });
};

exports.login = function (req, res) {
    var email = req.body.email;
    var password = req.body.password;
    res.send('login', {
        email: '',      //req.body.email
        password: ''    //req.body.password; 
    });
};

exports.logout =  function (req, res) {
    // req.logout();
    res.redirect("/home");
};

exports.isLoggedIn = function (req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/login");
}