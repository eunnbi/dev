---
emoji: π©
title: Redux Middleware
date: "2022-01-19"
category: React
preview: "'λ¦¬μ‘νΈλ₯Ό λ€λ£¨λ κΈ°μ 'μ΄λΌλ μ±μ μ½κ³  λ°°μ΄ κ²μ λ°νμΌλ‘ μμ±λμλ€. λ―Έλ€μ¨μ΄λ? μ‘μκ³Ό λ¦¬λμ μ¬μ΄μ μ€κ°μμ΄λ€. λ¦¬λμ€ λ―Έλ€μ¨μ΄λ μ‘μμ΄ dispatchλμμ λ λ¦¬λμμμ μ΄λ₯Ό μ²λ¦¬νκΈ°μ μμ μ§μ λ μμλ€μ μ€ννλ€. store: λ¦¬λμ€ μ€ν μ΄ μΈμ€ν΄μ€, action: λμ€ν¨μΉλ μ‘μ, next: ν¨μ ννλ‘ dispatch ν¨μμ λΉμ·ν κΈ°λ₯μ νλ€. next(action)μ νΈμΆνλ©΄ μ‘μμ λ€μ λ―Έλ€μ¨μ΄μκ² μ λ¬νκ³ , μλ€λ©΄ λ¦¬λμμκ² μ λ¬νλ€. λ°λ©΄, λ―Έλ€μ¨μ΄ λ΄λΆμμ store.dispatch ν¨μλ₯Ό νΈμΆνλ©΄ μ²« λ²μ§Έ λ―Έλ€μ¨μ΄λΆν° λ€μ μ²λ¦¬νλ€. λ§μ½ λ―Έλ€μ¨μ΄μμ nextλ₯Ό μ¬μ©νμ§ μμΌλ©΄ μ‘μμ λ¦¬λμμκ² μ λ¬λμ§ μλλ€. μ¦, μ‘μμ΄ λ¬΄μλλ€."
---

> "λ¦¬μ‘νΈλ₯Ό λ€λ£¨λ κΈ°μ "μ΄λΌλ μ±μ μ½κ³  λ°°μ΄ κ²μ λ°νμΌλ‘ μμ±λμλ€.

# λ―Έλ€μ¨μ΄λ?

- **μ‘μκ³Ό λ¦¬λμ μ¬μ΄μ μ€κ°μ**
- λ¦¬λμ€ λ―Έλ€μ¨μ΄λ μ‘μμ΄ dispatchλμμ λ λ¦¬λμμμ μ΄λ₯Ό μ²λ¦¬νκΈ°μ μμ μ§μ λ μμλ€μ μ€ννλ€.

## λ―Έλ€μ¨μ΄ κΈ°λ³Έ κ΅¬μ‘°

```javascript
const loggerMiddleware = store => next => action => {};
```

