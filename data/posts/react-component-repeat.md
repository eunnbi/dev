---
emoji: π
title: μ»΄ν¬λνΈ λ°λ³΅
date: "2022-01-14"
category: React
preview: "'λ¦¬μ‘νΈλ₯Ό λ€λ£¨λ κΈ°μ 'μ΄λΌλ μ±μ μ½κ³  λ°°μ΄ κ²μ λ°νμΌλ‘ μμ±λμλ€. keyλ Reactκ° μ΄λ€ μμλ₯Ό λ³κ²½, μΆκ° λλ μ­μ ν μ§ μλ³νλ κ²μ λλλ€. key κ°μ λ€λ₯Έ μμλ€ μ¬μ΄μμ ν΄λΉ μμλ₯Ό κ³ μ νκ² μλ³ν  μ μλ κ°μΌλ‘ μ€μ ν΄μΌ νλ€. λ§μ½ κ³ μ κ°μ΄ μλ€λ©΄ index κ°μ key κ°μΌλ‘ μ¬μ©νλ©΄ λλ€. keyλ λ°°μ΄ λ΄λΆ νμ  μμλ€ μ¬μ΄μμ κ³ μ ν΄μΌ νλ€. (μ μ²΄ λ²μμμ κ³ μ ν  νμλ μλ€.) λ§μ½μ νμ  μμλ€ μ€ μ€λ³΅λΒ keyκ° μμ λλ λ λλ§ μμ μ€λ₯ λ©μμ§κ° μ½μμ λνλκ² λλ€."
---

> "λ¦¬μ‘νΈλ₯Ό λ€λ£¨λ κΈ°μ "μ΄λΌλ μ±μ μ½κ³  λ°°μ΄ κ²μ λ°νμΌλ‘ μμ±λμλ€.

# λ°°μ΄ λ λλ§νκΈ°

`Array.prototype.map(callback(currentValue, index, array), thisArg)`

- **λ°°μ΄ κ° μμμ λν΄ μ½λ°±ν¨μλ₯Ό μ€ννκ³  μ€νκ²°κ³Όλ₯Ό λͺ¨μ μ λ°°μ΄μ λ¦¬ν΄νλ€.**
- `currentValue`: νμ¬ μ²λ¦¬ν  μμ κ°
- `index`: νμ¬ μμμ μΈλ±μ€ κ°
- `array`: λ©μλλ₯Ό νΈμΆν λ°°μ΄
- `thisArg`: μ½λ°±ν¨μλ₯Ό μ€νν  λ μ¬μ©ν  `this`

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

## π key

keyλ Reactκ° μ΄λ€ μμλ₯Ό λ³κ²½, μΆκ° λλ μ­μ ν μ§ μλ³νλ κ²μ λλλ€.

### key μ€μ 

- key κ°μ λ€λ₯Έ μμλ€ μ¬μ΄μμ ν΄λΉ μμλ₯Ό κ³ μ νκ² μλ³ν  μ μλ κ°μΌλ‘ μ€μ ν΄μΌ νλ€.
- λ§μ½ κ³ μ κ°μ΄ μλ€λ©΄ index κ°μ key κ°μΌλ‘ μ¬μ©νλ©΄ λλ€.
- keyλ λ°°μ΄ λ΄λΆ νμ  μμλ€ μ¬μ΄μμ κ³ μ ν΄μΌ νλ€. (μ μ²΄ λ²μμμ κ³ μ ν  νμλ μλ€.)
- λ§μ½μ νμ  μμλ€ μ€ μ€λ³΅λΒ keyκ° μμ λλ λ λλ§ μμ μ€λ₯ λ©μμ§κ° μ½μμ λνλκ² λλ€.

### key μ μ‘΄μ¬μ λ¬΄μ λ°λ₯Έ μλ°μ΄νΈ λ°©μ

```jsx
const array = ["a", "b", "c", "d"];
array.map(item => <div>{item}</div>);
```

- μ λ°°μ΄μ b μ c μ¬μ΄μ z λ₯Ό μ½μνκ² λλ€λ©΄, λ¦¬λ λλ§μ νκ² λ  λΒ `<div>b</div>`Β μΒ `<div>c</div>`Β μ¬μ΄μ μΒ `div`Β νκ·Έλ₯Ό μ½μμ νκ² λλ κ²μ΄ μλλΌ, κΈ°μ‘΄μ c κ° z λ‘λ°λκ³ , d λ c λ‘ λ°λκ³ , λ§¨ λ§μ§λ§μ d κ° μλ‘ μ½μλλ€.
- κ·Έ λ€μμ a λ₯Ό μ κ±°νκ² λλ€λ©΄, κΈ°μ‘΄μ a κ° b λ‘ λ°λκ³ , b λ z λ‘ λ°λκ³ , zλ cλ‘ λ°λκ³ , cλ d λ‘λ°λκ³ , λ§¨ λ§μ§λ§μ μλ d κ° μ κ±°λλ€.
- νμ§λ§, **μμ λμ§ μμ μμλ κ·Έλλ‘ λκ³  μνλ κ³³μ μμλ₯Ό μ½μνκ±°λ μ­μ νλ κ²**μ΄ μ μμ μΈ λμμ΄λ€. κ·Έλμ λ°°μ΄μ λ λλ§ ν  λμλ **κ³ μ νΒ keyΒ κ°**μ μ§μ νλ κ²μ΄ μ€μνλ€.

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

