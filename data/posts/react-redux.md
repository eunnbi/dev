---
emoji: 🥝
title: React에서 Redux 사용해보기
date: "2022-01-19"
category: React
preview: "'리액트를 다루는 기술'이라는 책을 읽고 배운 것을 바탕으로 작성되었다. Redux란 가장 많이 사용하는 리액트 상태 관리 라이브러리이다. 컴포넌트의 상태 업데이트 로직을 다른 파일로 분리시켜서 더욱 효율적으로 관리할 수 있다. 컴포넌트끼리 상태를 공유해야 할 때도 여러 컴포넌트의 props를 거치지 않고 쉽게 상태값을 가져올 수 있다. 이때 redux는 리액트에 종속되는 라이브러리가 아니고 다른 라이브러리와 프레임워크, 바닐라 자바스크립트와 함께 사용할 수 있다."
---

> "리액트를 다루는 기술"이라는 책을 읽고 배운 것을 바탕으로 작성되었다.

# Redux란?

- 가장 많이 사용하는 리액트 **상태 관리 라이브러리**이다.
- **컴포넌트의 상태 업데이트 로직을 다른 파일로 분리**시켜서 더욱 효율적으로 관리할 수 있다.
- 컴포넌트끼리 상태를 공유해야 할 때도 **여러 컴포넌트의 props를 거치지 않고** 쉽게 상태값을 가져올 수 있다.
- 이때 `redux`는 리액트에 종속되는 라이브러리가 아니고 다른 라이브러리와 프레임워크, 바닐라 자바스크립트와 함께 사용할 수 있다.

# Redux 개념

## 액션

- **상태를 업데이트하는데 필요한 정보를 담은 객체**이다.
- 액션 객체는 반드시 `type` 프로퍼티를 가져야 하는데 이 값을 **액션의 이름**이라고 생각하면 된다.
- 액션 이름은 고유해야 한다!

## 액션 생성 함수

- 액션 객체를 반환하는 함수이다.
- 매번 액션 객체를 직접 작성하기 번거로울 수 있고, 실수를 방지하기 위해 **액션 객체를 함수로 관리**한다.

## 리듀서

- **상태를 업데이트하는 함수**이다.
- 현재 상태와 액션 객체를 인자로 받아 새로운 상태를 반환한다.
- 이때 첫 번째 인자의 기본 인자로 초기 상태값을 설정한다.
  - 첫번째 인수가 `undefined`일 때 초기 상태값이 사용된다.
- 인자로 받은 현재 상태의 불변성을 유지하면서 업데이트된 새로운 상태를 반환해야 한다.

## 스토어

- 프로젝트에 리덕스를 적용하기 위해 `store`를 생성해야 한다.
- `createStore` 함수의 인자로 `root reducer`를 전달해 호출한다.
- 스토어에는 상태와 리듀서가 있으며 여러 내장함수도 있다.

```javascript
import { createStore } from "redux";
const store = createStore(reducer);
// store.getState(); -> 상태 접근
// store.dispatch(액션생성함수); -> 상태 업데이트
// store.subscribe(리스너 함수); -> 리스너 등록
```

## 디스패치

- `dispatch`는 스토어 내장 함수 중 하나로 **액션을 dispatch하는 함수**이다.
- 액션 객체를 인자로 받아 이를 리듀서 함수로 전달하여 실행하는 함수이다.

## 구독

- `subscribe`도 스토어 내장 함수 중 하나이다.
- 리스너 콜백 함수를 인자로 전달해 호출하면, 상태가 업데이트될 때마다 리스너 함수가 호출된다.

# 💡 주의해야 할 점

## ✔ 단일 스토어

- 하나의 애플리케이션에는 하나의 스토어만 운영하는 것을 지향한다.

## ✔ 읽기 전용 상태

- 리덕스 상태는 읽기 전용이다.
- 즉, 기존 상태의 불변성을 유지하면서 업데이트된 새로운 상태를 생성해야 한다.

## ✔ 리듀서는 순수한 함수

- 리듀서 함수는 현재 상태(`state`)와 액션 객체(`action`)를 인자로 받는다.
- 파라미터 외의 값에는 의존해선 안된다.
- 똑같은 인자로 호출되면 항상 똑같은 결과 값을 반환해야 한다.

<br/>

# Redux 사용하기

- 리덕스를 사용할 때 컴포넌트를 **Presentational Component**와 **Container Component**로 구분하여 작성한다.
  - Presentational Component: 온전히 뷰만 담당하는 컴포넌트
  - Container Component: 리덕스와 연동되어 있는 컴포넌트로, 상태 업데이트 로직이 존재한다. Presentational Component에 필요한 상태와 함수를 props로 전달한다.

> 또 다른 방법으로는 **Hook을 이용해 상태 관련 로직을 컴포넌트에서 분리**하는 것이다. 두 방식 모두 잘 알려져 있는 디자인 패턴으로 상황에 맞게 필요한 디자인 패턴을 선택하면 된다.

## 액션 타입 정의하기

- 액션 객체는 반드시 `type` 프로퍼티를 가져야 하기 때문에 액션 타입을 정해야 한다.
- "모듈이름/액션이름"과 같은 형태로 정의해야 타입이 중복되는 일이 발생하지 않는다.

```javascript
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
```

## 액션 생성 함수 만들기

```javascript
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
```

- 만약 액션 객체에서 `type`외의 추가 정보가 필요로 할 때는 액션 생성 함수의 인자로 전달하여 해당 정보를 담은 액션 객체를 반환하도록 한다.

```js
// 예시
const INCREASE_BY = "counter/INCREASE_BY";
export const increaseBy = by => ({ type: INCREASE_BY, by });
```

## 리듀서 함수 만들기

