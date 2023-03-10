const express = require('express');

const router = express.Router();

// const USER = {
//   // 숫자를 아이디로 사용할 것임.
//   1: {
//     id: 'cielo',
//     name: '송민선',
//   },
// };

// 진짜 쓸 데이터
// 전체 코드 배열 데이터 사용하도록 수정!
const USER = [
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
  res.render('users', { USER, userCounts: USER.length });
});

router.get('/id/:id', (req, res) => {
  // const userData = USER[req.params.id];

  const userData = USER.find((user) => user.id === req.params.id);

  if (userData) {
    res.send(userData);
  } else {
    const err = new Error('해당 ID를 가진 회원이 없습니다!');
    err.statusCode = 404;
    throw err;

    // undefined 값이 들어옴
    // res.send('ID를 못찾겠어요');
  }
});

// get 방식은 서버에 변경을 하지 않을 때 사용
// form 데이터를 여기서 받음
router.post('/add', (req, res) => {
  // console.log(req.body);

  if (Object.keys(req.query).length >= 1) {
    // 쿼리로 데이터가 들어왔는지에 대한 조건문
    if (req.query.id && req.query.name && req.query.email) {
      const newUser = {
        id: req.query.id,
        name: req.query.name,
        email: req.query.email,
      };

      USER.push(newUser);

      res.send('회원 추가 완료!');
    } else {
      const err = new Error('쿼리 입력이 잘못 되었습니다!');
      err.statusCode = 400;
      throw err;
    }
  } else if (Object.keys(req.body).length >= 1) {
    // req.body 들어왔을 때
    if (req.body.id && req.body.name && req.body.email) {
      const newUser = {
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
      };

      USER.push(newUser);

      // 페이지 다시 불러 정보 반영되게
      res.redirect('/users');
    } else {
      const err = new Error('폼 태그 입력을 확인 하세요!');
      err.statusCode = 400;
      throw err;
    }
  } else {
    const err = new Error('데이터가 입력 되지 않았습니다!');
    err.statusCode = 400;
    throw err;
  }

  // // 코드 depth 줄이기
  // // return 으로 강제 종료 시키기
  // if (!req.query.id || !req.query.name)
  //   return res.send('쿼리 입력이 잘못 되었습니다.');
  // const newUser = {
  //   id: req.query.id,
  //   name: req.query.name,
  // };
  // // Object.keys() ; 인자로 전달받은 키 값들을 배열로 만들어줌
  // USER[Object.keys(USER).length + 1] = newUser;
  // res.send('회원 등록 완료!');
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

router.put('/modify/:id', (req, res) => {
  if (req.query.name && req.query.email) {
    const userIndex = USER.findIndex((user) => user.id === req.params.id);
    if (userIndex !== -1) {
      // 회원 정보 찾았을 때
      USER[userIndex] = {
        id: req.params.id,
        name: req.query.name,
        email: req.query.email,
      };
      res.send('회원 정보 수정 완료!');
    } else {
      // 동일한 아이디 회원을 못 찾았을 때
      const err = new Error('해당 ID를 가진 회원이 없습니다!');
      err.statusCode = 404;
      throw err;
    }
  } else {
    const err = new Error('쿼리 입력이 잘못 되었습니다!');
    err.statusCode = 400;
    throw err;
  }
});

router.delete('/delete/:id', (req, res) => {
  const userIndex = USER.findIndex((user) => user.id === req.params.id);
  if (userIndex !== -1) {
    // splice ; 삭제할 처음 위치가 첫번째 인자, 두번째 인자는 삭제할 개수
    USER.splice(userIndex, 1);
    res.send('회원 삭제 완료!');
  } else {
    const err = new Error('해당 ID를 가진 회원이 없습니다!');
    err.statusCode = 404;
    throw err;
  }
});

// // 서버에서 받은 데이터로 그리는 방법 - res.write 로 하나하나 그려줄 수
// router.get('/show', (req, res) => {
//   // 통신이 제대로 되었다는 status 코드, ...
//   res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
//   res.write('<h1>Hello, Dynamic Web Page</h1>');

//   for (let i = 0; i < USER_ARR.length; i++) {
//     res.write(`<h2>USER ID is ${USER_ARR[i].id}</h2>`);
//     res.write(`<h2>USER NAME is ${USER_ARR[i].name}</h2>`);
//   }

//   res.end();
// });

// router.get('/ejs', (req, res) => {
//   // res.render('index.ejs'); // .ejs 생략 가능

//   const userCounts = USER_ARR.length;
//   res.render('index', { USER_ARR, userCounts });
// });

module.exports = router;
