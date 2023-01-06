---
emoji: 🧀
title: useState와 클로저
date: "2022-02-23"
category: React
preview: "클로저란? 자신이 선언될 당시의 Scope Chain에서 알 수 있었던 변수들 중 자신이 실행될 때 사용할 변수들만을 기억하여 참조를 유지시키는 함수이다. 모든 함수 컨텍스트에는 LexicalEnvironment 객체가 있고, environmentRecord와 outerEnvironmentReference로 구성되어 있다. environmentRecord에는 현재 함수 컨텍스트와 관련된 코드의 식별자 정보들이 저장되고 outerEnvironmentReference는 함수가 선언된 당시의 Lexical Environment 객체를 참조한다. 어떤 식별자에 참조할 때 현재 컨텍스트의 environmentRecord를 탐색해서 발견되면 그 값을 반환하고, 발견하지 못하면 outerEnvironmentReference에 담긴 LexicalEnvironment를 탐색하는 과정을 거친다. 계속 찾지 못할 경우 전역 컨텍스트의 LexicalEnvironment까지 탐색해 나간다. 즉, 변수의 Scope Chain을 따라 탐색한다."
---

> **클로저란?**<br/>
> 자신이 선언될 당시의 Scope Chain에서 알 수 있었던 변수들 중 자신이 실행될 때 사용할 변수들만을 기억하여 참조를 유지시키는 함수
>
> ```javascript
> function getAdd() {
>   let num = 0;
>   return function () {
>     num += 1;
>     return num;
>   };
> }
> const add = getAdd(); // closure 함수 반환 (num 변수 기억)
> ```

> **Scope Chain**
>
> - 모든 함수 컨텍스트에는 `LexicalEnvironment` 객체가 있고, `environmentRecord`와 `outerEnvironmentReference`로 구성되어 있다.
> - environmentRecord에는 현재 함수 컨텍스트와 관련된 코드의 식별자 정보들이 저장되고 outerEnvironmentReference는 함수가 선언된 당시의 `Lexical Environment` 객체를 참조한다.
> - 어떤 식별자에 참조할 때 현재 컨텍스트의 environmentRecord를 탐색해서 발견되면 그 값을 반환하고, 발견하지 못하면 outerEnvironmentReference에 담긴 LexicalEnvironment를 탐색하는 과정을 거친다. 계속 찾지 못할 경우 전역 컨텍스트의 LexicalEnvironment까지 탐색해 나간다. 즉, 변수의 `Scope Chain`을 따라 탐색한다.

<br/>

# Simple useState with Closure 😉

클로저를 이용하여 간단하게 `customUseState`를 만들었다.

```javascript
const customUseState = initialVal => {
  let currentState = initalVal;
  const state = () => currentState; // 함수로 구현
  const setState = newVal => {
    currentState = newVal;
  };
  return [state, setState];
};

const [counter, setCounter] = customUseState(0);
console.log(counter()); // 0
setCounter(1);
console.log(counter()); // 1
```

- customUseState 함수가 종료되어도 setState 함수는 currentState, 즉 현재 상태값을 담은 변수를 계속 참조한다. state 또한 currentState 변수에 대한 참조를 유지하는 함수이다.
  <br/>

```javascript
const customUseState = initialVal => {
  let currentState = initalVal;
  const state = currentState; // 변수로 접근하도록 수정
  const setState = newVal => {
    currentState = newVal;
  };
  return [state, setState];
};

const [counter, setCounter] = customUseState(0);
console.log(counter); // 0
setCounter(1);
console.log(counter); // 0 ??
```

- state는 값을 저장하는 변수이기 때문에 customUseState 함수기 종료되면 더 이상 변수 state에 담긴 값을 변경할 수 없다.
- setState를 통해 currentState를 업데이트해도 해당 값을 참조할 수 없다.

<br/>

**리액트는 state들을 useState 함수 외부에 배열 형식으로 저장**한다. 더불어 `useState` 함수에서 반환된 `state`를 통해서만 상태에 접근이 가능하고, `setState`를 통해서만 상태값을 업데이트할 수 있도록 한다.

<br/>

# ✨ 최종 useState 개념 모델

```javascript
let hooks = [];
let idx = 0;

function customUseState(initialVal) {
  hooks.push(initialVal);
  const state = hooks[idx];
  const _idx = idx; // 이 훅이 사용해야 하는 인덱스
  const setState = newVal => {
    // closure
    hooks[_idx] = newVal; // hooks 배열과 _idx 변수를 기억하여 참조 유지
  };
  idx++;
  return [state, setState];
}
```

- 위 방법으로 해도 여전히 `state` 변수가 참조하고 있는 값은 변경되지 않는다.
- 하지만, 중요한 것은 **setState 함수가 hooks 배열과 \_idx 변수를 기억하여 자신이 업데이트해야 할 상태에 대한 참조를 유지하는 것**이다.

<br/>

참고: [[React] 클로저와 useState Hooks](https://yeoulcoding.tistory.com/149)
