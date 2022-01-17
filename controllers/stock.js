
const Stocks = require('../models/stocks');
const User = require('../models/user');
const Userstock = require('../models/userStocks');

const request = require('request');


exports.getStockPerformance = ( req, res ) => {
    Stocks.findById( req.params.id , (err, stocks) => {
        if ( err ) {
            res.send(" error contact to site admin") 
            res.status(400); //bad request
        }
        try {
            res.json( stocks );        
        } catch ( e ) {
            console.error( e );
        }
    });
}
exports.findStock = ( req , res ) => {
    Stocks.find( { symbol: req.params.keyword } , function ( err , docs ) {
        if ( err ) { 
            res.send(" error contact to site admin") 
            res.status(400); //bad request
        }
        try {
            res.json( docs );        
        } catch ( e ) {
            console.error( e );
        }
    } );
}
exports.stockView = async function ( req, res ) {
    Stocks.find({} , function ( err , docs ) {
        if ( err ) { 
            res.send(" error contact to site admin") 
            res.status(400); //bad request
        }
        try {
            res.json( docs );        
        } catch ( e ) {
            console.error( e );
        }
    });
}
exports.stockBuy = (req , res ) => {
    Userstock.create({ stockDetails : req.body.stock_id ,
        date: Date() ,
        userDetails : req.params.id ,
        quantity : req.params.quantity
     }, ( err , Userstock ) => {
        if ( err ) { 
            res.send(" error contact to site admin"); 
            res.status(400); //bad request
        }
        try {
            res.json( Userstock );        
        } catch ( e ) {
            console.error( e );
        }
    });
}

exports.stockBuyUpdate = async ( req , res ) => {
        console.log(req.body._id);
        Userstock.findOneAndUpdate ( { userDetails : req.params.id } , { $inc: {quantity : req.params.quantity } } , ( err , Userstock ) => {
            if ( err ) { 
                res.send(" error contact to site admin"); 
                res.status(400); //bad request
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
    //     console.log(res.json(docs));
    //     return docs;
    // });
    // console.log(a.schema.tree.quantity);
    Userstock.findOneAndUpdate({ userDetails : req.params.id } ,{ $inc: { quantity: -(req.params.quantity) }}, ( err , userStockModel ) => {
        if ( err ) { 
            res.send(" error contact to site admin"); 
            res.status(400); //bad request
        }
        try {
            res.json( userStockModel );        
        } catch ( e ) {
            console.error( e );
        }
    });
}


