function funcHell(callback) {
  callback();
}

// 내부적으로 콜백 3번 연달아
// 화살표 함수로 적지 않아 빨간 밑줄
// 이렇게 코드 depth 가 깊은 걸 요즘은 안 좋아함
funcHell(function () {
  console.log('1번 인척 하는 새로 만든 익명 함수');
  funcHell(function () {
    console.log('2번 인척 하는 새로 만든 익명 함수');
    funcHell(function () {
      console.log('3번 인척 하는 새로 만든 익명 함수');
    });
  });
});
