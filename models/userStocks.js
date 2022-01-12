var mongoose = require('mongoose'); // package import

var Schema = mongoose.Schema; // Schema class

var userStock = new Schema([
    {
        stockDetails: [{
            type: Schema.Types.ObjectId,
            ref: 'stocks'
        }],
        itemName: {
            type: String,
            required: true
        },
        dateAdded: {
            type: Date,
            default: new Date()
        },
        quantity: {
            type: Number,
            default: 0
        },
    }
]);

let userStocks = mongoose.model('userStock', userStocks); 

module.exports = userStocks;