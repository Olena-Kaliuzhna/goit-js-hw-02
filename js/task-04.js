// const formatString = function (string) {
//   // твой код

//   if (string.length > 40) {
//     return string.slice(0, 40) + '...';
//   }

//   return string;
// };

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// // вернется оригинальная строка

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // вернется форматированная строка

// console.log(formatString('Curabitur ligula sapien.'));
// // вернется оригинальная строка

// console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));
// вернется форматированная строка

// в боте
function formatString(string, maxLength = 40) {
  // Write code under this line
  if (string.length > maxLength) {
    return string.slice(0, maxLength) + '...';
  }

  return string;
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));
// вернется форматированная строка
