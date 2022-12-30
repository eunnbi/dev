---
emoji: 💅
title: Custom App
date: "2022-06-10"
category: Nextjs
preview: "
NextJS에서는 페이지를 초기화하기 위해 App 컴포넌트를 사용한다. App 컴포넌트는 pages/_app.tsx(js) 파일에 작성된다. App 컴포넌트를 override할 수 있고, 페이지 초기화를 마음대로 설정할 수 있다. App 컴포넌트를 이용하여 다음과 같은 일을 할 수 있다. 페이지 변경 간에 레이아웃 유지 페이지 탐색 시 상태 유지 componentDidCatch를 사용한 custom 에러 처리 페이지에 추가 데이터 삽입 Global CSS 추가"
---

> [NextJS 공식문서](https://nextjs.org/docs/advanced-features/custom-app)를 참고하여 작성했습니다.

<br/>

# Custom App

NextJS에서는 페이지를 초기화하기 위해 App 컴포넌트를 사용한다. App 컴포넌트는 `pages/_app.tsx(js)` 파일에 작성된다. App 컴포넌트를 override할 수 있고, 페이지 초기화를 마음대로 설정할 수 있다.

App 컴포넌트를 이용하여 다음과 같은 일을 할 수 있다.

- 페이지 변경 간에 레이아웃 유지
- 페이지 탐색 시 상태 유지
- componentDidCatch를 사용한 custom 에러 처리
- 페이지에 추가 데이터 삽입
- Global CSS 추가

<br/>

## App component

- `pages/_app.tsx(js)`에서 `export default`되는 컴포넌트가 App component이다. (이름은 상관없음)
- 두개의 props를 갖는다.
  - `Component`: 현재 화면에 보여지는 페이지 컴포넌트를 말한다. 페이지 컴포넌트는 pages 폴더 내 파일에서 export default된 컴포넌트를 말한다.
  - `pageProps`: 페이지 컴포넌트에서 미리 로드되는 초기 props를 말한다.

<br/>

## ✔️ Example

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
