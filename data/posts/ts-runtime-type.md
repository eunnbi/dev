---
emoji: π
title: νμ μ λ³΄ μ μ§νκΈ°
date: "2022-07-10"
category: Typescript
preview: "λ°νμκ³Ό νμ μ λ³΄ - κΈ°λ³Έμ μΌλ‘ νμμ λ°νμμμ μ¬μ©ν  μ μλ€. - μλνλ©΄ νμμ€ν¬λ¦½νΈκ° μλ°μ€ν¬λ¦½νΈλ‘ μ»΄νμΌλλ κ³Όμ μμ λͺ¨λ  μΈν°νμ΄μ€, νμ, νμ κ΅¬λ¬Έ, νμ μ°μ°μ΄ μ κ±°λκΈ° λλ¬Έμ΄λ€. +) νμ μ€λ₯κ° μ‘΄μ¬νλλΌλ μ»΄νμΌμ΄ κ°λ₯νλ€. +) νμμ€ν¬λ¦½νΈ νμμ λ°νμ μ±λ₯μ μν₯μ μ£Όμ§ μλλ€. - μΌλ°μ μΌλ‘ typeμ΄λ interfaceλ‘ μ μΈν μ¬λ²μ νμμ΄κ³ , letμ΄λ constλ‘ μ μΈλ μ¬λ²μ κ°μ΄λ€. - classμ enumμ μν©μ λ°λΌ νμκ³Ό κ° λκ°μ§ λͺ¨λ κ°λ₯ν μμ½μ΄μ΄λ€. - λͺ¨λ  κ°μ νμμ κ°μ§μ§λ§, νμμ κ°μ κ°μ§μ§ μλλ€. - μ»΄νμΌ κ³Όμ μμ νμ μ λ³΄λ μ κ±°λλ€. - typeof μ°μ°μ - νμ κ΄μ  : κ°μ μ½μ΄μ νμμ€ν¬λ¦½νΈ νμμ λ°ννλ€. - κ°μ κ΄μ  : λ°νμ νμμ λ°ννλ€. (string, number, boolean, undefined, object, function)"
---

# λ°νμκ³Ό νμ μ λ³΄

- **κΈ°λ³Έμ μΌλ‘ νμμ λ°νμμμ μ¬μ©ν  μ μλ€.**
- μλνλ©΄ νμμ€ν¬λ¦½νΈκ° μλ°μ€ν¬λ¦½νΈλ‘ **μ»΄νμΌ**λλ κ³Όμ μμ **λͺ¨λ  μΈν°νμ΄μ€, νμ, νμ κ΅¬λ¬Έ, νμ μ°μ°μ΄ μ κ±°**λκΈ° λλ¬Έμ΄λ€.
- νμμ€ν¬λ¦½νΈ νμμ λ°νμ μ±λ₯μ μν₯μ μ£Όμ§ μλλ€.

**Incorrect Code**

```typescript
interface Square {
	width: number;
}

interface Rectangle extends Square {
	height: number;
}

type Shape = Square | Rectangle;

function calculateArea(shape: Shape){
	if (shape instance of Rectangle){
      					// ~~~~~~~~ 'Rectangle'μ(λ) νμλ§ μ°Έμ‘°νμ§λ§, μ¬κΈ°μλ κ°μΌλ‘ μ¬μ©λκ³  μλ€.
    	return shape.width * shape.height;
    }
  	else {
  		return shape.width * shape.width;
  	}
}

// μ»΄νμΌμ΄ λλ©΄ Rectangle interfaceκ° μ κ±°λ¨
// calculateArea ν¨μ λ΄λΆμμλ Rectangleλ₯Ό κ°μ²λΌ μ°Έμ‘°νκ³  μμ΄ μ΄ ν¨μλ₯Ό μ€ννλ©΄ μ€λ₯ λ°μ
```

> **νμ vs κ°**
>
> ```typescript
> // νμ
> interface Cylinder {
>   radius: number;
>   height: number;
> }
>
> // κ°
> const Cylinder = (radius: number, height: number) => ({ radius, height });
> ```
>
> - μΌλ°μ μΌλ‘ `type`μ΄λ `interface`λ‘ μ μΈν μ¬λ²μ νμμ΄κ³ , `let`μ΄λ `const`λ‘ μ μΈλ μ¬λ²μ κ°μ΄λ€.
> - `class`μ `enum`μ μν©μ λ°λΌ νμκ³Ό κ° λκ°μ§ λͺ¨λ κ°λ₯ν μμ½μ΄μ΄λ€.
> - λͺ¨λ  κ°μ νμμ κ°μ§μ§λ§, νμμ κ°μ κ°μ§μ§ μλλ€.
> - μ»΄νμΌ κ³Όμ μμ νμ μ λ³΄λ μ κ±°λλ€.
> - `typeof` μ°μ°μ
>   - νμ κ΄μ  : κ°μ μ½μ΄μ νμμ€ν¬λ¦½νΈ νμμ λ°ννλ€.
>   - κ°μ κ΄μ  : λ°νμ νμμ λ°ννλ€. (string, number, boolean, undefined, object, function)
>
> ```typescript
> const p: Person = { first: "Jane", last: "Jacobs" };
> function email(p: Person, subject: string, body: string): Response {}
>
> type T1 = typeof p; // Person
> type T2 = typeof email; // (p : Person, subject: string, body: string) => Response
>
> const v1 = typeof p; // "object"
> const v2 = typeof email; // "function"
> ```

<br/>
<br/>

# λ°νμμμ νμ μ λ³΄ μ μ§νλ λ°©λ²

μμ  μ½λμμ `shape` νμμ λͺννκ² μκΈ° μν΄μλ λ°νμμμ νμ μ λ³΄λ₯Ό μ μ§ν΄μΌ νλ€.

1. `height` μμ±μ΄ μ‘΄μ¬νλμ§ νμΈ (μμ± `in` κ°μ²΄)

```typescript
interface Square {
  width: number;
}

interface Rectangle extends Square {
  height: number;
}

type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
  if ("height" in shape) {
    return shape.width * shape.height;
  } else {
    return shape.width * shape.width;
  }
}
```

2. `tagged union` (νκ·Έ κΈ°λ²)

- μ΄ κΈ°λ²μ λ°νμμ νμ μ λ³΄λ₯Ό μ½κ² μ μ§ν  μ μμ΄ ννκ² μ¬μ©λλ€.

```typescript
interface Square {
  kind: "square";
  width: number;
}

interface Rectangle extends Square {
  kind: "rectangle";
  width: number;
  height: number;
}

type Shape = Square | Rectangle; // Shape νμμ 'tagged union'(νκ·Έλ μ λμ¨)

function calculateArea(shape: Shape) {
  if (shape.kind === "rectangle") {
    return shape.width * shape.height;
  } else {
    return shape.width * shape.width;
  }
}
```

3. `class`

- `interface`λ νμμΌλ‘λ§ μ¬μ©ν  μ μμ§λ§, `class`λ νμκ³Ό κ°μΌλ‘ λͺ¨λ μ¬μ©ν  μ μλ€.

```typescript
class Square {
  constructor(public width: number) {}
}

class Rectangle extends Square {
  constructor(public width: number, public height: number) {
    super(width);
  }
}

type Shape = Square | Rectangle; // Rectangleμ΄ νμμΌλ‘ μ°Έμ‘°λ¨.

function calculateArea(shape: Shape) {
  if (shape instanceof Rectangle) {
    // Rectangleμ΄ κ°μΌλ‘ μ°Έμ‘°λ¨.
    return shape.width * shape.height;
  } else {
    return shape.width * shape.width;
  }
}
```
