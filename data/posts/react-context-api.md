---
emoji: ๐
title: Context API
date: "2022-01-15"
category: React
preview: "'๋ฆฌ์กํธ๋ฅผ ๋ค๋ฃจ๋ ๊ธฐ์ '์ด๋ผ๋ ์ฑ์ ์ฝ๊ณ  ๋ฐฐ์ด ๊ฒ์ ๋ฐํ์ผ๋ก ์์ฑ๋์๋ค. Context API๋? ์ ์ญ์ ์ผ๋ก ์ฌ์ฉ๋๋ ๋ฐ์ดํฐ๋ฅผ ๊ด๋ฆฌ**ํ  ๋ ์ ์ฉํ๊ฒ ์ฌ์ฉ๋๋ ๊ธฐ๋ฅ์ด๋ค. ์ฌ์ฉ์ ๋ก๊ทธ์ธ ์ ๋ณด, ํ๊ฒฝ ์ค์ , ํ๋ง ๋ฑ ์ ์ญ์ ์ผ๋ก ํ์ํ ๋ฐ์ดํฐ๊ฐ ์์ ๋๋ ์ฃผ๋ก ์ต์์ ์ปดํฌ๋ํธ์ธ App์ state๋ก ๊ด๋ฆฌํ๋ค. ์ดํ ํน์  ์ปดํฌ๋ํธ์์ ์ํ๋ฅผ ํ์๋ก ํ  ๋ ์ต์์ ์ปดํฌ๋ํธ์์ ์ฌ๋ฌ ์ปดํฌ๋ํธ์ props๋ฅผ ํตํด ์ํ๋ฅผ ์ ๋ฌํ๋ค. ํ์ง๋ง Context API๋ฅผ ์ฌ์ฉํ๋ฉด ๋จ ํ ๋ฒ์ ์ํ๋ ์ํ๋ฅผ ๊ฐ์ ธ์ ์ฌ์ฉํ  ์ ์๋ค."
---

> "๋ฆฌ์กํธ๋ฅผ ๋ค๋ฃจ๋ ๊ธฐ์ "์ด๋ผ๋ ์ฑ์ ์ฝ๊ณ  ๋ฐฐ์ด ๊ฒ์ ๋ฐํ์ผ๋ก ์์ฑ๋์๋ค.

# Context API๋?

- **์ ์ญ์ ์ผ๋ก ์ฌ์ฉ๋๋ ๋ฐ์ดํฐ๋ฅผ ๊ด๋ฆฌ**ํ  ๋ ์ ์ฉํ๊ฒ ์ฌ์ฉ๋๋ ๊ธฐ๋ฅ์ด๋ค.
- ์ฌ์ฉ์ ๋ก๊ทธ์ธ ์ ๋ณด, ํ๊ฒฝ ์ค์ , ํ๋ง ๋ฑ ์ ์ญ์ ์ผ๋ก ํ์ํ ๋ฐ์ดํฐ๊ฐ ์์ ๋๋ ์ฃผ๋ก ์ต์์ ์ปดํฌ๋ํธ์ธ `App`์ `state`๋ก ๊ด๋ฆฌํ๋ค.
- ์ดํ ํน์  ์ปดํฌ๋ํธ์์ ์ํ๋ฅผ ํ์๋ก ํ  ๋ ์ต์์ ์ปดํฌ๋ํธ์์ **์ฌ๋ฌ ์ปดํฌ๋ํธ์ props๋ฅผ ํตํด ์ํ๋ฅผ ์ ๋ฌํ๋ค.**
- ํ์ง๋ง Context API๋ฅผ ์ฌ์ฉํ๋ฉด **๋จ ํ ๋ฒ์ ์ํ๋ ์ํ๋ฅผ ๊ฐ์ ธ์ ์ฌ์ฉํ  ์ ์๋ค.**

<br/>

# ๐ Context API ์ฌ์ฉ๋ฒ

## Context ๊ฐ์ฒด ๋ง๋ค๊ธฐ

- context ๊ฐ์ฒด๋ฅผ ๋ง๋ค ๋๋ `createContext` ํจ์๋ฅผ ์ฌ์ฉํ๋ค.
- defaultValue ๋งค๊ฐ๋ณ์๋ ์ปดํฌ๋ํธ ํธ๋ฆฌ์์ context ๊ฐ์ฒด์ Provider ์ปดํฌ๋ํธ๋ฅผ ์ฐพ์ง ๋ชปํ์ ๋ ์ฌ์ฉ๋๋ ๊ธฐ๋ณธ๊ฐ์ด๋ค.

```javascript
const MyContext = createContext(defaultValue);
```

## Provider

