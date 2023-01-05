---
emoji: ⭐
title: state
date: "2022-01-12"
category: React
preview: "'리액트를 다루는 기술'이라는 책을 읽고 배운 것을 바탕으로 작성되었다. state란? 컴포넌트 자체적으로 지닌 값으로 컴포넌트 내부에서 값을 업데이트할 수 있다. 클래스형 컴포넌트의 state는 객체 형식이어야 한다. 생성자 함수에서 초기화한 state는 render 메서드에서 사용할 수 있다. setState를 사용하여 state를 업데이트하고 난 다음에 특정 작업을 하고 싶을 때는 setState의 두 번째 파라미터로 콜백 함수를 전달하면 된다. ✨ setState에 객체 대신 함수 인자 전달하기 💡 React may batch multiple setState() calls into a single update for performance. 💡 State Updates are Merged. When you call setState(), React merges the object you provide into the current state."
---

> "리액트를 다루는 기술"이라는 책을 읽고 배운 것을 바탕으로 작성되었다.

# state란? (상태)

**컴포넌트 자체적으로 지닌 데이터**로 컴포넌트 내부에서 값을 업데이트할 수 있다.

## 클래스형 컴포넌트의 state

```jsx
import { Component } from "react";

class Counter extends Component {
  // 생성자 함수
  constructor(props) {
    // state의 초기값 설정 (객체 형식!)
    this.state = {
      number: 0
    };
  }
  render() {
    const { number } = this.state; // 상태 조회
    return (
      <div>
        <h1>{number}</h1>
        <button onClick={() => this.setState({ number: number + 1 })}>
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
```

- 컴포넌트의 state는 객체 형식이어야 한다.
- 생성자 함수에서 초기화한 state는 render 메서드에서 사용할 수 있다.

### state 객체 안에 여러 값이 있을 때

```jsx
import { Component } from "react";

class Counter extends Component {
  // state의 초기값 설정
  state = {
    number: 0,
    fixedNumber: 0
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { number, fixedNumber } = this.state; // 객체 비구조화 할당
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button onClick={() => this.setState({ number: number + 1 })}>
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
```

### this.setState가 끝난 후 특정 작업 실행하기

- `setState`를 사용하여 state를 업데이트하고 난 다음에 특정 작업을 하고 싶을 때는 `setState`의 두 번째 파라미터로 콜백 함수를 전달하면 된다.

```jsx
const onClick = () => {
  this.setState(
    {
      number: number + 1
    },
    () => {
      console.log("setState 호출");
    }
  );
};
```

### ✨ setState에 객체 대신 함수 인자 전달하기

> 💡 React may **batch** multiple setState() calls into a single update for performance.<br/>
> 💡 State Updates are Merged. When you call setState(), React **merges the object** you provide into the current state.<br/>

- setState가 연속적으로 호출되면 전달 받은 각 state(객체)를 합치고(merging) 합쳐진 단일 객체에 대해 `setState()`를 실행한다.
- merge 과정에서 같은 프로퍼티 키를 가지고 있다면 값을 덮어쓴다.
- 즉, setState()를 연속적으로 호출하면 **Batch 처리(일괄 처리)** 를 한다.
- 웹페이지 불필요한 렌더링 횟수를 줄여 좀 더 빠른 속도로 동작하게 만들기 위해서이다.
- 하지만, setState를 연속으로 호출하고 싶을 때는 setState에 객체 대신 함수 인자를 전달한다.
- 인자로 전달한 함수는 이전 상태 (`prevState`)를 첫 번째 인자로 받고 업데이트가 적용된 시점의 `props`를 두 번째 인자로 받는다.

## 함수형 컴포넌트에서 useState 사용하기

- `v16.8` 이후부터 `useState` 함수를 이용하여 함수형 컴포넌트에서도 state를 사용할 수 있다.
- `useState` 함수를 호출하면 배열이 반환되는데, 첫번째 원소는 state이고, 두번째 원소는 state를 업데이트하는 함수이다. (setter 함수)
- useState 함수의 인자로 초기 상태값이나 초기 상태값을 반환하는 함수를 전달한다.

```jsx
import React, { useState } from "react";

function Counter() {
  // 배열 비구조화 할당
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber(number + 1); // 인자로 전달받은 값으로 상태 업데이트
  };

  const onDecrease = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}
export default Counter;
```

### 함수형 업데이트

- `setState` 함수에 함수 인자를 전달하여 상태를 업데이트할 수 있다.
- 이 함수 인자는 전의 상태값을 인자로 받고 업데이트된 상태값을 반환한다.

```jsx
// 함수형 업데이트
const onIncrease = () => {
  setNumber(prevNumber => prevNumber + 1);
};

const onDecrease = () => {
  setNumber(prevNumber => prevNumber - 1);
};
```

