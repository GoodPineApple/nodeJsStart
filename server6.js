
var http = require('http');
var server = http.createServer(function(request,response){
    response.writeHead(200,{'content-Type':'text/html','Set-Cookie':['breakfast=toast','dinner=chicken']});
    var name = request.headers.cookie;
    console.log(name);
    response.end(name);

})



server.listen(3000);