const mongoose = require('mongoose');
const ApiError = require('../models/api-error.model');
const raspberry = require('../lib_raspberry/raspberry');  // Require raspberry for using its methods
const gpio = require('onoff').Gpio;

module.exports.hello = (req, res) => {
    res.send('Hey there, I am a raspberryPi!!!');
    raspberry.beep();
}


 module.exports.green = (req, res) => {
    let val = raspberry.toggleGreenLed();
    console.log('toggling Green LED');
    res.json({msg: "green Led status" + val});
}




 module.exports.red = (req, res) => {
    let val = raspberry.toggleRedLed();
    console.log('toggling Red LED');
    res.json({msg: "red Led status" + val});
}


 module.exports.yellow = (req, res) => {
    let  val = raspberry.toggleYellowLed();
    console.log('toggling Yellow LED');
    res.json({msg: "yellow Led status" + val});
}


 module.exports.rele = (req, res) => {
    let val = raspberry.toggleRele();
    console.log('toggling Light');
    res.json({msg: "Awesome!! Light status is" + val});
}

