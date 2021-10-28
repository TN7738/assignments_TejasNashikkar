var express = require('express');
var router = express.Router();
const cntrlMain = require('../controllers/main');
const ctrlFood = require('../controllers/food');

/* GET home page. */
router.get('/foodlist', ctrlFood.foodlist);
router.get('/food-info/:foodid', ctrlFood.foodInfo);

router.get('/', cntrlMain.index);

// router.get('/foodlist', ctrlFood.foodlist);
router.get('/favourite-food', ctrlFood.favouriteFood);

router.get('/new', ctrlFood.addNewFood);
router.post('/new', ctrlFood.doAddNewFood);

router.get('/edit/:foodid', ctrlFood.editFoodItem);
router.put('/edit/:foodid', ctrlFood.doEditFoodItem);

module.exports = router;
