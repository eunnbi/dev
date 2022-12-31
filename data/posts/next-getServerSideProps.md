---
emoji: ✨
title: getServerSideProps
date: "2022-06-13"
category: Nextjs
preview: "NextJS에서 getServerSideProps 함수를 이용하여 페이지를 Server-side Rendering할 수 있다. 페이지에서 getServerSideProps 함수를 export하는 경우 Next.js는 getServerSideProps가 반환하는 데이터를 사용하여 페이지를 pre-rendering한다. 이때 함수는 페이지 요청마다 실행되고 함수가 반환하는 데이터는 페이지 컴포넌트의 props로 전달된다. 서버 측에서만 실행되며 브라우저에서는 실행되지 않는다. 👉 영화 GET api를 호출하여 Home Page에 영화 정보들을 보여주려 한다. Home Page에 들어오면 client 측에서 GET api 요청 (React Query 사용) 🔎 확대해서 보면 Home Page html 파일 body에는 <h4>Loading...</h4>만 있고 영화 데이터는 없다. getServerSideProps 함수에서 영화 GET api를 호출하고 영화 데이터를 반환하여 pre-rendering하기 🔎 확대해서 보면 Home Page html 파일 body에 영화 데이터가 있다. 👍 getServerSideProps 함수를 이용하면 페이지에 필요한 데이터를 포함하여 pre-rendering할 수 있다. 👍 html 파일에 데이터가 있기 때문에 SEO에 좋다. 👎 만약 API를 사용할 경우 속도가 느리다면, 유저는 아무것도 보지 못한 채로 오래 기다려야 한다."
---

> NextJS에서 **getServerSideProps** 함수를 이용하여 페이지를 Server-side Rendering할 수 있다.

> [NextJS 공식문서 - getServerSideProps](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props)

<br/>

## getServerSideProps에 대해 알아보자 🤓

```javascript
export async function getServerSideProps(context) {
  return {
    props: {} // will be passed to the page component as props
  };
}
```

- 페이지에서 `getServerSideProps` 함수를 `export`하는 경우 Next.js는 `getServerSideProps`가 반환하는 데이터를 사용하여 페이지를 pre-rendering한다.
- 이때 함수는 페이지 요청마다 실행되고 함수가 반환하는 데이터는 페이지 컴포넌트의 props로 전달된다.
- 서버 측에서만 실행되며 브라우저에서는 실행되지 않는다.

<br/>

**Example**<br/>
👉 영화 GET api를 호출하여 Home Page에 영화 정보들을 보여주려 한다.

1. Home Page에 들어오면 client 측에서 GET api 요청 (React Query 사용)

```tsx
// pages/index.tsx
import { useQuery } from "react-query";
import CustomHead from "../components/CustomHead";
import Movie from "../components/Movie";
import { getMovies, IMovieProps } from "../lib/api/movies";
import styled from "styled-components";

// ...

const Home = () => {
  const { data: movies, status } = useQuery(["movies", "popular"], () =>
    getMovies()
  );
  if (status === "loading") {
    return <h4>Loading...</h4>;
  }
  return (
    <HomeMain>
      <CustomHead title="Home" />
      {movies.map((movie: IMovieProps) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </HomeMain>
  );
};

export default Home;
```

```ts
// lib/api/movies.ts
import axios from "axios";

export const getMovies = async () => {
  const { data } = await axios.get("/api/movies");
  return data.results;
};

export interface IGetMoviesProps {
  page: number;
  results: IMovieProps[];
  total_pages: number;
  total_results: number;
}

export interface IMovieProps {
  id: number;
  backdrop_path: string;
  original_title: string;
  overview: string;
  poster_path: string;
  title: string;
  vote_average: number;
  genre_ids: number[];
}
```

![Not SSR Page HTML File](1.png)

> 🔎 확대해서 보면 Home Page `html` 파일 body에는 `<h4>Loading...</h4>`만 있고 **영화 데이터는 없다.**

<br/>

2. `getServerSideProps` 함수에서 영화 GET api를 호출하고 영화 데이터를 반환하여 pre-rendering하기

```tsx
// pages/index.tsx
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import CustomHead from "../components/CustomHead";
import Movie from "../components/Movie";
import { IMovieProps } from "../lib/api/movies";
import styled from "styled-components";

// ...

const Home = ({ results }: InferGetServerSidePropsType<GetServerSideProps>) => {
  return (
    <HomeMain>
      <CustomHead title="Home" />
      {results?.map((movie: IMovieProps) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </HomeMain>
  );
};

export default Home;

// 페이지 request마다 실행됨.
export async function getServerSideProps() {
  const { results } = await (
    await fetch("http://localhost:3000/api/movies")
  ) // absolute URL (Server Side)
    .json();
  return {
    props: { results } // props를 통해 page에 data전달
  };
}
```

```tsx
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} /> // getServerSideProps함수가 반환한 데이터는
        페이지 컴포넌트에 pageProps로 전달됨
      </Layout>
    </QueryClientProvider>
  );
}

export default MyApp;
```

![SSR Page HTML File](2.png)

> 🔎 확대해서 보면 Home Page `html` 파일 body에 **영화 데이터가 있다.**

> 👍 `getServerSideProps` 함수를 이용하면 페이지에 **필요한 데이터를 포함**하여 pre-rendering할 수 있다.<br/>
> 👍 html 파일에 데이터가 있기 때문에 **SEO에 좋다.**<br/>
> 👎 만약 API를 사용할 경우 속도가 느리다면, 유저는 아무것도 보지 못한 채로 오래 기다려야 한다.

<br/>

## 📈 Data Fetching : Client-side vs Server-side

**Client Side**

- 만약 페이지가 보여주는 데이터가 유저 정보와 같이 개인적이거나, SEO와 관련 없다면 해당 페이지를 pre-rendering할 필요가 없다. 이럴 경우 client side에서 데이터를 가져오는 것이 좋다.
- 예시: 사용자 대시보드 페이지

**Server Side**

- 하지만 request time에 반드시 데이터를 fetch해야 하는 페이지를 pre-rendering해야 하는 경우라면 getServerSideProps를 이용하면 좋다.

<br/>

## 📚 Context parameter

- getServerSideProps함수를 호출하면 context paramerter가 들어오게 된다.
- Context parameter는 객체이고 다음과 같은 키값을 가지고 있다.
  - `params` : 만약 페이지가 dynamic route가 사용한다면, params는 라우팅 파라미터를 포함한다.
    - `page/movies/[id].tsx` -> `params : { id: ...}`
  - `query` : 쿼리 문자열을 나타내는 객체
  - 이외에도 다양한 키 값이 있다. ([context parameter](https://nextjs.org/docs/api-reference/data-fetching/get-server-side-props#context-parameter))

**Example**

```tsx
// pages/movies/[...params].tsx
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import CustomHead from "../../components/CustomHead";

type MovieDetailParams = [string, string] | [];

const Detail = ({
  params
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [title, id] = params as MovieDetailParams;
  return (
    <main>
      <CustomHead title={title as string} />
      <h1>{title}</h1>
    </main>
  );
};

export default Detail;

export const getServerSideProps: GetServerSideProps = async context => {
  const params = context.params!.params as MovieDetailParams;
  return {
    props: { params }
  };
};
```
