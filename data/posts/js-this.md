---
emoji: 👉
title: this
date: "2021-12-24"
category: Javascript
preview: "- this는 기본적으로 실행 컨텍스트가 생성될 때 결정된다. - 실행 컨텍스트는 함수가 호출될 때 생성되기 때문에 this는 함수를 호출할 때 결정된다. - 따라서 함수를 어떤 방식으로 호출하느냐에 따라 this가 달라진다. 전역 공간에서의 this - 실행 컨텍스트에는 전역 컨텍스트도 있으며, 전역 컨텍스트에서의 this는 전역 객체를 가리킨다. - 이때 브라우저 환경에서의 전역 객체는 window이며, Node.js 환경에서는 global이다. 참고: 전역 변수는 전역 객체의 프로퍼티이고, 전역 함수는 전역 객체의 메서드이다. 메서드로서 호출할 때 함수 vs 메서드 - 함수와 메서드의 차이는 독립성에 있다. - 함수는 독립적인 기능을 수행하는 반면, 메서드는 자신을 호출한 객체에 대한 동작을 수행한다. - 어떤 함수를 객체의 프로퍼티에 할당한다고 해서 그 자체로 무조건 메서드가 되는 것이 아니라 객체의 메서드로서 호출할 경우에만 메서드로 동작하고, 그렇지 않으면 함수로 동작한다. 같은 함수라도 메서도로 호출하느냐, 함수로 호출하느냐에 따라 내부 this가 달라진다."
---

- `this`는 기본적으로 실행 컨텍스트가 생성될 때 결정된다.
- 실행 컨텍스트는 함수가 호출될 때 생성되기 때문에` this`는 함수를 호출할 때 결정된다.
- 따라서 **함수를 어떤 방식으로 호출**하느냐에 따라 `this`가 달라진다.

<br/>

## 전역 공간에서의 this

- 실행 컨텍스트에는 전역 컨텍스트도 있으며, 전역 컨텍스트에서의 `this`는 **전역 객체**를 가리킨다.
  - 이때 브라우저 환경에서의 전역 객체는 `window`이며, Node.js 환경에서는 `global`이다.

> 참고: 전역 변수는 전역 객체의 프로퍼티이고, 전역 함수는 전역 객체의 메서드이다.

<br/>

## 메서드로서 호출할 때

#### 함수 vs 메서드

- 함수와 메서드의 차이는 **독립성**에 있다.
- 함수는 독립적인 기능을 수행하는 반면, 메서드는 자신을 호출한 객체에 대한 동작을 수행한다.
- 어떤 함수를 객체의 프로퍼티에 할당한다고 해서 그 자체로 무조건 메서드가 되는 것이 아니라 객체의 메서드로서 호출할 경우에만 메서드로 동작하고, 그렇지 않으면 함수로 동작한다.

> 같은 함수라도 메서드로 호출하느냐, 함수로 호출하느냐에 따라 내부 this가 달라진다.

#### 메서드 내부에서의 this

- **자신을 호출한 객체**를 가리킨다.

<br/>

## 함수로서 호출할 때

#### 함수 내부에서의 this

- 어떤 함수를 함수로서 호출하는 경우에는 `this`가 **지정되지 않는다**.
- 만약 실행 컨텍스트를 활성화할 당시에 `this`가 지정되지 않는 경우에 `this`는 **전역객체**를 가리킨다.

#### 메서드의 내부 함수

- 메서드의 내부 함수 역시 내부 함수를 객체의 메서드로서 호출하느냐, 함수로서 호출하느냐에 따라 `this`가 달라진다.
- 메서드로 호출하는 경우에는 자신을 호출한 객체가 `this`가 될 것이고, 함수로 호출하는 경우에는 전역객체가 `this`가 될 것이다.

<br/>

## this 상속받기

- 호출 주체가 없을 때는 자동적으로 전역 객체를 바인딩하지 않고 상위 스코프에서 `this`를 상속받아 사용하도록 하는 것이 자연스럽다.
- 변수를 검색하면 상위 스코프의 `L.E`에서 찾고 없으면 또 상위 스코프를 탐색하듯이, `this` 역시 현재 컨텍스트에 바인딩된 대상이 없으면 상위 스코프의 `this`를 바라보도록 하는 것이 설득력이 있는 방식이다.

