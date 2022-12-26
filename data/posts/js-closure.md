---
emoji: 🧬
title: 클로저
date: "2022-01-04"
category: Javascript
preview: ""
---

> **함수와 그 함수가 선언되었을 때의 렉시컬 환경의 조합**이다.
>
> - 선언될 당시의 렉시컬 환경은 실행 컨텍스트의 구성 요소 중 `lexical environment`의 `outerEnvironmentReference`에 해당한다.

<br/>

## 외부함수의 변수를 참조하는 내부함수

```javascript
const outer = function () {
  const a = 1;
  const inner = function () {
    console.log(++a);
  };
  inner();
};
outer(); // 2
```

- inner 함수의 environmentRecord에서 변수 a를 찾지 못했기에 outerEnvironmentReference를 통해 변수 a를 찾는다.
- inner 함수의 outerEnvironmentReference는 outer 함수의 lexical environment를 참조하고 여기에서 변수 a를 찾는다.
  - outer 함수의 실행 컨텍스트가 종료되면 lexical environment에 저장된 식별자들 (a, inner)에 대한 참조를 지운다.
- 그러면 각 주소에 저장되어 있는 값들은 자신을 참조하는 변수가 하나도 없기 때문에 GC의 수거 대상이 된다.

```javascript
const outer = function () {
  const a = 1;
  const inner = function () {
    return ++a;
  };
  return inner(); //  inner 함수의 실행 결과 반환
};
const outer2 = outer();
console.log(outer2); // 2
```

```javascript
const outer = function () {
  const a = 1;
  const inner = function () {
    return ++a;
  };
  return inner; // inner 함수 자체를 반환
};
const outer2 = outer();
console.log(outer2()); // 2
console.log(outer2()); // 3
```

- outer2 변수는 outer 함수의 반환값인 inner 함수를 참조한다.
- inner 함수 실행 시 **스코프 체이닝**에 따라 변수 a를 찾는다.
  - environmentRecord => 변수 a 발견 X
  - outerEnvironmentReference = inner 함수가 선언된 위치의 lexical environment (참조 복사) = outer 함수의 lexical environment => 변수 a 발견 O
- inner 함수의 실행 시점에는 outer 함수는 이미 실행이 종료되어 실행 컨텍스트도 없을텐데 outer의 lexical environment를 어떻게 접근할 수 있을까?
  - **가비지 컬렉터의 동작 방식** 때문이다.
  - **가비지 컬렉터는 어떤 값을 참조하는 변수가 하나라도 있다면 그 값은 수집 대상에 포함되지 않는다.**
  - 즉, outer 함수는 inner 함수를 반환하고 실행 컨텍스트가 종료되었지만, 변수 outer2 로 인해 inner 함수의 실행 컨텍스트가 활성화될 수 있으므로 inner 함수의 실행 컨텍스트의 구성 요소 중 outerEnvironmentReference 즉, outer 함수의 lexical environment는 GC의 수집 대상에서 제외된다.
  - 스펙상으로는 선언 당시의 lexical environment 전부를 `GC`하지 않도록 되어 있으나, 2019년 기준으로 크롬이나 Node.js 등에서 사용중인 `V8`엔진의 경우 내부함수에서 실제로 사용하는 변수만 남겨두고 나머지는 GC하도록 최적화되어 있다.

## 그 외 클로저가 발생한 경우

```javascript
(function () {
  const a = 0;
  const intervalId = null;
  intervalId = setInterval(function () {
    if (++a >= 10) {
      // 변수 a가 참조하고 있는 값 기억
      clearInterval(intervalId);
    }
    console.log(a);
  }, 1000);
})();
```

```javascript
(function () {
  const count = 0;
  const button = document.createElement("button");
  button.innterText = "click";
  button.addEventListener("click", function () {
    console.log(++count, "times clicked"); // count 변수가 참조하고 있는 값 기억
  });
  document.body.appendChild(button);
})();
```

> 💡 **자신이 선언될 당시의 `Lexical Environment`을 기억하는 함수** <br/>
> 💡 **선언될 당시의 스코프 체인에서 알 수 있었던 변수들 중 실행될 때 사용할 변수들만을 기억하여 유지시키는 함수**

<br/>

## 클로저와 메모리 관리

- 클로저는 자신이 선언되었을 때의 `lexical environment`를 기억해야 하므로 메모리 차원에서 손해를 볼 수 있다. 그래서 개발자의 의도적인 메모리 관리가 필요하다.
- 참조 카운트가 0이 되어야 `GC(Garbage Collector)`의 수거 대상이 되므로 개발자 의도적으로 참조 카운트가 0이 되도록 설계해야 한다.
- 참조 카운트가 0이 되기 위해서는 식별자에 참조형이 아닌 원시형 데이터 (보통 `null`이나 `undefined`)를 할당하면 된다.
- 클로저의 예상 수명과 사용량을 이해하고 그 필요성이 사라진 시점에는 더는 메모리를 소모하지 않게 해야 한다. (특히 콜백으로 사용되는 경우)

