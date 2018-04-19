const Asset = require('../models/asset.model');

module.exports.home = (req, res) => {

    res.send('greetings from ArtExMachina API!!!');
    //Asset.find()
    //.then(assets => res.json(assets))
    //.catch(error => next(error));
};
