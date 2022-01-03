const express = require('express');
const app = express();
const port = 3000;
const db = require('./db/conn');
const User = require('./models/userSchema');
var usersRouter = require('./routes/users');
var stockRouter=require('./routes/stock');
var passport = require("passport");
var bodyParser = require("body-parser");
var LocalStrategy = require("passport-local").Strategy;
var session = require('express-session');


app.use(express.json());
// app.use(session({ secret: 'SECRET' }));
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(new LocalStrategy(User.authenticate()));
// app.serializeUser(User.serializeUser());
// app.deserializeUser(User.deserializeUser());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/', usersRouter);
app.use('/',stockRouter);
app.listen(port, () => {
  console.log(`app running at http://localhost:${port}`);
}); 









//API Key - B0JT9HYQBNUSMJEN