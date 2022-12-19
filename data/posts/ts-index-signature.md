---
emoji: ✍🏻
title: Index Signature
date: "2022-07-11"
category: Typescript
preview: "인덱스 시그니처는 `[key: T]: U` 형식으로, 키와 값의 타입을 지정합니다. 인덱스 시그니처 : [property: string]: string - 키의 이름 : 키의 위치만 표시하는 용도, 타입체커에서는 사용하지 않는다. - 키의 타입 : string - 값의 타입: string 🤦‍♀️ 인덱스 시그니처의 단점 1. 잘못된 키의 이름이 들어갔을 때 허용한다. 2. 빈 객체도 허용한다. 3. 키의 값마다 다른 타입을 가질 수 없다. 👌 해결 인덱스 시그니처 단점을 해결하는 방법은 인터페이스를 사용하는 것이다. 만약 객체의 property (key와 value)를 미리 알고 있다면 인덱스 시그니처보다 인터페이스를 사용하는 것이 더 좋다."
---

# 인덱스 시그니처

인덱스 시그니처는 `[key: T]: U` 형식으로, **키의 이름과 타입, 값의 타입을 지정합니다.**

**Example**

```typescript
type Rocket = { [property: string]: string };
const rocket: Rocket = {
  name: "Falcon 9",
  variant: "v1",
  thrust: "4,940 kN"
};
```

인덱스 시그니처 : `[property: string]: string`

- 키의 이름 : 키의 위치만 표시하는 용도, 타입체커에서는 사용하지 않는다.
- 키의 타입 : `string`
- 값의 타입: `string`

<br/>

## 🤦‍♀️ 인덱스 시그니처의 단점

1. 잘못된 키의 이름이 들어갔을 때 허용한다.

```typescript
const rocket: Rocket = {
  Name: "Falcon 9", // 허용
  variant: "v1",
  thrust: "4,940 kN"
};
```

2. 빈 객체도 허용한다.

```typescript
const rocket: Rocket = {}; // 허용
```

3. 키의 값마다 다른 타입을 가질 수 없다.

```typescript
const rocket: Rocket = {
  name: "Falcon 9",
  variant: "v1",
  thrust_kN: 4940 // number 타입 => 에러
};
```

### 👌 해결

인덱스 시그니처 단점을 해결하는 방법은 **인터페이스**를 사용하는 것이다.<br/>
만약 객체의 `property` (`key`와 `value`)를 미리 알고 있다면 인덱스 시그니처보다 인터페이스를 사용하는 것이 더 좋다.

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

타입 별칭을 이용해도 된다.

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

## 인덱스 시그니처를 언제 사용할까? 🤔

인덱스 시그니처는 **런타임 때까지 객체의 프로퍼티를 알 수 없는 경우**에 사용한다. <br/>
예를 들어, CSV 파일에서 데이터를 로드하는 경우 인덱스 시그니처를 사용한다.

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
