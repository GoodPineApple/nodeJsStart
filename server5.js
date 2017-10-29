
var fs = require('fs');
var http = require('http');
var imageserver = http.createServer(function(request,response){
    fs.readFile('test1.jpg',function(error,data){
        response.writeHead(200,{'content-Type':'image/jpeg'});
        response.end(data);
    })
})


imageserver.listen(3001,function(){
    console.log("server running 3000 port");
})