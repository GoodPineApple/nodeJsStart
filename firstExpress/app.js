var express = require("express");

// 서버 생성
var app = express();

app.use(function(req,res){
    //res.writeHead(200, {'Content-Type' : "text/html"});
    //res.end("hello express");

    var output = []; // 배열 선언
    for(var i=0; i<5; i++){
        output.push({count:i,name:'name - ' + i});
    }

    // res.send(output);

    res.status(404).send('<h1>에러페이지입니다.</h1>')
})

app.listen(3000, function(){
    console.log("Server starting port : 3000");
})