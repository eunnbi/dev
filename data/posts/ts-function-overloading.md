---
emoji: 🥨
title: 함수 오버로딩
date: "2022-06-23"
category: Typescript
preview: "함수 이름은 동일하지만, 매개변수의 개수와 타입이 다른 함수를 정의하는 것을 말한다. 매개변수 개수는 동일하지만, 타입이 다른 경우 함수 선언 (함수명, 매개변수명, 매개변수 타입, 반환 타입) 매개변수 개수는 다르지만, 타입은 동일한 경우 null 병합 연산자 (nullish coalescing operator) - 왼쪽 피연산자가 null 또는 undefined일 때 오른쪽 피연산자를 반환하고, 그렇지 않으면 왼쪽 피연산자를 반환하는 논리 연산자이다. - cf) 논리 연산자 OR (||) : 왼쪽 피연산자가 null 또는 undefined뿐만 아니라 falsy한 값 (0, -0, 빈문자열, NaN)에 해당할 경우 오른쪽 피연산자를 반환한다."
---

**함수 이름은 동일하지만, 매개변수의 개수와 타입이 다른 함수를 정의하는 것을 말한다.**

## 매개변수 개수는 동일하지만, 타입이 다른 경우

```ts
// 함수 선언 (함수명, 매개변수명, 매개변수 타입, 반환 타입)
function add(a: string, b: string): string;
function add(a: number, b: number): number;

// 함수 구현
function add(a: any, b: any): any {
  return a + b;
}

console.log(add(1, 2)); // 3
console.log(add("a", "b")); // "ab"
```

<br/>

## 매개변수 개수는 다르지만, 타입은 동일한 경우

```ts
// 함수 선언
function add(a: number): number;
function add(a: number, b: number): number;
function add(a: number, b: number, c: number): number;

// 함수 구현
function add(a: number, b?: number, c?: number): number {
  return a + (b ?? 0) + (c ?? 0);
}

console.log(add(1)); // 1
console.log(add(1, 2)); // 3
console.log(add(1, 2, 3)); // 6
```

<br/>

> **null 병합 연산자** (`nullish coalescing operator`)
>
> - 왼쪽 피연산자가 `null` 또는 `undefined`일 때 오른쪽 피연산자를 반환하고, 그렇지 않으면 왼쪽 피연산자를 반환하는 논리 연산자이다.
> - cf) 논리 연산자 OR (`||`) : 왼쪽 피연산자가 `null` 또는 `undefined`뿐만 아니라 `falsy`한 값 (0, -0, 빈문자열, NaN)에 해당할 경우 오른쪽 피연산자를 반환한다.
>
> ```ts
> const userInput = "";
> console.log(userInput || "DEFAULT"); // DEFAULT
> console.log(userInput ?? "DEFAULT"); // ""
> ```

<br/>

## 매개변수의 개수와 타입이 다른 경우

```ts
// 함수 선언
function printConsole(a: number): void;
function printConsole(a: string): void;
function printConsole(a: number, b: string): void;
function printConsole(a: string, b: number): void;

// 함수 구현
function printConsole(a: any, b?: any): void {
  if (b === undefined) {
    console.log(a);
  } else {
    console.log(a, b);
  }
}

printConsole("1"); // 1
printConsole("1", 2); // 1 2
printConsole("1", "2"); // ERROR: No overload matches this call. (4개의 함수 선언에서 첫번째와 두번째 매개변수가 문자열인 함수가 존재하지 않기 때문이다.)
```
