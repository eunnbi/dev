---
emoji: ⚛️
title: React 상태 관리
date: "2022-02-06"
category: React
preview: "상태(state)란? Plain Javascript object holds information that influences the output of render state는 컴포넌트를 렌더링하는데 있어 영향을 주는 정보를 지닌 객체로, 컴포넌트 내부에서 관리된다. 애플리케이션에서 보여지는 데이터 혹은 UI/UX(FE)에 필요한 데이터 중 시간에 따라 변할 가능성이 있는 데이터를 state에 담아 관리한다. 하나의 컴포넌트에서 상태를 관리하는 것은 매우 간단하다. 하지만 여러 컴포넌트에서 같은 상태를 공통적으로 접근하고 공유해야 할 때 효율적인 상태 관리가 필요하다."
---

# React의 상태 관리

## 상태(state)란?

> Plain Javascript object holds information that influences the output of render

[React 공식문서](https://reactjs.org/docs/faq-state.html)에서는 위와 같이 상태를 정의했다. state는 컴포넌트를 렌더링하는데 있어 영향을 주는 정보를 지닌 객체로, 컴포넌트 내부에서 관리된다.
애플리케이션에서 보여지는 데이터 혹은 UI/UX(FE)에 필요한 데이터 중 시간에 따라 변할 가능성이 있는 데이터를 state에 담아 관리한다.

## 상태 관리 필요성

하나의 컴포넌트에서 상태를 관리하는 것은 매우 간단하다. 하지만 **여러 컴포넌트에서 같은 상태를 공통적으로 접근하고 공유해야 할 때** 효율적인 상태 관리가 필요하다.

## 상태 끌어올리기

`Lifting State Up`

여러 컴포넌트에서 공유해야 할 상태가 있다면 공통 소유 컴포넌트를 찾아 해당 컴포넌트의 state로 관리한다. 만약 특정 컴포넌트에서 state가 필요하다면 props로 전달한다.

- 하지만 컴포넌트의 구조가 깊어질수록 props로 상태를 전달하는 것이 비효율적이다.
- 또한, 해당 상태를 사용하지 않은 컴포넌트에도 props로 상태를 전달해야 하는 상황이 발생한다.

이 문제를 해결할 수 있는 방법들을 리액트에서 제공한다.

> **공통 소유 컴포넌트란?** (common owner component)<br/> 계층 구조 내에서 특정 state가 있어야 하는 모든 컴포넌트들의 상위에 있는 하나의 컴포넌트

## 컴포넌트 합성

먼저, 컴포넌트 합성 (Composite)를 이용하는 방식이다.

- 컴포넌트 합성은 props로 전달될 수 있는 값에 대해 제한이 없다는 것을 이용한다.
- 앞서 상태 끌어올리기의 문제점은 특정 컴포넌트까지 상태를 props로 전달하는 것이다. 하지만 합성에서는 props로 상태를 전달하는 것이 아니라 컴포넌트를 전달한다.
- 컴포넌트 합성 역시 컴포넌트 계층 구조가 복잡해질수록 상태 관리하기에 비효율적인 방법이 될 수 있다.

```jsx
function App() {
  const [state, setState] = useState("state");

  return (
    <>
      <Header state={state} setState={setState} />
      <Navbar state={state} setState={setState} />
    </>
  );
}
```

```jsx
function Header({ state, setState }) {
  return (
    <>
      // 또 다시 props로 상태와 setter함수 전달
      <Logo state={state} />
      <Setting setState={setState} />
    </>
  );
}
```

```jsx
// 합성 이용
function App() {
  const [state, setState] = useState("state");

  return (
    <>
      <Header
        logo={<Logo state={state} />}
        setting={<Setting setState={setState} />}
      />
      ...
    </>
  );
}
```

## Context API

> 참고: [Context API 개념 및 사용](https://www.eunnbi.dev/posts/react-context-api)

다른 방법으로 리액트는 Context API를 제공한다. Context API는 주로 전역 상태를 관리할 때 사용되며 컴포넌트끼리 상태를 props를 전달하지 않고도 **한 번에** 상태를 가져올 수 있다. 하지만 성능면에서 문제점이 발생한다.

- 유명한 상태 관리 라이브러리인 Redux와 비교하자면 Redux는 상태의 특정 값을 컴포넌트에서 의존하게 될 때 **해당 값이 바뀔 때에만 리렌더링**이 되도록 최적화되어 있다.
- 반면, Context API에서는 컴포넌트가 상태의 특정 값에 의존할 경우, 해당 값 말고 **다른 값이 변경될 때도 컴포넌트가 리렌더링된다.**

그래서 관심사에 맞게 `Context`를 분리하여 생성하는 것이 중요하다. 서로 관련 없는 상태라면 같은 `Context`에 있으면 안된다.

```jsx
import React, { createContext, useState, useContext } from "react";

const UserContext = createContext(null);

function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  return useContext(UserContext);
}

function UserInfo() {
  const { user } = useUser();
  if (!user) return <div>사용자 정보가 없습니다.</div>;
  return <div>{user.username}</div>;
}

function Authenticate() {
  const { setUser } = useUser();
  const onClick = () => {
    setUser({ username: "velopert" });
  };
  return <button onClick={onClick}>사용자 인증</button>;
}

export default function App() {
  return (
    <UserProvider>
      <UserInfo />
      <Authenticate />
    </UserProvider>
  );
}
```

사용자가 사용자 인증 버튼을 누르면 Context의 `user` 상태가 업데이트되므로 `UserInfo` 컴포넌트는 당연히 리렌더링이 된다. 하지만 `user` 상태에 의존하지 않는 `Authenticate` 컴포넌트도 리렌더링되는 문제가 발생한다. 왜냐하면 Authenticate 컴포넌트가 의존하고 있는 `setUser`와 `user`가 같은 `Context`에 있기 때문이다. 이러한 소규모 애플리케이션의 경우 큰 문제가 되지 않지만 애플리케이션 규모가 커질수록 성능 문제가 발생할 수 있다.

따라서, 위 상황에서 두 개의 Context를 사용해야 한다.

```jsx
import React, { createContext, useState, useContext } from "react";

const UserContext = createContext(null);
const UserUpdateContext = createContext(null);

function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={user}>
      <UserUpdateContext.Provider value={setUser}>
        {children}
      </UserUpdateContext.Provider>
    </UserContext.Provider>
  );
}

function useUser() {
  return useContext(UserContext);
}

function useUserUpdate() {
  return useContext(UserUpdateContext);
}

function UserInfo() {
  const user = useUser();
  if (!user) return <div>사용자 정보가 없습니다.</div>;
  return <div>{user.username}</div>;
}

function Authenticate() {
  const setUser = useUserUpdate();
  const onClick = () => {
    setUser({ username: "velopert" });
  };
  return <button onClick={onClick}>사용자 인증</button>;
}

export default function App() {
  return (
    <UserProvider>
      <UserInfo />
      <Authenticate />
    </UserProvider>
  );
}
```

`user` 상태가 업데이트되었을 경우 `UserInfo` 컴포넌트만 리렌더링된다. 이렇게 **업데이트용과 상태용 Context를 분리**하는 것이 중요하다.

## 상태 관리 라이브러리

- React에서 사용할 수 있는 다양한 상태 관리 라이브러리가 있다.
  - Redux, Recoil, Mobx 등등
- 대표적으로 Redux가 있다.
- 앞서 설명했듯이 Redux는 컴포넌트가 사용하는 상태 값이 바뀔 때만 리렌더링되도록 최적화되어 있다.
- 또한, Redux는 다양한 Middleware가 있다. redux-thunk나 redux-saga와 같은 미들웨어를 이용해 네트워크 요청과 같은 비동기 작업을 통해 상태를 업데이트하는데 유용하다.
- 하지만, Redux는 액션 타입, 액션 생성 함수, 리듀서와 같이 보일러 플레이트 코드를 많이 준비해야 한다.
- 만약 Redux 미들웨어와 같이 고급 기능이 필요하지 않다면, Recoil 같은 간단한 상태 관리 라이브러리를 사용해도 좋다.

> - [React에서 Redux 사용해보기](https://www.eunnbi.dev/posts/react-redux)
> - [Redux Middleware](https://www.eunnbi.dev/posts/react-redux-middleware)
> - [Recoil 공식문서](https://recoiljs.org/ko/docs/introduction/getting-started)
