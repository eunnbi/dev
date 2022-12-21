---
emoji: 🐾
title: 데이터 타입
date: "2021-12-20"
category: Javascript
preview: "자바스크립트는 동적타입언어 - 자료형을 컴파일 시 정하지 않고 런타임 시 결정한다 - 숫자의 경우, 메모리 공간을 확보할 때 정수형인지 부동소수형인지 구분하지 않고 무조건 64비트(8바이트)를 확보한다. - 정수만을 위한 데이터 타입이 없고, 모든 수를 64바이트 실수로 처리한다. Data type - number - string - boolean - null - undefined - Symbol Reference type - object - array - function - date - RegExp - map, weekmap - set, weakset"
---

# 자바스크립트는 동적타입언어

- **자료형을 컴파일 시 정하지 않고 런타임 시 결정한다.**
- 숫자의 경우, 메모리 공간을 확보할 때 정수형인지 부동소수형인지 구분하지 않고 무조건 64비트(8바이트)를 확보한다.
- [정적타입 언어 vs 동적타입 언어](https://www.eunnbi.dev/posts/cs-typed-language)

<br/>

# Data type

## Primitive type

- 원시 자료형
- **number**: 정수만을 위한 데이터 타입이 없고, 모든 수를 64바이트로 처리한다.
  - 부동소수점 숫자 외에도 `+Inifinity`, `-Infinity`, `NaN` 값을 갖는다.
- **string**: `length` 프로퍼티를 갖는 유사배열 객체
- **boolean**: true, false
  - falsy한 값: 0, -0, undefined, null, 빈 문자열, NaN
- **null**: 값이 없음을 나타냄, 의도적으로 변수에 값이 없다는 것을 명시할 때 사용됨.
- **undefined**: 정의되지 않은 값
  - 변수가 선언되었지만 값을 할당받지 않을 때 자바스크립트 엔진에 의헤 `undefined`로 초기화됨.
  - `undefined`를 반환하는 경우
    - 선언되었지만, 값을 대입하지 않은 변수에 접근할 때
    - 존재하지 않는 객체의 프로퍼티에 접근할 때
    - return 문이 없거나 호출되지 않는 함수의 실행 결과
- **symbol**: 고유하고 변경 불가능한 원시 값
  - 주로 충돌 위험이 없는 유일한 객체의 프로퍼티 키를 만들기 위해 사용됨.
  ```js
  Symbol("foo") === Symbol("foo"); // false
  ```

<br/>

## Reference type

- **object**: 원시 타입을 제외한 모든 값이 객체이다.
  - 객체는 property를 갖고, property에는 키와 값이 있다.
  - 키는 string 또는 symbol이고, 값은 모든 자료형이 될 수 있다.
- **array**: 정수 키를 가진 property와 length property를 갖는 객체
- **function**: 일급객체, 다른 객체와 달리 함수는 호출할 수 있다.
  - 변수나 자료구조(배열의 요소나 객체의 속성값)에 할당할 수 있다.
  - 다른 함수의 인자로 전달될 수 있다.
  - 다른 함수의 반환값으로 사용될 수 있다.
- **Date**: 날짜와 시간을 위한 메서드를 제공하는 built-in 객체
  - [Date 객체 - mdn web docs](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date)
- **RegExp**: 정규표현식
  - [RegExp - mdn web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- **Map**: [키, 값] 형태의 값을 가지는 객체
  - 키는 Map 객체에서 고유해야 하며, 값은 변경 가능하다.
  - 키와 값은 모든 자료형이 될 수 있다.
  - [Map - mdn web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- **WeakMap**: `Map`과 비슷한 자료형
  - 원시 자료형을 키로 사용할 수 없다.
  - [WeakMap - mdn web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)
- **Set**: 고유한 값들의 집합
  - 배열 요소의 중복을 제거하는데 사용될 수 있다.
    ```js
    function eliminateDuplicates(items) {
      return [...new Set(items)];
    }
    ```
  - [Set - mdn web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

<br/>

> **리터럴**: 값, 데이터 자체를 말함.
>
> - 숫자 리터럴: 10.5, 1001
> - 문자열 리터럴: "Hello", "World"
> - 불리언 리터럴: true or false
> - null 리터럴: null
> - undefined 리터럴: undefined
> - 객체 리터럴: { name: "Lee", gender: "male" }
> - 배열 리터럴: [1, 2, 3]

> **변수 선언과 데이터 할당**
>
> - 변수: 데이터를 저장하는 임시 기억 공간
> - 메모리에는 변수 영역과 데이터 영역이 있다.
> - `const a = 'abc';`
> - 변수 영역에 변수 a를 위한 공간 확보, 식별자 저장
> - 그 공간에 자동적으로 undefined 할당
> - 데이터 영역의 빈 공간에 문자열 'abc' 저장
> - 문자열 'abc'가 저장된 메모리의 시작 주소를 변수 a의 메모리 공간에 복사하여 저장

<br/>

## 기본 자료형과 참조 자료형의 차이점

### 💡 불변값과 가변값

#### 불변값

- 기본형은 불변값 `immutable value`이다.
- 이때 불변하다는 것은 **메모리 공간 영역에서의 변경이 불가능**하다는 것이다. 재할당은 가능하다.

```javascript
let str = "Hello";
str = "world";
```

- 먼저 메모리의 데이터 영역에 문자열 'Hello’가 생성되고 식별자(변수명) str의 메모리 공간에 문자열 ‘Hello’가 저장된 메모리의 주소를 저장한다.
- 그리고 다음 코드가 실행되면 이전에 생성된 문자열 ‘Hello’을 수정하는 것이 아니라 새로운 문자열 ‘world’를 메모리에 생성하고 식별자 str의 메모리 공간에 시작주소를 저장한다.
- 이때 문자열 ‘Hello’와 ‘world’는 모두 메모리에 존재하고 있다. 변수 str은 문자열 ‘Hello’를 가리키고 있다가 문자열 ‘world’를 가리키도록 변경되었을 뿐이다.
- **즉, 기본 자료형은 데이터 영역에 메모리 공간이 한 번 생성되면 그 값은 바뀌지 않는다.**

#### 가변값

- 참조형은 가변값 `mutable value`이다.
- 기본 자료형과 달리 `property` 영역이 별도로 존재한다.
- **프로퍼티의 값은 얼마든지 바뀔 수 있기 때문에** 참조형 데이터는 불변하지 않다.

```javascript
const obj1 = { c: 10, d: "ddd" };
const obj2 = obj1; // obj2는 obj1과 같은 메모리 주소 참조
obj2.c = 20;
console.log(obj2.c); // 20
console.log(obj1.c); // 20
// obj1과 obj2가 참조하고 있는 메모리의 주소가 같기 때문에 같은 프로퍼티 값을 같는다.
```

```javascript
const obj1 = { c: 10, d: "ddd" };
const obj2 = obj1; // // obj2는 obj1과 같은 메모리 주소 참조
obj2 = { c: 20, d: "ddd" }; // 새로운 객체를 생성하여 변수 obj2에 대입
// obj2는 새로운 객체의 시작 주소값을 저장
// 변수 obj1와 obj2는 서로 다른 메모리 주소를 참조
```

- '가변'은 참조형 데이터 자체를 변경하는 경우가 아니라 **그 내부의 프로퍼티를 변경할 때만** 성립된다.

<br/>

### 💡 Pass by Value & Pass by Reference

- 데이터 타입에 따라 함수에 인수를 전달하는 두가지 방법

#### Pass by Value (값의 복사에 의한 전달)

- 인자로 넘기는 값을 복사하여 함수에 전달하는 방식이다.
- **기본형 데이터를 인자로 전달할 때** 일어난다.
- 값을 복사하여 전달했기 때문에 함수 실행 도중 인자의 값을 바꾸더라도 변경 사항이 원래의 데이터에 적용되지 않는다.

```js
const myInt = 1;

function increase(value) {
  return (value += 1);
}

console.log(myInt); // 1
console.log(increase(myInt)); // 2
console.log(myInt); // 1
```

#### Pass by Reference (참조에 의한 전달)

- 인자로 넘기는 값의 메모리 주소를 함수에 전달한다.
- **참조형 데이터를 인자로 전달할 때** 일어난다.
- 메모리 상의 주소를 전달했기 때문에 함수 실행 도중 해당 값에 대한 수정 사항이 원래의 데이터에 그대로 적용된다.

```js
const myCar = {
  maker: "bmw",
  color: "red"
};

function changeColor(car) {
  car.color = "blue";
}

console.log(myCar); // {maker : "bmw", color : "red"}
changeColor(myCar);
console.log(myCar); // {maker : "bmw", color : "blue"}
```

<br/>

## 빈 객체 생성 & 새 속성 추가

```js
const car = new Object();
const car = {};
car.color = "red";
console.log(car); // {color : "red"}
```

- 변수를 키와 값으로 하는 객체 만들기

```js
const name = "Alberto";
const surname = "Montalesi";
const age = 25;
const nationality = "Italian";

const person = {
  name,
  surname,
  age,
  nationality
};
// {name: "Alberto", surname: "Montalesi", age: 25, nationality: "Italian"}
```

- 객체의 프로퍼티 값으로 함수 추가하기

```js
// 1.
const person = {
  name: "Alberto",
  greet: function () {
    console.log("Hello");
  }
};

// 2.
const person = {
  name: "Alberto",
  greet() {
    console.log("Hello");
  }
};
person.greet(); // Hello

// 3. 화살표 함수
const person1 = {
  greet: () => console.log("Hello")
};
person1.greet(); //Hello
```

- 객체의 프로퍼티 키를 변수로 정의하기

```js
const name = "myname";
const person = {
  [name]: "Alberto"
};
console.log(person.myname); // Alberto
```

<br/>

## 프로퍼티 접근 및 삭제

- 점 표기법, 대괄호 표기법

```js
const car = {
	wheels : 4,
	color : "red",
	"goes fast" : true,
};

console.log(Object.keys(car)); // ["wheels", "color", "goes fase"]
console.log(Object.values(obj)); // [4, "red", true]

console.log(car.wheels); // 4
console.log(car['color']); // "red"
console.log(car.goes fast); // syntax error
console.log(car['goes fast']); // true

const key = "wheels";
console.log(car[key]); // 4
```

- 프로퍼티 삭제

```js
const cars = {
	ferrari: "california",
	porshe: "911";
	bugatti: "veyron",
};

delete cars.porshe;
console.log(cars.porshe); // undefined (객체에 존재하지 않는 프로퍼티 참조)
```

<br/>

## 객체 복사하기

### 얕은 복사

```javascript
const copyObject = function (target) {
  let result = {};
  for (let prop in target) {
    result[prop] = target[prop];
  }
  return result;
};
```

- 기존 객체의 프로퍼티와 값들을 복사해서 새로운 객체를 만든다.
- 하지만 **값이 참조형 데이터인 프로퍼티를 복사할 때 주소값만 복사하게 된다.**
- 따라서, 만약 객체의 어떤 프로퍼티의 값이 참조형 데이터이고, 그 값의 프로퍼티 값을 변경하면 원본 객체도 이에 따라 변경된다.

### 깊은 복사

- 객체의 프로퍼티 중에서 그 값이 기본형 데이터일 경우에 그대로 복사하고, **참조형 데이터일 경우 다시 내부의 프로퍼티의 값들을 복사한다.**

```javascript
const copyObjectDeep = function(target){
	let result = {};
    if (typeof target === 'object' && target !=== null){
    	for (let prop in target){
    	result[prop] = copyObjectDeep(target[prop]);
    }
    else{
    	result = target;
    }
    return result;
}
```

<br/>

## 심벌과 객체

- 심벌을 이용하여 **고유한 프로퍼티 키**를 갖는 객체를 만들 수 있다.

```js
const office = {
  [Symbol("Tom")]: "CEO",
  [Symbol("Mark")]: "CTO",
  [Symbol("Mark")]: "CIO"
};
for (const person in office) {
  console.log(person); // undefined. (for in으로 심벌에 대해 루프를 돌 수 없다.)
}
const symbols = Objects.getOwnPropertySymbols(office); //객체 프로퍼티 키의 배열 얻음
console.log(symbols);
// 0 : Symbol(Tom)
// 1 : Symbol(Mark)
// 2 : Symbol(Mark)
// length : 3

const symbols = Objects.getOwnPropertySymbols(office);
const value = symbols.map(symbol => office[symbol]); // 프로퍼티 값에 접근
console.log(value);
// 0: "CEO"
// 1: "CTO"
// 2: "CIO"
// length : 3
```

> **참고: for 루프**
>
> 1. `for of`
>
> ```js
> // 배열은 iterable 객체
> const fruits = ["apple", "banana", "orange"];
> for (const fruit of fruits) {
>   console.log(fruit);
> }
> // apple
> // banana
> // orange
> ```
>
> ```js
> // Object는 iterable 객체가 아님.
> const car = {
>   marker: "BMW",
>   color: "red",
>   year: "2010"
> };
>
> // Object.keys() -> 객체의 모든 키를 가져온 후, 키에 대해 루프 수행
> for (const prop of Object.keys(car)) {
>   const value = car[prop];
>   console.log(prop, value);
> }
> // marker BMW
> // color red
> // year 2010
> ```
>
> 2. `for in` 루프
>
> ```js
> const car = {
>   marker: "BMW",
>   color: "red",
>   year: "2010"
> };
>
> for (const prop in car) {
>   console.log(prop, car[prop]);
> }
> // marker BMW
> // color red
> // year 2010
> ```
>
> - 순서 없이 객체의 모든 열거 가능한 속성을 반복함.
> - 반복 중에는 객체의 속성을 추가, 수정, 삭제하지 않는 것이 좋음.
>
> ```js
> const list = [4, 5, 6];
>
> // for...in은 키 반환
> for (const i in list) {
>   console.log(i); // "0", "1", "2",
> }
>
> // for...of는 값을 반환
> for (const i of list) {
>   console.log(i); // 4, 5, 6
> }
> ```

<br/>

## 문자열 메서드

- [String - mdn web docs](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String#%EC%9D%B8%EC%8A%A4%ED%84%B4%EC%8A%A4_%EB%A9%94%EC%84%9C%EB%93%9C)

```js
const str = "this is a short sentence";
str.indexOf("short"); // 10
```

```js
const str = "pizza, orange, cereals";
str.slice(0, 5); // pizza (beginIndex, endIndex (생략 가능))
```

```js
const str = "i ate an apple";
str.toUpperCase(); // I ATE AN APPLE
```

```js
const str = "I ATE AN APPLE";
str.toLowerCase(); // i ate an apple
```

```js
const code = "ABCDEFG";
code.startsWith("ABB"); // false
code.startsWith("abc"); // false (대소문자 구별)
code.startsWith("ABC"); // true
code.startsWith("DEF", 3); // true (시작 인덱스: 3)
```

```js
let code = "ABCDEF";
code.endsWith("DDD"); // false
code.endsWith("def"); // false (대소문자 구별)
code.endsWith("DEF"); // true

code = "ABCDEFGHI";
code.endsWith("EF", 6); // true (검사길이: 6, 첫 6개 문자인 ABCDEF만을 고려)
```

```js
const code = "ABCDEF";
code.includes("ABB"); // false
code.includes("abc"); // false (대소문자 구별)
code.includes("CDE"); // true
```

```js
const hello = "Hi";
console.log(hello.repeat(10)); // HiHiHiHiHiHiHiHiHiHi
```

```js
const str = "Na";
const bat = "Batman";
const batman = `${str.repeat(8)} ${bat}`; // 템플릿 리터럴
console.log(batman); // NaNaNaNaNaNaNaNa Batman
```

<br/>

## 배열 메서드

- [Array - mdn web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

- `Array.from()` : 유사 배열 객체나 반복 가능한 객체를 얕게 복사해 새로운 Array 객체를 만든다.

```js
console.log(Array.from("foo")); // ["f", "o", "o"]
console.log(Array.from([1, 2, 3], x => x + x)); // [2, 4, 6]
```

- `Array.of()` : 전달받은 모든 인수로 배열 생성

```js
console.log(Array.of(1, 2, 3, 4, 5)); // [1, 2, 3, 4, 5]
```

- `Array.find()`: 인자로 전달받은 판별 함수를 만족하는 첫번째 요소의 값을 반환한다. 그런 요소가 없다면 `undefined`를 반환한다.

```js
const array = [1, 2, 3, 4, 5];

// 배열의 원소 중 3보다 큰 첫 원소를 반환
let found = array.find(e => e > 3);
console.log(found); // 4
```

- `Array.findIndex()`: 인자로 전달받은 판별 함수를 만족하는 첫번째 요소의 인덱스 값을 반환한다. 그런 요소가 없다면 `-1`를 반환한다.

```js
const greetings = ["hello", "hi", "byebye", "goodbye", "hi"];

const foundIndex = greetings.findIndex(e => e === "hi");
console.log(foundIndex); // 1
```

- `Array.some()`, `Array.every()`

```js
const array = [1, 2, 3, 4, 5, 6, 1, 2, 3, 1];
console.log(array.some(e => e > 2)); // true
console.(array.every(e => e > 2)); // false
```

- `Array.push()`, `Array.unshift()`, `Array.pop()`, `Array.shift()`

```js
const fruitBasket = ["apple", "banana", "orange"];

// 배열의 끝에 새 값을 추가
fruitBasket.push("pear");

// 배열의 시작에 새 값을 추가
fruitBasket.unshift("melon");

// 배열의 끝에서 값 하나 제거
fruitBasket.pop();

//배열의 시작에서 값 하나 제거
fruitBasket.shift();
```

<br/>

# typeof 연산자

- 피연산자의 자료형을 나타내는 문자열을 반환한다.
- `undefined`, `null`, `boolean`, `number`, `string`, `symbol`, `function`, `object`

```js
// number
typeof 37 === "number";
typeof 3.14 === "number";
typeof Math.LN2 === "number";
typeof Infinity === "number";
typeof NaN === "number";
typeof Number(1) === "number";

// string
typeof "" === "string";
typeof "bla" === "string";
typeof typeof 1 === "string";
typeof String("abc") === "string";

// boolean
typeof true === "boolean";
typeof false === "boolean";
typeof Boolean(true) === "boolean";

// symbol
typeof Symbol() === "symbol";
typeof Symbol("foo") === "symbol";
typeof Symbol.iterator === "symbol";

// undefined
typeof undefined === "undefined";
typeof declaredButUndefinedVariable === "undefined";
typeof undeclaredVariable === "undefined";

// object
typeof { a: 1 } === "object";
typeof [1, 2, 4] === "object";
typeof new Date() === "object";

// function
typeof function () {} === "function";
typeof class C {} === "function";
```
