// Game Move
// https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript

//  Yevhen Martynych
function move(position, roll) {
  return position + roll * 2;
}
// End Yevhen Martynych

/**
 * Viktor Svertoka
 * @param {number} position
 * @param {number} roll
 * @returns {number}
 */

function move(position, roll) {
  const twoTimes = 2;
  const finishPosition = position + roll * twoTimes;
  return finishPosition;
}

//Dmytro Prokopenko
function move (position, roll) {
  const newPosition = position + roll * 2;
  return newPosition;
}

