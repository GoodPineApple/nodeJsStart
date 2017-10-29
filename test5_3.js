var event = require('events'); //지금 사용하는 방식 이벤트 처리방식
var custom = new event();

custom.on('tick',function(code){
    console.log('tick');
})

//강제 이벤트 발생 emit 함수를 사용한다
custom.emit('tick');
custom.emit('tick');
custom.emit('tick');


//이벤트 제거하기
custom.removeListener('tick');//에러발생 이벤트를 지웠는데 아래 이벤트를 실행해서
custom.emit('tick');