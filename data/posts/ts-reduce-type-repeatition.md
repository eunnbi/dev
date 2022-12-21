---
emoji: 😉
title: 타입 반복 줄이기
date: "2022-06-20"
category: Typescript
preview: "👉 `DRY`(Don't Repeat Yourself) 원칙을 타입에 대해서도 적용해야 한다!! 타입에 이름 붙이기 - 반복을 줄이는 가장 간단한 방법은 타입에 이름을 붙이는 것이다. - 즉, 타입 별칭이나 인터페이스를 사용하면 된다. extends 사용하기 extends를 사용하여 인터페이스 필드의 반복을 피할 수 있다. 인덱싱, 매핑된 타입, keyof 인덱싱을 이용하여 어떤 타입의 **부분집합**으로 타입을 정의할 수 있다. 더 나아가 **매핑된 타입** 이용하여 중복을 더 제거할 수 있다. 제네릭 타입 - 제네릭이란 **타입을 함수의 파라미터처럼 사용하는 것**을 의미한다. - 함수에서 매개변수로 매핑할 수 있는 값을 제한하기 위해 타입 시스템을 사용하는 것처럼 제네릭 타입에서도 매개변수를 제한할 수 있는 방법이 필요하다. - 대표적인 방법이 `extends`를 사용하는 것이다. - `extends`를 사용하여 제네릭 매개변수가 특정 타입을 확장한다고 선언할 수 있다."
---

> 👉 `DRY`(Don't Repeat Yourself) 원칙을 타입에 대해서도 적용해야 한다!!

<br/>

# 타입에 이름 붙이기

- 반복을 줄이는 가장 간단한 방법은 타입에 이름을 붙이는 것이다.
- 즉, 타입 별칭이나 인터페이스를 사용하면 된다.

```typescript
// 🚧 같은 타입이 반복적으로 등장함.
function distance(a: { x: number; y: number }, b: { x: number; y: number }) {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}
```

```typescript
// 👍 반복되는 타입에 Point2D라는 이름 붙이기 (interface)
interface Point2D {
  x: number;
  y: number;
}

function distance(a: Point2D, b: Point2D) {
  /*...*/
}
```

```typescript
// 🚧 같은 함수 시그니처가 반복됨.
function get(url: string, opts: Options): Promise<Response> {
  /*...*/
}
function post(url: string, opts: Options): Promise<Response> {
  /*...*/
}
```

```typescript
// 👍 반복되는 함수 시그니처를 함수 타입으로 정의 (type alias)
type HTTPFunction = (url: string, opts: Options) => Promise<Response>;
const get: HTTPFunction = (url, opts) => {
  /*...*/
};
const post: HTTPFunction = (url, opts) => {
  /*...*/
};
```

<br/>

# extends 사용하기

`extends`를 사용하여 인터페이스 필드의 반복을 피할 수 있다.

```typescript
// 🚧 인터페이스 필드 중복
interface Person {
  firstName: string;
  lastName: string;
}

interface PersonWithBirthDate {
  firstName: sgring;
  lastName: string;
  birth: Date;
}
```

```typescript
// 👍 PersonWithBirthDate는 Person의 필드를 상속받는다.
interface PersonWithBirthDate extends Person {
  birth: Date;
}
```

<br/>

# 인덱싱, 매핑된 타입, keyof

인덱싱을 이용하여 어떤 타입의 **부분집합**으로 타입을 정의할 수 있다.

```typescript
// 🚧 타입 중복
interface State {
  userId: string;
  pageTitle: string;
  recentFiles: string[];
  pageContents: string;
}

interface TopNavState {
  userId: string;
  pageTitle: string;
  recentFiles: string[];
}
```

```typescript
// 👍 State를 인덱싱하여 타입 중복 제거
interface TopNavState {
  userId: State["userId"];
  pageTitle: State["pageTitle"];
  recentFiles: State["recentFiles"];
}
```

더 나아가 **매핑된 타입** 이용하여 중복을 더 제거할 수 있다.

```typescript
// 👍 매핑된 타입
type TopNavState = {
  [k in "userId" | "pageTitle" | "recentFiles"]: State[k];
};
```

인덱싱을 이용하여 중복을 제거하는 또 다른 예시 (태그된 유니온)

```typescript
interface SaveAction {
  type: "save";
  // ...
}

interface LoadAction {
  type: "load";
  // ...
}

type Action = SaveAction | LoadAction;
type ActionType = "save" | "load"; // 🚧 태그된 유니온에서 타입 중복 발생
```

```typescript
type ActionType = Action["type"]; // 👍 Action 유니온 타입을 인덱싱하여 타입 중복 제거
```

매핑된 타입과 `keyof`를 같이 사용하여 타입 중복을 피할 수 있다.

```typescript
// 🚧 타입 중복
interface Options {
  width: number;
  height: number;
  color: string;
  label: string;
}

interface OptionsUpdate {
  width?: number;
  height?: number;
  color?: string;
  label?: string;
}
```

```typescript
// 👍 매핑된 타입과 keyof를 사용하여 중복 제거
interface OptionsUpdate {
  [k in keyof Options]?: Options[k];
}

type OptionsKeys = keyof Options; // "width" | "height" | "color" | "label"
```

<br/>

# 제네릭 타입

- 제네릭이란 **타입을 함수의 파라미터처럼 사용하는 것**을 의미한다.
- 함수에서 매개변수로 매핑할 수 있는 값을 제한하기 위해 타입 시스템을 사용하는 것처럼 제네릭 타입에서도 매개변수를 제한할 수 있는 방법이 필요하다.
- 대표적인 방법이 `extends`를 사용하는 것이다.
- `extends`를 사용하여 제네릭 매개변수가 특정 타입을 확장한다고 선언할 수 있다.

```typescript
interface Name {
  first: string;
  last: string;
}

type DancingDuo<T extends Name> = [T, T];

// OK
const couple1: DancingDuo<Name> = [
  { first: "Fred", last: "Astaire" },
  { first: "Ginger", last: "Rogers" }
];

// Error: { first: string }은 Name에서 확장된 타입이 아니다.
const couple1: DancingDuo<{ first: string }> = [
  { first: "Fred" },
  { first: "Ginger" }
];
```

앞서 본 매핑된 타입을 이용하여 정의한 타입들을 **제네릭 타입을 이용하여 일반화시킬 수 있다.**

```typescript
// 👍 매핑된 타입
type TopNavState = {
  [k in "userId" | "pageTitle" | "recentFiles"]: State[k];
}

interface OptionsUpdate {
  [k in keyof Options]?: Options[k];
}
```

```typescript
// 💖 제네릭 타입
type Pick<T, K extends keyof T> = {
  [k in K]: T[k];
};
type TopNavState = Pick<State, "userId" | "pageTitle" | "recentFiles">;

type Partial<T, K extends keyof T> = {
  [k in K]?: T[k];
};
type OptionsUpdate = Partial<Options, keyof Options>;
```

표준 라이브러리에는 `Pick`, `Partial`, `ReturnType`등 다양한 제네릭 타입이 정의되어 있고, 이를 활용하는 것에 익숙해져야 한다.
