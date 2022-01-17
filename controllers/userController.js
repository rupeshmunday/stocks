const User = require('../models/user');
const Stocks = require('../models/stocks');


exports.home = function (req, res) {
    Stocks.create([{symbol: req.body.symbol}], (err ,stocks)=>{
        if ( err ) { 
            res.json(err);
        }
        try {
            res.json( stocks );        
        } catch ( e ) {
            console.error( e );
        }
    });
};

exports.post_register = function (req, res) {
    User.create([{ email: req.body.email , password: req.body.password }] , ( err , user ) => {
        if ( err ) { 
            res.json(err);
        }
        try {
            res.json( user );        
        } catch ( e ) {
            console.error( e );
        }
    });
};

exports.login = async function (req, res) {
    let email = req.body.email;
    let password = req.body.password;
    User.find( { email : email , password : password } , (err , user ) => {
        if ( err ) { 
            res.json(err);
        }
        try {
            res.json( user );        
        } catch ( e ) {
            console.error( e );
        }
    });
};

exports.logout =  function (req, res) {
    res.send("Hi logging out");
    res.redirect("/home");
};

// exports.isLoggedIn = function (req, res, next) {
//     if (req.isAuthenticated()) return next();
//     res.redirect("/login");
// }