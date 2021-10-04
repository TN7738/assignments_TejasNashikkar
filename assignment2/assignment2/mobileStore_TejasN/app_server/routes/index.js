var express = require('express');
var router = express.Router();
const cntrlAbout = require('../controllers/about');
const cntrlPhones = require('../controllers/phones');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { 
    title: 'The Phone Zone' 
  });
});

router.get('/about', cntrlAbout.about);
router.get('/list-display', cntrlPhones.phones);
router.get('/display', (req, res, next) => {
  res.render('display', {
    title: 'The page is under construction'
  });
});

module.exports = router;
