---
emoji: ๐งฌ
title: ํด๋ก์ 
date: "2022-01-04"
category: Javascript
preview: "ํจ์์ ๊ทธ ํจ์๊ฐ ์ ์ธ๋์์ ๋์ ๋ ์์ปฌ ํ๊ฒฝ์ ์กฐํฉ์ด๋ค. ์ ์ธ๋  ๋น์์ ๋ ์์ปฌ ํ๊ฒฝ์ ์คํ ์ปจํ์คํธ์ ๊ตฌ์ฑ ์์ ์ค lexical environment์ outerEnvironmentReference์ ํด๋นํ๋ค. ์ธ๋ถํจ์์ ๋ณ์๋ฅผ ์ฐธ์กฐํ๋ ๋ด๋ถํจ์ outer2 ๋ณ์๋ outer ํจ์์ ๋ฐํ๊ฐ์ธ inner ํจ์๋ฅผ ์ฐธ์กฐํ๋ค. inner ํจ์ ์คํ ์ ์ค์ฝํ ์ฒด์ด๋์ ๋ฐ๋ผ ๋ณ์ a๋ฅผ ์ฐพ๋๋ค. environmentRecord => ๋ณ์ a ๋ฐ๊ฒฌ X outerEnvironmentReference = inner ํจ์๊ฐ ์ ์ธ๋ ์์น์ lexical environment (์ฐธ์กฐ ๋ณต์ฌ) = outer ํจ์์ lexical environment => ๋ณ์ a ๋ฐ๊ฒฌ O inner ํจ์์ ์คํ ์์ ์๋ outer ํจ์๋ ์ด๋ฏธ ์คํ์ด ์ข๋ฃ๋์ด ์คํ ์ปจํ์คํธ๋ ์์ํ๋ฐ outer์ lexical environment๋ฅผ ์ด๋ป๊ฒ ์ ๊ทผํ  ์ ์์๊น? ๊ฐ๋น์ง ์ปฌ๋ ํฐ์ ๋์ ๋ฐฉ์ ๋๋ฌธ์ด๋ค. ๊ฐ๋น์ง ์ปฌ๋ ํฐ๋ ์ด๋ค ๊ฐ์ ์ฐธ์กฐํ๋ ๋ณ์๊ฐ ํ๋๋ผ๋ ์๋ค๋ฉด ๊ทธ ๊ฐ์ ์์ง ๋์์ ํฌํจ๋์ง ์๋๋ค."
---

> **ํจ์์ ๊ทธ ํจ์๊ฐ ์ ์ธ๋์์ ๋์ ๋ ์์ปฌ ํ๊ฒฝ์ ์กฐํฉ**์ด๋ค.
>
> - ์ ์ธ๋  ๋น์์ ๋ ์์ปฌ ํ๊ฒฝ์ ์คํ ์ปจํ์คํธ์ ๊ตฌ์ฑ ์์ ์ค `lexical environment`์ `outerEnvironmentReference`์ ํด๋นํ๋ค.

<br/>

## ์ธ๋ถํจ์์ ๋ณ์๋ฅผ ์ฐธ์กฐํ๋ ๋ด๋ถํจ์

```javascript
const outer = function () {
  const a = 1;
  const inner = function () {
    console.log(++a);
  };
  inner();
};
outer(); // 2
```

- inner ํจ์์ environmentRecord์์ ๋ณ์ a๋ฅผ ์ฐพ์ง ๋ชปํ๊ธฐ์ outerEnvironmentReference๋ฅผ ํตํด ๋ณ์ a๋ฅผ ์ฐพ๋๋ค.
- inner ํจ์์ outerEnvironmentReference๋ outer ํจ์์ lexical environment๋ฅผ ์ฐธ์กฐํ๊ณ  ์ฌ๊ธฐ์์ ๋ณ์ a๋ฅผ ์ฐพ๋๋ค.
  - outer ํจ์์ ์คํ ์ปจํ์คํธ๊ฐ ์ข๋ฃ๋๋ฉด lexical environment์ ์ ์ฅ๋ ์๋ณ์๋ค (a, inner)์ ๋ํ ์ฐธ์กฐ๋ฅผ ์ง์ด๋ค.
- ๊ทธ๋ฌ๋ฉด ๊ฐ ์ฃผ์์ ์ ์ฅ๋์ด ์๋ ๊ฐ๋ค์ ์์ ์ ์ฐธ์กฐํ๋ ๋ณ์๊ฐ ํ๋๋ ์๊ธฐ ๋๋ฌธ์ GC์ ์๊ฑฐ ๋์์ด ๋๋ค.

```javascript
const outer = function () {
  const a = 1;
  const inner = function () {
    return ++a;
  };
  return inner(); //  inner ํจ์์ ์คํ ๊ฒฐ๊ณผ ๋ฐํ
};
const outer2 = outer();
console.log(outer2); // 2
```