```javascript
const outer = (function () {
  const a = 1;
  const inner = function () {
    return ++a;
  };
  return inner;
})();
// outer 변수로 inner 함수가 실행될 수 있어 inner 함수가 선언된 당시의 lexical environment는 GC의 수거 대상이 되지 않는다.
console.log(outer()); // 2
outer = null;
```

- outer 함수에 null을 할당함으로써 outer 변수의 inner 함수 참조를 끊었다.
- 이제 outer 변수는 inner 함수를 참조하지 않으므로 inner 함수가 선언된 당시의 lexical environment는 GC의 수거 대상이 된다.

```javascript
(function () {
  const a = 0;
  const intervalId = null;
  const inner = function () {
    if (++a >= 10) {
      clearInterval(intervalId); // 콜백함수가 더 이상 호출되지 않음.
      inner = null; // 그래서 inner 식별자의 함수 참조를 끊음.
    }
    console.log(a);
  };
  intervalId = setInterval(inner, 1000);
})();
```

```javascript
(function () {
  const count = 0;
  const button = document.createElement("button");
  button.innterText = "click";
  const clickHandler = function () {
    console.log(++count, "times clicked");
    if (count >= 10) {
      button.removeEventListener("click", clickHandler); // 콜백함수가 더 이상 호출되지 않음.
      clickHandler = null; // clickHandler 식별자의 함수 참조를 끊음.
    }
  };
  button.addEventListener("click", clickHandler);
  document.body.appendChild(button);
})();
```

<br/>

## 클로저 활용 사례

### ✨ 콜백 함수 내부에서 외부 데이터를 사용하고자 할 때

```javascript
const fruits = ["apple", "banana", "peach"];
const ul = document.createElement("ul");

const callback = fruit => {
  const li = document.createElement("li");
  li.innerText = fruit;
  const listener = function () {
    alert("your choice is " + fruit);
  };
  li.addEventListener("click", listener);
  ul.appendChild(li);
};

fruits.forEach(callback);
document.body.appendChild(ul);
```

- callback 함수의 실행 종료 여부와 무관하게 클릭 이벤트에 의해 listener 함수가 실행될 때 listener 함수의 outerEnvironmentReference가 callback 함수의 LexicalEnvironment를 참조하게 된다.
- 따라서 최소한 listener 함수가 참조할 예정인 변수 fruit에 대해서는 callback 함수가 종료된 후에도 `GC` 대상에서 제외되어 계속 참조할 수 있다.

#### 콜백함수 분리 및 bind 메서드 적용

```javascript
const fruits = ["apple", "banana", "peach"];
const ul = document.createElement("ul");

const alertFruit = function (fruit) {
  alert("your choice is " + fruit);
};

fruits.forEach(function (fruit) {
  const li = document.createElement("li");
  li.innerText = fruit;
  li.addEventListener("click", alertFruit.bind(null, fruit));
  ul.appendChild(li);
});
document.body.appendChild(ul);
```

- 콜백 함수(`alertFruit`)의 인자에 대한 제어권은 `addEventListener`에게 있으며, `addEventListener`가 콜백함수를 호출할 때 **콜백함수의 인수로 이벤트 객체를 전달한다.**
- bind 메서드를 활용하면 **함수의 인자 순서를 바꿀 수 있고, 함수 내부에서의 this를 새로 지정할 수 있다.**
  - 위 예시에서는 이벤트 객체가 두 번째 인수로 전달된다.
- bind 메서드의 첫 번째 인자가 **새로 바인딩할 this**인데 이 값을 생략할 수 없기에 일반적으로 원래의 this를 유지할도록 할 수 없는 경우가 많다

#### 고차함수

- 고차함수란 **함수를 인자로 받거나 함수를 리턴하는 함수**이다.

```javascript
const fruits = ["apple", "banana", "peach"];
const ul = document.createElement("ul");
const alertFruitBuilder = function (fruit) {
  // (B)
  return function () {
    // (C)
    alert("your choice is " + fruit);
  };
};

fruits.forEach(function (fruit) {
  // (A)
  const li = document.createElement("li");
  li.innerText = fruit;
  li.addEventListener("click", alertFruitBuilder(fruit));
  ul.appendChild(li);
});
document.body.appendChild(ul);
```

- alertFruitBuilder 함수가 반환한 함수가 콜백함수로 전달되고 그 함수는 자신이 선언된 당시의 lexical environment를 통해 알 수 있었던 변수들 중 자신이 실행될 때 참조할 변수들을 기억하는 클로저이다.
- (B) 함수가 종료된 이후에도 클릭 이벤트가 발생하면 (C) 함수가 실행되고 (C) 함수의 `outerEnvironmentReference`를 통해 (B) 함수의 인수로 전달된 fruit를 참조할 수 있다.

