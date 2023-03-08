// @ts-check
const express = require('express'); // 상위에 node_modules 폴더가 있어야

// 불러온 패키지를 실행시켜 app 에 저장
const app = express();

const PORT = 1324;

// 메소드 선언

// 주소가 동일하더라도 get 방식만 받음
app.get('/', (req, res) => {
  res.send('GET 메소드');
});

app.post('/', (req, res) => {
  res.send('POST 메소드');
});

app.put('/', (req, res) => {
  res.send('PUT 메소드');
});

app.delete('/', (req, res) => {
  res.send('DELETE 메소드');
});

app.listen(PORT, () => {
  console.log(`서버가 ${PORT}번에서 실행 중입니다!`);
});
