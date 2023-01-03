---
emoji: 🎯
title: 효율적인 모달 관리 (with Context API)
date: "2022-01-25"
category: React
preview: "한 컴포넌트 내에서 여러 개의 모달이 필요한 경우 필요한 모달을 모두 렌더링해야 한다. 모달의 열고 닫음 상태를 관리해줄 state도 여러 개 필요하다. 각 모달 컴포넌트에서 닫는 동작이 필요하기 때문에 모달마다 닫는 동작이 구현된 함수를 만들어 props로 전달해야 한다. 하위 컴포넌트에서 모달을 열어야 하는 경우, 하위 컴포넌트의 props로 모달을 열어주는 함수를 전달한다. 만역 여러 하위 컴포넌트에서 모달을 열어줘야 한다면 각 하위 컴포넌트에 모달을 열어주는 함수를 전달해야 한다. 해결 방안 1. 상태 관리 직접하지 않기 : 모달을 열기 위한 상태 관리를 모달이 필요한 컴포넌트에서 직접하지 않도록 한다. 2. 부모의 상태에 의존하지 않고 하위 컴포넌트에서도 독립적으로 모달을 열 수 있게 만들기 (불필요한 props 제거) 💡 문제의 핵심 원인은 모달 관리 방법의 파편화이다. 모달이 필요한 컴포넌트별로 각 모달 컴포넌트를 렌더링하고, 모달의 열고 닫음 상태를 state로 스스로 관리하기 때문에 발생한다. 파편화된 모달 관리를 한 곳으로 모아 중앙화된 모달 관리를 구현해보자!"
---

# 일반적인 모달 관리

1. 모달 컴포넌트 만들기

```jsx
// src/MyModal.js
const myModal = ({ isOpen, onCancel, onSubmit }) => {
  return (
    <Modal isOpen={isOpen}>
      <h1>모달입니다.</h1>
      <div>
        <button onClick={onSubmit}>확인</button>
        <button onClick={onCancel}>취소</button>
      </div>
    </Modal>
  );
};
```

2. 모달 컴포넌트 렌더링하기

- `App` 컴포넌트의 특정 버튼을 눌러 모달 컴포넌트를 보여준다고 가정하자.
- 그러면 모달 컴포넌트의 열고 닫음 상태를 `App` 컴포넌트의 `state`로 관리하게 된다.
- 모달 컴포넌트에서 열고 닫음 상태와 모달을 닫는 동작이 필요하기 때문에 함수를 만들어 `props`로 전달한다.

```jsx
// src/App.js

import { useState } from "react";
import MyModal from "./MyModal";

const App = () => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const onSubmit = () => {
    // 비즈니스 로직
    setOpen(false);
  };

  const onCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <button onClick={handleClick}>모달 열기</button>
      <MyModal isOpen={isOpen} onSubmit={onSubmit} onCancel={onCancel} />
    </>
  );
};
```

# 일반적인 모달 사용법의 문제점

## 여러 개의 모달이 필요한 경우

- 한 컴포넌트 내에서 여러 개의 모달이 필요한 경우 필요한 모달을 모두 렌더링해야 한다.
- 모달의 열고 닫음 상태를 관리해줄 `state`도 여러 개 필요하다. (`useState` 증가)
- 각 모달 컴포넌트에서 닫는 동작이 필요하기 때문에 모달마다 닫는 동작이 구현된 함수를 만들어 `props`로 전달해야 한다.

## 하위 컴포넌트에서 모달을 열어야 하는 경우

- 하위 컴포넌트의 `props`로 모달을 열어주는 함수를 전달한다.
- 엄청 문제될 상황은 아니지만 그다지 좋은 패턴은 아니다.
- 만역 여러 하위 컴포넌트에서 모달을 열어줘야 한다면 각 하위 컴포넌트에 모달을 열어주는 함수를 전달해야 한다.

# 해결 방안

1. 상태 관리 직접하지 않기 : 모달을 열기 위한 상태 관리를 모달이 필요한 컴포넌트에서 직접하지 않도록 한다.
2. 부모의 상태에 의존하지 않고 하위 컴포넌트에서도 독립적으로 모달을 열 수 있게 만들기 (불필요한 `props` 제거)

> 💡 문제의 핵심 원인은 **모달 관리 방법의 파편화**이다. 모달이 필요한 컴포넌트별로 각 모달 컴포넌트를 렌더링하고, 모달의 열고 닫음 상태를 `state`로 스스로 관리하기 때문에 발생한다. 파편화된 모달 관리를 한 곳으로 모아 **중앙화된 모달 관리**를 구현해보자!

