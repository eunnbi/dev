---
emoji: ๐
title: Function
date: "2021-12-21"
category: Javascript
preview: "ํจ์๋ ์ผ๊ธ๊ฐ์ฒด - ๋ณ์๋ ์๋ฃ๊ตฌ์กฐ (๋ฐฐ์ด์ ์์๊ฐ ๊ฐ์ฒด์ ์์ฑ๊ฐ)์ ํ ๋นํ  ์ ์๋ค. - ๋ค๋ฅธ ํจ์์ ์ธ์๋ก ์ ๋ฌํ  ์ ์๋ค. - ๋ค๋ฅธ ํจ์์ ๋ฐํ๊ฐ์ผ๋ก ์ฌ์ฉ๋  ์ ์๋ค. - ํจ์์ ์ผ๋ฐ๊ฐ์ฒด์ ์ฐจ์ด์ ์ ํจ์๋ ํธ์ถํ  ์ ์๋ค๋ ๊ฒ์ด๋ค. ํจ์ ์ ์ธ๋ฌธ, ํจ์ ํํ์, ์ต๋ชํจ์ ํจ์ ํธ์ด์คํ - ํจ์ ์ ์ธ๋ฌธ ์ ์ฒด๊ฐ ํด๋น ์ค์ฝํ์ ์ต์๋จ์ ์ฎ๊ฒจ์ง ๊ฒ์ฒ๋ผ ๋์ํ๋ค. - ํจ์ ํํ์์ ๊ฒฝ์ฐ ํจ์๊ฐ ์๋ ๋ณ์ ํธ์ด์คํ์ด ๋ฐ์ํ๋ค. ํจ์์ ๋ค์ํ ํํ 1. ์ฆ์ ์คํ ํจ์ - ์ต์ ํ๋ฒ๋ง ํธ์ถ ๊ฐ๋ฅ - ๋ณ์ ์ด๊ธฐํ์ฒ๋ฆฌ ๋ฑ์ ์ฌ์ฉ - ํจ์ ์ค์ฝํ๊ฐ ์์ฑ๋๋ค. - ์ฆ์ ์คํํจ์์์ ์ ์ธ๋ ๋ณ์์ ํจ์๋ค์ private ์ฝ๋ฐฑ ํจ์ - ๋ค๋ฅธ ํจ์์ ์ธ์๋ก ์ ๋ฌ๋๋ ํจ์๋ฅผ ๋งํ๋ค. - ํจ์๋ฅผ ๋ช์์ ์ผ๋ก ํธ์ถํ๋ ๋ฐฉ์์ด ์๋๋ผ ํน์  ์ด๋ฒคํธ๊ฐ ๋ฐ์ํ์ ๋ ํธ์ถ๋๋ ํจ์ - ๋น๋๊ธฐ์ ์ฒ๋ฆฌ ๋ชจ๋ธ์ ์ฌ์ฉ๋๋ค."
---

# ํจ์๋ ์ผ๊ธ๊ฐ์ฒด

- ๋ณ์๋ ์๋ฃ๊ตฌ์กฐ (๋ฐฐ์ด์ ์์๊ฐ ๊ฐ์ฒด์ ์์ฑ๊ฐ)์ ํ ๋นํ  ์ ์๋ค.
- ๋ค๋ฅธ ํจ์์ ์ธ์๋ก ์ ๋ฌํ  ์ ์๋ค.
- ๋ค๋ฅธ ํจ์์ ๋ฐํ๊ฐ์ผ๋ก ์ฌ์ฉ๋  ์ ์๋ค.
- ํจ์์ ์ผ๋ฐ๊ฐ์ฒด์ ์ฐจ์ด์ ์ ํจ์๋ ํธ์ถํ  ์ ์๋ค๋ ๊ฒ์ด๋ค.

```js
// ๋ณ์์ ์ ์ฅ
const increase = function (num) {
  return num++;
};
const decrease = function (num) {
  return num--;
};
```

```js
// ๊ฐ์ฒด ์์ฑ๊ฐ์ผ๋ก ์ ์ฅ
const predicates = { increase, decrease };

// ํจ์ ํ๋ผ๋ฏธํฐ, ๋ฐํ๊ฐ์ผ๋ก ์ฌ์ฉ ๊ฐ๋ฅ
function makeCounter(predicates) {
  let num = 0;
  return function () {
    num = predicates(num);
    return num;
  };
}

const increaser = makeCounter(predicates.increase);
console.log(increaser()); // 1
console.log(increaser()); // 2

const decreaser = makeCounter(predicates.decrease);
console.log(decreaser()); // -1
console.log(decreaser()); // -2
```

<br/>

# ํจ์ ์ ์ธ๋ฌธ, ํจ์ ํํ์, ์ต๋ชํจ์

```js
// ํจ์ ์ ์ธ๋ฌธ
function greet(name) {
  console.log(`hello ${name}`);
}
greet("Alberto");
```

```js
// ํจ์ ํํ์
const greeter = function greet(name) {
  console.log(`hello ${name}`);
};
greeter("Alberto");
```

```js
// ์ต๋ชํจ์
const greeter = function (name) {
  console.log(`hello ${name}`);
};
greeter("Alberto");
```

<br/>

# ํจ์ ํธ์ด์คํ

- ํจ์ ์ ์ธ๋ฌธ ์ ์ฒด๊ฐ ํด๋น ์ค์ฝํ์ ์ต์๋จ์ ์ฎ๊ฒจ์ง ๊ฒ์ฒ๋ผ ๋์ํ๋ค.

