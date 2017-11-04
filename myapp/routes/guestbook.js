var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // views/guestbook/guestbook.pug 파일 읽어서
  // 렌더링 하시오.
  res.render('./guestbook/guestbook', 
    { 
      title: 'GuestBook' ,
      data :[
        { num:1,title:"처음 방문합니다.", wdate:"2017-11-01"},
        { num:2,title:"두번째 방문합니다.", wdate:"2017-11-02"},
        { num:3,title:"세번 방문합니다.", wdate:"2017-11-03"},
        { num:4,title:"많이 방문합니다.", wdate:"2017-11-03"}      
      ]
    }
  );
});

module.exports = router;