```js
const initialState = {
  number: 0
};

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1
      };
    case DECREASE:
      return {
        number: state.number - 1
      };
    default:
      return state;
  }
}
```

> - [redux-actions](https://redux-actions.js.org/): 액션 생성 함수를 만들 때 매번 객체를 직접 작성할 필요 없이 간단하고 짧은 코드로 액션 생성 함수를 만들 수 있다. 또한, 리듀서 함수를 작성하는 데도 편의성을 제공한다.
> - [immer](https://immerjs.github.io/immer/): 편리하게 불변성을 유지하며 상태를 업데이트할 수 있다.

## 루트 리듀서

- 리덕스 스토어를 만들 때는 하나의 리듀서만 사용해야 하고, 한 프로젝트 내에선 하나의 스토어만 존재해야 하므로 여러 리듀서가 존재할 때는 루트 리듀서를 만든다.
- 리덕스에서 제공하는 `combineReducers` 함수를 이용한다.

```jsx
// modules/index.js
const rootReducer = combineReducers({
  counter,
  todos
});

export default rootReducer;
```

## 스토어 만들기 및 리덕스 적용

- 스토어를 만들 때 createStore 함수의 인자로 `rootReducer`를 전달한다.
- 컴포넌트에서 스토어를 사용할 수 있도록 최상위 컴포넌트인 App을 react-redux에서 제공하는 Provider 컴포넌트로 감싼다. 이때 Provider 컴포넌트의 store prop값으로 앞서 생성한 `store`를 전달한다.

```jsx
// src/index.js
import { createStore } from "redux";
import rootReducer from "./modules";
import { Provider } from "react-redux";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

## 컴포넌트에서 Redux 사용하기

이제 컴포넌트에서 리덕스 스토어에 접근하여 원하는 상태를 받아오고 액션도 `dispatch`하도록 한다.

### connect 함수

`connect(mapStateToProps, mapDispatchToPros)(연동할 컴포넌트)`

- `mapStateToProps`
  - 리덕스 스토어 안의 상태를 조회해 어떤 것을 컴포넌트의 props로 전달할지 정의하는 함수
  - 리덕스 스토어에 있는 상태를 인자로 받는다.
- `mapDispatchToProps`
  - 액션을 dispatch 하는 함수를 만들어서 컴포넌트의 props로 전달하는 함수
  - 스토어의 내장 함수인 dispatch 함수를 인자로 받는다.
- `mapStateToProps`와 `mapDispatchToProps`가 반환하는 객체 내부의 값들은 전부 컴포넌트의 props로 전달된다.
- `connect` 함수를 호출하면 또 다른 함수가 반환되고 이 함수의 인자로 컴포넌트를 전달한다. 이때 인자로 전달할 컴포넌트는 앞서 설명한 두 함수가 반환하는 객체 내부의 값들을 props로 전달받는 컴포넌트여야 한다. 그러면 props값을 전달받은 새로운 컴포넌트가 반환된다.

```js
import React from "react";
import { connect } from "react-redux";
import Counter from "../components/Counter";
import { increase, decrease } from "../modules/counter";

function CounterContainer({ number, onIncrease, onDecrease }) {
  return (
    // Presentational Component에게 상태와 액션을 dispatch하는 함수들을 props로 전달
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
}

// 리덕스 스토어 안의 상태를 조회해 어떤 것을 컴포넌트의 props로 전달할지 정의하는 함수
// 리덕스 스토어에 있는 상태를 인자로 받는다.
const mapStateToProps = state => ({
  number: state.counter.number
});

// 액션을 dispatch 하는 함수를 만들어서 컴포넌트의 props로 전달하는 함수
// dispatch 함수를 인자로 받는다.
// 이때 액션을 디스패치하는 함수 대신 액션 생성 함수로 이루어진 객체를 반환해도 된다.
const mapDispatchToProps = dispatch => ({
  onIncrease: () => dispatch(increase()),
  onDecrease: () => dispatch(decrease())
});

/* 
const mapDispatchToProps = {
  onIncrease: increase,
  onDecrease: decrease,
};
*/

// number, onIncrease, onDecrease 값들을 전달받은 컴포넌트 반환
export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
```

### useSelector

```jsx
const result: any = useSelector(selector: Function, equalityFn?: Function)
```

- 리덕스 스토어에 있는 상태를 조회할 때 사용된다.
- 인자로 **selector 함수**와 **equality 함수**을 받는다.
  - selector 함수는 인자로 리덕스 스토어에 있는 상태를 받고 어떤 상태값을 반환할지 정의한다.
  - equality 함수는 이전 값과 다음 값을 비교하여 true/false를 반환하는 함수이다. 반환값이 true이면 리렌더링을 하지 않고 false이면 리렌더링한다.

### useDispatch

- useDispatch 함수를 호출하면 스토어의 내장함수 dispatch 함수를 반환한다.

```jsx
const dispatch = useDispatch();
```

#### useSelector와 useDispatch hook 사용 예시

```js
function CounterContainer() {
  const number = useSelector(state => state.counter.number);
  const dispatch = useDispatch();
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
}

export default CounterContainer;
```

### useStore

- useStore를 이용하여 컴포넌트 내에서 직접 store에 접근할 수 있다.

```jsx
const store = useStore();
store.dispatch({type: "ACTION"}):
store.getState();
```

### connect vs redux hooks

- connect 함수를 사용하여 컴포넌트와 리덕스를 연동했을 경우 부모 컴포넌트가 리렌더링될 때 해당 컴포넌트의 props가 바뀌지 않았다면 리렌더링되지 않는다.
- 반면, Hook을 사용했을 때는 이러한 최적화 작업이 자동적으로 이루어지지 않는다. 만약 최적화 작업이 필요할 때는 React.memo를 사용하면 된다.
