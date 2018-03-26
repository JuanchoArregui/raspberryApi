const express = require('express');
const router = express.Router();

const participantsController = require('../controllers/participants.controller');

router.post('/', participantsController.create);

module.exports = router;
