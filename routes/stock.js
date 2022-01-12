const express = require('express');
const stockController = require('../controllers/stockController');
const stockModel = require('../models/stocks');
const router = express.Router();
const userSchema = require('../models/user');


router.post('/', stockController.stockView);
router.put('/buy', stockController.stockBuy);
router.delete('/sell', stockController.stockSell);
router.post('/addToFavourite', stockController.addToFavourites);
router.delete('/removeStock', stockController.removeFromFavourites);

module.exports = router;

