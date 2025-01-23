'use strict';

// #1 Messi Goals
// https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript

// Yevhen Martynych
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}
// End Yevhen Martynych

/**
 * Viktor Svertoka
 * @param {number} laLigaGoals
 * @param {number} copaDelReyGoals
 * @param {number} championsLeagueGoals
 * @returns {number}
 */

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  const sumGoals = laLigaGoals + copaDelReyGoals + championsLeagueGoals;
  return sumGoals;
}

//Dmytro Prokopenko
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

// #2 Make negative
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

// #3 Game Move
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
function move(position, roll) {
  const newPosition = position + roll * 2;
  return newPosition;
}

// #4 Personalized Message
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

//Dmytro Prokopenko
function greet(name, owner) {
  if (name == owner) {
    return 'Hello boss';
  } else {
    return 'Hello guest';
  }
}

// #5 Keep Hydrated
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

// #6 Opposites Attract
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

//Dmytro Prokopenko
function lovefunc(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2 ? true : false;
}
