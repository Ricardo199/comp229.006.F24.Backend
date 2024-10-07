var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'to Express' });
});

router.get('/Vader', function(req, res, next) {
  res.render('index', { title: 'Lord Vader' });
});


module.exports = router;
