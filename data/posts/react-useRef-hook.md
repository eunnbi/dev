---
emoji: 🧵
title: useRef Hook
date: "2022-01-14"
category: React
preview: "'리액트를 다루는 기술'이라는 책을 읽고 배운 것을 바탕으로 작성되었다. 리액트에서 DOM에 직접 접근할 때 useRef를 사용한다. DOM에 직접적으로 접근해야 하는 경우, 특정 input에 포커스 주기, 스크롤 박스 조작하기, canvas 요소에 그림 그리기 등. useRef() 를 사용하여 Ref 객체를 만들고, 이 객체를 접근하고 싶은 DOM 요소의 ref 값으로 설정한다. Ref 객체의 .current 값은 앞서 지정한 DOM 요소를 가리킨다. useRef를 이용하여 컴포넌트 안에서 조회 및 수정할 수 있는 변수를 관리할 수 있다. 이때 useRef로 관리하는 변수가 바뀐다고 해서 컴포넌트가 리렌더링되지 않는다. useRef 로 관리하고 있는 변수는 값 수정 후 바로 조회할 수 있다."
---

> "리액트를 다루는 기술"이라는 책을 읽고 배운 것을 바탕으로 작성되었다.

# useRef

## DOM 접근

- 리액트에서 DOM에 직접 접근할 때 `useRef`를 사용한다.
- DOM에 직접적으로 접근해야 하는 경우
  - 특정 input에 포커스 주기
  - 스크롤 박스 조작하기
  - canvas 요소에 그림 그리기 등
- `useRef()` 를 사용하여 Ref 객체를 만들고, 이 객체를 접근하고 싶은 DOM 요소의 ref 값으로 설정한다.
- Ref 객체의 `.current` 값은 앞서 지정한 DOM 요소를 가리킨다.

### 예시

```jsx
import React, { useState, useRef } from "react";

function InputSample() {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: ""
  });

  const nameInput = useRef();

  const { name, nickname } = inputs;

  const onChange = e => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const onReset = () => {
    setInputs({
      name: "",
      nickname: ""
    });
    nameInput.current.focus();
  };

  return (
    <div>
      <input
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={name}
        ref={nameInput}
      />
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;
```

## 컴포넌트 안의 변수

- useRef를 이용하여 **컴포넌트 안에서 조회 및 수정할 수 있는 변수를 관리**할 수 있다.
- 이때 useRef로 관리하는 변수가 바뀐다고 해서 컴포넌트가 **리렌더링되지 않는다.**
- `useRef` 로 관리하고 있는 변수는 **값 수정 후 바로 조회**할 수 있다.
- 다음과 같은 값을 관리하는 데 사용된다.
  - setTimeout, setInterval 을 통해서 만들어진 id
  - 외부 라이브러리를 사용하여 생성된 인스턴스
  - scroll 위치

> 💡 일반 로컬 변수 대신 `useRef`를 이용하는 이유?
>
> - 함수형 컴포넌트도 함수이기 때문에 리렌더링하면 **로컬 변수들을 초기화**한다.
> - 반면 useRef로 만들어진 객체는 React가 만든 전역 저장소에 저장되기 때문에 리렌더링되더라도 **최신값이 유지**된다.

<br/>

## 클래스형 컴포넌트의 ref

### 콜백함수를 통한 ref 설정

```jsx
<input
  ref={ref => {
    this.input = ref;
  }}
/>
```

### createRef를 통한 ref 설정

```jsx
import { Component } from "react";

class RefSample extends Component {
  input = React.createRef();

  handleFocus = () => {
    this.input.current.focus();
  };

  render() {
    return (
      <div>
        <input ref={this.input} />
      </div>
    );
  }
}
```
