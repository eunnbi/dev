---
emoji: ❣️
title: CSR vs SSR
date: "2022-06-12"
category: Nextjs
preview: "CSR은 React, Vue 등의 SPA(Single Page Application)에서 쓰이는 기법으로, 클라이언트 측에서 화면을 구성하고 렌더링을 진행한다. 초반 사용자 경험이 좋지 않다. 클라이언트 측에서 JS 번들 파일을 다운 받고, 데이터가 담긴 html 파일을 구성하여 렌더링한다. 그러면 JS 번들 파일을 다 다운받기 전까지는 데이터가 없는 빈 html 파일이 렌더링되어 사용자는 빈 화면을 보게 된다. JS 번들 파일을 다운받는 시간이 오래 걸릴수록 사용자 경험이 나빠진다. 하지만 Code splitting으로 어느 정도 해결이 가능하다. 검색엔진최적화 (SEO)에 취약하다. 검색엔진은 html 파일을 바탕으로 이 사이트가 검색 결과에 알맞은 사이트인지 판단하여 검색결과에 보여준다. 하지만 CSR를 사용하는 애플리케이션의 초기 html 파일에는 데이터가 없다. 그래서 자바스크립트를 실행하지 않는 검색엔진은 애플리케이션의 정보를 제대로 수집할 수 없어 검색결과에 잘 나타나지 않을 수 있다."
---

# Client Side Rendering

CSR은 React, Vue 등의 SPA(Single Page Application)에서 쓰이는 기법으로, **클라이언트 측에서 화면을 구성하고 렌더링을 진행**한다.

#### 초반 사용자 경험이 좋지 않다. 👥

- 클라이언트 측에서 JS 번들 파일을 다운 받고, 데이터가 담긴 html 파일을 구성하여 렌더링한다.
- 그러면 JS 번들 파일을 다 다운받기 전까지는 **데이터가 없는 빈 html 파일**이 렌더링되어 사용자는 빈 화면을 보게 된다.
- JS 번들 파일을 다운받는 시간이 오래 걸릴수록 사용자 경험이 나빠진다.
- 하지만 Code splitting으로 어느 정도 해결이 가능하다.
  - [[React] 코드 스플리팅](https://velog.io/@eunnbi/React-%EC%BD%94%EB%93%9C-%EC%8A%A4%ED%94%8C%EB%A6%AC%ED%8C%85)

#### 검색엔진최적화 (SEO)에 취약하다. 🔎

- 검색엔진은 html 파일을 바탕으로 이 사이트가 검색 결과에 알맞은 사이트인지 판단하여 검색결과에 보여준다.
- 하지만 CSR를 사용하는 애플리케이션의 **초기 html 파일에는 데이터가 없다.**
- 그래서 **자바스크립트를 실행하지 않는 검색엔진**은 애플리케이션의 정보를 제대로 수집할 수 없어 검색결과에 잘 나타나지 않을 수 있다.

#### 서버 부하를 줄일 수 있다. 🤯

- 클라이언트 측에서 렌더링을 진행하고 서버로부터는 필요한 데이터만 가져오고 갱신하면 되기 때문에 서버 부하를 줄일 수 있다.

<br/>

# Server Side Rendering

SSR은 **서버 측에서 데이터가 담긴 html 파일을 구성하고 브라우저 측에 전달하여 렌더링**하는 방법이다.

#### 초반 사용자 경험이 좋다. 👥

- JS 번들 파일이 다 다운받기 전에도 html 상에 사용자가 볼 수 있는 콘텐츠가 있기 때문에 사용자 경험이 향상된다.

#### 검색엔진최적화 (SEO)에 좋다. 🔎

- 서버 측에서 데이터가 담긴 html 파일을 반환하기 때문에 검색 엔진이 애플리케이션의 페이지 정보를 원할하게 수집할 수 있다.

#### 서버 부하가 심하다. 🤯

- 클라이언트가 페이지를 이동하거나, 클릭으로 인한 다른 요청이 생길 때마다 서버 측에서 다시 html 파일을 구성하여 반환한다.
- 화면에서 바뀌지 않아도 되는 부분도 리렌더링된다.

<br/>

# 👍🏻 NextJS의 장점

Next.js는 React에서 SSR을 쉽게 구현할 수 있도록 도와주는 프레임워크이다.

- 사용자 요청 시 Server Side에서 html 파일을 구성하여 브라우저 측에 전달하여 `pre-rendering`한다.
- 이후 JS 파일이 로드되어 자바스크립트 코드가 적용된다. (이때 자바스크립트 코드가 적용되는 과정을 **Hydration**이라고 하고 Hydration을 거쳐 interactive한 페이지가 완성된다.)

👉 초반 사용자 경험이 향상되고 SEO에 좋다.

- 사용자가 페이지와 상호작용하며 다른 페이지로 이동할 경우 페이지는 CSR 방식으로 렌더링된다.
- Next.js에서는 Link 컴포넌트 혹은 `router.push()` 를 통해 페이지 이동을 하는데 이 둘은 **client side navigation**을 제공한다.
- 즉, 페이지 이동이 클라어언트 측 자바스크립트를 통해 이루어진다.
- [Client-Side Navigation](https://nextjs.org/learn/basics/navigate-between-pages/client-side)

👉 서버의 부하를 줄일 수 있다.

> SSR과 CSR를 함께 사용하여 둘의 장점을 살리고 단점은 보완한다.

> **추가**: Next.js에서는 Automatic Code Splitting이 이루어진다.
>
> - import를 분석하여 로딩되는 페이지가 꼭 필요로 하는 JS 파일만 로드한다.
> - JS를 포함하는 화면이 빨리 구성되어 사용자 경험이 좋다.
> - 다만 절반 이상 사용되는 JS 파일은 `main bundle`에 포함된다.