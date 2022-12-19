---
emoji: 👀
title: any 타입
date: "2022-08-05"
category: Typescript
preview: "- 단어 의미 그대로 모든 타입을 허용할 수 있는 타입이다. - 기존에 JS로 구현되어 있는 코드에 TS를 점진적으로 적용할 때 활용하면 좋다. 👍 - 하지만 무분별하게 any 타입을 사용하면 TS 타입 시스템의 장점을 누릴 수 없게 된다. 😭 타입 안정성이 없다.  위 코드를 보면 age는 number 타입으로 선언되었지만 as any (타입단언문)를 사용하여 string 타입의 값을 age 변수에 할당했다. 👉 `any` 타입을 이용하면 타입 체커를 무력화시켜 타입 안정성을 보장할 수 없게 된다. 자동완성 기능 X"
---

# 👀 any 타입

- 단어 의미 그대로 **모든 타입을 허용**할 수 있는 타입이다.
- 기존에 JS로 구현되어 있는 코드에 TS를 점진적으로 적용할 때 활용하면 좋다. 👍
- 하지만 무분별하게 any 타입을 사용하면 TS 타입 시스템의 장점을 누릴 수 없게 된다. 😭

<br/>

## 타입 안정성이 없다.

```typescript
let age: number;
age = "12" as any;
age += 1;

// 런타임에 정상 작동, age는 "121"
```

위 코드를 보면 `age`는 `number` 타입으로 선언되었지만 `as any` (타입단언문)를 사용하여 `string` 타입의 값을 `age` 변수에 할당했다.

👉 `any` 타입을 이용하면 타입 체커를 무력화시켜 타입 안정성을 보장할 수 없게 된다.

## 자동완성 기능 X

- 변수에 명확한 타입을 부여하면 VSCode에서 해당 타입에 대한 API를 미리 보기로 띄워줄 수 있고 tab으로 빠르고 정확하게 코드를 작성할 수 있다.
- 하지만 `any` 타입을 부여하면 자동완성 기능의 도움을 받지 못한다.
- 명시된 타입을 사용했을 때보다 생산성 측면에서 불리하다.

<br/>

# 🧩 any 타입 사용하기

**any 타입을 구체적으로 변형해서 사용하자**

일반적인 상황에서는 any보다 더 구체적으로 표현할 수 있는 타입이 존재할 가능성이 높기 때문에 더 구체적인 타입을 찾아 타입 안정성을 높이도록 해야 한다.

**Example**

배열

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

- 함수 내의 `array.length` 타입이 체크된다.
- 함수의 반환 타입이 `any` 대신 `number`로 추론된다.
- 함수 호출될 때 매개변수가 배열인지 체크된다.

<br/>

객체

- 함수의 매개변수가 객체인지 하지만, 속성을 알 수 없다면 매개변수 타입을 다음과 같이 선언하면 된다.

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

- `{ [key:string]: any }` 대신 모든 비 기본형 타입을 포함하는 `object` 타입을 사용할 수 있다. `object` 타입은 객체의 키를 열거할 수는 있지만, 속성에 접근할 수 없다.

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

함수

- 합수 타입에 대해서도 `any` 대신 최소한으로마나 타입을 구체화해야 한다.

```typescript
type Fn0 = () => any; // 매겨변수 없이 호출 가능한 모든 함수
type Fn1 = (arg: any) => any; // 매개변수 1개
type Fn2 = (...args: any[]) => any; // 모든 개수의 매개변수 - "Function" 타입과 동일하다.
```

> 👉 `any`를 사용할 때는 정말로 모든 값이 허용되어야만 하는지 면밀히 검토해야 한다.

<br/>

# 🚀 any의 진화

**암시적 `any` 타입에 어떤 값을 할당할 때 타입이 구체적으로 진화한다.**<br/>
`any`가 진화방식은 일반적인 변수가 추론되는 원리와 동일하다.

