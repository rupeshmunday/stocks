const express = require('express');
const stockController = require('../controllers/stockController');
const stockModel = require('../models/stocks');
const router = express.Router();
const userSchema = require('../models/user');


router.get('/', stockController.stockView);
router.get('/:id', stockController.getStockPerformance);
router.get('/search/:keyword', stockController.findStock);
router.post('/buy/:id/:quantity', stockController.stockBuy);
router.delete('/:id/sell/:quantity', stockController.stockSell);
router.post('/:id/addToFavourite', stockController.addToFavourites);
router.delete('/:id/removeStock', stockController.removeFromFavourites);

module.exports = router;

