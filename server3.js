
// require
var http = require("http");
var fs = require("fs");
const pug = require("pug");

var server = http.createServer(function(request, response){
    response.writeHead(200, {'content-Type' : 'text/html'});
    // 파일 읽기
    
    const compiledFunction = pug.compileFile('template.pug');
    var data = compiledFunction(
        {
            name: 'Timothy',
            title : "JADE"
        }
    );
    response.end(data);
})

server.listen(3000, function(){
    console.log("server running 3000port");
})