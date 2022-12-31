---
emoji: 🧩
title: 프로토타입
date: "2022-01-06"
category: Javascript
preview: "자바스크립트는 프로트타입 기반 언어이다. 프로토타입 도식 constructor, prototype, instance 어떤 생성자 함수(Constructor)를 new 연산자와 함께 호출하면 생성자 함수에 정의된 내용을 바탕으로 새로운 인스턴스(instance)가 생성된다. 이때 instance에는 __proto__라는 프로퍼티가 자동으로 부여되는데, 이 프로퍼티는 생성자 함수의 prototype 속성을 참조한다. prototype는 객체이고 이를 참조하는 __proto__ 역시 객체이다. prototype 객체에는 instance가 사용할 메서드가 있다. 그러면 instance에서도 __proto__ 프로퍼티를 통해 이 메서드에 접근할 수 있다. 💡 자바스크립트는 함수에 자동으로 prototype 속성을 부여한다. 함수를 new 연산자와 함께 생성자 함수(Constructor)로 호출하여 인스턴스(instance)를 생성한다. 그리고 인스턴스에 자동으로 __proto__ 프로퍼티를 부여한다. __proto__ 프로퍼티는 생성자 함수의 prototype을 참조한다. prototype 속성은 객체로 인스턴스에서 사용한 메서드가 있다. 💡 __proto__프로퍼티는 생략 가능한 프로퍼티이기 때문에, 생성자 함수의 prototype에 어떤 메서드나 속성이 있다면 인스턴스에서도 마치 자신의 것처럼 해당 메서드나 속성에 접근할 수 있다."
---

> 자바스크립트는 프로트타입 기반 언어이다.

# 프로토타입 도식

![Prototype Schematic](1.png)

## constructor, prototype, instance

```js
const instance = new Constructor();
```

- 어떤 생성자 함수(Constructor)를 new 연산자와 함께 호출하면 생성자 함수에 정의된 내용을 바탕으로 새로운 인스턴스(instance)가 생성된다.
- 이때 instance에는 `__proto__`라는 프로퍼티가 자동으로 부여되는데, 이 프로퍼티는 생성자 함수의 `prototype` 속성을 참조한다.
- prototype는 객체이고 이를 참조하는 `__proto__` 역시 객체이다.
- prototype 객체에는 instance가 사용할 메서드가 있다.
- 그러면 instance에서도 `__proto__` 프로퍼티를 통해 이 메서드에 접근할 수 있다.

**예시**

```javascript
const Person = function (name) {
  this.name = name;
};
Person.prototype.getName = function () {
  return this.name;
};

const suzi = new Person("Suzi");
suzi.__proto__.getName(); // return undefined
Person.prototype === suzi.__proto__; // true
suzi.getName(); // return "Suzi"
```

- Person의 instance는 `__proto__` 프로퍼티를 통해 getName 메서드를 호출할 수 있다.
- 하지만 이때 this로 바인딩할 대상이 잘못 지정되었다.
- `suzi.__proto__.getName()`에서 getName 메서드 내부에서의 this는`suzi.__proto__`이다. 이때 `suzi.__proto__`에는 name 속성이 없으므로 undefined를 반환한다.
- **this가 인스턴스를 바라보도록** 하기 위해서는 `suzi.getName()`으로 메서드를 호출해야 한다.
- `__proto__` 프로퍼티는 **생략 가능한 프로퍼티**로 설계되었기 때문에 `__proto__` 프로퍼티를 생략하고 생성자 함수의 `prototype` 속성에 있는 메서드를 호출하는 것이 가능하고 this가 instance(suzi)를 참조할 수 있다.

