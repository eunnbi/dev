---
emoji: 👻
title: async & await
date: "2022-01-03"
category: Javascript
preview: ""
---

## then, catch 메서드를 이용한 비동기 처리

```javascript
function fetchAuthorName(postId) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(post => post.userId)
    .then(userId => {
      return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(user => user.name);
    });
}

fetchAuthorName(1).then(name => console.log("name:", name));
```

### 문제점

1. **디버깅이 어렵다.**

- `then()`을 **연쇄적으로 호출**하고 있어 몇 번째 `then()`에서 문제가 발생한 건지 Stack Trace를 보더라도 혼란스러울 수 있다.

2. **예외처리**

- `catch()` 메서드를 사용하지 않을 경우도 있어 **예외 처리가 누락될 수 있다.**
- 또한, 동기 코드와 비동기 코드가 섞여 있을 경우 **예외처리가 난해질 수 있다.** (동기 코드에서는 `try-catch` 문으로 예외 처리)

3. **들여쓰기**

- 실제 프로젝트에서는 복잡한 구조의 비동기 처리 코드를 작성하게 된다.
- 따라서, `then()` 메서드의 인자로 넘기는 콜백함수 내에서 *조건문이나 반복문*을 사용하거나 *여러 개의 Promise를 병렬로 또는 중접해서 호출*해야 하는 경우들이 발생한다.
- 이럴 경우, 다단계 들여쓰기를 해야 할 확률이 높아지며 **코드의 가독성이 떨어진다.**

<br/>

## async/await 키워드를 통한 비동기 코딩

> Promise 객체의 `then`, `catch` 메서드의 불편함 점들을 해결하기 위해 ES7에서 async/await 키워드가 추가되었다. 이 키워드를 사용하면 **비동기 코드를 마치 동기 코드처럼 보이게** 작성할 수 있다.

### 기본 문법

```javascript
async function 함수명() {
  await 비동기_처리_메서드_명();
}
```

- 함수 앞에 `async`라는 예약어를 붙인다.
- `async` 키워드가 붙여진 함수 내부의 비동기 함수/메서드 앞에 `await` 키워드를 붙인다.
  - 이때 비동기 함수/메서드가 반드시 프로미스 객체를 반환해야 한다.
  - **비동기 함수/메서드가 리턴하는 Promise로부터 결과값을 추출**해준다.
  - 즉 `await` 키워드를 사용하면 일반 비동기 처리처럼 바로 다음 코드를 실행하지 않고 **결과값을 얻을 때까지 기다린다**.
  - 일반적인 동기 코드와 동일한 흐름으로 코드를 작성할 수 있어 코드를 읽기도 쉬워진다.

#### 예시

```javascript
async function fetchAuthorName(postId) {
  const postResponse = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const post = await postResponse.json();
  const userId = post.userId;
  const userResponse = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const user = await userResponse.json();
  return user.name;
}

fetchAuthorName(1).then(name => console.log("name:", name));
```

- 주의할 점은 `async` 키워드가 붙어있는 함수에서 명시적으로 `Promise` 객체를 생성하여 리턴하지 않아도 `Promise` 객체가 리턴된다.
- 위의 코드를 보면 `fetchAuthorName` 함수 body에서 `user.name`을 리턴하지만, 실제로 함수를 호출하면 프로미스 객체가 반환되고, `then` 메서드를 통해 리턴값을 얻어야 한다.

<br/>

### 예외 처리

- 동기/비동기 구분없이 `try/catch`로 일관되게 예외 처리를 할 수 있다.

```javascript
async function fetchAuthorName(postId) {
  const postResponse = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const post = await postResponse.json();
  const userId = post.userId;

  try {
    const userResponse = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const user = await userResponse.json();
    return user.name;
  } catch (err) {
    console.log("Faile to fetch user:", err);
    return "Unknown";
  }
}

fetchAuthorName(1).then(name => console.log("name:", name));
```
