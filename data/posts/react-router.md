---
emoji: 🧭
title: 리액트 라우터
date: "2022-01-15"
category: React
preview: "React Router v6 기준으로 작성됨. Single Page Application: 말 그대로 한 개의 페이지로 이루어져 있는 애플리케이션을 말한다. 전통적인 웹 애플리케이션은 여러 개의 페이지로 이루어져 있었다. 사용자가 다른 페이지로 이동할 때마다 새로운 html 파일을 요청해서 받고, 렌더링 엔진이 해석한 뒤 화면에 보여주었다. 애플리케이션 내에서 페이지 전환이 일어날 때마다 html 파일을 계속 서버에 새로 요청하면 서버에 부담이 될 수 있다. 요즘은 리액트 같은 라이브러리 혹은 프레임워크를 사용하면 하나의 html 파일만 렌더링하고, 이후 사용자와의 인터랙션이 발생하면 자바스크립트를 사용하여 뷰를 업데이트해준다. 싱글 페이지라고 해서 화면의 종류가 하나인 것은 아니다. 다른 주소에 따라 다른 화면을 보여주는 것을 Routing이라 한다."
---

> React Router v6 기준으로 작성됨.

# SPA란?

Single Page Application: 말 그대로 한 개의 페이지로 이루어져 있는 애플리케이션을 말한다.

**과거**

- 전통적인 웹 애플리케이션은 여러 개의 페이지로 이루어져 있었다.
- 사용자가 다른 페이지로 이동할 때마다 새로운 html 파일을 요청해서 받고, 렌더링 엔진이 해석한 뒤 화면에 보여주었다.
- 애플리케이션 내에서 페이지 전환이 일어날 때마다 html 파일을 계속 서버에 새로 요청하면 서버에 부담이 될 수 있다.

**현재**

- 리액트 같은 라이브러리 혹은 프레임워크를 사용하면 **하나의 html 파일**만 렌더링하고, 이후 사용자와의 인터랙션이 발생하면 **자바스크립트를 사용하여 뷰를 업데이트**해준다.

**Routing**

- 싱글 페이지라고 해서 화면의 종류가 하나인 것은 아니다.
- **다른 주소에 따라 다른 화면을 보여주는 것**을 `Routing`이라 한다.
- 리액트 라우팅 라이브러리에는 리액트 라우터, 리치 라우터 등이 있다.

**단점**

1. 앱의 규모가 커지면 **자바스크립트 파일 크기가 커진다.**
   - 자바스크립트 파일이 커질수록 페이지 로딩 시간이 길어진다.
   - `code spliting`을 이용하면 라우트별로 자바스크립트 파일들을 나누어 로드할 수 있어서 트래픽과 로딩속도를 개선할 수 있다.
2. 리액트 라우터같이 브라우저 측에서 자바스크립트를 이용하여 라우트를 관리하면 **자바스크립트를 실행하지 않는 일반 크롤러**에서 페이지의 정보를 제대로 수집할 수 없어 검색결과에서 잘 나타나지 않을 수 있다.
3. **자바스크립트가 실행되기 전까지 페이지가 비어있기 때문에**, 자바스크립트 파일이 아직 캐싱되지 않은 사용자에게는 아주 짧은 시간 동안 빈 페이지가 나타날 수 있다. 만약 자바스크립트 파일 크기가 크다면 빈 페이지가 보여지는 시간이 더 길어질 것이다.

# 리액트 라우터 기본적인 사용법

## BrowserRouter 컴포넌트

- 웹 애플리케이션에 HTML5 History API를 사용하여 페이지를 새로고침하지 않고 브라우저 주소를 변경한다.
- 현재 브라우저 주소에 관련된 정보를 컴포넌트에서 사용할 수 있도록 한다.

```jsx
// index.js
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  // 필수!!
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

## Route 컴포넌트

- 주소규칙(path prop)에 따라 어떤 컴포넌트(element prop)를 보여줄지 정의한다.

```jsx
<Route path="주소규칙" element={<컴포넌트 이름 />} />
```

## Routes 컴포넌트

- Route 컴포넌트들은 반드시 Routes의 자식 컴포넌트여야 한다.
- Routes 컴포넌트는 여러 Route 컴포넌트를 감싸서 **주소규칙이 가장 일치하는 하나의 Route 컴포넌트를 렌더링**하도록 한다.
- 모든 주소규칙와 일치하지 않을 때 보여줄 Not Found 화면도 구현할 수 있다.
  - path prop 값으로 `"/*"`를 전달하면 해당 Route는 모든 경로에 매치하게 된다.
  - 만약 현재 브라우저 주소가 나머지 Route 컴포넌트의 주소규칙과 일치하지 않았다면 path prop값이 "/\*"인 Route 컴포넌트가 렌더링된다.

```jsx
<Routes>
  <Route path="/" .... />
  <Route path="/*" element={<NotFound/>}/>
