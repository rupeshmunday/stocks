const express = require('express');
const stockController = require('../controllers/stock');
const router = express.Router();


router.get('/', stockController.stockView);
router.get('/:id', stockController.getStockPerformance);
router.get('/search/:keyword', stockController.findStock);
router.post('/buy/:id/:quantity', stockController.stockBuy);
router.put('/buymore/:id/:quantity', stockController.stockBuyUpdate);
router.put('/sell/:id/:quantity', stockController.stockSell);
// router.post('/:id/addToFavourite', stockController.addToFavourites);
// router.delete('/:id/removeStock', stockController.removeFromFavourites);

module.exports = router;

