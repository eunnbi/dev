---
emoji: ๐
title: ์ด๋ฒคํธ ํธ๋ค๋ง
date: "2022-01-12"
category: React
preview: "'๋ฆฌ์กํธ๋ฅผ ๋ค๋ฃจ๋ ๊ธฐ์ '์ด๋ผ๋ ์ฑ์ ์ฝ๊ณ  ๋ฐฐ์ด ๊ฒ์ ๋ฐํ์ผ๋ก ์์ฑ๋์๋ค. React์์๋ ๋ง์น HTML ์์์ on<event> ์์ฑ์ ์ด๋ฒคํธ ํธ๋ค๋ฌ๋ฅผ ํ ๋นํ๋ ๊ฒ์ฒ๋ผ ์ด๋ฒคํธ ํธ๋ค๋ง ํจ์๋ฅผ ์ ๋ฌํ๋ค. ์ด๋ฒคํธ ์ด๋ฆ์ ์นด๋ฉํ๊ธฐ๋ฒ์ผ๋ก ์์ฑํด์ผ ํ๋ค. ์ด๋ฒคํธ ํธ๋ค๋ฌ๋ฅผ ์ ๋ฌํ  ๋ ์ด๋ฒคํธ์ ์คํํ  ์๋ฐ์คํฌ๋ฆฝํธ ์ฝ๋๊ฐ ์๋๋ผ, ํจ์ ํํ์ ๊ฐ์ ์ ๋ฌํ๋ค. React์์๋ ์ด๋ฒคํธ ํธ๋ค๋ฌ๊ฐ false๋ฅผ ๋ฐํํด๋ ๊ธฐ๋ณธ ๋์์ ๋ฐฉ์งํ  ์ ์๋ค. ๋ฐ๋์ preventDefault ํจ์๋ฅผ ๋ช์์ ์ผ๋ก ํธ์ถํด์ผ ํ๋ค. DOM ์์์๋ง ์ด๋ฒคํธ๋ฅผ ์ค์ ํ  ์ ์๋ค. ์ง์  ๋ง๋  ์ปดํฌ๋ํธ์๋ ์ด๋ฒคํธ ํธ๋ค๋ฌ๋ฅผ ํ ๋นํ  ์ ์๋ค."
---

> "๋ฆฌ์กํธ๋ฅผ ๋ค๋ฃจ๋ ๊ธฐ์ "์ด๋ผ๋ ์ฑ์ ์ฝ๊ณ  ๋ฐฐ์ด ๊ฒ์ ๋ฐํ์ผ๋ก ์์ฑ๋์๋ค.

> ์ฐธ๊ณ : [๋ธ๋ผ์ฐ์  ์ด๋ฒคํธ](https://www.eunnbi.dev/posts/web-event-basic)

## ์ด๋ฒคํธ ํธ๋ค๋ฌ ํ ๋น

- ์ด๋ฒคํธ๋ ์ด๋ค ํ์๋ ์ฌ๊ฑด(์ผ)์ด ์ผ์ด๋ฌ๋ค๋ ์ ํธ๋ฅผ ๋งํ๋ค.
- ์ด๋ฒคํธ์ ๋ฐ์ํ๋ ค๋ฉด ์ด๋ฒคํธ๊ฐ ๋ฐ์ํ์ ๋ ์คํํ๋ ํจ์์ธ ์ด๋ฒคํธ ํธ๋ค๋ฌ๋ฅผ ํ ๋นํด์ผ ํ๋ค.
- React์์๋ ๋ง์น HTML ์์์ `on<event>` ์์ฑ์ ์ด๋ฒคํธ ํธ๋ค๋ฌ๋ฅผ ํ ๋นํ๋ ๊ฒ์ฒ๋ผ ์ด๋ฒคํธ ํธ๋ค๋ง ํจ์๋ฅผ ์ ๋ฌํ๋ค.
  - ์ด๋ฒคํธ ์ด๋ฆ์ **์นด๋ฉํ๊ธฐ๋ฒ**์ผ๋ก ์์ฑํด์ผ ํ๋ค.
  - ์ด๋ฒคํธ ํธ๋ค๋ฌ๋ฅผ ์ ๋ฌํ  ๋ ์ด๋ฒคํธ์ ์คํํ  ์๋ฐ์คํฌ๋ฆฝํธ ์ฝ๋๊ฐ ์๋๋ผ, **ํจ์ ํํ์ ๊ฐ์ ์ ๋ฌํ๋ค.**
  - React์์๋ ์ด๋ฒคํธ ํธ๋ค๋ฌ๊ฐ `false`๋ฅผ ๋ฐํํด๋ ๊ธฐ๋ณธ ๋์์ ๋ฐฉ์งํ  ์ ์๋ค. ๋ฐ๋์ `preventDefault` ํจ์๋ฅผ ๋ช์์ ์ผ๋ก ํธ์ถํด์ผ ํ๋ค.
  - **DOM ์์**์๋ง ์ด๋ฒคํธ๋ฅผ ์ค์ ํ  ์ ์๋ค. ์ง์  ๋ง๋  ์ปดํฌ๋ํธ์๋ ์ด๋ฒคํธ ํธ๋ค๋ฌ๋ฅผ ํ ๋นํ  ์ ์๋ค.

```html
<!--html-->
<button onclick="activateLasers()">Activate Lasers</button>
```

```jsx
// react
<button onClick={activateLasers}>Activate Lasers</button>
<MyComponent onClick={doSomething}/> // ์ด๋ฒคํธ ํธ๋ค๋ฌ ๋ฑ๋ก X, props๋ก ํจ์ ์ ๋ฌ O
```

<br/>

## ์ง์ํ๋ ์ด๋ฒคํธ

- Clipboard ์ด๋ฒคํธ
- Composition ์ด๋ฒคํธ
- Keyboard ์ด๋ฒคํธ
- Focus ์ด๋ฒคํธ
- Form ์ด๋ฒคํธ
- Generic ์ด๋ฒคํธ
- Mouse ์ด๋ฒคํธ
- Pointer ์ด๋ฒคํธ
- Selection ์ด๋ฒคํธ
- Touch ์ด๋ฒคํธ
- UI ์ด๋ฒคํธ
- Wheel ์ด๋ฒคํธ
- Media ์ด๋ฒคํธ
- Image ์ด๋ฒคํธ
- Animation ์ด๋ฒคํธ
- Transition ์ด๋ฒคํธ

> ์ฐธ๊ณ : [React ๊ณต์๋ฌธ์ - ์ง์ํ๋ ์ด๋ฒคํธ](https://ko.reactjs.org/docs/events.html#supported-events)

## ์์

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
      <button>ํ์ธ</button>
    </div>
  );
}

