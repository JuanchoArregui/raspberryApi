const express = require('express');
const router = express.Router();

const participantsController = require('../controllers/participants.controller');
const secureMiddleware = require('../middleware/secure.middleware');

router.post('/', participantsController.create);
router.get('/', secureMiddleware.isAuthenticated, participantsController.list);
router.put('/:id', secureMiddleware.isAuthenticated, participantsController.edit);


module.exports = router;
