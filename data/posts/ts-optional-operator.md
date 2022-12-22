---
emoji: 🌻
title: Optional Chaining / Property / Parameter
date: "2022-06-21"
category: Typescript
preview: "Optional Chaining Operator 객체의 프로퍼티와 메서드에 접근할 수 있는 연산자이다. - 만약 객체가 undefined 혹은 null이라면, 에러를 발생하는 대신 undefined를 반환한다. - 객체가 undefined 혹은 null일 수 있을 때 객체의 프로퍼티나 메서드의 접근을 단순화할 수 있다. (short-circuit) Optional Property - 필수적이지 않은 프로퍼티는 ?를 사용하여 옵셔널 프로퍼티로 지정할 수 있다. Optional Paramter - 함수 호출 시 필수적으로 받아오지 않아도 되는 파라미터가 있다면, 함수 구현할 때 ?를 사용하여 옵셔널 파라미터로 지정할 수 있다. - 만약 옵셔널 파라미터의 인수값을 전달하지 않았다면 undefined 값이 들어온다."
---

# Optional Chaining Operator

- 객체의 프로퍼티와 메서드에 접근할 수 있는 연산자이다.
- 만약 객체가 `undefined` 혹은 `null`이라면, 에러를 발생하는 대신 `undefined`를 반환한다.
- 객체가 `undefined` 혹은 `null`일 수 있을 때 **객체의 프로퍼티나 메서드의 접근을 단순화**할 수 있다. (`short-circuit`)

```ts
const adventurer = {
  name: "Alice",
  cat: {
    name: "Dinah"
  }
};

// const dogName = adventurer.dog && adventurer.dog.name;
const dogName = adventurer.dog?.name; // 코드가 간결해짐.
console.log(dogName); // undefined
console.log(adventurer.someNonExistentMethod?.()); // undefined
```

<br/>

# Optional Property

- 필수적이지 않은 프로퍼티는 `?`를 사용하여 옵셔널 프로퍼티로 지정할 수 있다.

```ts
interface CompanyInfo {
  name: string;
  chairman?: string;
}

const obj1: CompanyInfo = {
  name: "FaceBook"
};

const obj2: CompanyInfo = {
  name: "Twitter",
  chairman: ""
};
```

<br/>

# Optional Paramter

- 함수 호출 시 필수적으로 받아오지 않아도 되는 파라미터가 있다면, 함수 구현할 때 `?`를 사용하여 옵셔널 파라미터로 지정할 수 있다.
- 만약 옵셔널 파라미터의 인수값을 전달하지 않았다면 `undefined` 값이 들어온다.

```ts
function makeUser(name: stirng, age?: number) {
  console.log(name);
  if (age === undefined) {
    console.log(age);
  }
}

makeUser("deemmun", 100); // deemmun 100
makeUser("deemmun"); // deemmun
```
