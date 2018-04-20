const express = require('express');
const router = express.Router();
const raspberryController = require('../controllers/raspberry.controller');
const secureMiddleware = require('../middleware/secure.middleware');

router.get('/', secureMiddleware.isAuthenticated, raspberryController.hello);
router.get('/green',  secureMiddleware.isAuthenticated, raspberryController.green);
router.get('/red', secureMiddleware.isAuthenticated, raspberryController.red);
router.get('/yellow', secureMiddleware.isAuthenticated, raspberryController.yellow);
router.get('/rele', secureMiddleware.isAuthenticated, raspberryController.rele);

module.exports = router;