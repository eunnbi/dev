---
emoji: 🚴
title: useEffect Hook
date: "2022-01-13"
category: React
preview: "'리액트를 다루는 기술'이라는 책을 읽고 배운 것을 바탕으로 작성되었다. 생명주기 메서드는 클래스형 컴포넌트에서만 사용할 수 있다. v16.8에서 useEffect라는 hook이 도입되면서 함수형 컴포넌트에서 useEffect를 생명 주기 메서드와 비슷하게 사용할 수 있다. useEffect를 이용해 컴포넌트가 Mount, Unmount, Update되었을 때의 특정 작업을 설정할 수 있다. useEffect 함수는 함수 인자와 배열 인자, 두 개의 인자를 갖는다. 함수 인자는 함수를 리턴할 수 있고, 반환된 함수를 cleanup 함수라고 한다. 배열 인자는 의존성 배열이라고 한다. 두 번째 인자를 전달했다면, 배열의 요소들이 변경될 때만 첫 번째 인자로 전달받은 함수가 실행된다. (초기 렌더링이 완료된 후에도 실행된다.)"
---

> "리액트를 다루는 기술"이라는 책을 읽고 배운 것을 바탕으로 작성되었다.

<br/>

# useEffect

- [생명주기 메서드](https://www.eunnbi.dev/posts/react-life-cycle-method)는 클래스형 컴포넌트에서만 사용할 수 있다.
- `v16.8`에서 useEffect라는 hook이 도입되면서 함수형 컴포넌트에서 useEffect를 생명 주기 메서드와 비슷하게 사용할 수 있다.
- useEffect를 이용해 컴포넌트가 `Mount`, `Unmount`, `Update`되었을 때의 특정 작업을 설정할 수 있다.
- useEffect 함수는 함수 인자와 배열 인자, 두 개의 인자를 갖는다.
  - 함수 인자는 함수를 리턴할 수 있고, 반환된 함수를 cleanup 함수라고 한다.
  - 배열 인자는 의존성 배열이라고 한다.
  - 두 번째 인자를 전달했다면, 배열의 요소들이 변경될 때만 첫 번째 인자로 전달받은 함수가 실행된다. (초기 렌더링이 완료된 후에도 실행된다.)

<br/>

## Mount 이후에만 실행하고 싶을 때

- 두 번째 인자로 빈 배열을 전달하면 된다.
- 첫번째 인자로 전달한 함수가 처음 렌더링된 이후에만 한번 실행된다.

> `componentDidMount`처럼 실행

<br/>

## 특정 state 혹은 props가 변경되었을 때 실행하고 싶을 때

- 특정 state와 props을 배열의 요소로 넣고, 해당 배열을 두번째 인자로 전달하면 된다.

> `componentDidUpdate`처럼 실행 (초기 렌더링 이후에도 실행됨.)

<br/>

## cleanup 함수

- useEffect 함수에 첫번째 인자로 전달한 함수에서 함수를 리턴할 수 있는데 반환된 함수를 cleanup 함수라고 한다.
- 컴포넌트가 Unmout되기 직전이나 Update되기 직전에 수행할 작업을 설정할 수 있다.
- 두번째 인자에 빈 배열을 전달하면 cleanup 함수는 컴포넌트가 Unmount되기 직전에 실행된다.
- 빈 배열이 아닌 배열을 전달하면 배열에 있는 state 혹은 props가 변경될 때 업데이트되기 직전에도 실행된다.

<br/>

## 요약

- 두번째 인자로 빈 배열을 전달했을 때, life cycle method 중 componentDidMount처럼 실행
- 배열에 넣은 state 혹은 props가 업데이트 되었을 때, componentDidUpdate처럼 실행. (초기 렌더링 이후에도 첫번째 인자의 함수가 실행됨.)
- 첫번째 함수 인자에서 반환된 함수는 cleanup 함수로, componentWillUnmount처럼 실행되거나 업데이트 직전에 호출된다.
- 두번째 인자가 생략되었다면, 매번 렌더링이 완료된 이후 첫번째 인자로 전달된 함수가 실행되고, 매번 렌더링 전에 cleanup 함수가 호출된다.
