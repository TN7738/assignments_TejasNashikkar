const express = require('express');
const router = express.Router();
const cntrlPhones = require('../controllers/phone');

// food items
router
    .route('/phonelist')
    .get(cntrlPhones.phoneListAll)
    .post(cntrlPhones.phoneListCreate);
router
    .route('/phonelist/:phoneid')
    .get(cntrlPhones.phoneListReadOne)
    .put(cntrlPhones.phoneListUpdateOne)
    .delete(cntrlPhones.phoneListDeleteOne);

module.exports = router;