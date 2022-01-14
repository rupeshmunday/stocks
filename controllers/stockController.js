
const Stocks = require('../models/stocks');
const User = require('../models/user');
const Userstock = require('../models/userStocks');

const request = require('request');


exports.getStockPerformance = ( req, res ) => {
    try {
        Stocks.findById( req.params.id , (err, stocks) => {
            if( err ) {
                res.send( "Error " + err );
            }
            res.json( stocks )
        })

    } catch (error) {
        console.error("Error "+error);
    }
}
exports.findStock = ( req , res ) => {
    try {
        res.send("Hi search a stock using me");
    } catch (error) {
        console.error("Error "+error);
    }
}
exports.stockView = async function ( req, res ) {
    try {
        Userstock.find({} , function ( err , docs ) {
            if( err ) {
                res.send( "Error " + err );
            }
            res.json( docs );
        });
    } catch (error) {
        console.error("Error "+error);
    }
}
exports.stockBuy = async ( req , res ) => {
    try {
        Userstock.create([{ _id : req.params.id , quantity: req.params.quantity}] , (err , Userstock) => {
            if( err ) {
                res.send( "Error " + err );
            }
            res.json(Userstock); //create
        })
    } catch ( error ) {
        console.error("Error "+error);
    }
    
}
exports.stockSell = ( req , res ) => {
    // a=Userstock.findById(req.params.id ,function (err, docs) {
    //     if (err) {
    //         console.error(err);
    //     }
    //     res.json(docs);
    // });
    // console.log(a.quantity);
    try {
        Userstock.findByIdAndUpdate({ _id : req.params.id } ,{ $set: { quantity: req.params.quantity }}, ( err , userStockModel ) => {
            if( err ) {
                res.send( "Error " + err );
            }
            res.json( userStockModel );
        });
    } catch ( error ) {
        console.error("Error "+error);
    }

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



