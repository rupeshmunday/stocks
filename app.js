const express = require('express');
const app = express();
const cors = require('cors'); 
const port = 3000;
const db = require('./db/conn');
let usersRouter = require('./routes/users');
let stockRouter = require('./routes/stock');
let bodyParser = require("body-parser");


app.use(express.json());

app.use(bodyParser.urlencoded({extended:true}));
//app.use(cors);
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
  // res.header('Access-Control-Allow-Headers', 'Authorization');
  next();
});
app.use('/', usersRouter);
app.use('/api/stocks', stockRouter);
app.listen(port, () => {
  console.log(`app running at http://localhost:${port}`);
}); 









//API Key - B0JT9HYQBNUSMJEN