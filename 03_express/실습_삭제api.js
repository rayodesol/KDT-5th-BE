// @ts-check
const express = require('express');

const app = express(); // express 실행시켜 담기
const userRouter = express.Router();

const PORT = 4000; // 자주 반복되는 숫자값을 대체할 때 대문자로 변수명 사용

// 이 데이터는 서버가 재실행 될 때까지 유지. 재실행되면 초기화됨.
const USER = {
  // 숫자를 아이디로 사용할 것임.
  1: {
    email: 'cielo@naver.com',
    name: '송민선',
  },
};

// 미들웨어 설정 시 .use()
// '/users' 주소로 들어오면 app 이 아닌 userRouter 가 처리함
app.use('/users', userRouter);

userRouter.get('/', (req, res) => {
  res.send(USER);
});

// modify/ 뒤에 들어오는 값을 id 로 받겠다!
userRouter.put('/modify/:id', (req, res) => {
  // query 가 있는지 체크
  if (req.query.email && req.query.name) {
    // 해당 객체에 params 로 받아온 id 값이 있는지 확인
    if (req.params.id in USER) {
      USER[req.params.id] = {
        email: req.query.email,
        name: req.query.name,
      };
      res.send('회원 정보 수정 완료!');
    } else {
      res.send('해당 ID를 가진 회원이 존재하지 않습니다!');
    }
  } else {
    res.send('잘못 된 쿼리 입력입니다.');
  }
});

userRouter.delete('/delete/:id', (req, res) => {
  if (req.params.id in USER) {
    // 객체 접근 시 USER.id 로 하면 문자열로 처리됨...??
    delete USER[req.params.id];
    res.send('회원 삭제 완료');
  } else {
    res.send('해당 ID를 가진 회원이 존재하지 않습니다!');
  }
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`${PORT} 번에서 서버 실행`);
});
