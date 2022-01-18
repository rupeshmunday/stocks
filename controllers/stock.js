
const Stocks = require('../models/stocks');
const User = require('../models/user');
const Userstock = require('../models/userStocks');

const request = require('request');


exports.getStockPerformance = ( req, res ) => {
    Stocks.findById( req.params.id , (err, stocks) => {
        if (err) {
            console.log("Error: While fetching stock " + err);
            return res.status(500).json({
              status: "error",
              message: "Error: Something went wrong. Couldn't fetch stock data ",
            });
          }
        res.json({ status: "success", data: stocks });
    });
}
exports.findStock = ( req , res ) => {
    Stocks.find( { symbol: req.params.keyword } , function ( err , docs ) {
        if (err) {
            console.log("Error: While fetching stock " + err);
            return res.status(500).json({
              status: "error",
              message: "Error: Something went wrong. Couldn't fetch stock data ",
            });
          }
        res.json({ status: "success", data: docs });
    } );
}
exports.stockView = function ( req, res ) {
    Stocks.find({} , function ( err , docs ) {
        if (err) {
            console.log("Error: While fetching stocks " + err);
            return res.status(500).json({
              status: "error",
              message: "Error: Something went wrong. Couldn't fetch stock data ",
            });
          }
        res.json({ status: "success", data: docs });
    });
}
exports.stockBuy = (req , res ) => {
    Userstock.create({ stockDetails : req.body.stock_id ,
        date: Date() ,
        userDetails : req.params.id ,
        quantity : req.params.quantity
     }, ( err , Userstock ) => {
        if (err) {
            console.log("Error: While fetching stock " + err);
            return res.status(500).json({
              status: "error",
              message: "Error: Something went wrong. Couldn't fetch stock data ",
            });
          }
        res.json({ status: "success", data: Userstock });
    });
}

exports.stockBuyUpdate = ( req , res ) => {
        Userstock.findOneAndUpdate ( { userDetails : req.params.id } , { $inc: {quantity : req.params.quantity } } , ( err , Userstock ) => {
            if (err) {
                console.log("Error: While fetching stock " + err);
                return res.status(500).json({
                  status: "error",
                  message: "Error: Something went wrong. Couldn't fetch stock data ",
                });
              }
            res.json({ status: "success", data: Userstock });
            //create
        });
    
}
exports.stockSell = ( req , res ) => {
    Userstock.findOneAndUpdate({ userDetails : req.params.id } ,{ $inc: { quantity: -(req.params.quantity) }}, ( err , userStockModel ) => {
        if (err) {
            console.log("Error: While Selling stocks " + err);
            return res.status(500).json({
              status: "error",
              message: "Error: Something went wrong. Couldn't sell stocks ",
            });
          }
        res.json({ status: "success", data: userStockModel });
    });
}


