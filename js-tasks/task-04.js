// Personalized Message
// https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript

//  Yevhen Martynych
function greet(name, owner) {
  return name === owner ? 'Hello boss' : 'Hello guest';
}
// End Yevhen Martynych

/**
 * Viktor Svertoka
 * @param {number} name
 * @param {number} owner
 * @returns {number}
 */

function greet(name, owner) {
  return `Hello ${name === owner ? 'boss' : 'guest'}`;
}
