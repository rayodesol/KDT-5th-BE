// @ts-check

// 내장된 모듈을 가져오는 require()
const fs = require('fs');

// 1) 파일 읽기. 파일 읽어오기
// utf-8 ; 문자를 초성, 중성, 종성으로 저장하는 저장 포맷 방법
fs.readFile('test.txt', 'utf-8', function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

// 2) 파일 쓰기. 파일 작성 (새로 파일을 만들어냄)
const str = '파일 쓰기 테스트';

// 매개변수 - 어떤 파일에 쓸건지, 어떤 내용을 쓸건지, 포맷방식, 에러처리함수 순
fs.writeFile('test1.txt', str, 'utf-8', function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('파일 쓰기 완료!');
  }
});
