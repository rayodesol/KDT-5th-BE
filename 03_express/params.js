// @ts-check
const express = require('express');

const app = express();
const PORT = 4000;

// localhost:4000/~~~~
// /:id/:name/:gender 은 express 때문에 가능한 것
app.get('/id/:id', (req, res) => {
  // 4000 뒤를 id 값으로 받겠다
  console.log(req.params);
  res.send(req.params);
});

// req.query
// ? 붙이면 됨
app.get('/', (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

app.get('/api', (req, res) => {
  res.send('api 요청이 접수 되었습니다!');
});

app.listen(PORT, () => {
  console.log(`${PORT} 번 실행 중`);
});
