// Require project dependencies
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const mongoose = require('mongoose');
const corsConfig = require('./configs/cors.config');
const favicon = require('serve-favicon');


// Rquire Environment Variables ----> IMPORTANT: remeber to add the .env file to GitIgnore!!!
require("dotenv").config();

// Import DB and passport config
require('./configs/db.config');
require('./configs/passport.config').setup(passport);

// Require routes
const index = require('./routes/index.routes');
const assetsRoutes = require('./routes/assets.routes')
const participantsRoutes = require('./routes/participants.routes');
const transactionsRoutes = require('./routes/transactions.routes');
const sessionRoutes = require('./routes/session.routes');

// initialize  Express application
const app = express();

// view engine setup
// As this is an API we are not going to set the EJS engine view
// If it were just an express App here we sould setup the engine views

// Middlewares
app.use(cors(corsConfig))

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: process.env.COOKIE_SECRET || 'Super Secret',
  resave: true,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    maxAge: 2419200000
  }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  res.locals.session = req.user || {};
  next();
});


// Routes
app.use('/assets', assetsRoutes);
app.use('/participants', participantsRoutes);
app.use('/session', sessionRoutes);


// catch 404 and forward to error handler
app.use((req, res, next)  => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

// error handler
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ message: error.message || '' });
});

module.exports = app;
