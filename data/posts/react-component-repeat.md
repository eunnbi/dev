---
emoji: 🔑
title: 컴포넌트 반복
date: "2022-01-14"
category: React
preview: "'리액트를 다루는 기술'이라는 책을 읽고 배운 것을 바탕으로 작성되었다. "
---

> "리액트를 다루는 기술"이라는 책을 읽고 배운 것을 바탕으로 작성되었다.

# 배열 렌더링하기

`Array.prototype.map(callback(currentValue, index, array), thisArg)`

- **배열 각 요소에 대해 콜백함수를 실행하고 실행결과를 모은 새 배열을 리턴한다.**
- `currentValue`: 현재 처리할 요소 값
- `index`: 현재 요소의 인덱스 값
- `array`: 메서드를 호출한 배열
- `thisArg`: 콜백함수를 실행할 때 사용할 `this`

```jsx
function User({ user }) {
  return (
    <div>
      <span>{user.username}</span>
      <span>({user.email})</span>
    </div>
  );
}

function UserList() {
  const users = [
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com"
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com"
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com"
    }
  ];
  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default UserList;
```

<br/>

## 🔑 key

key는 React가 어떤 요소를 변경, 추가 또는 삭제할지 식별하는 것을 돕는다.

### key 설정

- key 값은 다른 요소들 사이에서 해당 요소를 고유하게 식별할 수 있는 값으로 설정해야 한다.
- 만약 고유값이 없다면 index 값을 key 값으로 사용하면 된다.
- key는 배열 내부 형제 요소들 사이에서 고유해야 한다. (전체 범위에서 고유할 필요는 없다.)
- 만약에 형제 요소들 중 중복된 key가 있을 때는 렌더링 시에 오류 메시지가 콘솔에 나타나게 된다.

### key 의 존재유무에 따른 업데이트 방식

```jsx
const array = ["a", "b", "c", "d"];
array.map(item => <div>{item}</div>);
```

- 위 배열의 b 와 c 사이에 z 를 삽입하게 된다면, 리렌더링을 하게 될 때 `<div>b</div>` 와 `<div>c</div>` 사이에 새 `div` 태그를 삽입을 하게 되는 것이 아니라, 기존의 c 가 z 로바뀌고, d 는 c 로 바뀌고, 맨 마지막에 d 가 새로 삽입된다.
- 그 다음에 a 를 제거하게 된다면, 기존의 a 가 b 로 바뀌고, b 는 z 로 바뀌고, z는 c로 바뀌고, c는 d 로바뀌고, 맨 마지막에 있는 d 가 제거된다.
- 하지만, **수정되지 않은 요소는 그대로 두고 원하는 곳에 요소를 삽입하거나 삭제하는 것**이 정상적인 동작이다. 그래서 배열을 렌더링 할 때에는 **고유한 key 값**을 지정하는 것이 중요하다.

```jsx
const array = [
  {
    id: 0,
    text: "a"
  },
  {
    id: 1,
    text: "b"
  },
  {
    id: 2,
    text: "c"
  },
  {
    id: 3,
    text: "d"
  }
];
array.map(item => <div key={item.id}>{item.text}</div>);
```

<br/>

# 배열에 항목 추가하기

- 배열 형태의 state에 요소를 추가하는 방법
  - spread 연산자 사용, concat 메서드 사용 등
  - 기존의 배열을 수정하지 않고, 새로운 원소가 추가된 새로운 배열을 반환하는 방법을 사용해야 한다. (불변성 유지)

```jsx
// UserList.js
function User({ user }) {
  return (
    <div>
      <span>{user.username}</span>
      <span>({user.email})</span>
    </div>
  );
}

function UserList() {
  const users = [
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com"
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com"
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com"
    }
  ];
  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default UserList;
```

```jsx
// CreateUser.js
function CreateUser({ username, email, onChange, onCreate }) {
  return (
    <div>
      <input
        type="text"
        name="username"
        value={username}
        onChange={onChange}
        placeholder="계정명"
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={onChange}
        placeholder="이메일"
      />
      <button onClick={onCreate}>등록</button>
    </div>
  );
}
export default Createuser;
```