```javascript
const outer = function () {
  const a = 1;
  const inner = function () {
    return ++a;
  };
  return inner; // inner ํจ์ ์์ฒด๋ฅผ ๋ฐํ
};
const outer2 = outer();
console.log(outer2()); // 2
console.log(outer2()); // 3
```

- outer2 ๋ณ์๋ outer ํจ์์ ๋ฐํ๊ฐ์ธ inner ํจ์๋ฅผ ์ฐธ์กฐํ๋ค.
- inner ํจ์ ์คํ ์ **์ค์ฝํ ์ฒด์ด๋**์ ๋ฐ๋ผ ๋ณ์ a๋ฅผ ์ฐพ๋๋ค.
  - environmentRecord => ๋ณ์ a ๋ฐ๊ฒฌ X
  - outerEnvironmentReference = inner ํจ์๊ฐ ์ ์ธ๋ ์์น์ lexical environment (์ฐธ์กฐ ๋ณต์ฌ) = outer ํจ์์ lexical environment => ๋ณ์ a ๋ฐ๊ฒฌ O
- inner ํจ์์ ์คํ ์์ ์๋ outer ํจ์๋ ์ด๋ฏธ ์คํ์ด ์ข๋ฃ๋์ด ์คํ ์ปจํ์คํธ๋ ์์ํ๋ฐ outer์ lexical environment๋ฅผ ์ด๋ป๊ฒ ์ ๊ทผํ  ์ ์์๊น?
  - **๊ฐ๋น์ง ์ปฌ๋ ํฐ์ ๋์ ๋ฐฉ์** ๋๋ฌธ์ด๋ค.
  - **๊ฐ๋น์ง ์ปฌ๋ ํฐ๋ ์ด๋ค ๊ฐ์ ์ฐธ์กฐํ๋ ๋ณ์๊ฐ ํ๋๋ผ๋ ์๋ค๋ฉด ๊ทธ ๊ฐ์ ์์ง ๋์์ ํฌํจ๋์ง ์๋๋ค.**
  - ์ฆ, outer ํจ์๋ inner ํจ์๋ฅผ ๋ฐํํ๊ณ  ์คํ ์ปจํ์คํธ๊ฐ ์ข๋ฃ๋์์ง๋ง, ๋ณ์ outer2 ๋ก ์ธํด inner ํจ์์ ์คํ ์ปจํ์คํธ๊ฐ ํ์ฑํ๋  ์ ์์ผ๋ฏ๋ก inner ํจ์์ ์คํ ์ปจํ์คํธ์ ๊ตฌ์ฑ ์์ ์ค outerEnvironmentReference ์ฆ, outer ํจ์์ lexical environment๋ GC์ ์์ง ๋์์์ ์ ์ธ๋๋ค.
  - ์คํ์์ผ๋ก๋ ์ ์ธ ๋น์์ lexical environment ์ ๋ถ๋ฅผ `GC`ํ์ง ์๋๋ก ๋์ด ์์ผ๋, 2019๋ ๊ธฐ์ค์ผ๋ก ํฌ๋กฌ์ด๋ Node.js ๋ฑ์์ ์ฌ์ฉ์ค์ธ `V8`์์ง์ ๊ฒฝ์ฐ ๋ด๋ถํจ์์์ ์ค์ ๋ก ์ฌ์ฉํ๋ ๋ณ์๋ง ๋จ๊ฒจ๋๊ณ  ๋๋จธ์ง๋ GCํ๋๋ก ์ต์ ํ๋์ด ์๋ค.

## ๊ทธ ์ธ ํด๋ก์ ๊ฐ ๋ฐ์ํ ๊ฒฝ์ฐ

```javascript
(function () {
  const a = 0;
  const intervalId = null;
  intervalId = setInterval(function () {
    if (++a >= 10) {
      // ๋ณ์ a๊ฐ ์ฐธ์กฐํ๊ณ  ์๋ ๊ฐ ๊ธฐ์ต
      clearInterval(intervalId);
    }
    console.log(a);
  }, 1000);
})();
```

```javascript
(function () {
  const count = 0;
  const button = document.createElement("button");
  button.innterText = "click";
  button.addEventListener("click", function () {
    console.log(++count, "times clicked"); // count ๋ณ์๊ฐ ์ฐธ์กฐํ๊ณ  ์๋ ๊ฐ ๊ธฐ์ต
  });
  document.body.appendChild(button);
})();
```

