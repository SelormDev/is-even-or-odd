# is-even-or-odd

This package provides a simple utility to check if a number is even or odd.

## Installation

To install this package, run:

```bash
npm i @selormdev/is-even-or-odd
```

## Usage

```javascript
import { isEven, isOdd, isEvenOrOdd } from '@selormdev/is-even-or-odd';

console.log(isEven(4)); // true
console.log(isOdd(4)); // false
console.log(isEvenOrOdd(4)); // "even"
console.log(isEvenOrOdd(5)); // "odd"
```

## Functions

- `isEven(num)`: Returns `true` if the number is even, otherwise `false`.
- `isOdd(num)`: Returns `true` if the number is odd, otherwise `false`.
- `isEvenOrOdd(num)`: Returns `"even"` if the number is even, `"odd"` if the number is odd.

## Keywords

- JavaScript
- ES6
