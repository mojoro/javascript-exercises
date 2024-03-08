const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  if (arr.length) {
    return arr.reduce((total, num) => total += num);
  }
  else return 0;
};

const multiply = function(arr) {
  return arr.reduce((total, num) => total *= num);
};

const power = function(quotient, exponent) {
  return quotient**exponent;
};

const factorial = function(num) {
  if (num === 0) return 1;
  return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