> ๐ก **์์ ์ด ์ ์ธ๋  ๋น์์ `Lexical Environment`์ ๊ธฐ์ตํ๋ ํจ์** <br/>
> ๐ก **์ ์ธ๋  ๋น์์ ์ค์ฝํ ์ฒด์ธ์์ ์ ์ ์์๋ ๋ณ์๋ค ์ค ์คํ๋  ๋ ์ฌ์ฉํ  ๋ณ์๋ค๋ง์ ๊ธฐ์ตํ์ฌ ์ ์ง์ํค๋ ํจ์**

<br/>

## ํด๋ก์ ์ ๋ฉ๋ชจ๋ฆฌ ๊ด๋ฆฌ

- ํด๋ก์ ๋ ์์ ์ด ์ ์ธ๋์์ ๋์ `lexical environment`๋ฅผ ๊ธฐ์ตํด์ผ ํ๋ฏ๋ก ๋ฉ๋ชจ๋ฆฌ ์ฐจ์์์ ์ํด๋ฅผ ๋ณผ ์ ์๋ค. ๊ทธ๋์ ๊ฐ๋ฐ์์ ์๋์ ์ธ ๋ฉ๋ชจ๋ฆฌ ๊ด๋ฆฌ๊ฐ ํ์ํ๋ค.
- ์ฐธ์กฐ ์นด์ดํธ๊ฐ 0์ด ๋์ด์ผ `GC(Garbage Collector)`์ ์๊ฑฐ ๋์์ด ๋๋ฏ๋ก ๊ฐ๋ฐ์ ์๋์ ์ผ๋ก ์ฐธ์กฐ ์นด์ดํธ๊ฐ 0์ด ๋๋๋ก ์ค๊ณํด์ผ ํ๋ค.
- ์ฐธ์กฐ ์นด์ดํธ๊ฐ 0์ด ๋๊ธฐ ์ํด์๋ ์๋ณ์์ ์ฐธ์กฐํ์ด ์๋ ์์ํ ๋ฐ์ดํฐ (๋ณดํต `null`์ด๋ `undefined`)๋ฅผ ํ ๋นํ๋ฉด ๋๋ค.
- ํด๋ก์ ์ ์์ ์๋ช๊ณผ ์ฌ์ฉ๋์ ์ดํดํ๊ณ  ๊ทธ ํ์์ฑ์ด ์ฌ๋ผ์ง ์์ ์๋ ๋๋ ๋ฉ๋ชจ๋ฆฌ๋ฅผ ์๋ชจํ์ง ์๊ฒ ํด์ผ ํ๋ค. (ํนํ ์ฝ๋ฐฑ์ผ๋ก ์ฌ์ฉ๋๋ ๊ฒฝ์ฐ)

```javascript
const outer = (function () {
  const a = 1;
  const inner = function () {
    return ++a;
  };
  return inner;
})();
// outer ๋ณ์๋ก inner ํจ์๊ฐ ์คํ๋  ์ ์์ด inner ํจ์๊ฐ ์ ์ธ๋ ๋น์์ lexical environment๋ GC์ ์๊ฑฐ ๋์์ด ๋์ง ์๋๋ค.
console.log(outer()); // 2
outer = null;
```

- outer ํจ์์ null์ ํ ๋นํจ์ผ๋ก์จ outer ๋ณ์์ inner ํจ์ ์ฐธ์กฐ๋ฅผ ๋์๋ค.
- ์ด์  outer ๋ณ์๋ inner ํจ์๋ฅผ ์ฐธ์กฐํ์ง ์์ผ๋ฏ๋ก inner ํจ์๊ฐ ์ ์ธ๋ ๋น์์ lexical environment๋ GC์ ์๊ฑฐ ๋์์ด ๋๋ค.

```javascript
(function () {
  const a = 0;
  const intervalId = null;
  const inner = function () {
    if (++a >= 10) {
      clearInterval(intervalId); // ์ฝ๋ฐฑํจ์๊ฐ ๋ ์ด์ ํธ์ถ๋์ง ์์.
      inner = null; // ๊ทธ๋์ inner ์๋ณ์์ ํจ์ ์ฐธ์กฐ๋ฅผ ๋์.
    }
    console.log(a);
  };
  intervalId = setInterval(inner, 1000);
})();
```

```javascript
(function () {
  const count = 0;
  const button = document.createElement("button");
  button.innterText = "click";
  const clickHandler = function () {
    console.log(++count, "times clicked");
    if (count >= 10) {
      button.removeEventListener("click", clickHandler); // ์ฝ๋ฐฑํจ์๊ฐ ๋ ์ด์ ํธ์ถ๋์ง ์์.
      clickHandler = null; // clickHandler ์๋ณ์์ ํจ์ ์ฐธ์กฐ๋ฅผ ๋์.
    }
  };
  button.addEventListener("click", clickHandler);
  document.body.appendChild(button);
})();
```

<br/>

## ํด๋ก์  ํ์ฉ ์ฌ๋ก

