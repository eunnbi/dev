---
emoji: 🛴
title: Next.js Routing
date: "2022-06-10"
category: Nextjs
preview: "Routing이란? 브라우저 경로에 따라 다른 화면(페이지)을 보여주는 것을 말한다 React.js에서는 routing을 구현하기 위해 주로 react-router-dom 라이브러리를 사용한다. 반면, Next.js에서는 별도의 라이브러리가 필요하지 않다. NextJS의 Routing 파일 시스템을 기반으로 정적 라우팅과 동적 라우팅을 제공한다.  pages 폴더 Next.js 프로젝트를 시작하면 루트 경로에 pages 폴더가 만들어진다. pages 폴더 안에 있는 파일명에 따라 route가 결정된다. => 🚗 automatic routing 이때 파일에 작성된 컴포넌트명은 중요하지 않고, 컴포넌트를 export default 해야 한다. Link 컴포넌트를 이용해 페이지를 이동할 수 있다. href props로 이동할 경로를 전달한다. 그 밖에 다양한 props가 있다."
---

# Routing이란?

- **브라우저 경로에 따라 다른 화면(페이지)을 보여주는 것**을 말한다.
- React.js에서는 routing을 구현하기 위해 주로 `react-router-dom` 라이브러리를 사용한다.
- 반면, Next.js에서는 별도의 라이브러리가 필요하지 않다.

<br/>

# NextJS의 Routing

파일 시스템을 기반으로 정적 라우팅과 동적 라우팅을 제공한다.

## pages 폴더

- Next.js 프로젝트를 시작하면 루트 경로에 `pages` 폴더가 만들어진다.
- **pages 폴더 안에 있는 파일명에 따라 route가 결정된다.** => 🚗 **automatic routing**
- 이때 파일에 작성된 컴포넌트명은 중요하지 않고, 컴포넌트를 `export default` 해야 한다.
  - `pages/about.js` -> `localhost:3000/about`
  - `pages/index.js` -> `localhost:3000/index` (x) `localhost:3000` (o)

## Link 컴포넌트

- Link 컴포넌트를 이용해 페이지를 이동할 수 있다.
- `href` props로 이동할 경로를 전달한다. 그 밖에 다양한 props가 있다.

> [Link 컴포넌트에 대해 더 알아보기](https://nextjs.org/docs/api-reference/next/link)

## useRouter hook

```javascript
const router = useRouter();
```

- Routing 정보를 담은 객체를 반환한다.
- 이 객체에는 `push`라는 메서드가 있고, Link 컴포넌트처럼 페이지 이동할 때 사용된다.
  - `router.push(url, as, options)`
  - `url` : UrlObject | String, 탐색할 URL
  - `as` : UrlObject | String, 브라우저 URL 표시줄에 표시될 경로

> [useRouter에 대해 더 알아보기](https://nextjs.org/docs/api-reference/next/router#userouter)

<br/>

**💻 Link and useRouter Example**

```jsx
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const StyledLink = styled(Link)<{ router: string; pathName: string }>`
  color: ${(props) => (props.pathName === props.router ? "red" : "black")};
  cursor: pointer;
`;

const NavBar = () => {
  const router = useRouter();
  return (
    <nav>
      <StyledLink href="/" pathName="/" router={router.pathname}>
          Home
      </StyledLink>
      <StyledLink href="/about" pathName="/about" router={router.pathname}>
          About
      </StyledLink>
    </nav>
  );
};

export default NavBar;
```

<br/>

## Dynamic Routes

- pages 폴더 안에 있는 파일명에 따라 route가 결정된다고 앞서 설명했다.
- 이때 파일명에 **대괄호**를 넣어 dynamic route를 생성할 수 있다.

Ex) `pages/movies/[id].tsx` -> `http://localhost:3000/movies/:id`

```javascript
const router = useRouter();
const { id } = router.query;
```

<br/>

**💥 Dynamic Routes Example**

```jsx
// components/Movie.tsx
import Link from "next/link";
import { useRouter } from "next/router";
import { IMovieProps } from "../lib/api/movies";
import styled from "styled-components";

// ...

const Movie = ({ movie }: { movie: IMovieProps }) => {
  const router = useRouter();
  const onClick = (id: number, title: string) => {
    router.push(
      {
        pathname: `/movies/${id}`,
        query: {
          title
        }
      },
      `/movies/${id}` // URL masking
    );
  };
  return (
    <StyledMovie onClick={() => onClick(movie.id, movie.original_title)}>
      {/* ...*/}
    </StyledMovie>
  );
};

export default Movie;
```

```jsx
// pages/movies/[id].tsx
import { useRouter } from "next/router";
import CustomHead from "../../components/CustomHead";

const Detail = () => {
  const router = useRouter();
  const { id, title } = router.query;
  return (
    <main>
      <CustomHead title={title as string} />
      <h1>{id}</h1>
    </main>
  );
};

export default Detail;
```

> [Dynamic Routes에 대해 더 알아보기](https://nextjs.org/docs/routing/dynamic-routes)

<br/>

## Catch All Routes

대괄호 안에 세 개의 점을 추가하여 모든 경로를 포착하도록 dynamic routes를 확장할 수 있다.

```
ex) pages/movies/[...params].tsx
-> http://locahost:3000/movies/1
-> http://locahost:3000/movies/asdf/2
-> http://localhost:3000/movies/3/adf3/23a 모두 일치
```

**🌐 Catch-All-URL Example**

```jsx
// components/Movie.tsx
import Link from "next/link";
import { useRouter } from "next/router";
import { IMovieProps } from "../lib/api/movies";
import styled from "styled-components";

// ...

const Movie = ({ movie }: { movie: IMovieProps }) => {
  const router = useRouter();
  const onClick = (id: number, title: string) => {
    router.push(`/movies/${title}/${id}`);
  };
  return (
    <StyledMovie onClick={() => onClick(movie.id, movie.original_title)}>
      {/**/}
    </StyledMovie>
  );
};

export default Movie;
```

```jsx
// pages/movies/[...params].tsx
import { useRouter } from "next/router";
import CustomHead from "../../components/CustomHead";

type MovieDetailParams = [string, string] | [];

const Detail = () => {
  const router = useRouter();
  const [title, id] = router.query.params as MovieDetailParams; // 배열 비구조화 할당
  return (
    <main>
      <CustomHead title={title as string} />
      <h1>{title}</h1>
    </main>
  );
};

export default Detail;
```

> [Catch All Routes에 대해 더 알아보기](https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes)

<br/>

## 🚧 404 Page

pages 폴더에 404 파일을 만들어 404 page를 커스텀할 수 있다.
