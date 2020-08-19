// const checkForSpam = function (message) {
//   // твой код
//   return message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale');
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// в боте
function checkForSpam(str) {
  'use strict';
  // Write code under this line
  return str.toLowerCase().includes('spam') || str.toLowerCase().includes('sale');
}

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
