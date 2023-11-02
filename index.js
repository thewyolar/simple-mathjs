const math = require('mathjs');

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function div(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}

function mul(a, b) {
    return a * b;
}

function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
}

function calc(expression) {
    try {
      return math.evaluate(expression);
    } catch (error) {
      return 'Error: Invalid expression';
    }
}

module.exports = { add, sub, div, mul, factorial, calc };
  