- Provider ์ปดํฌ๋ํธ๋ value prop๋ฅผ ์ ๋ฌ๋ฐ์ ์ด ๊ฐ์ ํ์ ์ปดํฌ๋ํธ๋ค์๊ฒ ์ ๋ฌํ๋ค.
- Provider ์ปดํฌ๋ํธ์ ํ์์ ๋ ๋ค๋ฅธ Provider ์ปดํฌ๋ํธ๊ฐ ์๋ ๊ฒ์ด ๊ฐ๋ฅํ๋ฉฐ, ์ด ๊ฒฝ์ฐ ํ์ Provider ์ปดํฌ๋ํธ์ value ๊ฐ์ด ์ฐ์ ์๋๋ค.
- **Provider ์ปดํฌ๋ํธ์ value prop๊ฐ ๋ฐ๋ ๋๋ง๋ค ํด๋น context๋ฅผ ์ฌ์ฉ(๊ตฌ๋)ํ๋ ํ์ ์ปดํฌ๋ํธ๋ค์ด ๋ฆฌ๋ ๋๋ง๋๋ค.**

```jsx
<MyContext.Provider value={/* ์ด๋ค ๊ฐ */}></MyContext.Provider>
```

## Consumer

- context value๋ฅผ Consumer ์ปดํฌ๋ํธ๋ฅผ ์ด์ฉํด ์กฐํํ๊ณ  ๊ตฌ๋ํ  ์ ์๋ค.
- Consumer ์ปดํฌ๋ํธ์ ์์์ ํจ์์ฌ์ผ ํ๋ค.
- ์ด ํจ์๋ context์ ํ์ฌ ๊ฐ์ ๋ฐ๊ณ  `React element`๋ฅผ ๋ฐํํ๋ค.

```jsx
<MyContext.Consumer>
  {value => /* context ๊ฐ์ ์ด์ฉํ ๋ ๋๋ง */}
</MyContext.Consumer>
```

## useContext

- Consumer ์ปดํฌ๋ํธ ๋์  useContext๋ฅผ ์ด์ฉํด context ๊ฐ์ ๊ตฌ๋ํ  ์ ์๋ค.

```javascript
const value = useContext(MyContext);
```

