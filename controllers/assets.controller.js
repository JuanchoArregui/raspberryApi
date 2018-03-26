const mongoose = require('mongoose');
const Asset = require('../models/asset.model');
const ApiError = require('../models/api-error.model');

module.exports.list = (req, res, next) => {
  Asset.find()
    .then(assets => res.json(assets))
    .catch(error => next(error));
}

module.exports.get = (req, res, next) => {
  const id = req.params.id;
  Asset.findById(id)
    .then(asset => {
      if (asset) {
        res.json(asset)
      } else {
        next(new ApiError(`Asset not found`, 404));
      }
    }).catch(error => next(error));
}

module.exports.create = (req, res, next) => {
  const asset = new Asset(req.body);
  if (req.file) {
    asset.image = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
  }
  asset.save()
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

module.exports.delete = (req, res, next) => {
  const id = req.params.id;
  Asset.findByIdAndRemove(id)
    .then(asset => {
      if (asset) {
        res.status(204).json()
      } else {
        next(new ApiError(`Asset not found`, 404));
      }
    }).catch(error => next(error));
}

module.exports.edit = (req, res, next) => {
  const id = req.params.id;
  if (req.file) {
    body.image = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
  }
  
  Asset.findByIdAndUpdate(id, { $set: req.body }, { new: true })
    .then(asset => {
      if (asset) {
        res.json(asset)
      } else {
        next(new ApiError(`Asset not found`, 404));
      }
    }).catch(error => {
      if (error instanceof mongoose.Error.ValidationError) {
        next(new ApiError(error.message, 400, error.errors));
      } else {
        next(new ApiError(error.message, 500));
      }
    });
}