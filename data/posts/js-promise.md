---
emoji: 🤝
title: Promise
date: "2022-01-03"
category: Javascript
preview: "Promise란? 비동기 작업의 최종 성공 또는 실패를 나타내는 객체 총 3가지 상태를 갖는다. - Pending(대기): 비동기 작업이 아직 완료되지 않은 상태 - Fulfilled(이행): 비동기 작업이 성공적으로 완료되어, 비동기 작업의 결과물이 있다. - Rejected(실패): 비동기 작업이 실패한 상태로, 에러메시지가 있다. Promise 생성 방법 - Promise 객체는 생성자 함수를 통해 만들어지고, 이 생성자는 함수를 인자로 받는다. 그리고 이 함수는 reslove와 reject라는 2개의 함수형 파라미터를 가진다. - 생성자 인수로 전달되는 함수의 바디에서는 resolve()나 reject() 함수를 성공, 실패 여부에 따라 적절히 호출해줘야 한다."
---

# Promise란?

> **비동기 작업의 최종 성공 또는 실패를 나타내는 객체**

- 총 3가지 상태를 갖는다.
  - `Pending`(대기): 비동기 작업이 아직 완료되지 않은 상태
  - `Fulfilled`(이행): 비동기 작업이 성공적으로 완료되어, 비동기 작업의 결과물이 있다.
  - `Rejected`(실패): 비동기 작업이 실패한 상태로, 에러메시지가 있다.

<br/>

# Promise 생성 방법

```javascript
const promise = new Promise(function(resolve, reject){...});
const promise = new Promise((resolve, reject) => {...});
```

- Promise 객체는 **생성자 함수**를 통해 만들어지고, 이 생성자는 **함수를 인자로 받는다**. 그리고 이 함수는 `reslove`와 `reject`라는 **2개의 함수형 파라미터**를 가진다.
- 생성자 인수로 전달되는 함수의 바디에서는 `resolve()`나 `reject()` 함수를 성공, 실패 여부에 따라 *적절히 호출*해줘야 한다.

<br/>

# Promise 사용 방법

- Promise 객체에는 `then()` 메서드와 `catch()` 메서드가 있다.
- `then(onFulfilled, onRejected)` 메서드
  - **Promise 객체가 Fulfilled 상태일 때 수행되는 콜백함수**와 **Rejected 상태일 때 수행되는 콜백함수**, 2개의 매개변수가 있다.
  - 첫번째 콜백함수는 **fulfillment value (이행 값)** 를 인수로 받고, 두번째 콜백함수는 **에러메시지**를 인수로 받는다.
- `catch(onRejected)` 메서드
  - **Promise 객체가 Rejected 상태일 때 수행되는 콜백함수**, 1개의 매개변수가 있다.
  - 이 콜백함수는 **에러메시지**를 인수로 받는다.

#### 예시

- `fetch()` 함수는 API의 URL을 인자로 받고, API 호출 결과를 Promise 객체로 리턴한다.

  ```javascript
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => console.log("response:", response))
    .catch(error => console.log("error:", error));
  ```

  ```javascript
  fetch()
    .then(response => console.log("response:", response))
    .catch(error => console.log("error:", error));
  ```

<br/>

# Promise chaining

- `then()`과 `catch()` 메서드는 **또 다른 Promise 객체를 반환**한다.
- 하나의 `Promise` 객체에 대해 `then()`과 `catch()` 메서드를 **연쇄적으로 호출**할 수 있다.

#### 예시

```javascript
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(post => post.userId)
  .then(userId => "https://jsonplaceholder.typicode.com/users/" + userId)
  .then(url => fetch(url))
  .then(response => response.json())
  .then(user => console.log("user:", user))
  .catch(error => console.log("error:", error));
```

```javascript
const promise = new Promise((resolve, reject) => {
  resolve();
});
promise
  .then(data => {
    throw new Error("opps");
    console.log("first value");
  })
  .catch(() => {
    console.log("catched an error");
  })
  .then(data => {
    console.log("second value");
  });
// catched an error
// second value
```

<br/>

# Promise.resolve()와 Promise.reject()

- `Promise.resolve()`와 `Promise.reject()`는 **자동으로(즉시) 성공하거나 실패하는 프로미스를 생성한다.**

#### 예시

```javascript
// - Promise.resolve()는 즉시 프로미스를 성공 처리하므로 then()의 첫번째 인수가 호출된다.
Promise.resolve("Success").then(
  function (value) {
    console.log(value);
  },
  function (value) {
    console.log("fail");
  }
);
// Success
```

```javascript
// Promise.reject()는 프로미스를 즉시 실패 처리하므로 then()의 두번째 인수가 호출된다.
Promise.reject(new Error("fail")).then(
  function () {
    // not called
  },
  function (error) {
    console.log(error);
  }
);
// Error: fail
```

<br/>

# Promise.all()과 Promise.race()

## Promise.all()

- **모든 프로미스가 성공할 경우에만 하나의 프로미스를 반환**한다.

#### 예시

```javascript
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "first value");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "second value");
});

promise1.then(data => {
  console.log(data);
});
// 500ms 후 first value

promise2.then(data => {
  console.log(data);
});
// 1000ms 후 second value
```

- 위 예시에서는 각 프로미스가 서로 독립적으로 성공 처리된다.

```javascript
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "first value");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "second value");
});

Promise.all([promise1, promise2]).then(data => {
  const [promise1data, promise2data] = data;
  console.log(promise1data, promise2data);
});
// 1000ms 후
// first value second value
```

- 1000ms 후 첫 번째, 두 번째 프로미스의 결과가 함께 반환되었다. 즉 첫 번째 프로미스가 성공한 이후에도 두 번째 프로미스가 성공할 때까지 기다렸음을 알 수 있다.

```javascript
const promise1 = new Promise((resolve, reject) => {
	resolve("my first value");
});

const promise2 = new Promise((resolve, reject) => {
	reject(Error("opps error"));
});

Promise
	.all([promise1, promise2])
	.then(data => {
    	const [promise1data, promise2data] = data;
        console.log(promise1data, promise2data);
    });
    .catch(err => {
    	console.log(err);
    }
// Error: opps error
```

- 프로미스 중 하나가 실패하면 다른 모든 프로미스가 성공하더라도 해당 실패에서 발생한 오류를 반환한다.

<br/>

## Promise.race()

- 프로미스들 중 **가장 먼저 성공 또는 실패한 결과를 반환**한다.

#### 예시

```javascript
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "first value");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "second value");
});

Promise.race([promise1, promise2]).then(function (value) {
  console.log(value);
});
// second value
```

- 둘 다 성공하지만 두 번째 프로미스가 가장 먼저 성공하여 그 결과만 반환
