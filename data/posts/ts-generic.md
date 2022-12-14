---
emoji: ποΈ
title: μ λ€λ¦­
date: "2022-08-20"
category: Typescript
preview: "μ λ€λ¦­μ΄λ νμμ ν¨μμ νλΌλ―Έν°μ²λΌ μ¬μ©νλ κ²μ λ§νλ€. λ€μν νμμ μ²λ¦¬ν  μ μκ³ , μ½λμ μ¬μ¬μ©μ±μ λμΌ μ μλ€. μ λ€λ¦­ νμ λνμ μΈ μ λ€λ¦­ νμμΌλ‘ λ΄μ₯ νμμΈ Array<T>κ° μλ€. λ°°μ΄ μμμ νμμ μ λ¬νλ€. νλ‘λ―Έμ€ κ°μ²΄μ λν μ λ€λ¦­ νμ Promise<T>λ μλ€. resolveν  κ°μ νμμ μ λ¬νλ€. μ§μ  μ λ€λ¦­ νμμ μ μν  μλ μλ€. μ μ©ν κΈ°λ₯μ μ κ³΅νλ λ€μν λ΄μ₯ μ λ€λ¦­ νμλ€μ΄ μλ€. Partial, Readonly, Pick, Omit λ±λ± μ λ€λ¦­ ν¨μ νμμ μ λ¬λ°λ ν¨μλ₯Ό λ§νλ€. μ μ½ μ‘°κ±΄μ μ¬μ©νλ©΄ μ λ€λ¦­ νμμ΄λ ν¨μ λ±μ μ¬μ©ν  μ μλ νμμ λ²μλ₯Ό μ’ν μ μλ€. extendsλ₯Ό μ¬μ©νμ¬ νΉμ  νμμ νμ₯νλ νμλ§ μ λ¬λ°μ μ μλλ‘ μ νν  μ μλ€. keyof μ°μ°μλ₯Ό ν¨κ» μ¬μ©νμ¬ νμμ μ νν  μλ μλ€."
---

> μ λ€λ¦­μ΄λ **νμμ ν¨μμ νλΌλ―Έν°μ²λΌ μ¬μ©νλ κ²**μ λ§νλ€. λ€μν νμμ μ²λ¦¬ν  μ μκ³ , μ½λμ μ¬μ¬μ©μ±μ λμΌ μ μλ€.

<br/>

## μ λ€λ¦­ νμ

- λνμ μΈ μ λ€λ¦­ νμμΌλ‘ λ΄μ₯ νμμΈ `Array<T>`κ° μλ€.
  - λ°°μ΄ μμμ νμμ μ λ¬νλ€.
    ```ts
    const names: Array<string> = ["Anne", "Max"];
    ```
- νλ‘λ―Έμ€ κ°μ²΄μ λν μ λ€λ¦­ νμ `Promise<T>`λ μλ€.
  - resolveν  κ°μ νμμ μ λ¬νλ€.
    ```ts
    const promise: Promise<string> = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("This is done!");
      }, 2000);
    });
    promise.then(data => {
      console.log(data);
    }); // data νμμ΄ stringμμ μ μ μλ€.
    ```
- μ§μ  μ λ€λ¦­ νμμ μ μν  μλ μλ€.

  ```ts
  interface Name {
    first: string;
    last: string;
  }

  type DancingDuo<T extends Name> = [T, T];
  ```

- μ μ©ν κΈ°λ₯μ μ κ³΅νλ λ€μν λ΄μ₯ μ λ€λ¦­ νμλ€μ΄ μλ€.
  - `Partial`, `Readonly`, `Pick`, `Omit` λ±λ±

> [Typescript - Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html)

<br/>

<br/>

## μ λ€λ¦­ ν¨μ

νμμ μ λ¬λ°λ ν¨μλ₯Ό λ§νλ€.

```ts
// λ°ν νμμ΄ T & UλΌκ³  μΆλ‘ λ¨.
function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
// νμ μΆλ‘ λκΈ° λλ¬Έμ λͺμμ μΌλ‘ νμμ μ λ¬ν  νμ μμ.
const mergedObj = merge({ name: "Max" }, { age: 30 });
console.log(mergedObj.age); // 30
```

### μ μ½μ‘°κ±΄

- μ μ½ μ‘°κ±΄μ μ¬μ©νλ©΄ μ λ€λ¦­ νμμ΄λ ν¨μ λ±μ μ¬μ©ν  μ μλ νμμ λ²μλ₯Ό μ’ν μ μλ€.
- `extends`λ₯Ό μ¬μ©νμ¬ νΉμ  νμμ νμ₯νλ νμλ§ μ λ¬λ°μ μ μλλ‘ μ νν  μ μλ€.

```ts
// κ°μ²΄ νμλ§ μ λ¬λ°μ μ μλ€.
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

- `keyof` μ°μ°μλ₯Ό ν¨κ» μ¬μ©νμ¬ νμμ μ νν  μλ μλ€.

```ts
function extract<T extends object, U extends keyof T>(obj: T, key: U) {
  return `Value: ${obj[key]}`;
}

extract({ name: "Max" }, "name");
```

<br/>

## μ λ€λ¦­ ν΄λμ€

νμμ μ λ¬λ°λ ν΄λμ€λ₯Ό λ§νλ€.

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
