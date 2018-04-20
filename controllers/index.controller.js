const Asset = require('../models/asset.model');

// Require raspberry for using its methods
const raspberry = require('../lib_raspberry/raspberry');

module.exports.home = (req, res) => {

    res.send('greetings from ArtExMachina API!!!');
    //Asset.find()
    //.then(assets => res.json(assets))
    //.catch(error => next(error));

    // check ok whith RASPBERRY PI
    raspberry.beep();
    raspberry.whiteLedSingleBeep();
};
