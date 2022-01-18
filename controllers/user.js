const User = require('../models/user');
const Stocks = require('../models/stocks');


exports.home = function (req, res) {
    Stocks.create( [{symbol: req.body.symbol ,
        date: Date(),
        open:req.body.open,
        high:req.body.high,
        close:req.body.close,
        low:req.body.low,
        volume:req.body.volume
    }] , ( err ,stocks ) => {
        if (err) {
            console.log("Error: While saving stock detail" + err);
            return res.status(500).json({
              status: "error",
              message: "Error: Something went wrong. Couldn't save stock data to server ",
            });
          }
        res.json({ status: "success", data: stocks });
    });
};

exports.register = function (req, res) {
    User.create([{ name: req.body.name , email: req.body.email , password: req.body.password }] , ( err , user ) => {
        if (err) {
            console.log("Error: While saving user details " + err);
            return res.status(500).json({
              status: "error",
              message: "Error: Something went wrong. Couldn't send your details to server ",
            });
          }
        res.json({ status: "success", data: user });
    });
};

exports.login = function (req, res) {
    let email = req.body.email;
    let password = req.body.password;
    User.find( { email : email , password : password } , (err , user ) => {
        if (err) {
            console.log("Error: While fetching user details " + err);
            return res.status(500).json({
              status: "error",
              message: "Error: Something went wrong. Couldn't fetch your details from server ",
            });
          }
        res.json({ status: "success", data: user });
    });
};

exports.logout =  function (req, res) {
    res.redirect("/home");
};

// exports.isLoggedIn = function (req, res, next) {
//     if (req.isAuthenticated()) return next();
//     res.redirect("/login");
// }