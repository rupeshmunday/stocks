const user = require('../models/user');
const stocks = require('../models/stocks');
exports.register = function (req, res) {
    // var email = req.body.email;
    // var password = req.body.password;
    res.send({
        email: '',
        password: ''    
    });
};

exports.home = function (req, res) {
    stocks.insertMany([{symbol:"TCS"}], (err ,stocks)=>{
        if(err){
            res.send("Error"+err);
        }
        res.send(stocks);
    });
};

exports.post_register = function (req, res) {
    user.insertMany([{}],(err)=>{
        if(err){
            res.send("Error "+err);
        }
        res.status(200);
    });
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