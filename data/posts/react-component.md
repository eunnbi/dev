---
emoji: ๐๏ธ
title: ์ปดํฌ๋ํธ
date: "2022-01-11"
category: React
preview: "'๋ฆฌ์กํธ๋ฅผ ๋ค๋ฃจ๋ ๊ธฐ์ '์ด๋ผ๋ ์ฑ์ ์ฝ๊ณ  ๋ฐฐ์ด ๊ฒ์ ๋ฐํ์ผ๋ก ์์ฑ๋์๋ค. ์ปดํฌ๋ํธ๋? ๋ ๋๋งํ  React element๋ฅผ ๋ฐํํ๋ ์ฌ์ฌ์ฉ ๊ฐ๋ฅํ ์ ์ธ์ฒด์ด๋ค. props์ state๋ฅผ ๊ด๋ฆฌํ๋ฉฐ ํ๋ฉด์ ๋ณด์ฌ์ง๋ ๊ธฐ๋ณธ ๋จ์์ด๋ค. ๋ฆฌ์กํธ์์๋ ์ปดํฌ๋ํธ๋ฅผ ๊ธฐ๋ฐ์ผ๋ก UI๋ฅผ ๊ตฌ์ฑํ๋ค. ์ปดํฌ๋ํธ ํ๋์ ์๊น์์ ๊ธฐ๋ฅ๋ค์ ์ ์ํ๋ค. ์ปดํฌ๋ํธ๋ ํธ๋ฆฌ ํํ๋ก ๊ตฌ์ฑ๋๋ฉฐ, ์์ ์ปดํฌ๋ํธ์์ ํ์ ์ปดํฌ๋ํธ๋ก์ ๋จ๋ฐฉํฅ์ ๋ฐ์ดํฐ ํ๋ฆ์ ๊ฐ๊ณ  ์๋ค. ์ปดํฌ๋ํธ๋ฅผ ์ ์ธํ๋ ๋ฐฉ์์ ๋ ๊ฐ์ง๊ฐ ์๋ค. ํด๋์คํ ์ปดํฌ๋ํธ๋ ํจ์ ์ปดํฌ๋ํธ์ ๋ฌ๋ฆฌ state ๋ฐ life cycle method๋ฅผ ์ฌ์ฉํ  ์ ์๋ค. render ๋ฉ์๋์์ React element๋ฅผ ๋ฐํํด์ผ ํ๋ค. ํจ์ํ ์ปดํฌ๋ํธ๋ ํด๋์คํ ์ปดํฌ๋ํธ๋ณด๋ค ์ ์ธํ๊ธฐ ํธํ๊ณ , ๋ฉ๋ชจ๋ฆฌ ์์๋ ํด๋์คํ ์ปดํฌ๋ํธ๋ณด๋ค ๋ ์ฌ์ฉํ๋ค. state์ life cycle method๋ฅผ ์ฌ์ฉํ์ง ๋ชปํ์ง๋ง, v16.8 ์๋ฐ์ดํธ ์ดํ Hooks์ด๋ผ๋ ๊ธฐ๋ฅ์ด ๋์๋๋ฉด์ ํด๊ฒฐ๋์๋ค. ๋ฆฌ์กํธ ๊ณต์ ๋ฌธ์์์๋ ํจ์ ์ปดํฌ๋ํธ์ `Hooks`๋ฅผ ์ฌ์ฉํ๋๋ก ๊ถ์ฅํ๊ณ  ์๋ค. return๋ฌธ์์ React element๋ฅผ ๋ฐํํด์ผ ํ๋ค."
---

> "๋ฆฌ์กํธ๋ฅผ ๋ค๋ฃจ๋ ๊ธฐ์ "์ด๋ผ๋ ์ฑ์ ์ฝ๊ณ  ๋ฐฐ์ด ๊ฒ์ ๋ฐํ์ผ๋ก ์์ฑ๋์๋ค.

# ์ปดํฌ๋ํธ๋?

