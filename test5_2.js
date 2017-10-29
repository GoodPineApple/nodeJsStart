//꺼지면 이벤트 발생
process.on('exit',function(code){
    console.log('exit이벤트를 발생');
});

process.exit();