> **요약**
>
> 💡 자바스크립트는 함수에 자동으로 `prototype` 속성을 부여한다. 함수를 `new` 연산자와 함께 생성자 함수(`Constructor`)로 호출하여 인스턴스(`instance`)를 생성한다. 그리고 인스턴스에 자동으로 `__proto__` 프로퍼티를 부여한다. `__proto__` 프로퍼티는 생성자 함수의 `prototype`을 참조한다. `prototype` 속성은 객체로 인스턴스에서 사용한 메서드가 있다.
> <br/>
> 💡 `__proto__` 프로퍼티는 생략 가능한 프로퍼티이기 때문에, 생성자 함수의 `prototype`에 어떤 메서드나 속성이 있다면 인스턴스에서도 마치 자신의 것처럼 해당 메서드나 속성에 접근할 수 있다.

<br/>

### 배열 리터럴과 Array 생성자의 관계

```javascript
const arr = [1, 2]; // 배열 리터럴을 통해 인스턴스 생성
```

![Prototype Schematic for Array Constructor](2.png)

- Array 생성자 함수나 배열 리터럴을 이용해 인스턴스를 생성할 수 있다.
- 이 인스턴스의 `__proto___` 프로퍼티는 Array의 prototype 프로퍼티를 참조한다.
- 이때 `__proto__` 프로퍼티는 생략 가능하도록 설계되어 있기 때문에 인스턴스가 Array의 prototype 프로퍼티 내부의 메서드를 마치 자신의 것처럼 호출할 수 있다.
- 한편 Array의 **prototype 프로퍼티 내부에 존재하지 않는 메서드**들은 인스턴스가 직접 호출할 수 없고, Array **생성자 함수를 통해서 호출할 수 있다.**

<br/>

## constructor 프로퍼티

- 생성자 함수의 프로퍼티인 `prototype` 객체 내부에는 `constructor`이라는 프로퍼티가 있다.
- `prototype` 객체를 참조하는 인스턴스의 `__proto__` 객체 내부에도 마찬가지이다.
- `constructor` 프로퍼티는 단어 그대로 **원래의 생성자 함수을 참조**한다.

```javascript
const arr = [1, 2];
Array.prototype.constructor === Array; // true
arr.__proto__.constructor === Array; // true
arr.constructor === Array; // true (__proto__ 프로퍼티는 생략 가능)

const arr2 = new arr.constructor(3, 4); // new Array(3, 4)
console.log(arr2); // [3, 4]
```

- `constructor` 프로퍼티는 읽기 전용 속성이 부여된 예외적인 경우를 제외하고는 **값을 바꿀 수 있다.**

```javascript
const NewConstructor = function () {
  console.log("this is new contructor!");
};

const dataTypes = [
  1,
  "test",
  true,
  {},
  [],
  function () {},
  /test/,
  new Number(),
  new String(),
  new Boolean(),
  new Object(),
  new Array(),
  new Function(),
  new RegExp(),
  new Date(),
  new Error()
];

dataTypes.forEach(function (d) {
  d.constructor = NewConstructor;
  console.log(d.constructor.name, "&", d instanceof NewConstructor);
});
```

- 모든 배열 원소에 대해 `d instanceof NewConstructor` 결과로 `false`를 반환한다.
- `constructor` 프로퍼티를 변경하더라도 **참조하는 대상이 변경될 뿐 이미 만들어진 인스턴스의 원형이 변하지 않는다.**
- 어떤 인스턴스의 생성자 정보를 알아내기 위해 `constructor` 프로퍼티에 의존하는 것은 항상 안전하지 않는다. 프로퍼티 값이 바뀔 수 있기 때문이다.

<br/>

```javascript
const Person = function (name) {
  this.name = name;
};

const p1 = new Person("사람1"); // { name: "사람1" } true
const p1Proto = Object.getPrototypeOf(p1);
const p2 = new Person.prototype.constructor("사람2"); // { name: "사람2" } true
const p3 = new p1Proto.constructor("사람3"); // { name: "사람3" } true
const p4 = new p1.__proto__.constructor("사람4"); // { name: "사람4" } true
const p5 = new p1.constructor("사람5"); // { name: "사람5" } true
[p1, p2, p3, p4, p5].forEach(function (p) {
  console.log(p, p instanceof Person);
});
```

