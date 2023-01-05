---
emoji: 🧩
title: Code Splitting
date: "2022-01-19"
category: React
preview: "'리액트를 다루는 기술'이라는 책을 읽고 배운 것을 바탕으로 작성되었다. 코드 스플리팅이란? 말 그대로 코드를 분리하는 것을 말한다. 웹팩에서 별도의 설정을 하지 않으면 프로젝트에서 사용 중인 모든 자바스크립트 파일이 하나의 파일(main)로 번들링된다. 애플리케이션의 규모가 커질수록 main 파일 크기도 커지는데 그러면 페이지 로딩 시 지금 당장 필요하지 않은 코드도 전부 불러와 페이지 로딩 시간이 길어져 사용자 경험도 안 좋아지고 트래픽도 증가한다. code spliting을 적용하면 당장 필요하지 않은 코드는 분리시켜 나중에 필요할때 불러와서 사용할 수 있다. (코드 비동기 로딩) => 페이지 로딩 시간이 개선된다."
---

> "리액트를 다루는 기술"이라는 책을 읽고 배운 것을 바탕으로 작성되었다.

# 코드 스플리팅이란?

- 말 그대로 코드를 분리하는 것을 말한다.
- 웹팩에서 별도의 설정을 하지 않으면 프로젝트에서 사용 중인 모든 자바스크립트 파일이 하나의 파일(`main`)로 번들링된다.
- 애플리케이션의 규모가 커질수록 main 파일 크기도 커지는데 그러면 페이지 로딩 시 지금 당장 필요하지 않은 코드도 전부 불러와 페이지 로딩 시간이 길어져 사용자 경험도 안 좋아지고 트래픽도 증가한다.
- `code spliting`을 적용하면 당장 필요하지 않은 코드는 분리시켜 나중에 필요할때 불러와서 사용할 수 있다. (**코드 비동기 로딩**) => 페이지 로딩 시간이 개선된다.

## 함수 코드 스플리팅

### dynamic import

```javascript
// notify.js
export default function notify() {
  alert("안녕하세요!");
}
```

```jsx
// App.js
// import notify from "./notify";

function App() {
  const onClick = () => {
    import("./notify").then(result => result.default());
    // notify();
  };
  return <button onClick={onClick}>Notify</button>;
}
```

- 상단에 import문를 통해 nofity 함수를 불러오면 번들링 시 notify 함수 코드가 main 파일 안에 포함된다.
- 하지만 `import()` 함수를 사용하면 코드를 필요한 시점에 불러와 사용할 수 있고 번들링할 때 코드가 main이 아닌 다른 파일에 포함된다.
  - **chunk 파일: 코드 스플리팅 시 생성되는 자바스크립트 파일**
- `import()` 함수는 프로미스 객체를 반환하는데 프로미스 객체의 반환값은 import된 모듈이다.

## 컴포넌트 코드 스플리팅

### 1. import 함수와 state 이용

- `import()`를 통해 컴포넌트를 필요한 시점에 불러와 컴포넌트 자체를 `state`에 넣는다.

```jsx
// SplitMe.js
const SplitMe = () => {
  return <div>SplitMe</div>;
};

export default SplitMe;
```

```jsx
// App.js
import { Component } from "react";

class App extends Component {
  state = {
    SplitMe: null
  };

  handleClick = async () => {
    const loadingModule = await import("./SplitMe");
    this.setState({
      SplitMe: loadingModule.default
    });
  };

  render() {
    const { SplitMe } = this.state;
    return (
      <div>
        <button onClick={handleClick}>Click!</button>
        {SplitMe && <SplitMe />}
      </div>
    );
  }
}
```

### 2. React.lazy와 Suspense

**React.lazy()**

- 컴포넌트를 렌더링하는 시점에 비동기적으로 로딩하는 함수
- `import` 함수를 호출하는 함수 인자를 갖고, 불러온 컴포넌트를 반환한다.

```jsx
const SplitMe = React.lazy(() => import("./SplitMe"));
```

**Suspense**

- `React.lazy`로 불러온 컴포넌트는 `Suspense` 컴포넌트 하위에서 렌더링되어야 한다.
- fallback prop 값으로 컴포넌트가 로드되길 기다리는 동안 렌더링하려는 React element를 전달한다.

```jsx
// App.js
import { useState, Suspense } from "react";

const SplitMe = React.lazy(() => import("./SplitMe"));

function App() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };
  return (
    <div>
      <button onClick={handleClick}>Click!</button>
      <Suspense fallback={<div>loading...</div>}>
        {visible && <SplitMe />}
      </Suspense>
    </div>
  );
}
```

### 3. Loadable Components

- `@loadable/component`는 코드 스플리팅을 편하게 하도록 도와주는 서드파티 라이브러리이다.
- 이 라이브러리의 이점은 **서버 사이드 렌더링을 지원**한다. (React.lazy와 Suspense는 아직 서버 사이드 렌더링을 지원하지 않는다.)

```jsx
const SplitMe = loadable(() => import("./SplitMe"), {
  fallback: <div>loading...</div>
});

SplitMe.preload(); // 미리 불러오기
```

## 리액트 라우터와 함께 사용하기

```jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import loadable from "@loadable/component";

const Home = loadable(() => import("./routes/Home"));
const About = loadable(() => import("./routes/About"));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Suspense>
  </Router>
);
```

- 여러 컴포넌트들로 구성된 규모가 큰 `SPA`를 개발한다고 했을 때 코드 스플리팅을 적용하지 않으면 자바스크립트 `main` 번들 파일이 커진다.
- 페이지 로딩 시 아직 필요하지 않은 자바스크립트 코드까지 불러오기 때문에 최초 페이지 로딩 시간이 길어지고 사용자 경험이 나빠진다.
- 그래서 코드 스플리팅을 통해 당장 필요하지 않는 자바스크립트 코드 및 컴포넌트들을 분리시키고 나중에 컴포넌트가 렌더링되는 시점에 불러올 수 있어 최초 페이지 로딩 시간을 개선할 수 있다.
