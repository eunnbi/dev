---
emoji: 🗺️
title: Layout & Head
date: "2022-06-13"
category: Nextjs
preview: ""
---

> NextJS 공식문서 👍
>
> - [Layout](https://nextjs.org/docs/basic-features/layouts)
> - [Head](https://nextjs.org/docs/api-reference/next/head)

# Layout

`navigation`이나 `footer`와 같은 **공통 레이아웃**은 Layout component로 만들고 `_app.tsx`에 `import`하여 렌더링한다.

**1. Single Shared Layout with Custom App**

```jsx
// components/Layout.js
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
```

```jsx
// pages/_app.js
import Layout from "../components/layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
```

**2. Per-Page Layouts**

```tsx
// pages/index.tsx
import type { ReactElement } from "react";
import Layout from "../components/layout";
import NestedLayout from "../components/nested-layout";
import type { NextPageWithLayout } from "./_app";

const Page: NextPageWithLayout = () => {
  return <p>hello world</p>;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  );
};

export default Page;
```

```tsx
// pages/_app.tsx
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => page);
  return getLayout(<Component {...pageProps} />);
}
```

# Head

- `Head component`의 `children`으로 들어가는 태그들이 `html`의 `head` 태그안에 보여질 것이다.
  **Head component는 html의 head 태그와 비슷한 역할을 한다.**
- 검색 엔진 최적화에서 `head` 태그를 잘 작성하는 것이 중요하다!

```jsx
// components/CustomHead.js
import Head from "next/head";

const CustomHead = ({ title, description }) => {
  return (
    <Head>
      <title>{`${title} | Next Movies`}</title>
    </Head>
  );
};

export default CustomHead;
```

```jsx
// pages/index.js
const Home: NextPage = () => {
  return (
    <div>
      <CustomHead title="Home" />
      <h1>Home</h1>
    </div>
  );
};

export default Home;
```

```jsx
// pages/about.js
const About: NextPage = () => {
  return (
    <div>
      <CustomHead title="About" />
      <h1>About</h1>
    </div>
  );
};

export default About;
```
