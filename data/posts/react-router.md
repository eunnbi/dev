---
emoji: π§­
title: λ¦¬μ‘νΈ λΌμ°ν°
date: "2022-01-15"
category: React
preview: "React Router v6 κΈ°μ€μΌλ‘ μμ±λ¨. Single Page Application: λ§ κ·Έλλ‘ ν κ°μ νμ΄μ§λ‘ μ΄λ£¨μ΄μ Έ μλ μ νλ¦¬μΌμ΄μμ λ§νλ€. μ ν΅μ μΈ μΉ μ νλ¦¬μΌμ΄μμ μ¬λ¬ κ°μ νμ΄μ§λ‘ μ΄λ£¨μ΄μ Έ μμλ€. μ¬μ©μκ° λ€λ₯Έ νμ΄μ§λ‘ μ΄λν  λλ§λ€ μλ‘μ΄ html νμΌμ μμ²­ν΄μ λ°κ³ , λ λλ§ μμ§μ΄ ν΄μν λ€ νλ©΄μ λ³΄μ¬μ£Όμλ€. μ νλ¦¬μΌμ΄μ λ΄μμ νμ΄μ§ μ νμ΄ μΌμ΄λ  λλ§λ€ html νμΌμ κ³μ μλ²μ μλ‘ μμ²­νλ©΄ μλ²μ λΆλ΄μ΄ λ  μ μλ€. μμ¦μ λ¦¬μ‘νΈ κ°μ λΌμ΄λΈλ¬λ¦¬ νΉμ νλ μμν¬λ₯Ό μ¬μ©νλ©΄ νλμ html νμΌλ§ λ λλ§νκ³ , μ΄ν μ¬μ©μμμ μΈν°λμμ΄ λ°μνλ©΄ μλ°μ€ν¬λ¦½νΈλ₯Ό μ¬μ©νμ¬ λ·°λ₯Ό μλ°μ΄νΈν΄μ€λ€. μ±κΈ νμ΄μ§λΌκ³  ν΄μ νλ©΄μ μ’λ₯κ° νλμΈ κ²μ μλλ€. λ€λ₯Έ μ£Όμμ λ°λΌ λ€λ₯Έ νλ©΄μ λ³΄μ¬μ£Όλ κ²μ Routingμ΄λΌ νλ€."
---

> React Router v6 κΈ°μ€μΌλ‘ μμ±λ¨.

# SPAλ?

Single Page Application: λ§ κ·Έλλ‘ ν κ°μ νμ΄μ§λ‘ μ΄λ£¨μ΄μ Έ μλ μ νλ¦¬μΌμ΄μμ λ§νλ€.

**κ³Όκ±°**

- μ ν΅μ μΈ μΉ μ νλ¦¬μΌμ΄μμ μ¬λ¬ κ°μ νμ΄μ§λ‘ μ΄λ£¨μ΄μ Έ μμλ€.
- μ¬μ©μκ° λ€λ₯Έ νμ΄μ§λ‘ μ΄λν  λλ§λ€ μλ‘μ΄ html νμΌμ μμ²­ν΄μ λ°κ³ , λ λλ§ μμ§μ΄ ν΄μν λ€ νλ©΄μ λ³΄μ¬μ£Όμλ€.
- μ νλ¦¬μΌμ΄μ λ΄μμ νμ΄μ§ μ νμ΄ μΌμ΄λ  λλ§λ€ html νμΌμ κ³μ μλ²μ μλ‘ μμ²­νλ©΄ μλ²μ λΆλ΄μ΄ λ  μ μλ€.

**νμ¬**

- λ¦¬μ‘νΈ κ°μ λΌμ΄λΈλ¬λ¦¬ νΉμ νλ μμν¬λ₯Ό μ¬μ©νλ©΄ **νλμ html νμΌ**λ§ λ λλ§νκ³ , μ΄ν μ¬μ©μμμ μΈν°λμμ΄ λ°μνλ©΄ **μλ°μ€ν¬λ¦½νΈλ₯Ό μ¬μ©νμ¬ λ·°λ₯Ό μλ°μ΄νΈ**ν΄μ€λ€.

**Routing**

