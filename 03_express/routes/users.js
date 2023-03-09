// @ts-check
const express = require('express');

const router = express.Router();

const USER = {
  // 숫자를 아이디로 사용할 것임.
  1: {
    id: 'cielo',
    name: '송민선',
  },
};

const USER_ARR = [
  {
    id: 'cielo',
    name: '송민선',
    email: '123@naver.com',
  },
  {
    id: 'pororo',
    name: '뽀로로',
    email: '456@naver.com',
  },
];

// http://localhost:4000/users
// http://127.0.0.1:4000/users
router.get('/', (req, res) => {
  // 값 넘겨받기...?
  res.render('users', { USER_ARR, userCounts: USER_ARR.length });
});

router.get('/id/:id', (req, res) => {
  // res.send('특정 회원 정보');

  const userData = USER[req.params.id];
  if (userData) {
    res.send(userData);
  } else {
    // undefined 값이 들어옴
    res.send('ID를 못찾겠어요');
  }
});

// get 방식은 서버에 변경을 하지 않을 때 사용
router.post('/add', (req, res) => {
  // res.send('회원 등록');

  // 코드 depth 줄이기
  // return 으로 강제 종료 시키기
  if (!req.query.id || !req.query.name)
    return res.send('쿼리 입력이 잘못 되었습니다.');

  const newUser = {
    id: req.query.id,
    name: req.query.name,
  };

  // Object.keys() ; 인자로 전달받은 키 값들을 배열로 만들어줌
  USER[Object.keys(USER).length + 1] = newUser;

  res.send('회원 등록 완료!');

  // 잘 들어왔는지 확인
  // if (req.query.id && req.query.name) {
  //   const newUser = {
  //     id: req.query.id,
  //     name: req.query.name,
  //   };

  //   // Object.keys() ; 인자로 전달받은 키 값들을 배열로 만들어줌
  //   USER[Object.keys(USER).length + 1] = newUser;

  //   res.send('회원 등록 완료!');
  // } else {
  //   res.send('쿼리 입력이 잘못 되었습니다!');
  // }
});

// 서버에서 받은 데이터로 그리는 방법 - res.write 로 하나하나 그려줄 수
router.get('/show', (req, res) => {
  // 통신이 제대로 되었다는 status 코드, ...
  res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
  res.write('<h1>Hello, Dynamic Web Page</h1>');

  for (let i = 0; i < USER_ARR.length; i++) {
    res.write(`<h2>USER ID is ${USER_ARR[i].id}</h2>`);
    res.write(`<h2>USER NAME is ${USER_ARR[i].name}</h2>`);
  }

  res.end();
});

// router.get('/ejs', (req, res) => {
//   // res.render('index.ejs'); // .ejs 생략 가능

//   const userCounts = USER_ARR.length;
//   res.render('index', { USER_ARR, userCounts });
// });

module.exports = router;
