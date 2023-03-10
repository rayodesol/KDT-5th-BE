// 방법 1
// 모듈 가져오기. .js 생략 가능.
// const animalModule = require('./animals');

// console.log(animalModule);
// console.log(animalModule.animals);
// animalModule.showAnimals();

// 방법 2
// 구조 분해 할당 방법 (ES6 방식부터는 이 방법 사용이 강제되고 있음.)
// 변수명이 같아야 받아 올 수 있음
const { animals, showAnimals } = require('./animals');

console.log(animals);
showAnimals();
