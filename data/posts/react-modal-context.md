---
emoji: ๐ฏ
title: ํจ์จ์ ์ธ ๋ชจ๋ฌ ๊ด๋ฆฌ (with Context API)
date: "2022-01-25"
category: React
preview: "ํ ์ปดํฌ๋ํธ ๋ด์์ ์ฌ๋ฌ ๊ฐ์ ๋ชจ๋ฌ์ด ํ์ํ ๊ฒฝ์ฐ ํ์ํ ๋ชจ๋ฌ์ ๋ชจ๋ ๋ ๋๋งํด์ผ ํ๋ค. ๋ชจ๋ฌ์ ์ด๊ณ  ๋ซ์ ์ํ๋ฅผ ๊ด๋ฆฌํด์ค state๋ ์ฌ๋ฌ ๊ฐ ํ์ํ๋ค. ๊ฐ ๋ชจ๋ฌ ์ปดํฌ๋ํธ์์ ๋ซ๋ ๋์์ด ํ์ํ๊ธฐ ๋๋ฌธ์ ๋ชจ๋ฌ๋ง๋ค ๋ซ๋ ๋์์ด ๊ตฌํ๋ ํจ์๋ฅผ ๋ง๋ค์ด props๋ก ์ ๋ฌํด์ผ ํ๋ค. ํ์ ์ปดํฌ๋ํธ์์ ๋ชจ๋ฌ์ ์ด์ด์ผ ํ๋ ๊ฒฝ์ฐ, ํ์ ์ปดํฌ๋ํธ์ props๋ก ๋ชจ๋ฌ์ ์ด์ด์ฃผ๋ ํจ์๋ฅผ ์ ๋ฌํ๋ค. ๋ง์ญ ์ฌ๋ฌ ํ์ ์ปดํฌ๋ํธ์์ ๋ชจ๋ฌ์ ์ด์ด์ค์ผ ํ๋ค๋ฉด ๊ฐ ํ์ ์ปดํฌ๋ํธ์ ๋ชจ๋ฌ์ ์ด์ด์ฃผ๋ ํจ์๋ฅผ ์ ๋ฌํด์ผ ํ๋ค. ํด๊ฒฐ ๋ฐฉ์ 1. ์ํ ๊ด๋ฆฌ ์ง์ ํ์ง ์๊ธฐ : ๋ชจ๋ฌ์ ์ด๊ธฐ ์ํ ์ํ ๊ด๋ฆฌ๋ฅผ ๋ชจ๋ฌ์ด ํ์ํ ์ปดํฌ๋ํธ์์ ์ง์ ํ์ง ์๋๋ก ํ๋ค. 2. ๋ถ๋ชจ์ ์ํ์ ์์กดํ์ง ์๊ณ  ํ์ ์ปดํฌ๋ํธ์์๋ ๋๋ฆฝ์ ์ผ๋ก ๋ชจ๋ฌ์ ์ด ์ ์๊ฒ ๋ง๋ค๊ธฐ (๋ถํ์ํ props ์ ๊ฑฐ) ๐ก ๋ฌธ์ ์ ํต์ฌ ์์ธ์ ๋ชจ๋ฌ ๊ด๋ฆฌ ๋ฐฉ๋ฒ์ ํํธํ์ด๋ค. ๋ชจ๋ฌ์ด ํ์ํ ์ปดํฌ๋ํธ๋ณ๋ก ๊ฐ ๋ชจ๋ฌ ์ปดํฌ๋ํธ๋ฅผ ๋ ๋๋งํ๊ณ , ๋ชจ๋ฌ์ ์ด๊ณ  ๋ซ์ ์ํ๋ฅผ state๋ก ์ค์ค๋ก ๊ด๋ฆฌํ๊ธฐ ๋๋ฌธ์ ๋ฐ์ํ๋ค. ํํธํ๋ ๋ชจ๋ฌ ๊ด๋ฆฌ๋ฅผ ํ ๊ณณ์ผ๋ก ๋ชจ์ ์ค์ํ๋ ๋ชจ๋ฌ ๊ด๋ฆฌ๋ฅผ ๊ตฌํํด๋ณด์!"
---

# ์ผ๋ฐ์ ์ธ ๋ชจ๋ฌ ๊ด๋ฆฌ

1. ๋ชจ๋ฌ ์ปดํฌ๋ํธ ๋ง๋ค๊ธฐ

```jsx
// src/MyModal.js
const myModal = ({ isOpen, onCancel, onSubmit }) => {
  return (
    <Modal isOpen={isOpen}>
      <h1>๋ชจ๋ฌ์๋๋ค.</h1>
      <div>
        <button onClick={onSubmit}>ํ์ธ</button>
        <button onClick={onCancel}>์ทจ์</button>
      </div>
    </Modal>
  );
};
```

