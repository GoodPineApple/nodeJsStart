
// require
var http = require("http");
var fs = require("fs");

var server = http.createServer(function(request, response){
    response.writeHead(200, {'content-Type' : 'text/html'});
    // 파일 읽기
    
    fs.readFile("index.html", "utf-8", function(error, data){
        response.end(data);
    })

})

server.listen(3000, function(){
    console.log("server running 3000port");
})