### โจ ์ฝ๋ฐฑ ํจ์ ๋ด๋ถ์์ ์ธ๋ถ ๋ฐ์ดํฐ๋ฅผ ์ฌ์ฉํ๊ณ ์ ํ  ๋

```javascript
const fruits = ["apple", "banana", "peach"];
const ul = document.createElement("ul");

const callback = fruit => {
  const li = document.createElement("li");
  li.innerText = fruit;
  const listener = function () {
    alert("your choice is " + fruit);
  };
  li.addEventListener("click", listener);
  ul.appendChild(li);
};

fruits.forEach(callback);
document.body.appendChild(ul);
```

- callback ํจ์์ ์คํ ์ข๋ฃ ์ฌ๋ถ์ ๋ฌด๊ดํ๊ฒ ํด๋ฆญ ์ด๋ฒคํธ์ ์ํด listener ํจ์๊ฐ ์คํ๋  ๋ listener ํจ์์ outerEnvironmentReference๊ฐ callback ํจ์์ LexicalEnvironment๋ฅผ ์ฐธ์กฐํ๊ฒ ๋๋ค.
- ๋ฐ๋ผ์ ์ต์ํ listener ํจ์๊ฐ ์ฐธ์กฐํ  ์์ ์ธ ๋ณ์ fruit์ ๋ํด์๋ callback ํจ์๊ฐ ์ข๋ฃ๋ ํ์๋ `GC` ๋์์์ ์ ์ธ๋์ด ๊ณ์ ์ฐธ์กฐํ  ์ ์๋ค.

#### ์ฝ๋ฐฑํจ์ ๋ถ๋ฆฌ ๋ฐ bind ๋ฉ์๋ ์ ์ฉ

```javascript
const fruits = ["apple", "banana", "peach"];
const ul = document.createElement("ul");

const alertFruit = function (fruit) {
  alert("your choice is " + fruit);
};

fruits.forEach(function (fruit) {
  const li = document.createElement("li");
  li.innerText = fruit;
  li.addEventListener("click", alertFruit.bind(null, fruit));
  ul.appendChild(li);
});
document.body.appendChild(ul);
```

- ์ฝ๋ฐฑ ํจ์(`alertFruit`)์ ์ธ์์ ๋ํ ์ ์ด๊ถ์ `addEventListener`์๊ฒ ์์ผ๋ฉฐ, `addEventListener`๊ฐ ์ฝ๋ฐฑํจ์๋ฅผ ํธ์ถํ  ๋ **์ฝ๋ฐฑํจ์์ ์ธ์๋ก ์ด๋ฒคํธ ๊ฐ์ฒด๋ฅผ ์ ๋ฌํ๋ค.**
- bind ๋ฉ์๋๋ฅผ ํ์ฉํ๋ฉด **ํจ์์ ์ธ์ ์์๋ฅผ ๋ฐ๊ฟ ์ ์๊ณ , ํจ์ ๋ด๋ถ์์์ this๋ฅผ ์๋ก ์ง์ ํ  ์ ์๋ค.**
  - ์ ์์์์๋ ์ด๋ฒคํธ ๊ฐ์ฒด๊ฐ ๋ ๋ฒ์งธ ์ธ์๋ก ์ ๋ฌ๋๋ค.
- bind ๋ฉ์๋์ ์ฒซ ๋ฒ์งธ ์ธ์๊ฐ **์๋ก ๋ฐ์ธ๋ฉํ  this**์ธ๋ฐ ์ด ๊ฐ์ ์๋ตํ  ์ ์๊ธฐ์ ์ผ๋ฐ์ ์ผ๋ก ์๋์ this๋ฅผ ์ ์งํ ๋๋ก ํ  ์ ์๋ ๊ฒฝ์ฐ๊ฐ ๋ง๋ค

#### ๊ณ ์ฐจํจ์

- ๊ณ ์ฐจํจ์๋ **ํจ์๋ฅผ ์ธ์๋ก ๋ฐ๊ฑฐ๋ ํจ์๋ฅผ ๋ฆฌํดํ๋ ํจ์**์ด๋ค.

```javascript
const fruits = ["apple", "banana", "peach"];
const ul = document.createElement("ul");
const alertFruitBuilder = function (fruit) {
  // (B)
  return function () {
    // (C)
    alert("your choice is " + fruit);
  };
};

fruits.forEach(function (fruit) {
  // (A)
  const li = document.createElement("li");
  li.innerText = fruit;
  li.addEventListener("click", alertFruitBuilder(fruit));
  ul.appendChild(li);
});
document.body.appendChild(ul);
```

