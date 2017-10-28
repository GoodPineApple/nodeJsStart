// pug라이브러리 로드 - 구 jade
const pug = require('pug');

// 템플릿 파일을 컴파일한다.
const compiledFunction = pug.compileFile('template.pug');

// 데이터를 json 형태로 전달한다.
console.log(compiledFunction(
    {
        name: 'Timothy'
    }
));
// "<p>Timothy's Pug source code!</p>"

// Render another set of data
console.log(compiledFunction({
  name: 'Forbes'
}));
// "<p>Forbes's Pug source code!</p>"