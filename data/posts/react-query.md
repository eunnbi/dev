---
emoji: πΈ
title: React Query (feat. μ°μν νν¬ μΈλ―Έλ)
date: "2022-02-28"
category: React
preview: "'React Queryμ μνκ΄λ¦¬'λ₯Ό μ£Όμ λ‘ μ΄λ£¨μ΄μ§ 2μ μ°μν νν¬ μΈλ―Έλμ μ°Έμ¬νκ³  λ°°μ΄ μ μ λ°νμΌλ‘ μμ±λμμ΅λλ€. μΈλ―Έλ λ°νμλμ΄ 'μν κ΄λ¦¬λ λ¬΄μμΌκΉμ?'λΌκ³  λ¬Όμμ λ, λλ Reduxμ κ°μ μν κ΄λ¦¬ λΌμ΄λΈλ¬λ¦¬λ₯Ό λ μ¬λλ€π μλ¬΄λλ μν κ΄λ¦¬λ₯Ό μν΄ λΌμ΄λΈλ¬λ¦¬λ₯Ό λ§μ΄ μ°λκΉ κ·Έλ° κ² κ°λ€...(λ§μ΄ λ°μ±νλ€.) βοΈ μν(state)λ? λ λμ μλ―Έμ μνλ λ€μν λ°μ΄ν° νμμ ννλ‘ μμ© νλ‘κ·Έλ¨μ μ μ₯λ λ°μ΄ν° (κ°λ°μ μμ₯μμ  κ΄λ¦¬ν΄μΌ νλ λ°μ΄ν°)λΌκ³  λ³Ό μ μλ€. μ€μν κ²μ μνλ μκ°μ λ°λΌ λ³ννλ€λ κ²μ΄λ€."
---