> ์ฐธ๊ณ : [ํด๋์คํ ์ปดํฌ๋ํธ์์ Context ์ฌ์ฉํ๊ธฐ](https://ko.reactjs.org/docs/context.html#classcontexttype)

<br/>

# ๋์  Context API

> Context ๊ฐ์ ๋์ ์ผ๋ก ์๋ฐ์ดํธํด์ผ ํ๋ ๊ฒฝ์ฐ๋ฅผ ์์๋ณธ๋ค. ์ผ์ ๊ด๋ฆฌ ์ ํ๋ฆฌ์ผ์ด์์ ์์๋ก ๋ค์ด ์์ฑํ๋ค.

![Todo Application](1.png)

## component

- `TodoTemplate`: ํ์ ๋ฐฐ๊ฒฝ์์ ์ ์ฒด ๋ฐ์ค
  - `TodoHead`: ์ค๋ ๋ ์ง์ ์์ผ๋ก ํ  ์ผ์ ๊ฐ์๋ฅผ ๋ณด์ฌ์ค.
  - `TodoList`: ์ฌ๋ฌ ๊ฐ์ `TodoItem`์ ๋ ๋๋งํจ.
    - `TodoItem`: ๊ฐ ํ  ์ผ์ ๋ํ ์ ๋ณด๋ฅผ ๋ ๋๋งํจ. ํ ๊ธ ๊ธฐ๋ฅ์ด ์๋ ์ฒดํฌ ๋ฒํผ๊ณผ ์ญ์  ๊ธฐ๋ฅ์ด ์๋ ํด์งํต ์์ด์ฝ์ด ์์.
  - `TodoCreate`: ์๋ก์ด ํ  ์ผ์ ์๋ ฅ ๋ฐ ๋ฑ๋กํ๋ ์ปดํฌ๋ํธ์ด๋ค. ํ๋ฌ์ค ์์ด์ฝ์ด ์๋ ๋ฒํผ์ ๋๋ฅด๋ฉด ํ  ์ผ์ ์๋ ฅํ  ์ ์๋ ํผ์ด ๋ํ๋๋ค. ๋ฒํผ์ ๋ค์ ๋๋ฅด๋ฉด ํผ์ด ์ฌ๋ผ์ง๋ค.

<br/>

## ์ ์ญ ์ํ ๊ด๋ฆฌ

- ์ ์ญ์ ์ผ๋ก ํ์ํ ์ํ: ํ  ์ผ์ ๋ํ ์ ๋ณด๋ฅผ ๋ด์ ๋ฐฐ์ด

```javascript
const todos = [
    {
        id: 1,
        text: "React ๊ณต๋ถํ๊ธฐ",
        done: false
    },
    {
        ...
    },
    ...
];
```

- ์ฌ๋ฌ ์ปดํฌ๋ํธ์์ `todos`๋ผ๋ ์ํ๊ฐ ํ์ํ๊ธฐ ๋๋ฌธ์ ์ต์์ ์ปดํฌ๋ํธ์ธ App์ ์ํ๋ก ๊ด๋ฆฌํ๋ฉฐ ํด๋น ์ํ๊ฐ ํ์ํ ์์ ์ปดํฌ๋ํธ์๊ฒ props๋ก ์ ๋ฌํ๋ค.
- App ์ปดํฌ๋ํธ์์ `todos` ์ํ์ setter ํจ์๋ฅผ ์ด์ฉํ์ฌ ํ ๊ธ ๊ธฐ๋ฅ, ์ญ์  ๊ธฐ๋ฅ, ์์ฑ ๊ธฐ๋ฅ์ ์ ์ํ ์ด๋ฒคํธ ํธ๋ค๋ฌ๋ฅผ ์์ฑํ๋ค. ๊ทธ๋ฆฌ๊ณ  ํด๋น ํจ์๋ฅผ ํ์๋ก ํ๋ ์์ ์ปดํฌ๋ํธ์๊ฒ props๋ก ์ ๋ฌํ๋ค.

![Component Structure of Todo Application](2.png)

- ์ด๋ฒ ์์์ ๊ฒฝ์ฐ ์ปดํฌ๋ํธ์ ๊ตฌ์กฐ๊ฐ ๋ณต์กํ์ง ์์ App ์ปดํฌ๋ํธ์ state๋ฅผ props๋ก ์ ๋ฌํ๋๋ฐ ํฐ ๋ฌด๋ฆฌ๊ฐ ์๋ค.
- ํ์ง๋ง, ์ปดํฌ๋ํธ์ ๊ตฌ์กฐ๊ฐ ๊น์ด์ง๊ณ  ๋ณต์กํด์ง์๋ก ์ฌ๋ฌ ์ปดํฌ๋ํธ์ props๋ฅผ ๊ฑฐ์ณ state๋ฅผ ์ ๋ฌํด์ผ ํ๋ค.
- ํ๋ก์ ํธ์ ๊ท๋ชจ๊ฐ ์ปค์ง์๋ก ์ต์์ ์ปดํฌ๋ํธ์ธ App์์ ๋ชจ๋  ์ํ๋ฅผ ๊ด๋ฆฌํ๊ธฐ์ ๋ฌด๋ฆฌ๊ฐ ์๋ค.
- ๊ทธ๋์ ์ ์ญ์ ์ผ๋ก ๊ด๋ฆฌํ๊ฑฐ๋ ํ์๋ก ํ๋ ์ํ๊ฐ ์์ ๊ฒฝ์ฐ ์ํ ๊ด๋ฆฌ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ์ด์ฉํ๊ฑฐ๋ Context API๋ฅผ ํ์ฉํ๋ค.

### ๐ก Context API๋ฅผ ์ด์ฉํ ์ํ ๊ด๋ฆฌ

![Component Structure with Context API](3.png)

```jsx
// TodoContext.js
const initialTodos = [
  {
    id: 1,
    text: "React ๊ณต๋ถํ๊ธฐ",
    done: false
  }
];

function todoReducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.todo);
    case "TOGGLE":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE":
      return state.filter(todo => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

// TodoContext ๊ฐ์ฒด ์์ฑ
const TodoContext = createContext({
  todos: [],
  dispatch: null,
  nextId: 2
});

function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(2);
  const value = {
    todos: state,
    dispatch,
    nextId
  };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

export { TodoProvider };
export default TodoContext;
```

- TodoHead, TodoList, TodoCreate ์ด 3๊ฐ์ ์ปดํฌ๋ํธ๊ฐ TodoContext๋ฅผ ๊ตฌ๋ํ  ๊ฒ์ด๋ค.
- ํ์ง๋ง ๊ฐ์ ํ์๋ก ํ๋ ๊ฐ์ด ๋ค๋ฅด๋ค. ์๋ฅผ ๋ค์ด, TodoHead ์ปดํฌ๋ํธ๋ value.todos, TodoCreate ์ปดํฌ๋ํธ๋ value.dispath, value.nextId๋ฅผ ํ์๋ก ํ๋ค.
- value ๊ฐ์ฒด์ ๋ค์ด์๋ ์ธ๊ฐ์ง ํ๋กํผํฐ ๊ฐ ์ค todos๊ฐ๋ง ๋ฐ๋์ด๋ ํด๋น ๊ฐ์ ์์กดํ์ง๋ ์์ง๋ง ๊ฐ์ context๋ฅผ ๊ตฌ๋ํ๋ ๋ค๋ฅธ ์ปดํฌ๋ํธ๋ค๋ ๋ฆฌ๋ ๋๋ง๋๋ค.
  - todos๊ฐ์ด ๋ฐ๋๋ฉด TodoCreate ์ปดํฌ๋ํธ๋ ๋ฆฌ๋ ๋๋ง๋๊ณ , ์ด๋ ๋ถํ์ํ ๋ฆฌ๋ ๋๋ง์ด๋ค.
- ์๋ ์ฝ๋์ฒ๋ผ ๊ด์ฌ์ฌ์ ๋ง๊ฒ context๋ฅผ ๋ถ๋ฆฌํ์ฌ ๋ถํ์ํ ๋ฆฌ๋ ๋๋ง์ ๋ฐฉ์งํ  ์ ์๋ค.

```jsx
const TodoStateContext = createContext([]);
const TodoDispatchContext = createContext(null);
const TodoNextIdContext = createContext(null);

function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(2);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export { TodoProvider };
export default TodoContext;
```

```jsx
// App.js

function App() {
  return (
    <TodoProvider>
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
}
```

#### TodoHead

```jsx
const TodoHead = () => {
  const todos = useContext(TodoStateContext);
  const undoneTasks = todos.filter(todo => !todo.done).length;
  // ...
};
```

#### TodoCreate

```jsx
const TodoCreate = () => {
  const dispatch = useContext(TodoDispatchContext);
  const nextId = useContext(TodoNextIdContext);
  const [input, setIntput] = useState("");
  const onChange = useCallback(e => {
    setInput(e.target.value);
  }, []);
  const onCreate = useCallback(
    e => {
      e.preventDefault();
      const todo = {
        id: nextId.current,
        text: input,
        done: false
      };
      dispatch({
        type: "CREATE",
        todo
      });
      setInput("");
      nextId.current += 1;
    },
    [input]
  );
};
```

#### TodoList

```jsx
const TodoList = () => {
  const todos = useContext(TodoStateContext);
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          done={todo.done}
          text={todo.text}
          id={todo.id}
        />
      ))}
    </ul>
  );
};
```

#### TodoItem

```jsx
const TodoItem = ({ id, text, done }) => {
  const dispatch = useContext(TodoDispatchContext);
  const onToggle = useCallback(id => {
    dispatch({
      type: "TOGGLE",
      id
    });
  }, []);

  const onRemove = useCallback(id => {
    dispatch({
      type: "REMOVE",
      id
    });
  }, []);
};
```

### ๐ก Context API์ localStorage

- ์๋ก๊ณ ์นจ์ ํ๋ฉด `todos`๊ฐ ์ด๊ธฐํ๋๋ค.
- ์๋ก๊ณ ์นจ์ ํด๋ `todos`๋ฅผ ๊ธฐ์ตํ  ์ ์๋๋ก localStorage์ `todos` ์ํ๊ฐ์ ์ ์ฅํ๋ค.
- `todos` ์ํ๊ฐ์ด ์๋ฐ์ดํธ๋  ๋๋ง๋ค localStorage์ ์ ์ฅํ๊ณ  ์ด๊ธฐ ๋ ๋๋ง ์ localStorage์ ์ ์ฅ๋ `todos`๋ฅผ ๋ถ๋ฌ์ ์ํ๊ฐ์ผ๋ก ์ค์ ํ๋ค.

```jsx
// TodoContext.js

const KEY = "todos";

function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, [], () => {
    const todos = JSON.parse(localStorage.getItem(KEY)); // localStorage API
    return todos ? todos : [];
  });
  const nextId = useRef(2);
  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringfy(state)); // localStorage API
  }, [state]);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}
```

- useEffect๋ฅผ ์ด์ฉํ์ฌ ์ด๊ธฐ ๋ ๋๋ง์ด ์๋ฃ๋ ํ์ ์ํ๊ฐ์ด ์๋ฐ์ดํธ ๋ ์ดํ์ ์ํ๊ฐ์ localStorage์ ์ ์ฅํ๋๋ก ํ๋ค.
- useReducer์ ๋ ๋ฒ์งธ ์ธ์๋ก **๋น ๋ฐฐ์ด**์ ์ ๋ฌํ๊ณ , ์ธ ๋ฒ์งธ ์ธ์๋ก **์ด๊ธฐ ์ํ๊ฐ์ ์ค์ ํ๋ ํจ์**๋ฅผ ์ ๋ฌํ๋ค.

<br/>

์ฐธ๊ณ : [๋ฒจ๋กํผํธ์ ํจ๊ปํ๋ ๋ชจ๋ ๋ฆฌ์กํธ](https://react.vlpt.us/mashup-todolist/)
