---
emoji: 🌺
title: NextJS + React Query (with SSR)
date: "2022-09-18"
category: Nextjs
preview: "React Query는 서버 사이드에서 prefetch한 데이터를 pre-rendering 시 사용하기 위한 2가지 방법을 지원한다. getStaticProps나 getServerSideProps 함수와 useQuery 옵션 중 initalData를 함께 이용하는 방법이다. 이 방법에 대한 문제점이 존재한다. useQuery를 가장 하위에 있는 컴포넌트에서 사용한다면 해당 컴포넌트까지 initalData를 전달해야 한다. 같은 동작의 useQuery가 여러 컴포넌트에서 사용된다면, 모든 컴포넌트에 initialData를 전달해야 한다. 👀 getStaticProps나 getServerSideProps를 이용하여 서버 사이드에서 prefetch한 데이터가 전역적으로 캐싱되지 않고 페이지 단위에서 props로 전달되는 데이터이기 때문에 발생하는 문제점이다. Hydration을 이용하여 위 문제점을 해결할 수 있다."
---

> React Query는 서버 사이드에서 `prefetch`한 데이터를 `pre-rendering` 시 사용하기 위한 2가지 방법을 지원한다.

## Using "initialData"

`getStaticProps`나 `getServerSideProps` 함수와 `useQuery` 옵션 중 `initalData`를 함께 이용하는 방법이다.

```typescript
export const getStaticProps = async () => {
  const posts = await getPosts();
  return { props: { posts } }; // 서버사이드에서 prefetch한 데이터를 props로 전달
};

const PostsPage = ({
  posts
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  // props로 전달받은 데이터를 initialData로 설정
  const { data } = useQuery(["posts"], getPosts, { initialData: props.posts });

  // ...
};
```

이 방법에 대한 문제점이 존재한다.

- `useQuery`를 가장 하위에 있는 컴포넌트에서 사용한다면 해당 컴포넌트까지 `initalData`를 전달해야 한다.
- 같은 동작의 `useQuery`가 여러 컴포넌트에서 사용된다면, 모든 컴포넌트에 `initialData`를 전달해야 한다.

> 👀 `getStaticProps`나 `getServerSideProps`를 이용하여 서버 사이드에서 prefetch한 데이터가 **전역적으로 캐싱되지 않고 페이지 단위에서 props로 전달되는 데이터**이기 때문에 발생하는 문제점이다.

<br/>

## Using Hydration

`Hydration`을 이용하여 위 문제점을 해결할 수 있다.

**Hydration 설정**

```typescript
const MyApp = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
};

export default MyApp;
```

- 이때, `QueryClient` 인스턴스를 `useState`로 관리한다. 컴포넌트 생명주기 동안 인스턴스가 1번만 생성되고, 서로 다른 사용자와 요청 간의 데이터 공유를 막을 수 있기 때문이다.

```typescript
export const getStaticProps = async () => {
  const queryClient = new QueryClient(); // QueryClient 인스턴스 생성
  await queryClient.prefetchQuery(["posts"], getPosts); // prefetch query
  return {
    props: {
      dehydratedState: dehydrate(queryClient) // dehydration
    }
  };
};

const PostsPage = () => {
  const { data } = useQuery(["posts"], getPosts);

  // ...
};
```

**동작방식**

1. `getStaticProps` 함수에서 데이터를 `prefetch` 하고 `queryClient` 를 `dehydrate`한다. (해당 `queryClient`에서 데이터가 캐싱되어 있음.)
2. `pre-rendering` 시 `prefetch`한 쿼리와 **같은 key**를 가진 쿼리를 만나면 캐싱된 데이터를 이용하여 html 파일을 구성한다.
3. 서버사이드에서 구성된 html 파일을 클라이언트로 보낸다.
4. 클라이언트에서 `hydrate` 진행 시 `dehydrate` 했던 `queryClient`를 이용한다. `pre-rendering` 시 사용했던 `query key`를 이용하여 데이터를 바로 가져올 수 있다.

> 반드시 **같은 키**를 사용해야 하기 때문에, `key`와 `fetch` 함수를 같이 관리해주는 것이 좋다.
>
> ```typescript
> export const postsQuery = {
>   key: ["posts"],
>   fetcher: getPosts
> };
> ```

> 👉 [React Query 공식문서 - Hydration](https://react-query-v2.tanstack.com/reference/hydration)

<br/>

### Only successful queries are included in dehydration

에러가 발생한 쿼리는 자동적으로 dehydraion에서 제외되고, 클라이언트 사이드에서 retry된다. 하지만, 오류 페이지를 렌더링하고 싶을 경우, `fetchQuery`를 이용하여 에러 핸들링을 하면 된다.

> Any query with an error is automatically excluded from dehydration. This means that the default behavior is to pretend these queries were never loaded on the server, usually showing a loading state instead, and retrying the queries on the queryClient. This happens regardless of error.
>
> Sometimes this behavior is not desirable, maybe you want to render an error page with a correct status code instead on certain errors or queries. In those cases, use fetchQuery and catch any errors to handle those manually.

> 👉 참고 : [TanStack Query 공식문서](https://tanstack.com/query/v4/docs/guides/ssr)
