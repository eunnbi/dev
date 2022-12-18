---
emoji: 🆚
title: 타입 선언과 타입 단언
date: "2022-06-11"
category: Typescript
preview: "- 타입 선언은 `:`을 이용하여 변수의 타입을 지정하는 것을 말한다. - 타입 단언은 `as`을 이용한다. - 타입스크립트가 추론한 타입이 있더라도 `as` 뒤에 붙여진 타입으로 간주한다. 둘 중에 어느 방법을 택해야 할까? 🤔 - 타입 선언을 이용하면 할당되는 값이 선언된 타입을 만족하는지 검사한다. - 반면, 타입 단언은 강제로 타입을 지정하는 것이기 때문에 할당되는 값이 타입을 만족하지 않더라도 타입체커는 오류를 무시한다. - 안전성 있는 타입 체크를 위해서 타입 단언보다 타입 선언을 사용해야 한다. - 하지만, 타입을 확신할 수 있는 경우에는 타입 단언을 이용해도 된다. "
---

# 타입 선언 vs 타입 단언

```typescript
interface Person {
  name: string;
}

const alice: Person = { name: "Alice" }; // 선언
const bob = { name: "Bob" } as Person; // 단언
```

- 타입 선언은 `:`을 이용하여 변수의 타입을 지정하는 것을 말한다.
- 타입 단언은 `as`을 이용한다.
- 타입스크립트가 추론한 타입이 있더라도 `as` 뒤에 붙여진 타입으로 간주한다.

<br/>

## 둘 중에 어느 방법을 택해야 할까? 🤔

```typescript
const alice: Person = {}; // 오류 O
const bob = {} as Person; // 오류 X

const alice: Person = {
  name: "alice",
  occupation: "developer"
}; // 오류 O

const bob = {
  name: "alice",
  occupation: "developer"
} as Person; // 오류 X
```

- 타입 선언을 이용하면 할당되는 값이 선언된 타입을 만족하는지 검사한다.
- 반면, 타입 단언은 강제로 타입을 지정하는 것이기 때문에 할당되는 값이 타입을 만족하지 않더라도 타입체커는 오류를 무시한다.
- 안전성 있는 타입 체크를 위해서 타입 단언보다 타입 선언을 사용해야 한다.
- 하지만, 타입을 확신할 수 있는 경우에는 타입 단언을 이용해도 된다.

<br/>

## null 아님 단언문

```typescript
const elNull = document.getElementById("foo"); // HTMLElement | null
const el = document.getElementById("foo")!; // HTMLElement
```

- `!`를 이용하여 그 값이 null이 아니라는 단언한다.
- 타입 체커는 알지 못하지만, 값이 null이 아니라고 확신할 수 있을 때 사용해야 한다.

<br/>

## const 단언문

- `as const`를 이용하여 `readonly literal type`으로 단언할 수 있다.

```ts
const mixed = ["x", 1] as const; //  mixed: readonly ["x", 1]
```

<br/>

## 함수 타입 선언

- 매개 변수나 반환 값에 타입을 일일이 명시하기보다는 함수 표현식 전체에 타입을 지정하는 것이 좋다.
- 반복되는 함수 시그니처를 타입 별칭을 이용하여 하나의 함수 타입으로 만들 수 있다.

```typescript
function add(a: number, b: number) {
  return a + b;
}
function sub(a: number, b: number) {
  return a - b;
}
function mul(a: number, b: number) {
  return a * b;
}
function div(a: number, b: number) {
  return a / b;
}
```

```typescript
type BinaryFn = (a: number, b: number) => number; // type alias
const add: BinaryFn = (a, b) => a + b;
const sub: BinaryFn = (a, b) => a - b;
const mul: BinaryFn = (a, b) => a * b;
const div: BinaryFn = (a, b) => a / b;
```
