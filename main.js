// console.log('Hello, Node.js');

// const x = 1;
// console.log(x);

// @ts-check
// const str = 'Hello';
// const num = Math.log(9); // eslint 에선 문제 없음
// console.log(num);

// 내장된 모듈을 불러옴
const http = require('http'); // 중요한 코드는 띄어써주라고 함

const server = http.createServer((req, res) => {
  // eslint -> 화살표 함수 안 쓰면 빨간 밑줄 뜸
  res.statusCode = 200;
  res.end('Hello');
});

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`서버는 ${PORT}번 포트에서 작동 중입니다!`);
});
