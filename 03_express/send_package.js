// @ts-check
const express = require('express'); // express 에 빨간 밑줄 뜨면 모듈 못 찾겠다는 의미
const fs = require('fs').promises; // 패키지를 불러온 코드는 최상단에 위치해야

const server = express();

const PORT = 4000;

server.use('/', async (req, res, next) => {
  console.log('미들웨어 1번');
  req.reqTime = new Date();

  // await 는 무조건 async 로 선언한 함수 내에서만 사용해야
  // 파일을 완전히 읽을 때까지 멈춰줌
  req.fileContent = await fs.readFile('../package.json', 'utf-8');
  next();
});

server.use((req, res, next) => {
  console.log('미들웨어 2번');
  console.log(`데이터 요청 시간은 ${req.reqTime} 입니다.`);
  console.log(`package.json 파일의 내용은 \n ${req.fileContent}`); // \n 이 줄바꿈
  res.send(req.fileContent);
});

// 서버가 정상적으로 실행되면, 함수를 실행시켜라
server.listen(PORT, () => {
  console.log(`익스프레스 서버는 ${PORT}번 포트에서 작동 중입니다!`);
});
