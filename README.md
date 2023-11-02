# Simple Math

Simple Math is a lightweight Node.js library for basic mathematical operations, including addition, subtraction, multiplication, division, factorial calculation, and the evaluation of mathematical expressions.

## Installation

To use Simple Math in your Node.js project, you can install it using npm:

```bash
npm install simple-mathjss
```

## Usage

### Import the library

```javascript
const simpleMath = require('simple-mathjss');
or
import {...} = require('simple-mathjss');
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

### Sorting Algorithms

#### Bubble Sort
* Description: Bubble Sort repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.
* Time Complexity: O(n^2)
```javascript
const { bubbleSort } = require('simple-mathjss');

const unsortedArray = [4, 2, 7, 1, 3];
const sortedArray = bubbleSort(unsortedArray);
console.log(sortedArray); // [1, 2, 3, 4, 7]
```

#### Selection Sort
* Description: Selection Sort divides the input list into two parts: the left subarray, which is sorted, and the right subarray, which is unsorted. It repeatedly selects the minimum element from the unsorted subarray and places it at the beginning of the sorted subarray.
* Time Complexity: O(n^2)
```javascript
const { selectionSort } = require('simple-mathjss');

const unsortedArray = [4, 2, 7, 1, 3];
const sortedArray = selectionSort(unsortedArray);
console.log(sortedArray); // [1, 2, 3, 4, 7]
```

#### Insertion Sort
* Description: Insertion Sort builds the final sorted array one element at a time. It takes each element from the unsorted part and inserts it into its correct position in the sorted part.
* Time Complexity: O(n^2)
```javascript
const { insertionSort } = require('simple-mathjss');

const unsortedArray = [4, 2, 7, 1, 3];
const sortedArray = insertionSort(unsortedArray);
console.log(sortedArray); // [1, 2, 3, 4, 7]
```

#### Merge Sort
* Description: Merge Sort divides the array in half, sorts each half, and then merges the sorted halves to produce a single sorted array.
* Time Complexity: O(n log n)
```javascript
const { mergeSort } = require('simple-mathjss');

const unsortedArray = [4, 2, 7, 1, 3];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray); // [1, 2, 3, 4, 7]
```

#### Quick Sort
* Description: Quick Sort selects a 'pivot' element and partitions the array into two sub-arrays according to the pivot. It then recursively sorts the sub-arrays.
* Time Complexity: O(n log n) on average, O(n^2) in worst case
```javascript
const { quickSort } = require('simple-mathjss');

const unsortedArray = [4, 2, 7, 1, 3];
const sortedArray = quickSort(unsortedArray);
console.log(sortedArray); // [1, 2, 3, 4, 7]
```

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Author

[@thewyolar](https://github.com/thewyolar)


