---
emoji: ๐ด
title: Next.js Routing
date: "2022-06-10"
category: Nextjs
preview: "Routing์ด๋? ๋ธ๋ผ์ฐ์  ๊ฒฝ๋ก์ ๋ฐ๋ผ ๋ค๋ฅธ ํ๋ฉด(ํ์ด์ง)์ ๋ณด์ฌ์ฃผ๋ ๊ฒ์ ๋งํ๋ค React.js์์๋ routing์ ๊ตฌํํ๊ธฐ ์ํด ์ฃผ๋ก react-router-dom ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ์ฌ์ฉํ๋ค. ๋ฐ๋ฉด, Next.js์์๋ ๋ณ๋์ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๊ฐ ํ์ํ์ง ์๋ค. NextJS์ Routing ํ์ผ ์์คํ์ ๊ธฐ๋ฐ์ผ๋ก ์ ์  ๋ผ์ฐํ๊ณผ ๋์  ๋ผ์ฐํ์ ์ ๊ณตํ๋ค.  pages ํด๋ Next.js ํ๋ก์ ํธ๋ฅผ ์์ํ๋ฉด ๋ฃจํธ ๊ฒฝ๋ก์ pages ํด๋๊ฐ ๋ง๋ค์ด์ง๋ค. pages ํด๋ ์์ ์๋ ํ์ผ๋ช์ ๋ฐ๋ผ route๊ฐ ๊ฒฐ์ ๋๋ค. => ๐ automatic routing ์ด๋ ํ์ผ์ ์์ฑ๋ ์ปดํฌ๋ํธ๋ช์ ์ค์ํ์ง ์๊ณ , ์ปดํฌ๋ํธ๋ฅผ export default ํด์ผ ํ๋ค. Link ์ปดํฌ๋ํธ๋ฅผ ์ด์ฉํด ํ์ด์ง๋ฅผ ์ด๋ํ  ์ ์๋ค. href props๋ก ์ด๋ํ  ๊ฒฝ๋ก๋ฅผ ์ ๋ฌํ๋ค. ๊ทธ ๋ฐ์ ๋ค์ํ props๊ฐ ์๋ค."
---

# Routing์ด๋?

- **๋ธ๋ผ์ฐ์  ๊ฒฝ๋ก์ ๋ฐ๋ผ ๋ค๋ฅธ ํ๋ฉด(ํ์ด์ง)์ ๋ณด์ฌ์ฃผ๋ ๊ฒ**์ ๋งํ๋ค.
- React.js์์๋ routing์ ๊ตฌํํ๊ธฐ ์ํด ์ฃผ๋ก `react-router-dom` ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ์ฌ์ฉํ๋ค.
- ๋ฐ๋ฉด, Next.js์์๋ ๋ณ๋์ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๊ฐ ํ์ํ์ง ์๋ค.

<br/>

# NextJS์ Routing

ํ์ผ ์์คํ์ ๊ธฐ๋ฐ์ผ๋ก ์ ์  ๋ผ์ฐํ๊ณผ ๋์  ๋ผ์ฐํ์ ์ ๊ณตํ๋ค.

## pages ํด๋

- Next.js ํ๋ก์ ํธ๋ฅผ ์์ํ๋ฉด ๋ฃจํธ ๊ฒฝ๋ก์ `pages` ํด๋๊ฐ ๋ง๋ค์ด์ง๋ค.
- **pages ํด๋ ์์ ์๋ ํ์ผ๋ช์ ๋ฐ๋ผ route๊ฐ ๊ฒฐ์ ๋๋ค.** => ๐ **automatic routing**
- ์ด๋ ํ์ผ์ ์์ฑ๋ ์ปดํฌ๋ํธ๋ช์ ์ค์ํ์ง ์๊ณ , ์ปดํฌ๋ํธ๋ฅผ `export default` ํด์ผ ํ๋ค.
  - `pages/about.js` -> `localhost:3000/about`
  - `pages/index.js` -> `localhost:3000/index` (x) `localhost:3000` (o)

