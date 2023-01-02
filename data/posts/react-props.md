---
emoji: 🪐
title: props
date: "2022-01-12"
category: React
preview: "'리액트를 다루는 기술'이라는 책을 읽고 배운 것을 바탕으로 작성되었다. props는 properties의 줄임말이다. 컴포넌트의 속성을 나타내는 데이터로 해당 값은 부모 컴포넌트에서 설정하고, 자식 컴포넌트는 props 값을 전달받아 읽기 전용으로 사용한다. props는 객체 형태이다. 💡 props vs state 둘 다 컴포넌트에서 사용하거나 렌더링할 데이터를 담고 있는 면에서 비슷하다. props 값은 부모 컴포넌트에서 설정하고, 자식 컴포넌트는 해당 props를 전달받아 읽기 전용으로 사용할 수 있다. state 값은 컴포넌트 내부에서 설정하고 업데이트할 수 있다. props 값이 무조건 고정적인 것은 아니다. 부모 컴포넌트의 state를 자식 컴포넌트의 props로 전달하고 자식 컴포넌트에서 특정 이벤트가 발생할 때 부모 컴포넌트의 상태 업데이트 함수를 호출하면 props도 유동적으로 사용할 수 있다."
---

> "리액트를 다루는 기술"이라는 책을 읽고 배운 것을 바탕으로 작성되었다.

# props

- properties의 줄임말
- **컴포넌트의 속성을 나타내는 데이터**로 해당 값은 부모 컴포넌트에서 설정하고, 자식 컴포넌트는 props 값을 전달받아 **읽기 전용**으로 사용한다.
- props는 객체 형태이다.

> 💡 **props vs state**
>
> - 둘 다 컴포넌트에서 사용하거나 렌더링할 데이터를 담고 있는 면에서 비슷하다.
> - props 값은 부모 컴포넌트에서 설정하고, 자식 컴포넌트는 해당 props를 전달받아 읽기 전용으로 사용할 수 있다.
> - state 값은 컴포넌트 내부에서 설정하고 업데이트할 수 있다.
> - props 값이 무조건 고정적인 것은 아니다.
>   - 부모 컴포넌트의 state를 자식 컴포넌트의 props로 전달하고 자식 컴포넌트에서 특정 이벤트가 발생할 때 부모 컴포넌트의 상태 업데이트 함수를 호출하면 props도 유동적으로 사용할 수 있다.

<br/>

## 함수형 컴포넌트의 props

```jsx
export default function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

- 함수형 컴포넌트에서는 props가 객체 형태의 인자로 전달된다.
- JSX 내부에서 props 값을 렌더링할 때 `{}` 기호로 감싸주면 된다.

### defaultProps

`props`의 기본값 설정할 수 있다.

```jsx
const MyComponent = props => {
  return <div>안녕하세요. 제 이름은 {props.name}입니다.</div>;
};

MyComponent.defaultProps = {
  name: "기본 이름"
};

export default MyComponent;
```

### props.children

컴포넌트 태그 사이에 있는 모든 내용을 조회할 수 있다.

```jsx
const MyComponent = props => {
  const { name, children } = props; // 객체 비구조화 할당
  return (
    <div>
      <p>안녕하세요. 제 이름은 {name}입니다.</p>
      <p>children 값은 {children}입나다.</p>
    </div>
  );
};

export default MyComponent;
```

```jsx
// 함수 파라미터 객체 비구조화 할당
const MyComponent = ({ name, children }) => {
  return (
    <div>
      <p>안녕하세요. 제 이름은 {name}입니다.</p>
      <p>children 값은 {children}입나다.</p>
    </div>
  );
};

export default MyComponent;
```

```jsx
import MyComponent from "./MyComponent";

// 부모 컴포넌트에서 props 값 전달
const App = () => {
  return <MyComponent name="React">리액트</MyComponent>;
};

export default App;
```

### propTypes를 통한 props 검증

컴포넌트의 필수 props를 지정하거나 props의 타입을 지정할 수 있다.

```jsx
import PropTypes form "prop-types";

// ...

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};
```

> **PropsTypes의 타입 종류**
>
> - `array`: 배열
> - `arrayOf(다른 PropType)`: 특정 PropType 타입으로 이루어진 배열
> - `arrayOf(PropType.number)`: 숫자로 이루어진 배열
> - `bool`: `true` 혹은 `false`
> - `func`: 함수
> - `number`: 숫자
> - `object`: 객체
> - `string`: 문자열
> - `symbol`: ES6 Symbol
> - `node`: 렌더링할 수 있는 모든 것 (숫자, 문자열, 혹은 JSX 코드, children도 node Prototype이다.)
> - `instanceOf(class)`: 특정 클래스의 인스턴스
> - `oneOf([])`: 주어진 배열 요소 값 중 하나
> - `oneOfType([])`: 주어진 배열 안의 종류 중 하나
> - `objectOf();`: 객체의 모든 키 값이 인자로 주어진 PropType인 객체
> - `shape({ name: PropTypes.string, num: PropTypes.number })`: 주어진 스키마를 가진 객체
> - `any`: 아무 종류

<br/>

## 클래스형 컴포넌트의 props

```jsx
import { Component } from "react";

class Welcome extends Component {
  // 생성자 함수 (인수로 객체 형태의 props가 전달됨.)
  constructor(props) {
    super(props);
  }
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

export default Welcome;
```

- 생성자 함수의 인수로 객체 형태의 props가 전달된다.
- render 메서드에서 props를 사용하기 위해서는 컴포넌트의 생성자 함수에서 `super(props)`를 호출해야 한다.
  - `super(props)`는 부모 컴포넌트 클래스의 생성자 함수를 호출해 준다.
- 클래스 외부에서 `defaultProps`와 `propTypes`를 설정할 수 있다. (클래스 내부에서도 설정 가능)

```js
static defalutProps = {
  name: "기본 이름"
};

static propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired
};
```
