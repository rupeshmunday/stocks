var mongoose = require('mongoose'); // package import
var Schema = mongoose.Schema; // Schema class

var userStock = new Schema([
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

var userStocks = mongoose.model('userStock', userStocks); 

module.exports = userStocks;