# state 외부에서 관리하기 (with Context API)

모달의 열고 닫음 상태를 모달이 필요한 컴포넌트에서 직접 `state`로 관리했다면 이제는 `Context API`를 이용하여 관리하자!

💡 현재 open된 모달 컴포넌트들을 나타내는 `state`

```javascript
const openedModals = [
  {
    Component,
    props
  },
  {
    Component,
    props
  }
  // ...
];
```

💡 모달을 열고 닫는 함수

- 모달을 여는 함수: `openedModals`에 모달 컴포넌트 추가
- 모달을 닫는 함수: `openedModals`에 모달 컴포넌트 제거

```jsx
// ModalsContext.js

import { createContext } from "react";

// 현재 open된 modal들을 나타냄.
export const ModalsStateContext = createContext([]);

// modal을 열고 닫는 함수
export const ModalsDispatchContext = createContext({
    open: () => {}
    close: () => {}
});
```

```jsx
// ModalsProvider.js

import { useState } from "react";
import { ModalsStateContext, ModalsDispatchContext } from "./ModalsContext";

const ModalsProvider = ({ children }) => {
  const [openedModals, setOpenedModals] = useState([]);
  const open = (Component, props) => {
    setOpenedModals(modals => {
      return [...modals, { Component, props }];
    });
  };
  const close = Component => {
    setOpenedModals(modals => {
      return modals.filter(modal => modal.Component !== Component);
    });
  };

  const dispatch = { open, close };
  return (
    <ModalsDispatchContext.Provider value={dispatch}>
      <ModalsStateContext.Provider value={opendedModals}>
        {children}
      </ModalsStateContext.Provider>
    </ModalsDispatchContext.Provider>
  );
};
```

```jsx
// index.js
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import ReactModal from "react-modal";

import App from "./App";
import ModalsProvider from "./ModalsProvider";

ReactModal.setAppElement("#root");
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ModalsProvider>
      <App />
    </ModalsProvider>
  </StrictMode>,
  rootElement
);
```

<br/>

# ModalsContext 이용

- 이제 모달을 열고 닫을 때 ModalsDispatchContext의 open 함수와 close 함수를 이용하면 된다.
- ModalsStateContext의 openedModals를 이용하여 open된 모달들을 렌더링하면 된다.

```jsx
// useModals.js
import { useContext } from "react";
import { ModalsDispatchContext } from "./ModalsContext";

export default function useModals() {
  const { open, close } = useContext(ModalsDispatchContext);

  const openModal = (Component, props) => {
    open(Component, props);
  };
  const closeModal = Component => {
    close(Component);
  };
  return { openModal, closeModal };
}
```

```jsx
// Modals.js
import { useContext } from "react";
import { ModalsStateContext } from "./ModalsContext";

const Modals = () => {
  const openedModals = useContext(ModalsStateContext);

  return openedModals.map((modal, index) => {
    const { Component, props } = modal;
    const { onSubmit, onClose, ...restProps } = props;

    const handleSubmit = async () => {
      if (typeof onSubmit === "function") {
        await onSubmit();
      }
      onClose();
    };

    return (
      <Component
        key={index}
        onClose={onClose}
        handleSubmit={handleSubmit}
        {...restProps}
      />
    );
  });
};

export default Modals;
```

```jsx
// App.js
import "./styles.css";
import useModals from "./useModals.js";
import Modals from "./Modals";
import MyModal from "./MyModal";

export default function App() {
  const { openModal, closeModal } = useModals();
  const handleClick = () => {
    openModal(MyModal, {
      onSubmit: () => {
        console.log("로직 처리...");
      },
      onClose: closeModal
    });
  };
  return (
    <div className="App">
      <button onClick={handleClick}>모달 열기</button>
      <Modals />
    </div>
  );
}
```

> Context API를 이용해 파편화된 모달 관리를 중앙화하여 컴포넌트 외부에서 관리하도록 한다. open된 모달 컴포넌트와 해당 컴포넌트의 props를 나타내는 객체 배열을 state로 정의한다. 이 state에 있는 컴포넌트를 렌더링하는 컴포넌트를 만든다. 그러면 이제 모달을 열고 닫는 함수는 앞서 정의한 state에서 모달 컴포넌트를 넣거나 제거하도록 구현하면 된다.
