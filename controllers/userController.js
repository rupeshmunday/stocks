const User = require('../models/user');
const Stocks = require('../models/stocks');


exports.home = function (req, res) {
    try {
        Stocks.create([{symbol: req.body.symbol}], (err ,stocks)=>{
            if(err){
                res.send("Error"+err);
            }
            res.json(stocks);
        });
    } catch (error) {
        console.error("Error "+error);
    }
};

exports.post_register = function (req, res) {
    try {
        User.create([{ email: req.body.email , password: req.body.password }] , ( err , user ) => {
            if(err){
                console.error("Error"+err);
            }
            console.error("Error");
            res.json( user );
        });
    } catch (error) {
        console.error("Error"+error);
    }
};

exports.login = async function (req, res) {
    let email = req.body.email;
    let password = req.body.password;
    try {
        User.find( { email : email , password : password } , (err , user ) => {
            if (err) {
                console.error("Error"+err);
            }
            res.json(user);
        });
    } catch (error) {
       console.error("Error"+error); 
    }
};

exports.logout =  function (req, res) {
    res.send("Hi logging out");
    res.redirect("/home");
};

// exports.isLoggedIn = function (req, res, next) {
//     if (req.isAuthenticated()) return next();
//     res.redirect("/login");
// }