- alertFruitBuilder ํจ์๊ฐ ๋ฐํํ ํจ์๊ฐ ์ฝ๋ฐฑํจ์๋ก ์ ๋ฌ๋๊ณ  ๊ทธ ํจ์๋ ์์ ์ด ์ ์ธ๋ ๋น์์ lexical environment๋ฅผ ํตํด ์ ์ ์์๋ ๋ณ์๋ค ์ค ์์ ์ด ์คํ๋  ๋ ์ฐธ์กฐํ  ๋ณ์๋ค์ ๊ธฐ์ตํ๋ ํด๋ก์ ์ด๋ค.
- (B) ํจ์๊ฐ ์ข๋ฃ๋ ์ดํ์๋ ํด๋ฆญ ์ด๋ฒคํธ๊ฐ ๋ฐ์ํ๋ฉด (C) ํจ์๊ฐ ์คํ๋๊ณ  (C) ํจ์์ `outerEnvironmentReference`๋ฅผ ํตํด (B) ํจ์์ ์ธ์๋ก ์ ๋ฌ๋ fruit๋ฅผ ์ฐธ์กฐํ  ์ ์๋ค.

<br/>

### โจ ์ ๊ทผ ๊ถํ ์ ์ด

#### ์ ๋ณด ์๋

- ์ด๋ค ๋ชจ๋์ ๋ด๋ถ ๋ก์ง์ ๋ํ ์ธ๋ถ๋ก์ ๋ธ์ถ์ ์ต์ํํด์ ๋ชจ๋ ๊ฐ์ ๊ฒฐํฉ๋๋ฅผ ๋ฎ์ถ๊ณ  ์ ์ฐ์ฑ์ ๋์ด๋ ๊ฒ์ ๋งํ๋ค.

#### ์ ๊ทผ ๊ถํ

- ์ ๋ณด ์๋์ ์ํด ์ ๊ทผ ๊ถํ์ ์ ์ดํ๋ ๊ฒฝ์ฐ๊ฐ ์๋ค.
- ํํ ์ ๊ทผ ๊ถํ์๋ `public`, `private`, `protected`๊ฐ ์๋ค.
- `public`์ ์ธ๋ถ์์ ์ ๊ทผ ๊ฐ๋ฅํ ๊ฒ์ ๋งํ๊ณ , `private`์ ๋ด๋ถ์์๋ง ์ฌ์ฉํ๋ฉฐ ์ธ๋ถ์ ๋ธ์ถ๋์ง ์๋ ๊ฒ์ ๋งํ๋ค.
- ์๋ฐ์คํฌ๋ฆฝํธ๋ ๋ณ์ ์์ฒด์ ์ด๋ฌํ ์ ๊ทผ ๊ถํ์ ๋ถ์ฌํ๋๋ก ์ค๊ณ๋์ด ์์ง ์๋ค. ๊ทธ๋ ๋ค๊ณ  ์ ๊ทผ๊ถํ ์ ์ด๊ฐ ๋ถ๊ฐ๋ฅํ ๊ฒ์ ์๋๋ค.

> ๐ก ํด๋ก์ ๋ฅผ ์ด์ฉํ๋ฉด **ํจ์ ์ฐจ์์์ publicํ ๋ณ์์ privateํ ๋ณ์๋ฅผ ๊ตฌ๋ถ**ํ๋ ๊ฒ์ด ๊ฐ๋ฅํ๋ค.<br/>
> ๐ก ์ธ๋ถ์ ์ ๊ณตํ๊ณ ์ ํ๋ ๋์๋ค์ ๋ชจ์์ ๊ฐ์ฒด, ๋ฐฐ์ด, ํจ์ ํํ๋ก ๋ฐํํ๊ณ , ๋ด๋ถ์์๋ง ์ฌ์ฉํ  ์ ๋ณด๋ค์ ๋ฐํํ์ง ์๋ ๊ฒ์ผ๋ก ์ ๊ทผ ๊ถํ ์ ์ด๊ฐ ๊ฐ๋ฅํ๋ค.

#### ์์

```javascript
const createCar = function () {
  const fuel = Math.ceil(Math.random() * 10 + 10);
  const power = Math.ceil(Math.random() * 3 + 2);
  let moved = 0;
  return {
    get moved() {
      return moved;
    },
    run: function () {
      const km = Math.ceil(Math.random() * 6);
      const wasteFuel = km / power;
      if (fuel < wasteFuel) {
        console.log("์ด๋๋ถ๊ฐ");
        return;
      }
      fuel -= wasteFuel;
      moved += km;
      console.log(`${km} km ์ด๋ (์ด ${moved} km), ๋จ์ ์ฐ๋ฃ: ${fuel}`);
    }
  };
};
const car = createCar();
car.run(); // closure (fuel, power, moved ๋ณ์๊ฐ ์ฐธ์กฐํ๊ณ  ์๋ ๊ฐ ๊ธฐ์ต)
```

