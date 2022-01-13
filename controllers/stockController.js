
const stockModel = require('../models/stocks');
const userModel = require('../models/user');
const userStockModel = require('../models/userStocks');

const request = require('request');


exports.getStockPerformance = ( req, res ) => {
    userStockModel.findById( req.params.id , (err, userStock) => {
        if(err){
            res.send("Error "+err);
        }
        res.send( userStock );
    })
}
exports.findStock = ( req , res ) => {
    res.send("Hi search a stock using me");
}
exports.stockView = function ( req, res ) {
    userStockModel.find();
}
exports.stockBuy =  ( req , res ) => {
    userStockModel.insertMany([{ _id : req.params.id , quantity: req.params.quantity}] , (err , userStockModel) => {
        if(err){
            res.send("Error "+err);
        }
        res.send(userStockModel);
    })
    
}
exports.stockSell = ( req , res ) => {
    userStockModel.deleteOne({ _id : req.params.id } , (err , userStockModel) => {
        if(err){
            res.send("Error "+err);
        }
        res.send(userStockModel);
    });

}

//Adding favourite stocks
exports.addToFavourites = ( req , res ) => {
    userStockModel.insertMany({_id : req.params.id} , (err)=>{
        if(err){
            res.send("Error "+err);
        }
        res.status(200);
    })
}

//Removing favourite stocks
exports.removeFromFavourites = ( req , res) => {
    userStockModel.deleteOne({_id : req.params.id} , ( err , userStockModel)=>{
        if ( err ) {
            res.send( "Error "+err );
        }
        res.send( userStockModel );
    });
}



