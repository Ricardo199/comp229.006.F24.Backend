var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/Ben-Kenobi', function(req, res, next) {
  res.send('Of course i know him, he is me');
});

module.exports = router;
