---
emoji: π
title: νμ μΆλ‘ 
date: "2022-06-10"
category: Typescript
preview: "νμ μΆλ‘  - νμμ€ν¬λ¦½νΈλ νμ μΆλ‘ μ μ κ·Ήμ μΌλ‘ μννλ€. π - κ·Έλμ νμμ€ν¬λ¦½νΈλ₯Ό μμ±ν  λ λ§μ νμ κ΅¬λ¬Έμ΄ λΆνμνλ€. - μ€νλ € λͺ¨λ  λ³μμ νμμ μ μΈνλ κ²μ λΉμμ°μ μ΄λ€. - λ³΅μ‘ν κ°μ²΄λ νμ μΆλ‘ μ΄ κ°λ₯νλ€. - λΉκ΅¬μ‘°ν ν λΉλ¬Έμ λͺ¨λ  μ§μ­ λ³μμ νμμ΄ μΆλ‘ λλλ‘ νλ€. - ν¨μμ λ°νκ°λ μΆλ‘  κ°λ₯νλ€. - ν¨μμ λ§€κ°λ³μλ λλΆλΆ νμ μΆλ‘ μ΄ λΆκ°λ₯νμ¬ νμ κ΅¬λ¬Έμ΄ νμνλ€. - νμ§λ§, ν¨μ λ§€κ°λ³μ κΈ°λ³Έκ°μ΄ μλ κ²½μ° νμ μΆλ‘ μ΄ κ°λ₯νλ€. νμ λνκΈ° - μμ λ³΄μλ―μ΄ λ³μλ₯Ό μ΄κΈ°νν  λ νμμ λͺμνμ§ μμΌλ©΄ νμ μΆλ‘ μ ν΅ν΄ νμμ κ²°μ νλ€."
---

# 1. νμ μΆλ‘ 

- νμμ€ν¬λ¦½νΈλ νμ μΆλ‘ μ μ κ·Ήμ μΌλ‘ μννλ€. π
- κ·Έλμ νμμ€ν¬λ¦½νΈλ₯Ό μμ±ν  λ λ§μ νμ κ΅¬λ¬Έμ΄ λΆνμνλ€.
- μ€νλ € λͺ¨λ  λ³μμ νμμ μ μΈνλ κ²μ λΉμμ°μ μ΄λ€.

  ```typescript
  let x: number = 12; // νμ κ΅¬λ¬Έ λΆνμ
  let x = 12; // νμμ΄ numberλ‘ μΆλ‘ λ¨. (x: number)
  ```

- λ³΅μ‘ν κ°μ²΄λ νμ μΆλ‘ μ΄ κ°λ₯νλ€.

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

- λ°°μ΄ λ° κ°μ²΄ λΉκ΅¬μ‘°ν ν λΉλ¬Έμ λͺ¨λ  λ³μμ νμμ΄ μΆλ‘ λλλ‘ νλ€.

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

- ν¨μμ λ°νκ°λ μΆλ‘  κ°λ₯νλ€.

  ```typescript
  function square(nums: number[]) {
    return nums.map(x => x * x);
  }
  const squares = square([1, 2, 3, 4]); // squares: number[]
  ```

- ν¨μμ λ§€κ°λ³μλ λλΆλΆ νμ μΆλ‘ μ΄ λΆκ°λ₯νμ¬ νμ κ΅¬λ¬Έμ΄ νμνλ€.
- νμ§λ§, ν¨μ λ§€κ°λ³μ κΈ°λ³Έκ°μ΄ μλ κ²½μ° νμ μΆλ‘ μ΄ κ°λ₯νλ€.

  ```typescript
  function parseNumber(str: string, base = 10) {
    return;
  }
  // function parseNumber(str: string, base?: number): void
  ```

<br/>

# 2. νμ λνκΈ°

