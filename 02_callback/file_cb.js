const fs = require('fs');

// 콜백 형태로 순차적 실행을 강제시킴.

fs.readFile('test.txt', 'utf-8', function (err, data) {
  // 에러처리 부분 코드 depth 줄이는 방법
  if (err) return console.log(err);

  // toString() ; 버퍼로 들어올 수도 있는 data를 사람이 읽을 수 있는 문자로 바꾸기
  console.log('1번', data.toString());
  fs.readFile('test.txt', 'utf-8', function (err, data) {
    // 에러처리 부분 코드 depth 줄이는 방법
    if (err) return console.log(err);

    // toString() ; 버퍼로 들어올 수도 있는 data를 사람이 읽을 수 있는 문자로 바꾸기
    console.log('2번', data.toString());
    fs.readFile('test.txt', 'utf-8', function (err, data) {
      // 에러처리 부분 코드 depth 줄이는 방법
      if (err) return console.log(err);

      // toString() ; 버퍼로 들어올 수도 있는 data를 사람이 읽을 수 있는 문자로 바꾸기
      console.log('3번', data.toString());
      fs.readFile('test.txt', 'utf-8', function (err, data) {
        // 에러처리 부분 코드 depth 줄이는 방법
        if (err) return console.log(err);

        // toString() ; 버퍼로 들어올 수도 있는 data를 사람이 읽을 수 있는 문자로 바꾸기
        console.log('4번', data.toString());
      });
    });
  });
});