- fuel, power ๋ณ์๋ ์ธ๋ถ์์ ์ ๊ทผํ์ง ๋ชปํ๋๋ก ํ๊ณ , moved ๋ณ์๋ getter ๋ฉ์๋๋ฅผ ์ด์ฉํด ์ธ๋ถ์์ ์ ๊ทผํ  ์ ์๋ค.
- ์ด์  ์ธ๋ถ์์๋ ์ค์ง run ๋ฉ์๋๋ฅผ ์คํํ๋ ๊ฒ๊ณผ moved ๋ณ์์ ๊ฐ์ ํ์ธํ๋ ๋ ๊ฐ์ง ๋์๋ง ํ  ์ ์๋ค.

<br/>

### โจ ๋ถ๋ถ ์ ์ฉ ํจ์

`partially applied function`

#### bind ๋ฉ์๋๋ฅผ ํ์ฉํ ๋ถ๋ถ ์ ์ฉ ํจ์

```javascript
const add = function () {
  const result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
};
const addPartial = add.bind(null, 1, 2, 3, 4, 5);
console.log(addPartial(6, 7, 8, 9, 10)); // 55
```

- bind ๋ฉ์๋๋ง์ผ๋ก๋ ๋ถ๋ถ ์ ์ฉ ํจ์๋ฅผ ๊ตฌํํ  ์ ์์ง๋ง, `this`๋ก ๋ฐ์ธ๋ฉํ  ๋์์ ๋ณ๊ฒฝํ  ์ ๋ฐ์ ์๋ค.

#### ํด๋ก์ ๋ฅผ ํ์ฉํ ๋ถ๋ถ ์ ์ฉ ํจ์

```javascript
const partial = function () {
  const originalPartialArgs = arguments;
  const func = originalPartialArgs[0];
  if (typeof func !== "function") {
    throw new Error("์ฒซ ๋ฒ์งธ ์ธ์๊ฐ ํจ์๊ฐ ์๋๋๋ค.");
  }
  // closure
  return function () {
    // originalPartialArgs ๋ณ์๊ฐ ์ฐธ์กฐํ๊ณ  ์๋ ๊ฐ ๊ธฐ์ต
    const partialArgs = Array.prototype.slice.call(originalPartialArgs, 1);
    const restArgs = Array.prototype.slice.call(arguments);
    // func ๋ณ์๊ฐ ์ฐธ์กฐํ๊ณ  ์๋ ๊ฐ ๊ธฐ์ต
    return func.apply(this, partialArgs.concat(restArgs));
  };
};

const add = function () {
  let result = 0;
  // arguments: ํจ์์ ์ ๋ฌ๋ ์ธ์์ ํด๋นํ๋ ์ ์ฌ๋ฐฐ์ด๊ฐ์ฒด
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
};

const addPartial = partial(add, 1, 2, 3, 4, 5);
console.log(addPartial(6, 7, 8, 9, 10)); // 55

const dog = {
  name: "๊ฐ์์ง",
  greet: partial(function (prefix, suffix) {
    return prefix + this.name + suffix;
  }, "์์, ")
};

dog.greet("์๋๋ค!");
```

- partial ํจ์์ ์ฒซ๋ฒ์งธ ์ธ์์๋ ์๋ณธํจ์๋ฅผ, ๋ ๋ฒ์งธ ์ธ์ ์ดํ๋ถํฐ๋ ๋ฏธ๋ฆฌ ์ ์ฉํ  ์ธ์๋ค์ ์ ๋ฌํ๋ค.
- partial ํจ์๊ฐ ๋ฐํํ  ํจ์ (๋ถ๋ถ ์ ์ฉ ํจ์)์์๋ ๋ค์ ๋๋จธ์ง ์ธ์๋ค์ ๋ฐ๊ณ  ์ด๋ค์ ํ๋ฐ ๋ชจ์ (`concat`) ์๋ณธ ํจ์๋ฅผ ํธ์ถ (`apply`)ํ๋ค.
  - `apply` ๋ฉ์๋๋ฅผ ํธ์ถํ  ๋ ์คํ ์์ ์ `this`๋ฅผ ๊ทธ๋๋ก ๋ฐ์ํจ์ผ๋ก์จ `this`์๋ ์๋ฌด๋ฐ ์ํฅ์ ์ฃผ์ง ์๋๋ค.

