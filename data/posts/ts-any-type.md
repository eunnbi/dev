---
emoji: π
title: any νμ
date: "2022-08-05"
category: Typescript
preview: "- λ¨μ΄ μλ―Έ κ·Έλλ‘ λͺ¨λ  νμμ νμ©ν  μ μλ νμμ΄λ€. - κΈ°μ‘΄μ JSλ‘ κ΅¬νλμ΄ μλ μ½λμ TSλ₯Ό μ μ§μ μΌλ‘ μ μ©ν  λ νμ©νλ©΄ μ’λ€. π - νμ§λ§ λ¬΄λΆλ³νκ² any νμμ μ¬μ©νλ©΄ TS νμ μμ€νμ μ₯μ μ λλ¦΄ μ μκ² λλ€. π­ νμ μμ μ±μ΄ μλ€.  μ μ½λλ₯Ό λ³΄λ©΄ ageλ number νμμΌλ‘ μ μΈλμμ§λ§ as any (νμλ¨μΈλ¬Έ)λ₯Ό μ¬μ©νμ¬ string νμμ κ°μ age λ³μμ ν λΉνλ€. π `any` νμμ μ΄μ©νλ©΄ νμ μ²΄μ»€λ₯Ό λ¬΄λ ₯νμμΌ νμ μμ μ±μ λ³΄μ₯ν  μ μκ² λλ€. μλμμ± κΈ°λ₯ X"
---

# π any νμ

- λ¨μ΄ μλ―Έ κ·Έλλ‘ **λͺ¨λ  νμμ νμ©**ν  μ μλ νμμ΄λ€.
- κΈ°μ‘΄μ JSλ‘ κ΅¬νλμ΄ μλ μ½λμ TSλ₯Ό μ μ§μ μΌλ‘ μ μ©ν  λ νμ©νλ©΄ μ’λ€. π
- νμ§λ§ λ¬΄λΆλ³νκ² any νμμ μ¬μ©νλ©΄ TS νμ μμ€νμ μ₯μ μ λλ¦΄ μ μκ² λλ€. π­

<br/>

## νμ μμ μ±μ΄ μλ€.

```typescript
let age: number;
age = "12" as any;
age += 1;

// λ°νμμ μ μ μλ, ageλ "121"
```

μ μ½λλ₯Ό λ³΄λ©΄ `age`λ `number` νμμΌλ‘ μ μΈλμμ§λ§ `as any` (νμλ¨μΈλ¬Έ)λ₯Ό μ¬μ©νμ¬ `string` νμμ κ°μ `age` λ³μμ ν λΉνλ€.

π `any` νμμ μ΄μ©νλ©΄ νμ μ²΄μ»€λ₯Ό λ¬΄λ ₯νμμΌ νμ μμ μ±μ λ³΄μ₯ν  μ μκ² λλ€.

## μλμμ± κΈ°λ₯ X

- λ³μμ λͺνν νμμ λΆμ¬νλ©΄ VSCodeμμ ν΄λΉ νμμ λν APIλ₯Ό λ―Έλ¦¬ λ³΄κΈ°λ‘ λμμ€ μ μκ³  tabμΌλ‘ λΉ λ₯΄κ³  μ ννκ² μ½λλ₯Ό μμ±ν  μ μλ€.
- νμ§λ§ `any` νμμ λΆμ¬νλ©΄ μλμμ± κΈ°λ₯μ λμμ λ°μ§ λͺ»νλ€.
- λͺμλ νμμ μ¬μ©νμ λλ³΄λ€ μμ°μ± μΈ‘λ©΄μμ λΆλ¦¬νλ€.

<br/>

# π§© any νμ μ¬μ©νκΈ°

**any νμμ κ΅¬μ²΄μ μΌλ‘ λ³νν΄μ μ¬μ©νμ**

μΌλ°μ μΈ μν©μμλ anyλ³΄λ€ λ κ΅¬μ²΄μ μΌλ‘ ννν  μ μλ νμμ΄ μ‘΄μ¬ν  κ°λ₯μ±μ΄ λκΈ° λλ¬Έμ λ κ΅¬μ²΄μ μΈ νμμ μ°Ύμ νμ μμ μ±μ λμ΄λλ‘ ν΄μΌ νλ€.

**Example**

λ°°μ΄

```typescript
// **BAD**
function getLength(arr: any) {
  return array.length; // any
}

// **GOOD**
function getLength(arr: any[]) {
  return array.length; // number
}
```

