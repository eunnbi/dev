---
emoji: πΎ
title: λ°μ΄ν° νμ
date: "2021-12-20"
category: Javascript
preview: "μλ°μ€ν¬λ¦½νΈλ λμ νμμΈμ΄ - μλ£νμ μ»΄νμΌ μ μ νμ§ μκ³  λ°νμ μ κ²°μ νλ€ - μ«μμ κ²½μ°, λ©λͺ¨λ¦¬ κ³΅κ°μ νλ³΄ν  λ μ μνμΈμ§ λΆλμμνμΈμ§ κ΅¬λΆνμ§ μκ³  λ¬΄μ‘°κ±΄ 64λΉνΈ(8λ°μ΄νΈ)λ₯Ό νλ³΄νλ€. - μ μλ§μ μν λ°μ΄ν° νμμ΄ μκ³ , λͺ¨λ  μλ₯Ό 64λ°μ΄νΈ μ€μλ‘ μ²λ¦¬νλ€. Data type - number - string - boolean - null - undefined - Symbol Reference type - object - array - function - date - RegExp - map, weekmap - set, weakset"
---

# μλ°μ€ν¬λ¦½νΈλ λμ νμμΈμ΄

- **μλ£νμ μ»΄νμΌ μ μ νμ§ μκ³  λ°νμ μ κ²°μ νλ€.**
- μ«μμ κ²½μ°, λ©λͺ¨λ¦¬ κ³΅κ°μ νλ³΄ν  λ μ μνμΈμ§ λΆλμμνμΈμ§ κ΅¬λΆνμ§ μκ³  λ¬΄μ‘°κ±΄ 64λΉνΈ(8λ°μ΄νΈ)λ₯Ό νλ³΄νλ€.
- [μ μ νμ μΈμ΄ vs λμ νμ μΈμ΄](https://www.eunnbi.dev/posts/cs-typed-language)

<br/>

# Data type

## Primitive type

- μμ μλ£ν
- **number**: μ μλ§μ μν λ°μ΄ν° νμμ΄ μκ³ , λͺ¨λ  μλ₯Ό 64λ°μ΄νΈλ‘ μ²λ¦¬νλ€.
  - λΆλμμμ  μ«μ μΈμλ `+Inifinity`, `-Infinity`, `NaN` κ°μ κ°λλ€.
- **string**: `length` νλ‘νΌν°λ₯Ό κ°λ μ μ¬λ°°μ΄ κ°μ²΄
- **boolean**: true, false
  - falsyν κ°: 0, -0, undefined, null, λΉ λ¬Έμμ΄, NaN
- **null**: κ°μ΄ μμμ λνλ, μλμ μΌλ‘ λ³μμ κ°μ΄ μλ€λ κ²μ λͺμν  λ μ¬μ©λ¨.
- **undefined**: μ μλμ§ μμ κ°
  - λ³μκ° μ μΈλμμ§λ§ κ°μ ν λΉλ°μ§ μμ λ μλ°μ€ν¬λ¦½νΈ μμ§μ μν€ `undefined`λ‘ μ΄κΈ°νλ¨.
  - `undefined`λ₯Ό λ°ννλ κ²½μ°
    - μ μΈλμμ§λ§, κ°μ λμνμ§ μμ λ³μμ μ κ·Όν  λ
    - μ‘΄μ¬νμ§ μλ κ°μ²΄μ νλ‘νΌν°μ μ κ·Όν  λ
    - return λ¬Έμ΄ μκ±°λ νΈμΆλμ§ μλ ν¨μμ μ€ν κ²°κ³Ό
- **symbol**: κ³ μ νκ³  λ³κ²½ λΆκ°λ₯ν μμ κ°
  - μ£Όλ‘ μΆ©λ μνμ΄ μλ μ μΌν κ°μ²΄μ νλ‘νΌν° ν€λ₯Ό λ§λ€κΈ° μν΄ μ¬μ©λ¨.
  ```js
  Symbol("foo") === Symbol("foo"); // false
  ```

<br/>

## Reference type

- **object**: μμ νμμ μ μΈν λͺ¨λ  κ°μ΄ κ°μ²΄μ΄λ€.
  - κ°μ²΄λ propertyλ₯Ό κ°κ³ , propertyμλ ν€μ κ°μ΄ μλ€.
  - ν€λ string λλ symbolμ΄κ³ , κ°μ λͺ¨λ  μλ£νμ΄ λ  μ μλ€.
- **array**: μ μ ν€λ₯Ό κ°μ§ propertyμ length propertyλ₯Ό κ°λ κ°μ²΄
- **function**: μΌκΈκ°μ²΄, λ€λ₯Έ κ°μ²΄μ λ¬λ¦¬ ν¨μλ νΈμΆν  μ μλ€.
  - λ³μλ μλ£κ΅¬μ‘°(λ°°μ΄μ μμλ κ°μ²΄μ μμ±κ°)μ ν λΉν  μ μλ€.
  - λ€λ₯Έ ν¨μμ μΈμλ‘ μ λ¬λ  μ μλ€.
  - λ€λ₯Έ ν¨μμ λ°νκ°μΌλ‘ μ¬μ©λ  μ μλ€.
- **Date**: λ μ§μ μκ°μ μν λ©μλλ₯Ό μ κ³΅νλ built-in κ°μ²΄
  - [Date κ°μ²΄ - mdn web docs](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date)
- **RegExp**: μ κ·ννμ
  - [RegExp - mdn web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- **Map**: [ν€, κ°] ννμ κ°μ κ°μ§λ κ°μ²΄
  - ν€λ Map κ°μ²΄μμ κ³ μ ν΄μΌ νλ©°, κ°μ λ³κ²½ κ°λ₯νλ€.
  - ν€μ κ°μ λͺ¨λ  μλ£νμ΄ λ  μ μλ€.
  - [Map - mdn web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- **WeakMap**: `Map`κ³Ό λΉμ·ν μλ£ν
  - μμ μλ£νμ ν€λ‘ μ¬μ©ν  μ μλ€.
  - [WeakMap - mdn web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)
- **Set**: κ³ μ ν κ°λ€μ μ§ν©
  - λ°°μ΄ μμμ μ€λ³΅μ μ κ±°νλλ° μ¬μ©λ  μ μλ€.
    ```js
    function eliminateDuplicates(items) {
      return [...new Set(items)];
    }
    ```
  - [Set - mdn web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

<br/>

> **λ¦¬ν°λ΄**: κ°, λ°μ΄ν° μμ²΄λ₯Ό λ§ν¨.
>
> - μ«μ λ¦¬ν°λ΄: 10.5, 1001
> - λ¬Έμμ΄ λ¦¬ν°λ΄: "Hello", "World"
> - λΆλ¦¬μΈ λ¦¬ν°λ΄: true or false
> - null λ¦¬ν°λ΄: null
> - undefined λ¦¬ν°λ΄: undefined
> - κ°μ²΄ λ¦¬ν°λ΄: { name: "Lee", gender: "male" }
> - λ°°μ΄ λ¦¬ν°λ΄: [1, 2, 3]

> **λ³μ μ μΈκ³Ό λ°μ΄ν° ν λΉ**
>
> - λ³μ: λ°μ΄ν°λ₯Ό μ μ₯νλ μμ κΈ°μ΅ κ³΅κ°
> - λ©λͺ¨λ¦¬μλ λ³μ μμ­κ³Ό λ°μ΄ν° μμ­μ΄ μλ€.
> - `const a = 'abc';`
> - λ³μ μμ­μ λ³μ aλ₯Ό μν κ³΅κ° νλ³΄, μλ³μ μ μ₯
> - κ·Έ κ³΅κ°μ μλμ μΌλ‘ undefined ν λΉ
> - λ°μ΄ν° μμ­μ λΉ κ³΅κ°μ λ¬Έμμ΄ 'abc' μ μ₯
> - λ¬Έμμ΄ 'abc'κ° μ μ₯λ λ©λͺ¨λ¦¬μ μμ μ£Όμλ₯Ό λ³μ aμ λ©λͺ¨λ¦¬ κ³΅κ°μ λ³΅μ¬νμ¬ μ μ₯

<br/>

## κΈ°λ³Έ μλ£νκ³Ό μ°Έμ‘° μλ£νμ μ°¨μ΄μ 

### π‘ λΆλ³κ°κ³Ό κ°λ³κ°

#### λΆλ³κ°

- κΈ°λ³Ένμ λΆλ³κ° `immutable value`μ΄λ€.
- μ΄λ λΆλ³νλ€λ κ²μ **λ©λͺ¨λ¦¬ κ³΅κ° μμ­μμμ λ³κ²½μ΄ λΆκ°λ₯**νλ€λ κ²μ΄λ€. μ¬ν λΉμ κ°λ₯νλ€.

```javascript
let str = "Hello";
str = "world";
```

- λ¨Όμ  λ©λͺ¨λ¦¬μ λ°μ΄ν° μμ­μ λ¬Έμμ΄ 'Helloβκ° μμ±λκ³  μλ³μ(λ³μλͺ) strμ λ©λͺ¨λ¦¬ κ³΅κ°μ λ¬Έμμ΄ βHelloβκ° μ μ₯λ λ©λͺ¨λ¦¬μ μ£Όμλ₯Ό μ μ₯νλ€.
- κ·Έλ¦¬κ³  λ€μ μ½λκ° μ€νλλ©΄ μ΄μ μ μμ±λ λ¬Έμμ΄ βHelloβμ μμ νλ κ²μ΄ μλλΌ μλ‘μ΄ λ¬Έμμ΄ βworldβλ₯Ό λ©λͺ¨λ¦¬μ μμ±νκ³  μλ³μ strμ λ©λͺ¨λ¦¬ κ³΅κ°μ μμμ£Όμλ₯Ό μ μ₯νλ€.
- μ΄λ λ¬Έμμ΄ βHelloβμ βworldβλ λͺ¨λ λ©λͺ¨λ¦¬μ μ‘΄μ¬νκ³  μλ€. λ³μ strμ λ¬Έμμ΄ βHelloβλ₯Ό κ°λ¦¬ν€κ³  μλ€κ° λ¬Έμμ΄ βworldβλ₯Ό κ°λ¦¬ν€λλ‘ λ³κ²½λμμ λΏμ΄λ€.
- **μ¦, κΈ°λ³Έ μλ£νμ λ°μ΄ν° μμ­μ λ©λͺ¨λ¦¬ κ³΅κ°μ΄ ν λ² μμ±λλ©΄ κ·Έ κ°μ λ°λμ§ μλλ€.**

#### κ°λ³κ°

- μ°Έμ‘°νμ κ°λ³κ° `mutable value`μ΄λ€.
- κΈ°λ³Έ μλ£νκ³Ό λ¬λ¦¬ `property` μμ­μ΄ λ³λλ‘ μ‘΄μ¬νλ€.
- **νλ‘νΌν°μ κ°μ μΌλ§λ μ§ λ°λ μ μκΈ° λλ¬Έμ** μ°Έμ‘°ν λ°μ΄ν°λ λΆλ³νμ§ μλ€.

```javascript
const obj1 = { c: 10, d: "ddd" };
const obj2 = obj1; // obj2λ obj1κ³Ό κ°μ λ©λͺ¨λ¦¬ μ£Όμ μ°Έμ‘°
obj2.c = 20;
console.log(obj2.c); // 20
console.log(obj1.c); // 20
// obj1κ³Ό obj2κ° μ°Έμ‘°νκ³  μλ λ©λͺ¨λ¦¬μ μ£Όμκ° κ°κΈ° λλ¬Έμ κ°μ νλ‘νΌν° κ°μ κ°λλ€.
```

```javascript
const obj1 = { c: 10, d: "ddd" };
const obj2 = obj1; // // obj2λ obj1κ³Ό κ°μ λ©λͺ¨λ¦¬ μ£Όμ μ°Έμ‘°
obj2 = { c: 20, d: "ddd" }; // μλ‘μ΄ κ°μ²΄λ₯Ό μμ±νμ¬ λ³μ obj2μ λμ
// obj2λ μλ‘μ΄ κ°μ²΄μ μμ μ£Όμκ°μ μ μ₯
// λ³μ obj1μ obj2λ μλ‘ λ€λ₯Έ λ©λͺ¨λ¦¬ μ£Όμλ₯Ό μ°Έμ‘°
```

- 'κ°λ³'μ μ°Έμ‘°ν λ°μ΄ν° μμ²΄λ₯Ό λ³κ²½νλ κ²½μ°κ° μλλΌ **κ·Έ λ΄λΆμ νλ‘νΌν°λ₯Ό λ³κ²½ν  λλ§** μ±λ¦½λλ€.

<br/>

### π‘ Pass by Value & Pass by Reference

- λ°μ΄ν° νμμ λ°λΌ ν¨μμ μΈμλ₯Ό μ λ¬νλ λκ°μ§ λ°©λ²

#### Pass by Value (κ°μ λ³΅μ¬μ μν μ λ¬)

- μΈμλ‘ λκΈ°λ κ°μ λ³΅μ¬νμ¬ ν¨μμ μ λ¬νλ λ°©μμ΄λ€.
- **κΈ°λ³Έν λ°μ΄ν°λ₯Ό μΈμλ‘ μ λ¬ν  λ** μΌμ΄λλ€.
- κ°μ λ³΅μ¬νμ¬ μ λ¬νκΈ° λλ¬Έμ ν¨μ μ€ν λμ€ μΈμμ κ°μ λ°κΎΈλλΌλ λ³κ²½ μ¬ν­μ΄ μλμ λ°μ΄ν°μ μ μ©λμ§ μλλ€.

```js
const myInt = 1;

function increase(value) {
  return (value += 1);
}

console.log(myInt); // 1
console.log(increase(myInt)); // 2
console.log(myInt); // 1
```

#### Pass by Reference (μ°Έμ‘°μ μν μ λ¬)

- μΈμλ‘ λκΈ°λ κ°μ λ©λͺ¨λ¦¬ μ£Όμλ₯Ό ν¨μμ μ λ¬νλ€.
- **μ°Έμ‘°ν λ°μ΄ν°λ₯Ό μΈμλ‘ μ λ¬ν  λ** μΌμ΄λλ€.
- λ©λͺ¨λ¦¬ μμ μ£Όμλ₯Ό μ λ¬νκΈ° λλ¬Έμ ν¨μ μ€ν λμ€ ν΄λΉ κ°μ λν μμ  μ¬ν­μ΄ μλμ λ°μ΄ν°μ κ·Έλλ‘ μ μ©λλ€.

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

## λΉ κ°μ²΄ μμ± & μ μμ± μΆκ°

```js
const car = new Object();
const car = {};
car.color = "red";
console.log(car); // {color : "red"}
```

- λ³μλ₯Ό ν€μ κ°μΌλ‘ νλ κ°μ²΄ λ§λ€κΈ°

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

- κ°μ²΄μ νλ‘νΌν° κ°μΌλ‘ ν¨μ μΆκ°νκΈ°

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

// 3. νμ΄ν ν¨μ
const person1 = {
  greet: () => console.log("Hello")
};
person1.greet(); //Hello
```

- κ°μ²΄μ νλ‘νΌν° ν€λ₯Ό λ³μλ‘ μ μνκΈ°

```js
const name = "myname";
const person = {
  [name]: "Alberto"
};
console.log(person.myname); // Alberto
```

<br/>

## νλ‘νΌν° μ κ·Ό λ° μ­μ 

- μ  νκΈ°λ², λκ΄νΈ νκΈ°λ²

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

- νλ‘νΌν° μ­μ 

```js
const cars = {
	ferrari: "california",
	porshe: "911";
	bugatti: "veyron",
};

delete cars.porshe;
console.log(cars.porshe); // undefined (κ°μ²΄μ μ‘΄μ¬νμ§ μλ νλ‘νΌν° μ°Έμ‘°)
```

<br/>

## κ°μ²΄ λ³΅μ¬νκΈ°

### μμ λ³΅μ¬

```javascript
const copyObject = function (target) {
  let result = {};
  for (let prop in target) {
    result[prop] = target[prop];
  }
  return result;
};
```

- κΈ°μ‘΄ κ°μ²΄μ νλ‘νΌν°μ κ°λ€μ λ³΅μ¬ν΄μ μλ‘μ΄ κ°μ²΄λ₯Ό λ§λ λ€.
- νμ§λ§ **κ°μ΄ μ°Έμ‘°ν λ°μ΄ν°μΈ νλ‘νΌν°λ₯Ό λ³΅μ¬ν  λ μ£Όμκ°λ§ λ³΅μ¬νκ² λλ€.**
- λ°λΌμ, λ§μ½ κ°μ²΄μ μ΄λ€ νλ‘νΌν°μ κ°μ΄ μ°Έμ‘°ν λ°μ΄ν°μ΄κ³ , κ·Έ κ°μ νλ‘νΌν° κ°μ λ³κ²½νλ©΄ μλ³Έ κ°μ²΄λ μ΄μ λ°λΌ λ³κ²½λλ€.

### κΉμ λ³΅μ¬

- κ°μ²΄μ νλ‘νΌν° μ€μμ κ·Έ κ°μ΄ κΈ°λ³Έν λ°μ΄ν°μΌ κ²½μ°μ κ·Έλλ‘ λ³΅μ¬νκ³ , **μ°Έμ‘°ν λ°μ΄ν°μΌ κ²½μ° λ€μ λ΄λΆμ νλ‘νΌν°μ κ°λ€μ λ³΅μ¬νλ€.**

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

## μ¬λ²κ³Ό κ°μ²΄

- μ¬λ²μ μ΄μ©νμ¬ **κ³ μ ν νλ‘νΌν° ν€**λ₯Ό κ°λ κ°μ²΄λ₯Ό λ§λ€ μ μλ€.

```js
const office = {
  [Symbol("Tom")]: "CEO",
  [Symbol("Mark")]: "CTO",
  [Symbol("Mark")]: "CIO"
};
for (const person in office) {
  console.log(person); // undefined. (for inμΌλ‘ μ¬λ²μ λν΄ λ£¨νλ₯Ό λ μ μλ€.)
}
const symbols = Objects.getOwnPropertySymbols(office); //κ°μ²΄ νλ‘νΌν° ν€μ λ°°μ΄ μ»μ
console.log(symbols);
// 0 : Symbol(Tom)
// 1 : Symbol(Mark)
// 2 : Symbol(Mark)
// length : 3

const symbols = Objects.getOwnPropertySymbols(office);
const value = symbols.map(symbol => office[symbol]); // νλ‘νΌν° κ°μ μ κ·Ό
console.log(value);
// 0: "CEO"
// 1: "CTO"
// 2: "CIO"
// length : 3
```

> **μ°Έκ³ : for λ£¨ν**
>
> 1. `for of`
>
> ```js
> // λ°°μ΄μ iterable κ°μ²΄
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
> // Objectλ iterable κ°μ²΄κ° μλ.
> const car = {
>   marker: "BMW",
>   color: "red",
>   year: "2010"
> };
>
> // Object.keys() -> κ°μ²΄μ λͺ¨λ  ν€λ₯Ό κ°μ Έμ¨ ν, ν€μ λν΄ λ£¨ν μν
> for (const prop of Object.keys(car)) {
>   const value = car[prop];
>   console.log(prop, value);
> }
> // marker BMW
> // color red
> // year 2010
> ```
>
> 2. `for in` λ£¨ν
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
> - μμ μμ΄ κ°μ²΄μ λͺ¨λ  μ΄κ±° κ°λ₯ν μμ±μ λ°λ³΅ν¨.
> - λ°λ³΅ μ€μλ κ°μ²΄μ μμ±μ μΆκ°, μμ , μ­μ νμ§ μλ κ²μ΄ μ’μ.
>
> ```js
> const list = [4, 5, 6];
>
> // for...inμ ν€ λ°ν
> for (const i in list) {
>   console.log(i); // "0", "1", "2",
> }
>
> // for...ofλ κ°μ λ°ν
> for (const i of list) {
>   console.log(i); // 4, 5, 6
> }
> ```

<br/>

## λ¬Έμμ΄ λ©μλ

- [String - mdn web docs](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String#%EC%9D%B8%EC%8A%A4%ED%84%B4%EC%8A%A4_%EB%A9%94%EC%84%9C%EB%93%9C)

```js
const str = "this is a short sentence";
str.indexOf("short"); // 10
```

```js
const str = "pizza, orange, cereals";
str.slice(0, 5); // pizza (beginIndex, endIndex (μλ΅ κ°λ₯))
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
code.startsWith("abc"); // false (λμλ¬Έμ κ΅¬λ³)
code.startsWith("ABC"); // true
code.startsWith("DEF", 3); // true (μμ μΈλ±μ€: 3)
```

```js
let code = "ABCDEF";
code.endsWith("DDD"); // false
code.endsWith("def"); // false (λμλ¬Έμ κ΅¬λ³)
code.endsWith("DEF"); // true

code = "ABCDEFGHI";
code.endsWith("EF", 6); // true (κ²μ¬κΈΈμ΄: 6, μ²« 6κ° λ¬ΈμμΈ ABCDEFλ§μ κ³ λ €)
```

```js
const code = "ABCDEF";
code.includes("ABB"); // false
code.includes("abc"); // false (λμλ¬Έμ κ΅¬λ³)
code.includes("CDE"); // true
```

```js
const hello = "Hi";
console.log(hello.repeat(10)); // HiHiHiHiHiHiHiHiHiHi
```

```js
const str = "Na";
const bat = "Batman";
const batman = `${str.repeat(8)} ${bat}`; // ννλ¦Ώ λ¦¬ν°λ΄
console.log(batman); // NaNaNaNaNaNaNaNa Batman
```

<br/>

## λ°°μ΄ λ©μλ

- [Array - mdn web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

- `Array.from()` : μ μ¬ λ°°μ΄ κ°μ²΄λ λ°λ³΅ κ°λ₯ν κ°μ²΄λ₯Ό μκ² λ³΅μ¬ν΄ μλ‘μ΄ Array κ°μ²΄λ₯Ό λ§λ λ€.

```js
console.log(Array.from("foo")); // ["f", "o", "o"]
console.log(Array.from([1, 2, 3], x => x + x)); // [2, 4, 6]
```

- `Array.of()` : μ λ¬λ°μ λͺ¨λ  μΈμλ‘ λ°°μ΄ μμ±

```js
console.log(Array.of(1, 2, 3, 4, 5)); // [1, 2, 3, 4, 5]
```

- `Array.find()`: μΈμλ‘ μ λ¬λ°μ νλ³ ν¨μλ₯Ό λ§μ‘±νλ μ²«λ²μ§Έ μμμ κ°μ λ°ννλ€. κ·Έλ° μμκ° μλ€λ©΄ `undefined`λ₯Ό λ°ννλ€.

```js
const array = [1, 2, 3, 4, 5];

// λ°°μ΄μ μμ μ€ 3λ³΄λ€ ν° μ²« μμλ₯Ό λ°ν
let found = array.find(e => e > 3);
console.log(found); // 4
```

- `Array.findIndex()`: μΈμλ‘ μ λ¬λ°μ νλ³ ν¨μλ₯Ό λ§μ‘±νλ μ²«λ²μ§Έ μμμ μΈλ±μ€ κ°μ λ°ννλ€. κ·Έλ° μμκ° μλ€λ©΄ `-1`λ₯Ό λ°ννλ€.

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

// λ°°μ΄μ λμ μ κ°μ μΆκ°
fruitBasket.push("pear");

// λ°°μ΄μ μμμ μ κ°μ μΆκ°
fruitBasket.unshift("melon");

// λ°°μ΄μ λμμ κ° νλ μ κ±°
fruitBasket.pop();

//λ°°μ΄μ μμμμ κ° νλ μ κ±°
fruitBasket.shift();
```

<br/>

# typeof μ°μ°μ

- νΌμ°μ°μμ μλ£νμ λνλ΄λ λ¬Έμμ΄μ λ°ννλ€.
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