> "React Queryμ μνκ΄λ¦¬"λ₯Ό μ£Όμ λ‘ μ΄λ£¨μ΄μ§ 2μ μ°μν νν¬ μΈλ―Έλμ μ°Έμ¬νκ³  λ°°μ΄ μ μ λ°νμΌλ‘ μμ±λμμ΅λλ€. (μλ λ§ν¬λ μ΄λ² μΈλ―Έλμμ λ°νν΄μ£Όμ  λΆμ΄ μμ±ν κΈ°μ λΈλ‘κ·Έμλλ€.)<br/> π [μ°μν νμ λ€ κΈ°μ  λΈλ‘κ·Έ - Storeμμ λΉλκΈ° ν΅μ  λΆλ¦¬νκΈ° (feat. React Query)](https://techblog.woowahan.com/6339/)

<br/>

# μν κ΄λ¦¬λ???

μΈλ―Έλ λ°νμλμ΄ "μν κ΄λ¦¬λ λ¬΄μμΌκΉμ?"λΌκ³  λ¬Όμμ λ, λλ `Redux`μ κ°μ μν κ΄λ¦¬ λΌμ΄λΈλ¬λ¦¬λ₯Ό λ μ¬λλ€π μλ¬΄λλ μν κ΄λ¦¬λ₯Ό μν΄ λΌμ΄λΈλ¬λ¦¬λ₯Ό λ§μ΄ μ°λκΉ κ·Έλ° κ² κ°λ€...(λ§μ΄ λ°μ±νλ€.)

## βοΈ μν(state)λ?

μν κ΄λ¦¬λ₯Ό μ μνκΈ° μν΄μλ λ¨Όμ  μνκ° λ¬΄μμΈμ§ μμμΌ νλ€.

> Plain Javascript object holds information that influences the output of render

[React κ³΅μλ¬Έμ](https://reactjs.org/docs/faq-state.html)μμ `state`λ₯Ό μ»΄ν¬λνΈλ₯Ό λ λλ§νλλ° μμ΄ μν₯μ μ£Όλ μ λ³΄λ₯Ό μ§λ κ°μ²΄λΌκ³  μ μνλ€.
λ λμ μλ―Έμ μνλ **λ€μν λ°μ΄ν° νμμ ννλ‘ μμ© νλ‘κ·Έλ¨μ μ μ₯λ λ°μ΄ν°** (κ°λ°μ μμ₯μμ  κ΄λ¦¬ν΄μΌ νλ λ°μ΄ν°)λΌκ³  λ³Ό μ μλ€. μ€μν κ²μ μνλ **μκ°μ λ°λΌ λ³ννλ€**λ κ²μ΄λ€.

## βοΈ μν κ΄λ¦¬ νμμ±

UI/UXμ μ€μμ±κ³Ό ν¨κ» νλ‘λνΈμ κ·λͺ¨κ° μ»€μ§κ³  FEμμ μννλ μ­ν μ΄ λλ©΄μ κ΄λ¦¬νλ μνκ° λ§μμ‘λ€. μ¬λ¬ μ»΄ν¬λνΈμμ κ°μ μνλ₯Ό κ³΅ν΅μ μΌλ‘ μ κ·Όνκ³  κ³΅μ ν΄μΌ νλ κ²½μ°κ° λΉλ²ν΄μ§λ©΄μ ν¨μ¨μ μΈ μν κ΄λ¦¬μ νμμ±μ΄ λμμ‘λ€. κ·Έλμ μ μ­ μνλ₯Ό κ΄λ¦¬ν΄μ€ μ¬λ¬ μν κ΄λ¦¬ λΌμ΄λΈλ¬λ¦¬κ° μ‘΄μ¬νλ€.

# Reduxμ λΉλκΈ° ν΅μ 

`Redux`λ₯Ό μ¨λ³΄μ¨λ λΆλ€μ΄λΌλ©΄ μλμ μλ μ½λκ° μ΅μν  κ²μ΄λ€.
`Redux Middleware`λ₯Ό μ΄μ©νμ¬ λΉλκΈ° API ν΅μ νλ μ½λμ΄κ³ , λ‘λ© μνμ κ°μ Έμ¨ λ°μ΄ν°λ₯Ό storeμ μ μ₯νλ€.

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

// state μ μ΄κΈ°κ° μ€μ 
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

## μλ¬Έμ  π€

λ§μ½ μλ²μμ κ°μ ΈμμΌ νλ λ°μ΄ν°κ° λ§μμ§λ©΄, `isLoading`, `isError` λ± **API κ΄λ ¨ μνκ° μ€λ³΅**λκ³ , **λΉμ·ν κ΅¬μ‘°μ API ν΅μ  μ½λκ° λ°λ³΅**λ  κ²μ΄λ€. μ΄λ κ°λ°μ μμ₯μμ λ§€μ° λΉν¨μ¨μ μ΄λ€.

`Redux` μν κ΄λ¦¬ λΌμ΄λΈλ¬λ¦¬λ μ»΄ν¬λνΈλΌλ¦¬ κ³΅μ ν΄μΌ νλ μ μ­ μνλ₯Ό ν¨μ¨μ μΌλ‘ κ΄λ¦¬νκΈ° μν΄ μ¬μ©λμ΄μΌ νλλ° λΉλκΈ° ν΅μ μ μν΄ μν κ΄λ¦¬ λΌμ΄λΈλ¬λ¦¬λ₯Ό μ¬μ©νλ κ²μ΄ μλκΉ νλ μκ°μ΄ λ€μλ€. νμ§λ§ λΉλκΈ° API ν΅μ μ ν΅ν΄ μ»μ λ°μ΄ν°λ₯Ό μ¬λ¬ μ»΄ν¬λνΈμμ μ μ­μ μΌλ‘ μ¬μ©ν  λλ μμ΄, μ£λΆλ¦¬ `Redux`μμ λΉλκΈ° API ν΅μ μ λΆλ¦¬νκΈ°μλ μ΄λ €μμ΄ μλ€.

μ λ¦¬λ₯Ό νμλ©΄,

1. Reduxμμ λΉλκΈ° API ν΅μ μ μμ κ³  μ¨μ ν `Client Side` μ μ­ μνλ₯Ό storeμ μ μ₯νκ³  κ΄λ¦¬νκΈ°
2. store λ°μμ API μμ²­μ νκ³ , λ°μ λ°μ΄ν°λ₯Ό μ μ­ μνμ²λΌ μ¬μ©

# React Query

[React Query κ³΅μλ¬Έμ](https://react-query.tanstack.com/)

μμ κ°μ μκ΅¬μ¬ν­μ μΆ©μ‘±μμΌμ€ λ§ν μ μ  κΈ°μ μ΄ λ°λ‘ `React Query`μ΄λ€!

## React Queryμ μ²«μΈμ π

μλλ κ³΅μ λ¬Έμμμ λ³΄μ¬μ£Όλ μ½λμ΄κ³ , μ΄ μ½λλ₯Ό λ³΄κ³  λ€μκ³Ό κ°μ λλμ΄ λ€μλ€.

- `useQuery`λ₯Ό μ¬μ©νμ¬ κ°λ¨νκ² λΉλκΈ° API ν΅μ  μνμ λ°μ΄ν°λ₯Ό λ°μ μ μλ€.
- `QueryClientProvider`λ‘ μ»΄ν¬λνΈλ₯Ό κ°μΈλ κ²μ λ³΄λ©΄ λ΄λΆμ μΌλ‘ Context APIλ₯Ό μ¬μ©νλ κ² κ°μμ `useQuery`λ‘ λ°μμ¨ λ°μ΄ν°λ₯Ό μ μ­μ μΌλ‘ μ¬μ©ν  μ μμ κ² κ°λ€.

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
      <strong>π {data.subscribers_count}</strong>{" "}
      <strong>β¨ {data.stargazers_count}</strong>{" "}
      <strong>π΄ {data.forks_count}</strong>
    </div>
  );
}
```

<br/>

## κ³΅μ λ¬Έμμμ μ€λͺνλ React Query β¨

> React Query is often described as the missing data-fetching library for React,
> but in more technical terms, it makes **fetching, caching, synchronizing and
> updating server state** in your React applications a breeze - Overview-

### Client State vs Server State β

κ³΅μλ¬Έμμμ stateλ₯Ό client stateμ server stateλ₯Ό κ΅¬λΆνλ€. μΈλ―Έλμμ μλμ κ°μ΄ client stateμ server stateλ₯Ό κ΅¬λΆνμ¬ μ€λͺν΄μ£Όμλ€.

![Client State vs Server State](1.png)

`Key point`λ `ownership`μ΄λ€. client stateμ ownershipμ clientμ μκ³  sever stateμ ownershipμ serverμ μλ€.

> While most traditional state management libraries are great for working with client state, they are **not so great at working with async or server state.** This is because **server state is totally different.** ... React Query is hands down one of the _best_ libraries for managing server state.

## Core μ»¨μ μ΄ν΄λ³΄κΈ° π

> three core concepts of React Query: Queries, Mutations, Query Invalidation

### μ²«λ²μ§Έ Queries!

λ³΄ν΅ `GET`μΌλ‘ μμ²­ν  λλΆλΆμ APIμ μ¬μ©νκ³ , **λ°μ΄ν° fetchingμ©**μ΄λΌκ³  μκ°νλ©΄ λλ€. (`CRUD` μ€ `Read`μ μ¬μ©λ¨.)

```jsx
import { useQuery } from "react-query";

function App() {
  const info = useQuery("todos", fetchTodoList);
}

// 'todos' : Query Key
// fetchTodoList: Query Function
```

#### Query Key

- React Queryλ **Query Keyμ λ°λΌ query cachingμ κ΄λ¦¬νλ€.**
- String ννμ Array ννκ° μλ€.

#### Query Function

- `Promise`λ₯Ό λ°ννλ ν¨μ
- λ°μ΄ν°λ₯Ό `resolve`νκ±°λ errorλ₯Ό `throw`

> β **If your query function depends on a variable, include it in your query key.** Since query keys uniquely describe the data they are fetching, they should include any variables you use in your query function that **change**.

#### useQueryκ° λ°ννλ κ²μ?

![Return value of useQuery function](2.png)

μ€μν κ²λ§ μ λ¦¬νμλ©΄,

- `data`: λ§μ§λ§μ μ±κ³΅μ μΌλ‘ resolvedλ λ°μ΄ν°
- `error`: μλ¬κ° λ°μνμ λ λ°νλλ κ°μ²΄
- `isFetching`: requestκ° in-flight μ€μΌ λ true
- `state`, `isLoading`, `isSuccess`, `isLoading` λ±λ± : νμ¬ query μν
- `refetch`: ν΄λΉ queryλ₯Ό refetchνλ ν¨μ
- `remove`: ν΄λΉ queryλ₯Ό cacheμμ μ§μ°λ ν¨μ

#### useQuery Option

![useQuery Option](3.png)

optionλ μ λ§ λ§λ€.... `config`λ₯Ό μ»€μ€νν  μ μλ€λ κ²λ νλμ μ₯μ μ΄λ€.

- `onSuccess`, `onError`, `onSettled`: query fetching μ±κ³΅/μ€ν¨/μλ£ μ μ€νν  Side Effect μ μ
- `enabled`: μλμΌλ‘ queryλ₯Ό μ€νμν¬μ§ λ§μ§ μ¬λΆ μ€μ 
- `retry`: query λμ μ€ν¨ μ, μλμΌλ‘ retryν μ§ κ²°μ νλ μ΅μ
- `select`: μ±κ³΅ μ κ°μ Έμ¨ dataλ₯Ό κ°κ³΅ν΄μ μ λ¬
- `keepPreviousData`: μλ‘­κ² fetching μ μ΄μ  λ°μ΄ν° μ μ§ μ¬λΆ
- `refetchInterval`: μ£ΌκΈ°μ μΌλ‘ refetchν μ§ κ²°μ νλ μ΅μ

> μμΈν λ΄μ©μ μλ λ§ν¬μ μμ΅λλ€π <br/> [useQuery API Reference](https://react-query.tanstack.com/reference/useQuery)

#### queryκ° μ¬λΏμΌ λλ?

π [κ³΅μλ¬Έμμμ μ€λͺνλ Parallel Queries](https://react-query.tanstack.com/guides/parallel-queries)

> β μ΄μΈμλ `Paginated Queries`, `Infinite Queries` λ± μ λ§ λ€μν κΈ°λ₯μ΄ μμ΅λλ€!>

### λλ²μ§Έ Mutations!

λ°μ΄ν° μμ±/μμ /μ­μ μ μ¬μ©λλ€. (`CRUD` μ€ `Create`/`Update`/`Delete`μ μ¬μ©λ¨)

```jsx
// promise λ°ν ν¨μλ§ μμ΄λ λ¨!
const mutations = useMutation(newTodo => {
  return axios.post("/todos", newTodo);
});
```

#### useMutationμ΄ λ°ννλ κ²μ?

![Return value of useMutation function](4.png)

- `mutate`: mutationsμ μ€ννλ ν¨μ
- `mutateAsync`: mutate ν¨μμ λΉμ·νμ§λ§ Promise λ°ν

#### useMutation Option

![useMutation option](5.png)

- `onMutate`: λ³Έκ²©μ μΈ Mutation λμ μ μ λμνλ ν¨μ, "Optimistic update"λ₯Ό μ¬μ©ν  λ μ μ©!!
- π [React Query - Optimistic Updates](https://react-query.tanstack.com/guides/optimistic-updates)

### μΈλ²μ§Έ Query Invalidation!

```jsx
// Invalidate every query in the cache
queryClient.invalidateQuries();

// Invalidate every query with a key that starts with 'todos'
queryClient.invalidateQueries("todos");
```

ν΄λΉ keyλ₯Ό κ°μ§ queryλ `stale` μ·¨κΈλκ³ , λ°±κ·ΈλΌμ΄λμμ `refetch` λλ€.

```jsx
const mutation = useMutation(addTodo, {
  onSuccess: () => {
    queryClient.invalidateQueries("todos");
  }
});
```

- mutation μ±κ³΅ μ΄ν νΉμ  keyμ μΏΌλ¦¬λ₯Ό refetchνκ³  μΆμ λ Query Invalidationμ΄ μ£Όλ‘ μ¬μ©λλ€.
- λ§μ½ μλ‘μ΄ todoκ° μΆκ°λμ΄ todosκ° μλ°μ΄νΈ λμμ λ Query Invalidationμ μ΄μ©νμ¬ todosλ₯Ό refetchν  μ μλ€.
- π [Invalidation from Mutations](https://react-query.tanstack.com/guides/invalidations-from-mutations)

## Query μν νλ¦

1. `fetching`: A μΏΌλ¦¬ μΈμ€ν΄μ€κ° mountλ¨. λ°μ΄ν°λ₯Ό fetchνκ³ , AλΌλ query keyλ‘ μΊμ±ν¨.
2. `fresh` : staleTimeμ΄ λ§λ£λκΈ° μ κΉμ§
3. `stale` : staleTime λ§λ£
4. `inactive` : A μΏΌλ¦¬ μΈμ€ν΄μ€κ° unmountλ¨. cacheTimeμ΄ λ§λ£λκΈ° μ κΉμ§ inactive
5. `deleted` : cacheTimeμ΄ μ§λλ©΄ GCμ μν΄ μ²λ¦¬λ¨.

useQuery option μ€μμ

**staleTime**

- λ°μ΄ν°κ° fresh μνμμ stale μνλ‘ λ³κ²½λλλ° κ±Έλ¦¬λ μκ° (default: 0)
- fresh μνμΌ λλ μΏΌλ¦¬ μΈμ€ν΄μ€κ° μλ‘­κ² mountλμ΄λ fetchκ° μΌμ΄λμ§ μλλ€.
- unmount μ΄νμλ staleTimeμ΄ μ§λμ§ μμλ€λ©΄ mountλμ΄λ fetchκ° μΌμ΄λμ§ μλλ€.

**cacheTime**

- λ°μ΄ν°κ° inactive μνμΌ λ μΊμ±λ μνλ‘ λ¨μμλ μκ° (default: 5λΆ)
- μΏΌλ¦¬ μΈμ€ν΄μ€κ° unmountλλ©΄ λ°μ΄ν°λ inactive μνλ‘ λ³κ²½λκ³ , cacheTimeλ§νΌ μ μ§λλ€.
- cacheTimeμ΄ μ§λλ©΄ GCμ μν΄ μ²λ¦¬λλ€.
- λ§μ½ cacheTimeμ΄ μ§λκΈ° μ μ μΏΌλ¦¬ μΈμ€ν΄μ€κ° μλ‘­κ² mountλλ©΄, fetchκ° μ€νλκ³ , freshν κ°μ κ°μ Έμ€λ λμ μΊμ λ°μ΄ν°λ₯Ό λ³΄μ¬μ€λ€.
- `isLoading` : μΊμ±λ λ°μ΄ν°κ° μμλ fetchνκ³  μλ€λ©΄ true, μΊμ± λ°μ΄ν°κ° μλ€λ©΄ false
- `isFetching` : μΊμ±λ λ°μ΄ν°μ μ λ¬΄ μκ΄μμ΄ fetchνκ³  μλ€λ©΄ true

+) `refetchOnMount`,`refetchOnWindowFocus`, `refetchOnReconnet` : trueμ΄λ©΄ mount/window focus/reconnect μμ μ dataκ° staleμ΄λΌκ³  νλ¨λλ©΄ refetch (λͺ¨λ default κ°μ΄ true)

## Server Stateλ₯Ό μ΄λμμ κ΄λ¦¬ν κΉ? π€

**QueryClient λ΄λΆμ μΌλ‘ Context APIλ₯Ό μ¬μ©νλ€!**<br/>
μμ `QueryClientProvider`λ‘ μ»΄ν¬λνΈλ₯Ό κ°μΈλ κ²μ λ³΄κ³  λ΄λΆμ μΌλ‘ Context APIλ₯Ό μ¬μ©νλ κ² κ°μμ `useQuery`λ‘ λ°μμ¨ λ°μ΄ν°λ₯Ό μ μ­μ μΌλ‘ μ¬μ©ν  μ μμ κ² κ°λ€λΌκ³  νλλ° μ λ΅μ΄λ€!

```javascript
import { useQueryClient } from "react-query";

const queryClient = useQueryClient();
const data = queryClient.getQueryData(queryKey);
```

μμ `Query Key`μ λ°λΌ `query caching`μ κ΄λ¦¬νλ€κ³  νλλ° μ μ½λμ²λΌ `Query Key`λ₯Ό μ΄μ©νμ¬ μΊμλ λ°μ΄ν°λ₯Ό λ°λ‘ κ°μ Έμ¬ μ μλ€.

β **React Queryλ server stateλ₯Ό μ μ­ μνμ²λΌ κ΄λ¦¬νλ€!**

> μ΄λ²μ μ²μμΌλ‘ μ°μν νν¬ μΈλ―Έλμ μ°Έμ¬νλλ° λλ¬΄ μ’μ κ²½νμ΄μλ€.π λ°νμλμ΄ μ°μ  λΈλ‘κ·Έλ₯Ό λ¨Όμ  μ½κ³  μ°Έμ¬λ₯Ό ν΄μ λ΄μ©μ΄ λ§μ΄ κ²ΉμΉμ§ μμκΉ κ±±μ νλλ° λΈλ‘κ·Έμ μμ±ν λ΄μ© μ΄μΈμλ React Queryμ λν΄ λ μμΈνκ² μ€λͺν΄μ£Όμ¨λ€. μ΄λ² μΈλ―Έλλ₯Ό ν΅ν΄ Reduxμ κ°μ **μν κ΄λ¦¬ λΌμ΄λΈλ¬λ¦¬ μ¬μ©μ λ³Έλ λͺ©μ **μ λν΄ λ€μ ν λ² λ μκ°ν΄λ³΄κ² λμκ³ , **stateλ₯Ό client stateμ server stateλ‘ κ΅¬λΆ**νλ κ²μ μλ‘­κ² μκ² λμλ€. React QueryλΌλ μλ‘μ΄ κΈ°μ μ μκ² λμ΄ μ’μ κ²½νμ΄μκ³ , React Queryκ° μ κ³΅νλ λ€μν κΈ°λ₯μ smartνκ² μ¬μ©ν΄λ³΄λλ‘ νκ² λ€π
