const { ListCollectionsCursor } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var stockSchema=new Schema({
    symbol:{
        type: String,
        required:true
    },
    date:{
        type: Date,
        values:{
            open: Number,
            high: Number,
            low: Number,
            close:Number,
            volume: Number
        }
    }
})
module.exports = mongoose.model('Stock', stockSchema);
