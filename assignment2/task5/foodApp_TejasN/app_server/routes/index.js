var express = require('express');
var router = express.Router();
const cntrlMain = require('../controllers/main');
const ctrlFood = require('../controllers/food');

/* GET home page. */
router.get('/', cntrlMain.index);

router.get('/foodlist', ctrlFood.foodlist);
router.get('/favourite-food', ctrlFood.favouriteFood);

module.exports = router;
