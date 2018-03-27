const mongoose = require('mongoose');
const Transaction = require('../models/transaction.model');
const ApiError = require('../models/api-error.model');

module.exports.list = (req, res, next) => {
    Transaction.find()
        .then(transactions => res.json(transactions))
        .catch(error => next(error));
}


module.exports.get = (req, res, next) => {
  const id = req.params.id;
  Transaction.findById(id)
    .then(transaction => {
      if (transaction) {
        res.json(transaction)
      } else {
        next(new ApiError(`Transaction not found`, 404));
      }
    }).catch(error => next(error));
}

module.exports.create = (req, res, next) => {
  const transaction = new Transaction(req.body);
  if (req.file) {
    transaction.image = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
  }
  transaction.save()
    .then(() => {
      res.status(201).json(asset);
    })
    .catch(error => {
      if (error instanceof mongoose.Error.ValidationError) {
        next(new ApiError(error.errors));
      } else {
        next(new ApiError(error.message, 500));
      }
    })
}