- ν¨μ λ΄μ `array.length` νμμ΄ μ²΄ν¬λλ€.
- ν¨μμ λ°ν νμμ΄ `any` λμ  `number`λ‘ μΆλ‘ λλ€.
- ν¨μ νΈμΆλ  λ λ§€κ°λ³μκ° λ°°μ΄μΈμ§ μ²΄ν¬λλ€.

<br/>

κ°μ²΄

- ν¨μμ λ§€κ°λ³μκ° κ°μ²΄μΈμ§ νμ§λ§, μμ±μ μ μ μλ€λ©΄ λ§€κ°λ³μ νμμ λ€μκ³Ό κ°μ΄ μ μΈνλ©΄ λλ€.

```typescript
function hasTweleveLetterKey(o: { [key: string]: any }) {
  for (const key in o) {
    if (key.length == 12) {
      console.log(key, o[key]);
      return true;
    }
  }
  return false;
}
```

- `{ [key:string]: any }` λμ  λͺ¨λ  λΉ κΈ°λ³Έν νμμ ν¬ν¨νλ `object` νμμ μ¬μ©ν  μ μλ€. `object` νμμ κ°μ²΄μ ν€λ₯Ό μ΄κ±°ν  μλ μμ§λ§, μμ±μ μ κ·Όν  μ μλ€.

```typescript
function hasTweleveLetterKey(o: object) {
  for (const key in o) {
    if (key.length == 12) {
      console.log(key, o[key]); // ERROR
      return true;
    }
  }
  return false;
}
```

<br/>

ν¨μ

- ν©μ νμμ λν΄μλ `any` λμ  μ΅μνμΌλ‘λ§λ νμμ κ΅¬μ²΄νν΄μΌ νλ€.

```typescript
type Fn0 = () => any; // λ§€κ²¨λ³μ μμ΄ νΈμΆ κ°λ₯ν λͺ¨λ  ν¨μ
type Fn1 = (arg: any) => any; // λ§€κ°λ³μ 1κ°
type Fn2 = (...args: any[]) => any; // λͺ¨λ  κ°μμ λ§€κ°λ³μ - "Function" νμκ³Ό λμΌνλ€.
```

> π `any`λ₯Ό μ¬μ©ν  λλ μ λ§λ‘ λͺ¨λ  κ°μ΄ νμ©λμ΄μΌλ§ νλμ§ λ©΄λ°ν κ²ν ν΄μΌ νλ€.

<br/>

# π anyμ μ§ν

**μμμ  `any` νμμ μ΄λ€ κ°μ ν λΉν  λ νμμ΄ κ΅¬μ²΄μ μΌλ‘ μ§ννλ€.**<br/>
`any`κ° μ§νλ°©μμ μΌλ°μ μΈ λ³μκ° μΆλ‘ λλ μλ¦¬μ λμΌνλ€.

```typescript
let val; // any
if (Math.random() < 0.5) {
  val = "/hello/"; // RegExp
} else {
  val = 12; // number
}
// val: number | RegExp
```

λ°°μ΄μ λ€μν νμμ μμλ₯Ό λ£μΌλ©΄ λ°°μ΄μ νμμ΄ νμ₯λλ©° μ§νλλ€.

```typescript
function range(start: number, limit: number) {
  const out = []; // any[]
  for (let i = start; i < limit; i++) {
    out.push(i);
  }
  return out; // number[]
}
```

`any` νμμ μ§νλ `noImplicitAny`κ° μ€μ λ μνμμ λ³μμ νμμ΄ **μμμ  `any`μΈ κ²½μ°μλ§** μΌμ΄λλ€. λͺμμ μΌλ‘ `any`λ₯Ό μ μΈνλ©΄ νμμ΄ κ·Έλλ‘ μ μ§λλ€.

```typescript
let val: any; // any
if (Math.random() < 0.5) {
  val = "/hello/"; // any
} else {
  val = 12; // any
}
// val: any
```

μμμ  `any` νμμ ν¨μ νΈμΆμ κ±°μ³λ μ§ννμ§ μλλ€.

```typescript
// **BAD**
function makeSquares(start: number, limit: number) {
  const out = []; // any[]
  range(start, limit).forEach(i => {
    out.push(i * i);
  });
  return out; // any[]
}
```

```typescript
// **GOOD**
function makeSquares(start: number, limit: number) {
  const out = range(start, limit).map(i => i * i); // number[]
  return out;
}
```

> π μμμ  `any` νμμ κ°μ ν λΉνκ±°λ `any[]` νμμ μμλ₯Ό λ£μ΄ νμμ΄ μ§νν  μ μμ§λ§, λͺμμ  νμ μ μΈμ μ¬μ©νλ κ²μ΄ νμ μμ μ±μ΄ λ λλ€.

