---
emoji: 🎮
title: 제어 컴포넌트와 비제어 컴포넌트
date: "2022-02-22"
category: React
preview: "제어 컴포넌트는 사용자의 입력을 기반으로 자신의 state를 관리하고 업데이트한다. 즉, 사용자 입력값을 제어한다. 만약, 사용자 입력이 발생하면 이벤트 객체를 사용자 입력값을 받아 state를 업데이트한다. 상태값을 input의 value 속성값으로 나타낸다. 제어 컴포넌트를 사용하면 input값은 항상 state에 의해 결정된다. 사용자가 입력한 값과 state 값이 실시간으로 동기화된다. 비제어 컴포넌트는 사용자 입력이 발생할 때마다 값을 실시간으로 받아오는 것이 아니라 폼이 제출될 때 사용자 입력을 받아온다. state 대신 ref를 사용하여 최종 사용자 입력을 얻는다."
---

# 제어 컴포넌트

[React 공식문서](https://ko.reactjs.org/docs/forms.html#controlled-components)에 따르면, 제어 컴포넌트는 사용자의 입력을 기반으로 자신의 state를 관리하고 업데이트한다. 즉, 사용자 입력값을 제어한다.

```jsx
export default function App() {
  const [input, setInput] = useState("");
  const onChange = e => {
    setInput(e.target.value);
  };
  return (
    <form>
      <input onChange={onChange} value={input} />
    </form>
  );
}
```

만약, 사용자 입력이 발생하면 이벤트 객체를 사용자 입력값을 받아 state를 업데이트한다. 상태값을 input의 `value` 속성값으로 나타낸다.

> 제어 컴포넌트를 사용하면 **input값은 항상 state에 의해 결정**된다. 사용자가 입력한 값과 state 값이 **실시간으로 동기화**된다.

# 비제어 컴포넌트

비제어 컴포넌트는 사용자 입력이 발생할 때마다 값을 실시간으로 받아오는 것이 아니라 폼이 제출될 때 사용자 입력을 받아온다.
state 대신 ref를 사용하여 최종 사용자 입력을 얻는다.

```jsx
export default function App() {
  const inputRef = useRef(""); // ref 사용
  const onSubmit = e => {
    e.preventDefault();
    console.log(inputRef.current.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input ref={inputRef} />
      <button type="submit">전송</button>
    </form>
  );
}
```

# 비교

## 컴포넌트 리렌더링

제어 컴포넌트는 사용자 입력에 따라 실시간으로 자신의 `state`를 업데이트하기 때문에 사용자 입력이 바뀔 때마다 리렌더링이 발생한다. 그래서 불필요한 단어가 입력될 때도 `state`가 업데이트되기 때문에, 불필요한 리렌더링이 발생할 수 있다.
반면, 비제어 컴포넌트는 `ref`를 이용하여 사용자 입력을 받기 때문에 사용자 입력이 실시간으로 바뀌어도 리렌더링이 발생하지 않는다.

> **useRef와 리렌더링** <br/> `useRef`를 호출하면 ref 객체를 반환하는데 이는 일반적인 자바스크립트 객체이다. 즉, `heap` 영역에 저장되는 변수이다. 그래서 ref 객체의 값을 참조할 때마다 동일한 메모리 값을 갖는다. 따라서 `current`값이 바뀌어도 `ref` 객체는 항상 동일한 메모리 주소를 갖고 있으므로 리액트 입장에서 얕은 비교를 하면 항상 같다는 결론이 나오기 때문에 리렌더링되지 않는다.

## 제어 컴포넌트는 되고 비제어 컴포넌트는 안되는 것들

1. 실시간으로 필드 값의 유효성 검사
2. 조건부로 제출 버튼 비활성화
3. 실시간으로 입력 형식 적용하기
4. 동적 입력

# 결론

- 사용자 입력에 대해 즉각적이고 실시간으로 피드백을 해야 한다.
  -> 제어 컴포넌트 사용
- 즉각적인 피드백이 불필요하고, 제출시에만 값을 검증한다. 불필요한 렌더링이 싫다.
  -> 비제어 컴포넌트
- 제어 컴포넌트와 비제어 컴포넌트의 특징을 잘 파악하여 상황에 맞게 사용하자.
