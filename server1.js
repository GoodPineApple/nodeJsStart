
// require
var http = require("http");
var server = http.createServer(function(request, response){
    response.writeHead(200, {'content-Type' : 'text/html'});
    response.end('<h1>Hello world</h1>');
})

server.listen(3000, function(){
    console.log("server running 3000port");
})