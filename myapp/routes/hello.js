var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // hello.pug
  res.render('hello', {
    title: 'Express Hello' ,
    contents: 'I want to go home'
     
    }
  );
});

module.exports = router;
