---
emoji: π·οΈ
title: νμμ μ’λ₯
date: "2022-06-08"
category: Typescript
preview: 'number, string, boolean const num: number = 10; const str: string = "hi"; const isLoggedIn: boolean = false; object const person: { name: string; age: number; } = { name: "John Smith", age: 30 }; array const arr1: number[] = [1, 2, 3]; const arr2: (string | number)[] = [1, "arr"]; const arr: Array<number> = [1, 2, 3]; // generic tuple λ°°μ΄μ κΈΈμ΄κ° κ³ μ λκ³  κ° μμμ νμμ΄ μ§μ λμ΄ μλ λ°°μ΄ νμμ λ§νλ€. const arr: [string, number] = ["hi", 10]; enum (μ΄κ±°ν) νΉμ  κ°(μμ)λ€μ μ§ν©μ λ§νλ€.'
---

# 1. number, string, boolean

```ts
const num: number = 10;
const str: string = "hi";
const isLoggedIn: boolean = false;
```

<br/>

# 2. object

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

# 3. array

```ts
const arr1: number[] = [1, 2, 3];
const arr2: (string | number)[] = [1, "arr"];
```

```ts
const arr: Array<number> = [1, 2, 3]; // generic
```

<br/>

# 4. tuple

λ°°μ΄μ κΈΈμ΄κ° κ³ μ λκ³  κ° μμμ νμμ΄ μ§μ λμ΄ μλ λ°°μ΄ νμμ λ§νλ€.

```ts
const arr: [string, number] = ["hi", 10];
```

<br/>

# 5. enum (μ΄κ±°ν)

νΉμ  κ°(μμ)λ€μ μ§ν©μ λ§νλ€.

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
const hero1: Avengers = Avengers[2]; // Capt
const hero2: Avengers = Avengers[4]; // Thor
```

<br/>

# 6. any

λͺ¨λ  νμμ νμ©ν  μ μλ νμμ΄λ€.

```ts
let value: any = "hi";
value = 10;
value = ["a", 2, true];
```

<br/>

# 7. void

`void` νμμ λ³μμλ `undefined`μ `null`λ§μ ν λΉν  μ μκ³ , λ°νκ°μ΄ μλ ν¨μμ λ°ν νμμ μ§μ ν  λ μ¬μ©λλ€.

```ts
const unuseful: void = undefined;
function notuse(): void {
  console.log("sth");
}
```

<br/>

# 8. unknown

- `unknown` νμμ λ³μλ λͺ¨λ  νμμ κ°λ€μ ν λΉλ°μ μ μλ€.
- νμ§λ§, `unknown` νμμ κ°μ `unknown` νμμ΄λ `any`νμμ λ³μμλ§ ν λΉν  μ μλ€.

```ts
let userInput: unknown;
userInput = 5;
userInput = "Max";
const userName: string = userInput; // Error: Type 'unknown' is not assignable to type 'string'.
```

<br/>

# 9. never

- `never` νμμ `any` νμμ κ°μ ν¬ν¨ν΄ μ΄λ€ κ°λ κ°μ§ μ μλ€.
- λ°λ₯ νμμ΄λΌκ³ λ νλ€.

```ts
// μ΄ ν¨μλ μ λ ν¨μμ λκΉμ§ μ€νλμ§ μλλ€
function neverEnd(): never {
  while (true) {}
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}
```

<br/>

# 10. undefined, null

```ts
const a: undefined = undefined;
const b: null = null;
```
