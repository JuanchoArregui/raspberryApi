const express = require('express');
const router = express.Router();
const uploadConfig = require('../configs/multer.config');
const assetsController = require('../controllers/assets.controller');
const assetsMiddleware = require('../middleware/assets.middleware');
const secureMiddleware = require('../middleware/secure.middleware');

router.get('/', secureMiddleware.isAuthenticated, assetsController.list);
router.get('/:id', secureMiddleware.isAuthenticated, assetsMiddleware.checkValidId, assetsController.get);
router.post('/', secureMiddleware.isAuthenticated, uploadConfig.single('image'), assetsController.create);
router.put('/:id', secureMiddleware.isAuthenticated, uploadConfig.single('image'), assetsController.edit);
router.delete('/:id', secureMiddleware.isAuthenticated, assetsMiddleware.checkValidId, assetsController.delete);

module.exports = router;
