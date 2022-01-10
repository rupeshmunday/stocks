const { ListCollectionsCursor } = require("mongodb");
const mongoose = require("mongoose");
var passportLocalMongoose = require('passport-local-mongoose')
var stockInfo = require('./userStocks');

const userSchema = new mongoose.Schema({
    _id : {
        type : Schema.types.ObjectId
       },
    name : {
        type : String
       },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type : String,
        required : true,
    },
    Stocks:{
        type: stockInfo.userStocks,
        required: false
    }
})
userSchema.plugin(passportLocalMongoose);
const Model = new mongoose.model("User", userSchema);
module.exports = Model;
console.log(stockInfo);