### 변수 이용

```js
const value = 1; // 전역변수는 전역 객체의 프로퍼티
const obj = {
  value: 2,
  outer: function () {
    console.log(this, this.value);

    const innerFunc1 = function () {
      console.log(this, this.value);
    };
    innerFunc1();

    const self = this;
    const innerFunc2 = function () {
      console.log(self, self.value);
    };
    innerFunc2();
  }
};
obj.outer(); // 메서드로 호출됨.
// outer 객체, 2
// 전역 객체, 1
// outer 객체, 2
```

- innerFunc1 함수가 호출될 때 `this`는 전역객체를 가리킨다.
- innerFunc2 함수가 호출될 때 `self` 변수는 Scope chain을 따라 `outer`의 `Lexical Environment`에서 발견한다.
- `self` 변수에는 `outer` 함수에서의 `this`가 할당되었다.
- `outer` 함수는 `obj` 객체의 메서드로 호출되어서 `outer` 함수 내부의 `this`는 `obj` 객체를 가리킨다.
- 💡 상위 스코프의 `this`를 변수에 저장하여 그 변수를 내부 함수에서 사용하는 방법

### 화살표 함수 (ES6)

- ES6에서는 함수 내부에서 `this`가 전역객체를 바라보는 문제를 보완하고자, **this를 바인딩하지 않는 화살표 함수**를 새로 도입했다.
- 💡 화살표 함수가 호출되어 실행 컨텍스트가 생성될 때 `this` 바인딩 과정 자체가 빠지게 되어 상위 스코프의 `this`를 그대로 활용할 수 있다.
- 화살표 함수 내부에 `this`가 존재하지 않으므로, `this`에 접근하고자 하면 Scope Chain 상 가장 가까운 `this`에 접근하게 된다.

```js
const value = 1; // 전역변수는 전역 객체의 프로퍼티
const obj = {
  value: 2,
  outer: function () {
    console.log(this, this.value);

    const innerFunc1 = function () {
      console.log(this, this.value);
    };
    innerFunc1();

    const innerFunc2 = () => {
      console.log(this, this.value);
    };
    innerFunc2();
  }
};
obj.outer(); // 메서드로 호출됨.
// outer 객체, 2
// 전역 객체, 1
// outer 객체, 2
```

<br/>

> **화살표 함수를 사용해서는 안되는 경우**
>
> 1. **메서드**: 화살표 함수에서는 `this`가 바인딩되지 않으므로 화살표 함수 내부의 `this`는 가장 가까운 상위 컨텍스트의 `this`로 사용된다.
>
> ```js
> // Bad
> const person = {
>   name: "Lee",
>   sayHi: () => console.log(`Hi ${this.name}`)
> };
> person.sayHi(); // Hi undefined
> // 메서드를 호출했지만 메서드는 화살표 함수이기 때문에, 가장 가까운 상위 컨텍스트의 this, 즉 전역 객체를 메서드 내부 this로 사용된다.
> ```
>
> ```js
> // Good
> const person = {
>   name: "Lee",
>   sayHi() {
>     console.log(`Hi ${this.name}`);
>   }
> };
> person.sayHi(); // Hi Lee
> ```
>
> 2.  **생성자 함수**
>
> - 생성자 함수는 `prototype` 프로퍼티를 가지며 `prototype` 객체 내부에 있는 `constructor` 프로퍼티를 사용한다.
> - 하지만 화살표 함수는 `prototype` 프로퍼티를 갖고 있지 않다.
>
> ```js
> const Foo = () => {};
>
> // 화살표 함수에는 prototype 프로퍼티가 없다
> console.log(Foo.hasOwnProperty("prototype")); // false
> const foo = new Foo(); // TypeError: Foo is not a constructor
> ```
>
> 3. **addEventListener 함수의 콜백 함수**: addEventListener 함수의 콜백 함수를 화살표 함수로 정의하면 `this`가 상위 컨택스트인 전역 객체 `window`를 가리킨다.
>
> ```js
> // Bad
> const button = document.getElementById("myButton");
> button.addEventListener("click", () => {
>   console.log(this === window); // true
> });
> ```
>
> ```js
> // Good
> const button = document.getElementById("myButton");
> button.addEventListener("click", function () {
>   console.log(this === button); // true
>   this.innerHTML = "Clicked button";
> });
> ```