- p1부터 p5까지 모두 Person의 인스턴스이다.

<br/>

> **생성자 함수**
>
> - `[Constructor]`
> - `[Constructor].prototype.constructor`
> - `[instance].__proto__.constructor`
> - `[instance].constructor`
> - `Object.getPrototypeOf([instance]).constructor`

> **prototype 객체**
>
> - `[Constructor].prototype`
> - `[instance].__proto__`
> - `[instance]`
> - `Object.getPrototypeOf([instance])`

<br/>

# 메서드 오버라이드

- **원본 메서드가 그대로 있는 상태에서 다른 메서드를 덮어씌우는 것**
- 인스턴스에서 특정 메서드를 호출하여 찾을 때 먼저 가장 가까운 대상인 자신의 프로퍼티를 검색하고, 없으면 그 다음으로 가까운 대상인 `__proto__` 프로퍼티를 검색하는 순서로 진행된다.

```javascript
const Person = function (name) {
  this.name = name;
};

Person.prototype.getName = function () {
  return this.name;
};

const iu = new Person("지금");
iu.getName = function () {
  return `바로 ${this.name}`;
};
console.log(iu.getName()); // 바로 지금
console.log(iu.__proto__.getName()); // undefined

Person.prototype.name = "이지금";
console.log(iu.__proto__.getName()); // 이지금

console.log(iu.__proto__.getName().call(iu)); // 지금 (this binding)
```

<br/>

# 프로토타입 체인

![Prototype Chain for Array Constructor](3.png)

- prototype 프로퍼티는 **객체**이므로 prototype 프로퍼티 내부의 `__proto__` 프로퍼티가 `Object` 생성자 함수의 prototype 속성을 참조한다.
- 모든 객체의 `__proto__` 프로퍼티는 `Object.prototype`과 연결된다.
- `__proto__`는 생략 가능한 프로퍼티이기 때문에 배열이 `Array.prototype` 내부의 메서드를 마치 자신의 것처럼 실행할 수 있고, 마찬가지로 `Object.prototype` 내부의 메서드도 자신의 것처럼 실행할 수 있다.

> 💡 **어떤 instance의 `__proto__` 프로퍼티 내부에 다시 `__proto__` 프로퍼티가 연쇄적으로 이어지는 것**을 **Prototype chain**이라고 하고, 이 체인을 통해 프로퍼티를 검색하는 것을 **Prototype chaining**이라고 한다.

- **instance 에서 어떤 메서드를 호출**하면 먼저 **자신의 프로퍼티**를 검색해서 해당 메서드가 있으면 실행하고, 없다면 `__proto__` 프로퍼티를 검색해서 있으면 그 메서드를 실행하고, 없다면 다시 `__proto__` 프로퍼티 내부의 `__proto__` 프로퍼티를 검색해서 실행하는 식으로 메서드를 찾을 때까지 진행된다.

```javascript
const arr = [1, 2];
Array.prototype.toString.call(arr); // "1,2"
Object.prototype.toString.call(arr); // "[object Array]"
arr.toString(); // "1,2"

arr.toString = function () {
  return this.join("_");
};
arr.toString(); // 1_2
```

![Prototype Chain for Number and String Constructor](4.png)
![Prototype Chain for Boolean Constructor](5.png)

<br/>

## 객체 전용 메서드의 예외사항

- 객체에서만 사용할 메서드는 prototype 객체 안에 정의해서는 안된다.
- 객체에서만 사용할 메서드를 `Object.prototype` 내부에 정의한다면 다른 데이터 타입(number, string 등)도 `Prototype Chaining`을 통해 해당 메서드를 사용할 수 있기 때문이다.
- 객체에서만 사용할 메서드는 `Object.prototype`아닌 `Object`에 직접 부여해야 한다.
  - `Object`에 직접 부여한 메서드들은 `Object` 생성자 함수를 통해서만 호출할 수 있다.
