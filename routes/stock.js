const express = require('express');
const stockController = require('../controllers/stockController');
const stockModel = require('../models/stocks');
const router = express.Router();
const userSchema = require('../models/user');


router.post('/api/stocks', stockController.stockView);
router.put('/api/stocks/buy', stockController.stockBuy);
router.delete('/api/stocks/sell', stockController.stockSell);
router.post('/api/stocks/addToFavourite', stockController.addToFavourites);
router.delete('/api/stocks/removeStock', stockController.removeFromFavourites);

module.exports = router;

