const mongoose = require('mongoose');

const url = "mongodb://localhost/DemoDBex";

mongoose.connect(url, {
    useNewUrlParser:true
})
const con=mongoose.connection
con.on('open', ()=>{
    console.log('connected...')
})