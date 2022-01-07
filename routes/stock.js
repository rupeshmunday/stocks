var express = require('express');
const stockController = require('../controllers/stockController');
const stockModel = require('../models/stock');
const router = express.Router();
const userSchema = require('../models/user');


router.post('/api/stocks', stockController.stockView);
router.post('/api/stocks/buy', stockController.stockBuy);
router.post('/api/stocks/sell', stockController.stockSell);

module.exports = router;

