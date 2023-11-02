# Simple Math

Simple Math is a lightweight Node.js library for basic mathematical operations, including addition, subtraction, multiplication, division, factorial calculation, and the evaluation of mathematical expressions.

## Installation

To use Simple Math in your Node.js project, you can install it using npm:

```bash
npm install simple-mathjs
```

## Usage

### Import the library

```javascript
const simpleMath = require('simple-mathjs');
```

### Functions

#### Addition

```javascript
const sum = simpleMath.add(5, 3);
console.log(sum); // 8
```

#### Subtraction

```javascript
const dif = simpleMath.sub(10, 3);
console.log(dif); // 7
```

#### Multiplication

```javascript
const product = simpleMath.mul(4, 6);
console.log(product); // 24
```

#### Division

```javascript
try {
  const div = simpleMath.div(8, 2);
  console.log(div); // 4
} catch (error) {
  console.error(error.message);
}
```

#### Factorial

```javascript
const fact = simpleMath.factorial(5);
console.log(fact); // 120
```

#### Calculate Expression

```javascript
const result = simpleMath.calc('2 * (3 + 4) / 5');
console.log(result); // 2.8
```

## License

This project is licensed under the MIT License. See the [LICENSE](/LICENSE) file for details.

## Author

thewyolar


