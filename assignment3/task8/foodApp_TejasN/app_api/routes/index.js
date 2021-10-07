const express = require('express');
const router = express.Router();
const cntrlFoods = require('../controllers/food');
const cntrlFavourites = require('../controllers/favourite');

// food items
router
    .route('/foodlist')
    .get(cntrlFoods.foodListAll)
    .post(cntrlFoods.foodListCreate);
router
    .route('/foodlist/:foodid')
    .get(cntrlFoods.foodListReadOne)
    .put(cntrlFoods.foodListUpdateOne)
    .delete(cntrlFoods.foodListDeleteOne);

// favourite food
router
    .route('/favourite-food/:foodid')
    .get(cntrlFavourites.favouriteFoodReadOne)
    .put(cntrlFavourites.favouriteFoodUpdateOne)
    .delete(cntrlFavourites.favouriteFoodDeleteOne);

module.exports = router;