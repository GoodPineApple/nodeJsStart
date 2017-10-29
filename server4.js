var http = require('http');

var server = http.createServer();



//메세지 처리하기
server.on('request',function(code){
    console.log('request');
})

server.on('connection',function(){
    console.log('connection');
})

server.on('close',function(code){
    console.log('close');
})

server.listen(3000);