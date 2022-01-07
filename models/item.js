var mongoose = require('mongoose'); // package import
var Schema = mongoose.Schema; // Schema class

var item = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
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
});

var Items = mongoose.model('item', item); 

module.exports = Items;