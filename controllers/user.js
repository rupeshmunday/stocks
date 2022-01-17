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

exports.register = function (req, res) {
    User.create([{ name: req.body.name , email: req.body.email , password: req.body.password }] , ( err , user ) => {
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
    res.redirect("/home");
};

// exports.isLoggedIn = function (req, res, next) {
//     if (req.isAuthenticated()) return next();
//     res.redirect("/login");
// }