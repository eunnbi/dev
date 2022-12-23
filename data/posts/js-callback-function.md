---
emoji: 🤿
title: 콜백함수
date: "2022-01-05"
category: Javascript
preview: "콜백함수란? callback function 함수 또는 메서드의 매개변수로 전달되어 그 제어권도 함께 넘기는 함수이다. 콜백함수를 전달받은 함수 또는 메서드는 자체적인 내부 로직에 의해 이 콜백함수를 적절한 시점에 호출한다. 제어권 1. 호출시점 일정한 시간 간격으로 콜백함수를 호출한다. setInterval를 실행하면 반복적으로 실행되는 내용 자체를 특정할 수 있는 고유한 ID 값이 반환된다. 반환된 값을 인수로 전달하고 clearInterval(ID)를 호출하여 콜백함수 실행을 취소할 수 있다. 첫번째 인자로 받은 콜백함수의 제어권은 setInterval에게 있고 콜백함수 호출 시점에 대한 제어권을 가진다."
---

# 콜백함수란?

`callback function`

- **함수 또는 메서드의 매개변수로 전달되어 그 제어권도 함께 넘기는 함수**이다.
- 콜백함수를 전달받은 함수 또는 메서드는 자체적인 내부 로직에 의해 이 콜백함수를 적절한 시점에 호출한다.

<br/>

# 제어권

## 1. 호출시점

```javascript
let intervalID = setInterval(func, [delay, arg1, arg2, ...]);
```

- 일정한 시간 간격으로 콜백함수를 호출한다.
- setInterval를 실행하면 반복적으로 실행되는 내용 자체를 특정할 수 있는 고유한 ID 값이 반환된다.
- 반환된 값을 인수로 전달하고 `clearInterval(ID)`를 호출하여 콜백함수 실행을 취소할 수 있다.
- 첫번째 인자로 받은 콜백함수의 제어권은 `setInterval`에게 있고 **콜백함수 호출 시점에 대한 제어권**을 가진다.

## 2. 인자

**Array.prototype.map(callback[, thisArg])**<br/>
**callback: function(currentValue, index, array)**

- 첫 번째 인수로 callback 함수를 전달한다.
- 생략가능한 두 번째 인수로 콜백함수 내부에서 this로 바인딩할 대상을 지정할 수 있다.
  - 생략할 경우, 콜백함수 내부의 this는 전역객체를 참조한다.
- 메서드를 호출한 배열의 모든 요소들에 대해 콜백함수를 호출하고, 실행결과들을 모아 새로운 배열을 반환한다.
- 이 때 콜백함수의 첫 번째 인자에는 배열의 요소들 중 현재 요소 값이, 두 번째 인자에는 현재 요소의 인덱스값이, 세 번째 인자에는 map 메서드를 호출한 배열이 담긴다.
- 이는 map 메서드에 정의된 규칙으로 콜백함수의 제어권을 넘겨받은 코드는 **콜백함수의 인자가 될 값들과 그 순서에 대한 제어권**도 가진다.

## 3. this

- **콜백함수도 함수이기 때문에 기본적으로 this가 전역객체를 참조하지만, 제어권을 넘겨받은 코드가 콜백함수에 별도로 this가 될 대상을 지정한 경우에는 그 대상을 참조하게 된다.**
- `setTimeout`: 콜백함수 내부의 this가 전역객체를 가리킴.
- `forEach`: 별도의 인자로 this를 넘겨주면 그 대상을 가리킴.
- `addEventListener`: 콜백함수 내부의 this가 호출주체를 가리킴.

<br/>

# 콜백함수 내부의 this 바인딩

- 콜백함수로 어떤 객체의 메서드를 전달하더라도 그 메서드는 **함수로서 호출**된다.
- 따라서 객체의 메서드를 콜백함수로 전달하면 해당 객체를 `this`로 참조할 수 없다.

## 변수 이용

- 메서드 내부의 `this`를 변수에 담아 `this` 대신 그 변수를 사용하는 콜백함수를 반환하도록 한다.

```javascript
const obj1 = {
  name: "obj1",
  func: function () {
    const self = this;
    return function () {
      console.log(self.name);
    };
  }
};
const callback = obj1.func();
setTimeout(callback, 1000);
```

## bind 메서드 활용

- 다른 객체를 `this`로 참조하도록 지정할 수 있어 코드를 재활용할 수 있다.

```javascript
const obj1 = {
  name: "obj1",
  func: function () {
    console.log(this.name);
  }
};
setTimeout(obj1.func.bind(obj1), 1000);

const obj2 = { name: "obj2" };
setTimeout(obj1.func.bind(obj2), 1500);
```

<br/>

# 콜백지옥과 비동기 처리

## 비동기 vs 동기

`asynchronous vs synchronous`

