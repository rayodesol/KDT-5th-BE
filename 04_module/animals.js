const animals = ['puppy', 'cat'];

// 방법 2
// animals 란 이름으로 밖으로 뺄 것이란 것
exports.animals = animals;

exports.showAnimals = function showAnimals() {
  animals.map((el) => console.log(el));
};

// 방법 1 - 이 방법을 더 많이 사용!
// function showAnimals() {
//   // map함수도 callback 형태
//   animals.map((el) => console.log(el));
// }
// // 외부로 빼줘서 사용할 수 있도록
// module.exports = {
//   animals,
//   showAnimals,
// };
