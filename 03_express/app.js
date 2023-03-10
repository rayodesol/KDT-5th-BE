// @ts-check
const express = require('express');
const bodyParser = require('body-parser');

const app = express(); // express 실행시켜 담기
// const userRouter = express.Router();
const PORT = 4000; // 자주 반복되는 숫자값을 대체할 때 대문자로 변수명 사용

// 따로 선언한 라우터들 여기에 적기!
const mainRouter = require('./routes/index');
// const mainRouter = require('./routes'); 로 해도 작동됨. index 생략 가능.
const userRouter = require('./routes/users');
const postRouter = require('./routes/posts');

// const USER = {
//   // 숫자를 아이디로 사용할 것임.
//   1: {
//     id: 'cielo',
//     name: '송민선',
//   },
// };

// const USER_ARR = [
//   {
//     id: 'cielo',
//     name: '송민선',
//     email: '123@naver.com',
//   },
//   {
//     id: 'pororo',
//     name: '뽀로로',
//     email: '456@naver.com',
//   },
// ];

// EJS 사용하기
app.set('view engine', 'ejs');

// 절대 경로
// console.log(__dirname);

app.use(express.static('public'));

// app.use('/', mainRouter); app.use('/users', userRouter); 보다 위에 적어야!
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// CSS 적용하기 - static 사용
// app.use(express.static(__dirname + 'views'));
// /css 요청 들어와야만
// app.use('/css', express.static('views/css'));

// JS 적용하기
// app.use('/js', express.static('js'));

// localhost:4000 일때 작동
app.use('/', mainRouter);

// 미들웨어 설정 시 .use()
// '/users' 주소로 들어오면 app 이 아닌 userRouter 가 처리함
// localhost:4000/users 일때 작동
app.use('/users', userRouter);
app.use('/posts', postRouter); // /posts 주소로 들어오면 라우터 처리

// http://localhost:4000/ 로 접속하면 이게 뜸
app.get('/', (req, res) => {
  res.send('Hello, Express world!');
});

// ///////////////////// userRouter 코드는 users.js 파일로 옮김
// // http://localhost:4000/users
// // http://127.0.0.1:4000/users
// userRouter.get('/', (req, res) => {
//   // res.send('회원 목록');
//   res.send(USER);
// });

// userRouter.get('/id/:id', (req, res) => {
//   // res.send('특정 회원 정보');

//   const userData = USER[req.params.id];
//   if (userData) {
//     res.send(userData);
//   } else {
//     // undefined 값이 들어옴
//     res.send('ID를 못찾겠어요');
//   }
// });

// // get 방식은 서버에 변경을 하지 않을 때 사용
// userRouter.post('/add', (req, res) => {
//   // res.send('회원 등록');

//   // 코드 depth 줄이기
//   // return 으로 강제 종료 시키기
//   if (!req.query.id || !req.query.name)
//     return res.send('쿼리 입력이 잘못 되었습니다.');

//   const newUser = {
//     id: req.query.id,
//     name: req.query.name,
//   };

//   // Object.keys() ; 인자로 전달받은 키 값들을 배열로 만들어줌
//   USER[Object.keys(USER).length + 1] = newUser;

//   res.send('회원 등록 완료!');

//   // 잘 들어왔는지 확인
//   // if (req.query.id && req.query.name) {
//   //   const newUser = {
//   //     id: req.query.id,
//   //     name: req.query.name,
//   //   };

//   //   // Object.keys() ; 인자로 전달받은 키 값들을 배열로 만들어줌
//   //   USER[Object.keys(USER).length + 1] = newUser;

//   //   res.send('회원 등록 완료!');
//   // } else {
//   //   res.send('쿼리 입력이 잘못 되었습니다!');
//   // }
// });

// // 서버에서 받은 데이터로 그리는 방법 - res.write 로 하나하나 그려줄 수
// userRouter.get('/show', (req, res) => {
//   // 통신이 제대로 되었다는 status 코드, ...
//   res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
//   res.write('<h1>Hello, Dynamic Web Page</h1>');

//   for (let i = 0; i < USER_ARR.length; i++) {
//     res.write(`<h2>USER ID is ${USER_ARR[i].id}</h2>`);
//     res.write(`<h2>USER NAME is ${USER_ARR[i].name}</h2>`);
//   }

//   res.end();
// });

// userRouter.get('/ejs', (req, res) => {
//   // res.render('index.ejs'); // .ejs 생략 가능

//   const userCounts = USER_ARR.length;
//   res.render('index', { USER_ARR, userCounts });
// });

// throw 가 떨어질 수 있는 가장 마지막 단계에 에러 처리 코드 추가
// use() 는 get, post 등 모든 방식 받으므로 use() 로 작성
// 어디에서 에러가 발생하든 이 코드가 잡아줌
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(err.statusCode);
  res.send(err.message + `<br /><a href="/">홈으로</a>`);
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`${PORT} 번에서 서버 실행`);
});