> ๐ก ๋ถ๋ถ ์ ์ฉ ํจ์์ผ๋ก ๊ตฌํํ  ์๋ณธ ํจ์์ ๊ทธ ํจ์์ ์ผ๋ถ ์ธ์๋ฅผ ๋๊ฒจ ์๋ณธํจ์์ ๊ทธ ์ธ์๋ค์ ๊ธฐ์ตํ๋ ํจ์(`closure`)๋ฅผ ๋ฐํํ๋ค. ์ดํ ๋ฐํ๋ ํจ์๋ฅผ ํธ์ถํ  ๋ ๋๋จธ์ง ์ธ์๋ค์ ๋๊ฒจ ๊ธฐ์ตํ๊ณ  ์๋ ์ธ์๋ค๊น์ง ํจ๊ป ์๋ณธํจ์๋ฅผ ์คํํ๊ฒ ํ๋ค.

#### ๋๋ฐ์ด์ค

- ์งง์ ์๊ฐ ๋์ ๋์ผํ ์ด๋ฒคํธ๊ฐ ๋ง์ด ๋ฐ์ํ  ๊ฒฝ์ฐ ์ด๋ฅผ ์ ๋ถ ์ฒ๋ฆฌํ์ง ์๊ณ  ์ฒ์ ๋๋ ๋ง์ง๋ง์ ๋ฐ์ํ ์ด๋ฒคํธ์ ๋ํด ํ ๋ฒ๋ง ์ฒ๋ฆฌํ๋ ๊ฒ์ ๋งํ๋ค.

```javascript
const debounce = function (func, wait) {
  let timeoutId = null;
  return function (event) {
    if (timeoutId) {
      clearTimeout(timeoutId); // ์ฝ๋ฐฑํจ์ ํธ์ถ ๋๊ธฐ ์ด๊ธฐํ
    }
    timeoutId = setTimeout(func.bind(this, event), wait);
  };
};

const moveHandler = function (e) {
  console.log("move event ์ฒ๋ฆฌ");
};

const wheelHandler = function (e) {
  console.log("wheel event ์ฒ๋ฆฌ");
};

document.body.addEventListener("mousemove", debounce(moveHandler, 500));
document.body.addEventListener("mousewheel", debounce(wheelHandler, 700));
```

- `debounce` ํจ์๊ฐ ๋ฐํํ ํจ์๋ ์ถํ ์คํ๋  ๋ `func`, `wait` ๋ณ์๊ฐ ์ฐธ์กฐํ๊ณ  ์๋ ๊ฐ์ ๊ธฐ์ตํ๋ค.
- ์ด๋ฒคํธ๊ฐ ๋ฐ๋ก ์ด์  ์ด๋ฒคํธ๋ก๋ถํฐ wait ์๊ฐ ์ด๋ด์ ๋ฐ์ํ๋ฉด ์ด์  ์ด๋ฒคํธ์ ๋ํ ์ฝ๋ฐฑํจ์๋ ์คํ๋์ง ์๋๋ค.

<br/>

### โจ ์ปค๋ง ํจ์

`currying function`

- **ํ๋ ์ด์์ ์ธ์๋ฅผ ๊ฐ๋ ํจ์๋ฅผ ํ๋์ ์ธ์๋ง ๊ฐ๋ ํจ์๋ก ๋๋ ์ ์์ฐจ์ ์ผ๋ก ํธ์ถ๋  ์ ์๋๋ก ๊ตฌ์ฑํ ํจ์**๋ฅผ ๋งํ๋ค.
- **๋ฐ๋์ ํ ๋ฒ์ ํธ์ถ ์ ํ๋์ ์ธ์๋ง ์ ๋ฌ**ํ๋ ๊ฒ์ ์์น์ผ๋ก ํ๋ค.
- ์ค๊ฐ ๊ณผ์ ์์ ํจ์๋ฅผ ์คํํ ๊ฒฐ๊ณผ๋ ๊ทธ ๋ค์ ์ธ์๋ฅผ ๋ฐ๊ธฐ ์ํด **๋๊ธฐ**๋ง ํ  ๋ฟ์ผ๋ก, **๋ง์ง๋ง ์ธ์๊ฐ ์ ๋ฌ๋๊ธฐ ์ ๊น์ง๋ ์๋ณธ ํจ์๊ฐ ์คํ๋์ง ์๋๋ค.**

```javascript
const curry3 = function (func) {
  return function (a) {
    return function (b) {
      return func(a, b);
    };
  };
};

const getMaxWith10 = curry(Math.max)(10);
console.log(geMaxWith10(8)); // 10
console.log(getMaxWith10(25)); // 25

const getMinWith10 = curry(Math.min)(10);
console.log(geMinWith10(8)); // 8
console.log(getMinWith10(25)); // 10
```

- ํ์ํ ์ธ์ ๊ฐ์ ๋งํผ ํจ์๋ฅผ ๋ง๋ค์ด ๊ณ์ ํจ์๋ฅผ ๋ฐํํ๋ค๊ฐ ๋ง์ง๋ง์๋ง ์๋ณธ ํจ์๋ฅผ ์คํ๋๋ค.
- ๋ค๋ง ์ธ์๊ฐ ๋ง์์ง์๋ก ๋ค์ฌ์ฐ๊ธฐ๊ฐ ๊น์ด์ ธ ๊ฐ๋์ฑ์ด ๋จ์ด์ง๋ค.