<br/>

> **화살표 함수 vs 일반함수 : arguments 프로퍼티**
>
> - 화살표 함수는 `this`뿐만 아니라 `arguments` 객체를 바인딩하지 않는다. 대신에 `rest parameter`(레스트 매개변수)를 이용한다.
>
> ```js
> // 일반 함수
> function example() {
>   console.log(arguments[0]);
> }
> example(1, 2, 3); // 1
> ```
>
> ```js
> // 화살표 함수 Bad
> const showWinner = () => {
>   const winner = arguments[0];
>   console.log(`${winner} was the winner`);
> };
> showWinner("Usain Bolt", "Justin Gatlin"); //ReferenceError
> ```
>
> ```js
> // 화살표 함수 Good (레스트 매개변수)
> const showWinner = (...args) => {
>   const winner = args[0];
>   console.log(`${winner} was the winner`);
> };
> showWinner("Usain Bolt", "Justin Gatlin"); // Usain Bolt was the winner
> ```

<br/>

## 콜백함수 호출

- 콜백 함수 내부에서의 `this`는 **해당 콜백함수의 제어권을 넘겨받은 함수(메서드)가 정의한 바에 따르며, 정의하지 않은 경우에는 전역객체를 참조**한다.
  - `setTimeout` 함수와 `forEach` 메서드는 그 내부에서 콜백함수를 호출할 때 대상이 될 `this`를 지정하지 않는다.
  - `addEventListener` 메서드는 콜백함수를 호출할 때 `this`를 상속하도록 정의되어 있다.

<br/>

## 생성자 함수

#### 생성자 함수란?

- 여러 개의 동일한 프로퍼티를 가진 객체를 생성하는 데 사용하는 함수이다.
- 생성자: `class`
- 생성자를 통해 만든 객체: `instance`
- 생성자는 **구체적인 인스턴스를 만들기 위한 일종의 틀**이다.
  - 이 틀에는 해당 클래스의 공통 속성들이 미리 준비돼 있고, 여기에 각 속성들에 대한 값을 할당하여 개별 인스턴스를 만들 수 있다.
- 자바스크립트는 함수에 생성자로서의 역할을 함께 부여했다.
  - `new` 명령어와 함께 함수를 호출하면 해당 함수가 *생성자로서 동작*하게 된다.

#### 생성자 함수 내부에서의 this

- 어떤 함수가 생성자 함수로 호출된 경우 내부에서의 `this`는 **곧 생성될 인스턴스**가 된다.

<br/>

## 명시적으로 this를 바인딩하는 방법

### call 메서드

`Function.prototype.call(thisArg[, arg1[, arg2[, ...]]])`

- 첫 번째 인자를 this로 바인딩하고, 이후의 인자들을 호출할 함수의 매개변수로 한다.

### apply 메서드

`Function.prototype.apply(thisArg[, argsArray])`

- 첫 번째 인자를 this로 바인딩하고, 두 번째 인자를 배열로 받아 그 배열의 요소들을 호출할 함수의 매개변수로 지정한다.

> 화살표 함수에서는 `this`가 바인딩되지 않기 때문에, `call` 또는 `apply` 메서드를 사용해도 `this`는 무시되고, 인자만 전달할 수 있다.

```js
const value = 1; // 전역변수는 전역 객체의 프로퍼티
const obj = {
  value: 2,
  outer: function () {
    console.log(this, this.value);

    const innerFunc1 = function () {
      console.log(this, this.value);
    };
    innerFunc1();

    const innerFunc2 = function () {
      console.log(this, this.value);
    };
    innerFunc2.apply(this);
    // innerFunc1.call(this);
  }
};
obj.outer(); // 메서드로 호출됨.
// outer 객체, 2
// 전역 객체, 1
// outer 객체, 2
```

