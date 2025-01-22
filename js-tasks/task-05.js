// Keep Hydrated
// https://www.codewars.com/kata/keep-hydrated-1/train/javascript

//  Yevhen Martynych
function litres(time) {
  return Math.trunc(time * 0.5);
}
// End Yevhen Martynych

/**
 * Viktor Svertoka
 * @param {number} time
 * @returns {number}
 */

function litres(time) {
  return Math.floor(time * 0.5);
}

//Dmytro Prokopenko
function litres(time) {
  let result = time * 0.5;
  return Math.floor(result);
}