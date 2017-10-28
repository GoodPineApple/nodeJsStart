// 비동기 파일 읽기

var fs = require("fs");

var s = fs.readFile('3-1.js', 'utf-8', function(error, data){
    // readFile 함수의 콜백함수는 매개변수로 에러상황에 대한
    // 정보를 담은 error 객체와, 읽어들인 데이터인 data를
    // 담는 객체 두개를 매개변수로 한다.
    if(error){
        console.log("error,file not found");
    } else {
        console.log("file read");
        console.log(data);
    }
})

console.log("파일 다 읽었음");