<br/>

### ✨ 접근 권한 제어

#### 정보 은닉

- 어떤 모듈의 내부 로직에 대한 외부로의 노출을 최소화해서 모듈 간의 결합도를 낮추고 유연성을 높이는 것을 말한다.

#### 접근 권한

- 정보 은닉을 위해 접근 권한을 제어하는 경우가 있다.
- 흔히 접근 권한에는 `public`, `private`, `protected`가 있다.
- `public`은 외부에서 접근 가능한 것을 말하고, `private`은 내부에서만 사용하며 외부에 노출되지 않는 것을 말한다.
- 자바스크립트는 변수 자체에 이러한 접근 권한을 부여하도록 설계되어 있지 않다. 그렇다고 접근권한 제어가 불가능한 것은 아니다.

> 💡 클로저를 이용하면 **함수 차원에서 public한 변수와 private한 변수를 구분**하는 것이 가능하다.<br/>
> 💡 외부에 제공하고자 하는 대상들을 모아서 객체, 배열, 함수 형태로 반환하고, 내부에서만 사용할 정보들은 반환하지 않는 것으로 접근 권한 제어가 가능하다.

#### 예시

```javascript
const createCar = function () {
  const fuel = Math.ceil(Math.random() * 10 + 10);
  const power = Math.ceil(Math.random() * 3 + 2);
  let moved = 0;
  return {
    get moved() {
      return moved;
    },
    run: function () {
      const km = Math.ceil(Math.random() * 6);
      const wasteFuel = km / power;
      if (fuel < wasteFuel) {
        console.log("이동불가");
        return;
      }
      fuel -= wasteFuel;
      moved += km;
      console.log(`${km} km 이동 (총 ${moved} km), 남은 연료: ${fuel}`);
    }
  };
};
const car = createCar();
car.run(); // closure (fuel, power, moved 변수가 참조하고 있는 값 기억)
```

- fuel, power 변수는 외부에서 접근하지 못하도록 했고, moved 변수는 getter 메서드를 이용해 외부에서 접근할 수 있다.
- 이제 외부에서는 오직 run 메서드를 실행하는 것과 moved 변수의 값을 확인하는 두 가지 동작만 할 수 있다.

<br/>

### ✨ 부분 적용 함수

`partially applied function`

#### bind 메서드를 활용한 부분 적용 함수

```javascript
const add = function () {
  const result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
};
const addPartial = add.bind(null, 1, 2, 3, 4, 5);
console.log(addPartial(6, 7, 8, 9, 10)); // 55
```

- bind 메서드만으로도 부분 적용 함수를 구현할 수 있지만, `this`로 바인딩할 대상을 변경할 수 밖에 없다.

#### 클로저를 활용한 부분 적용 함수

```javascript
const partial = function () {
  const originalPartialArgs = arguments;
  const func = originalPartialArgs[0];
  if (typeof func !== "function") {
    throw new Error("첫 번째 인자가 함수가 아닙니다.");
  }
  // closure
  return function () {
    // originalPartialArgs 변수가 참조하고 있는 값 기억
    const partialArgs = Array.prototype.slice.call(originalPartialArgs, 1);
    const restArgs = Array.prototype.slice.call(arguments);
    // func 변수가 참조하고 있는 값 기억
    return func.apply(this, partialArgs.concat(restArgs));
  };
};

const add = function () {
  let result = 0;
  // arguments: 함수에 전달된 인수에 해당하는 유사배열객체
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
};

const addPartial = partial(add, 1, 2, 3, 4, 5);
console.log(addPartial(6, 7, 8, 9, 10)); // 55

const dog = {
  name: "강아지",
  greet: partial(function (prefix, suffix) {
    return prefix + this.name + suffix;
  }, "왈왈, ")
};

dog.greet("입니다!");
```

- partial 함수의 첫번째 인자에는 원본함수를, 두 번째 인자 이후부터는 미리 적용할 인자들을 전달한다.
- partial 함수가 반환할 함수 (부분 적용 함수)에서는 다시 나머지 인자들을 받고 이들을 한데 모아 (`concat`) 원본 함수를 호출 (`apply`)한다.
  - `apply` 메서드를 호출할 때 실행 시점의 `this`를 그대로 반영함으로써 `this`에는 아무런 영향을 주지 않는다.

> 💡 부분 적용 함수으로 구현할 원본 함수와 그 함수의 일부 인자를 넘겨 원본함수와 그 인자들을 기억하는 함수(`closure`)를 반환한다. 이후 반환된 함수를 호출할 때 나머지 인자들을 넘겨 기억하고 있던 인자들까지 함께 원본함수를 실행하게 한다.

