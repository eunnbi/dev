---
emoji: 🍩
title: Redux Middleware
date: "2022-01-19"
category: React
preview: "'리액트를 다루는 기술'이라는 책을 읽고 배운 것을 바탕으로 작성되었다. 미들웨어란? 액션과 리듀서 사이의 중간자이다. 리덕스 미들웨어는 액션이 dispatch되었을 때 리듀서에서 이를 처리하기에 앞서 지정된 작업들을 실행한다. store: 리덕스 스토어 인스턴스, action: 디스패치된 액션, next: 함수 형태로 dispatch 함수와 비슷한 기능을 한다. next(action)을 호출하면 액션을 다음 미들웨어에게 전달하고, 없다면 리듀서에게 전달한다. 반면, 미들웨어 내부에서 store.dispatch 함수를 호출하면 첫 번째 미들웨어부터 다시 처리한다. 만약 미들웨어에서 next를 사용하지 않으면 액션은 리듀서에게 전달되지 않는다. 즉, 액션이 무시된다."
---

> "리액트를 다루는 기술"이라는 책을 읽고 배운 것을 바탕으로 작성되었다.

# 미들웨어란?

- **액션과 리듀서 사이의 중간자**
- 리덕스 미들웨어는 액션이 dispatch되었을 때 리듀서에서 이를 처리하기에 앞서 지정된 작업들을 실행한다.

## 미들웨어 기본 구조

```javascript
const loggerMiddleware = store => next => action => {};
```

