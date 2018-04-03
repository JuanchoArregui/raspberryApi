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

module.exports.list = (req, res, next) => {
  Participant.find()
    .then(participants => res.json(participants))
    .catch(error => next(error));
}


module.exports.edit = (req, res, next) => {
  const id = req.params.id;
  
  Participant.findByIdAndUpdate(id, { $set: req.body }, { new: true })
    .then(participant => {
      if (participant) {
        res.json(participant)
      } else {
        next(new ApiError(`Participant not found`, 404));
      }
    }).catch(error => {
      if (error instanceof mongoose.Error.ValidationError) {
        next(new ApiError(error.message, 400, error.errors));
      } else {
        next(new ApiError(error.message, 500));
      }
    });
}