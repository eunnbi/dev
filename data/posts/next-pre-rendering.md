---
emoji: ๐
title: Next.js์ Pre-rendering
date: "2022-07-14"
category: Nextjs
preview: "๊ธฐ๋ณธ์ ์ผ๋ก NextJS๋ ๋ชจ๋  ํ์ด์ง๋ฅผ pre-rendering ํ๋ค. ํด๋ผ์ด์ธํธ ์ธก ์๋ฐ์คํฌ๋ฆฝํธ๊ฐ ๋ก๋๋๊ธฐ ์ ์ ๋ฏธ๋ฆฌ ํ์ด์ง ๋ณ HTML ํ์ผ์ ๋ง๋ ๋ค. ๋ฐ์ดํฐ๊ฐ ์๋ HTML ํ์ผ์ ๋ฏธ๋ฆฌ ๋ง๋ค์ด pre-renderingํ๊ธฐ ๋๋ฌธ์, ์ฌ์ฉ์ ๊ฒฝํ์ด ์ข๊ณ , ๊ฒ์ ์์ง ์ต์ ํ์ ์ข๋ค. NextJS์์๋ ๋๊ฐ์ง ํํ์ pre-rendering ๋ฐฉ์์ ์ ๊ณตํ๋ค. ์ธ์  HTML์ ๋ง๋๋์ ์ฐจ์ด๋ฅผ ๊ฐ์ง๊ณ  ์๋ค. Static Generation ๋น๋ ํ์์ HTML ํ์ผ์ ์์ฑํ๋ค. ๋ฏธ๋ฆฌ ๋ง๋ค์ด์ง HTML ํ์ผ์ ์ฌ์ฉ์ ์์ฒญ๋ง๋ค ์ฌ์ฌ์ฉ๋๋ค. Server-side Rendering ์ฌ์ฉ์ ์์ฒญ๋ง๋ค HTML ํ์ผ์ ์์ฑํ๋ค. ๋ ์ค ๋ฌด์์ ์ฌ์ฉํด์ผ ํ ๊น? ๐ค ๊ณต์๋ฌธ์์์๋ ์ฌ์ฉ์ ์์ฒญ์ ์์ ํ์ด์ง๋ฅผ ๋ฏธ๋ฆฌ ๋ ๋๋งํ  ์ ์์ผ๋ฉด Static Generation์ ์ฌ์ฉํ๋ผ๊ณ  ๊ถ์ฅํ๋ค. ๋ง์ฝ ํ์ด์ง๊ฐ ๋น๋ฒํ ์๋ฐ์ดํธ๋๋ ๋ฐ์ดํฐ๋ฅผ ๋ณด์ฌ์ค์ผ ํ๊ณ , ๋งค ์์ฒญ๋ง๋ค ํ์ด์ง ๋ด์ฉ์ด ๋ฐ๋์ด์ผ ํ๋ค๋ฉด Sever-side Rendering์ ์ด์ฉํด์ผ ํ๋ค."
---

