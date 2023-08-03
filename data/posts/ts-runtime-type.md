---
emoji: 🏃
title: 타입 정보 유지하기
date: "2022-07-10"
category: Typescript
preview: "런타임과 타입 정보 - 기본적으로 타입은 런타임에서 사용할 수 없다. - 왜냐하면 타입스크립트가 자바스크립트로 컴파일되는 과정에서 모든 인터페이스, 타입, 타입 구문, 타입 연산이 제거되기 때문이다. +) 타입 오류가 존재하더라도 컴파일이 가능하다. +) 타입스크립트 타입은 런타임 성능에 영향을 주지 않는다. - 일반적으로 type이나 interface로 선언한 심벌은 타입이고, let이나 const로 선언된 심벌은 값이다. - class와 enum은 상황에 따라 타입과 값 두가지 모두 가능한 예약어이다. - 모든 값은 타입을 가지지만, 타입은 값을 가지지 않는다. - 컴파일 과정에서 타입 정보는 제거된다. - typeof 연산자 - 타입 관점 : 값을 읽어서 타입스크립트 타입을 반환한다. - 값의 관점 : 런타임 타입을 반환한다. (string, number, boolean, undefined, object, function)"
---

# 런타임과 타입 정보

- **기본적으로 타입은 런타임에서 사용할 수 없다.**
- 왜냐하면 타입스크립트가 자바스크립트로 **컴파일**되는 과정에서 **모든 인터페이스, 타입, 타입 구문, 타입 연산이 제거**되기 때문이다.
- 타입스크립트 타입은 런타임 성능에 영향을 주지 않는다.

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
      					// ~~~~~~~~ 'Rectangle'은(는) 형식만 참조하지만, 여기서는 값으로 사용되고 있다.
    	return shape.width * shape.height;
    }
  	else {
  		return shape.width * shape.width;
  	}
}

// 컴파일이 되면 Rectangle interface가 제거됨
// calculateArea 함수 내부에서는 Rectangle를 값처럼 참조하고 있어 이 함수를 실행하면 오류 발생
```

> **타입 vs 값**
>
> ```typescript
> // 타입
> interface Cylinder {
>   radius: number;
>   height: number;
> }
>
> // 값
> const Cylinder = (radius: number, height: number) => ({ radius, height });
> ```
>
> - 일반적으로 `type`이나 `interface`로 선언한 심벌은 타입이고, `let`이나 `const`로 선언된 심벌은 값이다.
> - `class`와 `enum`은 상황에 따라 타입과 값 두가지 모두 가능한 예약어이다.
> - 모든 값은 타입을 가지지만, 타입은 값을 가지지 않는다.
> - 컴파일 과정에서 타입 정보는 제거된다.
> - `typeof` 연산자
>   - 타입 관점 : 값을 읽어서 타입스크립트 타입을 반환한다.
>   - 값의 관점 : 런타임 타입을 반환한다. (string, number, boolean, undefined, object, function)
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

# 런타임에서 타입 정보 유지하는 방법

앞선 코드에서 `shape` 타입을 명확하게 알기 위해서는 런타임에서 타입 정보를 유지해야 한다.

1. `height` 속성이 존재하는지 확인 (속성 `in` 객체)

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

2. `tagged union` (태그 기법)

- 이 기법은 런타임에 타입 정보를 쉽게 유지할 수 있어 흔하게 사용된다.

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

type Shape = Square | Rectangle; // Shape 타입은 'tagged union'(태그된 유니온)

function calculateArea(shape: Shape) {
  if (shape.kind === "rectangle") {
    return shape.width * shape.height;
  } else {
    return shape.width * shape.width;
  }
}
```

3. `class`

- `interface`는 타입으로만 사용할 수 있지만, `class`는 타입과 값으로 모두 사용할 수 있다.

```typescript
class Square {
  constructor(public width: number) {}
}

class Rectangle extends Square {
  constructor(
    public width: number,
    public height: number
  ) {
    super(width);
  }
}

type Shape = Square | Rectangle; // Rectangle이 타입으로 참조됨.

function calculateArea(shape: Shape) {
  if (shape instanceof Rectangle) {
    // Rectangle이 값으로 참조됨.
    return shape.width * shape.height;
  } else {
    return shape.width * shape.width;
  }
}
```