- μ±κΈ νμ΄μ§λΌκ³  ν΄μ νλ©΄μ μ’λ₯κ° νλμΈ κ²μ μλλ€.
- **λ€λ₯Έ μ£Όμμ λ°λΌ λ€λ₯Έ νλ©΄μ λ³΄μ¬μ£Όλ κ²**μ `Routing`μ΄λΌ νλ€.
- λ¦¬μ‘νΈ λΌμ°ν λΌμ΄λΈλ¬λ¦¬μλ λ¦¬μ‘νΈ λΌμ°ν°, λ¦¬μΉ λΌμ°ν° λ±μ΄ μλ€.

**λ¨μ **

1. μ±μ κ·λͺ¨κ° μ»€μ§λ©΄ **μλ°μ€ν¬λ¦½νΈ νμΌ ν¬κΈ°κ° μ»€μ§λ€.**
   - μλ°μ€ν¬λ¦½νΈ νμΌμ΄ μ»€μ§μλ‘ νμ΄μ§ λ‘λ© μκ°μ΄ κΈΈμ΄μ§λ€.
   - `code spliting`μ μ΄μ©νλ©΄ λΌμ°νΈλ³λ‘ μλ°μ€ν¬λ¦½νΈ νμΌλ€μ λλμ΄ λ‘λν  μ μμ΄μ νΈλν½κ³Ό λ‘λ©μλλ₯Ό κ°μ ν  μ μλ€.
2. λ¦¬μ‘νΈ λΌμ°ν°κ°μ΄ λΈλΌμ°μ  μΈ‘μμ μλ°μ€ν¬λ¦½νΈλ₯Ό μ΄μ©νμ¬ λΌμ°νΈλ₯Ό κ΄λ¦¬νλ©΄ **μλ°μ€ν¬λ¦½νΈλ₯Ό μ€ννμ§ μλ μΌλ° ν¬λ‘€λ¬**μμ νμ΄μ§μ μ λ³΄λ₯Ό μ λλ‘ μμ§ν  μ μμ΄ κ²μκ²°κ³Όμμ μ λνλμ§ μμ μ μλ€.
3. **μλ°μ€ν¬λ¦½νΈκ° μ€νλκΈ° μ κΉμ§ νμ΄μ§κ° λΉμ΄μκΈ° λλ¬Έμ**, μλ°μ€ν¬λ¦½νΈ νμΌμ΄ μμ§ μΊμ±λμ§ μμ μ¬μ©μμκ²λ μμ£Ό μ§§μ μκ° λμ λΉ νμ΄μ§κ° λνλ  μ μλ€. λ§μ½ μλ°μ€ν¬λ¦½νΈ νμΌ ν¬κΈ°κ° ν¬λ€λ©΄ λΉ νμ΄μ§κ° λ³΄μ¬μ§λ μκ°μ΄ λ κΈΈμ΄μ§ κ²μ΄λ€.

# λ¦¬μ‘νΈ λΌμ°ν° κΈ°λ³Έμ μΈ μ¬μ©λ²

## BrowserRouter μ»΄ν¬λνΈ

- μΉ μ νλ¦¬μΌμ΄μμ HTML5 History APIλ₯Ό μ¬μ©νμ¬ νμ΄μ§λ₯Ό μλ‘κ³ μΉ¨νμ§ μκ³  λΈλΌμ°μ  μ£Όμλ₯Ό λ³κ²½νλ€.
- νμ¬ λΈλΌμ°μ  μ£Όμμ κ΄λ ¨λ μ λ³΄λ₯Ό μ»΄ν¬λνΈμμ μ¬μ©ν  μ μλλ‘ νλ€.