#### 디바운스

- 짧은 시간 동안 동일한 이벤트가 많이 발생할 경우 이를 전부 처리하지 않고 처음 또는 마지막에 발생한 이벤트에 대해 한 번만 처리하는 것을 말한다.

```javascript
const debounce = function (func, wait) {
  let timeoutId = null;
  return function (event) {
    if (timeoutId) {
      clearTimeout(timeoutId); // 콜백함수 호출 대기 초기화
    }
    timeoutId = setTimeout(func.bind(this, event), wait);
  };
};

const moveHandler = function (e) {
  console.log("move event 처리");
};

const wheelHandler = function (e) {
  console.log("wheel event 처리");
};

document.body.addEventListener("mousemove", debounce(moveHandler, 500));
document.body.addEventListener("mousewheel", debounce(wheelHandler, 700));
```

- `debounce` 함수가 반환한 함수는 추후 실힝될 때 `func`, `wait` 변수가 참조하고 있는 값을 기억한다.
- 이벤트가 바로 이전 이벤트로부터 wait 시간 이내에 발생하면 이전 이벤트에 대한 콜백함수는 실행되지 않는다.

<br/>

### ✨ 커링 함수

`currying function`

- **하나 이상의 인자를 갖는 함수를 하나의 인자만 갖는 함수로 나눠서 순차적으로 호출될 수 있도록 구성한 함수**를 말한다.
- **반드시 한 번의 호출 시 하나의 인수만 전달**하는 것을 원칙으로 한다.
- 중간 과정상의 함수를 실행한 결과는 그 다음 인자를 받기 위해 **대기**만 할 뿐으로, **마지막 인자가 전달되기 전까지는 원본 함수가 실행되지 않는다.**

```javascript
const curry3 = function (func) {
  return function (a) {
    return function (b) {
      return func(a, b);
    };
  };
};

const getMaxWith10 = curry(Math.max)(10);
console.log(geMaxWith10(8)); // 10
console.log(getMaxWith10(25)); // 25

const getMinWith10 = curry(Math.min)(10);
console.log(geMinWith10(8)); // 8
console.log(getMinWith10(25)); // 10
```

- 필요한 인자 개수 만큼 함수를 만들어 계속 함수를 반환하다가 마지막에만 원본 함수를 실행된다.
- 다만 인자가 많아질수록 들여쓰기가 깊어져 가독성이 떨어진다.

```javascript
const curry5 = function (func) {
  return function (a) {
    return function (b) {
      return function (c) {
        return function (d) {
          return function (e) {
            func(a, b, c, d, e);
          };
        };
      };
    };
  };
};

const getMax = curry5(Math.max);
console.log(getMax(1)(2)(3)(4)(5));
```

- ES6에서는 화살표 함수를 써서 코드의 가독성을 높일 수 있다.
- 화살표 순서에 따라 함수에 인자를 차례로 넘겨주면 마지막에 원본 함수가 호출됨을 한눈에 파악할 수 있다.

```javascript
const curry5 = func => a => b => c => d => e => func(a, b, c, d, e);
```

> 💡 원본함수 호출 전까지 커링함수는 계속 함수를 반환한다. 이 함수들은 스코프 체인에서 알 수 있었던 변수들을 기억하는 클로저이다.

<br/>

#### 지연 실행

`lazy execution`

- 당장 필요한 인자만 받아서 전달하고 결국 마지막 인자가 넘어갈 때까지 함수 실행을 미루는 것을 함수형 프로그래밍에서는 지연 실행이라고 칭한다.
- 원하는 시점까지 함수 실행을 지연시켰다가 실행하는 것이 필요한 상황이라면 커링함수를 사용하는 것이 유용하다.

```javascript
const getInformation = baseUrl => path => id =>
  fetch(`${baseUrl}${path}/${id}`);
```

- 서버에 정보를 요청할 필요가 있을 때마다 매번 `baseUrl`부터 전부 기입해주기보다는 공통적인 요소는 먼저 기억시켜두고 특정한 값(`id`)만으로 서버 요청을 수행하는 함수를 만들어두는 것이 개발 효율성이나 가독성 측면에서 더 좋을 것이다.
- 이러한 이유로 최근의 여러 프레임워크나 라이브러리 등에서 커링함수를 광범위하게 사용하고 있다.
- Flux 아키텍처의 구현체 중 하나인 `Redux`의 `middleware`

```javascript
// Redux Middleward 'Logger'
const logger = store => next => action => {
  console.log("dispatching", action);
  console.log("next state", store.getStore());
  return next(action);
};

// Redux Middleward 'thunk'
const thunk = store => next => action => {
  return typeof action === "function"
    ? action(dispatch, store.getState)
    : next(action);
};
```
