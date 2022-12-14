---
emoji: π·
title: Union Type, Intersection Type, Literal Type
date: "2022-06-12"
category: Typescript
preview: "Union Type - μ λμ¨ νμμ λ³μκ° μ¬λ¬ νμμ κ°μ§ μ μλ κ²½μ°μ μ£Όλ‘ μ¬μ©λλ€. - `|` μ°μ°μλ₯Ό μ΄μ©ν΄ μ¬λ¬ νμμ νλλ‘ λ¬Άμ΄ κ·Έ μ€ νλμ νμμ κ°μ§λ€λ μλ―Έλ‘ μ¬μ©λλ€. Intersection Type - μ¬λ¬ νμμ λͺ¨λ λ§μ‘±νλ νλμ νμμ μλ―Ένλ€. - `&` μ°μ°μλ₯Ό μ΄μ©ν΄ μ¬λ¬ νμμ νλλ‘ λ¬Άλλ€. μΆκ°: `extends` ν€μλ μ¬μ©νκΈ° β οΈ Union Typeμ μ¬μ©ν  λ μ£Όμν΄μΌ ν  μ  - μ μ½λμμ `someone` νλΌλ―Έν°μ νμμ΄ μ λμ¨ νμμ ν΅ν΄ μ μλμκ³ , `Person`μ΄κ±°λ `Developer`μ΄λ€. - νμμ€ν¬λ¦½νΈ κ΄μ μμ λ³΄λ©΄ `introduce` ν¨μκ° νΈμΆλ  λ `someone` νλΌλ―Έν°μ `Person` νμμ΄ μ¬μ§ `Developer` νμμ΄ μ¬μ§ λͺ¨λ₯Έλ€. - κ·Έλμ `name`μ λ νμμ κ³΅ν΅ μμ±μ΄κΈ°μ μ μ λμνμ§λ§, `age`μ `skill`μ κ³΅ν΅ μμ±μ΄ μλκΈ° λλ¬Έμ νμ μ€λ₯κ° λ°μλλ€."
---

# Union Type

- μ λμ¨ νμμ λ³μκ° μ¬λ¬ νμμ κ°μ§ μ μλ κ²½μ°μ μ£Όλ‘ μ¬μ©λλ€.
- `|` μ°μ°μλ₯Ό μ΄μ©ν΄ μ¬λ¬ νμμ νλλ‘ λ¬Άμ΄ κ·Έ μ€ νλμ νμμ κ°μ§λ€λ μλ―Έλ‘ μ¬μ©λλ€.

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

- μ¬λ¬ νμμ λͺ¨λ λ§μ‘±νλ νλμ νμμ μλ―Ένλ€.
- `&` μ°μ°μλ₯Ό μ΄μ©ν΄ μ¬λ¬ νμμ νλλ‘ λ¬Άλλ€.

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
}; // μ μ!!
```

> μΆκ°: `extends` ν€μλ μ¬μ©νκΈ°
>
> ```typescript
> // extends ν€μλλ₯Ό μ¬μ©νμ¬ PersonSpanμ μ μν  μ μλ€.
> interface Person {
>   name: string;
> }
> interface PersonSpan extends Person {
>   birth: Date;
>   deaht?: Date;
> }
> ```

<br/>

# β οΈ Union Typeμ μ¬μ©ν  λ μ£Όμν΄μΌ ν  μ 

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
  someone.name; // O μ μ λμ
  someone.age; // X νμ μ€λ₯
  someone.skill; // X νμ μ€λ₯
}
```

- μ μ½λμμ `someone` νλΌλ―Έν°μ νμμ΄ μ λμ¨ νμμ ν΅ν΄ μ μλμκ³ , `Person`μ΄κ±°λ `Developer`μ΄λ€.
- νμμ€ν¬λ¦½νΈ κ΄μ μμ λ³΄λ©΄ `introduce` ν¨μκ° νΈμΆλ  λ `someone` νλΌλ―Έν°μ `Person` νμμ΄ μ¬μ§ `Developer` νμμ΄ μ¬μ§ λͺ¨λ₯Έλ€.
- κ·Έλμ `name`μ λ νμμ κ³΅ν΅ μμ±μ΄κΈ°μ μ μ λμνμ§λ§, `age`μ `skill`μ κ³΅ν΅ μμ±μ΄ μλκΈ° λλ¬Έμ νμ μ€λ₯κ° λ°μλλ€.

<br/>

μλμ κ°μ΄ μ½λλ₯Ό μμ ν΄μΌ νλ€.

1.  `in` μ°μ°μ μ΄μ©νμ¬ μμ± νμΈνκΈ°

    ```typescript
    function introduce(someone: Person | Developer) {
      if ("name" in someone) {
        someone.name; // O μ μ λμ
      }
    }
    ```

2.  `tagged union` (νκ·Έ κΈ°λ²)

    ```typescript
    interface Person {
      name: string;
      age: number;
      kind: "person";
    }

    interface Developer {
      name: string;
      skill: string;
      kind: "developer";
    }

    function introduce(someone: Person | Developer) {
      if (someone.kind == "developer") {
        someone.skill; // O μ μλμ
      }
    }
    ```

3.  `class`<br/>
    `interface`λ νμμΌλ‘λ§ μ¬μ©ν  μ μμ§λ§, `class`λ νμκ³Ό κ°μΌλ‘ λͺ¨λ μ¬μ©ν  μ μλ€.

    ```typescript
    class Person {
      constructor(public name: string, public age: number) {}
    }
    class Developer {
      constructor(public name: string, public skill: string) {}
    }

    function introduce(someone: Person | Developer) {
      if (someone instanceof Developer) {
        someone.skill; // O μ μλμ
      }
    }
    ```

> [νμ μ’νκΈ° (νμ κ°λ)μ λν΄ λ μμλ³΄κΈ°](https://www.eunnbi.dev/posts/ts-type-inference#3.-%ED%83%80%EC%9E%85-%EC%A2%81%ED%9E%88%EA%B8%B0)

<br/>

# Literal Type

- **κ΅¬μ²΄μ μΈ κ°**, `string` νΉμ `number` νμμ κ°μ νμμΌλ‘ μ§μ ν  μ μλ€. μ΄λ₯Ό `Literal Type`μ΄λΌκ³  νλ€.

```ts
let changingString = "Hello World";
changingString = "OlΓ‘ Mundo"; // string

const constantString = "Hello World"; // "Hello World"
```

- `var`μ΄λ `let`μΌλ‘ μ μΈν λ³μλ κ° μ¬ν λΉμ΄ κ°λ₯νμ§λ§, `const`μΌλ‘ μ μΈν λ³μλ μ¬ν λΉμ΄ λΆκ°λ₯νλ€.
- κ·Έλμ νμμ€ν¬λ¦½νΈλ `const`μΌλ‘ μ μΈν λ³μμ λν΄ `literal type`μΌλ‘ μΆλ‘ νλ€.

```ts
let x: "hello" = "hello";
x = "hello"; // OK
x = "howdy"; // ERROR
```

```ts
// μ λμ¨ λ¦¬ν°λ΄ νμ
function printText(s: string, alignment: "left" | "right" | "center") {
  // ...
}
printText("Hello, world", "left"); // OK
printText("G'day, mate", "centre"); // ERROR
```

```ts
// non-litreal νμκ³Ό literal νμμ μ λμ¨ νμ
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
