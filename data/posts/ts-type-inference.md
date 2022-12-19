---
emoji: 🎁
title: 타입 추론
date: "2022-06-10"
category: Typescript
preview: "타입 추론 - 타입스크립트는 타입 추론을 적극적으로 수행한다. 👍 - 그래서 타입스크립트를 작성할 때 많은 타입 구문이 불필요하다. - 오히려 모든 변수에 타입을 선언하는 것은 비생산적이다. - 복잡한 객체도 타입 추론이 가능하다. - 비구조화 할당문은 모든 지역 변수의 타입이 추론되도록 한다. - 함수의 반환값도 추론 가능하다. - 함수의 매개변수는 대부분 타입 추론이 불가능하여 타입 구문이 필요하다. - 하지만, 함수 매개변수 기본값이 있는 경우 타입 추론이 가능하다. 타입 넓히기 - 앞서 보았듯이 변수를 초기화할 때 타입을 명시하지 않으면 타입 추론을 통해 타입을 결정한다."
---

# 1. 타입 추론

- 타입스크립트는 타입 추론을 적극적으로 수행한다. 👍
- 그래서 타입스크립트를 작성할 때 많은 타입 구문이 불필요하다.
- 오히려 모든 변수에 타입을 선언하는 것은 비생산적이다.

  ```typescript
  let x: number = 12; // 타입 구문 불필요
  let x = 12; // 타입이 number로 추론됨. (x: number)
  ```

- 복잡한 객체도 타입 추론이 가능하다.

  ```typescript
  const person = {
    name: "Smith",
    born: {
      where: "New York",
      when: "Nov. 26, 1883"
    }
  };

  /*
  person: {
      name: string;
      born: {
      where: string;
      when: string;
      }
  }
  */
  ```

- 비구조화 할당문은 모든 지역 변수의 타입이 추론되도록 한다.

  ```typescript
  interface Product {
    id: string;
    name: string;
    price: number;
  }

  function logProduct(product: Product) {
    const { id, name, price } = product; // id: string, name: string, price: number
  }
  ```

- 함수의 반환값도 추론 가능하다.

  ```typescript
  function square(nums: number[]) {
    return nums.map(x => x * x);
  }
  const squares = square([1, 2, 3, 4]); // squares: number[]
  ```

- 함수의 매개변수는 대부분 타입 추론이 불가능하여 타입 구문이 필요하다.
- 하지만, 함수 매개변수 기본값이 있는 경우 타입 추론이 가능하다.

  ```typescript
  function parseNumber(str: string, base = 10) {
    return;
  }
  // function parseNumber(str: string, base?: number): void
  ```

<br/>

# 2. 타입 넓히기

- 앞서 보았듯이 변수를 초기화할 때 타입을 명시하지 않으면 타입 추론을 통해 타입을 결정한다.
- **초기화 값을 가지고 변수에 할당 가능한 값들의 집합을 유추한다.** 이 과정을 **넓히기**라고 한다.
- 타입 넓히기의 과정을 이해하면 오류의 원인을 빠르게 파악하고 타입 구문을 더 효과적으로 사용할 수 있다.

**Example 1**

```typescript
interface Vector3 {
  x: number;
  y: number;
  z: number;
}

function getComponent(vector: Vector3, axis: "x" | "y" | "z") {
  return vector[axis];
}

let x = "x"; // x: string
let vec = { x: 10, y: 20, z: 30 }; // { x: number, y: number, z: number }
getComponent(vec, x); // ERROR: string 형식의 인수는 'x' | 'y' | 'z' 형식의 매개변수에 할당될 수 없습니다.
```

- 변수 `x`의 타입은 할당 시점에서 넓히기가 동작하여 타입이 `string`으로 추론되었다.
- 하지만, `string` 타입은 `'x' | 'y' | 'z'` 타입에 할당이 불가능하기 때문에 오류가 발생한다.
- 만약 `let` 대신 `const`로 변수를 선언하면 더 좁은 타입으로 추론된다.

```typescript
const x = "x"; // x: 'x'
let vec = { x: 10, y: 20, z: 30 }; // { x: number, y: number, z: number }
getComponent(vec, x); // ok
```

- `let`으로 선언된 변수는 재할당이 가능하지만, `const`으로 선언된 변수는 재할당이 불가능하므로 더 좁은 타입으로 추론될 수 있고, 넓히기 과정을 제어할 수 있다.

<br/>

**Example 2**

```typescript
const mixed = ["x", 1];
```

`mixed` 배열의 타입이 될 수 있는 후보들은 다음과 같다.

```
- ('x' | 1 )[]
- ['x', 1 ]
- [string, number]
- readonly [string, number]
- (string | number)[]
- readonly (string | number)[]
- [any, any]
- any[]
```

- 타입스크립트는 `mixed` 배열의 초기화 값을 가지고 타입을 `(string | number)[]`라고 추론한다.
- `mixed` 배열 타입이 `(string | number)[]`으로 추론됨에 따라 각 배열의 원소의 타입도 `string  | number`로 추론된다.

```typescript
let x = 12; // x: number
x = mixed[1]; // error: string | number 타입은 number에 할당할 수 없다.
```