```javascript
const curry5 = function (func) {
  return function (a) {
    return function (b) {
      return function (c) {
        return function (d) {
          return function (e) {
            func(a, b, c, d, e);
          };
        };
      };
    };
  };
};

const getMax = curry5(Math.max);
console.log(getMax(1)(2)(3)(4)(5));
```

- ES6์์๋ ํ์ดํ ํจ์๋ฅผ ์จ์ ์ฝ๋์ ๊ฐ๋์ฑ์ ๋์ผ ์ ์๋ค.
- ํ์ดํ ์์์ ๋ฐ๋ผ ํจ์์ ์ธ์๋ฅผ ์ฐจ๋ก๋ก ๋๊ฒจ์ฃผ๋ฉด ๋ง์ง๋ง์ ์๋ณธ ํจ์๊ฐ ํธ์ถ๋จ์ ํ๋์ ํ์ํ  ์ ์๋ค.

```javascript
const curry5 = func => a => b => c => d => e => func(a, b, c, d, e);
```

> ๐ก ์๋ณธํจ์ ํธ์ถ ์ ๊น์ง ์ปค๋งํจ์๋ ๊ณ์ ํจ์๋ฅผ ๋ฐํํ๋ค. ์ด ํจ์๋ค์ ์ค์ฝํ ์ฒด์ธ์์ ์ ์ ์์๋ ๋ณ์๋ค์ ๊ธฐ์ตํ๋ ํด๋ก์ ์ด๋ค.

<br/>

#### ์ง์ฐ ์คํ

`lazy execution`

- ๋น์ฅ ํ์ํ ์ธ์๋ง ๋ฐ์์ ์ ๋ฌํ๊ณ  ๊ฒฐ๊ตญ ๋ง์ง๋ง ์ธ์๊ฐ ๋์ด๊ฐ ๋๊น์ง ํจ์ ์คํ์ ๋ฏธ๋ฃจ๋ ๊ฒ์ ํจ์ํ ํ๋ก๊ทธ๋๋ฐ์์๋ ์ง์ฐ ์คํ์ด๋ผ๊ณ  ์นญํ๋ค.
- ์ํ๋ ์์ ๊น์ง ํจ์ ์คํ์ ์ง์ฐ์์ผฐ๋ค๊ฐ ์คํํ๋ ๊ฒ์ด ํ์ํ ์ํฉ์ด๋ผ๋ฉด ์ปค๋งํจ์๋ฅผ ์ฌ์ฉํ๋ ๊ฒ์ด ์ ์ฉํ๋ค.

```javascript
const getInformation = baseUrl => path => id =>
  fetch(`${baseUrl}${path}/${id}`);
```

- ์๋ฒ์ ์ ๋ณด๋ฅผ ์์ฒญํ  ํ์๊ฐ ์์ ๋๋ง๋ค ๋งค๋ฒ `baseUrl`๋ถํฐ ์ ๋ถ ๊ธฐ์ํด์ฃผ๊ธฐ๋ณด๋ค๋ ๊ณตํต์ ์ธ ์์๋ ๋จผ์  ๊ธฐ์ต์์ผ๋๊ณ  ํน์ ํ ๊ฐ(`id`)๋ง์ผ๋ก ์๋ฒ ์์ฒญ์ ์ํํ๋ ํจ์๋ฅผ ๋ง๋ค์ด๋๋ ๊ฒ์ด ๊ฐ๋ฐ ํจ์จ์ฑ์ด๋ ๊ฐ๋์ฑ ์ธก๋ฉด์์ ๋ ์ข์ ๊ฒ์ด๋ค.
- ์ด๋ฌํ ์ด์ ๋ก ์ต๊ทผ์ ์ฌ๋ฌ ํ๋ ์์ํฌ๋ ๋ผ์ด๋ธ๋ฌ๋ฆฌ ๋ฑ์์ ์ปค๋งํจ์๋ฅผ ๊ด๋ฒ์ํ๊ฒ ์ฌ์ฉํ๊ณ  ์๋ค.
- Flux ์ํคํ์ฒ์ ๊ตฌํ์ฒด ์ค ํ๋์ธ `Redux`์ `middleware`

```javascript
// Redux Middleward 'Logger'
const logger = store => next => action => {
  console.log("dispatching", action);
  console.log("next state", store.getStore());
  return next(action);
};

// Redux Middleward 'thunk'
const thunk = store => next => action => {
  return typeof action === "function"
    ? action(dispatch, store.getState)
    : next(action);
};
```
