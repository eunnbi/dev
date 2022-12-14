---
emoji: ๐ผ
title: Component Design Pattern
date: "2022-06-30"
category: React
preview: "React๋ ๊ฐ๋ฐ์๊ฐ ์์ ๋กญ๊ฒ ์ปดํฌ๋ํธ๋ฅผ ์งค ์ ์๊ณ , ๋ค์ํ ํจํด๋ค์ด ์กด์ฌํ๋ค. ๊ทธ ์ค์์ ๋ํ์ ์ธ ๋์์ธ ํจํด์ ์์๋ณด์. Container Component์์ ๋ฐ์ดํฐ๋ฅผ ์ฒ๋ฆฌํ๊ณ  Presentational Component์์ ๋ฐ์ดํฐ๋ฅผ ์ถ๋ ฅํ๋ ํจํด์ด๋ค. ์ปดํฌ๋ํธ๋ฅผ ๋๋๋ ์ด์ ๊ฐ ๋ฌด์์ผ๊น?? ๐ค ํ๋์ ์ปดํฌ๋ํธ์ api ํธ์ถ, ์ด๋ฒคํธ ํจ์, ๋น์ฆ๋์ค ๋ก์ง, ์ํ๊ด๋ฆฌ๊ฐ ๋ชจ๋ ๋ด๊ฒจ์์ผ๋ฉด ์ปดํฌ๋ํธ๊ฐ ๋น๋ํด์ ธ์ ์ ์ง๋ณด์๊ฐ ์ด๋ ค์์ง๋ค. ๊ทธ๋์ UI์ ๋ก์ง์ ๊ฐ๊ฐ Presentational Component์ Container Component๋ก ๋ถ๋ฆฌํ์ฌ ๊ด๋ฆฌํ๋ค."
---

# Component Design Pattern

React๋ ๊ฐ๋ฐ์๊ฐ ์์ ๋กญ๊ฒ ์ปดํฌ๋ํธ๋ฅผ ์งค ์ ์๊ณ , ๋ค์ํ ํจํด๋ค์ด ์กด์ฌํ๋ค. ๊ทธ ์ค์์ ๋ํ์ ์ธ ๋์์ธ ํจํด์ ์์๋ณด์.

## Presentational & Container Component

`Container Component`์์ ๋ฐ์ดํฐ๋ฅผ ์ฒ๋ฆฌํ๊ณ  `Presentational Component`์์ ๋ฐ์ดํฐ๋ฅผ ์ถ๋ ฅํ๋ ํจํด์ด๋ค.

**์ปดํฌ๋ํธ๋ฅผ ๋๋๋ ์ด์ ๊ฐ ๋ฌด์์ผ๊น??** ๐ค<br/>
ํ๋์ ์ปดํฌ๋ํธ์ api ํธ์ถ, ์ด๋ฒคํธ ํจ์, ๋น์ฆ๋์ค ๋ก์ง, ์ํ๊ด๋ฆฌ๊ฐ ๋ชจ๋ ๋ด๊ฒจ์์ผ๋ฉด ์ปดํฌ๋ํธ๊ฐ ๋น๋ํด์ ธ์ ์ ์ง๋ณด์๊ฐ ์ด๋ ค์์ง๋ค. ๊ทธ๋์ UI์ ๋ก์ง์ ๊ฐ๊ฐ `Presentational Component`์ `Container Component`๋ก ๋ถ๋ฆฌํ์ฌ ๊ด๋ฆฌํ๋ค.

**์์**

```jsx
// Before
// src/components/Login/LoginForm.js

const LoginForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const { email, password } = form;

  const onChange = e => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>์ด๋ฉ์ผ</label>
        <input type="text" value={email} name="email" onChange={onChange} />
      </div>
      <div>
        <label>๋น๋ฐ๋ฒํธ</label>
        <input
          type="password"
          value={password}
          name="password"
          onChange={onChange}
        />
      </div>
      <button type="submit">๋ก๊ทธ์ธ</button>
    </form>
  );
};

export default LoginForm;
```

```jsx
// After
// src/components/Login/LoginForm.container.js
const LoginFormContainer = () => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const { email, password } = form;

  const onChange = e => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <LoginForm
      email={email}
      password={password}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default LoginFormContainer;
```

```jsx
// src/components/Login/LoginForm.presenter.js

const LoginForm = ({ email, password, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>์ด๋ฉ์ผ</label>
        <input type="text" value={email} name="email" onChange={onChange} />
      </div>
      <div>
        <label>๋น๋ฐ๋ฒํธ</label>
        <input
          type="password"
          value={password}
          name="password"
          onChange={onChange}
        />
      </div>
      <button type="submit">๋ก๊ทธ์ธ</button>
    </form>
  );
};

export default LoginForm;
```

> Redux ์ฐฝ์์์ธ Dan Abramov๋ ๋ ์ด์ ์ด ํจํด์ ์ด์ฉํ์ง ์๋๋ค๊ณ  ํ๋ค.
> `Component & Hooks` ํจํด์ผ๋ก ๋์ฒด๊ฐ ๊ฐ๋ฅํ๊ณ , ์ด ํจํด์ **UI๋ฟ๋ง ์๋๋ผ ๋ก์ง๊น์ง ์ฌํ์ฉ์ด ๊ฐ๋ฅ**ํ๊ธฐ ๋๋ฌธ์ด๋ค.<br/>
> ๐ [์ฐธ๊ณ  - Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)

<br/>

## Component & Hooks

