// function func1(callback) {
//   console.log('1번 함수');

//   function fakeFunc3() {
//     console.log('3번 인척 하는 함수');
//   }

//   callback(fakeFunc3);
// }

// function func2(callback) {
//   console.log('2번 함수');
//   callback();
// }

// function func3() {
//   console.log('3번 함수');
// }

// // func1();
// // func2();
// // func3();

// // func1(func3);

// // func1(func2);

// // 아래에 화살표 함수로
// // func1(function () {
// //   console.log('2번 인척하는 새로 만든 익명 함수');
// // });
// func1(() => {
//   console.log('2번 인척하는 새로 만든 익명 함수');
// });

function mutiplication(number, callback) {
  let answer = 0;
  setTimeout(function () {
    answer = number * number;
    callback(answer);
  }, 2000);
}

function say(result) {
  console.log(result);
}

mutiplication(3, say);
