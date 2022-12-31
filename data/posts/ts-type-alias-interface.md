---
emoji: 🥑
title: Type Alias vs Interface
date: "2022-06-27"
category: Typescript
preview: "공통점  1. 타입에 이름을 붙일 수 있다. 2. 추가 속성을 할당한다면 오류가 발생한다. 3. 인덱스 시그니처를 인터페이스와 타입에서 모두 사용할 수 있다. 4. 함수 타입을 인터페이스나 타입으로 정의할 수 있다. 5. 모두 제네릭이 가능하다. 6. 클래스를 구현(implements)할 때, 타입과 인터페이스 둘 다 사용할 수 있다. (이때, 유니온 타입은 사용할 수 없다.) 7. 타입과 인터페이스 둘 다 타입이나 인터페이스를 확장할 수 있다. (이때, 인터섹션 타입을 확장할 수는 있지만, 유니온 타입을 확장하지 못한다.) 차이점 1. 유니온 타입은 있지만, 유니온 인터페이스는 없다. 2. 타입은 유니온 타입을 확장할 수 있지만, 인터페이스는 유니온 타입을 확장할 수 없다."
---

## 공통점

1. 타입에 이름을 붙일 수 있다.

```ts
type TState = {
  name: string;
  capital: string;
};

interface IState {
  name: string;
  capital: string;
}
```

2. 추가 속성을 할당한다면 오류가 발생한다.

```ts
const wyoming: TState = {
  name: "Wyoming",
  capital: "Cheyenne",
  population: 500000 // 오류 발생
};
```

3. 인덱스 시그니처를 인터페이스와 타입에서 모두 사용할 수 있다.

```ts
type TDict = {
  [key: string]: string;
};

interface IDict {
  [key: string]: string;
}
```

4. 함수 타입을 인터페이스나 타입으로 정의할 수 있다.

```ts
type TFn = (x: number) => string;

interface IFn {
    (x: number) => string;
}

const toStrT : TFn = x => '' + x;
const toStrI : IFn = x => '' + x;
```

5. 모두 제네릭이 가능하다.

```ts
type TPair<T> = {
  first: T;
  second: T;
};

interface IPair<T> {
  first: T;
  second: T;
}
```

6. 클래스를 구현(implements)할 때, 타입과 인터페이스 둘 다 사용할 수 있다. (이때, 유니온 타입은 사용할 수 없다.)

```ts
class StateT implements TState {
  name: string = "";
  capital: string = "";
}

class StateI implements IState {
  name: string = "";
  capital: string = "";
}
```

7. 타입과 인터페이스 둘 다 타입이나 인터페이스를 확장할 수 있다. (이때, 인터섹션 타입을 확장할 수는 있지만, 유니온 타입을 확장하지 못한다.)

```ts
type TStateWithPop = IState & { population: number };
// type TStateWithPop = TState & { population: number };

interface IStateWithPop extends TState {
  population: number;
}
/*
interface IStateWithPop extends IState {
  population: number;
}
*/
```

<br/>

## 차이점

1. 유니온 타입은 있지만, 유니온 인터페이스는 없다.

```ts
type AorB = "a" | "b";
```

2. 타입은 유니온 타입을 확장할 수 있지만, 인터페이스는 유니온 타입을 확장할 수 없다.

```ts
type NamedVariable = (Input | Output) & { name: string };
```

3. 인터페이스는 선언 병합이 가능하지만, 타입에서는 불가능하다.

> 선연병합이란 동일한 이름의 Interface가 여러 개 선언되어도 타입스크립트 컴파일이 병합하는 것을 말한다.

```ts
interface IState {
  name: string;
  capital: string;
}

interface IState {
  population: number;
}

const wyoming: IState = {
  name: "Wyoming",
  capital: "Cheyenne",
  population: 500000
};
```

<br/>

Typescript 팀은 개방-폐쇄 원칙에 따라 확장에 열려 있는 Javascript 객체와 비슷하게 동작하도록 Interface를 설계했다.

> **개방-폐쇄 원칙** : 객체를 다룸에 있어서 객체의 확장은 개방적으로, 객체의 수정은 폐쇄적으로 대하는 원칙이다.

그래서 Typescript 팀은 가능한 Type Alias보다 Interface를 사용하고, Union Type 혹은 Tuple Type을 써야 하는 상황이면 Type Alias를 사용하도록 권장하고 있다.
