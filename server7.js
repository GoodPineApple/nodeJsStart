
var http = require('http');
var fs = require('fs');
var url = require('url')
// java의 import가 아니라 link의 의미. 파이썬도 동일.
const pug = require('pug');

var server = http.createServer(function(request,response){
    
    // 파일 읽기
    response.writeHead(200,{'content-Type':'text/html'});
    var pathname = url.parse(request.url).pathname;
    if(pathname=='/'){
        fs.readFile("index.html", "utf-8", function(error,data){
            response.end(data);
        });
    } else if(pathname=='/test'){
        // 쿼리 파싱
        var query = url.parse(request.url, true).query;
        
        console.log(query);
        console.log(query.name);
        console.log(query.age);
        
        // html파일 읽어오기
        fs.readFile("test5_1.html", "utf-8", function(error,data){
            response.end(data);
        });
    } else if(pathname=='/pug'){
        var query = url.parse(request.url, true).query;

        const compiledFunction = pug.compileFile('template.pug');
        var data = compiledFunction(
            {
                name: query.name,
                title : query.age
            }
        );
        response.end(data);
    }
    

})



server.listen(3000, function(){
    console.log("server running 3000port");
})