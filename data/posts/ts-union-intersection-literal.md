---
emoji: 🌷
title: Union Type, Intersection Type, Literal Type
date: "2022-06-12"
category: Typescript
preview: "Union Type - 유니온 타입은 변수가 여러 타입을 가질 수 있는 경우에 주로 사용된다. - `|` 연산자를 이용해 여러 타입을 하나로 묶어 그 중 하나의 타입을 가진다는 의미로 사용된다. Intersection Type - 여러 타입을 모두 만족하는 하나의 타입을 의미한다. - `&` 연산자를 이용해 여러 타입을 하나로 묶는다. 추가: `extends` 키워드 사용하기 ⚠️ Union Type을 사용할 때 주의해야 할 점 - 위 코드에서 `someone` 파라미터의 타입이 유니온 타입을 통해 정의되었고, `Person`이거나 `Developer`이다. - 타입스크립트 관점에서 보면 `introduce` 함수가 호출될 때 `someone` 파라미터에 `Person` 타입이 올지 `Developer` 타입이 올지 모른다. - 그래서 `name`은 두 타입의 공통 속성이기에 정상 동작하지만, `age`와 `skill`은 공통 속성이 아니기 때문에 타입 오류가 발생된다."
---

# Union Type

- 유니온 타입은 변수가 여러 타입을 가질 수 있는 경우에 주로 사용된다.
- `|` 연산자를 이용해 여러 타입을 하나로 묶어 그 중 하나의 타입을 가진다는 의미로 사용된다.

```typescript
function getAge(age: number | string) {
  if (typeof age === "number") {
    age.toFixed();
    return age;
  }
  if (typeof age === "string") {
    return age;
  }
  return new TypeError("age must be number or string");
}
```

<br/>

# Intersection Type

- 여러 타입을 모두 만족하는 하나의 타입을 의미한다.
- `&` 연산자를 이용해 여러 타입을 하나로 묶는다.

```typescript
interface Person {
  name: string;
}

interface LifeSpan {
  birth: Date;
  deaht?: Date;
}

type PersonSpan = Person & LifeSpan;

const ps: PersonSpan = {
  name: "Alan Turing",
  birth: new Date("1912/06/23")
}; // 정상!!
```

> 추가: `extends` 키워드 사용하기
>
> ```typescript
> // extends 키워드를 사용하여 PersonSpan을 정의할 수 있다.
> interface Person {
>   name: string;
> }
> interface PersonSpan extends Person {
>   birth: Date;
>   deaht?: Date;
> }
> ```

<br/>

# ⚠️ Union Type을 사용할 때 주의해야 할 점

```typescript
interface Person {
  name: string;
  age: number;
}

interface Developer {
  name: string;
  skill: string;
}

function introduce(someone: Person | Developer) {
  someone.name; // O 정상 동작
  someone.age; // X 타입 오류
  someone.skill; // X 타입 오류
}
```

- 위 코드에서 `someone` 파라미터의 타입이 유니온 타입을 통해 정의되었고, `Person`이거나 `Developer`이다.
- 타입스크립트 관점에서 보면 `introduce` 함수가 호출될 때 `someone` 파라미터에 `Person` 타입이 올지 `Developer` 타입이 올지 모른다.
- 그래서 `name`은 두 타입의 공통 속성이기에 정상 동작하지만, `age`와 `skill`은 공통 속성이 아니기 때문에 타입 오류가 발생된다.

<br/>

아래와 같이 코드를 수정해야 한다.

1.  `in` 연산자 이용하여 속성 확인하기

    > ```typescript
    > function introduce(someone: Person | Developer) {
    >   if ("name" in someone) {
    >     someone.name; // O 정상 동작
    >   }
    > }
    > ```

2.  `tagged union` (태그 기법)

    > ```typescript
    > interface Person {
    >   name: string;
    >   age: number;
    >   kind: "person";
    > }
    >
    > interface Developer {
    >   name: string;
    >   skill: string;
    >   kind: "developer";
    > }
    >
    > function introduce(someone: Person | Developer) {
    >   if (someone.kind == "developer") {
    >     someone.skill; // O 정상동작
    >   }
    > }
    > ```

3.  `class`<br/>
    `interface`는 타입으로만 사용할 수 있지만, `class`는 타입과 값으로 모두 사용할 수 있다.
    > ```typescript
    > class Person {
    >   constructor(public name: string, public age: number) {}
    > }
    > class Developer {
    >   constructor(public name: string, public skill: string) {}
    > }
    >
    > function introduce(someone: Person | Developer) {
    >   if (someone instanceof Developer) {
    >     someone.skill; // O 정상동작
    >   }
    > }
    > ```

<br/>

# Literal Type

- **구체적인 값**, `string` 혹은 `number` 타입의 값을 타입으로 지정할 수 있다. 이를 `Literal Type`이라고 한다.

```ts
let changingString = "Hello World";
changingString = "Olá Mundo"; // string

const constantString = "Hello World"; // "Hello World"
```

- `var`이나 `let`으로 선언한 변수는 값 재할당이 가능하지만, `const`으로 선언한 변수는 재할당이 불가능하다.
- 그래서 타입스크립트는 `const`으로 선언한 변수에 대해 `literal type`으로 추론한다.

```ts
let x: "hello" = "hello";
x = "hello"; // OK
x = "howdy"; // ERROR
```

```ts
// 유니온 리터럴 타입
function printText(s: string, alignment: "left" | "right" | "center") {
  // ...
}
printText("Hello, world", "left"); // OK
printText("G'day, mate", "centre"); // ERROR
```

```ts
// non-litreal 타입과 literal 타입의 유니온 타입
interface Options {
  width: number;
}
function configure(x: Options | "auto") {
  // ...
}
configure({ width: 100 });
configure("auto"); // OK
configure("automatic"); // ERROR
```