- 실행 중인 작업 완료 여부를 신경쓰는지의 여부의 차이를 갖고 있다.
- 동기: **현재 실행 중인 코드가 완료되었는지 확인하면서 끝나는 시간이 맞춰 다시 작업을 수행한다.**
- 비동기: **현재 실행 중인 코드가 완료되었는지 신경쓰지 않고 바로 다음 코드가 실행된다.** 대신 콜백함수를 전달하여 **실행 중인 코드가 완료되면 전달한 콜백함수를 실행한다.**

```javascript
console.log("1st");
setTimeout(() => {
  console.log("2nd");
}, 0);
console.log("3rd");
```

- 1st, 3rd, 2nd 순으로 콘솔에 출력된다.

> **특정 로직의 실행이 완료되었는지 신경쓰지 않고 바로 다음 작업을 실행한다. 대신 콜백함수를 전달하여 작업 완료 시 콜백함수를 실행하도록 하는 것이 비동기 처리이다.**

### 비동기 처리가 필요한 이유

- 자바스크립트는 싱글 스레드 기반의 동기적 언어이다.
  - `call stack`이 하나이기 때문에 한번에 하나의 작업만 할 수 있다.
- 여러가지 이벤트를 동기적으로 하나씩 처리할 경우, 많은 시간이 소요되는 하나의 이벤트를 처리할 때 해당 작업이 끝날 때까지 다른 어떠한 작업도 처리할 수 없게 된다.
- 이렇게 되면 사용자 입장에서 불편함을 느낄 수 있기에 비동기 처리가 필요하다.
- 자바스크립트의 런타임인 웹브라우저에서 `Web APIs` (비동기 메소드), `Callback Queue`, `Event Loop`를 가지고 있기 때문에 자바스크립트 언어가 비동기적으로 실행될 수 있다.

### 콜백 함수와 비동기 처리

- 시간이 많이 걸리는 작업들을 비동기로 처리할 수 있게 되었지만, 실행 결과의 순서가 보장되지 않는다.
- **비동기 작업들이 순차적으로 진행되어야 하거나 비동기 작업의 결과값을 보장받기 위해 기본적으로 콜백함수를 이용한다.**
  - 콜백함수는 언제나 비동기로 처리되는 작업이 완료된 다음 실행되기 때문이다.

```javascript
function getData() {
  var tableData;
  $.get("https://domain.com/products/1", function (response) {
    tableData = response;
  });
  return tableData; // api 호출 완료 여부 상관없이 리턴됨.
}

console.log(getData()); // undefined
```

```javascript
function getData(callbackFunc) {
  $.get("https://domain.com/products/1", function (response) {
    callbackFunc(response); // api 호출이 완료되고 나서 콜백함수 호출됨.
  });
}

getData(function (tableData) {
  console.log(tableData);
});
```

> **콜백함수를 이용한다면 비동기 처리가 포함된 작업들을 순차적으로 처리하고 결과값을 얻을 수 있다.**

<br/>

## 콜백지옥

`callback hell`

- 콜백함수만을 이용하여 비동기 처리를 동기식으로 작동하는 것처럼 코드를 작성하면 콜백지옥이 발생한다.
- **비동기 처리 로직을 위해 인수로 전달되는 콜백함수가 반복적으로 사용되어 코드의 들여쓰기 수준이 감당하기 힘들 정도로 깊어지는 현상**
- 자바스크립트에서 흔히 발생하는 문제이다.
- 가독성이 떨어지고 코드 수정이 어렵다.

```javascript
// 익명함수인 콜백함수가 인수로 반복적으로 전달됨.
setTimeout(
  function (name) {
    let coffeeList = name;
    console.log(coffeeList);

    setTimeout(
      function (name) {
        coffeeList += ", " + name;
        console.log(coffeeList);

        setTimeout(
          function (name) {
            coffeeList += ", " + name;
            console.log(coffeeList);

            setTimeout(
              function (name) {
                coffeeList += ", " + name;
                console.log(coffeeList);
              },
              500,
              "카페라떼"
            );
          },
          500,
          "카페모카"
        );
      },
      500,
      "아메리카노"
    );
  },
  500,
  "에스프레소"
);
// 에스프레소
// 에스프레소, 아메리카노
// 에스프레소, 아메리카노, 카페모카
// 에스프레소, 아메리카노, 카페모카, 카페라떼
```

<br/>

## 콜백지옥 해결

### 기명함수로 변환

```javascript
let coffeeList = "";

const addEspresso = function (name) {
  coffeeList = name;
  console.log(coffeeList);
  setTimeout(addAmericano, 500, "아메리카노");
};

const addAmericano = function (name) {
  coffeeList += ", " + name;
  console.log(coffeeList);
  setTimeout(addMocha, 500, "카페모카");
};

const addMocha = function (name) {
  coffeeList += ", " + name;
  console.log(coffeeList);
  setTimeout(addLatte, 500, "카페라떼");
};

const addLatte = function (name) {
  coffeeList += ", " + name;
  console.log(coffeeList);
};

setTimeout(addEspresso, 500, "에스프레소");
```

