// 모듈 사용하기
var url = require('url');
var s = "http://127.0.0.1/index.php?name=Tom&age=34&address=seoul"
var parse = url.parse(s);

var qs = require("querystring");
// 두개의 함수 지원 parse, stringigy
// parse : string -> json 타입으로
// stringify : json -> string으로

console.log("host :" + parse.host);
console.log("pathname :" + parse.pathname);
console.log("query :" + parse.query);
console.log("href :" + parse.href);

var temp = qs.parse(parse.query);
console.log("");
console.log("string to json")
console.log(temp.name);
console.log(temp.age);
console.log(temp.address);

var temp2 = qs.stringify(temp);
console.log("");
console.log("json to string")
console.log(temp2)