```jsx
// index.js
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  // νμ!!
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

## Route μ»΄ν¬λνΈ

- μ£Όμκ·μΉ(path prop)μ λ°λΌ μ΄λ€ μ»΄ν¬λνΈ(element prop)λ₯Ό λ³΄μ¬μ€μ§ μ μνλ€.

```jsx
<Route path="μ£Όμκ·μΉ" element={<μ»΄ν¬λνΈ μ΄λ¦ />} />
```

## Routes μ»΄ν¬λνΈ

- Route μ»΄ν¬λνΈλ€μ λ°λμ Routesμ μμ μ»΄ν¬λνΈμ¬μΌ νλ€.
- Routes μ»΄ν¬λνΈλ μ¬λ¬ Route μ»΄ν¬λνΈλ₯Ό κ°μΈμ **μ£Όμκ·μΉμ΄ κ°μ₯ μΌμΉνλ νλμ Route μ»΄ν¬λνΈλ₯Ό λ λλ§**νλλ‘ νλ€.
- λͺ¨λ  μ£Όμκ·μΉμ μΌμΉνμ§ μμ λ λ³΄μ¬μ€ Not Found νλ©΄λ κ΅¬νν  μ μλ€.
  - path prop κ°μΌλ‘ `"/*"`λ₯Ό μ λ¬νλ©΄ ν΄λΉ Routeλ λͺ¨λ  κ²½λ‘μ λ§€μΉνκ² λλ€.
  - λ§μ½ νμ¬ λΈλΌμ°μ  μ£Όμκ° λλ¨Έμ§ Route μ»΄ν¬λνΈμ μ£Όμκ·μΉκ³Ό μΌμΉνμ§ μμλ€λ©΄ path propκ°μ΄ "/\*"μΈ Route μ»΄ν¬λνΈκ° λ λλ§λλ€.

```jsx
<Routes>
  <Route path="/" .... />
  <Route path="/*" element={<NotFound/>}/>
</Routes>
```

## Link μ»΄ν¬λνΈ

- ν΄λ¦­νλ©΄ νΉμ  routeλ‘ μ΄λμμΌ μ£Όλ μ»΄ν¬λνΈμ΄λ€.
- μ»΄ν¬λνΈ μμ²΄λ a νκ·Έλ‘ μ΄λ£¨μ΄μ Έ μμ§λ§, νμ΄μ§ μ νμ λ°©μ§νλ κΈ°λ₯μ΄ λ΄μ₯λμ΄ μλ€.

```jsx
<Link to="μ£Όμ">λ΄μ©</Link>
```

## NavLink μ»΄ν¬λνΈ

- Link μ»΄ν¬λνΈμ μ μ¬νμ§λ§ νμ¬ λΈλΌμ°μ  κ²½λ‘μ to propκ°μ΄ μΌμΉνλ κ²½μ° νΉμ  μ€νμΌ νΉμ CSS ν΄λμ€λ₯Ό μ μ©ν  μ μλ μ»΄ν¬λνΈμ΄λ€.

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

# URL νλΌλ―Έν°μ μΏΌλ¦¬

νμ΄μ§ μ£Όμλ₯Ό μ μν  λ κ°λμ μ λμ μΈ κ°μ μ¬μ©ν΄μΌ ν  λκ° μλ€.

- νλΌλ―Έν°: μμ΄λ νΉμ μ΄λ¦μ μ¬μ©νμ¬ νΉμ  λ°μ΄ν°λ₯Ό μ‘°νν  λ μ¬μ© (`/profile/eunnbi`)
- μΏΌλ¦¬ μ€νΈλ§: ν€μλ κ²μ, νμ΄μ§λ€μ΄μ, μ λ ¬ λ°©μ λ± λ°μ΄ν° μ‘°νμ νμν μ΅μμ μ λ¬ν  λ μ¬μ© (`/about?details=true`)

## URL νλΌλ―Έν°

- `useParams()`λ₯Ό μ΄μ©νμ¬ URL νλΌλ―Έν°λ₯Ό μ‘°νν  μ μλ€.

```jsx
<Route path="/profiles/:username" element={<Profile />} />
```

```jsx
const Profile = () => {
  const { username } = useParams();
  // ...
};
```

## URL μΏΌλ¦¬

- μΏΌλ¦¬λ location κ°μ²΄μ search νλ‘νΌν°μμ μ‘°νν  μ μλ€.
- location κ°μ²΄λ useLocation ν¨μλ₯Ό μ΄μ©νμ¬ μ‘°νν  μ μλ€.
  - μ΄ κ°μ²΄λ νμ¬ μ¬μ©μκ° λ³΄κ³  μλ νμ΄μ§μ μ λ³΄λ₯Ό κ°μ§κ³  μλ€.
- useSearchParams ν¨μλ₯Ό μ΄μ©νμ¬ μΏΌλ¦¬ μ€νΈλ§μ μ½κ² λ€λ£° μ μλ€.
  - λ°°μ΄ νμμ κ°μ λ°ννλ€.
  - μ²«λ²μ§Έ μμλ μΏΌλ¦¬ νλΌλ―Έν°λ₯Ό μ‘°ννκ±°λ μμ νλ λ©μλλ€μ΄ λ΄κΈ΄ κ°μ²΄λ₯Ό λ°ννλ€.
    - get λ©μλλ₯Ό ν΅ν΄ νΉμ  μΏΌλ¦¬ νλΌλ―Έν°λ₯Ό μ‘°νν  μ μκ³ , set λ©μλλ₯Ό ν΅ν΄ νΉμ  μΏΌλ¦¬ νλΌλ―Έν°λ₯Ό μλ°μ΄νΈν  μ μλ€.
  - λλ²μ§Έ μμλ μΏΌλ¦¬ νλΌλ―Έν°λ₯Ό μλ°μ΄νΈν  μ μλ ν¨μλ₯Ό λ°ννλ€.

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

# μ€μ²© λΌμ°ν°μ Outlet μ»΄ν¬λνΈ

- μ€μ²© λΌμ°νΈλ λΌμ°νΈ λ΄λΆμ λ λΌμ°νΈλ₯Ό μ μνλ κ²μ λ§νλ€.
- Outlet μ»΄ν¬λνΈλ λΆλͺ¨ λΌμ°νΈ μ»΄ν¬λνΈμμ μμ λΌμ°νΈ μ»΄ν¬λνΈλ₯Ό λ λλ§ν  λ μ¬μ©λλ€.
- μ€μ²© λΌμ°ν°μ Outlet μ»΄ν¬λνΈλ λͺ¨λ  νμ΄μ§μμ κ³΅ν΅μ μΌλ‘ λ³΄μ¬μ€μΌ νλ μ»΄ν¬λνΈκ° μμ λ μ μ©νκ² μ¬μ©λλ€.

```jsx
// κ³΅ν΅ λ μ΄μμ μ»΄ν¬λνΈ
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
// μ€μ²© λΌμ°νΈ
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