<br/>

# any π unknown

κ³΅ν΅μ  : μ΄λ€ νμμ κ°μ΄λ  `any` νΉμ `unknown` νμ λ³μμ ν λΉ κ°λ₯νλ€.

```typescript
const a: any = 1;
const b: unknown = "string";
```

μ°¨μ΄μ 

- `any` νμμ κ°μ λͺ¨λ  νμμ λ³μμ ν λΉμ΄ κ°λ₯νλ° `unknown` νμμ κ°μ μ€μ§ `unknown`κ³Ό `any` νμμ λ³μμλ§ ν λΉ κ°λ₯νλ€.

```typescript
const c: number = a;
const d: string = b; // ERROR (Type 'unknown' is not assignable to type 'string'.)
```

- `any` νμμ κ°μ μ¬μ©νλ©΄ μ€λ₯κ° λ°μνμ§ μμ§λ§, `unknown` νμμΈ μ±λ‘ κ°μ μ¬μ©νλ©΄ μ€λ₯κ° λ°μνλ€.

```typescript
// ν¨μ λ°νκ°μ΄ any νμ
interface Book {
  name: string;
  author: string;
}

function parseYAML(yaml: string): any {
  // ...
}

const book = parseYAML(`
  name: Jane Eytre
  author: Charlotte Bronte
`);
alert(book.title); // μ€λ₯ μμ. λ°νμμ "undefined" μλ¬ λ°μ
book("read"); // μ€λ₯ μμ. λ°νμμ "TypeError" λ°μ
```

```typescript
// ν¨μ λ°νκ°μ΄ unknown νμ
function safeParseYAML(yaml: string): unknown {
  return parseYAML(yaml);
}

const book = safeParseYAML(`
  name: Jane Eytre
  author: Charlotte Bronte
`);

alert(book.title); // ERROR: κ°μ²΄κ° unknown νμμλλ€.
book("read"); // ERROR: κ°μ²΄κ° unknown νμμλλ€.
```

- `unknown` νμμ κ°μ κ·Έλλ‘ μ¬μ©ν  μ μκΈ° λλ¬Έμ **νμ λ¨μΈλ¬Έ**μ΄λ **μ¬μ©μ μ μ νμ κ°λ** νΉμ **`instanceof` μ°μ°μ**λ₯Ό μ΄μ©νμ¬ `unknown` νμμ μνλ νμμΌλ‘ λ³νν΄μΌ νλ€.

```typescript
// νμ λ¨μΈ
const book = safeParseYAML(`
  name: Jane Eytre
  author: Charlotte Bronte
`) as Book;

alert(book.title); // ERROR: 'Book' νμμ 'title' μμ±μ΄ μμ΅λλ€.
book("read"); // ERROR: μ΄ μμ νΈμΆν  μ μμ΅λλ€.
```

```typescript
// μ¬μ©μ μ μ νμ κ°λ
function isBook(val: unknown): val is Book {
  return (
    typeof val === "object" && val !== null && "name" in val && "authon" in val
  );
}

function processValue(val: unknown) {
  if (isBook(val)) {
    // val: Book
  }
}
```

```typescript
// instanceof
function processValue(val: unknown) {
  if (val instanceof Date) {
    // val: Date
  }
}
```

> π νμμ λͺ¨λ₯Ό λλ `any` λμ  `unknown`μ μ¬μ©νμ!

<br/>

# νμ μ»€λ²λ¦¬μ§

`noImplicitAny` λ₯Ό μ€μ νκ³  λͺ¨λ  μμμ  `any` λμ  λͺμμ  νμ κ΅¬λ¬Έμ μΆκ°ν΄λ `any` νμκ³Ό κ΄λ ¨λ λ¬Έμ λ€λ‘λΆν° μμ νλ€κ³  ν  μ μλ€.

- λͺμμ  `any` νμμ λ³μκ° μ‘΄μ¬ν  μ μμ.
- μλνν° νμ μ μΈ (`@types`) μμ λͺμμ  `any` νμμ΄ μ‘΄μ¬ν  μ μμ.

**type-coverage ν¨ν€μ§**

```cmd
$ npx type-coverage
9985 / 10117 98.69/5

$ npx type-coverage --detail
path/to/code.ts:1:10 getColumnInfo
path/to/module.ts:7:1 pt2
```

> π `type-coverage` ν¨ν€μ§λ₯Ό μ΄μ©νμ¬ `any` νμμ μΆμ ν  μ μλ€.
