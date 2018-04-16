//////////////////////////////////
// Require project dependencies //
//////////////////////////////////
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


// Require Environment Variables 
// ----> IMPORTANT: 
// remember to create a .env file in the root directory of the project and add environment-specific variables
// also remember to add the .env file to GitIgnore!!!
require("dotenv").config();

// Import DB and passport config
require('./configs/db.config');
require('./configs/passport.config').setup(passport);


// Require "node-cron" task scheduler, so that we can schedule our app to check the email every five minutes
const cron = require('node-cron');


// Require "mail-notifier" so that we can check new emails
// we can also use "node-imap" IMAP email client, so that we can receive emails
const notifier = require('mail-notifier');
const imap = {
      user: process.env.EMAIL_IMAP_USER,
      password: process.env.EMAIL_IMAP_PASSWORD,
      host: process.env.EMAIL_IMAP_HOST,
      port: process.env.EMAIL_IMAP_PORT,
      tls: process.env.EMAIL_IMAP_TLS,
      tlsOptions: { rejectUnauthorized: false }
};



// Require routes
const assetsRoutes = require('./routes/assets.routes')
const indexRoutes = require('./routes/index.routes');
const participantsRoutes = require('./routes/participants.routes');
const sessionRoutes = require('./routes/session.routes');
const transactionsRoutes = require('./routes/transactions.routes');

// view engine setup
// As this is an API we are not going to set the EJS engine view
// If it were just an express App here we sould setup the engine views
// uncomment next line if views are needed
// const expressLayouts = require('express-ejs-layouts');




/////////////////////////////////////
// initialize  Express application //
/////////////////////////////////////
const app = express();




/////////////////
// Middlewares //
/////////////////
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
app.use('/', indexRoutes);
app.use('/participants', participantsRoutes);
app.use('/session', sessionRoutes);
app.use('/transactions', transactionsRoutes);


// catch 404 and forward to error handler
app.use((req, res, next)  => {
  const error = new Error('BrickMessage from the App.js: Not Found');
  error.status = 404;
  next(error);
});

// error handler
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ message: error.message || '' });
});


////////////////////
// Email Notifier //
////////////////////
notifier(imap)
  .on('mail', mail => {
    console.log('NUEVO EMAIL RECIVIDO!!!!!!!!!!!!!!');
    // console.log('esta es el email que devuelve el módulo:');
    // console.log(mail)
  })
  .on('connected', () => console.log('conectado al servidor de correo'))
  .start();

////////////////////
// Cron Scheduler //
////////////////////
// console.log('Hey there, this a message just before satrting the Cron Scheduler!!!');
// cron.schedule('*/10 * * * * *', function(){
//   console.log('check new email every 10 seconds');


// });


module.exports = app;