2. ๋ชจ๋ฌ ์ปดํฌ๋ํธ ๋ ๋๋งํ๊ธฐ

- `App` ์ปดํฌ๋ํธ์ ํน์  ๋ฒํผ์ ๋๋ฌ ๋ชจ๋ฌ ์ปดํฌ๋ํธ๋ฅผ ๋ณด์ฌ์ค๋ค๊ณ  ๊ฐ์ ํ์.
- ๊ทธ๋ฌ๋ฉด ๋ชจ๋ฌ ์ปดํฌ๋ํธ์ ์ด๊ณ  ๋ซ์ ์ํ๋ฅผ `App` ์ปดํฌ๋ํธ์ `state`๋ก ๊ด๋ฆฌํ๊ฒ ๋๋ค.
- ๋ชจ๋ฌ ์ปดํฌ๋ํธ์์ ์ด๊ณ  ๋ซ์ ์ํ์ ๋ชจ๋ฌ์ ๋ซ๋ ๋์์ด ํ์ํ๊ธฐ ๋๋ฌธ์ ํจ์๋ฅผ ๋ง๋ค์ด `props`๋ก ์ ๋ฌํ๋ค.

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
    // ๋น์ฆ๋์ค ๋ก์ง
    setOpen(false);
  };

  const onCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <button onClick={handleClick}>๋ชจ๋ฌ ์ด๊ธฐ</button>
      <MyModal isOpen={isOpen} onSubmit={onSubmit} onCancel={onCancel} />
    </>
  );
};
```

# ์ผ๋ฐ์ ์ธ ๋ชจ๋ฌ ์ฌ์ฉ๋ฒ์ ๋ฌธ์ ์ 

## ์ฌ๋ฌ ๊ฐ์ ๋ชจ๋ฌ์ด ํ์ํ ๊ฒฝ์ฐ

- ํ ์ปดํฌ๋ํธ ๋ด์์ ์ฌ๋ฌ ๊ฐ์ ๋ชจ๋ฌ์ด ํ์ํ ๊ฒฝ์ฐ ํ์ํ ๋ชจ๋ฌ์ ๋ชจ๋ ๋ ๋๋งํด์ผ ํ๋ค.
- ๋ชจ๋ฌ์ ์ด๊ณ  ๋ซ์ ์ํ๋ฅผ ๊ด๋ฆฌํด์ค `state`๋ ์ฌ๋ฌ ๊ฐ ํ์ํ๋ค. (`useState` ์ฆ๊ฐ)
- ๊ฐ ๋ชจ๋ฌ ์ปดํฌ๋ํธ์์ ๋ซ๋ ๋์์ด ํ์ํ๊ธฐ ๋๋ฌธ์ ๋ชจ๋ฌ๋ง๋ค ๋ซ๋ ๋์์ด ๊ตฌํ๋ ํจ์๋ฅผ ๋ง๋ค์ด `props`๋ก ์ ๋ฌํด์ผ ํ๋ค.

## ํ์ ์ปดํฌ๋ํธ์์ ๋ชจ๋ฌ์ ์ด์ด์ผ ํ๋ ๊ฒฝ์ฐ

- ํ์ ์ปดํฌ๋ํธ์ `props`๋ก ๋ชจ๋ฌ์ ์ด์ด์ฃผ๋ ํจ์๋ฅผ ์ ๋ฌํ๋ค.
- ์์ฒญ ๋ฌธ์ ๋  ์ํฉ์ ์๋์ง๋ง ๊ทธ๋ค์ง ์ข์ ํจํด์ ์๋๋ค.
- ๋ง์ญ ์ฌ๋ฌ ํ์ ์ปดํฌ๋ํธ์์ ๋ชจ๋ฌ์ ์ด์ด์ค์ผ ํ๋ค๋ฉด ๊ฐ ํ์ ์ปดํฌ๋ํธ์ ๋ชจ๋ฌ์ ์ด์ด์ฃผ๋ ํจ์๋ฅผ ์ ๋ฌํด์ผ ํ๋ค.

# ํด๊ฒฐ ๋ฐฉ์

1. ์ํ ๊ด๋ฆฌ ์ง์ ํ์ง ์๊ธฐ : ๋ชจ๋ฌ์ ์ด๊ธฐ ์ํ ์ํ ๊ด๋ฆฌ๋ฅผ ๋ชจ๋ฌ์ด ํ์ํ ์ปดํฌ๋ํธ์์ ์ง์ ํ์ง ์๋๋ก ํ๋ค.
2. ๋ถ๋ชจ์ ์ํ์ ์์กดํ์ง ์๊ณ  ํ์ ์ปดํฌ๋ํธ์์๋ ๋๋ฆฝ์ ์ผ๋ก ๋ชจ๋ฌ์ ์ด ์ ์๊ฒ ๋ง๋ค๊ธฐ (๋ถํ์ํ `props` ์ ๊ฑฐ)

> ๐ก ๋ฌธ์ ์ ํต์ฌ ์์ธ์ **๋ชจ๋ฌ ๊ด๋ฆฌ ๋ฐฉ๋ฒ์ ํํธํ**์ด๋ค. ๋ชจ๋ฌ์ด ํ์ํ ์ปดํฌ๋ํธ๋ณ๋ก ๊ฐ ๋ชจ๋ฌ ์ปดํฌ๋ํธ๋ฅผ ๋ ๋๋งํ๊ณ , ๋ชจ๋ฌ์ ์ด๊ณ  ๋ซ์ ์ํ๋ฅผ `state`๋ก ์ค์ค๋ก ๊ด๋ฆฌํ๊ธฐ ๋๋ฌธ์ ๋ฐ์ํ๋ค. ํํธํ๋ ๋ชจ๋ฌ ๊ด๋ฆฌ๋ฅผ ํ ๊ณณ์ผ๋ก ๋ชจ์ **์ค์ํ๋ ๋ชจ๋ฌ ๊ด๋ฆฌ**๋ฅผ ๊ตฌํํด๋ณด์!

# state ์ธ๋ถ์์ ๊ด๋ฆฌํ๊ธฐ (with Context API)

๋ชจ๋ฌ์ ์ด๊ณ  ๋ซ์ ์ํ๋ฅผ ๋ชจ๋ฌ์ด ํ์ํ ์ปดํฌ๋ํธ์์ ์ง์  `state`๋ก ๊ด๋ฆฌํ๋ค๋ฉด ์ด์ ๋ `Context API`๋ฅผ ์ด์ฉํ์ฌ ๊ด๋ฆฌํ์!

๐ก ํ์ฌ open๋ ๋ชจ๋ฌ ์ปดํฌ๋ํธ๋ค์ ๋ํ๋ด๋ `state`

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

๐ก ๋ชจ๋ฌ์ ์ด๊ณ  ๋ซ๋ ํจ์

- ๋ชจ๋ฌ์ ์ฌ๋ ํจ์: `openedModals`์ ๋ชจ๋ฌ ์ปดํฌ๋ํธ ์ถ๊ฐ
- ๋ชจ๋ฌ์ ๋ซ๋ ํจ์: `openedModals`์ ๋ชจ๋ฌ ์ปดํฌ๋ํธ ์ ๊ฑฐ

```jsx
// ModalsContext.js

