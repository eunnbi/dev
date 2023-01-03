---
emoji: 💾
title: useMemo, useCallback Hook
date: "2022-01-14"
category: React
preview: "'리액트를 다루는 기술'이라는 책을 읽고 배운 것을 바탕으로 작성되었다. useMemo를 이용하면 컴포넌트 내부에서 발생하는 연산을 최적화할 수 있다. useMemo 함수의 첫번째 인자는 연산을 수행하는 함수, 두번째 인자로 의존성 배열이다. 의존성 배열에 있는 state값이나 props값이 바뀌면, 첫번째 인자의 함수를 호출하여 새로운 연산 결과값을 반환하고, 만약 바뀌지 않았다면 이전에 연산한 값을 재사용한다. useCalllback은 useMemo와 비슷하게 주로 렌더링 성능을 최적화할 때 사용한다. 특정 함수를 새로 만들지 않고 재사용하고 싶을 때 사용한다."
---

> "리액트를 다루는 기술"이라는 책을 읽고 배운 것을 바탕으로 작성되었다.

# useMemo

- useMemo를 이용하면 **컴포넌트 내부에서 발생하는 연산을 최적화**할 수 있다.
- useMemo 함수의 첫번째 인자는 **연산을 수행하는 함수**, 두번째 인자로 **의존성 배열**이다.
- 의존성 배열에 있는 state값이나 props값이 바뀌면, 첫번째 인자의 함수를 호출하여 새로운 연산 결과값을 반환하고, 만약 바뀌지 않았다면 이전에 연산한 값을 재사용한다.

## 예시

```jsx
const getAverage = numbers => {
  console.log("평균값 계산중...");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((value, number) => value + number);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const onChange = e => {
    setNumber(e.target.value);
  };

  const onInsert = () => {
    setList(list.concat(parseInt(number)));
    setNumber("");
  };

  return (
    <div>
      <input type="text" name="number" value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>평균값: {getAverage(list)}</div>
    </div>
  );
};
```

- 문제점: 숫자를 등록했을 뿐만 아니라 인풋 내용이 수정될 때도 평균값을 계산하는 함수가 호출된다. 왜냐하면 인풋 내용이 수정되었을 때 컴포넌트가 리렌더링되어 함수가 다시 호출된다. 하지만 인풋 내용이 바뀔 때에는 평균값을 계산할 필요가 없다.
- `useMemo`를 이용하면 문제를 해결할 수 있다. 렌더링하는 과정에서 특정 상태값이 바뀌었을 때만 연산을 실행하고, 바뀌지 않았을 때는 이전에 연산했던 결과를 재사용한다.

```javascript
import { useMemo } from "react";
const avg = useMemo(() => getAverage(list), [list]); // list 상태값이 바뀔 때만 함수 호출
```

> 컴포넌트 렌더링 성능을 최적화할 수 있다.

# useCallback

- useMemo와 비슷하게 주로 렌더링 성능을 최적화할 때 사용한다.
- useCallback은 **특정 함수를 새로 만들지 않고 재사용하고 싶을 때** 사용한다.
- 첫번째 인자는 함수, 두번째 인자는 의존성 배열이다.
- 의존성 배열 안에 있는 내용이 바뀌면, 첫번째 인자의 함수를 새로 생성하고, 아니면 이전 렌더링할 때 생성한 함수를 **재사용**한다.
- 만약 두번째 인자로 빈 배열을 전달하면, 컴포넌트가 처음 렌더링할 때 만들었던 함수를 계속 재사용한다.
- 반면, 두번째 인자가 생략되었다면 컴포넌트가 렌더링될 때마다 첫번째 인자의 함수를 생성한다.
- **함수 내부에서 특정 상태값에 사용할 때는 그 값을 반드시 의존성 배열에 포함해야 한다.**

## 예시

```jsx
// Before
import { useState, useMemo, useCallback } from "react";

const getAverage = numbers => {
  console.log("평균값 계산중...");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((value, number) => value + number);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const onChange = e => {
    setNumber(e.target.value);
  };

  const onInsert = () => {
    setList(list.concat(parseInt(number)));
    setNumber("");
  };

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input type="text" name="number" value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>평균값: {avg}</div>
    </div>
  );
};
```

- `onChange` 함수는 상태값에 의존하지 않고, 초기 렌더링 이후 새로 생성할 필요가 없는 함수이기 때문에, useCallback을 이용하여 두번째 인수로 빈 배열을 전달한다.
  ```js
  // **GOOD**
  const onChange = useCallback(e => {
    setNumber(e.target.value);
  }, []);
  ```
- `onInsert` 함수는 컴포넌트 내의 모든 상태값(`list`, `number`)에 의존한다. 위 예시의 컴포넌트는 상태값이 변할 때만 리렌더링하기 때문에 (부모 컴포넌트가 없다는 전제하에), `onInsert` 함수는 컴포넌트가 렌더링될 때마다 새로 생성된다. 그래서 `onInsert` 함수에는 useCallback을 사용할 필요가 없다.
  ```js
  // **BAD**
  const onInsert = useCallback(() => {
    setList(list.concat(parseInt(number)));
    setNumber("");
  }, [list, number]);
  ```
  - 만약 부모 컴포넌트의 리렌더링으로 인해 위 예시의 컴포넌트가 불필요하게 자주 리렌더링한다면 다른 방식으로 렌더링 성능을 최적화해줄 필요가 있다.