export default EventPractice;
```

## ํฉ์ฑ ์ด๋ฒคํธ

- ์ด๋ฒคํธ ํธ๋ค๋ฌ๋ ์ด๋ฒคํธ ๊ฐ์ฒด๋ฅผ ์ธ์๋ก ๋ฐ๋๋ค. ์ด๋ React์์๋ ํฉ์ฑ ์ด๋ฒคํธ ๊ฐ์ฒด๋ฅผ ์ฌ์ฉํ๋ค.
- `stopPropagation()` ์ `preventDefault()`๋ฅผ ํฌํจํด์ ์ธํฐํ์ด์ค๋ ๋ธ๋ผ์ฐ์ ์ ๊ณ ์  ์ด๋ฒคํธ์ ๊ฐ์ง๋ง ํฉ์ฑ ์ด๋ฒคํธ๋ ๋ชจ๋  ๋ธ๋ผ์ฐ์ ์์ ๋์ผํ๊ฒ ๋์ํ๋ค. W3C ๋ช์ธ์ ๋ฐ๋ผ ํฉ์ฑ ์ด๋ฒคํธ๋ฅผ ์ ์ํ๊ธฐ ๋๋ฌธ์ ๋ธ๋ผ์ฐ์  ํธํ์ฑ์ ๋ํด ๊ฑฑ์ ํ  ํ์๊ฐ ์๋ค.
- ๋ธ๋ผ์ฐ์ ์ ๊ณ ์  ์ด๋ฒคํธ๊ฐ ํ์ํ๋ค๋ฉด ํฉ์ฑ ์ด๋ฒคํธ ๊ฐ์ฒด์ nativeEvent ์์ฑ์ ์ฐธ์กฐํ๋ฉด ๋๋ค.
- ํฉ์ฑ ์ด๋ฒคํธ != ๋ธ๋ผ์ฐ์ ์ ๊ณ ์  ์ด๋ฒคํธ
- ๋ชจ๋  ํฉ์ฑ ์ด๋ฒคํธ ๊ฐ์ฒด๋ ๋ค์๊ณผ ๊ฐ์ ์์ฑ๊ณผ ๋ฉ์๋๋ฅผ ๊ฐ์ง๋ค.

```
boolean bubbles
boolean cancelable
DOMEventTarget currentTarget
boolean defaultPrevented
number eventPhase
boolean isTrusted
DOMEvent nativeEvent   // ๋ธ๋ผ์ฐ์  ๊ณ ์  ์ด๋ฒคํธ
void preventDefault()
boolean isDefaultPrevented()
void stopPropagation()
boolean isPropagationStopped()
void persist()
DOMEventTarget target
number timeStamp
string type
```

> [React ๊ณต์ ๋ฌธ์ - ํฉ์ฑ ์ด๋ฒคํธ(Synthetic Event)](https://ko.reactjs.org/docs/events.html)