- 실제로 `mixed[1]`의 타입은 `number`이지만, 넓히기 과정을 통해 `string | number` 타입으로 추론되어 오류가 발생한다.
- 그래서 `mixed` 배열의 각 원소가 좁은 타입으로 사용되기 위해서는 타입 선언이 필요하다.

```typescript
const mixed: [string, number] = ["x", 1];
let x = 12;
x = mixed[1]; // ok
```

- 또 다른 방법으로, `const` 단언문 (`as const`)을 이용하면 배열의 원소가 최대한 좁은 타입으로 추론된다.

```typescript
const mixed = ["x", 1] as const; //  mixed: readonly ["x", 1]
let x = 12;
x = mixed[1]; // ok
```

> 👉 예시를 통해 보았듯이 타입 넓히기 과정을 제어하는 방법으로는 `const`로 변수 선언하기, 타입 선언, `const` 단언문이 있다.

<br/>

# 3. 타입 좁히기

- 타입 넓히기의 반대가 타입 좁히기이다.
- **변수의 타입이 넓은 타입으로부터 좁은 타입으로 정의되는 과정**을 말한다.
- 타입스크립트 컴파일러가 더 명확하게 타입을 예측할 수 있도록 한다.
- **타입 가드**라고도 한다.

대표적인 타입 좁히기 방법으로는 **조건문**이나 **typeof 연산자**를 이용하는 것이다.

```typescript
// 조건문을 이용한 null 체크
const el = document.getElementById("foo"); // el: HTMLElement | null
if (el) {
  // el: HTMLElement
  el.innerHTML = "party";
} else {
  // el: null
  alert("No element #foo");
}
```

- 위와 같이 조건문으로 타입을 좁힐 수 있지만, 실수를 저지르기 쉽다.

```typescript
const el = document.getElementById("foo"); // el: HTMLElement | null
if (typeof el === "object") {
  // 유니온 타입에서 null을 제외하려고 했지만, 잘못된 방법 사용
  // el: HTMLElement | null
}
```

- 유니온 타입에서 `null`을 제외하려고 했지만, 잘못된 방법을 이용했다.
- 자바스크립트에서 `typeof null`이 `object`이기 때문에 조건문에서 `null` 타입이 제외되지 않았다.

```typescript
function foo(x?: number | string | null) {
  if (!x) {
    // x: number | string | null | undefined
  }
}
```

- 변수 `x`의 타입을 `null | undefined`로 좁힐려고 했으나 *빈 문자열*과 *0*도 false가 되기 때문에, 타입이 좁혀지지 않았다.

**instanceof** 연산자를 이용하여 타입 좁히기를 수행할 수 있다.

```typescript
function contains(text: string, search: string | RegExp) {
  if (search instanceof RegExp) {
    // search: RegExp
    return !!search.exec(text);
  }
  // search: string
  return text.includes(search);
}
```

`in` 연산자를 이용한 **속성체크**를 통해 타입을 좁힐 수 있다.

```typescript
interface A {
  a: number;
}

interface B {
  b: number;
}

function pickAB(ab: A | B) {
  if ("a" in ab) {
    // ab: A
    console.log(ab.a);
  } else {
    // ab: B
    console.log(ab.b);
  }
  // ab: A | B
}
```

타입을 좁히는 또 다른 방법은 **명시적 태그**를 붙이는 것이다.

```typescript
interface UploadEvent {
  type: "upload";
  filename: string;
  contents: string;
}

interface DownloadEvent {
  type: "download";
  filename: string;
}

type AppEvent = UploadEvent | DownloadEvent; // 태그된 유니온 (tagged union)

function handleEvent(e: AppEvent) {
  switch (e.type) {
    case "download":
    // e: DownloadEvent
    case "upload":
    // e: UploadEvent
  }
}
```

`Array.isArray`와 같은 **일부 내장 함수**로도 타입을 좁힐 수 있다.

```typescript
function contains(text: string, terms: string | string[]) {
  const termList = Array.isArray(terms) ? terms : [terms];
  // termList: string[]
}
```

커스텀 함수를 이용한 **사용자 정의 타입 가드**를 통해 타입을 좁힐 수 있다.

```typescript
// Example 1
function isInputElement(el: HTMLElement): el is HTMLInputElement {
  return "value" in el;
}

function getElementContent(el: HTMLElement) {
  if (isInputElement(el)) {
    // el: HTMLInputElement
    return el.value;
  }
  // el: HTMLElement
  return el.textContent;
}
```

```typescript
// Example 2
const jackson5 = ["Jackie", "Tito", "Jermaine", "Marlon", "Michael"];
const members = ["Janet", "Michael"].map(who => jackson5.find(n => n == who));
// members: (string | undefined)[]

// filter 함수를 사용해 undefined 타입 제외 시도
const members = ["Janet", "Michael"]
  .map(who => jackson5.find(n => n == who))
  .filter(who => who !== undefined); // members: (string | undefined)[]
```

```typescript
// 타입 가드 사용
function isDefined<T>(x: T | undefined): x is T {
  return x !== undefined;
}

const members = ["Janet", "Michael"]
  .map(who => jackson5.find(n => n == who))
  .filter(isDefined); // members: string[]
```
