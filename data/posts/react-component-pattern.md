---
emoji: 🌼
title: Component Design Pattern
date: "2022-06-30"
category: React
preview: "React는 개발자가 자유롭게 컴포넌트를 짤 수 있고, 다양한 패턴들이 존재한다. 그 중에서 대표적인 디자인 패턴을 알아보자. Container Component에서 데이터를 처리하고 Presentational Component에서 데이터를 출력하는 패턴이다. 컴포넌트를 나누는 이유가 무엇일까?? 🤔 하나의 컴포넌트에 api 호출, 이벤트 함수, 비즈니스 로직, 상태관리가 모두 담겨있으면 컴포넌트가 비대해져서 유지보수가 어려워진다. 그래서 UI와 로직을 각각 Presentational Component와 Container Component로 분리하여 관리한다."
---

# Component Design Pattern

React는 개발자가 자유롭게 컴포넌트를 짤 수 있고, 다양한 패턴들이 존재한다. 그 중에서 대표적인 디자인 패턴을 알아보자.

## Presentational & Container Component

`Container Component`에서 데이터를 처리하고 `Presentational Component`에서 데이터를 출력하는 패턴이다.

**컴포넌트를 나누는 이유가 무엇일까??** 🤔<br/>
하나의 컴포넌트에 api 호출, 이벤트 함수, 비즈니스 로직, 상태관리가 모두 담겨있으면 컴포넌트가 비대해져서 유지보수가 어려워진다. 그래서 UI와 로직을 각각 `Presentational Component`와 `Container Component`로 분리하여 관리한다.

**예시**

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
        <label>이메일</label>
        <input type="text" value={email} name="email" onChange={onChange} />
      </div>
      <div>
        <label>비밀번호</label>
        <input
          type="password"
          value={password}
          name="password"
          onChange={onChange}
        />
      </div>
      <button type="submit">로그인</button>
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
        <label>이메일</label>
        <input type="text" value={email} name="email" onChange={onChange} />
      </div>
      <div>
        <label>비밀번호</label>
        <input
          type="password"
          value={password}
          name="password"
          onChange={onChange}
        />
      </div>
      <button type="submit">로그인</button>
    </form>
  );
};

export default LoginForm;
```

> Redux 창시자인 Dan Abramov는 더 이상 이 패턴을 이용하지 않는다고 했다.
> `Component & Hooks` 패턴으로 대체가 가능하고, 이 패턴은 **UI뿐만 아니라 로직까지 재활용이 가능**하기 때문이다.<br/>
> 👉 [참고 - Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)

<br/>

## Component & Hooks

- 로직을 `Container Component` 대신 `Hook`에서 관리한다.
- `Container Component`를 사용하면 공통 로직이 발생했을 때 로직을 넘겨주지 못하지만, `Hook`에서 컴포넌트 로직을 관리하면 **로직 재사용**이 가능해진다.

**예시**

```jsx
// src/components/Login/LoginForm.js

const LoginForm = () => {
  const { form, onChange, onSubmit } = useLogin();
  const { email, password } = form;

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>이메일</label>
        <input type="text" value={email} name="email" onChange={onChange} />
      </div>
      <div>
        <label>비밀번호</label>
        <input
          type="password"
          value={password}
          name="password"
          onChange={onChange}
        />
      </div>
      <button type="submit">로그인</button>
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

리액트 컴포넌트를 `Atom` 단위에서 시작하여 하나씩 결합하는 패턴을 말한다.

- UI 재사용성이 매우 뛰어나 빠른 개발을 진행할 수 있다.
- 하지만 디자인 시스템을 구축하기 위한 초기 비용이 많이 들고, 로직과 상태들이 page 단위에서 `props drilling`을 통해 전달된다.
- 디자인이 완성되어 디자인 시스템을 구축하기 편하다면, atomic design pattern을 잘 활용할 수 있지만, 기획과 디자인이 자주 변경되다면 사용하기 어렵다.

![Atomic design pattern](1.png)

**Atom**

- `input`, `button`과 같은 HTML 태그나 최소 기능을 가진 가장 작은 단위의 컴포넌트를 말한다.

**Molecules**

- `Atom`들이 최소의 역할을 수행할 수 있도록 조합한 컴포넌트
- ex) 로그인 입력창 : input 2개 + button 1개

**Organisms**

- `layout` 단위로 `Molecules`과 `Atom`을 조합한 컴포넌트
- ex) Header, Navigatioon, Footer 등

**Templates**

- `Organisms`를 조합하여 하나의 페이지를 구성하는 컴포넌트
- 하지만 데이터가 들어가지 않고 데이터의 흐름이나 레이아웃만 보여준다.
- 객체 지항 프로그래밍의 `class`와 비슷하다.

**Pages**

- `Template`에 데이터를 넣은 컴포넌트

<br/>

> 👀 다양한 컴포넌트 디자인 패턴이 있지만, 그 중에서 정답은 없다. 여러 디자인 패턴을 시도해 각 컴포넌트 디자인 패턴의 장단점을 파악하면서 프로젝트에 맞는 디자인 패턴을 찾아보겠다.<br/> 👉 [다양한 디자인 패턴에 대해 알아보기](https://patterns-dev-kr.github.io/)
