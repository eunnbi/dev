---
emoji: 🎃
title: 이벤트 핸들링
date: "2022-01-12"
category: React
preview: "'리액트를 다루는 기술'이라는 책을 읽고 배운 것을 바탕으로 작성되었다."
---

> "리액트를 다루는 기술"이라는 책을 읽고 배운 것을 바탕으로 작성되었다.

> 참고: [브라우저 이벤트](https://www.eunnbi.dev/posts/web-event-basic)

## 이벤트 핸들러 할당

- 이벤트는 어떤 행위나 사건(일)이 일어났다는 신호를 말한다.
- 이벤트에 반응하려면 이벤트가 발생했을 때 실행하는 함수인 이벤트 핸들러를 할당해야 한다.
- React에서는 마치 HTML 요소의 `on<event>` 속성에 이벤트 핸들러를 할당하는 것처럼 이벤트 핸들링 함수를 전달한다.
  - 이벤트 이름은 **카멜표기법**으로 작성해야 한다.
  - 이벤트 핸들러를 전달할 때 이벤트에 실행할 자바스크립트 코드가 아니라, **함수 형태의 값을 전달한다.**
  - React에서는 이벤트 핸들러가 `false`를 반환해도 기본 동작을 방지할 수 없다. 반드시 `preventDefault` 함수를 명시적으로 호출해야 한다.
  - **DOM 요소**에만 이벤트를 설정할 수 있다. 직접 만든 컴포넌트에는 이벤트 핸들러를 할당할 수 없다.

```html
<!--html-->
<button onclick="activateLasers()">Activate Lasers</button>
```

```jsx
// react
<button onClick={activateLasers}>Activate Lasers</button>
<MyComponent onClick={doSomething}/> // 이벤트 핸들러 등록 X, props로 함수 전달 O
```

<br/>

## 지원하는 이벤트

- Clipboard 이벤트
- Composition 이벤트
- Keyboard 이벤트
- Focus 이벤트
- Form 이벤트
- Generic 이벤트
- Mouse 이벤트
- Pointer 이벤트
- Selection 이벤트
- Touch 이벤트
- UI 이벤트
- Wheel 이벤트
- Media 이벤트
- Image 이벤트
- Animation 이벤트
- Transition 이벤트

> 참고: [React 공식문서 - 지원하는 이벤트](https://ko.reactjs.org/docs/events.html#supported-events)

## 예시

```jsx
import { useState } from "react";

function EventPractice() {
  const [inputs, setInputs] = useState({
    username: "",
    message: ""
  });
  const { username, message } = inputs;
  const handleChange = e => {
    const { name, value } = e.target;
    setInputs(inputs => {
      ...inputs,
      [name]: value
    });
  };

  const handleClick = () => {
    alert(`${username}: ${message}`);
    setInputs({
      username: "",
      message: ""
    });
  };

  const handleKeyPress = e => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div>
      <input
        type="text"
        name="username"
        value={username}
        onChange={handleChange}
      />
      <input
        type="text"
        name="message"
        value={message}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <button>확인</button>
    </div>
  );
}

export default EventPractice;
```

## 합성 이벤트

- 이벤트 핸들러는 이벤트 객체를 인자로 받는다. 이때 React에서는 합성 이벤트 객체를 사용한다.
- `stopPropagation()` 와 `preventDefault()`를 포함해서 인터페이스는 브라우저의 고유 이벤트와 같지만 합성 이벤트는 모든 브라우저에서 동일하게 동작한다. W3C 명세에 따라 합성 이벤트를 정의하기 때문에 브라우저 호환성에 대해 걱정할 필요가 없다.
- 브라우저의 고유 이벤트가 필요하다면 합성 이벤트 객체의 nativeEvent 속성을 참조하면 된다.
- 합성 이벤트 != 브라우저의 고유 이벤트
- 모든 합성 이벤트 객체는 다음과 같은 속성과 메서드를 가진다.

```
boolean bubbles
boolean cancelable
DOMEventTarget currentTarget
boolean defaultPrevented
number eventPhase
boolean isTrusted
DOMEvent nativeEvent   // 브라우저 고유 이벤트
void preventDefault()
boolean isDefaultPrevented()
void stopPropagation()
boolean isPropagationStopped()
void persist()
DOMEventTarget target
number timeStamp
string type
```

> [React 공식 문서 - 합성 이벤트(Synthetic Event)](https://ko.reactjs.org/docs/events.html)
