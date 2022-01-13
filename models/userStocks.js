const mongoose = require('mongoose'); // package import

const Schema = mongoose.Schema; // Schema class

let userStock = new Schema([
    {
        stockDetails: {
            type: Schema.Types.ObjectId,
            ref: 'stocks'
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

let userStocks = mongoose.model('userStock', userStock); 

module.exports = userStocks;