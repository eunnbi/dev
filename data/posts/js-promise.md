---
emoji: π€
title: Promise
date: "2022-01-03"
category: Javascript
preview: "Promiseλ? λΉλκΈ° μμμ μ΅μ’ μ±κ³΅ λλ μ€ν¨λ₯Ό λνλ΄λ κ°μ²΄ μ΄ 3κ°μ§ μνλ₯Ό κ°λλ€. - Pending(λκΈ°): λΉλκΈ° μμμ΄ μμ§ μλ£λμ§ μμ μν - Fulfilled(μ΄ν): λΉλκΈ° μμμ΄ μ±κ³΅μ μΌλ‘ μλ£λμ΄, λΉλκΈ° μμμ κ²°κ³Όλ¬Όμ΄ μλ€. - Rejected(μ€ν¨): λΉλκΈ° μμμ΄ μ€ν¨ν μνλ‘, μλ¬λ©μμ§κ° μλ€. Promise μμ± λ°©λ² - Promise κ°μ²΄λ μμ±μ ν¨μλ₯Ό ν΅ν΄ λ§λ€μ΄μ§κ³ , μ΄ μμ±μλ ν¨μλ₯Ό μΈμλ‘ λ°λλ€. κ·Έλ¦¬κ³  μ΄ ν¨μλ resloveμ rejectλΌλ 2κ°μ ν¨μν νλΌλ―Έν°λ₯Ό κ°μ§λ€. - μμ±μ μΈμλ‘ μ λ¬λλ ν¨μμ λ°λμμλ resolve()λ reject() ν¨μλ₯Ό μ±κ³΅, μ€ν¨ μ¬λΆμ λ°λΌ μ μ ν νΈμΆν΄μ€μΌ νλ€."
---

# Promiseλ?

> **λΉλκΈ° μμμ μ΅μ’ μ±κ³΅ λλ μ€ν¨λ₯Ό λνλ΄λ κ°μ²΄**

- μ΄ 3κ°μ§ μνλ₯Ό κ°λλ€.
  - `Pending`(λκΈ°): λΉλκΈ° μμμ΄ μμ§ μλ£λμ§ μμ μν
  - `Fulfilled`(μ΄ν): λΉλκΈ° μμμ΄ μ±κ³΅μ μΌλ‘ μλ£λμ΄, λΉλκΈ° μμμ κ²°κ³Όλ¬Όμ΄ μλ€.
  - `Rejected`(μ€ν¨): λΉλκΈ° μμμ΄ μ€ν¨ν μνλ‘, μλ¬λ©μμ§κ° μλ€.

<br/>

# Promise μμ± λ°©λ²

```javascript
const promise = new Promise(function(resolve, reject){...});
const promise = new Promise((resolve, reject) => {...});
```

- Promise κ°μ²΄λ **μμ±μ ν¨μ**λ₯Ό ν΅ν΄ λ§λ€μ΄μ§κ³ , μ΄ μμ±μλ **ν¨μλ₯Ό μΈμλ‘ λ°λλ€**. κ·Έλ¦¬κ³  μ΄ ν¨μλ `reslove`μ `reject`λΌλ **2κ°μ ν¨μν νλΌλ―Έν°**λ₯Ό κ°μ§λ€.
- μμ±μ μΈμλ‘ μ λ¬λλ ν¨μμ λ°λμμλ `resolve()`λ `reject()` ν¨μλ₯Ό μ±κ³΅, μ€ν¨ μ¬λΆμ λ°λΌ *μ μ ν νΈμΆ*ν΄μ€μΌ νλ€.

<br/>

# Promise μ¬μ© λ°©λ²

- Promise κ°μ²΄μλ `then()` λ©μλμ `catch()` λ©μλκ° μλ€.
- `then(onFulfilled, onRejected)` λ©μλ
  - **Promise κ°μ²΄κ° Fulfilled μνμΌ λ μνλλ μ½λ°±ν¨μ**μ **Rejected μνμΌ λ μνλλ μ½λ°±ν¨μ**, 2κ°μ λ§€κ°λ³μκ° μλ€.
  - μ²«λ²μ§Έ μ½λ°±ν¨μλ **fulfillment value (μ΄ν κ°)** λ₯Ό μΈμλ‘ λ°κ³ , λλ²μ§Έ μ½λ°±ν¨μλ **μλ¬λ©μμ§**λ₯Ό μΈμλ‘ λ°λλ€.
