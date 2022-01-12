const express = require('express');
const stockController = require('../controllers/stockController');
const stockModel = require('../models/stocks');
const router = express.Router();
const userSchema = require('../models/user');


router.get('/', stockController.stockView);
router.get('/:stockID', stockController.getStockPerformance)
router.get('/search/:keyword', stockController.findStock);
router.put('/:stockID/buy', stockController.stockBuy);
router.delete('/:stockID/sell/:quantity', stockController.stockSell);
router.post('/:stockID/addToFavourite', stockController.addToFavourites);
router.delete('/:stockID/removeStock', stockController.removeFromFavourites);

module.exports = router;