- **๋ ๋๋งํ  React element๋ฅผ ๋ฐํํ๋ ์ฌ์ฌ์ฉ ๊ฐ๋ฅํ ์ ์ธ์ฒด**์ด๋ค.
- **props์ state๋ฅผ ๊ด๋ฆฌํ๋ฉฐ ํ๋ฉด์ ๋ณด์ฌ์ง๋ ๊ธฐ๋ณธ ๋จ์**์ด๋ค.
- ๋ฆฌ์กํธ์์๋ ์ปดํฌ๋ํธ๋ฅผ ๊ธฐ๋ฐ์ผ๋ก UI๋ฅผ ๊ตฌ์ฑํ๋ค.
- ์ปดํฌ๋ํธ ํ๋์ ์๊น์์ ๊ธฐ๋ฅ๋ค์ ์ ์ํ๋ค.
- ์ปดํฌ๋ํธ๋ ํธ๋ฆฌ ํํ๋ก ๊ตฌ์ฑ๋๋ฉฐ, ์์ ์ปดํฌ๋ํธ์์ ํ์ ์ปดํฌ๋ํธ๋ก์ ๋จ๋ฐฉํฅ์ ๋ฐ์ดํฐ ํ๋ฆ์ ๊ฐ๊ณ  ์๋ค.

<br/>

## ์ปดํฌ๋ํธ ์ข๋ฅ

- ์ปดํฌ๋ํธ๋ฅผ ์ ์ธํ๋ ๋ฐฉ์์ ๋ ๊ฐ์ง๊ฐ ์๋ค.

### ํด๋์คํ ์ปดํฌ๋ํธ

- ํด๋์คํ ์ปดํฌ๋ํธ๋ ํจ์ ์ปดํฌ๋ํธ์ ๋ฌ๋ฆฌ `state` ๋ฐ `life cycle method`๋ฅผ ์ฌ์ฉํ  ์ ์๋ค.
- `render` ๋ฉ์๋์์ React element๋ฅผ ๋ฐํํด์ผ ํ๋ค.

### ํจ์ํ ์ปดํฌ๋ํธ

- ํด๋์คํ ์ปดํฌ๋ํธ๋ณด๋ค ์ ์ธํ๊ธฐ ํธํ๊ณ , ๋ฉ๋ชจ๋ฆฌ ์์๋ ํด๋์คํ ์ปดํฌ๋ํธ๋ณด๋ค ๋ ์ฌ์ฉํ๋ค.
- `state`์ `life cycle method`๋ฅผ ์ฌ์ฉํ์ง ๋ชปํ์ง๋ง, `v16.8` ์๋ฐ์ดํธ ์ดํ `Hooks`์ด๋ผ๋ ๊ธฐ๋ฅ์ด ๋์๋๋ฉด์ ํด๊ฒฐ๋์๋ค.
- ๋ฆฌ์กํธ ๊ณต์ ๋ฌธ์์์๋ ํจ์ ์ปดํฌ๋ํธ์ `Hooks`๋ฅผ ์ฌ์ฉํ๋๋ก ๊ถ์ฅํ๊ณ  ์๋ค.
- return๋ฌธ์์ React element๋ฅผ ๋ฐํํด์ผ ํ๋ค.

<br/>

## ๋ชจ๋ ๋ด๋ณด๋ด๊ธฐ ๋ฐ ๋ถ๋ฌ์ค๊ธฐ

์ ์ธ๋ ์ปดํฌ๋ํธ๋ ๋ชจ๋๋ก ๋ด๋ณด๋ด๊ฑฐ๋ ๋ถ๋ฌ์ฌ ์ ์๋ค.

### ๋ชจ๋ ๋ด๋ณด๋ด๊ธฐ (export)

```jsx
const MyComponent = () => {
  return <div>new component</div>;
};
export default MyComponent;
```

### ๋ชจ๋ ๋ถ๋ฌ์ค๊ธฐ (import)

```jsx
import MyComponent from "./MyComponent";

const App = () => {
  return <MyComponent />;
};

export default App;
```