# λ°°μ΄μ ν­λͺ© μΆκ°νκΈ°

- λ°°μ΄ ννμ stateμ μμλ₯Ό μΆκ°νλ λ°©λ²
  - spread μ°μ°μ μ¬μ©, concat λ©μλ μ¬μ© λ±
  - κΈ°μ‘΄μ λ°°μ΄μ μμ νμ§ μκ³ , μλ‘μ΄ μμκ° μΆκ°λ μλ‘μ΄ λ°°μ΄μ λ°ννλ λ°©λ²μ μ¬μ©ν΄μΌ νλ€. (λΆλ³μ± μ μ§)

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
        placeholder="κ³μ λͺ"
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={onChange}
        placeholder="μ΄λ©μΌ"
      />
      <button onClick={onCreate}>λ±λ‘</button>
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

    setUsers([...user, newUser]); // spread μ°μ°μ μ΄μ©
    // setUsers(user.concat(newUser));   // concat λ©μλ μ΄μ©

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

# λ°°μ΄μ ν­λͺ© μ κ±°νκΈ°

`Array.prototype.filter(callback(currentValue, index, array), thisArg)`

- κ° λ°°μ΄ μμμ λν΄ μ½λ°±ν¨μλ₯Ό μ€ννκ³  **μ€ν κ²°κ³Όκ° trueμΈ μμ**λ€λ§ λͺ¨μ μ λ°°μ΄μ λ°ννλ€.
- `currentValue`: νμ¬ μ²λ¦¬ν  μμ κ°
- `index`: νμ¬ μμμ μΈλ±μ€ κ°
- `array`: λ©μλλ₯Ό νΈμΆν λ°°μ΄
- `thisArg`: μ½λ°±ν¨μλ₯Ό μ€νν  λ μ¬μ©ν  `this`

```jsx
// UserList.js
function User({ user, onRemove }) {
  return (
    <div>
      <span>{user.username}</span>
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>μ­μ </button>
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

    setUsers([...users, newUser]); // spread μ°μ°μ μ΄μ©
    // setUsers(users.concat(newUser));   // concat λ©μλ μ΄μ©

    setInputs({
      username: "",
      email: ""
    });
    nextId.current++;
  };

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id)); // filer λ©μλ μ΄μ©
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

- `onRemove`λΌλ μ΄λ²€νΈ νΈλ€λ¬λ₯Ό κ³μ propsλ‘ μ λ¬νμ¬ μ΅μ’μ μΌλ‘ User μ»΄ν¬λνΈμ μ λ¬

<br/>

# λ°°μ΄μ ν­λͺ© μμ νκΈ°

User μ»΄ν¬λνΈμ κ³μ λͺμ ν΄λ¦­νμλ μμμ΄ μ΄λ‘μμΌλ‘ λ°λκ³ , λ€μ λλ₯΄λ©΄ κ²μ μμΌλ‘ λ°λλλ‘ κ΅¬ν

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
      <button onClick={() => onRemove(user.id)}>μ­μ </button>
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

    setUsers([...users, newUser]); // spread μ°μ°μ μ΄μ©
    // setUsers(users.concat(newUser));   // concat λ©μλ μ΄μ©

    setInputs({
      username: "",
      email: ""
    });
    nextId.current++;
  };

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id)); // filer λ©μλ μ΄μ©
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

> λ°°μ΄μ μ΄μ©ν΄ μ»΄ν¬λνΈλ₯Ό λ λλ§ν  λλ **key** κ°μ μ€μ νμ¬ Reactκ° μ΄λ€ μμλ₯Ό λ³κ²½, μΆκ° λλ μ­μ ν μ§ μλ³νλλ‘ νλ€.

> λ°°μ΄ ννμ μνλ₯Ό μλ°μ΄νΈν  λλ **λΆλ³μ±**μ μ§μΌμΌ νλ€. `map`μ΄λ `filter`μ κ°μ΄ μλ‘μ΄ λ°°μ΄μ λ°ννλ λ°°μ΄ λ©μλλ₯Ό μ΄μ©νκ±°λ λ°°μ΄μ μ¬λ³Έμ λ§λ€μ΄ μλ°μ΄νΈνλ λ°©λ²μ΄ μλ€.

<br/>

μ°Έκ³ 

- [λ²¨λ‘νΌνΈμ ν¨κ»νλ λͺ¨λ λ¦¬μ‘νΈ](https://react.vlpt.us/basic/11-render-array.html)
- [React κ³΅μλ¬Έμ](https://ko.reactjs.org/docs/lists-and-keys.html)
