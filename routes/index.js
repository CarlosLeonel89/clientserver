var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Express', message: 'The students of 5-B are smarter than 5-A or no?' });
});

module.exports = router;
