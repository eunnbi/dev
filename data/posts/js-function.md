---
emoji: 📊
title: Function
date: "2021-12-21"
category: Javascript
preview: "함수는 일급객체 - 변수나 자료구조 (배열의 요소가 객체의 속성값)에 할당할 수 있다. - 다른 함수의 인자로 전달할 수 있다. - 다른 함수의 반환값으로 사용될 수 있다. - 함수와 일반객체의 차이점은 함수는 호출할 수 있다는 것이다. 함수 선언문, 함수 표현식, 익명함수 함수 호이스팅 - 함수 선언문 전체가 해당 스코프의 최상단에 옮겨진 것처럼 동작한다. - 함수 표현식의 경우 함수가 아닌 변수 호이스팅이 발생한다. 함수의 다양한 형태 1. 즉시 실행 함수 - 최소 한번만 호출 가능 - 변수 초기화처리 등에 사용 - 함수 스코프가 생성된다. - 즉시 실행함수에서 선언된 변수와 함수들은 private 콜백 함수 - 다른 함수의 인자로 전달되는 함수를 말한다. - 함수를 명시적으로 호출하는 방식이 아니라 특정 이벤트가 발생했을 때 호출되는 함수 - 비동기식 처리 모델에 사용된다."
---

# 함수는 일급객체

- 변수나 자료구조 (배열의 요소가 객체의 속성값)에 할당할 수 있다.
- 다른 함수의 인자로 전달할 수 있다.
- 다른 함수의 반환값으로 사용될 수 있다.
- 함수와 일반객체의 차이점은 함수는 호출할 수 있다는 것이다.

```js
// 변수에 저장
const increase = function (num) {
  return num++;
};
const decrease = function (num) {
  return num--;
};
```

```js
// 객체 속성값으로 저장
const predicates = { increase, decrease };

// 함수 파라미터, 반환값으로 사용 가능
function makeCounter(predicates) {
  let num = 0;
  return function () {
    num = predicates(num);
    return num;
  };
}

const increaser = makeCounter(predicates.increase);
console.log(increaser()); // 1
console.log(increaser()); // 2

const decreaser = makeCounter(predicates.decrease);
console.log(decreaser()); // -1
console.log(decreaser()); // -2
```

<br/>

# 함수 선언문, 함수 표현식, 익명함수

```js
// 함수 선언문
function greet(name) {
  console.log(`hello ${name}`);
}
greet("Alberto");
```

```js
// 함수 표현식
const greeter = function greet(name) {
  console.log(`hello ${name}`);
};
greeter("Alberto");
```

```js
// 익명함수
const greeter = function (name) {
  console.log(`hello ${name}`);
};
greeter("Alberto");
```

<br/>

# 함수 호이스팅

- 함수 선언문 전체가 해당 스코프의 최상단에 옮겨진 것처럼 동작한다.

```js
const res = square(5); // 호출 가능
console.log(res); // 25
function square(number) {
  return number * number;
}
```

- 함수 표현식의 경우 함수가 아닌 변수 호이스팅이 발생한다.

```js
const res = square(5); // ERROR: square is not a function
const square = function (number) {
  return number * number;
};
```

<br/>

# 함수의 다양한 형태

1. 즉시 실행 함수

- 최소 한번만 호출 가능
- 변수 초기화처리 등에 사용
- 함수 스코프가 생성된다.
  - 즉시 실행함수에서 선언된 변수와 함수들은 private

```js
let isAdult;

(function init(age) {
  let currentAge = age;
  if (age >= 20) {
    isAdult = true;
  } else {
    isAdult = false;
  }
})(20);

console.log(isAdult); //  true
console.log(currentAge); // ReferenceError: currentAge is not defined
```

```js
// 객체 생성
const Counter = (function () {
  let current = 0;
  return {
    getCurrentValue: function () {
      return current;
    },
    increaseValue: function () {
      current = current + 1;
      return current;
    },
    decreaseValue: function () {
      current = current - 1;
      return current;
    }
  };
})();

console.log(current); // ReferenceError: current is not defined
// current 변수는 private하기 때문에 클로저를 통한 접근 이외에는 접근 및 수정이 불가능하다.
console.log(Counter.getCurrentValue()); // 0
console.log(Counter.increaseValue()); // 1
console.log(Counter.decreaseValue()); // 0
```

2. 콜백 함수

- 다른 함수의 인자로 전달되는 함수를 말한다.
- 함수를 명시적으로 호출하는 방식이 아니라 특정 이벤트가 발생했을 때 호출되는 함수
- 비동기식 처리 모델에 사용된다.
- [참고 - 콜백함수](https://www.eunnbi.dev/posts/js-callback-function)

이외에도 [생성자 함수](https://www.eunnbi.dev/posts/js-this#%EC%83%9D%EC%84%B1%EC%9E%90-%ED%95%A8%EC%88%98), [클로저 함수](https://www.eunnbi.dev/posts/js-closure) 등이 있다.

<br/>

# 함수 객체의 프로퍼티

1. `arguments` 프로퍼티

- 함수 호출 시 전달된 인수들의 정보를 담고 있는 순회가능한 유사배열 객체
- 함수 내부의 지역변수처럼 사용됨
- 매개변수의 개수가 확정되지 않은 **가변인자 함수**를 구현할 때 유용함.

```js
function sum() {
  let res = 0;
  for (var i = 0; i < arguments.length; i++) {
    res += arguments[i];
  }
  return res;
}
console.log(sum(1, 2, 3)); // 6
```

2. `caller` 프로퍼티: 자신을 호출한 함수

3. `length` 프로퍼티: 함수 정의 시 작성된 매개변수 개수

4. `name` 프로퍼티: 함수명, 익명함수의 경우 빈 문자열

5. `__proto__`, `prototype` 프로퍼티: [참고 - 프로토타입](https://www.eunnbi.dev/posts/js-prototype#constructor,-prototype,-instance)
