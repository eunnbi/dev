---
emoji: 🌸
title: React Query (feat. 우아한 테크 세미나)
date: "2022-02-28"
category: React
preview: "'React Query와 상태관리'를 주제로 이루어진 2월 우아한 테크 세미나에 참여하고 배운 점을 바탕으로 작성되었습니다. 세미나 발표자님이 '상태 관리란 무엇일까요?'라고 물었을 때, 나는 Redux와 같은 상태 관리 라이브러리를 떠올랐다😅 아무래도 상태 관리를 위해 라이브러리를 많이 쓰니까 그런 것 같다...(많이 반성했다.) ⚛️ 상태(state)란? 더 넓은 의미의 상태는 다양한 데이터 타입의 형태로 응용 프로그램에 저장된 데이터 (개발자 입장에선 관리해야 하는 데이터)라고 볼 수 있다. 중요한 것은 상태는 시간에 따라 변화한다는 것이다."
---

> "React Query와 상태관리"를 주제로 이루어진 2월 우아한 테크 세미나에 참여하고 배운 점을 바탕으로 작성되었습니다. (아래 링크는 이번 세미나에서 발표해주신 분이 작성한 기술블로그입니다.)<br/> 👉 [우아한 형제들 기술 블로그 - Store에서 비동기 통신 분리하기 (feat. React Query)](https://techblog.woowahan.com/6339/)

<br/>

# 상태 관리란???

세미나 발표자님이 "상태 관리란 무엇일까요?"라고 물었을 때, 나는 `Redux`와 같은 상태 관리 라이브러리를 떠올랐다😅 아무래도 상태 관리를 위해 라이브러리를 많이 쓰니까 그런 것 같다...(많이 반성했다.)

## ⚛️ 상태(state)란?

상태 관리를 정의하기 위해서는 먼저 상태가 무엇인지 알아야 한다.

> Plain Javascript object holds information that influences the output of render

[React 공식문서](https://reactjs.org/docs/faq-state.html)에서 `state`를 컴포넌트를 렌더링하는데 있어 영향을 주는 정보를 지닌 객체라고 정의했다.
더 넓은 의미의 상태는 **다양한 데이터 타입의 형태로 응용 프로그램에 저장된 데이터** (개발자 입장에선 관리해야 하는 데이터)라고 볼 수 있다. 중요한 것은 상태는 **시간에 따라 변화한다**는 것이다.

## ⚛️ 상태 관리 필요성

UI/UX의 중요성과 함께 프로덕트의 규모가 커지고 FE에서 수행하는 역할이 늘면서 관리하는 상태가 많아졌다. 여러 컴포넌트에서 같은 상태를 공통적으로 접근하고 공유해야 하는 경우가 빈번해지면서 효율적인 상태 관리의 필요성이 높아졌다. 그래서 전역 상태를 관리해줄 여러 상태 관리 라이브러리가 존재한다.

# Redux와 비동기 통신

`Redux`를 써보셨던 분들이라면 아래에 있는 코드가 익숙할 것이다.
`Redux Middleware`를 이용하여 비동기 API 통신하는 코드이고, 로딩 상태와 가져온 데이터를 store에 저장한다.

```jsx
const GET_POST = "GET_POST";
const GET_POST_SUCCESS = "GET_POST_SUCCESS";
const GET_POST_FAILURE = "GET_POST_FAILURE";

export const getPost = createAction(GET_POST, (id) => id);

function* getPostSaga(action) {
  try {
    const post = yield call(api.getPost, action.payload);
    yield put({
      type: GET_POST_SUCCESS,
      payload: post.data,
    });
  } catch (e) {
    yield put({
      type: GET_POST_FAILURE,
      payload: e,
      error: true,
    });
  }
}

//** Saga **//
export function* leaderSaga() {
  yield takeLatest(GET_POST, getPostSaga);
}

// state 의 초기값 설정
const initialState = {
  isLoading: false,
  post: null
};

const post = handleActions(
  {
  	[GET_POST]: state => ({
    	...state,
        isLoading: true
    })
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      post: action.payload,
    }),
  },
  initialState
);

export default post;
```

## 의문점 🤔

만약 서버에서 가져와야 하는 데이터가 많아지면, `isLoading`, `isError` 등 **API 관련 상태가 중복**되고, **비슷한 구조의 API 통신 코드가 반복**될 것이다. 이는 개발자 입장에서 매우 비효율적이다.

`Redux` 상태 관리 라이브러리는 컴포넌트끼리 공유해야 하는 전역 상태를 효율적으로 관리하기 위해 사용되어야 하는데 비동기 통신을 위해 상태 관리 라이브러리를 사용하는 것이 아닐까 하는 생각이 들었다. 하지만 비동기 API 통신을 통해 얻은 데이터를 여러 컴포넌트에서 전역적으로 사용할 때도 있어, 섣불리 `Redux`에서 비동기 API 통신을 분리하기에는 어려움이 있다.

정리를 하자면,

1. Redux에서 비동기 API 통신을 없애고 온전히 `Client Side` 전역 상태를 store에 저장하고 관리하기
2. store 밖에서 API 요청을 하고, 받은 데이터를 전역 상태처럼 사용

# React Query

[React Query 공식문서](https://react-query.tanstack.com/)

위와 같은 요구사항을 충족시켜줄 만한 적정 기술이 바로 `React Query`이다!

## React Query의 첫인상 😀

아래는 공식 문서에서 보여주는 코드이고, 이 코드를 보고 다음과 같은 느낌이 들었다.

- `useQuery`를 사용하여 간단하게 비동기 API 통신 상태와 데이터를 받을 수 있다.
- `QueryClientProvider`로 컴포넌트를 감싸는 것을 보면 내부적으로 Context API를 사용하는 것 같아서 `useQuery`로 받아온 데이터를 전역적으로 사용할 수 있을 것 같다.

```jsx
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}

function Example() {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("https://api.github.com/repos/tannerlinsley/react-query").then(res =>
      res.json()
    )
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  );
}
```

<br/>

## 공식 문서에서 설명하는 React Query ✨

> React Query is often described as the missing data-fetching library for React,
> but in more technical terms, it makes **fetching, caching, synchronizing and
> updating server state** in your React applications a breeze - Overview-

### Client State vs Server State ❓

공식문서에서 state를 client state와 server state를 구분한다. 세미나에서 아래와 같이 client state와 server state를 구분하여 설명해주었다.

![Client State vs Server State](1.png)

`Key point`는 `ownership`이다. client state의 ownership은 client에 있고 sever state의 ownership은 server에 있다.

> While most traditional state management libraries are great for working with client state, they are **not so great at working with async or server state.** This is because **server state is totally different.** ... React Query is hands down one of the _best_ libraries for managing server state.

## Core 컨셉 살펴보기 🙌

> three core concepts of React Query: Queries, Mutations, Query Invalidation

### 첫번째 Queries!

보통 `GET`으로 요청할 대부분의 API에 사용하고, **데이터 fetching용**이라고 생각하면 된다. (`CRUD` 중 `Read`에 사용됨.)

```jsx
import { useQuery } from "react-query";

function App() {
  const info = useQuery("todos", fetchTodoList);
}

// 'todos' : Query Key
// fetchTodoList: Query Function
```

#### Query Key

- React Query는 **Query Key에 따라 query caching을 관리한다.**
- String 형태와 Array 형태가 있다.

#### Query Function

- `Promise`를 반환하는 함수
- 데이터를 `resolve`하거나 error를 `throw`

> ✔ **If your query function depends on a variable, include it in your query key.** Since query keys uniquely describe the data they are fetching, they should include any variables you use in your query function that **change**.

#### useQuery가 반환하는 것은?

![Return value of useQuery function](2.png)

중요한 것만 정리하자면,

- `data`: 마지막에 성공적으로 resolved된 데이터
- `error`: 에러가 발생했을 때 반환되는 객체
- `isFetching`: request가 in-flight 중일 때 true
- `state`, `isLoading`, `isSuccess`, `isLoading` 등등 : 현재 query 상태
- `refetch`: 해당 query를 refetch하는 함수
- `remove`: 해당 query를 cache에서 지우는 함수

#### useQuery Option

![useQuery Option](3.png)

option도 정말 많다.... `config`를 커스텀할 수 있다는 것도 하나의 장점이다.

- `onSuccess`, `onError`, `onSettled`: query fetching 성공/실패/완료 시 실행할 Side Effect 정의
- `enabled`: 자동으로 query를 실행시킬지 말지 여부 설정
- `retry`: query 동작 실패 시, 자동으로 retry할지 결정하는 옵션
- `select`: 성공 시 가져온 data를 가공해서 전달
- `keepPreviousData`: 새롭게 fetching 시 이전 데이터 유지 여부
- `refetchInterval`: 주기적으로 refetch할지 결정하는 옵션

> 자세한 내용은 아래 링크에 있습니다😉 <br/> [useQuery API Reference](https://react-query.tanstack.com/reference/useQuery)

#### query가 여럿일 때는?

👉 [공식문서에서 설명하는 Parallel Queries](https://react-query.tanstack.com/guides/parallel-queries)

> ✔ 이외에도 `Paginated Queries`, `Infinite Queries` 등 정말 다양한 기능이 있습니다!>

### 두번째 Mutations!

데이터 생성/수정/삭제시 사용된다. (`CRUD` 중 `Create`/`Update`/`Delete`에 사용됨)

```jsx
// promise 반환 함수만 있어도 됨!
const mutations = useMutation(newTodo => {
  return axios.post("/todos", newTodo);
});
```

#### useMutation이 반환하는 것은?

![Return value of useMutation function](4.png)

- `mutate`: mutations을 실행하는 함수
- `mutateAsync`: mutate 함수와 비슷하지만 Promise 반환

#### useMutation Option

![useMutation option](5.png)

- `onMutate`: 본격적인 Mutation 동작 전에 동작하는 함수, "Optimistic update"를 사용할 때 유용!!
- 👉 [React Query - Optimistic Updates](https://react-query.tanstack.com/guides/optimistic-updates)

### 세번째 Query Invalidation!

```jsx
// Invalidate every query in the cache
queryClient.invalidateQuries();

// Invalidate every query with a key that starts with 'todos'
queryClient.invalidateQueries("todos");
```

해당 key를 가진 query는 `stale` 취급되고, 백그라운드에서 `refetch` 된다.

```jsx
const mutation = useMutation(addTodo, {
  onSuccess: () => {
    queryClient.invalidateQueries("todos");
  }
});
```

- mutation 성공 이후 특정 key의 쿼리를 refetch하고 싶을 때 Query Invalidation이 주로 사용된다.
- 만약 새로운 todo가 추가되어 todos가 업데이트 되었을 때 Query Invalidation을 이용하여 todos를 refetch할 수 있다.
- 👉 [Invalidation from Mutations](https://react-query.tanstack.com/guides/invalidations-from-mutations)

## Query 상태 흐름

1. `fetching`: A 쿼리 인스턴스가 mount됨. 데이터를 fetch하고, A라는 query key로 캐싱함.
2. `fresh` : staleTime이 만료되기 전까지
3. `stale` : staleTime 만료
4. `inactive` : A 쿼리 인스턴스가 unmount됨. cacheTime이 만료되기 전까지 inactive
5. `deleted` : cacheTime이 지나면 GC에 의해 처리됨.

useQuery option 중에서

**staleTime**

- 데이터가 fresh 상태에서 stale 상태로 변경되는데 걸리는 시간 (default: 0)
- fresh 상태일 때는 쿼리 인스턴스가 새롭게 mount되어도 fetch가 일어나지 않는다.
- unmount 이후에도 staleTime이 지나지 않았다면 mount되어도 fetch가 일어나지 않는다.

**cacheTime**

- 데이터가 inactive 상태일 때 캐싱된 상태로 남아있는 시간 (default: 5분)
- 쿼리 인스턴스가 unmount되면 데이터는 inactive 상태로 변경되고, cacheTime만큼 유지된다.
- cacheTime이 지나면 GC에 의해 처리된다.
- 만약 cacheTime이 지나기 전에 쿼리 인스턴스가 새롭게 mount되면, fetch가 실행되고, fresh한 값을 가져오는 동안 캐시 데이터를 보여준다.
- `isLoading` : 캐싱된 데이터가 없을때 fetch하고 있다면 true, 캐싱 데이터가 있다면 false
- `isFetching` : 캐싱된 데이터의 유무 상관없이 fetch하고 있다면 true

+) `refetchOnMount`,`refetchOnWindowFocus`, `refetchOnReconnet` : true이면 mount/window focus/reconnect 시점에 data가 stale이라고 판단되면 refetch (모두 default 값이 true)

## Server State를 어디에서 관리할까? 🤔

**QueryClient 내부적으로 Context API를 사용한다!**<br/>
앞서 `QueryClientProvider`로 컴포넌트를 감싸는 것을 보고 내부적으로 Context API를 사용하는 것 같아서 `useQuery`로 받아온 데이터를 전역적으로 사용할 수 있을 것 같다라고 했는데 정답이다!

```javascript
import { useQueryClient } from "react-query";

const queryClient = useQueryClient();
const data = queryClient.getQueryData(queryKey);
```

앞서 `Query Key`에 따라 `query caching`을 관리한다고 했는데 위 코드처럼 `Query Key`를 이용하여 캐시된 데이터를 바로 가져올 수 있다.

❗ **React Query는 server state를 전역 상태처럼 관리한다!**

> 이번에 처음으로 우아한 테크 세미나에 참여했는데 너무 좋은 경험이었다.👍 발표자님이 쓰신 블로그를 먼저 읽고 참여를 해서 내용이 많이 겹치지 않을까 걱정했는데 블로그에 작성한 내용 이외에도 React Query에 대해 더 자세하게 설명해주셨다. 이번 세미나를 통해 Redux와 같은 **상태 관리 라이브러리 사용의 본래 목적**에 대해 다시 한 번 더 생각해보게 되었고, **state를 client state와 server state로 구분**하는 것을 새롭게 알게 되었다. React Query라는 새로운 기술을 알게 되어 좋은 경험이었고, React Query가 제공하는 다양한 기능을 smart하게 사용해보도록 하겠다😎
