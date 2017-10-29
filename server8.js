
var http = require('http');
var fs = require('fs');
var url = require('url')
// java의 import가 아니라 link의 의미. 파이썬도 동일.
const pug = require('pug');
var ejs = require('ejs');

var param = [
    {
        name : "김",
        age : 20,
        address : "서울"
    },
    {
        name : "박",
        age : 29,
        address : "수원"
    },
    {
        name : "이",
        age : 10,
        address : "제주"
    }

]

var server = http.createServer(function(request,response){
    
    var path = url.parse(request.url).pathname;
    if(path == "/"){
        // 파일 읽기
        response.writeHead(200, {"Content-type":"text/html"})
    
        fs.readFile("test1.ejs", "utf-8", function(error,data){
            response.end(ejs.render(data, {
                title : 'cleaning supplies'
                , supplies:['map', 'broom', 'duster']
            }));
        });        
    } else {
        response.writeHead(200, {"Content-type":"text/html"})
        
        fs.readFile("test2.ejs", "utf-8", function(error,data){
            response.end(ejs.render(data, {
                title : '교육생 명단'
                , data: param
            }));
        });   


    }
})



server.listen(3000, function(){
    console.log("server running 3000port");
})