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
    stocksOwned: [{type: Schema.type.ObjectId, ref: 'userStock' }]
})

var Stock = new Schema([
    {
        _id: {
            type: Schema.Types.ObjectId,  
            ref: 'User',
            required: true
        },
        itemName: {
            type: String,
            required: true
        },
        dateAdded: {
            type: Date,
            default: new Date()
        },
        currentStock:{
            type: Number,
            default: 0
        },
        manufacturingCompany: {
            type: String,
            required: true
        }
    }
]);

var userStocks = mongoose.model('userStock', userStock); 
userSchema.plugin(passportLocalMongoose);
const Model = new mongoose.model("User", userSchema);
module.exports = Model;