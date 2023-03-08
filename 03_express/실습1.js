// @ts-check
const express = require('express');

const app = express();
const PORT = 4000;

// req.params
// : 이 파라미터 키 값
app.get(
  '/email/:email/password/:password/name/:name/gender/:gender',
  (req, res) => {
    console.log(req.params);
    res.send(req.params);
  }
);

// req.query
app.get('/', (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

app.listen(PORT, () => {
  console.log(`${PORT} 번 실행 중`);
});
