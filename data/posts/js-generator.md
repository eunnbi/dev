---
emoji: π
title: Generator
date: "2022-01-04"
category: Javascript
preview: "μ λλ μ΄ν° ν¨μ - μνλ λ§νΌ μ½λ μ€νμ μμνκ±°λ μ€μ§ν  μ μλ ν¨μμ΄λ€. - Genarator κ°μ²΄λ₯Ό λ°ννλ€. μ λλ μ΄ν° μ€ννκΈ° gen.next(value) value: generator functionμ μ λ¬ν  κ° - next() λ©μλκ° νΈμΆλλ©΄ μ λλ μ΄ν° ν¨μκ° yield λ¬Έμ λ§λκΈ° μ κΉμ§ μ€νλλ€. - λ λ€μ λ©μλκ° νΈμΆλλ©΄ μ§νμ΄ λ©μ·λ μμΉμμλΆν° μ¬μ€ννλ€. - valueμ done νλ‘νΌν°λ₯Ό κ°μ§ κ°μ²΄λ₯Ό λ°ννλ€. - value νλ‘νΌν°λ yieldλ¬Έμ΄ λ°νν κ°(yielded value)μ κ°λλ€. - done νλ‘νΌν°λ λͺ¨λ  yield λ¬Έμ μ€ν μ¬λΆλ₯Ό λνλ΄λ©° true νΉμ false κ°μ κ°λλ€. - doneμ΄ trueμΌ κ²½μ° valueλ undefined κ°μ κ°λλ€. - next()λ₯Ό μΈμκ°κ³Ό ν¨κ» νΈμΆν  κ²½μ°, μ§νμ λ©μ·λ μμΉμ yield λ¬Έμ μΈμκ°μΌλ‘ μΉννκ³  κ·Έ μμΉμμ λ€μ μ€ννκ² λλ€."
---

## μ λλ μ΄ν° ν¨μ

- **μνλ λ§νΌ μ½λ μ€νμ μμνκ±°λ μ€μ§ν  μ μλ ν¨μ**μ΄λ€.
- `Genarator` κ°μ²΄λ₯Ό λ°ννλ€.

```javascript
function* fruitList() {
  yield "Banana";
  yield "Apple";
  yield "Orange";
}
```

- `function*`μ μ¬μ©νμ¬ ν¨μλ₯Ό μ μΈν¨.
- λ°νν  κ° μμ `yield` ν€μλλ₯Ό μ¬μ©ν¨.
- λ©μλ
  - `Generator.prototype.next()`
  - `Generator.prototype.return()`
  - `Generator.prototype.throw()`

<br/>

## μ λλ μ΄ν° ν¨μ μ€ννκΈ°

**gen.next(value)**<br/>
**value: μ λ€λ μ΄ν° ν¨μμ μ λ¬ν  κ°**

- `next()` λ©μλκ° νΈμΆλλ©΄ μ λλ μ΄ν° ν¨μκ° `yield` λ¬Έμ λ§λκΈ° μ κΉμ§ μ€νλλ€.
- λ λ€μ λ©μλκ° νΈμΆλλ©΄ μ§νμ΄ λ©μ·λ μμΉμμλΆν° μ¬μ€ννλ€.
- `value`μ `done` νλ‘νΌν°λ₯Ό κ°μ§ κ°μ²΄λ₯Ό λ°ννλ€.
  - value νλ‘νΌν°λ `yield`λ¬Έμ΄ λ°νν κ°(`yielded value`)μ κ°λλ€.
  - done νλ‘νΌν°λ λͺ¨λ  `yield` λ¬Έμ μ€ν μ¬λΆλ₯Ό λνλ΄λ©° `true` νΉμ `false` κ°μ κ°λλ€.
  - doneμ΄ `true`μΌ κ²½μ° valueλ `undefined` κ°μ κ°λλ€.

### μμ

