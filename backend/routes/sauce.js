const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const sauceCtrl = require('../controllers/sauce');

router.get('/', sauceCtrl.getAllSauces);
router.get('/:id', sauceCtrl.getOneSauce);
router.post('/', auth, multer, sauceCtrl.createSauce);
router.post('/:id/like', auth, sauceCtrl.likeSauce);
router.put('/:id', auth, multer, sauceCtrl.updateSauce);
router.delete('/:id', auth, multer, sauceCtrl.deleteSauce);

module.exports = router;