var readline = require("readline");

var r = readline.createInterface(
    {input:process.stdin, output:process.stdout}
)

r.question("이름은 ? ", function(name){
    console.log("당신의 이름은 " + name + "입니다.");
    r.close(); // 공통자원을 사용하므로 반드시 close 해야함.
})