<br/>

### call / apply 메서드의 활용

#### 1. 유사배열객체에 배열 메서드 적용

- 유사배열객체: 키가 0 또는 양의 정수인 프로퍼티가 존재하고, length 프로퍼티의 값이 0 또는 양수인 객체 (`array-like-object`)
- 배열의 구조와 유사한 유사배열객체의 경우 call 또는 apply 메서드를 이용해서 배열 메서드를 적용할 수 있다.
- **첫 번째 인자로 유사배열객체 지정**

```js
function convertArgsToArray() {
  // arguments라는 유사 배열 객체를 배열로 변환
  const arr = Array.prototype.slice.apply(arguments);
  console.log(arr);
}
convertArgsToArray(1, 2, 3); // [1, 2, 3]
```

- 문자열에 대해서도 call / apply 메서드를 이용해 배열 메서드 적용 가능. 하지만, 문자열의 경우 `length` 프로퍼티가 읽기 전용이기 때문에 원문 문자열에 변경을 가하는 메서드는 에러를 던진다.
- `Array.from()` : ES6에서는 유사배열객체 또는 순회 가능한 모든 종류의 데이터 타입을 배열로 전환하는 메서드 도입

```js
function convertArgsToArray() {
  // arguments라는 유사 배열 객체를 배열로 변환
  const arr = Array.from(arguments);
  console.log(arr);
}
convertArgsToArray(1, 2, 3); // [1, 2, 3]

console.log(Array.from("foo")); // ["f", "o", "o"]
```

#### 2. 생성자 내부에서 다른 생성자 호출

- **생성자 내부에 다른 생성자와 공통된 내용이 있을 경우** call 또는 apply를 이용해 다른 생성자를 호출하면 간단하게 코드 반복을 줄일 수 있다.

```js
function Car(maker, color) {
  // 만약 this를 명시적으로 바인딩하지 않으면 전역 객체를 가리킴.
  this.carMaker = maker;
  this.carColor = color;
}

function myCar(maker, color) {
  Car.call(this, maker, color); // this : 생성되는 인스턴스 (여기서는 myNewCar)
  // Car.apply(this, [maker, color]);
  this.age = 5;
}

const myNewCar = new myCar("bmw", "red");
console.log(myNewCar.carMaker); // bmw
console.log(myNewCar.carColor); // red
```

#### 3. 여러 인수를 묶어 하나의 배열로 전달하고 싶을 때

- 여러 개의 인수를 받는 메서드에게 하나의 배열로 인수를 전달하고 싶을 때 apply 메서드를 사용하면 좋다.
- 참고로 ES6에서는 `spread operator`(스프레드 연산자)를 이용하면 apply를 적용하는 것보다 더욱 간편하게 작성할 수 있다.

```js
// apply 메서드 이용
const array = ["a", "b"];
const elements = [0, 1, 2];
array.push.apply(array, elements);
console.log(array); // ["a", "b", 0, 1, 2]
```

```js
// spread operator
const array = ["a", "b"];
const elements = [0, 1, 2];
array.push(...elements);
console.log(array); // ["a", "b", 0, 1, 2]
```

<br/>

