---
emoji: π§©
title: Code Splitting
date: "2022-01-19"
category: React
preview: "'λ¦¬μ‘νΈλ₯Ό λ€λ£¨λ κΈ°μ 'μ΄λΌλ μ±μ μ½κ³  λ°°μ΄ κ²μ λ°νμΌλ‘ μμ±λμλ€. μ½λ μ€νλ¦¬νμ΄λ? λ§ κ·Έλλ‘ μ½λλ₯Ό λΆλ¦¬νλ κ²μ λ§νλ€. μΉν©μμ λ³λμ μ€μ μ νμ§ μμΌλ©΄ νλ‘μ νΈμμ μ¬μ© μ€μΈ λͺ¨λ  μλ°μ€ν¬λ¦½νΈ νμΌμ΄ νλμ νμΌ(main)λ‘ λ²λ€λ§λλ€. μ νλ¦¬μΌμ΄μμ κ·λͺ¨κ° μ»€μ§μλ‘ main νμΌ ν¬κΈ°λ μ»€μ§λλ° κ·Έλ¬λ©΄ νμ΄μ§ λ‘λ© μ μ§κΈ λΉμ₯ νμνμ§ μμ μ½λλ μ λΆ λΆλ¬μ νμ΄μ§ λ‘λ© μκ°μ΄ κΈΈμ΄μ Έ μ¬μ©μ κ²½νλ μ μ’μμ§κ³  νΈλν½λ μ¦κ°νλ€. code splitingμ μ μ©νλ©΄ λΉμ₯ νμνμ§ μμ μ½λλ λΆλ¦¬μμΌ λμ€μ νμν λ λΆλ¬μμ μ¬μ©ν  μ μλ€. (μ½λ λΉλκΈ° λ‘λ©) => νμ΄μ§ λ‘λ© μκ°μ΄ κ°μ λλ€."
---

> "λ¦¬μ‘νΈλ₯Ό λ€λ£¨λ κΈ°μ "μ΄λΌλ μ±μ μ½κ³  λ°°μ΄ κ²μ λ°νμΌλ‘ μμ±λμλ€.

# μ½λ μ€νλ¦¬νμ΄λ?

- λ§ κ·Έλλ‘ μ½λλ₯Ό λΆλ¦¬νλ κ²μ λ§νλ€.
- μΉν©μμ λ³λμ μ€μ μ νμ§ μμΌλ©΄ νλ‘μ νΈμμ μ¬μ© μ€μΈ λͺ¨λ  μλ°μ€ν¬λ¦½νΈ νμΌμ΄ νλμ νμΌ(`main`)λ‘ λ²λ€λ§λλ€.
- μ νλ¦¬μΌμ΄μμ κ·λͺ¨κ° μ»€μ§μλ‘ main νμΌ ν¬κΈ°λ μ»€μ§λλ° κ·Έλ¬λ©΄ νμ΄μ§ λ‘λ© μ μ§κΈ λΉμ₯ νμνμ§ μμ μ½λλ μ λΆ λΆλ¬μ νμ΄μ§ λ‘λ© μκ°μ΄ κΈΈμ΄μ Έ μ¬μ©μ κ²½νλ μ μ’μμ§κ³  νΈλν½λ μ¦κ°νλ€.
- `code spliting`μ μ μ©νλ©΄ λΉμ₯ νμνμ§ μμ μ½λλ λΆλ¦¬μμΌ λμ€μ νμν λ λΆλ¬μμ μ¬μ©ν  μ μλ€. (**μ½λ λΉλκΈ° λ‘λ©**) => νμ΄μ§ λ‘λ© μκ°μ΄ κ°μ λλ€.

## ν¨μ μ½λ μ€νλ¦¬ν

### dynamic import

