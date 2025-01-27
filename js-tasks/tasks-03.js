// Geometry Basics: Circle Circumference in 2D
// https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript

// Yevhen Martynych
function circleCircumference(circle) {
  return 2 * Math.PI * circle.radius;
}
// End Yevhen Martynych

// Training JS #12: loop statement --for..in and for..of
// https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript

// Yevhen Martynych
function giveMeFive(obj) {
  const result = [];
  for (const key in obj) {
    if (key.length === 5) {
      result.push(key);
    }
    if (obj[key].length === 5) {
      result.push(obj[key]);
    }
  }
  return result;
}
// End Yevhen Martynych

// Understanding closures - the basics
// https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript

// Yevhen Martynych
function buildFun(n) {
  const res = [];
  for (let i = 0; i < n; i++) {
    res.push(() => i);
  }
  return res;
}
// End Yevhen Martynych

// Fun with ES6 Classes #2 - Animals and Inheritance
// https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript

// Yevhen Martynych
class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, 'shark', status);
    this.legs = 0;
    this.species = 'shark';
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, 'cat', status);
    this.legs = 4;
    this.species = 'cat';
  }
  introduce() {
    return `${super.introduce()}  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, 'dog', status);
    this.legs = 4;
    this.species = 'dog';
    this.master = master;
  }
  greetMaster() {
    return `Hello ${this.master}`;
  }
}
// End Yevhen Martynych
