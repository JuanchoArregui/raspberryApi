const express = require('express');
const router = express.Router();
const transactionsController = require('../controllers/transactions.controller');

const uploadConfig = require('../configs/multer.config');
const assetsMiddleware = require('../middleware/assets.middleware');
const secureMiddleware = require('../middleware/secure.middleware');

router.get('/', secureMiddleware.isAuthenticated, transactionsController.list);
router.get('/:id', secureMiddleware.isAuthenticated, assetsMiddleware.checkValidId, transactionsController.get);
router.post('/', secureMiddleware.isAuthenticated, uploadConfig.single('image'), transactionsController.create);


module.exports = router;