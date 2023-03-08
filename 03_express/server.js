// @ts-check
const express = require('express'); // express 에 빨간 밑줄 뜨면 모듈 못 찾겠다는 의미

const server = express();

// 포트 지정. 숫자가 일종의 지역이라고 보면 됨.
// 6만번까지 존재. 앞쪽 번호는 이미 선점하고 있기에 3000번대 이후 번호 사용하기.
const PORT = 4000;

// 여기 들어가는 문자열은 요청 주소
// // 문자열을 '/api'로 하면 -> http://localhost:4000/api
// req ; request, res ; response
// use 안에서도 async 사용 가능
server.use('/', (req, res, next) => {
  console.log('미들웨어 1');
  req.reqTime = new Date();
  next();

  // res.send('응답 종료'); // 다음 미들웨어들 실행 안되고 여기서 종료됨.

  // next(); // 다음 미들웨어 실행

  // // 응답 보내기
  // res.send('Hello, Express!');
});

server.use((req, res, next) => {
  console.log('미들웨어 2');
  res.send(`요청 시간은 ${req.reqTime} 입니다`);

  // res.send('응답!');

  // next();
  // console.log('next 아래에 있는 콘솔 로그');
});

server.use((req, res, next) => {
  console.log('미들웨어 3');
});

// 서버가 정상적으로 실행되면, 함수를 실행시켜라
server.listen(PORT, () => {
  console.log(`익스프레스 서버는 ${PORT}번 포트에서 작동 중입니다!`);
});
