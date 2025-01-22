// Make negative
// https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript

// Yevhen Martynych
function makeNegative(num) {
  if (num < 0) {
    return num;
  } else {
    return -num;
  }
}
// End Yevhen Martynych

/**
 * Viktor Svertoka
 * @param {number} num
 * @returns {number}
 */

function makeNegative(num) {
  return num < 0 ? num : -num;
}

//Dmytro Prokopenko
function makeNegative(num) {
  return num > 0 ? -num : num;
}