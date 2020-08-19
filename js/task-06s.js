let input;
const numbers = [];
let total = 0;
input = prompt('Введите число');
// do {
//   input = prompt('Введите число');

//   if (isNaN(input)) {
//     alert('Было введено не число, попробуйте еще раз');
//   } else {
//     numbers.push(Number(input));
//   }
// } while (input !== null);
// console.log(numbers);
// alert(`Общая сумма чисел равна ${total}`);
while (input !== null) {
  numbers.push(Number(input));
  //     if (isNaN(input)) {
  //     alert('Было введено не число, попробуйте еще раз');
  //   }
}
console.log(numbers);
