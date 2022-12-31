---
emoji: ⚙️
title: Redirects & Rewrites
date: "2022-06-14"
category: Nextjs
preview: "프로젝트 디렉터리 루트 경로에 next.config.js 파일을 만들어 커스텀 고급 설정을 할 수 있다. next.config.js는 일반 Node.js 모듈을 export한다 Next.js 서버 및 빌드 단계에서 사용되며 브라우저 빌드에는 포함되지 않는다. next.config.js에서 redirects와 rewrites 설정을 할 수 있다. 그 밖에도 다양한 설정이 있다. redirects은 `source`, `destination`, `permanent` 속성이 있는 객체 배열을 반환하는 비동기 함수이다. source : request 경로, destination : redirect할 경로, permanent : true or false. true인 경우 클라이언트와 search 엔진에 redirect를 영구적으로 cache하도록 지시하는 `308` status code를 사용, false인 경우 일시적이고 cache되지 않은 `307` status code를 사용. source 경로를 destination 경로로 redirect하도록 설정할 수 있다."
---

# next.config.js

- 프로젝트 디렉터리 루트 경로에 next.config.js 파일을 만들어 커스텀 고급 설정을 할 수 있다.
- next.config.js는 일반 Node.js 모듈을 export한다.
- Next.js 서버 및 빌드 단계에서 사용되며 브라우저 빌드에는 포함되지 않는다.

> [next.config.js](https://nextjs.org/docs/api-reference/next.config.js/introduction)에서 redirects와 rewrites 설정을 할 수 있다. 그 밖에도 다양한 설정이 있다.

<br/>

# 🤝 Redirects

- redirects은 `source`, `destination`, `permanent` 속성이 있는 객체 배열을 반환하는 비동기 함수이다.
  - source : request 경로
  - destination : redirect할 경로
  - permanent : true or false
    - true인 경우 클라이언트와 search 엔진에 redirect를 영구적으로 cache하도록 지시하는 `308` status code를 사용
    - false인 경우 일시적이고 cache되지 않은 `307` status code를 사용
- source 경로를 destination 경로로 redirect하도록 설정할 수 있다.

```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/form",
        permanent: false
      }
    ];
  }
};

module.exports = nextConfig;
```

- pattern matching

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/old-blog/:path",
        destination: "/new-blog/:path",
        permanent: false
      }
    ];
  }
};

module.exports = nextConfig;

// ex) localhost:3000/old-blog/11122 (request) -> localhost:3000/new-blog/11122 (redirect)
```

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/old-blog/:path*",
        destination: "/new-blog/:path*",
        permanent: false
      }
    ];
  }
};

module.exports = nextConfig;

// ex) localhost:3000/old-blog/11122/comments/11 (request)
//     ->  localhost:3000/new-blog/11122/comments/11 (redirect)
```

> [redirects에 대해 더 알아보기](https://nextjs.org/docs/api-reference/next.config.js/redirects)

<br/>

# 🙈 Rewrites

- rewrites는 `source`, `destination` 속성을 가지는 객체 배열을 반환하는 비동기 함수이다.
  - source: request 경로
  - destination : routing할 경로
- source 경로가 destination 경로로 매핑되도록 설정할 수 있다.

```javascript
/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`
      }
    ];
  }
};

module.exports = nextConfig;
```

**Example**

rewrites 설정을 하지 않은 상태에서 `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`로 GET 요청을 보내면 아래 사진에 보이듯이 **api key가 그대로 노출**이 된다.

![No Rewrites Example](1.png)

`http://locahost:3000/api/movies` 혹은 `api/movies`로 GET 요청을 보내면 아래의 rewrites 설정에 따라 **destination 경로로 매핑**이 되어 `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`로 GET 요청을 보낸다. 또한, **api key의 노출을 막을 수 있다.** 👍

```javascript
/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      }
    ];
  }
};

module.exports = nextConfig;
```

![Rewrites Example](2.png)

> [rewrites에 대해 더 알아보기](https://nextjs.org/docs/api-reference/next.config.js/rewrites)

<br/>

> **Rewrites vs Redirect**
>
> - Rewrites은 **URL 프록시 역할**을 하고 destination 경로를 source 경로로 **mask**한다.
> - Redirects 은 source 경로를 destination 경로로 redirect시켜 URL를 변경한다.