- 익명의 콜백 함수를 기명 함수로 변경하면 가독성도 좋아지고 들여쓰기도 없어진다.
- 하지만, 일회성 함수를 전부 변수에 할당해야 한다.

<br/>

### Promise

> 참고: [Promise](https://www.eunnbi.dev/posts/js-promise)

```javascript
new Promise(function (resolve) {
  setTimeout(function () {
    let coffeeList = "에스프레소";
    console.log(coffeeList);
    resolve(coffeeList);
  }, 500);
})
  .then(name => {
    return new Promise(function (resolve) {
      setTimeout(function () {
        name += ", 아메리카노";
        console.log(name);
        resolve(name);
      }, 500);
    });
  })
  .then(name => {
    return new Promise(function (resolve) {
      setTimeout(function () {
        name += ", 카페모카";
        console.log(name);
        resolve(name);
      }, 500);
    });
  })
  .then(name => {
    return new Promise(function (resolve) {
      setTimeout(function () {
        name += ", 카페라떼";
        console.log(name);
        resolve(name);
      }, 500);
    });
  });
```

- Promise 생성자 함수 인수로 넘긴 콜백함수 내부에서 `resolve` 또는 `reject` 함수를 호출한다.
- `resolve`를 호출했다면 했다면 결과값을 `then` 메서드를 이용해 얻을 수 있고, `reject`를 호출했다면 `catch` 메서드를 이용해 에러 메시지를 얻을 수 있다.

> `Promise`는 비동기 작업의 최종 성공 또는 실패를 나타내는 객체로, `then` 또는 `catch` 메서드를 이용해 성공 또는 실패 이후의 처리 로직을 작성할 수 있다.

<br/>

### Generator

> 참고: [Generator](https://www.eunnbi.dev/posts/js-generator)

```javascript
const addCoffee = function (prevName, name) {
  setTimeout(function () {
    const res = coffeeMaker.next(prevName ? prevName + ", " + name : name);
    console.log("return", res);
  }, 500);
};

const coffeeGenerator = function* () {
  const expresso = yield addCoffee("", "에스프레소");
  console.log(expresso);
  const americano = yield addCoffee(expresso, "아메리카노");
  console.log(americano);
  const mocha = yield addCoffee(americano, "카페모카");
  console.log(mocha);
  const latte = yield addCoffee(mocha, "카페라떼");
  console.log(latte);
};

const coffeeMaker = coffeeGenerator();
coffeeMaker.next();
```

<br/>

### Promise + async/await

> 참고: [async/await](https://www.eunnbi.dev/posts/js-async-await)

```javascript
const getCoffee = function (name) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(name);
    }, 500);
  });
};

const coffeeMaker = async function () {
  let coffeeList = "";
  coffeeList = await getCoffee("에스프레소");
  console.log(coffeeList);
  coffeeList += ", " + (await getCoffee("아메리카노"));
  console.log(coffeeList);
  coffeeList += ", " + (await getCoffee("카페모카"));
  console.log(coffeeList);
  coffeeList += ", " + (await getCoffee("카페라떼"));
  console.log(coffeeList);
};
coffeeMaker();
```

- 비동기 작업을 수행하고자 하는 함수 앞에 `async` 키워드를 붙이고, 함수 body에서 비동기 함수/메서드 앞에 `await` 키워드를 붙인다.
- 이때 비동기 함수/메서드는 Promise 객체를 반환해야 한다.

<br/>

# 정리

- 콜백 함수: 함수 또는 메서드의 매개변수로 전달되어 그 제어권도 함께 넘기는 함수이다.
- 제어권을 넘겨받은 함수 또는 메서드는 다음과 같은 제어권을 갖는다.
  - 콜백함수를 호출하는 시점
  - 콜백함수를 호출할 때 인수로 넘겨줄 값들 및 순서
  - 콜백함수 내부의 this가 무엇을 참조할지 정해져 있는 경우도 있음. 정하지 않은 경우에는 전역객체를 바라봄. 사용자 임의로 this를 지정하고 싶을 때는 bind 메서드를 활용하면 된다.
- 어떤 객체의 메서드를 콜백함수로 전달해도 결국 함수로서 실행된다.
- 비동기 처리 로직을 위해 콜백함수를 사용하다 보면 콜백지옥에 빠지기 쉽다. 최근의 ECMAScript에는 `Promise`, `Generator`, `async/await` 등 콜백 지옥에서 벗어날 수 있는 방법들을 제공한다.