```javascript
function* fruitList() {
  yield "Banana";
  yield "Apple";
  yield "Orange";
}
const fruits = fruitList();

fruits.next(); // return {value: "Banana", done: false}
fruits.next(); // return {value: "Apple", done: false}
fruits.next(); // return {value: "Orange", done: false}
fruits.next(); // return {value: undefined, done: true}
```

```javascript
// generator ν¨μμ κ° μ λ¬νκΈ°
function* gen() {
  while (true) {
    const value = yield null;
    console.log(value);
  }
}

const g = gen();
// μ²« λ²μ§Έ next() λ©μλ νΈμΆμ μΈμλ₯Ό μ λ¬νλ©΄ λ¬΄μλ¨.
g.next(1); // return { value: null, done: false }
g.next(2); // return { value: null, done: false } // 2 μΆλ ₯
```

<br/>

## μ λλ μ΄ν° ν¨μ μ’λ£νκΈ°

**gen.return(value)**<br/>
**value: λ°νλ  κ°μ²΄μ value νλ‘νΌν° κ°**

- `return()` λ©μλλ μ λλ μ΄ν° ν¨μλ₯Ό μ’λ£νλ€.
- `value`μ `done` νλ‘νΌν°λ₯Ό κ°μ§ κ°μ²΄λ₯Ό λ°ννλ€.
  - `done` νλ‘νΌν° κ°μ `true`μ΄κ³ , `value` νλ‘νΌν° κ°μ μ λ¬λ°μ μΈμκ°μ΄λ€.

```javascript
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen();

g.next(); // { value: 1, done: false }
g.return("foo"); // { value: "foo", done: true }
g.next(); // { value: undefined, done: true }
```

- μ λ€λ μ΄ν° ν¨μλ₯Ό μ’λ£ν  λ μ΄λ―Έ λ μ΄μ μ€νλ  `yield`λ¬Έμ΄ μλ€λ©΄ λ°νλ κ°μ²΄μ `done` νλ‘νΌν° κ°μ `true`μ΄κ³ , `value` νλ‘νΌν° κ°μ `undefined`μ΄λ€.

```javascript
function* gen() {
  yield 1;
}
const g = gen();
console.log(g.next()); // return { value: 1, done: false }
console.log(g.next()); // return { value: undefined, done: true }
console.log(g.return(1)); // return { value: undefined, done: true }
```

<br/>

## μ λλ μ΄ν° ν¨μμ μλ¬ λ°μνκΈ°

**gen.throw(exception)**

- Generator ν¨μμ errorλ₯Ό λ°μμν€κ³  κ°μ μ’λ£μν¨λ€.
- `{value: undefined, done: true}` λ°ν
- Generator ν¨μ λ΄μμ `try-catch`λ¬Έμ μ΄μ©ν΄ errorλ₯Ό catchν  μ μλ€.

```javascript
function* gen() {
  try {
    yield "Trying...";
    yield "Trying harder...";
    yield "Trying even harder...";
  } catch (err) {
    console.log("Error: " + err);
  }
}

const myGenrator = gen();
myGenerator.next(); // return { value: "Trying...", done: false }
myGenerator.next(); // return { value: "Trying harder...", done: false }
myGenerator.throw("opps"); // return { value: undefined, done: true } // Error: opps μΆλ ₯
```

<br/>

## μ λλ μ΄ν°μ νλ‘λ―Έμ€ κ°μ΄ μ¬μ©νκΈ°

```javascript
const myPromise = () =>
  new Promise(resolve => {
    resolve("our value is...");
  });

function* gen() {
  let result = "";
  yield myPromise().then(data => {
    result = data;
  });
  yield result + " 2";
}

const asyncFunc = gen();
const val1 = asyncFunc.next();
console.log(val1); // { value: Promise, done: false }
val1.value.then(() => {
  console.log(asyncFunc.next()); // {value: "our value is ...2", done: false}
});
```

<br/>

μ°Έκ³ 

- [Generator - MDN Web Docs](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Generator)
- [function\* - MDN Web Docs](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/function*)
