---
emoji: 🏝️
title: 컴포넌트
date: "2022-01-11"
category: React
preview: "'리액트를 다루는 기술'이라는 책을 읽고 배운 것을 바탕으로 작성되었다. 컴포넌트란? 렌더링할 React element를 반환하는 재사용 가능한 선언체이다. props와 state를 관리하며 화면에 보여지는 기본 단위이다. 리액트에서는 컴포넌트를 기반으로 UI를 구성한다. 컴포넌트 하나에 생김새와 기능들을 정의한다. 컴포넌트는 트리 형태로 구성되며, 상위 컴포넌트에서 하위 컴포넌트로의 단방향의 데이터 흐름을 갖고 있다. 컴포넌트를 선언하는 방식에 두 가지가 있다. 클래스형 컴포넌트는 함수 컴포넌트와 달리 state 및 life cycle method를 사용할 수 있다. render 메서드에서 React element를 반환해야 한다. 함수형 컴포넌트는 클래스형 컴포넌트보다 선언하기 편하고, 메모리 자원도 클래스형 컴포넌트보다 덜 사용한다. state와 life cycle method를 사용하지 못하지만, v16.8 업데이트 이후 Hooks이라는 기능이 도입되면서 해결되었다. 리액트 공식 문서에서는 함수 컴포넌트와 `Hooks`를 사용하도록 권장하고 있다. return문에서 React element를 반환해야 한다."
---

> "리액트를 다루는 기술"이라는 책을 읽고 배운 것을 바탕으로 작성되었다.

# 컴포넌트란?

- **렌더링할 React element를 반환하는 재사용 가능한 선언체**이다.
- **props와 state를 관리하며 화면에 보여지는 기본 단위**이다.
- 리액트에서는 컴포넌트를 기반으로 UI를 구성한다.
- 컴포넌트 하나에 생김새와 기능들을 정의한다.
- 컴포넌트는 트리 형태로 구성되며, 상위 컴포넌트에서 하위 컴포넌트로의 단방향의 데이터 흐름을 갖고 있다.

<br/>

## 컴포넌트 종류

- 컴포넌트를 선언하는 방식에 두 가지가 있다.

### 클래스형 컴포넌트

- 클래스형 컴포넌트는 함수 컴포넌트와 달리 `state` 및 `life cycle method`를 사용할 수 있다.
- `render` 메서드에서 React element를 반환해야 한다.

### 함수형 컴포넌트

- 클래스형 컴포넌트보다 선언하기 편하고, 메모리 자원도 클래스형 컴포넌트보다 덜 사용한다.
- `state`와 `life cycle method`를 사용하지 못하지만, `v16.8` 업데이트 이후 `Hooks`이라는 기능이 도입되면서 해결되었다.
- 리액트 공식 문서에서는 함수 컴포넌트와 `Hooks`를 사용하도록 권장하고 있다.
- return문에서 React element를 반환해야 한다.

<br/>

## 모듈 내보내기 및 불러오기

선언된 컴포넌트는 모듈로 내보내거나 불러올 수 있다.

### 모듈 내보내기 (export)

```jsx
const MyComponent = () => {
  return <div>new component</div>;
};
export default MyComponent;
```

### 모듈 불러오기 (import)

```jsx
import MyComponent from "./MyComponent";

const App = () => {
  return <MyComponent />;
};

export default App;
```
