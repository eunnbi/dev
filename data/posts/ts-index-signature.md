---
emoji: βπ»
title: Index Signature
date: "2022-07-11"
category: Typescript
preview: "μΈλ±μ€ μκ·Έλμ²λ [key: T]: U νμμΌλ‘, ν€μ κ°μ νμμ μ§μ ν©λλ€. μΈλ±μ€ μκ·Έλμ² : [property: string]: string - ν€μ μ΄λ¦ : ν€μ μμΉλ§ νμνλ μ©λ, νμμ²΄μ»€μμλ μ¬μ©νμ§ μλλ€. - ν€μ νμ : string - κ°μ νμ: string π€¦ββοΈ μΈλ±μ€ μκ·Έλμ²μ λ¨μ  1. μλͺ»λ ν€μ μ΄λ¦μ΄ λ€μ΄κ°μ λ νμ©νλ€. 2. λΉ κ°μ²΄λ νμ©νλ€. 3. ν€μ κ°λ§λ€ λ€λ₯Έ νμμ κ°μ§ μ μλ€. π ν΄κ²° μΈλ±μ€ μκ·Έλμ² λ¨μ μ ν΄κ²°νλ λ°©λ²μ μΈν°νμ΄μ€λ₯Ό μ¬μ©νλ κ²μ΄λ€. λ§μ½ κ°μ²΄μ property (keyμ value)λ₯Ό λ―Έλ¦¬ μκ³  μλ€λ©΄ μΈλ±μ€ μκ·Έλμ²λ³΄λ€ μΈν°νμ΄μ€λ₯Ό μ¬μ©νλ κ²μ΄ λ μ’λ€."
---

# μΈλ±μ€ μκ·Έλμ²

μΈλ±μ€ μκ·Έλμ²λ `[key: T]: U` νμμΌλ‘, **ν€μ μ΄λ¦κ³Ό νμ, κ°μ νμμ μ§μ ν©λλ€.**

**Example**

```typescript
type Rocket = { [property: string]: string };
const rocket: Rocket = {
  name: "Falcon 9",
  variant: "v1",
  thrust: "4,940 kN"
};
```

μΈλ±μ€ μκ·Έλμ² : `[property: string]: string`

- ν€μ μ΄λ¦ : ν€μ μμΉλ§ νμνλ μ©λ, νμμ²΄μ»€μμλ μ¬μ©νμ§ μλλ€.
- ν€μ νμ : `string`
- κ°μ νμ: `string`

<br/>

## π€¦ββοΈ μΈλ±μ€ μκ·Έλμ²μ λ¨μ 

1. μλͺ»λ ν€μ μ΄λ¦μ΄ λ€μ΄κ°μ λ νμ©νλ€.

```typescript
const rocket: Rocket = {
  Name: "Falcon 9", // νμ©
  variant: "v1",
  thrust: "4,940 kN"
};
```

2. λΉ κ°μ²΄λ νμ©νλ€.

```typescript
const rocket: Rocket = {}; // νμ©
```

3. ν€μ κ°λ§λ€ λ€λ₯Έ νμμ κ°μ§ μ μλ€.

```typescript
const rocket: Rocket = {
  name: "Falcon 9",
  variant: "v1",
  thrust_kN: 4940 // number νμ => μλ¬
};
```

### π ν΄κ²°

μΈλ±μ€ μκ·Έλμ² λ¨μ μ ν΄κ²°νλ λ°©λ²μ **μΈν°νμ΄μ€**λ₯Ό μ¬μ©νλ κ²μ΄λ€.<br/>
λ§μ½ κ°μ²΄μ `property` (`key`μ `value`)λ₯Ό λ―Έλ¦¬ μκ³  μλ€λ©΄ μΈλ±μ€ μκ·Έλμ²λ³΄λ€ μΈν°νμ΄μ€λ₯Ό μ¬μ©νλ κ²μ΄ λ μ’λ€.

```typescript
interface Rocket {
  name: string;
  variant: string;
  thrust_kN: number;
}

const falconHeavy: Rocket = {
  name: "Falcon Heavy",
  variant: "v1",
  thrust: 15200
};
```

νμ λ³μΉ­μ μ΄μ©ν΄λ λλ€.

```typescript
type Rocket = {
  name: string;
  variant: string;
  thrust_kN: number;
};

const falconHeavy: Rocket = {
  name: "Falcon Heavy",
  variant: "v1",
  thrust: 15200
};
```

<br/>

## μΈλ±μ€ μκ·Έλμ²λ₯Ό μΈμ  μ¬μ©ν κΉ? π€

μΈλ±μ€ μκ·Έλμ²λ **λ°νμ λκΉμ§ κ°μ²΄μ νλ‘νΌν°λ₯Ό μ μ μλ κ²½μ°**μ μ¬μ©νλ€. <br/>
μλ₯Ό λ€μ΄, CSV νμΌμμ λ°μ΄ν°λ₯Ό λ‘λνλ κ²½μ° μΈλ±μ€ μκ·Έλμ²λ₯Ό μ¬μ©νλ€.

```typescript
function parseCSV(input: string): { [columnName: string]: string }[] {
  const lines = input.split("\n");
  const [header, ...rows] = lines;
  const headerColumns = header.split(",");
  return rows.map(rowStr => {
    const row: { [columnName: string]: string } = {};
    rowStr.split(",").forEach((cell, i) => {
      row[headerColumns[i]] = cell;
    });
    return row;
  });
}
```
