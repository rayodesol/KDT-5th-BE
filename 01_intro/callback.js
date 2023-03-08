// @ts-check

// 비동기적 프로그래밍의 한계 보기

// callback 은 함수임.
function buySync(item, price, quantity, callback) {
  console.log(`${item} 상품을 ${quantity}개 골라서 점원에게 주었습니다.`);

  setTimeout(() => {
    console.log('계산이 필요합니다.');
    const total = price * quantity;

    // buySync 가 다 끝나야 total 이 보내짐. 동기적으로 작동함.
    callback(total); // 2초 기다렸다가 pay 함수를 실행
  }, 2000);
}

function pay(total) {
  console.log(`${total} 원을 지불하였습니다`);
}

buySync('포켓몬빵', 1000, 5, pay);