> μ°Έκ³ : [ν΄λ‘μ (μ»€λ§ν¨μ)](https://www.eunnbi.dev/posts/js-closure#%E2%9C%A8-%EC%BB%A4%EB%A7%81-%ED%95%A8%EC%88%98)

- `store`: λ¦¬λμ€ μ€ν μ΄ μΈμ€ν΄μ€
- `action`: λμ€ν¨μΉλ μ‘μ
- `next`: ν¨μ ννλ‘ dispatch ν¨μμ λΉμ·ν κΈ°λ₯μ νλ€.
  - `next(action)`μ νΈμΆνλ©΄ μ‘μμ λ€μ λ―Έλ€μ¨μ΄μκ² μ λ¬νκ³ , μλ€λ©΄ λ¦¬λμμκ² μ λ¬νλ€.
  - λ°λ©΄, λ―Έλ€μ¨μ΄ λ΄λΆμμ `store.dispatch` ν¨μλ₯Ό νΈμΆνλ©΄ μ²« λ²μ§Έ λ―Έλ€μ¨μ΄λΆν° λ€μ μ²λ¦¬νλ€.
  - λ§μ½ λ―Έλ€μ¨μ΄μμ `next`λ₯Ό μ¬μ©νμ§ μμΌλ©΄ μ‘μμ λ¦¬λμμκ² μ λ¬λμ§ μλλ€. μ¦, μ‘μμ΄ λ¬΄μλλ€.

## redux-logger μ¬μ©νκΈ°

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

# λΉλκΈ° μμμ μ²λ¦¬νλ λ―Έλ€μ¨μ΄

## redux-thunk

- κ°μ²΄κ° μλ **ν¨μ ννμ μ‘μμ λμ€ν¨μΉ**ν  μ μκ² ν΄μ€λ€.
- `Thunk`: νΉμ  μμμ λμ€μ ν  μ μλλ‘ λ―Έλ£¨κΈ° μν΄ ν¨μ ννλ‘ κ°μΌ κ²μ μλ―Ένλ€.

```javascript
const addOne = x => x + 1;
const addOneThunk = x => () => addOne(x);
const fn = addOneThunk(1);
setTimeout(() => {
  const value = fn();
  console.log(value);
}, 1000);
```

- `redux-thunk` λΌμ΄λΈλ¬λ¦¬λ₯Ό μ¬μ©νλ©΄ ν¨μ ννμ μ‘μμ λμ€ν¨μΉν  μ μλ€. κ·Έλ¬λ©΄ λ―Έλ€μ¨μ΄κ° ν¨μ ννμ μ‘μμ μ λ¬λ°κ³  `dispatch` ν¨μμ `getState` ν¨μλ₯Ό μΈμλ‘ λ£μ΄ νΈμΆνλ€.

```javascript
const sampleThunk = () => (dispatch, getState) => {
  // λ―Έλ€μ¨μ΄κ° μ΄ ν¨μ λ΄λΆλ₯Ό μ€νν¨.
  // νμ¬ μνλ₯Ό μ‘°ννκ±°λ μλ‘μ΄ μ‘μμ λμ€ν¨μΉ ν  μ μμ.
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

// increaseAsync μ‘μ μμ± ν¨μλ₯Ό νΈμΆνλ ν¨μ ννμ μ‘μμ΄ λ°νλ¨.
// λ°νλ ν¨μλ λ―Έλ€μ¨μ΄κ° μ λ¬λ°μ νΈμΆν¨. μ΄λ dispatch ν¨μμ getState ν¨μλ₯Ό μΈμλ‘ λ£λλ€.
export const increaseAsync = () => dispatch => {
  setTimeout(() => {
    // 1μ΄ λ€μ dispatch ν¨μλ₯Ό νΈμΆνμ¬ μ‘μ κ°μ²΄λ₯Ό λ¦¬λμ ν¨μμκ² μ λ¬
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

> κΈ°λ³Έ κ°λ μ€μ¬μΌλ‘ μμ±λμλ€.

### Side Effect κ΄λ¦¬

- redux-sagaλ μ νλ¦¬μΌμ΄μμ side effectλ€μ μ½κ² κ΄λ¦¬νκ³  ν¨κ³Όμ μΌλ‘ μ€ννκ³  κ°λ¨ν νμ€νΈμ μ¬μ΄ μλ¬ μ²λ¦¬λ₯Ό λͺ©μ μΌλ‘ νλ€.
- μ νλ¦¬μΌμ΄μμμ νμν side effectλ₯Ό λ³λμ μ€λ λλ‘ λΆλ¦¬ν΄μ κ΄λ¦¬ν  μ μλ€.
- `side effect`: λ°μ΄ν° μμ²­ λ±μ λΉλκΈ° μμ, λΈλΌμ°μ  μΊμ λ±κ³Ό κ°μ΄ μμνμ§ μμ κ²λ€
  - μλ°μ€ν¬λ¦½νΈ κ΄μ : μ½λκ° μΈλΆ μΈκ³μ μν₯μ μ£Όκ±°λ λ°λ κ²
  - ν¨μ κ΄μ : ν¨μκ° μΌκ΄λ κ²°κ³Όλ₯Ό λ³΄μ₯νμ§ λͺ»νκ±°λ, ν¨μ μΈλΆ μ΄λλ μ§ μ‘°κΈμ΄λΌλ μν₯μ μ£Όλ κ²
- **redux-sagaλ₯Ό μ΄μ©νμ¬ μ‘μ μμ± ν¨μμ λ¦¬λμ ν¨μμ μμμ±μ μ μ§νλ©΄μ μ¬μ΄νΈ μ΄ννΈλ₯Ό κ΄λ¦¬ν  μ μλ€.**

> **redux-saga λΌμ΄λΈλ¬λ¦¬λ₯Ό μ¬μ©νλ κ²½μ°**
>
> - κΈ°μ‘΄ μμ²­μ μ·¨μ μ²λ¦¬ν΄μΌ ν  λ (λΆνμν μ€λ³΅ μμ²­ λ°©μ§)
> - νΉμ  μ‘μμ΄ λ°μνμ λ λ€λ₯Έ μ‘μμ λ°μμν€κ±°λ API μμ²­ λ± λ¦¬λμ€μ κ΄κ³μλ μ½λλ₯Ό μ€νν  λ
> - μΉμμΌμ μ¬μ©ν  λ
> - API μμ²­ μ€ν¨ μ μ¬μμ²­ν΄μΌ ν  λ

**μ μ²΄μ μΈ νλ¦**

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

- **Saga**λ **κ°μ²΄λ₯Ό yieldνλ μ λλ μ΄ν° ν¨μ**μ΄λ€.
- λ°νλ κ°μ²΄(yielded object)λ λ―Έλ€μ¨μ΄μκ² μ λ¬νλ μΌμ’μ **λͺλ Ή**μ λ΄κ³  μλ€.
- λ―Έλ€μ¨μ΄λ Sagaκ° λ°νν κ°μ²΄ (yielded object)λ₯Ό μ λ¬λ°κ³  λͺλ Ήμ ν΄μνμ¬ νΉμ  μμμ μννλ€. κ·Έ λμ Sagaλ μ€νμ΄ μ€μ§λ μνμ΄λ€.
- λͺ¨λ  Sagaλ₯Ό **λ³λ ¬**μ μΌλ‘ μ€νν  μ μλλ‘ **root Saga**λ₯Ό λ§λ λ€.

```javascript
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
```

### Generator

- redux-sagaλ **μ λλ μ΄ν° ν¨μ λ¬Έλ²μ κΈ°λ°μΌλ‘ side effectλ₯Ό κ΄λ¦¬**νλ€.
- μ λλ μ΄ν° ν¨μ(function\*)λ₯Ό νΈμΆνλ©΄ μ λλ μ΄ν°κ° λ°νλλ€.
- μ λλ μ΄ν°λ next λ©μλλ₯Ό κ°λλ° μ΄ λ©μλλ₯Ό νΈμΆνλ©΄ μ λλ μ΄ν° ν¨μλ yieldλ¬Έμ λ§λκΈ° μ κΉμ§ μ€νλλ€.
- μ΄ν λ€μ next λ©μλλ₯Ό νΈμΆνλ©΄ μ€νμ΄ μ€μ§λ μμ λΆν° λ€μ μ λλ μ΄ν° ν¨μκ° μ€νλλ€. (μμΈν λ΄μ©μ [Generator](https://www.eunnbi.dev/posts/js-generator) μ°Έκ³ )

> β μ λλ μ΄ν° ν¨μλ Callee, μ΄λ₯Ό νΈμΆνλ ν¨μλ Callerμ΄λ€.<br/>
> β Callerλ Calleeκ° λ°νν μ λλ μ΄ν°λ₯Ό κ°μ§κ³  λ‘μ§μ μννλ€.<br/>
> β Callerλ Calleeμ yieldλ¬Έ μ§μ μμ λ€μ μ§ν μ¬λΆ/μμ μ μ μ΄νλ€.<br/>
> β Callerλ **Calleeλ₯Ό νΈμΆνλ μ±μ**λΏ μλλΌ **Callee λ΄λΆ λ‘μ§ μνμ λν μ μ΄κΆ**μ κ°λλ€.

- redux-saga μμ₯μμ λ³΄λ©΄ λ―Έλ€μ¨μ΄κ° Callerμ΄κ³ , μ λλ μ΄ν° ν¨μμΈ Sagaκ° Calleeλ€.
- λ―Έλ€μ¨μ΄λ Sagaλ₯Ό λμμμ΄ λμμν¨λ€.
- Sagaκ° λμνκΈ° μμνλ©΄ μ λλ μ΄ν° ν¨μμ΄κΈ° λλ¬Έμ yieldλ¬Έμ λ§λλ©΄ μ€νμ΄ μ€μ§λκ³  κ°μ²΄λ₯Ό yieldνλ€.
- λ―Έλ€μ¨μ΄λ μ΄ κ°μ²΄λ₯Ό λ°μ ν΄μνκ³  νΉμ  μμμ μννλ€.

<br/>

### Effect

π‘ **λ―Έλ€μ¨μ΄μ μν΄ μνλ  λͺλ Ήμ λ΄κ³  μλ μμν μλ°μ€ν¬λ¦½νΈ κ°μ²΄**

```javascript
function* incrementAsync() {
  yield call(delay, 1000); // {CALL : {fn: delay, args: [1000]}}
  yield put({ type: "INCREMENT" }); // {PUT: {type: "INCREMENT"}}
}
```

- `call`μ΄λ `put`μ **Effect Creators(μ΄ννΈ μμ±μ)** λΌκ³  νκ³ , λͺλ Ήμ λ΄κ³  μλ μμν κ°μ²΄ (Effect)λ₯Ό yieldνλ€.
- λ―Έλ€μ¨μ΄λ μ΄ κ°μ²΄λ₯Ό λ°μ λͺλ Ήλ€μ ν΄μν΄ μ²λ¦¬νκ³ , κ·Έ κ²°κ³Όλ₯Ό λ€μ Sagaμκ² μ λ¬νλ€.
- λ¬Όλ‘  Sagaλ Effectλ§μ yieldν΄μΌ νλ κ²μ μλλ€. Promise κ°μ²΄λ yieldν  μ μμ§λ§ λΉλκΈ° λ‘μ§μ Saga λ΄λΆμμ μ§μ  μ²λ¦¬νλ©΄ νμ€νΈκ° μ΄λ €μμ§λ λ± μ¬λ¬ μ΄λ €μμ΄ λ°μνλ€.
- λλλ‘ Effectλ§μ yieldνλ Sagaλ₯Ό λ§λ€μ΄μΌ νλ€.

> μ°Έκ³ : [Effect Creators](https://redux-saga.js.org/docs/api/#effect-creators)

![Flow](1.png)

<br/>

### Error Handling

- Saga λ΄λΆμμ errorλ₯Ό μ²λ¦¬νκΈ° μν΄ try/catchλ¬Έμ μ¬μ©νλ€.

### Task

- νλμ Sagaκ° μ€νλλ κ²

### Saga Helpers

`takeEvery(action, sagaFn)`

- actionμ΄ λ°μν  λλ§λ€ Sagaλ₯Ό μ€ννλ€.
- μ¬λ¬ κ°μ Taskλ₯Ό λμμ μμν  μ μλ€.

`takeLast(action, sagaFn)`

- λ§μ§λ§μΌλ‘ λ°μν νλμ actionμ λν΄μλ§ Sagaλ₯Ό μ€ννλ€.
- μ€νμ€μ΄λ Taskλ₯Ό μ·¨μνκ³  μλ‘μ΄ Taskλ₯Ό μ€ννλ€.

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

> λ―Έλ€μ¨μ΄λ λ€μκ³Ό κ°μ μν©μ μ μ©νκ² μ¬μ©λλ€.
>
> 1. μμ²­μ μ°λ¬μμ μ¬λ¬λ² νκ² λ  λ μ΄μ  μμ²­μ λ¬΄μνλλ‘ νκ³  λ§¨ λ§μ§λ§μ μμ²­λ§ μ²λ¦¬νλλ‘ ν  λ (Ex. react-sagaμ takeLastest)
> 2. νΉμ  μ‘°κ±΄μ΄ λ§μ‘±λμμ λ μ΄μ μ μμν μμ²­μ μ·¨μνλ κ²½μ°
> 3. μνλ μ‘μμ΄ λμ€ν¨μΉ λμμ λ νΉμ  μ½λ°± ν¨μλ₯Ό νΈμΆνλλ‘ λ±λ‘ν  λ

μ°Έκ³ 

- [Redux-Saga: μ¬μ΄λ μ΄ννΈ κ΄λ¦¬](https://meetup.toast.com/posts/136)
- [Redux-Saga: μ λλ μ΄ν°μ μ΄ννΈ](https://meetup.toast.com/posts/140)
- [Redux-Saga κ³΅μλ¬Έμ](https://redux-saga.js.org/docs/introduction/BeginnerTutorial)
