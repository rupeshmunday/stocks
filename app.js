const express = require('express');
const app = express();
const port = 3000;
const db = require('./db/conn');
let usersRouter = require('./routes/users');
let stockRouter = require('./routes/stock');
let bodyParser = require("body-parser");


app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/', usersRouter);
app.use('/api/stocks', stockRouter);
app.listen(port, () => {
  console.log(`app running at http://localhost:${port}`);
}); 









//API Key - B0JT9HYQBNUSMJEN