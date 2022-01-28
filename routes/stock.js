const express = require('express');
const stockController = require('../controllers/stock');
const router = express.Router();
const AuthHelper = require('../helper/Auth');
// router.all('*', function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// });


router.get('/', AuthHelper.authenticateJWT,stockController.stockView);
router.get('/:id', stockController.getStockPerformance);
router.get('/search/:keyword', stockController.findStock);
router.post('/buy/:id/:quantity', AuthHelper.authenticateJWT ,stockController.stockBuy);
router.put('/buymore/:id/:quantity', stockController.stockBuyUpdate);
router.put('/sell/:id/:quantity', stockController.stockSell);
// router.post('/:id/addToFavourite', stockController.addToFavourites);
// router.delete('/:id/removeStock', stockController.removeFromFavourites);

module.exports = router;