## Link ์ปดํฌ๋ํธ

- Link ์ปดํฌ๋ํธ๋ฅผ ์ด์ฉํด ํ์ด์ง๋ฅผ ์ด๋ํ  ์ ์๋ค.
- `href` props๋ก ์ด๋ํ  ๊ฒฝ๋ก๋ฅผ ์ ๋ฌํ๋ค. ๊ทธ ๋ฐ์ ๋ค์ํ props๊ฐ ์๋ค.

> [Link ์ปดํฌ๋ํธ์ ๋ํด ๋ ์์๋ณด๊ธฐ](https://nextjs.org/docs/api-reference/next/link)

## useRouter hook

```javascript
const router = useRouter();
```

- Routing ์ ๋ณด๋ฅผ ๋ด์ ๊ฐ์ฒด๋ฅผ ๋ฐํํ๋ค.
- ์ด ๊ฐ์ฒด์๋ `push`๋ผ๋ ๋ฉ์๋๊ฐ ์๊ณ , Link ์ปดํฌ๋ํธ์ฒ๋ผ ํ์ด์ง ์ด๋ํ  ๋ ์ฌ์ฉ๋๋ค.
  - `router.push(url, as, options)`
  - `url` : UrlObject | String, ํ์ํ  URL
  - `as` : UrlObject | String, ๋ธ๋ผ์ฐ์  URL ํ์์ค์ ํ์๋  ๊ฒฝ๋ก

> [useRouter์ ๋ํด ๋ ์์๋ณด๊ธฐ](https://nextjs.org/docs/api-reference/next/router#userouter)

<br/>

**๐ป Link and useRouter Example**

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

- pages ํด๋ ์์ ์๋ ํ์ผ๋ช์ ๋ฐ๋ผ route๊ฐ ๊ฒฐ์ ๋๋ค๊ณ  ์์ ์ค๋ชํ๋ค.
- ์ด๋ ํ์ผ๋ช์ **๋๊ดํธ**๋ฅผ ๋ฃ์ด dynamic route๋ฅผ ์์ฑํ  ์ ์๋ค.

Ex) `pages/movies/[id].tsx` -> `http://localhost:3000/movies/:id`

```javascript
const router = useRouter();
const { id } = router.query;
```

<br/>

**๐ฅ Dynamic Routes Example**

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

> [Dynamic Routes์ ๋ํด ๋ ์์๋ณด๊ธฐ](https://nextjs.org/docs/routing/dynamic-routes)

<br/>

## Catch All Routes

๋๊ดํธ ์์ ์ธ ๊ฐ์ ์ ์ ์ถ๊ฐํ์ฌ ๋ชจ๋  ๊ฒฝ๋ก๋ฅผ ํฌ์ฐฉํ๋๋ก dynamic routes๋ฅผ ํ์ฅํ  ์ ์๋ค.

```
ex) pages/movies/[...params].tsx
-> http://locahost:3000/movies/1
-> http://locahost:3000/movies/asdf/2
-> http://localhost:3000/movies/3/adf3/23a ๋ชจ๋ ์ผ์น
```

**๐ Catch-All-URL Example**

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
  const [title, id] = router.query.params as MovieDetailParams; // ๋ฐฐ์ด ๋น๊ตฌ์กฐํ ํ ๋น
  return (
    <main>
      <CustomHead title={title as string} />
      <h1>{title}</h1>
    </main>
  );
};

export default Detail;
```

> [Catch All Routes์ ๋ํด ๋ ์์๋ณด๊ธฐ](https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes)

<br/>

## ๐ง 404 Page

pages ํด๋์ 404 ํ์ผ์ ๋ง๋ค์ด 404 page๋ฅผ ์ปค์คํํ  ์ ์๋ค.