- ๋ก์ง์ `Container Component` ๋์  `Hook`์์ ๊ด๋ฆฌํ๋ค.
- `Container Component`๋ฅผ ์ฌ์ฉํ๋ฉด ๊ณตํต ๋ก์ง์ด ๋ฐ์ํ์ ๋ ๋ก์ง์ ๋๊ฒจ์ฃผ์ง ๋ชปํ์ง๋ง, `Hook`์์ ์ปดํฌ๋ํธ ๋ก์ง์ ๊ด๋ฆฌํ๋ฉด **๋ก์ง ์ฌ์ฌ์ฉ**์ด ๊ฐ๋ฅํด์ง๋ค.

**์์**

```jsx
// src/components/Login/LoginForm.js

const LoginForm = () => {
  const { form, onChange, onSubmit } = useLogin();
  const { email, password } = form;

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>์ด๋ฉ์ผ</label>
        <input type="text" value={email} name="email" onChange={onChange} />
      </div>
      <div>
        <label>๋น๋ฐ๋ฒํธ</label>
        <input
          type="password"
          value={password}
          name="password"
          onChange={onChange}
        />
      </div>
      <button type="submit">๋ก๊ทธ์ธ</button>
    </form>
  );
};

export default LoginForm;
```

```jsx
// src/components/Login/useLogin.js

const useLogin = () => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const { email, password } = form;

  const onChange = e => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log(form);
  };

  return { form, onChange, onSubmit };
};

export default useLogin;
```

<br/>

## Atomic design pattern

๋ฆฌ์กํธ ์ปดํฌ๋ํธ๋ฅผ `Atom` ๋จ์์์ ์์ํ์ฌ ํ๋์ฉ ๊ฒฐํฉํ๋ ํจํด์ ๋งํ๋ค.

- UI ์ฌ์ฌ์ฉ์ฑ์ด ๋งค์ฐ ๋ฐ์ด๋ ๋น ๋ฅธ ๊ฐ๋ฐ์ ์งํํ  ์ ์๋ค.
- ํ์ง๋ง ๋์์ธ ์์คํ์ ๊ตฌ์ถํ๊ธฐ ์ํ ์ด๊ธฐ ๋น์ฉ์ด ๋ง์ด ๋ค๊ณ , ๋ก์ง๊ณผ ์ํ๋ค์ด page ๋จ์์์ `props drilling`์ ํตํด ์ ๋ฌ๋๋ค.
- ๋์์ธ์ด ์์ฑ๋์ด ๋์์ธ ์์คํ์ ๊ตฌ์ถํ๊ธฐ ํธํ๋ค๋ฉด, atomic design pattern์ ์ ํ์ฉํ  ์ ์์ง๋ง, ๊ธฐํ๊ณผ ๋์์ธ์ด ์์ฃผ ๋ณ๊ฒฝ๋๋ค๋ฉด ์ฌ์ฉํ๊ธฐ ์ด๋ ต๋ค.

![Atomic design pattern](1.png)

**Atom**

- `input`, `button`๊ณผ ๊ฐ์ HTML ํ๊ทธ๋ ์ต์ ๊ธฐ๋ฅ์ ๊ฐ์ง ๊ฐ์ฅ ์์ ๋จ์์ ์ปดํฌ๋ํธ๋ฅผ ๋งํ๋ค.

**Molecules**

- `Atom`๋ค์ด ์ต์์ ์ญํ ์ ์ํํ  ์ ์๋๋ก ์กฐํฉํ ์ปดํฌ๋ํธ
- ex) ๋ก๊ทธ์ธ ์๋ ฅ์ฐฝ : input 2๊ฐ + button 1๊ฐ

**Organisms**

- `layout` ๋จ์๋ก `Molecules`๊ณผ `Atom`์ ์กฐํฉํ ์ปดํฌ๋ํธ
- ex) Header, Navigatioon, Footer ๋ฑ

**Templates**

- `Organisms`๋ฅผ ์กฐํฉํ์ฌ ํ๋์ ํ์ด์ง๋ฅผ ๊ตฌ์ฑํ๋ ์ปดํฌ๋ํธ
- ํ์ง๋ง ๋ฐ์ดํฐ๊ฐ ๋ค์ด๊ฐ์ง ์๊ณ  ๋ฐ์ดํฐ์ ํ๋ฆ์ด๋ ๋ ์ด์์๋ง ๋ณด์ฌ์ค๋ค.
- ๊ฐ์ฒด ์งํญ ํ๋ก๊ทธ๋๋ฐ์ `class`์ ๋น์ทํ๋ค.

**Pages**

- `Template`์ ๋ฐ์ดํฐ๋ฅผ ๋ฃ์ ์ปดํฌ๋ํธ

<br/>

> ๐ ๋ค์ํ ์ปดํฌ๋ํธ ๋์์ธ ํจํด์ด ์์ง๋ง, ๊ทธ ์ค์์ ์ ๋ต์ ์๋ค. ์ฌ๋ฌ ๋์์ธ ํจํด์ ์๋ํด ๊ฐ ์ปดํฌ๋ํธ ๋์์ธ ํจํด์ ์ฅ๋จ์ ์ ํ์ํ๋ฉด์ ํ๋ก์ ํธ์ ๋ง๋ ๋์์ธ ํจํด์ ์ฐพ์๋ณด๊ฒ ๋ค.<br/> ๐ [๋ค์ํ ๋์์ธ ํจํด์ ๋ํด ์์๋ณด๊ธฐ](https://patterns-dev-kr.github.io/)
