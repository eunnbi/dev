---
emoji: 🏷️
title: 타입의 종류
date: "2022-06-08"
category: Typescript
preview: 'number, string, boolean const num: number = 10; const str: string = "hi"; const isLoggedIn: boolean = false; object const person: { name: string; age: number; } = { name: "John Smith", age: 30 }; array const arr1: number[] = [1, 2, 3]; const arr2: (string | number)[] = [1, "arr"]; const arr: Array<number> = [1, 2, 3]; // generic tuple 배열의 길이가 고정되고 각 요소의 타입이 지정되어 있는 배열 형식을 말한다. const arr: [string, number] = ["hi", 10]; enum (열거형) 특정 값(상수)들의 집합을 말한다.'
---

# number, string, boolean

```ts
const num: number = 10;
const str: string = "hi";
const isLoggedIn: boolean = false;
```

<br/>

# object

```ts
const person: {
  name: string;
  age: number;
} = {
  name: "John Smith",
  age: 30
};
```

<br/>

# array

```ts
const arr1: number[] = [1, 2, 3];
const arr2: (string | number)[] = [1, "arr"];
```

```ts
const arr: Array<number> = [1, 2, 3]; // generic
```

<br/>

# tuple

배열의 길이가 고정되고 각 요소의 타입이 지정되어 있는 배열 형식을 말한다.

```ts
const arr: [string, number] = ["hi", 10];
```

<br/>

# enum (열거형)

특정 값(상수)들의 집합을 말한다.

```ts
enum Avengers {
  Capt,
  IronMan,
  Thor
}
const hero1: Avengers = Avengers.Capt;

const hero2: Avengers = Avengers[0]; // index number
```

```ts
enum Avengers {
  Capt = 2, // change index
  IronMan,
  Thor
}
let hero: Avengers = Avengers[2]; // Capt
let hero: Avengers = Avengers[4]; // Thor
```

<br/>

# any

모든 타입을 허용할 수 있는 타입이다.

```ts
let value: any = "hi";
value = 10;
value = ["a", 2, true];
```

<br/>

# void

`void` 타입의 변수에는 `undefined`와 `null`만을 할당할 수 있고, 반환값이 없는 함수의 반환 타입을 지정할 때 사용된다.

```ts
let unuseful: void = undefined;
function notuse(): void {
  console.log("sth");
}
```

<br/>

# unknown

- `unknown` 타입의 변수는 모든 타입의 값들을 할당받을 수 있다.
- 하지만, `unknown` 타입의 값은 `unknown` 타입이나 `any`타입의 변수에만 할당할 수 있다.

```ts
let userInput: unknown;
userInput = 5;
userInput = "Max";
let userName: string = userInput; // Error: Type 'unknown' is not assignable to type 'string'.
```

<br/>

# never

- `never` 타입은 `any` 타입의 값을 포함해 어떤 값도 가질 수 없다.
- 바닥 타입이라고도 한다.

```ts
// 이 함수는 절대 함수의 끝까지 실행되지 않는다
function neverEnd(): never {
  while (true) {}
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}
```
