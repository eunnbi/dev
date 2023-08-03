---
emoji: 🚦
title: 데코레이터
date: "2022-12-28"
category: Typescript
preview: "클래스, 속성, 메서드, 접근제어자, 매개변수 등에 사용할 수 있는 특별한 함수이다. 데코레이터 함수를 사용할 때는 데코레이터 함수 이름 앞에 @를 붙인다. 클래스, 속성, 메서드, 접근제어자, 매개변수에 따라 데코레이터 함수가 전달받는 인자가 다르다. 데코레이터를 사용하기 위해 tsconfig.json 파일의 compilerOptions에서 target을 es6으로 설정하고, experimentalDecorators을 true로 설정한다. 클래스 데코레이터 클래스 선언을 관찰하거나 속성 및 메서드를 추가 및 수정할 때 사용할 수 있다. 클래스가 유일한 인자로 전달된다. 클래스 재정의 클래스 데코레이터 함수에서 새로운 클래스를 반환하여 속성 및 메서드를 추가 및 수정할 수 있다. 클래스 데코레이터 함수에서 재정의한 속성 및 메서드가 원래 클래스의 속성 및 메서드보다 우선된다."
---

## 데코레이터란?

- 클래스, 속성, 메서드, 접근제어자, 매개변수 등에 사용할 수 있는 특별한 함수이다.
- 데코레이터 함수를 사용할 때는 데코레이터 함수 이름 앞에 `@`를 붙인다.
- 클래스, 속성, 메서드, 접근제어자, 매개변수에 따라 데코레이터 함수가 전달받는 인자가 다르다.
- 데코레이터를 사용하기 위해 `tsconfig.json` 파일의 `compilerOptions`에서 `target`을 `es6`으로 설정하고, `experimentalDecorators`을 `true`로 설정한다.

<br/>

## 클래스 데코레이터

- 클래스 선언을 관찰하거나 속성 및 메서드를 추가 및 수정할 때 사용할 수 있다.
- 클래스가 유일한 인자로 전달된다.

```ts
function Component(target: Function) {
  target.prototype.type = "component";
  target.prototype.version = "0.1.0";
}

@Component
class Person {
  name = "Max";
  constructor() {
    console.log("Creating person object...");
  }
}

const person = new Person(); // Creating person object...
console.log((person as any).type); // component (타입 단언 필요함!)
console.log((person as any).version); // 0.0.1
```

### 클래스 재정의

- 클래스 데코레이터 함수에서 새로운 클래스를 반환하여 속성 및 메서드를 추가 및 수정할 수 있다.
- 클래스 데코레이터 함수에서 재정의한 속성 및 메서드가 원래 클래스의 속성 및 메서드보다 우선된다.

```ts
function Component<T extends { new (...args: any[]): {} }>(target: T) {
  // 재정의
  return class extends target {
    // 속성
    type: string = "component";
    version: string = "0.1.0";

    constructor(...args: any[]) {
      super(...args);
    }
    // 메서드
    info() {
      console.log(this.name, this.type, this.version);
    }
  };
}

@Component
class Person {
  name = "Max";
  constructor() {
    console.log("Creating person object...");
  }

  info() {
    console.log(this.name);
  }
}

const person = new Person(); // Creating person object...
console.log((person as any).type); // component
(person as any).info(); // Max component 0.1.0
```

<br/>

## 데코레이터 팩토리

- 데코레이터 함수를 감싸는 래퍼 함수, 데코레이터 함수를 반환하는 함수
- 사용자로부터 인자를 전달받을 수 있다.

```ts
// 데코레이터 팩토리
function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger("LOGGING - PERSON")
class Person {
  name = "Max";

  constructor() {
    console.log("Creating person object...");
  }
}
```

<br/>

## 멀티 데코레이터

- 하나의 대상에 대해 여러 데코레이터 함수를 사용하는 것을 말한다.
- 데코레이터는 다음 순서로 처리된다.
  - 각 데코레이터 표현식은 위에서 아래 방향으로 평가된다.
  - 아래에서 위로 데코레이터 함수를 호출한다.

> **데코레이터는 클래스를 선언 및 정의할 때 실행된다.**

```ts
function Logger(logString: string) {
  console.log("LOGGER FACTORY");
  return function (target: Function) {
    console.log(logString);
    console.log(target);
  };
}

function WithTemplate(template: string, hookId: string, name: string) {
  console.log("TEMPLATE FACTORY");
  return function (target: any) {
    console.log("Rendering template");
    const hookEl = document.getElementById(hookId);
    const p = new target(name);
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}

@Logger("LOGGING - PERSON")
@WithTemplate("<h1>My Person Object</h1>", "app", "Max")
class Person {
  constructor(public name: string) {
    console.log("Creating person object...");
  }

  info() {
    console.log(this.name);
  }
}

/*
LOGGER FACTORY
TEMPLAGE FACTORY
Rendering template
LOGGING - PERSON
*/
```

<br/>

## 메서드 데코레이터

- 메서드 선언 앞에 사용되고, 메서드 선언을 확인, 수정, 교체하는데 사용된다.
- 총 3개의 인자를 전달받는다.
  - `target`: 클래스(생성자 함수)의 프로토타입 객체
  - `name`: 메서드 이름
  - `descriptor`: 메서드에 대한 세부 정보 (configurable, writable 등)

