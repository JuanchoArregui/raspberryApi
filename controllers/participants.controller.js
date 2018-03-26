const mongoose = require('mongoose');
const Participant = require('../models/participant.model');
const ApiError = require('../models/api-error.model');

module.exports.create = (req, res, next) => {
  Participant.findOne({ email: req.body.email })
    .then(participant => {
      if (participant) {
        next(new ApiError('User/Participant already registered', 400));
      } else {
        participant = new Participant(req.body);
        participant.save()
          .then(() => {
            res.json(participant);
          })
          .catch(error => {
            if (error instanceof mongoose.Error.ValidationError) {
              next(new ApiError(error.message, 400, error.errors));
            } else {
              next(error);
            }
          });
      }
    }).catch(error => next(new ApiError('User/Participant already registered', 500)));
}