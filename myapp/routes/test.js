var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // test.pug
  res.render('test', {
    title: 'Express Test' ,
    contents: 'I want to go home'
     
    }
  );
});

module.exports = router;