> [NextJS ๊ณต์๋ฌธ์](https://nextjs.org/docs/basic-features/pages#pre-rendering)๋ฅผ ์ฐธ๊ณ ํ์ฌ ์์ฑํ์ต๋๋ค.

<br/>

# Pre-rendering

- ๊ธฐ๋ณธ์ ์ผ๋ก NextJS๋ ๋ชจ๋  ํ์ด์ง๋ฅผ pre-rendering ํ๋ค.
- ํด๋ผ์ด์ธํธ ์ธก ์๋ฐ์คํฌ๋ฆฝํธ๊ฐ ๋ก๋๋๊ธฐ ์ ์ ๋ฏธ๋ฆฌ ํ์ด์ง ๋ณ HTML ํ์ผ์ ๋ง๋ ๋ค.
- ๋ฐ์ดํฐ๊ฐ ์๋ HTML ํ์ผ์ ๋ฏธ๋ฆฌ ๋ง๋ค์ด pre-renderingํ๊ธฐ ๋๋ฌธ์, ์ฌ์ฉ์ ๊ฒฝํ์ด ์ข๊ณ , ๊ฒ์ ์์ง ์ต์ ํ์ ์ข๋ค.

> [Pre-rendering vs No Pre-rendering](https://nextjs.org/learn/basics/data-fetching/pre-rendering) <br/> ![Pre-rendering using Next.js](1.png) <br/> ![No Pre-rendering using React.js](2.png)

<br>

# Static Generation vs Server-side Rendering

NextJS์์๋ ๋๊ฐ์ง ํํ์ pre-rendering ๋ฐฉ์์ ์ ๊ณตํ๋ค. **์ธ์ ** HTML์ ๋ง๋๋์ ์ฐจ์ด๋ฅผ ๊ฐ์ง๊ณ  ์๋ค.

1. **Static Generation**
   - **๋น๋ ํ์**์ HTML ํ์ผ์ ์์ฑํ๋ค.
   - ๋ฏธ๋ฆฌ ๋ง๋ค์ด์ง HTML ํ์ผ์ ์ฌ์ฉ์ ์์ฒญ๋ง๋ค ์ฌ์ฌ์ฉ๋๋ค.
2. **Server-side Rendering**
   - **์ฌ์ฉ์ ์์ฒญ๋ง๋ค** HTML ํ์ผ์ ์์ฑํ๋ค.

> [SG vs SSR](https://nextjs.org/learn/basics/data-fetching/two-forms) ![Static Generation](3.png) ![Server-side Rendering](4.png)

<br/>

## ๋ ์ค ๋ฌด์์ ์ฌ์ฉํด์ผ ํ ๊น? ๐ค

- ๊ณต์๋ฌธ์์์๋ **์ฌ์ฉ์ ์์ฒญ์ ์์ ํ์ด์ง๋ฅผ ๋ฏธ๋ฆฌ ๋ ๋๋งํ  ์ ์์ผ๋ฉด** Static Generation์ ์ฌ์ฉํ๋ผ๊ณ  ๊ถ์ฅํ๋ค.
  - ๋ง์ผํ ํ์ด์ง, ๋ธ๋ก๊ทธ ํฌ์คํธ ๋ฑ
- ๋ง์ฝ ํ์ด์ง๊ฐ **๋น๋ฒํ ์๋ฐ์ดํธ๋๋ ๋ฐ์ดํฐ๋ฅผ ๋ณด์ฌ์ค์ผ ํ๊ณ **, **๋งค ์์ฒญ๋ง๋ค ํ์ด์ง ๋ด์ฉ์ด ๋ฐ๋์ด์ผ ํ๋ค๋ฉด** Sever-side Rendering์ ์ด์ฉํด์ผ ํ๋ค.

<br/>

## Static Generation without data

๊ธฐ๋ณธ์ ์ผ๋ก, ์ธ๋ถ data๋ฅผ ๊ฐ์ ธ์ฌ ํ์ ์๋ ํ์ด์ง๋ ์๋์ผ๋ก Static Generation์ ํตํด pre-rendering ๋๋ค.

```jsx
// pages/about.jsx
function About() {
  return <div>About</div>;
}

export default About;
// about page์ html ํ์ผ์ด ๋น๋ ํ์์ ๋ง๋ค์ด์ง. (data fetching X)
```

> ![Static Generation without data](5.png)

<br/>

## Static Generation with data

์ผ๋ถ ํ์ด์ง๋ pre-rendering์ ์ํด ์ธ๋ถ ๋ฐ์ดํฐ๋ฅผ ๊ฐ์ ธ์์ผ ํ  ์ ์๋ค. (ํ์ผ ์์คํ ์ ๊ทผ, ์ธ๋ถ API ํธ์ถ ๋ฑ๋ฑ)

1. ํ์ด์ง **์ฝํ์ธ **๊ฐ ์ธ๋ถ ๋ฐ์ดํฐ์ ์์กดํ๋ค. => `getStaticProps`
2. ํ์ด์ง **๊ฒฝ๋ก**๊ฐ ์ธ๋ถ ๋ฐ์ดํฐ์ ์์กดํ๋ค. => `getStaticPaths`

### getStaticProps

```jsx
// props๋ฅผ ์ ๋ฌ๋ฐ์ ๋ฐ์ดํฐ๋ฅผ ์ด์ฉํ์ฌ ๋น๋ ํ์ ๋ html ํ์ผ ์์ฑ
function Blog({ posts }) {
  return (
    <ul>
      {posts.map(post => (
        <li>{post.title}</li>
      ))}
    </ul>
  );
}

export default Blog;

// ์ด ํจ์๋ ๋น๋ ํ์ ๋ ํธ์ถ๋๋ค.
export async function getStaticProps() {
  const res = await fetch("https://.../posts");
  const posts = await res.json();
  return {
    props: { posts } // ์ธ๋ถ์์ ๊ฐ์ ธ์จ ๋ฐ์ดํฐ๋ฅผ props๋ก ์ ๋ฌ
  };
}
```

> [getStaticProps ๋ ์์๋ณด๊ธฐ](https://nextjs.org/docs/basic-features/data-fetching/get-static-props)

<br/>

### getStaticPaths

- NextJS์์๋ [Dynamic Routes](https://nextjs.org/docs/routing/dynamic-routes)๋ฅผ ์ด์ฉํ์ฌ ํ์ด์ง๋ฅผ ๋ง๋ค ์ ์๋ค.
  - `pages/posts/[id].js`
- getStaticPaths๋ฅผ ์ฌ์ฉํ์ฌ ์ํ๋ ๊ฒฝ๋ก์ ํ์ด์ง๋ค์ ๋น๋ ํ์ ๋ pre-renderingํ๋๋ก ์ ํ  ์ ์๋ค.

```jsx
function Post({ post }) {
  // Render post...
}

export default Post;

// ์ด ํจ์๋ ๋น๋ ํ์ ๋ ํธ์ถ๋๊ณ , pre-renderingํ๊ณ  ์ถ์ path๋ค์ ์ ํ  ์ ์๋ค.
export async function getStaticPaths() {
  const res = await fetch("https://.../posts");
  const posts = await res.json();

  // pre-renderingํ๊ณ  ์ถ์ path๋ค
  const paths = posts.map(post => ({
    params: { id: post.id }
  }));

  // paths ๋ฐฐ์ด์ ์๋ ๊ฒฝ๋ก์ ํ์ด์ง๋ง ๋น๋ ํ์ ๋ pre-renderingํ๋ค.
  // { fallback: false } : ๋ค๋ฅธ route๋ค์ 404
  return { paths, fallback: false };
}

// ๋น๋ ํ์ ๋ ํธ์ถ
export async function getStaticprops({ params }) {
  const res = await fetch(`https://.../posts/${params.id}`);
  const post = await res.json();

  return { props: { post } }; // ์ธ๋ถ์์ ๊ฐ์ ธ์จ ๋ฐ์ดํฐ๋ฅผ props๋ก ์ ๋ฌ
}
```

> [getStaticPaths ๋ ์์๋ณด๊ธฐ](https://nextjs.org/docs/basic-features/data-fetching/get-static-paths)

<br/>

## Server-side Rendering

Server-side Rendering์ ํ๊ธฐ ์ํด์ `getServerSideProps` ํน์ `getInitialProps`๋ฅผ ์ด์ฉํด์ผ ํ๋ค.

### getSeverSideProps

```jsx
function Page({ data }) {
  // Render data...
}

// ์ด ํจ์๋ ๋งค ์์ฒญ๋ง๋ค ํธ์ถ๋๋ค.
export async function getServerSideProps() {
  const res = await fetch(`https://.../data`);
  const data = await res.json();

  return { props: { data } }; // ์ธ๋ถ์์ ๊ฐ์ ธ์จ ๋ฐ์ดํฐ๋ฅผ props๋ก ์ ๋ฌ
}

export default Page;
```

- `getServerSideProps`๋ ๋งค ์์ฒญ๋ง๋ค ์๋ฒ์ ์ํด ํธ์ถ๋๋ค.
- ๊ทธ๋์ ๋น๋ฒํ ์๋ฐ์ดํธ๋๋ ๋ฐ์ดํฐ๋ฅผ ๋ณด์ฌ์ฃผ๋ ํ์ด์ง์์ ์ ์ฉํ๊ฒ ์ฌ์ฉ๋๋ค.
- `getStaticProps`์ ๋น์ทํ๊ฒ ์๊ฒผ์ง๋ง, ํจ์ ํธ์ถ ์์ ์ด ๋ค๋ฅด๊ณ , ๋ ๋๋ฆฌ๋ค.

> [getServerSideProps ๋ ์์๋ณด๊ธฐ](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props)

<br/>

### getInitialProps

`getInitialProps`๋ `SSR`๋ฅผ ๊ฐ๋ฅํ๊ฒ ํ๋ค.

```jsx
function Page({ stars }) {
  return <div>Next stars: {stars}</div>;
}

Page.getInitialProps = async ctx => {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const json = await res.json();
  return { stars: json.stargazers_count };
};

export default Page;
```

- **initial data population** (์ด๊ธฐ ๋ฐ์ดํฐ ์ฑ์ฐ๊ธฐ)์ ํตํด ๋ฐ์ดํฐ๊ฐ ์ฑ์์ง HTML ํ์ผ์ด ๋ง๋ค์ด์ง๊ณ  pre-rendering ํ๋ค.

> [getInitialProps ๋ ์์๋ณด๊ธฐ](https://nextjs.org/docs/api-reference/data-fetching/get-initial-props)

<br/>

### getServerSideProps vs getInitialProps

- ๋์ ๊ณตํต์ ์ ์๋ฒ ์ฌ์ด๋์์ ์คํ๋๊ณ  ๊ฐ์ ธ์จ ๋ฐ์ดํฐ๋ก ์ฑ์์ง html ํ์ผ์ pre-rendering ํด์ค๋ค.
- `getServerSideProps`๋ ํญ์ ์๋ฒ ์ฌ์ด๋์์ ์คํ๋์ง๋ง, `getInitialProps`๋ ํด๋ผ์ด์ธํธ ์ฌ์ด๋์์๋ ์คํ๋  ์ ์๋ค.
  - ํ์ด์ง๊ฐ ์ฒ์ ๋ก๋๋๋ ๊ฒฝ์ฐ, ์๋ฒ ์ฌ์ด๋์์ ์คํ๋๊ณ , `next/link` ํน์ `next/router`๋ฅผ ํตํด ํ์ด์ง๋ฅผ ์ด๋ํ๋ ๊ฒฝ์ฐ ํด๋ผ์ด์ธํธ ์ฌ์ด๋์์ ์คํ๋๋ค.
- `getInitialProps`๋ [Automatic Static Optimization](https://nextjs.org/docs/advanced-features/automatic-static-optimization)์ ์ง์ํ์ง ์๋๋ค. ๊ทธ๋์์ธ์ง ๊ณต์๋ฌธ์์์ `getServerSideProps`๋ฅผ ์ฌ์ฉํ๋ผ๊ณ  ๊ถ์ฅํ๋ค.

<br/>

# Client-side Rendering

๋ง์ฝ ํ์ด์ง๊ฐ ๋ณด์ฌ์ฃผ๋ ๋ฐ์ดํฐ๊ฐ ์ ์  ์ ๋ณด์ ๊ฐ์ด ๊ฐ์ธ์ ์ด๊ฑฐ๋, SEO์ ๊ด๋ จ ์๋ค๋ฉด ํด๋น ํ์ด์ง๋ฅผ pre-renderingํ  ํ์๊ฐ ์๋ค. ์ด๋ด ๊ฒฝ์ฐ Client-side Rendering์ ์ด์ฉํ๋ฉด ๋๋ค.

`getStaticProps`๋ `getServerSideProps` ํจ์๋ฅผ ์ฌ์ฉํ  ํ์ ์์ด ํด๋ผ์ด์ธํธ ์ธก์์ api๋ฅผ ํธ์ถํ์ฌ ๋ฐ์ดํฐ๋ฅผ ๊ฐ์ ธ์ ๋ ๋๋งํ๋ฉด ๋๋ค.

```jsx
function Profile() {
  const { data, status } = useQuery("/api/user", getUserInfo);

  if (status === "loading") return <div>loading...</div>;
  return <div>hello {data.name}!</div>;
}
```

<br/>

> ๐ ํ์ด์ง์ ์ฑ๊ฒฉ์ ํ์ํด์ ๋ ๋๋ง ๋ฐฉ์์ ์ ํํด์ผ ํ๋ค.
