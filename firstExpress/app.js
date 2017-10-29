var express = require("express");

// 서버 생성
var app = express();

app.use(function(req,res){
    res.writeHead(200, {'Content-Type' : "text/html"});
    res.end("hello express");
})

app.listen(3000, function(){
    console.log("Server starting port : 3000");
})