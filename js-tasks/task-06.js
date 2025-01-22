// Opposites Attract
// https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript

//  Yevhen Martynych
function lovefunc(flower1, flower2) {
  return (flower1 % 2 === 0) === (flower2 % 2 !== 0);
}
// End Yevhen Martynych

/**
 * Viktor Svertoka
 * @param {number} flower1
 * @param {number} flower2
 * @returns {boolean}
 */

function lovefunc(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2;
}