```jsx
// App.js
import React, { useRef, useState } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: ""
  });
  const { username, email } = inputs;

  const [users, setUsers] = userState([
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com"
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com"
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com"
    }
  ]);

  const nextId = useRef(4);

  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const onCreate = () => {
    const newUser = {
      id: nextId.current,
      username,
      email
    };

    setUsers([...user, newUser]); // spread 연산자 이용
    // setUsers(user.concat(newUser));   // concat 메서드 이용

    setInputs({
      username: "",
      email: ""
    });
    nextId.current++;
  };

  return (
    <div>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} />
    </div>
  );
}
```

<br/>

# 배열에 항목 제거하기

`Array.prototype.filter(callback(currentValue, index, array), thisArg)`

- 각 배열 요소에 대해 콜백함수를 실행하고 **실행 결과가 true인 요소**들만 모은 새 배열을 반환한다.
- `currentValue`: 현재 처리할 요소 값
- `index`: 현재 요소의 인덱스 값
- `array`: 메서드를 호출한 배열
- `thisArg`: 콜백함수를 실행할 때 사용할 `this`

```jsx
// UserList.js
function User({ user, onRemove }) {
  return (
    <div>
      <span>{user.username}</span>
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
}

function UserList({ users, onRemove }) {
  return (
    <div>
      {users.map(user => (
        <User user={user} onRemove={onRemove} key={user.id} />
      ))}
    </div>
  );
}

export default UserList;
```

```jsx
// App.js
import React, { useRef, useState } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: ""
  });
  const { username, email } = inputs;

  const [users, setUsers] = userState([
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com"
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com"
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com"
    }
  ]);

  const nextId = useRef(4);

  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  const onCreate = () => {
    const newUser = {
      id: nextId.current,
      username,
      email
    };

    setUsers([...users, newUser]); // spread 연산자 이용
    // setUsers(users.concat(newUser));   // concat 메서드 이용

    setInputs({
      username: "",
      email: ""
    });
    nextId.current++;
  };

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id)); // filer 메서드 이용
  };

  return (
    <div>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} />
    </div>
  );
}
```

- `onRemove`라는 이벤트 핸들러를 계속 props로 전달하여 최종적으로 User 컴포넌트에 전달

<br/>

# 배열에 항목 수정하기

User 컴포넌트에 계정명을 클릭했을때 색상이 초록색으로 바뀌고, 다시 누르면 검정색으로 바뀌도록 구현

```jsx
// UserList.js
function User({ user, onRemove, onToggle }) {
  return (
    <div>
      <span
        onClick={() => onToggle(user.id)}
        style={{
          cursor: "pointer",
          color: user.active ? "green" : "black"
        }}
      >
        {user.username}
      </span>
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
}

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map(user => (
        <User
          user={user}
          onRemove={onRemove}
          onToggle={onToggle}
          key={user.id}
        />
      ))}
    </div>
  );
}

export default UserList;
```

```jsx
// App.js
import React, { useRef, useState } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: ""
  });
  const { username, email } = inputs;

  const [users, setUsers] = userState([
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
      active: true
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
      active: false
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
      active: false
    }
  ]);

  const nextId = useRef(4);

  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  const onCreate = () => {
    const newUser = {
      id: nextId.current,
      username,
      email
    };

    setUsers([...users, newUser]); // spread 연산자 이용
    // setUsers(users.concat(newUser));   // concat 메서드 이용

    setInputs({
      username: "",
      email: ""
    });
    nextId.current++;
  };

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id)); // filer 메서드 이용
  };

  const onToggle = id => {
    setUsers(
      users.map(user =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  return (
    <div>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </div>
  );
}
```

> 배열을 이용해 컴포넌트를 렌더링할 때는 **key** 값을 설정하여 React가 어떤 요소를 변경, 추가 또는 삭제할지 식별하도록 한다.

> 배열 형태의 상태를 업데이트할 때는 **불변성**을 지켜야 한다. `map`이나 `filter`와 같이 새로운 배열을 반환하는 배열 메서드를 이용하거나 배열의 사본을 만들어 업데이트하는 방법이 있다.

<br/>

참고

- [벨로퍼트와 함께하는 모던 리액트](https://react.vlpt.us/basic/11-render-array.html)
- [React 공식문서](https://ko.reactjs.org/docs/lists-and-keys.html)
