var express = require('express');
const stockController = require('../controllers/stockController');
const stockModel = require('../models/stock');
const router = express.Router();
const userSchema = require('../models/user');


router.post('/api/stocks', stockController.stockView);
router.post('/api/stocks/buy',(req,res)=>{
    console.log(stocks.push(req.body.stockWeb));
});
router.post('/api/stocks/sell',(req,res)=>{
    stocks.pop(req.body.stockWeb);
});

module.exports = router;

