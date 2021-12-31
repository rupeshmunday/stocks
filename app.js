const express = require('express');
const app = express();
const port = 3000;
const db=require('./db/conn');
const User=require('./models/userSchema');
var usersRouter = require('./routes/users');
var passport = require("passport");
var bodyParser = require("body-parser");
var LocalStrategy = require("passport-local");


app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use('/', usersRouter);
app.listen(port, () => {
  console.log(`app running at http://localhost:${port}`);
}); 