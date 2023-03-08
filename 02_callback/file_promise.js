// 프로미스 기능이 내장된 파일시스템 불러오기
const fs = require('fs').promises;

// 콜백을 매개변수로 쓸 필요 없음. 내장되어 있기 때문에.
fs.readFile('test.txt', 'utf-8')
  .then(function (data) {
    // 익명함수 버전
    console.log('1번', data.toString());
    return fs.readFile('test.txt', 'utf-8');
  })
  .then((data) => {
    // 화살표 함수 버전
    console.log('2번', data.toString());
    return fs.readFile('test.txt', 'utf-8');
  })
  .then((data) => {
    console.log('3번', data.toString());
    return fs.readFile('test.txt', 'utf-8');
  })
  .then((data) => {
    console.log('4번', data.toString());
  })
  .catch(function (err) {
    console.log(err);
  });
