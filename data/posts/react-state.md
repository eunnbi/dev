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

<br/>

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

<br/>

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

<br/>

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

<br/>

### ✨ setState에 객체 대신 함수 인자 전달하기

> 💡 React may **batch** multiple setState() calls into a single update for performance.<br/>
> 💡 State Updates are Merged. When you call setState(), React **merges the object** you provide into the current state.<br/>

- setState가 연속적으로 호출되면 전달 받은 각 state(객체)를 합치고(merging) 합쳐진 단일 객체에 대해 `setState()`를 실행한다.
- merge 과정에서 같은 프로퍼티 키를 가지고 있다면 값을 덮어쓴다.
- 즉, setState()를 연속적으로 호출하면 **Batch 처리(일괄 처리)** 를 한다.
- 웹페이지 불필요한 렌더링 횟수를 줄여 좀 더 빠른 속도로 동작하게 만들기 위해서이다.
- 하지만, setState를 연속으로 호출하고 싶을 때는 setState에 객체 대신 함수 인자를 전달한다.
- 인자로 전달한 함수는 이전 상태 (`prevState`)를 첫 번째 인자로 받고 업데이트가 적용된 시점의 `props`를 두 번째 인자로 받는다.

<br/>

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

## state 업데이트 시 주의사항

- `state` 값을 바꾸어야 할 때는 `setState` 혹은 `useState`를 통해 전달받은 setter 함수를 사용해야만 한다.

```jsx
// 잘못된 코드
this.state.number = this.state.number + 1;
this.state.array = this.state.array.push(2);
this.state.object.value = 5;

const [object, setObject] = useState({ a: 1, b: 1 });
object.b = 2;
```

- 배열이나 객체 형태의 상태를 업데이트해야 할 때는 배열이나 객체 사본을 만들고 그 사본을 업데이트한 후 setState 혹은 setter 함수의 인자로 전달한다.

<br/>

> 참고: [React 공식 문서](https://reactjs.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous)
