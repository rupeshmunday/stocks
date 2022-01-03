const { request } = require('express');
var express=require('express');
const router = express.Router();


router.post('/api/stocks',(req,res)=>{
    request('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=TSCO.LON&outputsize=full&apikey=B0JT9HYQBNUSMJEN',function(error,response,body){
        console.log('error',error);
        console.log('statusCode',response && response.statusCode);
        console.log('body:',body);
    })
    res.send({
        success:true,
        message:'Its good' 
    })
})