```typescript
let val; // any
if (Math.random() < 0.5) {
  val = "/hello/"; // RegExp
} else {
  val = 12; // number
}
// val: number | RegExp
```

배열에 다양한 타입의 요소를 넣으면 배열의 타입이 확장되며 진화된다.

```typescript
function range(start: number, limit: number) {
  const out = []; // any[]
  for (let i = start; i < limit; i++) {
    out.push(i);
  }
  return out; // number[]
}
```

`any` 타입의 진화는 `noImplicitAny`가 설정된 상태에서 변수의 타입이 **암시적 `any`인 경우에만** 일어난다. 명시적으로 `any`를 선언하면 타입이 그대로 유지된다.

```typescript
let val: any; // any
if (Math.random() < 0.5) {
  val = "/hello/"; // any
} else {
  val = 12; // any
}
// val: any
```

암시적 `any` 타입은 함수 호출을 거쳐도 진화하지 않는다.

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

> 👉 암시적 `any` 타입에 값을 할당하거나 `any[]` 타입에 요소를 넣어 타입이 진화할 수 있지만, 명시적 타입 선언을 사용하는 것이 타입 안정성이 더 높다.

<br/>

# any 🆚 unknown

공통점 : 어떤 타입의 값이든 `any` 혹은 `unknown` 타입 변수에 할당 가능하다.

```typescript
const a: any = 1;
const b: unknown = "string";
```

차이점

- `any` 타입의 값은 모든 타입의 변수에 할당이 가능한데 `unknown` 타입의 값은 오직 `unknown`과 `any` 타입의 변수에만 할당 가능하다.

```typescript
const c: number = a;
const d: string = b; // ERROR (Type 'unknown' is not assignable to type 'string'.)
```

- `any` 타입의 값을 사용하면 오류가 발생하지 않지만, `unknown` 타입인 채로 값을 사용하면 오류가 발생한다.

```typescript
// 함수 반환값이 any 타입
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
alert(book.title); // 오류 없음. 런타임에 "undefined" 에러 발생
book("read"); // 오류 없음. 런타임에 "TypeError" 발생
```

```typescript
// 함수 반환값이 unknown 타입
function safeParseYAML(yaml: string): unknown {
  return parseYAML(yaml);
}

const book = safeParseYAML(`
  name: Jane Eytre
  author: Charlotte Bronte
`);

alert(book.title); // ERROR: 개체가 unknown 형식입니다.
book("read"); // ERROR: 개체가 unknown 형식입니다.
```

- `unknown` 타입의 값을 그대로 사용할 수 없기 때문에 **타입 단언문**이나 **사용자 정의 타입 가드** 혹은 **`instanceof` 연산자**를 이용하여 `unknown` 타입을 원하는 타입으로 변환해야 한다.

```typescript
// 타입 단언
const book = safeParseYAML(`
  name: Jane Eytre
  author: Charlotte Bronte
`) as Book;

alert(book.title); // ERROR: 'Book' 형식에 'title' 속성이 없습니다.
book("read"); // ERROR: 이 식은 호출할 수 없습니다.
```

```typescript
// 사용자 정의 타입 가드
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

> 👉 타입을 모를 때는 `any` 대신 `unknown`을 사용하자!

<br/>

# 타입 커버리지

`noImplicitAny` 를 설정하고 모든 암시적 `any` 대신 명시적 타입 구문을 추가해도 `any` 타입과 관련된 문제들로부터 안전하다고 할 수 없다.

- 명시적 `any` 타입의 변수가 존재할 수 있음.
- 서드파티 타입 선언 (`@types`) 에서 명시적 `any` 타입이 존재할 수 있음.

**type-coverage 패키지**

```cmd
$ npx type-coverage
9985 / 10117 98.69/5

$ npx type-coverage --detail
path/to/code.ts:1:10 getColumnInfo
path/to/module.ts:7:1 pt2
```

> 👉 `type-coverage` 패키지를 이용하여 `any` 타입을 추적할 수 있다.
