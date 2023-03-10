const express = require('express');

const router = express.Router();

const POST = [
  {
    title: '실습1',
    content: 'posts 서비스를 만들고 있습니다.',
  },
  {
    title: '가나다',
    content: '가나다라마바사아자차카타파하',
  },
];

// http://localhost:4000/posts
// req, res 는 이름보다 쓰인 순서대로 적용됨!
router.get('/', (req, res) => {
  // 알아서 views 폴더에서 posts 를 찾음
  res.render('posts', { POST, contentCnt: POST.length });
});

router.post('/add', (req, res) => {
  // if (Object.keys(req.query).length >= 1) {
  //   // 쿼리로 데이터가 들어왔는지에 대한 조건문
  //   if (req.query.title && req.query.content) {
  //     const newPost = {
  //       title: req.query.title,
  //       content: req.query.content,
  //     };

  //     POST.push(newPost);

  //     res.send('새 게시물 추가 완료!');
  //   } else {
  //     const err = new Error('쿼리 입력이 잘못 되었습니다!');
  //     err.statusCode = 400;
  //     throw err;
  //   }
  // } else if (Object.keys(req.body).length >= 1) {
  if (Object.keys(req.body).length >= 1) {
    // req.body 들어왔을 때
    if (req.body.title && req.body.content) {
      const newPost = {
        title: req.body.title,
        content: req.body.content,
      };

      POST.push(newPost);

      // 페이지 다시 불러 정보 반영되게
      res.redirect('/posts');
    } else {
      // title or content 입력이 제대로 들어오지 않았을 때
      const err = new Error('폼 태그 입력을 확인 하세요!');
      err.statusCode = 400; // 사용자 잘못. 번호가 400번대일 뿐 정확한 번호는 아님.
      throw err;
    }
  } else {
    // req.body 가 들어오지 않았을 때
    const err = new Error('데이터가 입력 되지 않았습니다!');
    err.statusCode = 400;
    throw err;
  }
});

module.exports = router;