> 참고: [클로저(커링함수)](https://www.eunnbi.dev/posts/js-closure#%E2%9C%A8-%EC%BB%A4%EB%A7%81-%ED%95%A8%EC%88%98)

- `store`: 리덕스 스토어 인스턴스
- `action`: 디스패치된 액션
- `next`: 함수 형태로 dispatch 함수와 비슷한 기능을 한다.
  - `next(action)`을 호출하면 액션을 다음 미들웨어에게 전달하고, 없다면 리듀서에게 전달한다.
  - 반면, 미들웨어 내부에서 `store.dispatch` 함수를 호출하면 첫 번째 미들웨어부터 다시 처리한다.
  - 만약 미들웨어에서 `next`를 사용하지 않으면 액션은 리듀서에게 전달되지 않는다. 즉, 액션이 무시된다.

## redux-logger 사용하기

```javascript
// src/index.js
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import rootReducer from "./modules";

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(logger));
```

> [npm - redux-logger](https://www.npmjs.com/package/redux-logger)

<br/>

# 비동기 작업을 처리하는 미들웨어

## redux-thunk

- 객체가 아닌 **함수 형태의 액션을 디스패치**할 수 있게 해준다.
- `Thunk`: 특정 작업을 나중에 할 수 있도록 미루기 위해 함수 형태로 감싼 것을 의미한다.

```javascript
const addOne = x => x + 1;
const addOneThunk = x => () => addOne(x);
const fn = addOneThunk(1);
setTimeout(() => {
  const value = fn();
  console.log(value);
}, 1000);
```

- `redux-thunk` 라이브러리를 사용하면 함수 형태의 액션을 디스패치할 수 있다. 그러면 미들웨어가 함수 형태의 액션을 전달받고 `dispatch` 함수와 `getState` 함수를 인자로 넣어 호출한다.

```javascript
const sampleThunk = () => (dispatch, getState) => {
  // 미들웨어가 이 함수 내부를 실행함.
  // 현재 상태를 조회하거나 새로운 액션을 디스패치 할 수 있음.
};
```

```javascript
// src/index.js
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import rootReducer from "./modules";

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
```

**Example**

```js
// modules/counter.js
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
const increase = () => ({ type: INCREASE });
const decrease = () => ({ type: DECREASE });

// increaseAsync 액션 생성 함수를 호출하는 함수 형태의 액션이 반환됨.
// 반환된 함수는 미들웨어가 전달받아 호출함. 이때 dispatch 함수와 getState 함수를 인자로 넣는다.
export const increaseAsync = () => dispatch => {
  setTimeout(() => {
    // 1초 뒤에 dispatch 함수를 호출하여 액션 객체를 리듀서 함수에게 전달
    dispatch(increase());
  }, 1000);
};

export const decreaseAsync = () => dispatch => {
  setTimeout(() => {
    dispatch(decrease());
  }, 1000);
};

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

```js
// container/CounterContainer.js

function CounterContainer() {
  const number = useSelector(state => state.counter.number);
  const dispatch = useDispatch();
  const onIncrease = () => dispatch(increaseAsync());
  const onDecrease = () => dispatch(decreaseAsync());
  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
}

export default CounterContainer;
```

## redux-saga

> 기본 개념 중심으로 작성되었다.

### Side Effect 관리

- redux-saga는 애플리케이션의 side effect들을 쉽게 관리하고 효과적으로 실행하고 간단한 테스트와 쉬운 에러 처리를 목적으로 한다.
- 애플리케이션에서 필요한 side effect를 별도의 스레드로 분리해서 관리할 수 있다.
- `side effect`: 데이터 요청 등의 비동기 작업, 브라우저 캐시 등과 같이 순수하지 않은 것들
  - 자바스크립트 관점: 코드가 외부 세계에 영향을 주거나 받는 것
  - 함수 관점: 함수가 일관된 결과를 보장하지 못하거나, 함수 외부 어디든지 조금이라도 영향을 주는 것
- **redux-saga를 이용하여 액션 생성 함수와 리듀서 함수의 순수성을 유지하면서 사이트 이펙트를 관리할 수 있다.**

> **redux-saga 라이브러리를 사용하는 경우**
>
> - 기존 요청을 취소 처리해야 할 때 (불필요한 중복 요청 방지)
> - 특정 액션이 발생했을 때 다른 액션을 발생시키거나 API 요청 등 리덕스와 관계없는 코드를 실행할 때
> - 웹소켓을 사용할 때
> - API 요청 실패 시 재요청해야 할 때

**전체적인 흐름**

```javascript
import { put, takeEvery } from "redux-saga/effect";

function* helloSaga() {
  console.log("hello saga");
}

// worker Saga: will perform the async increment task
function* incrementAsync() {
  yield call(delay, 1000);
  yield put({ type: "INCREMENT" });
}

// watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC action
function* watchIncrementAsync() {
  yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}

// root Saga
export default function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync()]);
}
```

- **Saga**는 **객체를 yield하는 제너레이터 함수**이다.
- 반환된 객체(yielded object)는 미들웨어에게 전달하는 일종의 **명령**을 담고 있다.
- 미들웨어는 Saga가 반환한 객체 (yielded object)를 전달받고 명령을 해석하여 특정 작업을 수행한다. 그 동안 Saga는 실행이 중지된 상태이다.
- 모든 Saga를 **병렬**적으로 실행할 수 있도록 **root Saga**를 만든다.

```javascript
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
```

### Generator

- redux-saga는 **제너레이터 함수 문법을 기반으로 side effect를 관리**한다.
- 제너레이터 함수(function\*)를 호출하면 제너레이터가 반환된다.
- 제너레이터는 next 메서드를 갖는데 이 메서드를 호출하면 제너레이터 함수는 yield문을 만나기 전까지 실행된다.
- 이후 다시 next 메서드를 호출하면 실행이 중지된 시점부터 다시 제너레이터 함수가 실행된다. (자세한 내용은 [Generator](https://www.eunnbi.dev/posts/js-generator) 참고)

> ✔ 제너레이터 함수는 Callee, 이를 호출하는 함수는 Caller이다.<br/>
> ✔ Caller는 Callee가 반환한 제너레이터를 가지고 로직을 수행한다.<br/>
> ✔ Caller는 Callee의 yield문 지점에서 다음 진행 여부/시점을 제어한다.<br/>
> ✔ Caller는 **Callee를 호출하는 책임**뿐 아니라 **Callee 내부 로직 수행에 대한 제어권**을 갖는다.

- redux-saga 입장에서 보면 미들웨어가 Caller이고, 제너레이터 함수인 Saga가 Callee다.
- 미들웨어는 Saga를 끊임없이 동작시킨다.
- Saga가 동작하기 시작하면 제너레이터 함수이기 때문에 yield문을 만나면 실행이 중지되고 객체를 yield한다.
- 미들웨어는 이 객체를 받아 해석하고 특정 작업을 수행한다.

<br/>

### Effect

💡 **미들웨어에 의해 수행될 명령을 담고 있는 순수한 자바스크립트 객체**

```javascript
function* incrementAsync() {
  yield call(delay, 1000); // {CALL : {fn: delay, args: [1000]}}
  yield put({ type: "INCREMENT" }); // {PUT: {type: "INCREMENT"}}
}
```

- `call`이나 `put`을 **Effect Creators(이펙트 생성자)** 라고 하고, 명령을 담고 있는 순수한 객체 (Effect)를 yield한다.
- 미들웨어는 이 객체를 받아 명령들을 해석해 처리하고, 그 결과를 다시 Saga에게 전달한다.
- 물론 Saga는 Effect만을 yield해야 하는 것은 아니다. Promise 객체도 yield할 수 있지만 비동기 로직을 Saga 내부에서 직접 처리하면 테스트가 어려워지는 등 여러 어려움이 발생한다.
- 되도록 Effect만을 yield하는 Saga를 만들어야 한다.

> 참고: [Effect Creators](https://redux-saga.js.org/docs/api/#effect-creators)

![Flow](1.png)

<br/>

### Error Handling

- Saga 내부에서 error를 처리하기 위해 try/catch문을 사용한다.

### Task

- 하나의 Saga가 실행되는 것

### Saga Helpers

`takeEvery(action, sagaFn)`

- action이 발생할 때마다 Saga를 실행한다.
- 여러 개의 Task를 동시에 시작할 수 있다.

`takeLast(action, sagaFn)`

- 마지막으로 발생한 하나의 action에 대해서만 Saga를 실행한다.
- 실행중이던 Task를 취소하고 새로운 Task를 실행한다.

**Example**

```js
// modules/counter.js
import { delay, put, call, takeEvery, takeLatest } from "redux-saga/effects";

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
const INCREASE_ASYNC = "counter/INCREASE_ASYNC";
const DECREASE_ASYNC = "counter/DECREASE_ASYNC";

