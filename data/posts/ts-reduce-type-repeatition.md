---
emoji: π
title: νμ λ°λ³΅ μ€μ΄κΈ°
date: "2022-06-20"
category: Typescript
preview: "π `DRY`(Don't Repeat Yourself) μμΉμ νμμ λν΄μλ μ μ©ν΄μΌ νλ€!! νμμ μ΄λ¦ λΆμ΄κΈ° - λ°λ³΅μ μ€μ΄λ κ°μ₯ κ°λ¨ν λ°©λ²μ νμμ μ΄λ¦μ λΆμ΄λ κ²μ΄λ€. - μ¦, νμ λ³μΉ­μ΄λ μΈν°νμ΄μ€λ₯Ό μ¬μ©νλ©΄ λλ€. extends μ¬μ©νκΈ° extendsλ₯Ό μ¬μ©νμ¬ μΈν°νμ΄μ€ νλμ λ°λ³΅μ νΌν  μ μλ€. μΈλ±μ±, λ§€νλ νμ, keyof μΈλ±μ±μ μ΄μ©νμ¬ μ΄λ€ νμμ **λΆλΆμ§ν©**μΌλ‘ νμμ μ μν  μ μλ€. λ λμκ° **λ§€νλ νμ** μ΄μ©νμ¬ μ€λ³΅μ λ μ κ±°ν  μ μλ€. μ λ€λ¦­ νμ - μ λ€λ¦­μ΄λ **νμμ ν¨μμ νλΌλ―Έν°μ²λΌ μ¬μ©νλ κ²**μ μλ―Ένλ€. - ν¨μμμ λ§€κ°λ³μλ‘ λ§€νν  μ μλ κ°μ μ ννκΈ° μν΄ νμ μμ€νμ μ¬μ©νλ κ²μ²λΌ μ λ€λ¦­ νμμμλ λ§€κ°λ³μλ₯Ό μ νν  μ μλ λ°©λ²μ΄ νμνλ€. - λνμ μΈ λ°©λ²μ΄ `extends`λ₯Ό μ¬μ©νλ κ²μ΄λ€. - `extends`λ₯Ό μ¬μ©νμ¬ μ λ€λ¦­ λ§€κ°λ³μκ° νΉμ  νμμ νμ₯νλ€κ³  μ μΈν  μ μλ€."
---

