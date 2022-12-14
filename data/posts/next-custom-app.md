---
emoji: ๐
title: Custom App
date: "2022-06-10"
category: Nextjs
preview: "NextJS์์๋ ํ์ด์ง๋ฅผ ์ด๊ธฐํํ๊ธฐ ์ํด App ์ปดํฌ๋ํธ๋ฅผ ์ฌ์ฉํ๋ค. App ์ปดํฌ๋ํธ๋ pages/_app.tsx(js) ํ์ผ์ ์์ฑ๋๋ค. App ์ปดํฌ๋ํธ๋ฅผ overrideํ  ์ ์๊ณ , ํ์ด์ง ์ด๊ธฐํ๋ฅผ ๋ง์๋๋ก ์ค์ ํ  ์ ์๋ค. App ์ปดํฌ๋ํธ๋ฅผ ์ด์ฉํ์ฌ ๋ค์๊ณผ ๊ฐ์ ์ผ์ ํ  ์ ์๋ค. ํ์ด์ง ๋ณ๊ฒฝ ๊ฐ์ ๋ ์ด์์ ์ ์ง ํ์ด์ง ํ์ ์ ์ํ ์ ์ง componentDidCatch๋ฅผ ์ฌ์ฉํ custom ์๋ฌ ์ฒ๋ฆฌ ํ์ด์ง์ ์ถ๊ฐ ๋ฐ์ดํฐ ์ฝ์ Global CSS ์ถ๊ฐ"
---

> [NextJS ๊ณต์๋ฌธ์](https://nextjs.org/docs/advanced-features/custom-app)๋ฅผ ์ฐธ๊ณ ํ์ฌ ์์ฑํ์ต๋๋ค.

<br/>

# Custom App

NextJS์์๋ ํ์ด์ง๋ฅผ ์ด๊ธฐํํ๊ธฐ ์ํด App ์ปดํฌ๋ํธ๋ฅผ ์ฌ์ฉํ๋ค. App ์ปดํฌ๋ํธ๋ `pages/_app.tsx(js)` ํ์ผ์ ์์ฑ๋๋ค. App ์ปดํฌ๋ํธ๋ฅผ overrideํ  ์ ์๊ณ , ํ์ด์ง ์ด๊ธฐํ๋ฅผ ๋ง์๋๋ก ์ค์ ํ  ์ ์๋ค.

App ์ปดํฌ๋ํธ๋ฅผ ์ด์ฉํ์ฌ ๋ค์๊ณผ ๊ฐ์ ์ผ์ ํ  ์ ์๋ค.

- ํ์ด์ง ๋ณ๊ฒฝ ๊ฐ์ ๋ ์ด์์ ์ ์ง
- ํ์ด์ง ํ์ ์ ์ํ ์ ์ง
- componentDidCatch๋ฅผ ์ฌ์ฉํ custom ์๋ฌ ์ฒ๋ฆฌ
- ํ์ด์ง์ ์ถ๊ฐ ๋ฐ์ดํฐ ์ฝ์
- Global CSS ์ถ๊ฐ

<br/>

## App component

- `pages/_app.tsx(js)`์์ `export default`๋๋ ์ปดํฌ๋ํธ๊ฐ App component์ด๋ค. (์ด๋ฆ์ ์๊ด์์)
- ๋๊ฐ์ props๋ฅผ ๊ฐ๋๋ค.
  - `Component`: ํ์ฌ ํ๋ฉด์ ๋ณด์ฌ์ง๋ ํ์ด์ง ์ปดํฌ๋ํธ๋ฅผ ๋งํ๋ค. ํ์ด์ง ์ปดํฌ๋ํธ๋ pages ํด๋ ๋ด ํ์ผ์์ export default๋ ์ปดํฌ๋ํธ๋ฅผ ๋งํ๋ค.
  - `pageProps`: ํ์ด์ง ์ปดํฌ๋ํธ์์ ๋ฏธ๋ฆฌ ๋ก๋๋๋ ์ด๊ธฐ props๋ฅผ ๋งํ๋ค.

<br/>

## โ๏ธ Example

### Before

```jsx
// pages/index.tsx

import type { NextPage } from "next";
import NavBar from "../components/NavBar";

const Home: NextPage = () => {
  return (
    <div>
      <NavBar />
      <h1>Home</h1>
    </div>
  );
};

export default Home;
```

```jsx
// pages/about.tsx

import type { NextPage } from "next";
import NavBar from "../components/NavBar";

const About: NextPage = () => {
  return (
    <div>
      <NavBar />
      <h1>About</h1>
    </div>
  );
};

export default About;
```

```jsx
// pages/_app.tsx

import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
```

### After

```jsx
// pages/index.tsx

import type { NextPage } from "next";

const Home: NextPage = () => {
  return <h1>Home</h1>;
};

export default Home;
```

```jsx
// pages/about.tsx

import type { NextPage } from "next";

const About: NextPage = () => {
  return <h1>About</h1>;
};

export default About;
```

```jsx
// pages/_app.tsx

import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "../components/NavBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
```
