const stock = require("../models/stock");
const stockModel = require('../models/stock');
const userModel = require('../models/user');

const request = require('request');
let symbol = "TSCO.LON";
let apikey = "B0JT9HYQBNUSMJEN";
let New = new stockModel({
    a : "number"
});
// New.save((err)=>{
//     if(err){}
// });

exports.stockView = function (req, res) {
    console.log(req.body);
    request('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=' + symbol + '&outputsize=full&apikey=' + apikey , function(error, response, body){
        res.json(JSON.parse(body));
    });
    // res.send({
    //     success:true,
    //     message:'Its good' 
    // });
}
exports.stockBuy = (req, res)=>{
    let stocks = [];
    console.log(stocks.push(req.body.stockWeb));
    let stock = new userModel();
    stock.save(stocks,(err ) => {
        if (err ) {
            console.log(err );
        } else{
            console.log("Stocks added");
            res.send("Hi i am working")
        }
    });
}
exports.stockSell = (req, res)=>{
    var { stockID } = req.params,
    update = {status: false};
    stockModel.findByIdAndDelete(
        { _id: stockID, status: true},
        update,
        { new: true},
        function (err, stockData) {
            if (err) {
                console.log("Error: while selling stock" + err);
                return res.status(500).json({
                    status: "error",
                    message: "Error: Something went wrong. Couldn't sell your stock",
                  });
            }
            res.json({
                status: "success",
                message: "Your stock has been sold",
              });
        }
        );
}
