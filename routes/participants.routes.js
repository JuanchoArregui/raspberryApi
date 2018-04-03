const express = require('express');
const router = express.Router();

const participantsController = require('../controllers/participants.controller');
const secureMiddleware = require('../middleware/secure.middleware');

router.post('/', participantsController.create);
router.get('/', secureMiddleware.isAuthenticated, participantsController.list);

module.exports = router;
