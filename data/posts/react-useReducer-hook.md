---
emoji: 🍰
title: useReducer Hook
date: "2022-01-14"
category: React
preview: "'리액트를 다루는 기술'이라는 책을 읽고 배운 것을 바탕으로 작성되었다. 다양한 상황(액션)에 따라 상태를 업데이트해주고 싶을 때 사용한다. 💡 useReducer hook를 사용했을 때의 큰 장점은 상태 업데이트 로직을 컴포넌트와 분리할 수 있다. reducer는 현재 상태값(state)과 상태 업데이트에 필요한 정보를 담은 action 값을 전달받아 새로운 상태를 반환하는 함수이다. 불변성을 지키면서 업데이트된 새로운 상태를 반환해야 한다."
---

> "리액트를 다루는 기술"이라는 책을 읽고 배운 것을 바탕으로 작성되었다.

# useReducer

- 다양한 상황(액션)에 따라 상태를 업데이트해주고 싶을 때 사용한다.
- 💡 useReducer hook를 사용했을 때의 큰 장점은 **상태 업데이트 로직을 컴포넌트와 분리할 수 있다.**

## reducer

- **현재 상태값(state)과 상태 업데이트에 필요한 정보를 담은 action 값을 전달받아 새로운 상태를 반환하는 함수**이다.
- 불변성을 지키면서 업데이트된 새로운 상태를 반환해야 한다.
- `action` 은 어떤 타입의 값이든 상관없다.

```javascript
function reducer(state, action) {
  return {};
}
```

## state, dispatch

- useReducer 함수의 첫번째 인자로 reducer 함수를 전달하고, 두번째 인자로 초기 상태값을 전달한다.
- useReducer 함수의 반환값은 배열이고 첫번째 요소는 **현재 상태값** (state), 두번째 요소는 **action값을 인자로 받아 reducer 함수를 호출하는 함수** (dispatch)이다.

### 예시

```jsx
import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  return (
    <div>
      <h1>number : {state.value}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
    </div>
  );
};
```
