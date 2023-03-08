// 콜백 지옥을 async, await 로 탈출하기
const fs = require('fs').promises;

// 코드 실행을 멈추는 await 사용할 수 있는 함수 - async 붙여서 선언
// 함수 정의만 한 것. 아래서 함수 호출로 실행시켜야.
async function main() {
  // 파일 읽는게 시간이 걸리므로 순차적으로 실행시키기 위해 기다리게 시키기 -> await
  let data = await fs.readFile('test1.txt', 'utf-8');
  console.log(data.toString());
  data = await fs.readFile('test2.txt', 'utf-8');
  console.log(data.toString());
  data = await fs.readFile('test3.txt', 'utf-8');
  console.log(data.toString());
  data = await fs.readFile('test4.txt', 'utf-8');
  console.log(data.toString());
}

// 함수 호출로 실행시키기
main();
