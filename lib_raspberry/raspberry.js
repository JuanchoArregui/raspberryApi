const gpio = require('onoff').Gpio;
const notifier = require('mail-notifier');

const gpioBlueRele = new gpio(12, "out");// BLUE WIRE

const gpioGreenLed = new gpio(16, "out"); // GREEN WIRE
const gpioYellowLed = new gpio(20, "out");// YELLOW WIRE
const gpioRedLed = new gpio(21, "out");// WHITE WIRE

const gpioOrangeBuzzer = new gpio(26, "out"); // ORANGE WIRE

let newEmail = false;


// ORANGE WIRE - BUZZER
function gpioOrangeBuzzerOn(){gpioOrangeBuzzer.writeSync(1)};
function gpioOrangeBuzzerOff(){gpioOrangeBuzzer.writeSync(0)};
function beep(){
  gpioOrangeBuzzerOn();
  setTimeout(gpioOrangeBuzzerOff, 75);
  console.log('beep');  
}
function doubleBeep() {
  beep();
  setTimeout(beep, 250);
}

// GREEN WIRE - GREEN LED
function toggleGreenLed() {
    let val = gpioGreenLed.readSync() ^ 1;
    gpioGreenLed.writeSync(val);
    return val;
}
function blinkGreenLed() {
    var blinkGreenLedInterval = setInterval(function() {
    toggleGreenLed()
    }, 200)
  }


// YELLOW WIRE - YELLOW LED
function toggleYellowLed() {
    let val = gpioYellowLed.readSync() ^ 1;
    gpioYellowLed.writeSync(val);
    return val;
}
function blinkYellowLed() {
    var blinkYellowLedInterval = setInterval(function() {
    toggleYellowLed()
    }, 200)
  }


// WHITE WIRE - RED LED
function toggleRedLed() {
    let val = gpioRedLed.readSync() ^ 1;
    gpioRedLed.writeSync(val);
    return val
}
function blinkRedLed() {
    var blinkRedLedInterval = setInterval(function() {
    toggleRedLed()
    }, 200)
  }


// BLUE WIRE - RELE
function toggleRele() {
    let val = gpioBlueRele.readSync() ^ 1;
    gpioBlueRele.writeSync(val);
    return val
}

// EMAIL IMAP NOTIFIER - CONFIGURATION
const imap = {
  user: process.env.EMAIL_NOTIFIER_USER,
  password: process.env.EMAIL_NOTIFIER_PASSWORD,
  host: process.env.EMAIL_NOTIFIER_HOST,
  port: process.env.EMAIL_NOTIFIER_PORT, // imap port
  tls: process.env.EMAIL_NOTIFIER_TLS,// use secure connection
  tlsOptions: { rejectUnauthorized: false }
  
};
 

// EMAIL IMAP NOTIFIER - STARTUP & SETUP
notifier(imap)
  .on('mail', mail => {
    if (!newEmail){
    console.log('NUEVO EMAIL RECIVIDO!!!!!!!!');
    doubleBeep();
    }
   
  })
  .on('connected', () => console.log('conectado con éxito al servidor de correo de ArtExMachina!'))
  .start();


// EXIT RASPBERRY PI
// Listen to the event triggered at exit on CTRL+C
// and we cleanly close the GPIO pin before exiting
// so al the leds are turned off aour raspberrypi
process.on('SIGINT', function () {

  clearInterval(blinkGreenLedInterval);
  clearInterval(blinkYellowLedInterval);
  clearInterval(blinkRedLedInterval);

  gpioGreenLed.writeSync(0);
  gpioYellowLed.writeSync(0);
  gpioRedLed.writeSync(0);
  gpioOrangeBuzzer.writeSync(0);
  gpioBlueRele.writeSync(0);

  gpioBlueRele.unexport();  
  gpioGreenLed.unexport();
  gpioYellowLed.unexport();
  gpioRedLed.unexport();
  gpioOrangeBuzzer.unexport();
  
  console.log('Bye, bye RaspberryPi!');
  process.exit();
});



module.exports.beep = beep;
module.exports.doubleBeep = doubleBeep;

module.exports.blinkGreenLed = blinkGreenLed; 
module.exports.toggleGreenLed = toggleGreenLed;

module.exports.blinkRedLed = blinkRedLed; 
module.exports.toggleRedLed = toggleRedLed;

module.exports.blinkYellowLed = blinkYellowLed; 
module.exports.toggleYellowLed = toggleYellowLed;

module.exports.toggleRele = toggleRele;