- `catch(onRejected)` λ©μλ
  - **Promise κ°μ²΄κ° Rejected μνμΌ λ μνλλ μ½λ°±ν¨μ**, 1κ°μ λ§€κ°λ³μκ° μλ€.
  - μ΄ μ½λ°±ν¨μλ **μλ¬λ©μμ§**λ₯Ό μΈμλ‘ λ°λλ€.

#### μμ

- `fetch()` ν¨μλ APIμ URLμ μΈμλ‘ λ°κ³ , API νΈμΆ κ²°κ³Όλ₯Ό Promise κ°μ²΄λ‘ λ¦¬ν΄νλ€.

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

- `then()`κ³Ό `catch()` λ©μλλ **λ λ€λ₯Έ Promise κ°μ²΄λ₯Ό λ°ν**νλ€.
- νλμ `Promise` κ°μ²΄μ λν΄ `then()`κ³Ό `catch()` λ©μλλ₯Ό **μ°μμ μΌλ‘ νΈμΆ**ν  μ μλ€.

#### μμ

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

# Promise.resolve()μ Promise.reject()

- `Promise.resolve()`μ `Promise.reject()`λ **μλμΌλ‘(μ¦μ) μ±κ³΅νκ±°λ μ€ν¨νλ νλ‘λ―Έμ€λ₯Ό μμ±νλ€.**

#### μμ

```javascript
// - Promise.resolve()λ μ¦μ νλ‘λ―Έμ€λ₯Ό μ±κ³΅ μ²λ¦¬νλ―λ‘ then()μ μ²«λ²μ§Έ μΈμκ° νΈμΆλλ€.
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
// Promise.reject()λ νλ‘λ―Έμ€λ₯Ό μ¦μ μ€ν¨ μ²λ¦¬νλ―λ‘ then()μ λλ²μ§Έ μΈμκ° νΈμΆλλ€.
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

# Promise.all()κ³Ό Promise.race()

## Promise.all()

- **λͺ¨λ  νλ‘λ―Έμ€κ° μ±κ³΅ν  κ²½μ°μλ§ νλμ νλ‘λ―Έμ€λ₯Ό λ°ν**νλ€.

#### μμ

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
// 500ms ν first value

promise2.then(data => {
  console.log(data);
});
// 1000ms ν second value
```

- μ μμμμλ κ° νλ‘λ―Έμ€κ° μλ‘ λλ¦½μ μΌλ‘ μ±κ³΅ μ²λ¦¬λλ€.

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
// 1000ms ν
// first value second value
```

- 1000ms ν μ²« λ²μ§Έ, λ λ²μ§Έ νλ‘λ―Έμ€μ κ²°κ³Όκ° ν¨κ» λ°νλμλ€. μ¦ μ²« λ²μ§Έ νλ‘λ―Έμ€κ° μ±κ³΅ν μ΄νμλ λ λ²μ§Έ νλ‘λ―Έμ€κ° μ±κ³΅ν  λκΉμ§ κΈ°λ€λ Έμμ μ μ μλ€.

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

- νλ‘λ―Έμ€ μ€ νλκ° μ€ν¨νλ©΄ λ€λ₯Έ λͺ¨λ  νλ‘λ―Έμ€κ° μ±κ³΅νλλΌλ ν΄λΉ μ€ν¨μμ λ°μν μ€λ₯λ₯Ό λ°ννλ€.

<br/>

## Promise.race()

- νλ‘λ―Έμ€λ€ μ€ **κ°μ₯ λ¨Όμ  μ±κ³΅ λλ μ€ν¨ν κ²°κ³Όλ₯Ό λ°ν**νλ€.

#### μμ

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

- λ λ€ μ±κ³΅νμ§λ§ λ λ²μ§Έ νλ‘λ―Έμ€κ° κ°μ₯ λ¨Όμ  μ±κ³΅νμ¬ κ·Έ κ²°κ³Όλ§ λ°ν
