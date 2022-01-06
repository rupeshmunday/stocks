const stock = require("../models/stock");
const stockModel = require('../models/stock');

const request = require('request');
let symbol = "TSCO.LON";
let apikey = "B0JT9HYQBNUSMJEN";
let New = new stockModel({
    a:"number"
});
// New.save((err)=>{
//     if(err){}
// });

exports.stockView = function (req,res) {
    console.log(req.body);
    request('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=' + symbol + '&outputsize=full&apikey=' + apikey , function(error,response,body){
        res.json(JSON.parse(body));
    });
    // res.send({
    //     success:true,
    //     message:'Its good' 
    // });
}
exports.stockBuy = (req,res)=>{
    console.log(stocks.push(req.body.stockWeb));
}