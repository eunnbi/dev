---
emoji: 👋
title: React 18 주요 변경점
date: "2023-01-15"
category: React
preview: "React 공식문서를 참고하여 작성했습니다. (서버 사이드 관련 내용은 생략) Automatic Batching: 여러 상태 업데이트가 발생했을 때 하나로 통합해서 한 번의 리렌더링이 발생하도록 한다. 이 기능이 없을 때는 React 이벤트 핸들러에서 발생한 상태 업데이트들만 통합되었다. 이제는 promise 메서드, setTimeout, native 이벤트 핸들러 등에서 발생한 상태 업데이트도 통합되어 리렌더링이 한 번만 발생한다. Automatic Batching 기능을 사용하고 싶지 않다면? react-dom의 flushSync()을 사용하여 Automatic Batching 기능을 끌 수 있다."
---

> [React 공식문서](https://ko.reactjs.org/blog/2022/03/29/react-v18.html)를 참고하여 작성했습니다. (서버 사이드 관련 내용은 생략)

# Automatic Batching

- 여러 상태 업데이트가 발생했을 때 하나로 통합해서 한 번의 리렌더링이 발생하도록 한다.
- 이 기능이 없을 때는 React 이벤트 핸들러에서 발생한 상태 업데이트들만 통합되었다.
- 이제는 promise 메서드, setTimeout, native 이벤트 핸들러 등에서 발생한 상태 업데이트도 통합되어 리렌더링이 한 번만 발생한다.

```jsx
// Before
setTimeout(() => {
  setCount(c => c + 1);
  setFlag(f => !f);
  // 2번의 렌더링 발생 (no batching)
}, 1000);

// After
setTimeout(() => {
  setCount(c => c + 1);
  setFlag(f => !f);
  // 1번의 리렌더링 발생 (batching)
}, 1000);
```

**Automatic Batching 기능을 사용하고 싶지 않다면?**<br/>
`react-dom`의 `flushSync()`을 사용하여 Automatic Batching 기능을 끌 수 있다.

```jsx
import { useState } from "react";
import { flushSync } from "react-dom";

const [number, setNumber] = useState(0);
const [boolean, setBoolean] = useState(false);

const onClickCreateNumber = () => {
  // flushSync() 활용
  flushSync(() => {
    setNumber(prev => prev + 1);
  });

  flushSync(() => {
    setBoolean(prev => !prev);
  });
};
```

# Transitions

긴급한 업데이트와 긴급하지 않은 업데이트를 구분하기 위해서 새로 도입한 개념이다.

- **Urgent updates** : 직접적인 사용자 상호작용을 반영한다. (타이핑, 클릭, 누르기 등등)
- **Transition updates**: UI의 전환 (긴급하지 않은 업데이트)
- 타이핑, 클릭, 누르기와 같은 긴급 업데이트는 빠르게 업데이트되지 않으면 앱이 이상하다는 느낌을 줄 수 있다. 하지만 화면은 곧 바로 결과값을 볼 것이라고 기대하지 않기 때문에 전환 업데이트는 지연되어도 괜찮다.
- `useTransition` hook 혹은 `startTransition` API를 사용한다.
  - `startTransition`으로 감싸진 업데이트는 전환 업데이트로 처리된다.
  - 업데이트 도중 긴급한 업데이트가 발생하면 중단된다. 전환이 중단되면 리액트는 stale한 렌더링 작업을 버리고 마지막 업데이트만을 렌더링한다.
  - `isPending`은 전환 업데이트가 진행 중일 때 `true`이고, 아니라면 `false` 이다.

**Example**

```jsx
import { useEffect, useState, useTransition } from "react";

export default function App() {
  const [isPending, startTransition] = useTransition();
  const [num, setNum] = useState("1");
  const [multiples, setMultiples] = useState([]);

  function generateMultiples(num) {
    startTransition(() => {
      setMultiples(
        Array.from(Array(10000).keys()).map(i => (
          <div key={i} className={"m-0 p-0 col-1"}>
            {num * (i + 1)}
          </div>
        ))
      );
    });
  }

  useEffect(() => {
    if (Number(num) > 0) {
      generateMultiples(Number(num));
    }
  }, [num]);

  const onChange = e => {
    setNum(e.target.value);
  };

  return (
    <main>
      <input type="number" name="num" min="1" value={num} onChange={onChange} />
      <span>10,000 multiples of number: {num}</span>
      <div>{isPending ? "Loading..." : multiples}</div>
    </main>
  );
}
```

- 위 예시는 사용자 입력에 따라 10000이하의 배수 배열을 생성해 보여준다.
- 유저의 입력이 바뀔 때마다 `generateMultiples` 함수가 실행되는 것은 비효율적이다.
- 만약 `debouncing`과 `throttling`을 적용한다면 적절한 딜레이를 선택해야 하는 것이 쉽지 않다. 딜레이가 너무 길면 유저 입력에 대한 반응도 느러지고, 너무 짧아도 적용하는 의미가 없어진다.
- 또한, `debouncing`을 적용한다고 해도 특정 시간이 지나고 계산을 시작하면 다음 입력이 발생해도 해당 계산 작업을 중지시키고 처리하지 못한다.
- 하지만, `transition`을 사용한다면 작업의 우선순위를 나누고, 우선순위 높은 작업이 발생하면 다른 작업은 중단시키고 해당 작업을 먼저 처리할 수 있다.
- 예를 들어, 사용자 입력이 12이고, `multiples` 업데이트 (전환 업데이트)가 시작된다. 업데이트 도중에 사용자 입력이 123으로 바뀌면 (긴급한 업데이트) 전환 업데이트는 중단되고, 긴급한 업데이트를 처리한다.

> **참고: Concurrent React**
>
> - `Concurrency`는 React가 추구하는 개념이다. **동시성**이라는 개념을 활용해 React에서는 여러 작업을 동시에 처리할 수 있도록 기능들을 확대하고 있다.
> - 여러 작업을 작은 단위로 나눈 후 작업들 간의 우선순위를 정한다. 그리고 정해진 우선순위에 따라 작업을 수행한다. 실제로 작업이 동시에 수행되지 않지만, 작업 간의 전환이 매우 빨라 동시에 수행되는 것처럼 보인다.
> - [Introducing Concurrent Mode](https://17.reactjs.org/docs/concurrent-mode-intro.html)

# Suspense

- `Suspense`를 사용하면 로드 상태를 선언적으로 지정할 수 있다.
- `Suspense`는 v16에서 도입되었는데 [React.lazy를 활용한 코드 스플리팅](https://www.eunnbi.dev/posts/react-code-splitting#2.-react.lazy%EC%99%80-suspense)에서만 지원되었고, 서버 렌더링은 지원하지 못했다. v18에서는 서버 렌더링 지원을 추가했다고 한다.

## Suspense와 Transition

```jsx
function handleClick() {
  startTransition(() => {
    setTab("comments");
  });
}
// 최초에 <Photos />를 보여줄때는 Spinner를 보여주지만,
// handleClick으로 탭을 변경하면 렌더링이 지연되면서 계속 <Photos />를 보여주다가
// 데이터 로딩이 완료되면 <Comments />로 전환될 것이다.
<Suspense fallback={<Spinner />}>
  {tab === "photos" ? <Photos /> : <Comments />}
</Suspense>;
```

# 새로운 클라이언트 렌더링 API

```jsx
import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
if (container) {
  createRoot(container).render(<App />);
}
```

# New Hooks

## useId

- client와 server 간의 **hydration 불일치를 피하기 위해서** unique ID를 만들어주는 훅이다.
- list의 key를 만들어주기 위한 훅은 아니다!

```jsx
function Checkbox() {
  const id = useId();
  return (
    <>
      <label htmlFor={id}>Do you like React?</label>
      <input id={id} type="checkbox" name="react" />
    </>
  );
}
```

## useTransition

- 일부 상태 업데이트를 급하지 않은 업데이트로 간주할 때 사용된다. 급한 상태 업데이트가 급하지 않은 상태 업데이트를 중단할 수 있다.

## useDeferredValue

- 트리에서 급하지 않은 부분의 재랜더링을 지연할 수 있는 기능을 지원하는 훅이다.
- 지연된 렌더링은 중단될 수 있고, 사용자의 입력을 방해하지 않는다.
- 디바운싱 기법과 비슷하지만, 지연시간을 지정할 필요가 없고, 리액트가 다른 급한 작업이 완료되는 즉시 실행을 시킨다는 장점이 있다.

```jsx
function Typeahead() {
  const query = useSearchQuery("");

  // useDeferredValue는 값만 지연하는 것이다.
  const deferredQuery = useDeferredValue(query);

  // 급한 update 동안 리렌더링을 방지하려면 컴포넌트는 메모해야 한다
  const suggestions = useMemo(
    () => <SearchSuggestions query={deferredQuery} />,
    [deferredQuery]
  );
  return (
    <>
      <SearchInput query={query} />
      <Suspense fallback="Loading results...">{suggestions}</Suspense>
    </>
  );
}
```

## useSyncExternalStore

라이브러리 개발을 위해 제공된 훅이다. (글로벌 상태관리)

## useInsertionEffect

라이브러리 개발을 위해 제공된 훅이다. (CSS-in-JS)
