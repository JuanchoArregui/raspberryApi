const Asset = require('../models/asset.model');

module.exports.home = (req, res) => {
    Asset.find()
    .then(assets => res.json(assets))
    .catch(error => next(error));
};
