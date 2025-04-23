const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((acc, num) => num + acc, 0);
};

const multiply = function (arr) {
  return arr.reduce((acc, num) => num * acc);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {
  let acc = 1;
  for (let i = a; i > 0; i--) {
    acc *= i;
  }
  return acc;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