<br/>

# state 업데이트 시 주의사항

- `state` 값을 바꾸어야 할 때는 `setState` 혹은 `useState`를 통해 전달받은 setter 함수를 사용해야만 한다.

```jsx
/* **WRONG** */
this.state.number = this.state.number + 1;
this.state.array = this.state.array.push(2);
this.state.object.value = 5;

const [object, setObject] = useState({ a: 1, b: 1 });
object.b = 2;
```

- 배열이나 객체 형태의 상태를 업데이트해야 할 때는 배열이나 객체 사본을 만들고 그 사본을 업데이트한 후 setState 혹은 setter 함수의 인자로 전달한다.
- 즉, 상태 업데이트 시에는 불변성을 지켜야 한다.

## 불변성이란?

- **메모리 영역에서의 값이 변경될 수 없는 특징**을 말한다.
- 기본 자료형은 메모리 영역에 데이터가 할당된 이상 그 영역의 값은 바뀌지 않는다. (불변성)
- 반면, 참조 자료형은 프로퍼티가 존재하여 프로퍼티의 값을 얼마든지 바꿀 수 있다. (가변성)
- 프로퍼티도 메모리 영역에 할당되어 일종의 데이터를 저장하는 변수라고 볼 수 있다.
- 변수에 할당된 값을 바꿀 수 있기 때문에 프로퍼티에 대한 값도 바뀔 수 있다.
- 참고: [기본 자료형과 참조 자료형의 차이점 - 불변값과 가변값](https://www.eunnbi.dev/posts/js-data-type#%EA%B8%B0%EB%B3%B8-%EC%9E%90%EB%A3%8C%ED%98%95%EA%B3%BC-%EC%B0%B8%EC%A1%B0-%EC%9E%90%EB%A3%8C%ED%98%95%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90)

## React 상태의 불변성을 지켜야 하는 이유

- state가 변경되었는지 감지하기 위해 **얕은 비교**를 수행한다.
  > 💡 얕은 비교: 실제 내부 값을 비교하는 것이 아니라 **메모리 주소값(참조값)을 비교**하는 것을 말한다. 얕은 비교는 계산 리소스를 줄여주기 때문에 효율적으로 `state`를 업데이트 할 수 있다.
- 즉, state의 참조값을 바꾸지 않고 단순히 내부 프로퍼티의 값만 바꾸었다면 우리는 state가 바뀌었다고 생각하지만 리액트는 이전의 state와 같다고 인식하여 컴포넌트를 리렌더링하지 않는다.

> - 현재 state의 불변성을 지키면서 값을 업데이트해야 한다. (특히, 참조 자료형의 경우)
> - 새로운 참조값을 만들기 위해 사본을 만들고 그 사본에 값을 업데이트한 후, setter 함수에게 전달한다.

### 얕은 복사

- 스프레드 연산자의 경우 얕은 복사를 수행한다. 기존 객체의 프로퍼티 값을 복사하여 새로운 객체를 만든다.
- 하지만 만약 프로퍼티 값이 참조형 데이터의 경우 그 데이터가 참조하는 주솟값만 복사하게 된다.
- 그러면 전체적으로 봤을 때 불변성을 지키지 못한 것이다.

### 깊은 복사

- 객체의 프로퍼티 중에서 그 값이 기본형 데이터일 경우에 그대로 복사하고, 참조형 데이터일 경우 다시 내부의 프로퍼티의 값들을 복사한다.

> 참고: [객체 복사하기 - 얕은 복사, 깊은 복사](https://www.eunnbi.dev/posts/js-data-type#%EA%B0%9D%EC%B2%B4-%EB%B3%B5%EC%82%AC%ED%95%98%EA%B8%B0)

### immer 라이브러리

- immer 라이브러리를 사용하여 쉽고 짧은 코드로 중첩 객체 형태의 상태도 불변성을 유지하면서 업데이트할 수 있다.
- `produce` 함수는 두 개의 인자를 받는다. 첫번째 인자는 수정하고 싶은 상태이고, 두번째 인자는 상태 업데이트 로직을 정의하는 함수이다.
- 두번째 인자로 전달된 함수 내부에서 상태를 업데이트하면, `produce` 함수가 불변성 유지를 대신해주면서 새로운 상태를 반환한다.
- 그래서 상태를 업데이트할 때 객체 안에 있는 값을 직접 수정하거나, 배열에 직접적인 변화를 일으키는 `push`, `splice` 등의 메서드를 이용해도 된다.

```javascript
import produce from "immer";
const nextState = produce(originalState, draft => {
  // 상태 업데이트 로직
  // draft: 업데이트할 상태
});
```

> [immer 라이브러리에 대해 더 알아보기](https://immerjs.github.io/immer/)

> 참고: [React 공식 문서](https://reactjs.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous)
