const { ListCollectionsCursor } = require("mongodb");
const mongoose=require("mongoose");

var stockSchema=new mongoose.Schema({
    symbol:{
        type: String,
        required:true
    },
    quotes:{
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
    }
})
module.exports=mongoose.model('Stock',stockSchema);
