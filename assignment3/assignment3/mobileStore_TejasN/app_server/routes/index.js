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
router.get('/list-display', cntrlPhones.phonelist);
router.get('/display', (req, res, next) => {
  res.render('display', {
    title: 'The page is under construction'
  });
});

router.get('/phone-info/:phoneid', cntrlPhones.phoneInfo);

router.get('/new', cntrlPhones.addNewPhone);
router.post('/new', cntrlPhones.doAddNewPhone);

module.exports = router;