```ts
function Write(able: boolean = true) {
  return function (target: any, name: string, desc: PropertyDescriptor) {
    desc.writable = able;
  };
}

class Product {
  constructor(
    public title: string,
    private price: number
  ) {}

  @Write(false)
  getPriceWithTax(tax: number) {
    return this.price * (1 + tax);
  }
}

const product = new Product("Chocolate", 1000);
product.getPriceWithTax = function (_: number) {
  console.log(this);
  return 0;
}; // Uncaught TypeError: Cannot assign to read only property 'getPriceWithTax' of object '#<Product>'
```

<br/>

## 접근 제어자 데코레이터

- 접근 제어자 선언 앞에 사용되고, 접근 제어자에 대한 선언 확인, 수정, 교체하는데 사용된다.
- 총 3개의 인자를 전달받는다.
  - `target`: 클래스(생성자 함수)의 프로토타입 객체
  - `name`: 접근 제어자 이름
  - `descriptor`: 접근 제어자에 대한 세부 정보 (configurable, enumerable, get, set)

```ts
function Configurable(remove: boolean) {
  return function (target: any, name: string, desc: PropertyDescriptor) {
    desc.configurable = remove;
  };
}

class Rectangle {
  public color?: string = "#000";

  constructor(
    private _width: number,
    private _height: number
  ) {}

  @Configurable(false)
  get width() {
    return this._width;
  }

  @Configurable(false)
  get height() {
    return this._height;
  }
}

const rect = new Rectangle(400, 210);
delete rect.color;
delete rect.width; // Compile Error: The operand of a 'delete' operator cannot be a read-only property.
```

<br/>

## 속성 데코레이터

- 속성 선언 앞에 사용되고, 속성 선언 확인, 수정, 교체하는데 사용된다.
- 총 2개의 인자를 전달받는다.
  - `target`: 클래스(생성자 함수)의 프로토타입 객체
  - `name`: 속성 이름

```ts
// 속성을 읽거나 쓸 때 로그를 남기는 데코레이터
function LogProp(target: any, name: string) {
  let value = target[name];

  const getter = function () {
    console.log(`GET: ${name} => ${value}`);
    return value;
  };

  const setter = function (newVal: any) {
    value = newVal;
    console.log(`SET: ${name} => ${value}`);
  };

  if (delete target[name]) {
    Object.defineProperty(target, name, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
    });
  }
}

class Button {
  @LogProp
  type: string = "button";

  @LogProp
  version: string = "0.1.0";
}
const btn = new Button(); //SET: type => button // SET: version => 0.0.2
console.log(btn.type); // GET: type => button // button
btn.type = "버튼"; // SET: type => 버튼
```

> 참고: [Object.defineProperty()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)

<br/>

## 매개변수 데코레이터

- 클래스의 생성자 함수 혹은 메서드의 메개변수에 주로 사용된다.
- 총 3개의 인자를 전달받는다.
  - `target`: 생성자 함수의 매개변수에 사용했다면 클래스가 전달되고, 메서드의 매개변수에 사용했다면 클래스의 프로토타입 객체가 전달된다.
  - `name`: 메서드 이름 (만약 생성자 함수의 매개변수라면 `undefined`가 전달된다)
  - `index`: 매개변수 순서 (0부터 시작)

```ts
function Log(target: any, name: string, index: number) {
  console.log(
    target.name === undefined ? target.constructor.name : target.name
  );
  console.log(`
    매개변수 순서: ${index}, 
    멤버 이름: ${name === undefined ? "constructor" : name}
  `);
}

class Product {
  constructor(
    @Log public title: string,
    @Log private price: number
  ) {}

  getPriceWithTax(@Log tax: number) {
    return this.price * (1 + tax);
  }
}
```

```
Product
매개변수 순서: 0,
멤버 이름: getPriceWithTax

Product
매개변수 순서: 1,
멤버 이름: constructor

Product
매개변수 순서: 0,
멤버 이름: constructor

매개변수가 역순으로 출력됨.
```

<br/>

## autobind 데코레이터 만들기

```ts
class Printer {
  message = "This works!";

  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();
const button = document.querySelector("button");
button?.addEventListener("click", p.showMessage);
```

- 위 예시의 결과로 버튼을 클릭했을 때 `undefined`가 출력된다.
- 그 이유는 콜백함수를 실행할 때 `addEventListener` 메서드의 인수로 전달된 콜백함수 내부의 `this`는 이밴트 대상으로 바인딩된다.
- showMessage 메서드를 콜백함수로 전달했기 때문에 메서드 내부의 `this`는 인스턴스가 아닌 button을 참조한다.

**해결**

1. `bind` 메서드 이용

```ts
button?.addEventListener("click", p.showMessage.bind(p));
```

2. 클래스를 정의할 때 메서드 내부의 `this`가 인스턴스를 참조하도록 명시하기

- 이 방법은 메서드 데코레이터를 이용하여 구현할 수 있다.

```ts
function Autobind(target: any, name: string, descriptor: PropertyDescriptor) {
  const originialMethod = target[name];
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originialMethod.bind(this); // this = instance
      return boundFn;
    }
  };
  return adjDescriptor;
}

class Printer {
  message = "This works!";

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();
const button = document.querySelector("button");
button?.addEventListener("click", p.showMessage);
```

- 데코레이터 함수에서 반환된 값을 메서드의 새로운 property descriptor으로 사용된다.
- 이제 메서드를 호출할 때마다 `get`이 실행되고 bind 메서드를 이용해 명시적으로 인스턴스를 `this`로 바인딩한 새로운 메서드를 반환한다.

<br/>

> 참고: [typestack/class-validator](https://github.com/typestack/class-validator)
