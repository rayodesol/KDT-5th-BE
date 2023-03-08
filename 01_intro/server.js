// @ts-check
// 설치한 패키지 2개 가져오기
const express = require('express'); // 모듈을 받기
const cors = require('cors');

// 포트 설정
const PORT = 4000;

const app = express(); // express 실행

app.use(cors()); // 필요한 모듈 넣는 방법 - use()

// 요청은 req 로, 응답 받는건 res 로
app.use('/', (req, res) => {
  const str = 'Hello, Here is backend! 한글도 보낸다!';
  const json = JSON.stringify(str); // JSON 형태로 만들기
  res.send(json);
}); // /는 주소값을 의미

// 포트번호에 이게(PORT) 들어오면 함수 실행
app.listen(PORT, () => {
  console.log(`데이터 통신 서버가 ${PORT}번에서 실행 중입니다!`);
});