```js
const res = square(5); // ํธ์ถ ๊ฐ๋ฅ
console.log(res); // 25
function square(number) {
  return number * number;
}
```

- ํจ์ ํํ์์ ๊ฒฝ์ฐ ํจ์๊ฐ ์๋ ๋ณ์ ํธ์ด์คํ์ด ๋ฐ์ํ๋ค.

```js
const res = square(5); // ERROR: square is not a function
const square = function (number) {
  return number * number;
};
```

<br/>

# ํจ์์ ๋ค์ํ ํํ

1. ์ฆ์ ์คํ ํจ์

- ์ต์ ํ๋ฒ๋ง ํธ์ถ ๊ฐ๋ฅ
- ๋ณ์ ์ด๊ธฐํ์ฒ๋ฆฌ ๋ฑ์ ์ฌ์ฉ
- ํจ์ ์ค์ฝํ๊ฐ ์์ฑ๋๋ค.
  - ์ฆ์ ์คํํจ์์์ ์ ์ธ๋ ๋ณ์์ ํจ์๋ค์ private

```js
let isAdult;

(function init(age) {
  let currentAge = age;
  if (age >= 20) {
    isAdult = true;
  } else {
    isAdult = false;
  }
})(20);

console.log(isAdult); //  true
console.log(currentAge); // ReferenceError: currentAge is not defined
```

```js
// ๊ฐ์ฒด ์์ฑ
const Counter = (function () {
  let current = 0;
  return {
    getCurrentValue: function () {
      return current;
    },
    increaseValue: function () {
      current = current + 1;
      return current;
    },
    decreaseValue: function () {
      current = current - 1;
      return current;
    }
  };
})();

console.log(current); // ReferenceError: current is not defined
// current ๋ณ์๋ privateํ๊ธฐ ๋๋ฌธ์ ํด๋ก์ ๋ฅผ ํตํ ์ ๊ทผ ์ด์ธ์๋ ์ ๊ทผ ๋ฐ ์์ ์ด ๋ถ๊ฐ๋ฅํ๋ค.
console.log(Counter.getCurrentValue()); // 0
console.log(Counter.increaseValue()); // 1
console.log(Counter.decreaseValue()); // 0
```

2. ์ฝ๋ฐฑ ํจ์

- ๋ค๋ฅธ ํจ์์ ์ธ์๋ก ์ ๋ฌ๋๋ ํจ์๋ฅผ ๋งํ๋ค.
- ํจ์๋ฅผ ๋ช์์ ์ผ๋ก ํธ์ถํ๋ ๋ฐฉ์์ด ์๋๋ผ ํน์  ์ด๋ฒคํธ๊ฐ ๋ฐ์ํ์ ๋ ํธ์ถ๋๋ ํจ์
- ๋น๋๊ธฐ์ ์ฒ๋ฆฌ ๋ชจ๋ธ์ ์ฌ์ฉ๋๋ค.
- [์ฐธ๊ณ  - ์ฝ๋ฐฑํจ์](https://velog.io/@eunnbi/JS-%EC%BD%9C%EB%B0%B1%ED%95%A8%EC%88%98)

์ด์ธ์๋ [์์ฑ์ ํจ์](https://velog.io/@eunnbi/JS-this#-%EC%83%9D%EC%84%B1%EC%9E%90-%ED%95%A8%EC%88%98%EB%9E%80[), [ํด๋ก์  ํจ์](https://velog.io/@eunnbi/JS-%ED%81%B4%EB%A1%9C%EC%A0%80) ๋ฑ์ด ์๋ค.

<br/>

# ํจ์ ๊ฐ์ฒด์ ํ๋กํผํฐ

1. `arguments` ํ๋กํผํฐ

- ํจ์ ํธ์ถ ์ ์ ๋ฌ๋ ์ธ์๋ค์ ์ ๋ณด๋ฅผ ๋ด๊ณ  ์๋ ์ํ๊ฐ๋ฅํ ์ ์ฌ๋ฐฐ์ด ๊ฐ์ฒด
- ํจ์ ๋ด๋ถ์ ์ง์ญ๋ณ์์ฒ๋ผ ์ฌ์ฉ๋จ
- ๋งค๊ฐ๋ณ์์ ๊ฐ์๊ฐ ํ์ ๋์ง ์์ **๊ฐ๋ณ์ธ์ ํจ์**๋ฅผ ๊ตฌํํ  ๋ ์ ์ฉํจ.

```js
function sum() {
  let res = 0;
  for (var i = 0; i < arguments.length; i++) {
    res += arguments[i];
  }
  return res;
}
console.log(sum(1, 2, 3)); // 6
```

2. `caller` ํ๋กํผํฐ: ์์ ์ ํธ์ถํ ํจ์

3. `length` ํ๋กํผํฐ: ํจ์ ์ ์ ์ ์์ฑ๋ ๋งค๊ฐ๋ณ์ ๊ฐ์

4. `name` ํ๋กํผํฐ: ํจ์๋ช, ์ต๋ชํจ์์ ๊ฒฝ์ฐ ๋น ๋ฌธ์์ด

5. `__proto__`, `prototype` ํ๋กํผํฐ: [์ฐธ๊ณ ](https://velog.io/@eunnbi/JS-%ED%94%84%EB%A1%9C%ED%86%A0%ED%83%80%EC%9E%85)
