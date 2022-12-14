---
emoji: π₯¨
title: ν¨μ μ€λ²λ‘λ©
date: "2022-06-23"
category: Typescript
preview: "ν¨μ μ΄λ¦μ λμΌνμ§λ§, λ§€κ°λ³μμ κ°μμ νμμ΄ λ€λ₯Έ ν¨μλ₯Ό μ μνλ κ²μ λ§νλ€. λ§€κ°λ³μ κ°μλ λμΌνμ§λ§, νμμ΄ λ€λ₯Έ κ²½μ° ν¨μ μ μΈ (ν¨μλͺ, λ§€κ°λ³μλͺ, λ§€κ°λ³μ νμ, λ°ν νμ) λ§€κ°λ³μ κ°μλ λ€λ₯΄μ§λ§, νμμ λμΌν κ²½μ° null λ³ν© μ°μ°μ (nullish coalescing operator) - μΌμͺ½ νΌμ°μ°μκ° null λλ undefinedμΌ λ μ€λ₯Έμͺ½ νΌμ°μ°μλ₯Ό λ°ννκ³ , κ·Έλ μ§ μμΌλ©΄ μΌμͺ½ νΌμ°μ°μλ₯Ό λ°ννλ λΌλ¦¬ μ°μ°μμ΄λ€. - cf) λΌλ¦¬ μ°μ°μ OR (||) : μΌμͺ½ νΌμ°μ°μκ° null λλ undefinedλΏλ§ μλλΌ falsyν κ° (0, -0, λΉλ¬Έμμ΄, NaN)μ ν΄λΉν  κ²½μ° μ€λ₯Έμͺ½ νΌμ°μ°μλ₯Ό λ°ννλ€."
---

**ν¨μ μ΄λ¦μ λμΌνμ§λ§, λ§€κ°λ³μμ κ°μμ νμμ΄ λ€λ₯Έ ν¨μλ₯Ό μ μνλ κ²μ λ§νλ€.**

## λ§€κ°λ³μ κ°μλ λμΌνμ§λ§, νμμ΄ λ€λ₯Έ κ²½μ°

```ts
// ν¨μ μ μΈ (ν¨μλͺ, λ§€κ°λ³μλͺ, λ§€κ°λ³μ νμ, λ°ν νμ)
function add(a: string, b: string): string;
function add(a: number, b: number): number;

// ν¨μ κ΅¬ν
function add(a: any, b: any): any {
  return a + b;
}

console.log(add(1, 2)); // 3
console.log(add("a", "b")); // "ab"
```

<br/>

## λ§€κ°λ³μ κ°μλ λ€λ₯΄μ§λ§, νμμ λμΌν κ²½μ°

```ts
// ν¨μ μ μΈ
function add(a: number): number;
function add(a: number, b: number): number;
function add(a: number, b: number, c: number): number;

// ν¨μ κ΅¬ν
function add(a: number, b?: number, c?: number): number {
  return a + (b ?? 0) + (c ?? 0);
}

console.log(add(1)); // 1
console.log(add(1, 2)); // 3
console.log(add(1, 2, 3)); // 6
```

<br/>

> **null λ³ν© μ°μ°μ** (`nullish coalescing operator`)
>
> - μΌμͺ½ νΌμ°μ°μκ° `null` λλ `undefined`μΌ λ μ€λ₯Έμͺ½ νΌμ°μ°μλ₯Ό λ°ννκ³ , κ·Έλ μ§ μμΌλ©΄ μΌμͺ½ νΌμ°μ°μλ₯Ό λ°ννλ λΌλ¦¬ μ°μ°μμ΄λ€.
> - cf) λΌλ¦¬ μ°μ°μ OR (`||`) : μΌμͺ½ νΌμ°μ°μκ° `null` λλ `undefined`λΏλ§ μλλΌ `falsy`ν κ° (0, -0, λΉλ¬Έμμ΄, NaN)μ ν΄λΉν  κ²½μ° μ€λ₯Έμͺ½ νΌμ°μ°μλ₯Ό λ°ννλ€.
>
> ```ts
> const userInput = "";
> console.log(userInput || "DEFAULT"); // DEFAULT
> console.log(userInput ?? "DEFAULT"); // ""
> ```

<br/>

## λ§€κ°λ³μμ κ°μμ νμμ΄ λ€λ₯Έ κ²½μ°

```ts
// ν¨μ μ μΈ
function printConsole(a: number): void;
function printConsole(a: string): void;
function printConsole(a: number, b: string): void;
function printConsole(a: string, b: number): void;

// ν¨μ κ΅¬ν
function printConsole(a: any, b?: any): void {
  if (b === undefined) {
    console.log(a);
  } else {
    console.log(a, b);
  }
}

printConsole("1"); // 1
printConsole("1", 2); // 1 2
printConsole("1", "2"); // ERROR: No overload matches this call. (4κ°μ ν¨μ μ μΈμμ μ²«λ²μ§Έμ λλ²μ§Έ λ§€κ°λ³μκ° λ¬Έμμ΄μΈ ν¨μκ° μ‘΄μ¬νμ§ μκΈ° λλ¬Έμ΄λ€.)
```