- navigate ν¨μλ λ κ°μ§ λ°©λ²μΌλ‘ μ¬μ© κ°λ₯νλ€.
- μ²«λ²μ§Έ μΈμλ‘ **μ΄λν  κ²½λ‘(to)** λ₯Ό μ λ¬νκ³  λλ²μ§Έ μΈμλ‘λ options κ°μ²΄λ₯Ό μ λ¬νλ€. (λλ²μ§Έ μΈμλ μλ΅ κ°λ₯)
  - `navigate(to, { replace: true })`: νμ΄μ§λ₯Ό μ΄λν  λ νμ¬ νμ΄μ§λ₯Ό νμ΄μ§ κΈ°λ‘μ λ¨κΈ°μ§ μλλ€.
  - `navigate(to, { state })`: μ΄λν  νμ΄μ§μ stateκ°μ μ λ¬ν  μ μλ€.
- **νμ€ν λ¦¬ μ€νμμ κ°κ³ μ νλ λΈν κ°**μ μΈμλ‘ μ λ¬νλ€.
  - `navigate(-1)`: λ€λ‘ κ°κΈ°

# Navigate μ»΄ν¬λνΈ

```jsx
// μμ
<Navigate to="/dashboard" replace={true} />
```

- Navigate μ»΄ν¬λνΈκ° λ λλ§λ  λ to propκ°μΌλ‘ μ λ¬ν κ²½λ‘λ‘ νμ¬ λΈλΌμ°μ  κ²½λ‘λ₯Ό λ°κΎΌλ€.
- μ£Όλ‘ νμ΄μ§λ₯Ό **λ¦¬λ€μ΄λ νΈ**νκ³  μΆμ λ μ¬μ©νλ€. μλ₯Ό λ€μ΄, μ¬μ©μμ λ‘κ·ΈμΈμ΄ νμν νμ΄μ§μΈλ° λ‘κ·ΈμΈμ μ νλ€λ©΄ λ‘κ·ΈμΈ νμ΄μ§λ‘ μ΄λν΄μΌ ν  λ Navigate μ»΄ν¬λνΈλ₯Ό μ¬μ©νλ€.

<br/>

μ°Έκ³ 

- [React Router API Reference](https://reactrouter.com/docs/en/v6/api)
- [λ¦¬μ‘νΈ λΌμ°ν° v6 νν λ¦¬μΌ](https://velog.io/@velopert/react-router-v6-tutorial)
