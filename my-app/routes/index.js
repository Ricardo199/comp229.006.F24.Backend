var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('to Express');
});

router.get('/Vader', function(req, res, next) {
  res.send('Lord Vader');
});


module.exports = router;
