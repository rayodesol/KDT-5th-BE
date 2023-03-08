// promise ; 생성자 함수로 부여할 수 있는 객체
// 일종의 함수 선언
const promise = new Promise(function (resolve, reject) {
  const tetz = 'old'; // 3초 후 then 실행됨
  // const tetz = 'older' // 바로 catch 실행됨

  if (tetz === 'old') {
    setTimeout(function () {
      resolve('tetz is old');
    }, 3000);
  } else {
    reject('tetz is getting old');
  }
});

// promise 실행
promise
  // resolve 일 땐, then 실행 / reject 일 땐, catch 실행
  .then(function (data) {
    console.log(data);
  })
  .catch(function (data) {
    console.log(data);
  });
