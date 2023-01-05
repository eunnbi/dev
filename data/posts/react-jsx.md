---
emoji: 👋
title: JSX
date: "2022-01-11"
category: React
preview: "'리액트를 다루는 기술'이라는 책을 읽고 배운 것을 바탕으로 작성되었다. JSX는 자바스크립트의 확장 문법으로, React Element를 생성한다. JSX 코드는 번들링 과정에서 Babel을 통해 일반 자바스크립트 형태의 코드로 변환된다. 보기 쉽고 익숙하다. 위 코드에서 JSX 코드와 Babel을 통해 변환된 코드를 비교했을 때 JSX 코드가 가독성이 높고 작성하기도 쉽게 느껴진다. (HTML 코드를 작성하는 것과 비슷해서) 더욱 높은 활용도 JSX 문법으로 HTML 태그뿐만 아니라, 컴포넌트도 작성할 수 있다. ReactDOM.render(): 두번째 인자로 전달된 요소의 자식 요소로, 최상위 컴포넌트를 렌더링한다."
---

> "리액트를 다루는 기술"이라는 책을 읽고 배운 것을 바탕으로 작성되었다.

# JSX란?

- **자바스크립트의 확장 문법**으로, **React Element를 생성**한다.
- JSX 코드는 번들링 과정에서 [Babel](https://babeljs.io/)을 통해 일반 자바스크립트 형태의 코드로 변환된다.

```jsx
function App() {
  return <div>Hello react</div>;
}
```

```jsx
//아래와 같이 변환
function App() {
  return React.createElement("div", null, "Hello react");
}
```

<br/>

# JSX의 장점

**보기 쉽고 익숙하다.**

- 위 코드에서 JSX 코드와 Babel을 통해 변환된 코드를 비교했을 때 JSX 코드가 가독성이 높고 작성하기도 쉽게 느껴진다. (HTML 코드를 작성하는 것과 비슷해서)

**더욱 높은 활용도**

- JSX 문법으로 HTML 태그뿐만 아니라, 컴포넌트도 작성할 수 있다.
- `ReactDOM.render()`: 두번째 인자로 전달된 요소의 자식 요소로, 최상위 컴포넌트를 렌더링한다.

```js
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementbyId("root")
);
```

<br/>

# JSX 문법

- 컴포넌트에 여러 요소가 있다면 반드시 하나의 부모 요소로 감싸야 한다.
  - Virtual DOM에서 컴포넌트의 변화를 감지해 낼 때 효율적으로 비교할 수 있도록 컴포넌트 내부는 **하나의 DOM 트리 구조**로 이루어져야 한다.
  - Fragment, `<></>`
- 자바스크립트 표현식을 쓸 수 있다. 자바스크립트 표현식을 작성하려면 JSX 내부에서 코드를 `{}`로 감싸면 된다.
- JSX 내부의 자바스크립트 표현식에서는 if문을 사용할 수 없고, 대신 삼항 연산자를 사용한다.
- AND 연산자 (`&&`)를 사용한 조건부 렌더링
  - JavaScript에서 `true && expression`은 expression으로 평가되고 `false && expression`은 false로 평가된다.
  - null과 false를 렌더링하면 화면에 아무것도 나타나지 않는다. (falsy한 값인 0은 예외)

```jsx
function App() {
  const name = "리액트";
  return <div>{name === "리액트" ? <h1>리액트입니다</h1> : null}</div>;
}
```

```jsx
// 같은 결과를 나타냄
function App() {
  const name = "리액트";
  return <div>{name === "리액트" && <h1>리액트입니다</h1>}</div>;
}
```

- undefined 렌더링하지 않기 (오류 발생)
  - OR 연산자(`||`)를 사용하면 해당 값이 undefined일 때 사용할 값을 지정할 수 있다.
  - 반면, JSX 내부에서 undefined를 표현식으로 사용하는 것은 괜찮다.

```jsx
// 오류 발생
function App() {
  const name = undefined;
  return name;
}

// OR 연산자 이용
function App() {
  const name = undefined;
  return name || "값이 undefined입니다.";
}

// JSX 내부의 undefined (오류 발생 x)
function App() {
  const name = undefined;
  return <div>{name}</div>;
}

// undefined일 때 보여주고 싶은 문구
function App() {
  const name = undefined;
  return <div>{name || "리액트"}</div>;
}
```

- JSX에서 인라인 스타일은 객체 형태로 작성한다. 스타일 속성은 카멜 표기법(camelCase)으로 작성해야 한다.
- 클래스를 작성할 때 class 대신 className으로 작성한다.
