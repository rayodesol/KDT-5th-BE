// 경로가 없다는 것은, 우리가 만들어 쓰는 모듈 or ...
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

module.exports = router;