> π `DRY`(Don't Repeat Yourself) μμΉμ νμμ λν΄μλ μ μ©ν΄μΌ νλ€!!

<br/>

# νμμ μ΄λ¦ λΆμ΄κΈ°

- λ°λ³΅μ μ€μ΄λ κ°μ₯ κ°λ¨ν λ°©λ²μ νμμ μ΄λ¦μ λΆμ΄λ κ²μ΄λ€.
- μ¦, νμ λ³μΉ­μ΄λ μΈν°νμ΄μ€λ₯Ό μ¬μ©νλ©΄ λλ€.

```typescript
// π§ κ°μ νμμ΄ λ°λ³΅μ μΌλ‘ λ±μ₯ν¨.
function distance(a: { x: number; y: number }, b: { x: number; y: number }) {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}
```

```typescript
// π λ°λ³΅λλ νμμ Point2DλΌλ μ΄λ¦ λΆμ΄κΈ° (interface)
interface Point2D {
  x: number;
  y: number;
}

function distance(a: Point2D, b: Point2D) {
  /*...*/
}
```

```typescript
// π§ κ°μ ν¨μ μκ·Έλμ²κ° λ°λ³΅λ¨.
function get(url: string, opts: Options): Promise<Response> {
  /*...*/
}
function post(url: string, opts: Options): Promise<Response> {
  /*...*/
}
```

```typescript
// π λ°λ³΅λλ ν¨μ μκ·Έλμ²λ₯Ό ν¨μ νμμΌλ‘ μ μ (type alias)
type HTTPFunction = (url: string, opts: Options) => Promise<Response>;
const get: HTTPFunction = (url, opts) => {
  /*...*/
};
const post: HTTPFunction = (url, opts) => {
  /*...*/
};
```

<br/>

# extends μ¬μ©νκΈ°

`extends`λ₯Ό μ¬μ©νμ¬ μΈν°νμ΄μ€ νλμ λ°λ³΅μ νΌν  μ μλ€.

```typescript
// π§ μΈν°νμ΄μ€ νλ μ€λ³΅
interface Person {
  firstName: string;
  lastName: string;
}

interface PersonWithBirthDate {
  firstName: sgring;
  lastName: string;
  birth: Date;
}
```

```typescript
// π PersonWithBirthDateλ Personμ νλλ₯Ό μμλ°λλ€.
interface PersonWithBirthDate extends Person {
  birth: Date;
}
```

<br/>

# μΈλ±μ±, λ§€νλ νμ, keyof

μΈλ±μ±μ μ΄μ©νμ¬ μ΄λ€ νμμ **λΆλΆμ§ν©**μΌλ‘ νμμ μ μν  μ μλ€.

```typescript
// π§ νμ μ€λ³΅
interface State {
  userId: string;
  pageTitle: string;
  recentFiles: string[];
  pageContents: string;
}

interface TopNavState {
  userId: string;
  pageTitle: string;
  recentFiles: string[];
}
```

```typescript
// π Stateλ₯Ό μΈλ±μ±νμ¬ νμ μ€λ³΅ μ κ±°
interface TopNavState {
  userId: State["userId"];
  pageTitle: State["pageTitle"];
  recentFiles: State["recentFiles"];
}
```

λ λμκ° **λ§€νλ νμ** μ΄μ©νμ¬ μ€λ³΅μ λ μ κ±°ν  μ μλ€.

```typescript
// π λ§€νλ νμ
type TopNavState = {
  [k in "userId" | "pageTitle" | "recentFiles"]: State[k];
};
```

μΈλ±μ±μ μ΄μ©νμ¬ μ€λ³΅μ μ κ±°νλ λ λ€λ₯Έ μμ (νκ·Έλ μ λμ¨)

```typescript
interface SaveAction {
  type: "save";
  // ...
}

interface LoadAction {
  type: "load";
  // ...
}

type Action = SaveAction | LoadAction;
type ActionType = "save" | "load"; // π§ νκ·Έλ μ λμ¨μμ νμ μ€λ³΅ λ°μ
```

```typescript
type ActionType = Action["type"]; // π Action μ λμ¨ νμμ μΈλ±μ±νμ¬ νμ μ€λ³΅ μ κ±°
```

λ§€νλ νμκ³Ό `keyof`λ₯Ό κ°μ΄ μ¬μ©νμ¬ νμ μ€λ³΅μ νΌν  μ μλ€.

```typescript
// π§ νμ μ€λ³΅
interface Options {
  width: number;
  height: number;
  color: string;
  label: string;
}

interface OptionsUpdate {
  width?: number;
  height?: number;
  color?: string;
  label?: string;
}
```

```typescript
// π λ§€νλ νμκ³Ό keyofλ₯Ό μ¬μ©νμ¬ μ€λ³΅ μ κ±°
interface OptionsUpdate {
  [k in keyof Options]?: Options[k];
}

type OptionsKeys = keyof Options; // "width" | "height" | "color" | "label"
```

<br/>

# μ λ€λ¦­ νμ

- μ λ€λ¦­μ΄λ **νμμ ν¨μμ νλΌλ―Έν°μ²λΌ μ¬μ©νλ κ²**μ μλ―Ένλ€.
- ν¨μμμ λ§€κ°λ³μλ‘ λ§€νν  μ μλ κ°μ μ ννκΈ° μν΄ νμ μμ€νμ μ¬μ©νλ κ²μ²λΌ μ λ€λ¦­ νμμμλ λ§€κ°λ³μλ₯Ό μ νν  μ μλ λ°©λ²μ΄ νμνλ€.
- λνμ μΈ λ°©λ²μ΄ `extends`λ₯Ό μ¬μ©νλ κ²μ΄λ€.
- `extends`λ₯Ό μ¬μ©νμ¬ μ λ€λ¦­ λ§€κ°λ³μκ° νΉμ  νμμ νμ₯νλ€κ³  μ μΈν  μ μλ€.

```typescript
interface Name {
  first: string;
  last: string;
}

type DancingDuo<T extends Name> = [T, T];

// OK
const couple1: DancingDuo<Name> = [
  { first: "Fred", last: "Astaire" },
  { first: "Ginger", last: "Rogers" }
];

// Error: { first: string }μ Nameμμ νμ₯λ νμμ΄ μλλ€.
const couple1: DancingDuo<{ first: string }> = [
  { first: "Fred" },
  { first: "Ginger" }
];
```

μμ λ³Έ λ§€νλ νμμ μ΄μ©νμ¬ μ μν νμλ€μ **μ λ€λ¦­ νμμ μ΄μ©νμ¬ μΌλ°νμν¬ μ μλ€.**

```typescript
// π λ§€νλ νμ
type TopNavState = {
  [k in "userId" | "pageTitle" | "recentFiles"]: State[k];
}

interface OptionsUpdate {
  [k in keyof Options]?: Options[k];
}
```

```typescript
// π μ λ€λ¦­ νμ
type Pick<T, K extends keyof T> = {
  [k in K]: T[k];
};
type TopNavState = Pick<State, "userId" | "pageTitle" | "recentFiles">;

type Partial<T, K extends keyof T> = {
  [k in K]?: T[k];
};
type OptionsUpdate = Partial<Options, keyof Options>;
```

νμ€ λΌμ΄λΈλ¬λ¦¬μλ `Pick`, `Partial`, `ReturnType`λ± λ€μν μ λ€λ¦­ νμμ΄ μ μλμ΄ μκ³ , μ΄λ₯Ό νμ©νλ κ²μ μ΅μν΄μ ΈμΌ νλ€.
