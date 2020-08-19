// задание скулуджи
// const logItems = function (array) {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = `${i + 1} - ` + array[i];
//   }

//   // твой код
//   return array;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
// console.table(logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
// console.table(logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]));

// в боте
const getItemsString = function (array) {
  'use strict';

  // Write code under this line
  for (let i = 0; i < array.length; i += 1) {
    array[i] = `${i + 1} - ${array[i]}\n`;
  }

  return array.join('');
};

console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
/*
'1 - Mango
2 - Poly
3 - Ajax
4 - Lux
5 - Jay
6 - Kong
'
*/

console.log(getItemsString([5, 10, 15]));
/*
'1 - 5
2 - 10
3 - 15
'
*/
