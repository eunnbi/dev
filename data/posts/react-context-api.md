---
emoji: 🌐
title: Context API
date: "2022-01-15"
category: React
preview: "'리액트를 다루는 기술'이라는 책을 읽고 배운 것을 바탕으로 작성되었다. Context API란? 전역적으로 사용되는 데이터를 관리**할 때 유용하게 사용되는 기능이다. 사용자 로그인 정보, 환경 설정, 테마 등 전역적으로 필요한 데이터가 있을 때는 주로 최상위 컴포넌트인 App의 state로 관리한다. 이후 특정 컴포넌트에서 상태를 필요로 할 때 최상위 컴포넌트에서 여러 컴포넌트의 props를 통해 상태를 전달했다. 하지만 Context API를 사용하면 단 한 번에 원하는 상태를 가져와 사용할 수 있다."
---

> "리액트를 다루는 기술"이라는 책을 읽고 배운 것을 바탕으로 작성되었다.

# Context API란?

- **전역적으로 사용되는 데이터를 관리**할 때 유용하게 사용되는 기능이다.
- 사용자 로그인 정보, 환경 설정, 테마 등 전역적으로 필요한 데이터가 있을 때는 주로 최상위 컴포넌트인 `App`의 `state`로 관리한다.
- 이후 특정 컴포넌트에서 상태를 필요로 할 때 최상위 컴포넌트에서 **여러 컴포넌트의 props를 통해 상태를 전달했다.**
- 하지만 Context API를 사용하면 **단 한 번에 원하는 상태를 가져와 사용할 수 있다.**

<br/>

# 📝 Context API 사용법

## Context 객체 만들기

- context 객체를 만들 때는 `createContext` 함수를 사용한다.
- defaultValue 매개변수는 컴포넌트 트리에서 context 객체의 Provider 컴포넌트를 찾지 못했을 때 사용되는 기본값이다.

```javascript
const MyContext = createContext(defaultValue);
```

## Provider

- Provider 컴포넌트는 value prop를 전달받아 이 값을 하위 컴포넌트들에게 전달한다.
- Provider 컴포넌트에 하위에 또 다른 Provider 컴포넌트가 있는 것이 가능하며, 이 경우 하위 Provider 컴포넌트의 value 값이 우선시된다.
- **Provider 컴포넌트의 value prop가 바뀔 때마다 해당 context를 사용(구독)하는 하위 컴포넌트들이 리렌더링된다.**

```jsx
<MyContext.Provider value={/* 어떤 값 */}></MyContext.Provider>
```

## Consumer

- context value를 Consumer 컴포넌트를 이용해 조회하고 구독할 수 있다.
- Consumer 컴포넌트의 자식은 함수여야 한다.
- 이 함수는 context의 현재 값을 받고 `React element`를 반환한다.

```jsx
<MyContext.Consumer>
  {value => /* context 값을 이용한 렌더링 */}
</MyContext.Consumer>
```

## useContext

- Consumer 컴포넌트 대신 useContext를 이용해 context 값을 구독할 수 있다.

```javascript
const value = useContext(MyContext);
```

> 참고: [클래스형 컴포넌트에서 Context 사용하기](https://ko.reactjs.org/docs/context.html#classcontexttype)

<br/>

# 동적 Context API

> Context 값을 동적으로 업데이트해야 하는 경우를 알아본다. 일정관리 애플리케이션을 예시로 들어 작성했다.

![Todo Application](1.png)

## component

- `TodoTemplate`: 하얀 배경색의 전체 박스
  - `TodoHead`: 오늘 날짜와 앞으로 할 일의 개수를 보여줌.
  - `TodoList`: 여러 개의 `TodoItem`을 렌더링함.
    - `TodoItem`: 각 할 일에 대한 정보를 렌더링함. 토글 기능이 있는 체크 버튼과 삭제 기능이 있는 휴지통 아이콘이 있음.
  - `TodoCreate`: 새로운 할 일을 입력 및 등록하는 컴포넌트이다. 플러스 아이콘이 있는 버튼을 누르면 할 일을 입력할 수 있는 폼이 나타난다. 버튼을 다시 누르면 폼이 사라진다.

<br/>

## 전역 상태 관리

- 전역적으로 필요한 상태: 할 일에 대한 정보를 담은 배열

```javascript
const todos = [
    {
        id: 1,
        text: "React 공부하기",
        done: false
    },
    {
        ...
    },
    ...
];
```

- 여러 컴포넌트에서 `todos`라는 상태가 필요하기 때문에 최상위 컴포넌트인 App의 상태로 관리하며 해당 상태가 필요한 자식 컴포넌트에게 props로 전달한다.
- App 컴포넌트에서 `todos` 상태의 setter 함수를 이용하여 토글 기능, 삭제 기능, 생성 기능을 정의한 이벤트 핸들러를 생성한다. 그리고 해당 함수를 필요로 하는 자식 컴포넌트에게 props로 전달한다.

![Component Structure of Todo Application](2.png)

- 이번 예시의 경우 컴포넌트의 구조가 복잡하지 않아 App 컴포넌트의 state를 props로 전달하는데 큰 무리가 없다.
- 하지만, 컴포넌트의 구조가 깊어지고 복잡해질수록 여러 컴포넌트의 props를 거쳐 state를 전달해야 한다.
- 프로젝트의 규모가 커질수록 최상위 컴포넌트인 App에서 모든 상태를 관리하기엔 무리가 있다.
- 그래서 전역적으로 관리하거나 필요로 하는 상태가 있을 경우 상태 관리 라이브러리를 이용하거나 Context API를 활용한다.

### 💡 Context API를 이용한 상태 관리

![Component Structure with Context API](3.png)

```jsx
// TodoContext.js
const initialTodos = [
  {
    id: 1,
    text: "React 공부하기",
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

// TodoContext 객체 생성
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

- TodoHead, TodoList, TodoCreate 총 3개의 컴포넌트가 TodoContext를 구독할 것이다.
- 하지만 각자 필요로 하는 값이 다르다. 예를 들어, TodoHead 컴포넌트는 value.todos, TodoCreate 컴포넌트는 value.dispath, value.nextId를 필요로 한다.
- value 객체에 들어있는 세가지 프로퍼티 값 중 todos값만 바뀌어도 해당 값에 의존하지는 않지만 같은 context를 구독하는 다른 컴포넌트들도 리렌더링된다.
  - todos값이 바뀌면 TodoCreate 컴포넌트도 리렌더링되고, 이는 불필요한 리렌더링이다.
- 아래 코드처럼 관심사에 맞게 context를 분리하여 불필요한 리렌더링을 방지할 수 있다.

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

### 💡 Context API와 localStorage

- 새로고침을 하면 `todos`가 초기화된다.
- 새로고침을 해도 `todos`를 기억할 수 있도록 localStorage에 `todos` 상태값을 저장한다.
- `todos` 상태값이 업데이트될 때마다 localStorage에 저장하고 초기 렌더링 시 localStorage에 저장된 `todos`를 불러와 상태값으로 설정한다.

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

- useEffect를 이용하여 초기 렌더링이 완료된 후와 상태값이 업데이트 된 이후에 상태값을 localStorage에 저장하도록 했다.
- useReducer의 두 번째 인자로 **빈 배열**을 전달하고, 세 번째 인자로 **초기 상태값을 설정하는 함수**를 전달했다.

<br/>

참고: [벨로퍼트와 함께하는 모던 리액트](https://react.vlpt.us/mashup-todolist/)