const increase = () => ({ type: INCREASE });
const decrease = () => ({ type: DECREASE });
export const increaseAsync = () => ({ type: INCREASE_ASYNC });
export const decreaseAsync = () => ({ type: DECREASE_ASYNC });

// worker Saga
function* increaseSaga() {
  yield call(delay, 1000);
  yield put(increase());
}

// worker Saga
function* decreaseSaga() {
  yield call(delay, 1000);
  yield put(decrease());
}

// watcher Saga
export function* counterSaga() {
  yield takeEvery(INCREASE_ASYNC, increaseSaga);
  yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}

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

```js
// modules/index.js
import { combineReducers } from "redux";
import counter, { counterSaga } from "./counter";
const rootReducer = combineReducers({ counter });

export function* rootSaga() {
  yield all([counterSaga()]);
}

export default rootReducer;
```

```js
// container/CounterContainer.js
function CounterContainer() {
  const number = useSelector(state => state.counter.number);
  const dispatch = useDispatch();
  const onIncrease = () => dispatch(increaseAsync());
  const onDecrease = () => dispatch(decreaseAsync());
  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
}

export default CounterContainer;
```

<br/>

참고

- [Redux-Saga: 사이드 이펙트 관리](https://meetup.toast.com/posts/136)
- [Redux-Saga: 제너레이터와 이펙트](https://meetup.toast.com/posts/140)
- [Redux-Saga 공식문서](https://redux-saga.js.org/docs/introduction/BeginnerTutorial)