```javascript
// notify.js
export default function notify() {
  alert("μλνμΈμ!");
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

- μλ¨μ importλ¬Έλ₯Ό ν΅ν΄ nofity ν¨μλ₯Ό λΆλ¬μ€λ©΄ λ²λ€λ§ μ notify ν¨μ μ½λκ° main νμΌ μμ ν¬ν¨λλ€.
- νμ§λ§ `import()` ν¨μλ₯Ό μ¬μ©νλ©΄ μ½λλ₯Ό νμν μμ μ λΆλ¬μ μ¬μ©ν  μ μκ³  λ²λ€λ§ν  λ μ½λκ° mainμ΄ μλ λ€λ₯Έ νμΌμ ν¬ν¨λλ€.
  - **chunk νμΌ: μ½λ μ€νλ¦¬ν μ μμ±λλ μλ°μ€ν¬λ¦½νΈ νμΌ**
- `import()` ν¨μλ νλ‘λ―Έμ€ κ°μ²΄λ₯Ό λ°ννλλ° νλ‘λ―Έμ€ κ°μ²΄μ λ°νκ°μ importλ λͺ¨λμ΄λ€.

## μ»΄ν¬λνΈ μ½λ μ€νλ¦¬ν

### 1. import ν¨μμ state μ΄μ©

- `import()`λ₯Ό ν΅ν΄ μ»΄ν¬λνΈλ₯Ό νμν μμ μ λΆλ¬μ μ»΄ν¬λνΈ μμ²΄λ₯Ό `state`μ λ£λλ€.

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

### 2. React.lazyμ Suspense

**React.lazy()**

- μ»΄ν¬λνΈλ₯Ό λ λλ§νλ μμ μ λΉλκΈ°μ μΌλ‘ λ‘λ©νλ ν¨μ
- `import` ν¨μλ₯Ό νΈμΆνλ ν¨μ μΈμλ₯Ό κ°κ³ , λΆλ¬μ¨ μ»΄ν¬λνΈλ₯Ό λ°ννλ€.

```jsx
const SplitMe = React.lazy(() => import("./SplitMe"));
```

**Suspense**

- `React.lazy`λ‘ λΆλ¬μ¨ μ»΄ν¬λνΈλ `Suspense` μ»΄ν¬λνΈ νμμμ λ λλ§λμ΄μΌ νλ€.
- fallback prop κ°μΌλ‘ μ»΄ν¬λνΈκ° λ‘λλκΈΈ κΈ°λ€λ¦¬λ λμ λ λλ§νλ €λ React elementλ₯Ό μ λ¬νλ€.

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

- `@loadable/component`λ μ½λ μ€νλ¦¬νμ νΈνκ² νλλ‘ λμμ£Όλ μλνν° λΌμ΄λΈλ¬λ¦¬μ΄λ€.
- μ΄ λΌμ΄λΈλ¬λ¦¬μ μ΄μ μ **μλ² μ¬μ΄λ λ λλ§μ μ§μ**νλ€. (React.lazyμ Suspenseλ μμ§ μλ² μ¬μ΄λ λ λλ§μ μ§μνμ§ μλλ€.)

```jsx
const SplitMe = loadable(() => import("./SplitMe"), {
  fallback: <div>loading...</div>
});

SplitMe.preload(); // λ―Έλ¦¬ λΆλ¬μ€κΈ°
```

## λ¦¬μ‘νΈ λΌμ°ν°μ ν¨κ» μ¬μ©νκΈ°

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

- μ¬λ¬ μ»΄ν¬λνΈλ€λ‘ κ΅¬μ±λ κ·λͺ¨κ° ν° `SPA`λ₯Ό κ°λ°νλ€κ³  νμ λ μ½λ μ€νλ¦¬νμ μ μ©νμ§ μμΌλ©΄ μλ°μ€ν¬λ¦½νΈ `main` λ²λ€ νμΌμ΄ μ»€μ§λ€.
- νμ΄μ§ λ‘λ© μ μμ§ νμνμ§ μμ μλ°μ€ν¬λ¦½νΈ μ½λκΉμ§ λΆλ¬μ€κΈ° λλ¬Έμ μ΅μ΄ νμ΄μ§ λ‘λ© μκ°μ΄ κΈΈμ΄μ§κ³  μ¬μ©μ κ²½νμ΄ λλΉ μ§λ€.
- κ·Έλμ μ½λ μ€νλ¦¬νμ ν΅ν΄ λΉμ₯ νμνμ§ μλ μλ°μ€ν¬λ¦½νΈ μ½λ λ° μ»΄ν¬λνΈλ€μ λΆλ¦¬μν€κ³  λμ€μ μ»΄ν¬λνΈκ° λ λλ§λλ μμ μ λΆλ¬μ¬ μ μμ΄ μ΅μ΄ νμ΄μ§ λ‘λ© μκ°μ κ°μ ν  μ μλ€.
