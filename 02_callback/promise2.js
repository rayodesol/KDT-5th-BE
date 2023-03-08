const lucky = true;

const promise = new Promise((resolve, reject) => {
  console.log('주식이 오르기를 기다리기 시작합니다!');
  setTimeout(() => {
    console.log('3년의 시간이 흐르고....');
    if (lucky) {
      const profit = 3000;
      resolve(profit);
    } else {
      reject('아... 망했어요');
    }
  }, 1000);
});

async function howMuch() {
  try {
    const result = await promise; // 멈추기 위해 await 쓰기

    if (result) {
      console.log(result);
    }
  } catch (err) {
    console.log(err);
  }
}

howMuch();
