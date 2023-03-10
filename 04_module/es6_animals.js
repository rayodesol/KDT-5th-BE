// 뺄 거 앞에 export 를 붙이면 됨
const animals = ['puppy', 'cat'];

function showAnimals() {
  animals.map((el) => console.log(el));
}

// 내보낼 때도 이름 바꿔 사용하기 as
export { animals as ani, showAnimals as show };
