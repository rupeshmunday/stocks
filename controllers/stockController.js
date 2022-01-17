
const Stocks = require('../models/stocks');
const User = require('../models/user');
const Userstock = require('../models/userStocks');

const request = require('request');


exports.getStockPerformance = ( req, res ) => {
    Stocks.findById( req.params.id , (err, stocks) => {
        if ( err ) { 
            res.json(err);
        }
        try {
            res.json( stocks );        
        } catch ( e ) {
            console.error( e );
        }
    });
}
exports.findStock = ( req , res ) => {
    try {
        res.send("Hi search a stock using me");
    } catch (error) {
        console.error("Error "+error);
    }
}
exports.stockView = async function ( req, res ) {
    Userstock.find({} , function ( err , docs ) {
        if ( err ) { 
            res.json(err);
        }
        try {
            res.json( docs );        
        } catch ( e ) {
            console.error( e );
        }
    });
}
exports.stockBuy = async ( req , res ) => {
        Userstock.create ( [ { _id : req.params.id , quantity: req.params.quantity } ] , ( err , Userstock ) => {
            if ( err ) { 
                res.json(err);
            }
            try {
                res.json( Userstock );        
            } catch ( e ) {
                console.error( e );
            }
            //create
        });
    
}
exports.stockSell = ( req , res ) => {
    // a=Userstock.findById(req.params.id ,function (err, docs) {
    //     if (err) {
    //         console.error(err);
    //     }
    //     res.json(docs);
    // });
    // console.log(a);
    Userstock.findByIdAndUpdate({ _id : req.params.id } ,{ $set: { quantity: req.params.quantity }}, ( err , userStockModel ) => {
        if ( err ) { 
            res.json(err);
        }
        try {
            res.json( userStockModel );        
        } catch ( e ) {
            console.error( e );
        }
    });
}

//Adding favourite stocks
exports.addToFavourites = ( req , res ) => {
    userStockModel.create({_id : req.params.id} , (err)=>{
        if(err){
            res.send("Error "+err);
        }
        res.status(200);
    })
}

//Removing favourite stocks
exports.removeFromFavourites = ( req , res) => {
    Userstock.deleteOne({_id : req.params.id} , ( err , userStockModel)=>{
        if ( err ) {
            res.send( "Error "+err );
        }
        res.send( userStockModel );
    });
}



