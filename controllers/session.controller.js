const passport = require('passport');
const ApiError = require('../models/api-error.model');

// Require raspberry for using its methods
const raspberry = require('../lib_raspberry/raspberry');

module.exports.create = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log(password)

  if (!email || !password) {
    next(new ApiError('Session Controller error: Email and password are required!!'));
  } else {
    passport.authenticate('local-auth', (error, participant, message) => {
      if (error) {
        next(error);
      } else if (!participant) {
        next(new ApiError('Session Controller error!', 401));
      } else {
        req.login(participant, (error) => {
          if (error) {
            next(new ApiError('Session Controller error!!', 500));
          } else {
            console.log('session created!')
            res.status(201).json({id: participant._id, email: participant.email});
            raspberry.whiteLedSingleBeep(); // check ok whith RASPBERRY PI
          }
        });
      }
    })(req, res, next);
  }
};

module.exports.destroy = (req, res, next) => {
  req.logout();
  res.status(204).json();
  raspberry.whiteLedSingleBeep(); // check ok whith RASPBERRY PI
};