import { createContext } from "react";

// ํ์ฌ open๋ modal๋ค์ ๋ํ๋.
export const ModalsStateContext = createContext([]);

// modal์ ์ด๊ณ  ๋ซ๋ ํจ์
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

# ModalsContext ์ด์ฉ

- ์ด์  ๋ชจ๋ฌ์ ์ด๊ณ  ๋ซ์ ๋ ModalsDispatchContext์ open ํจ์์ close ํจ์๋ฅผ ์ด์ฉํ๋ฉด ๋๋ค.
- ModalsStateContext์ openedModals๋ฅผ ์ด์ฉํ์ฌ open๋ ๋ชจ๋ฌ๋ค์ ๋ ๋๋งํ๋ฉด ๋๋ค.

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
        console.log("๋ก์ง ์ฒ๋ฆฌ...");
      },
      onClose: closeModal
    });
  };
  return (
    <div className="App">
      <button onClick={handleClick}>๋ชจ๋ฌ ์ด๊ธฐ</button>
      <Modals />
    </div>
  );
}
```

> Context API๋ฅผ ์ด์ฉํด ํํธํ๋ ๋ชจ๋ฌ ๊ด๋ฆฌ๋ฅผ ์ค์ํํ์ฌ ์ปดํฌ๋ํธ ์ธ๋ถ์์ ๊ด๋ฆฌํ๋๋ก ํ๋ค. open๋ ๋ชจ๋ฌ ์ปดํฌ๋ํธ์ ํด๋น ์ปดํฌ๋ํธ์ props๋ฅผ ๋ํ๋ด๋ ๊ฐ์ฒด ๋ฐฐ์ด์ state๋ก ์ ์ํ๋ค. ์ด state์ ์๋ ์ปดํฌ๋ํธ๋ฅผ ๋ ๋๋งํ๋ ์ปดํฌ๋ํธ๋ฅผ ๋ง๋ ๋ค. ๊ทธ๋ฌ๋ฉด ์ด์  ๋ชจ๋ฌ์ ์ด๊ณ  ๋ซ๋ ํจ์๋ ์์ ์ ์ํ state์์ ๋ชจ๋ฌ ์ปดํฌ๋ํธ๋ฅผ ๋ฃ๊ฑฐ๋ ์ ๊ฑฐํ๋๋ก ๊ตฌํํ๋ฉด ๋๋ค.
