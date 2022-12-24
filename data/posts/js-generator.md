---
emoji: 🎈
title: Generator
date: "2022-01-04"
category: Javascript
preview: "제너레이터 함수 - 원하는 만큼 코드 실행을 시작하거나 중지할 수 있는 함수이다. - Genarator 객체를 반환한다. 제너레이터 실행하기 gen.next(value) value: generator function에 전달할 값 - next() 메서드가 호출되면 제너레이터 함수가 yield 문을 만나기 전까지 실행된다. - 또 다시 메서드가 호출되면 진행이 멈췄던 위치에서부터 재실행한다. - value와 done 프로퍼티를 가진 객체를 반환한다. - value 프로퍼티는 yield문이 반환한 값(yielded value)을 갖는다. - done 프로퍼티는 모든 yield 문의 실행 여부를 나타내며 true 혹은 false 값을 갖는다. - done이 true일 경우 value는 undefined 값을 갖는다. - next()를 인자값과 함께 호출할 경우, 진행을 멈췄던 위치의 yield 문을 인자값으로 치환하고 그 위치에서 다시 실행하게 된다."
---

## 제너레이터 함수

- **원하는 만큼 코드 실행을 시작하거나 중지할 수 있는 함수**이다.
- `Genarator` 객체를 반환한다.

```javascript
function* fruitList() {
  yield "Banana";
  yield "Apple";
  yield "Orange";
}
```

- `function*`을 사용하여 함수를 선언함.
- 반환할 값 앞에 `yield` 키워드를 사용함.
- 메서드
  - `Generator.prototype.next()`
  - `Generator.prototype.return()`
  - `Generator.prototype.throw()`

<br/>

## 제너레이터 함수 실행하기

**gen.next(value)**<br/>
**value: 제네레이터 함수에 전달할 값**

- `next()` 메서드가 호출되면 제너레이터 함수가 `yield` 문을 만나기 전까지 실행된다.
- 또 다시 메서드가 호출되면 진행이 멈췄던 위치에서부터 재실행한다.
- `value`와 `done` 프로퍼티를 가진 객체를 반환한다.
  - value 프로퍼티는 `yield`문이 반환한 값(`yielded value`)을 갖는다.
  - done 프로퍼티는 모든 `yield` 문의 실행 여부를 나타내며 `true` 혹은 `false` 값을 갖는다.
  - done이 `true`일 경우 value는 `undefined` 값을 갖는다.

### 예시

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
// generator 함수에 값 전달하기
function* gen() {
  while (true) {
    const value = yield null;
    console.log(value);
  }
}

const g = gen();
// 첫 번째 next() 메서드 호출에 인수를 전달하면 무시됨.
g.next(1); // return { value: null, done: false }
g.next(2); // return { value: null, done: false } // 2 출력
```

<br/>

## 제너레이터 함수 종료하기

**gen.return(value)**<br/>
**value: 반환될 객체의 value 프로퍼티 값**

- `return()` 메서드는 제너레이터 함수를 종료한다.
- `value`와 `done` 프로퍼티를 가진 객체를 반환한다.
  - `done` 프로퍼티 값은 `true`이고, `value` 프로퍼티 값은 전달받은 인수값이다.

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

- 제네레이터 함수를 종료할 때 이미 더 이상 실행될 `yield`문이 없다면 반환된 객체의 `done` 프로퍼티 값은 `true`이고, `value` 프로퍼티 값은 `undefined`이다.

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

## 제너레이터 함수에 에러 발생하기

**gen.throw(exception)**

- Generator 함수에 error를 발생시키고 강제종료시킨다.
- `{value: undefined, done: true}` 반환
- Generator 함수 내에서 `try-catch`문을 이용해 error를 catch할 수 있다.

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
myGenerator.throw("opps"); // return { value: undefined, done: true } // Error: opps 출력
```

<br/>

## 제너레이터와 프로미스 같이 사용하기

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

참고

- [Generator - MDN Web Docs](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Generator)
- [function\* - MDN Web Docs](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/function*)
