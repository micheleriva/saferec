<img src="/docs/rec.png" />

**SafeRec** is a simple but powerful trampoline which converts your recursive function into a fast and safe `while` loop. <br />
You can read more about why you should adopt memory safe recursion [here](https://medium.com/openmindonline/js-monday-06-adopting-memory-safe-recursion-d26dcee409c9)

# Installation

**Yarn**
```sh
yarn add saferec
```

**NPM**
```sh
npm install saferec --save-dev
```

# Usage

```js
import rec from "saferec"

function factorial(num) {
  return num === 0
         ? 1
         : (num * factorial(num - 1));
}

const result = rec(factorial(1000));
```

# LICENSE

[The Unlicense](/LICENSE.md)