- μμ λ³΄μλ―μ΄ λ³μλ₯Ό μ΄κΈ°νν  λ νμμ λͺμνμ§ μμΌλ©΄ νμ μΆλ‘ μ ν΅ν΄ νμμ κ²°μ νλ€.
- **μ΄κΈ°ν κ°μ κ°μ§κ³  λ³μμ ν λΉ κ°λ₯ν κ°λ€μ μ§ν©μ μ μΆνλ€.** μ΄ κ³Όμ μ **λνκΈ°**λΌκ³  νλ€.
- νμ λνκΈ°μ κ³Όμ μ μ΄ν΄νλ©΄ μ€λ₯μ μμΈμ λΉ λ₯΄κ² νμνκ³  νμ κ΅¬λ¬Έμ λ ν¨κ³Όμ μΌλ‘ μ¬μ©ν  μ μλ€.

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
getComponent(vec, x); // ERROR: string νμμ μΈμλ 'x' | 'y' | 'z' νμμ λ§€κ°λ³μμ ν λΉλ  μ μμ΅λλ€.
```

- λ³μ `x`μ νμμ ν λΉ μμ μμ λνκΈ°κ° λμνμ¬ νμμ΄ `string`μΌλ‘ μΆλ‘ λμλ€.
- νμ§λ§, `string` νμμ `'x' | 'y' | 'z'` νμμ ν λΉμ΄ λΆκ°λ₯νκΈ° λλ¬Έμ μ€λ₯κ° λ°μνλ€.
- λ§μ½ `let` λμ  `const`λ‘ λ³μλ₯Ό μ μΈνλ©΄ λ μ’μ νμμΌλ‘ μΆλ‘ λλ€.

```typescript
const x = "x"; // x: 'x'
let vec = { x: 10, y: 20, z: 30 }; // { x: number, y: number, z: number }
getComponent(vec, x); // ok
```

- `let`μΌλ‘ μ μΈλ λ³μλ μ¬ν λΉμ΄ κ°λ₯νμ§λ§, `const`μΌλ‘ μ μΈλ λ³μλ μ¬ν λΉμ΄ λΆκ°λ₯νλ―λ‘ λ μ’μ νμμΌλ‘ μΆλ‘ λ  μ μκ³ , λνκΈ° κ³Όμ μ μ μ΄ν  μ μλ€.

<br/>

**Example 2**

```typescript
const mixed = ["x", 1];
```

`mixed` λ°°μ΄μ νμμ΄ λ  μ μλ νλ³΄λ€μ λ€μκ³Ό κ°λ€.

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

- νμμ€ν¬λ¦½νΈλ `mixed` λ°°μ΄μ μ΄κΈ°ν κ°μ κ°μ§κ³  νμμ `(string | number)[]`λΌκ³  μΆλ‘ νλ€.
- `mixed` λ°°μ΄ νμμ΄ `(string | number)[]`μΌλ‘ μΆλ‘ λ¨μ λ°λΌ κ° λ°°μ΄μ μμμ νμλ `string  | number`λ‘ μΆλ‘ λλ€.

```typescript
let x = 12; // x: number
x = mixed[1]; // error: string | number νμμ numberμ ν λΉν  μ μλ€.
```

- μ€μ λ‘ `mixed[1]`μ νμμ `number`μ΄μ§λ§, λνκΈ° κ³Όμ μ ν΅ν΄ `string | number` νμμΌλ‘ μΆλ‘ λμ΄ μ€λ₯κ° λ°μνλ€.
- κ·Έλμ `mixed` λ°°μ΄μ κ° μμκ° μ’μ νμμΌλ‘ μ¬μ©λκΈ° μν΄μλ νμ μ μΈμ΄ νμνλ€.

```typescript
const mixed: [string, number] = ["x", 1];
let x = 12;
x = mixed[1]; // ok
```

- λ λ€λ₯Έ λ°©λ²μΌλ‘, `const` λ¨μΈλ¬Έ (`as const`)μ μ΄μ©νλ©΄ λ°°μ΄μ μμκ° μ΅λν μ’μ νμμΌλ‘ μΆλ‘ λλ€.

```typescript
const mixed = ["x", 1] as const; //  mixed: readonly ["x", 1]
let x = 12;
x = mixed[1]; // ok
```

> π μμλ₯Ό ν΅ν΄ λ³΄μλ―μ΄ νμ λνκΈ° κ³Όμ μ μ μ΄νλ λ°©λ²μΌλ‘λ `const`λ‘ λ³μ μ μΈνκΈ°, νμ μ μΈ, `const` λ¨μΈλ¬Έμ΄ μλ€.

<br/>

# 3. νμ μ’νκΈ°

- νμ λνκΈ°μ λ°λκ° νμ μ’νκΈ°μ΄λ€.
- **λ³μμ νμμ΄ λμ νμμΌλ‘λΆν° μ’μ νμμΌλ‘ μ μλλ κ³Όμ **μ λ§νλ€.
- νμμ€ν¬λ¦½νΈ μ»΄νμΌλ¬κ° λ λͺννκ² νμμ μμΈ‘ν  μ μλλ‘ νλ€.
- **νμ κ°λ**λΌκ³ λ νλ€.

λνμ μΈ νμ μ’νκΈ° λ°©λ²μΌλ‘λ **μ‘°κ±΄λ¬Έ**μ΄λ **typeof μ°μ°μ**λ₯Ό μ΄μ©νλ κ²μ΄λ€.

```typescript
// μ‘°κ±΄λ¬Έμ μ΄μ©ν null μ²΄ν¬
const el = document.getElementById("foo"); // el: HTMLElement | null
if (el) {
  // el: HTMLElement
  el.innerHTML = "party";
} else {
  // el: null
  alert("No element #foo");
}
```

- μμ κ°μ΄ μ‘°κ±΄λ¬ΈμΌλ‘ νμμ μ’ν μ μμ§λ§, μ€μλ₯Ό μ μ§λ₯΄κΈ° μ½λ€.

```typescript
const el = document.getElementById("foo"); // el: HTMLElement | null
if (typeof el === "object") {
  // μ λμ¨ νμμμ nullμ μ μΈνλ €κ³  νμ§λ§, μλͺ»λ λ°©λ² μ¬μ©
  // el: HTMLElement | null
}
```

- μ λμ¨ νμμμ `null`μ μ μΈνλ €κ³  νμ§λ§, μλͺ»λ λ°©λ²μ μ΄μ©νλ€.
- μλ°μ€ν¬λ¦½νΈμμ `typeof null`μ΄ `object`μ΄κΈ° λλ¬Έμ μ‘°κ±΄λ¬Έμμ `null` νμμ΄ μ μΈλμ§ μμλ€.

```typescript
function foo(x?: number | string | null) {
  if (!x) {
    // x: number | string | null | undefined
  }
}
```

- λ³μ `x`μ νμμ `null | undefined`λ‘ μ’νλ €κ³  νμΌλ *λΉ λ¬Έμμ΄*κ³Ό *0*λ falseκ° λκΈ° λλ¬Έμ, νμμ΄ μ’νμ§μ§ μμλ€.

**instanceof** μ°μ°μλ₯Ό μ΄μ©νμ¬ νμ μ’νκΈ°λ₯Ό μνν  μ μλ€.

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

`in` μ°μ°μλ₯Ό μ΄μ©ν **μμ±μ²΄ν¬**λ₯Ό ν΅ν΄ νμμ μ’ν μ μλ€.

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

νμμ μ’νλ λ λ€λ₯Έ λ°©λ²μ **λͺμμ  νκ·Έ**λ₯Ό λΆμ΄λ κ²μ΄λ€.

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

type AppEvent = UploadEvent | DownloadEvent; // νκ·Έλ μ λμ¨ (tagged union)

function handleEvent(e: AppEvent) {
  switch (e.type) {
    case "download":
    // e: DownloadEvent
    case "upload":
    // e: UploadEvent
  }
}
```

`Array.isArray`μ κ°μ **μΌλΆ λ΄μ₯ ν¨μ**λ‘λ νμμ μ’ν μ μλ€.

```typescript
function contains(text: string, terms: string | string[]) {
  const termList = Array.isArray(terms) ? terms : [terms];
  // termList: string[]
}
```

μ»€μ€ν ν¨μλ₯Ό μ΄μ©ν **μ¬μ©μ μ μ νμ κ°λ**λ₯Ό ν΅ν΄ νμμ μ’ν μ μλ€.

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

// filter ν¨μλ₯Ό μ¬μ©ν΄ undefined νμ μ μΈ μλ
const members = ["Janet", "Michael"]
  .map(who => jackson5.find(n => n == who))
  .filter(who => who !== undefined); // members: (string | undefined)[]
```

```typescript
// νμ κ°λ μ¬μ©
function isDefined<T>(x: T | undefined): x is T {
  return x !== undefined;
}

const members = ["Janet", "Michael"]
  .map(who => jackson5.find(n => n == who))
  .filter(isDefined); // members: string[]
```