</Routes>
```

## Link 컴포넌트

- 클릭하면 특정 route로 이동시켜 주는 컴포넌트이다.
- 컴포넌트 자체는 a 태그로 이루어져 있지만, 페이지 전환을 방지하는 기능이 내장되어 있다.

```jsx
<Link to="주소">내용</Link>
```

## NavLink 컴포넌트

- Link 컴포넌트와 유사하지만 현재 브라우저 경로와 to prop값이 일치하는 경우 특정 스타일 혹은 CSS 클래스를 적용할 수 있는 컴포넌트이다.

```jsx
const activeStyle={
  textDecoration: "underline"
};

const activeClassName = "underline";


<NavLink to="messages" style={({ isActive }) => isActive ? activeStyle : undefined}>
  Messages
</NavLink>

<NavLink to="messages" className={({ isActive }) => isActive ? activeClassName : undefined}>
  Tasks
</NavLink>
```

# URL 파라미터와 쿼리

페이지 주소를 정의할 때 가끔은 유동적인 값을 사용해야 할 때가 있다.

- 파라미터: 아이디 혹은 이름을 사용하여 특정 데이터를 조회할 때 사용 (`/profile/eunnbi`)
- 쿼리 스트링: 키워드 검색, 페이지네이션, 정렬 방식 등 데이터 조회에 필요한 옵션을 전달할 때 사용 (`/about?details=true`)

## URL 파라미터

- `useParams()`를 이용하여 URL 파라미터를 조회할 수 있다.

```jsx
<Route path="/profiles/:username" element={<Profile />} />
```

```jsx
const Profile = () => {
  const { username } = useParams();
  // ...
};
```

## URL 쿼리

- 쿼리는 location 객체의 search 프로퍼티에서 조회할 수 있다.
- location 객체는 useLocation 함수를 이용하여 조회할 수 있다.
  - 이 객체는 현재 사용자가 보고 있는 페이지의 정보를 가지고 있다.
- useSearchParams 함수를 이용하여 쿼리 스트링을 쉽게 다룰 수 있다.
  - 배열 타입의 값을 반환한다.
  - 첫번째 원소는 쿼리 파라미터를 조회하거나 수정하는 메서드들이 담긴 객체를 반환한다.
    - get 메서드를 통해 특정 쿼리 파라미터를 조회할 수 있고, set 메서드를 통해 특정 쿼리 파라미터를 업데이트할 수 있다.
  - 두번째 원소는 쿼리 파라미터를 업데이트할 수 있는 함수를 반환한다.

```jsx
const About = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get("detail");

  const onToggleDetail = () => {
    setSearchParams({ detail: detail === "true" ? false : true });
  };

  return (
    <div>
      <h1>About</h1>
      <p>This page is About</p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      {detail && <p>details</p>}
    </div>
  );
};
```

# 중첩 라우터와 Outlet 컴포넌트

- 중첩 라우트는 라우트 내부에 또 라우트를 정의하는 것을 말한다.
- Outlet 컴포넌트는 부모 라우트 컴포넌트에서 자식 라우트 컴포넌트를 렌더링할 때 사용된다.
- 중첩 라우터와 Outlet 컴포넌트는 모든 페이지에서 공통적으로 보여줘야 하는 컴포넌트가 있을 때 유용하게 사용된다.

```jsx
// 공통 레이아웃 컴포넌트
const Layout = () => {
  return (
    <div>
      <header>...</header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
```

```jsx
// 중첩 라우트
const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
};
```

# useNavigate

```js
const navigate = useNavigate();
```

- navigate 함수는 두 가지 방법으로 사용 가능하다.
- 첫번째 인자로 **이동할 경로(to)** 를 전달하고 두번째 인자로는 options 객체를 전달한다. (두번째 인자는 생략 가능)
  - `navigate(to, { replace: true })`: 페이지를 이동할 때 현재 페이지를 페이지 기록에 남기지 않는다.
  - `navigate(to, { state })`: 이동할 페이지에 state값을 전달할 수 있다.
- **히스토리 스택에서 가고자 하는 델타 값**을 인자로 전달한다.
  - `navigate(-1)`: 뒤로 가기

# Navigate 컴포넌트

```jsx
// 예시
<Navigate to="/dashboard" replace={true} />
```

- Navigate 컴포넌트가 렌더링될 때 to prop값으로 전달한 경로로 현재 브라우저 경로를 바꾼다.
- 주로 페이지를 **리다이렉트**하고 싶을 때 사용한다. 예를 들어, 사용자의 로그인이 필요한 페이지인데 로그인을 안 했다면 로그인 페이지로 이동해야 할 때 Navigate 컴포넌트를 사용한다.

<br/>

참고

- [React Router API Reference](https://reactrouter.com/docs/en/v6/api)
- [리액트 라우터 v6 튜토리얼](https://velog.io/@velopert/react-router-v6-tutorial)