> **참고: 스프레드 연산자**
>
> 1. 배열의 결합
>
> ```js
> const veggie = ["tomato", "cucumber", "beans"];
> const meat = ["pork", "beef", "chicken"];
> const menu = [...veggie, "pasta", ...meat];
> console.log(menu); // ["tomato", "cucumber", "beans", "pasta", "pork", "beef", "chicken"]
> ```
>
> 2. 배열의 복사
>
> ```js
> const veggie = ["tomato", "cucumber", "beans"];
> const newVeggie = veggie; // 주소값 복사
> veggie.push("peas");
> console.log(veggie); // ["tomato", "cucumber", "beans", "peas"]
> console.log(newVeggie); // ["tomato", "cucumber", "beans", "peas"]
> ```
>
> ```js
> const veggie = ["tomato", "cucumber", "beans"];
> const newVeggie = [...veggie]; // 스프레드 연산자 이용하여 배열 복사
> veggie.push("peas");
> console.log(veggie); // ["tomato", "cucumber", "beans", "peas"]
> console.log(newVeggie); // ["tomato", "cucumber", "beans"]
> ```
>
> 3. 함수
>
> ```js
> function doStuff(x, y, z) {
>   console.log(x + y + z);
> }
> const args = [0, 1, 2];
> doStuff(...args); // 3 (스프레트 연산자 이용)
> ```
>
> ```js
> function greet(first, last) {
>   console.log(`Hello ${first} ${last}`);
> }
> const name = ["Alberto", "Montalesi"];
> greet(...name); // Hello Alberto Montalesi
> ```
>
> 4. 객체의 얕은 복사
>
> ```js
> const person = {
>   name: "Alberto",
>   surname: "Montalesi",
>   age: 25
> };
>
> const clone = { ...person }; // 복사
> console.log(clone); // {name: "Alberto", surname: "Montalesi", age: 25}
> ```
>
> **cf) 레스트 매개변수**
>
> ```js
> // 스프레드는 배열이나 객체를 '확장'하는 반면, 레스트는 여러 원소나 프로퍼티를 하나의 배열이나 객체로 '압축'한다.
> const runners = ["Tom", "Paul", "Mark", "Luke"];
> const [first, second, ...losers] = runners;
> console.log(losers); // ["Mark", "Luke"]
> console.log(...losers); // Mark Luke
> ```

<br/>

### bind 메서드

`Function.prototype.bind(thisArg[, arg1[, arg2[, ...]]])`

- `bind` 메서드는 `call`과 비슷하지만, 함수를 호출하지 않고 넘겨받은 `this` 및 인수들을 바탕으로 새로운 함수를 반환한다.
- 즉, bind 메서드는 **함수에 this를 미리 적용**하고 **부분 적용 함수를 구현**한다.
- bind 메서드를 적용해서 새로 만든 함수의 name 프로퍼티에는 `bound`라는 접두어가 붙는다.

<br/>

### 별도로 인자로 this를 받는 경우

- 콜백 함수를 인자로 받는 메서드 중 일부는 추가로 this로 지정할 객체(`thisArg`)를 인자로 지정할 수 있는 경우가 있다.

```
Array.prototype.forEach(callback,[, thisArg])
Array.prototype.map(callback,[, thisArg])
Array.prototype.filter(callback,[, thisArg])
Array.prototype.some(callback,[, thisArg])
Array.prototype.every(callback,[, thisArg])
Array.prototype.find(callback,[, thisArg])
Array.prototype.findIndex(callback,[, thisArg])
Array.prototype.flatMap(callback,[, thisArg])
Array.prototype.from(arrayLike[, callback,[, thisArg]])
Set.prototype.forEach(callback,[, thisArg])
Map.prototype.forEach(callback,[, thisArg])
```

<br/>

## 정리

- 전역 공간에서의 this는 전역객체 (브라우저에서는 window, Node.js에서는 global)를 참조한다.
- 어떤 함수를 메서드로 호출한 경우 this는 메서드를 호출한 객체를 참조한다.
- 어떤 함수를 함수로서 호출한 경우 this는 전역객체를 참조한다. 메서드의 내부함수에서도 동일함.
- 상위 스코프의 this를 변수에 저장해서 내부 함수에서 사용하거나 this를 바인딩하지 않는 화살표를 사용하여 가장 가까운 상위 컨텍스트의 this를 상속받아 사용하도록 할 수 있다.
- 콜백함수 내부에서의 this는 해당 콜백함수의 제어권을 넘겨받은 함수나 메서드가 정의한 바에 따르며, 정의하지 않은 경우에 전역객체를 참조한다.
- 생성자 함수에서의 this는 생성될 인스턴스를 참조한다.
- call, apply 메서드는 this를 명시적으로 지정하면서 함수 또는 메서드를 호출한다.
- bind 메서드는 this 및 함수에 넘길 인수를 일부 지정해서 새로운 함수를 반환한다.
- 요소를 순회하면서 콜백 함수를 반복 호출하는 내용의 일부 메서드는 별도의 인자로 this를 받기도 한다.
