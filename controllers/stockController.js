
const stockModel = require('../models/stocks');
const userModel = require('../models/user');

const request = require('request');


exports.getStockPerformance = ( req, res ) => {
    res.send("Hi i am a single stock performance")
}
exports.findStock = ( req , res ) => {
    res.send("Hi search a stock using me");
}
exports.stockView = function ( req, res ) {
    
    res.send({
        success:true,
        message:'Its good' 
    });
}
exports.stockBuy =  ( req , res )=>{
    res.send("Hi stonks bought");
    
}
exports.stockSell = ( req , res )=>{
    res.send("Hi stonks sold");

}

//Adding favourite stocks
exports.addToFavourites = ( req , res ) => {
    res.send("Hello these are your favourite stonks");
}

//Removing favourite stocks
exports.removeFromFavourites = ( req , res) => {
    res.send("Stonk removed from favourite list");
}



