# 📦 @selormdev/is-even-or-odd

A tiny, zero-dependency utility to check whether a number is even or odd — because sometimes, that's all you need.

## 🚀 Installation

Install via npm:

```bash
npm install @selormdev/is-even-or-odd
```

Or with yarn:

```bash
yarn add @selormdev/is-even-or-odd
```

🛠️ Usage

```javascript
import { isEven, isOdd, isEvenOrOdd } from '@selormdev/is-even-or-odd';

console.log(isEven(4)); // true
console.log(isOdd(4)); // false
console.log(isEvenOrOdd(4)); // "even"
console.log(isEvenOrOdd(5)); // "odd"
```

🔍 API Reference

- `isEven(num)`: Returns `true` if the number is even, otherwise `false`.
- `isOdd(num)`: Returns `true` if the number is odd, otherwise `false`.
- `isEvenOrOdd(num)`: Returns `"even"` if the number is even, `"odd"` if the number is odd.

## 📝 License

ISC © SelormDev
