const Participant = require('../models/participant.model');
const LocalStrategy = require('passport-local').Strategy;
// const ApiError = require('../models/api-error.model');

module.exports.setup = (passport) => {
  passport.serializeUser((participant, next) => {
    next(null, participant._id);
  });

  passport.deserializeUser((id, next) => {
    Participant.findById(id)
      .then(participant => {
        next(null, participant);
      })
      .catch(error => next(error));
  });

  passport.use('local-auth', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  }, (email, password, next) => {
    Participant.findOne({ email: email })
      .then(participant => {
        if (!participant) {
          next(null, participant, 'Invalid email or password');
        } else {
          participant.checkPassword(password)
            .then(match => {
              if (match) {
                next(null, participant);
              } else {
                next(null, null, 'Invalid email or password');
              }
            })
            .catch(error => next(error));
        }
      })
      .catch(error => next(error));
  }));
};
