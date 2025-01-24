// Tasks from JS lecture
////////////////////////

// Task 1
// За допомогою map() створіть новий масив, де кожне число з масиву [1, 4, 9, 16] замінено на його квадратний корінь.

// Yevhen Martynych
const num = [1, 4, 9, 16];
const rootNums = num.map(n => Math.sqrt(n));
console.log(rootNums);
// End Yevhen Martynych

// Task 2
//  За допомогою filter() відіберіть слова довжиною більше 5 символів з масиву ['apple', 'banana', 'cherry', 'date'].

// Yevhen Martynych
const fruits = ['apple', 'banana', 'cherry', 'date'];
const filteredFruits = fruits.filter(fruit => fruit.length > 5);
console.log(filteredFruits);
// End Yevhen Martynych

// Task 3
// За допомогою reduce() обчисліть добуток чисел в масиві [1, 2, 3, 4].

// Yevhen Martynych
const numbers = [1, 2, 3, 4];
const productNumbers = numbers.reduce((acc, curr) => acc * curr, 1);
console.log(productNumbers);
// End Yevhen Martynych

// Convert a string to an array
// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript

// Yevhen Martynych
function stringToArray(string) {
  return string.split(' ');
}
// End Yevhen Martynych

// Dmytro Prokopenko
function stringToArray(string) {
  return string.split(' ');
}
// End Dmytro Prokopenko

// DNA to RNA Conversion
// https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript

// Dmytro Prokopenko
function DNAtoRNA(dna) {
  return dna.replace(/T/g, 'U');
}
// End Dmytro Prokopenko

// Yevhen Martynych
function DNAtoRNA(dna) {
  return dna.replaceAll('T', 'U');
}
// End Yevhen Martynych

// Find Maximum and Minimum Values of a List
// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

// Smallest value of an array
// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
function min(arr, toReturn) { 
  let minNum = arr.reduce((acc, num) => acc > num ? num : acc);
  return toReturn === "value" ? minNum : arr.indexOf(minNum);
}

////////////////////
// Additional tasks
////////////////////

// You Can't Code Under Pressure #1
// https://codewars.com/kata/53ee5429ba190077850011d4/train/javascript

// Yevhen Martynych
function doubleInteger(i) {
  return i * 2;
}
// End Yevhen Martynych

// Twice as old
// https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript

// Yevhen Martynych
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - sonYearsOld * 2);
}
// End Yevhen Martynych

// Return n-th even number
// https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript

// Yevhen Martynych
function nthEven(n) {
  return n * 2 - 2;
}
// End Yevhen Martynych

// What's the real floor
// https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript

// Yevhen Martynych
function getRealFloor(n) {
  return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
}
// End Yevhen Martynych

// Clock
// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
function past(h, m, s) {
  return (h * 60 * 60 + m * 60 + s) * 1000;
}

// Is n divisible by x and y
// https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript
function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0;
}
