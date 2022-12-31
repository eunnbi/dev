---
emoji: 💎
title: Next.js의 Pre-rendering
date: "2022-07-14"
category: Nextjs
preview: ""
---

> [NextJS 공식문서](https://nextjs.org/docs/basic-features/pages#pre-rendering)를 참고하여 작성했습니다.

<br/>

# Pre-rendering

- 기본적으로 NextJS는 모든 페이지를 pre-rendering 한다.
- 클라이언트 측 자바스크립트가 로드되기 전에 미리 페이지 별 HTML 파일을 만든다.
- 데이터가 있는 HTML 파일을 미리 만들어 pre-rendering하기 때문에, 사용자 경험이 좋고, 검색 엔진 최적화에 좋다.

> [Pre-rendering vs No Pre-rendering](https://nextjs.org/learn/basics/data-fetching/pre-rendering) <br/> ![Pre-rendering using Next.js](1.png) <br/> ![No Pre-rendering using React.js](2.png)

<br>

# Static Generation vs Server-side Rendering

NextJS에서는 두가지 형태의 pre-rendering 방식을 제공한다. **언제** HTML을 만드냐의 차이를 가지고 있다.

1. **Static Generation**
   - **빌드 타임**에 HTML 파일을 생성한다.
   - 미리 만들어진 HTML 파일은 사용자 요청마다 재사용된다.
2. **Server-side Rendering**
   - **사용자 요청마다** HTML 파일을 생성한다.

> [SG vs SSR](https://nextjs.org/learn/basics/data-fetching/two-forms) ![Static Generation](3.png) ![Server-side Rendering](4.png)

<br/>

## 둘 중 무엇을 사용해야 할까? 🤔

- 공식문서에서는 **사용자 요청에 앞서 페이지를 미리 렌더링할 수 있으면** Static Generation을 사용하라고 권장한다.
  - 마케팅 페이지, 블로그 포스트 등
- 만약 페이지가 **빈번히 업데이트되는 데이터를 보여줘야 하고**, **매 요청마다 페이지 내용이 바뀌어야 한다면** Sever-side Rendering을 이용해야 한다.

<br/>

## Static Generation without data

기본적으로, 외부 data를 가져올 필요 없는 페이지는 자동으로 Static Generation을 통해 pre-rendering 된다.

```jsx
// pages/about.jsx
function About() {
  return <div>About</div>;
}

export default About;
// about page의 html 파일이 빌드 타임에 만들어짐. (data fetching X)
```

> ![Static Generation without data](5.png)

<br/>

## Static Generation with data

일부 페이지는 pre-rendering을 위해 외부 데이터를 가져와야 할 수 있다. (파일 시스템 접근, 외부 API 호출 등등)

1. 페이지 **콘텐츠**가 외부 데이터에 의존한다. => `getStaticProps`
2. 페이지 **경로**가 외부 데이터에 의존한다. => `getStaticPaths`

### getStaticProps

```jsx
// props를 전달받은 데이터를 이용하여 빌드 타임 때 html 파일 생성
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

// 이 함수는 빌드 타임 때 호출된다.
export async function getStaticProps() {
  const res = await fetch("https://.../posts");
  const posts = await res.json();
  return {
    props: { posts } // 외부에서 가져온 데이터를 props로 전달
  };
}
```

> [getStaticProps 더 알아보기](https://nextjs.org/docs/basic-features/data-fetching/get-static-props)

<br/>

### getStaticPaths

- NextJS에서는 [Dynamic Routes](https://nextjs.org/docs/routing/dynamic-routes)를 이용하여 페이지를 만들 수 있다.
  - `pages/posts/[id].js`
- getStaticPaths를 사용하여 원하는 경로의 페이지들을 빌드 타임 때 pre-rendering하도록 정할 수 있다.

```jsx
function Post({ post }) {
  // Render post...
}

export default Post;

// 이 함수는 빌드 타임 때 호출되고, pre-rendering하고 싶은 path들을 정할 수 있다.
export async function getStaticPaths() {
  const res = await fetch("https://.../posts");
  const posts = await res.json();

  // pre-rendering하고 싶은 path들
  const paths = posts.map(post => ({
    params: { id: post.id }
  }));

  // paths 배열에 있는 경로의 페이지만 빌드 타임 때 pre-rendering한다.
  // { fallback: false } : 다른 route들은 404
  return { paths, fallback: false };
}

// 빌드 타임 때 호출
export async function getStaticprops({ params }) {
  const res = await fetch(`https://.../posts/${params.id}`);
  const post = await res.json();

  return { props: { post } }; // 외부에서 가져온 데이터를 props로 전달
}
```

> [getStaticPaths 더 알아보기](https://nextjs.org/docs/basic-features/data-fetching/get-static-paths)

<br/>

## Server-side Rendering

Server-side Rendering을 하기 위해서 `getServerSideProps` 혹은 `getInitialProps`를 이용해야 한다.

### getSeverSideProps

```jsx
function Page({ data }) {
  // Render data...
}

// 이 함수는 매 요청마다 호출된다.
export async function getServerSideProps() {
  const res = await fetch(`https://.../data`);
  const data = await res.json();

  return { props: { data } }; // 외부에서 가져온 데이터를 props로 전달
}

export default Page;
```

- `getServerSideProps`는 매 요청마다 서버에 의해 호출된다.
- 그래서 빈번히 업데이트되는 데이터를 보여주는 페이지에서 유용하게 사용된다.
- `getStaticProps`와 비슷하게 생겼지만, 함수 호출 시점이 다르고, 더 느리다.

> [getServerSideProps 더 알아보기](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props)

<br/>

### getInitialProps

`getInitialProps`도 `SSR`를 가능하게 한다.

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

- **initial data population** (초기 데이터 채우기)을 통해 데이터가 채워진 HTML 파일이 만들어지고 pre-rendering 한다.

> [getInitialProps 더 알아보기](https://nextjs.org/docs/api-reference/data-fetching/get-initial-props)

<br/>

### getServerSideProps vs getInitialProps

- 둘의 공통점은 서버 사이드에서 실행되고 가져온 데이터로 채워진 html 파일을 pre-rendering 해준다.
- `getServerSideProps`는 항상 서버 사이드에서 실행되지만, `getInitialProps`는 클라이언트 사이드에서도 실행될 수 있다.
  - 페이지가 처음 로드되는 경우, 서버 사이드에서 실행되고, `next/link` 혹은 `next/router`를 통해 페이지를 이동하는 경우 클라이언트 사이드에서 실행된다.
- `getInitialProps`는 [Automatic Static Optimization](https://nextjs.org/docs/advanced-features/automatic-static-optimization)을 지원하지 않는다. 그래서인지 공식문서에서 `getServerSideProps`를 사용하라고 권장한다.

<br/>

# Client-side Rendering

만약 페이지가 보여주는 데이터가 유저 정보와 같이 개인적이거나, SEO와 관련 없다면 해당 페이지를 pre-rendering할 필요가 없다. 이럴 경우 Client-side Rendering을 이용하면 된다.

`getStaticProps`나 `getServerSideProps` 함수를 사용할 필요 없이 클라이언트 측에서 api를 호출하여 데이터를 가져와 렌더링하면 된다.

```jsx
function Profile() {
  const { data, status } = useQuery("/api/user", getUserInfo);

  if (status === "loading") return <div>loading...</div>;
  return <div>hello {data.name}!</div>;
}
```

<br/>

> 👀 페이지의 성격을 파악해서 렌더링 방식을 선택해야 한다.