- `Object.prototype`이 다른 참조형 데이터뿐만 아니라 원시형 데이터조차 `__proto__` 프로퍼티에 반복 접근함으로써 도달할 수 있는 최상위 존재이기 때문이다.
- `Object.prototype`에는 모든 데이터 타입에서 활용할 수 있는 범용적인 메서드들만 있다.

<br/>

## 다중 프로토타입 체인

- 두 단계 이상의 체인을 지니는 다중 프로토타입 체인이 가능하다.

```javascript
const Grade = function () {
  const args = Array.prototype.slice.call(arguments);
  for (let i = 0; i < args.length; i++) {
    this[i] = args[i];
  }
  this.length = args.length;
};
const g = new Grade(100, 80);
```

- 인스턴스 (`g`)에서 배열 메서드를 직접 쓸 수 있게 하기 위해서 `g.__proto___`, 즉 `Grade.prototype`이 배열의 인스턴스를 참조하면 된다.

```ts
Grade.prototype = [];
```

![Multiple Prototype Chains Example (1)](6.png)
![Multiple Prototype Chains Example (2)](7.png)

<br/>

# 정리

- 어떤 함수를 `new` 연산자와 함께 호출하면 생성자 함수에서 정의된 내용을 바탕으로 새로운 `instance`가 생성되는데 이 인스턴스에는 `__proto__` 프로퍼티가 자동으로 부여된다.
- **`__proto__` 프로퍼티는 생성자 함수의 `prototype` 프로퍼티를 참조**하여 `__proto__` 프로퍼티를 통해 인스턴스는 `prototype` 내부의 속성이나 메서드에 접근할 수 있다.
- 이때, `__proto__` 프로퍼티는 **생략 가능한 프로퍼티**이기 때문에 인스턴스는 `Constructor.prototype`의 메서드나 속성을 마치 자신의 것처럼 호출하거나 접근할 수 있다.
- `Constructor.prototype`에는 **constructor라는 프로퍼티**가 있는데, 이는 생성자 함수 자신을 가리킨다. constructor 프로퍼티는 인스턴스가 자신의 생성자 함수가 무엇인지 알고자 할 때 필요하다. 이 프로퍼티는 읽기 전용 속성이 부여되어 있지 않다면 값을 바꿀 수 있다. 이때 참조하는 대상만 바뀌는 것이지 이미 생성된 인스턴스의 원형이 바뀌지 않는다.
- 어떤 인스턴스의 `__proto__` 프로퍼티 내부에 다시 `__proto__` 프로퍼티가 연쇄적으로 이어지는 것을 **Prototype chain**이라고 하고, 이 체인을 통해 프로퍼티를 검색하는 것을 **Prototype chaining**이라고 한다.
- prototype 프로퍼티는 *객체*이므로 prototype 프로퍼티 내부의 `__proto__` 프로퍼티는 `Object.prototype`을 참조한다. 따라서 모든 객체의 `__proto__` 프로퍼티는 `Object.prototype`과 연결된다.
- instance에서 어떤 메서드를 호출하면 자신의 프로퍼티를 검색해서 해당 메서드가 있으면 실행하고, 없다면 `__proto__` 프로퍼티를 검색해서 있으면 그 메서드를 실행하고, 없다면 다시 `__proto__ 내부의 __proto__`를 검색해서 실행하는 식으로 진행된다.
- `Object.prototype` 에는 모든 데이터 타입에서 사용할 수 있는 범용적인 메서드만이 존재하며 객체 전용 메서드는 `Object` 생성자 함수에 존재해야 한다.
- 프로토타입 체인은 반드시 2단계로 이루어지는 것이 아니라 그 이상으로 생성할 수 있다.
