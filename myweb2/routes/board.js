var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('board', { title: '방문록' });
});

module.exports = router;
