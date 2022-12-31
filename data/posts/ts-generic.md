---
emoji: 🎖️
title: 제네릭
date: "2022-08-20"
category: Typescript
preview: "제네릭이란 타입을 함수의 파라미터처럼 사용하는 것을 말한다. 다양한 타입을 처리할 수 있고, 코드의 재사용성을 높일 수 있다. 제네릭 타입 대표적인 제네릭 타입으로 내장 타입인 Array<T>가 있다. 배열 원소의 타입을 전달한다. 프로미스 객체에 대한 제네릭 타입 Promise<T>도 있다. resolve할 값의 타입을 전달한다. 직접 제네릭 타입을 정의할 수도 있다. 유용한 기능을 제공하는 다양한 내장 제네릭 타입들이 있다. Partial, Readonly, Pick, Omit 등등 제네릭 함수 타입을 전달받는 함수를 말한다. 제약 조건을 사용하면 제네릭 타입이나 함수 등에 사용할 수 있는 타입의 범위를 좁힐 수 있다. extends를 사용하여 특정 타입을 확장하는 타입만 전달받을 수 있도록 제한할 수 있다. keyof 연산자를 함께 사용하여 타입을 제한할 수도 있다."
---

> 제네릭이란 **타입을 함수의 파라미터처럼 사용하는 것**을 말한다. 다양한 타입을 처리할 수 있고, 코드의 재사용성을 높일 수 있다.

<br/>

## 제네릭 타입

- 대표적인 제네릭 타입으로 내장 타입인 `Array<T>`가 있다.
  - 배열 원소의 타입을 전달한다.
    ```ts
    const names: Array<string> = ["Anne", "Max"];
    ```
- 프로미스 객체에 대한 제네릭 타입 `Promise<T>`도 있다.
  - resolve할 값의 타입을 전달한다.
    ```ts
    const promise: Promise<string> = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("This is done!");
      }, 2000);
    });
    promise.then(data => {
      console.log(data);
    }); // data 타입이 string임을 알 수 있다.
    ```
- 직접 제네릭 타입을 정의할 수도 있다.

  ```ts
  interface Name {
    first: string;
    last: string;
  }

  type DancingDuo<T extends Name> = [T, T];
  ```

- 유용한 기능을 제공하는 다양한 내장 제네릭 타입들이 있다.
  - `Partial`, `Readonly`, `Pick`, `Omit` 등등

> [Typescript - Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html)

<br/>

<br/>

## 제네릭 함수

타입을 전달받는 함수를 말한다.

```ts
// 반환 타입이 T & U라고 추론됨.
function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
// 타입 추론되기 때문에 명시적으로 타입을 전달할 필요 없음.
const mergedObj = merge({ name: "Max" }, { age: 30 });
console.log(mergedObj.age); // 30
```

### 제약조건

- 제약 조건을 사용하면 제네릭 타입이나 함수 등에 사용할 수 있는 타입의 범위를 좁힐 수 있다.
- `extends`를 사용하여 특정 타입을 확장하는 타입만 전달받을 수 있도록 제한할 수 있다.

```ts
// 객체 타입만 전달받을 수 있다.
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Max" }, 30); // Compile Error
```

```ts
interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(elements: T): [T, string] {
  let desciptionText = "Got no value.";
  if (elements.length === 1) {
    desciptionText = "Got 1 element.";
  } else if (elements.length > 1) {
    desciptionText = `Got ${element.length} elements.`;
  }
  return [elements, descriptionText];
}
```

- `keyof` 연산자를 함께 사용하여 타입을 제한할 수도 있다.

```ts
function extract<T extends object, U extends keyof T>(obj: T, key: U) {
  return `Value: ${obj[key]}`;
}

extract({ name: "Max" }, "name");
```

<br/>

## 제네릭 클래스

타입을 전달받는 클래스를 말한다.

```ts
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Max");
textStorage.addItem("Anne");
textStorage.removeItem("Max");

const numberStorage = new DataStorage<number>();
```
