var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 3,
  host : '127.0.0.1',
  user : 'root',
  password : 'sds902',
  database : 'myweb1'
});

/* GET home page. */
// router.get('/', function(req, res, next) {
  // views/guestbook/guestbook.pug 파일 읽어서
  // 렌더링 하시오.
  
  // res.render('./guestbook/guestbook', 
  //   { 
  //     title: 'GuestBook' ,
  //     data :[
  //       { num:1,title:"처음 방문합니다.", wdate:"2017-11-01"},
  //       { num:2,title:"두번째 방문합니다.", wdate:"2017-11-02"},
  //       { num:3,title:"세번 방문합니다.", wdate:"2017-11-03"},
  //       { num:4,title:"많이 방문합니다.", wdate:"2017-11-03"}      
  //     ]
  //   }
  // );
// });


router.get('/', function(req, res, next) {
  res.redirect('./guestbook/list/1')  
  
});


router.get('/list/:page', function(req, res, next) {
  var page = req.params.page;

  pool.getConnection(function(err,connection){
    // 디비와 접속 성공시
    var start = (page-1)*3;
    var end = 3;
    var data = [start,end];

    var sql = "select seq,title,date_format(wdate, '%y-%m-%d')";
    sql = sql + " wdate from tbl_guestbook order by seq desc limit ?,?";

    connection.query(sql, data, function(err,data){
      res.render('./guestbook/list',
      {
        title : 'express 방명록',
        data : data 
      });
      connection.release();
    })
  })  
});


// write 페이지 이동 get : 페이지 이동, post : 실제 DB 저장
router.get("/write", function(req,res,next){
  res.render('./guestbook/write',
  {
    title:'방명록 작성하기'
  });
})

router.post("/write", function(req,res,next){
  
  // 파라미터값 받기 - body.parser 미들웨어
  var title = req.body.title
  var contents = req.body.contents;
  var data = [title,contents];
  console.log(data);
  
  var sql = "insert into tbl_guestbook(title, contents)";
  sql = sql + "values(?, ?)";
  pool.getConnection(function(err,connection){

    connection.query(sql,data, function(err,rows){
      console.log("err : ")
      console.log(err);
      console.log("data :")
      console.log(data)
      console.log("rows :")
      console.log(rows)
      connection.release(); // db연결 변환
      res.redirect("/guestbook") // 페이지 이동
    })

  });

})

module.exports = router;
