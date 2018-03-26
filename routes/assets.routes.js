const express = require('express');
const router = express.Router();
const uploadConfig = require('../configs/multer.config');
const assetsController = require('../controllers/assets.controller');
const assetsMiddleware = require('../middleware/assets.middleware');
const secureMiddleware = require('../middleware/secure.middleware');

router.get('/', secureMiddleware.isAuthenticated, assetController.list);
router.get('/:id', secureMiddleware.isAuthenticated, assetsMiddleware.checkValidId, assetController.get);
router.post('/', secureMiddleware.isAuthenticated, uploadConfig.single('image'), assetController.create);
router.put('/:id', secureMiddleware.isAuthenticated, uploadConfig.single('image'), assetController.edit);
router.delete('/:id', secureMiddleware.isAuthenticated, assetsMiddleware.checkValidId, assetController.delete);

module.exports = router;
