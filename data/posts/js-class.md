---
emoji: 🧸
title: 클래스
date: "2022-01-07"
category: Javascript
preview: "class: 객체 지향 프로그래밍에서 구체적인 instance를 생성하기 위해 필드(변수)와 메서드를 정의하는 일종의 틀이다. 클래스 멤버: 필드, 메서드 (생성자 포함). instance: 클래스를 통해 만든 객체, 클래스의 속성을 지니는 실존하는 개체 (구체적인 예시). superclass: 상위 클래스, subclass: 하위 클래스. 하위 클래스는 상위 클래스의 멤버를 상속하면서 필드(변수)와 메서드가 추가 혹은 변경된다. 생성자 함수와 프로토타입, 클로저를 이용하여 클래스를 구현할 수 있다. class의 멤버는 instance가 상속하는지 (참조하는지)에 대한 여부에 따라 static member와 prototype member로 나뉜다."
---

# 클래스

- `class`: 객체 지향 프로그래밍에서 **구체적인 instance를 생성**하기 위해 필드(변수)와 메서드를 정의하는 일종의 **틀**이다.
  - 클래스 멤버: 필드, 메서드 (생성자 포함)
- `instance`: 클래스를 통해 만든 객체, 클래스의 속성을 지니는 실존하는 개체 (구체적인 예시)
- `superclass`: 상위 클래스, `subclass`: 하위 클래스
  - 하위 클래스는 상위 클래스의 멤버를 상속하면서 필드(변수)와 메서드가 추가 혹은 변경된다.

<br/>

# 자바스크립트의 클래스 (ES5 기준)

- 생성자 함수와 프로토타입, 클로저를 이용하여 클래스를 구현할 수 있다.
- class의 멤버는 instance가 상속하는지 (참조하는지)에 대한 여부에 따라 `static member`와 `prototype member`로 나뉜다.

```javascript
// Constructor (Class)
const Rectangle = function (width, height) {
  this.width = width;
  this.height = height;
};

// prototype method
Rectangle.prototype.getArea = function () {
  return this.width * this.height;
};

//  static method
Rectangle.isRectangle = function (instance) {
  return (
    instance instanceof Rectangle && instance.width > 0 && instance.height > 0
  );
};

const rect1 = new Rectangle(3, 4);
console.log(rect1.getArea()); // 12
console.log(rect1.isRectangle(rect1)); // Error
console.log(Rectangle.isRectangle(rect1)); // true
```

**prototype method**

- Constructor의 prototype 프로퍼티 내부에 있는 메서드를 말한다.
  - 위 예시에서는 `getArea` 메서드
- instance의 `__proto__` 프로퍼티는 prototype 프로퍼티를 참조하고 있어 instance의 `__proto__` 프로퍼티를 통해 getArea 메서드를 호출할 수 있다.
- 이때 `__proto__` 프로퍼티는 생략 가능하므로 instance에서 직접 호출할 수 있다.

**static method**

- Constructor의 prototype 프로퍼티 내부에 없고 생성자 함수(Constructor)의 내부에 있는 메서드를 말한다.
  - 위 예시에서는 `isRectangle` 메서드
  - instance에서 직접 호출할 수 없다.
- `static method`는 생성자 함수를 통해서만 호출할 수 있다.
- 실제로 rect1 인스턴스에서 isRectangle 메서드를 검색할 때 우선 rect1에 해당 메서드가 있는지 검색하고, 없으니 `rect1.__proto__`를 검색하고 없으니까, `rect1.__proto__.__proto__(= Object.prototype)`를 검색하고, 없으니까 Error가 발생한다. (Prototype Chain을 통해 검색)

![Comparison of Static method and Prototype method](1.png)

<br/>

# 클래스 상속

Prototype Chain을 활용해 클래스 상속을 구현할 수 있다.

**예시**

```javascript
const Rectangle = function (width, height) {
  this.width = width;
  this.height = height;
};

Rectangle.prototype.getArea = function () {
  return this.width * this.height;
};
const rect1 = new Rectangle(3, 4);
console.log(rect1.getArea()); // 12

const Square = function (width) {
  Rectangle.call(this, width, width);
};
Square.prototype = new Rectangle();
const sq = new Square(5);
```

- `Rectangle.prototype` 내부의 메서드를 상속받기 위해 `Square.prototype` 객체에 `Rectangle instance` 할당한다.
- `sq.__proto__` = `Square.prototype` = `Rectangle's instance`
  ![Prototype Chain Example](2.png)
- 문제 1 : `Square.prototype`에 값(속성)이 들어있다.
  - 먄약 Square.prototype.width (또는 height)에 값을 부여하고 sq.width (또는 height)를 삭제한다면 Prototype Chaining에 의해 엉뚱한 값이 나올 수 있다.
- 문제 2: `sq.constructor` == `Rectangle`
  - `sq.__proto__.constructor` = `Square.prototype.constructor` = `Rectangle`

> 💡 하위 클래스로 사용할 생성자 함수의 prototype에 상위 클래스의 instance를 부여하는 것만으로 클래스 상속을 구현할 수 있지만 구조적으로 안전성이 떨어진다.

<br/>

## 클래스에 구체적인 데이터를 지니지 않게 하기

1. 첫번째 방법: 하위 클래스를 삼을 생성자 함수의 prototype에 상위 클래스의 instance를 부여하고 나서 하위 클래스의 prototype 객체의 프로퍼티들을 전부 지우고 freeze한다.

```javascript
const extendClass1 = function (SuperClass, SubClass, subMethods) {
  SubClass.prototype = new SuperClass();
  for (let prop in SubClass.prototype) {
    if (SubClass.prototype[prop].hasOwnProperty(prop)) {
      delete SubClass.prototype[prop];
    }
  }

  if (subMethods) {
    for (let method in subMethods) {
      SubClass.prototype[method] = subMethods[method];
    }
  }
  Object.freeze(SubClass.prototype);
  return SubClass;
};
```

2. 두번째 방법: 좀 더 대중적인 방법으로 하위 클래스의 prototype에 직접 상위 클래스의 instance를 부여하는 대신 아무런 프로퍼티를 생성하지 않는 빈 생성자 함수(Bridge)를 하나 더 만들어서 빈 생성자 함수의 prototype에 상위 클래스의 prototype를 부여하고, 하위 클래스의 prototype에는 Bridge의 instance를 할당한다.

```javascript
const extendClass2 = (function (SuperClass, SubClass, subMethods) {
  const Bridge = function () {};
  return function () {
    Bridge.prototype = SuperClass.prototype;
    SubClass.prototype = new Bridge();

    if (subMethods) {
      for (let method in subMethods) {
        SubClass.prototype[method] = subMethods[method];
      }
    }
    Object.freeze(SubClass.prototype);
    return SubClass;
  };
})();
```

- 즉시실행함수에서 빈 생성자 함수 `Bridge`를 만들고 클로저를 활용하여 `Bridge`를 기억하는 함수를 리턴함으로써 불필요한 메모리에 불필요한 함수 선언을 줄였다.

3. 세번째 방법: `Object.create()` 이용

- `Object.create()` 함수의 인수로 상위 클래스의 프로토타입 객체를 전달하고, 반환된 객체를 하위 클래스의 프로토타입 객체가 참조하도록 한다.
- 하위 클래스의 prototype 객체의 `__proto__` 프로퍼티가 상위 클래스의 prototype을 참조한다.

```javascript
const extendClass3 = function (SuperClass, SubClass, subMethods) {
  SubClass.prototype = Object.create(SuperClass.prototype);
  if (subMethods) {
    for (let method in subMethods) {
      SubClass.prototype[method] = subMethods[method];
    }
  }
  Object.freeze(SubClass.prototype);
  return SubClass;
};
```

> 💡 subclass의 prototype 내부의 `__proto__` 프로퍼티가 superclass의 prototype 객체를 참조하고, subclass의 prototype에는 불필요한 인스턴스 프로퍼티가 남아 있지 않도록 상속을 구현하면 된다.

<br/>

## constructor 복구하기

- subclass의 prototype 객체의 constructor 프로퍼티가 subclass를 바라보도록 하면 된다.

```javascript
const extendClass1 = function (SuperClass, SubClass, subMethods) {
  SubClass.prototype = new SuperClass();
  for (let prop in SubClass.prototype) {
    if (SubClass.prototype[prop].hasOwnProperty(prop)) {
      delete SubClass.prototype[prop];
    }
  }
  SubClass.prototype.constructor = SubClass;
  if (subMethods) {
    for (let method in subMethods) {
      SubClass.prototype[method] = subMethods[method];
    }
  }
  Object.freeze(SubClass.prototype);
  return SubClass;
};
```

```javascript
const extendClass2 = (function (SuperClass, SubClass, subMethods) {
  const Bridge = function () {};
  return function () {
    Bridge.prototype = SuperClass.prototype;
    SubClass.prototype = new Bridge();
    SubClass.prototype.constructor = SubClass;
    if (subMethods) {
      for (let method in subMethods) {
        SubClass.prototype[method] = subMethods[method];
      }
    }
    Object.freeze(SubClass.prototype);
    return SubClass;
  };
})();
```

```javascript
const extendClass3 = function (SuperClass, SubClass, subMethods) {
  SubClass.prototype = Object.create(SuperClass.prototype);
  SubClass.prototype.constructor = SubClass;
  if (subMethods) {
    for (let method in subMethods) {
      SubClass.prototype[method] = subMethods[method];
    }
  }
  Object.freeze(SubClass.prototype);
  return SubClass;
};
```

<br/>

## 상위 클래스 접근 수단 제공

- 하위 클래스의 메서드에서 상위 클래스의 메서드에 접근하고 싶을 때가 있다.
- 다른 객체 지향 언어들의 클래스 문법 중 하나인 `super` 구현하기
- 상위 클래스 접근 수단인 `super` 메서드 추가

```javascript
const extendClass = function (SuperClass, SubClass, subMethods) {
  SubClass.prototype = Object.create(SuperClass.prototype);
  SubClass.prototype.constructor = SubClass;
  SubClass.prototype.super = function (propName) {
    const self = this;
    if (!propName)
      return function () {
        SuperClass.apply(self, arguments);
      };
    const prop = SuperClass.prototype[propName];
    if (typeof prop !== "function") return prop;
    return function () {
      return prop.apply(self, arguments);
    };
  };

  if (subMethods) {
    for (let method in subMethods) {
      SubClass.prototype[method] = subMethods[method];
    }
  }
  Object.freeze(SubClass.prototype);
  return SubClass;
};

const Rectangle = function (width, height) {
  this.width = width;
  this.height = height;
};

Rectangle.prototype.getArea = function () {
  return this.width * this.height;
};

const Square = extendClass(
  Rectangle,
  function (width) {
    this.super()(width, width);
  },
  {
    getArea: function () {
      console.log("size if :", this.super("getArea")());
    }
  }
);
const sq = new Square(10);
sq.getArea(); // size is : 100 (subclass의 메서드 실행)
console.log(sq.super("getArea")()); // 100  (superclass의 메서드 실행)
```

- superclass의 생성자 함수에 접근하고자 할 때는 `this.super()`, superclass의 메서드에 접근하고자 할 때는 `this.super(propName)`와 같이 사용하면 된다.

<br/>

# ES6의 클래스

## ES5와 ES6 클래스 문법 비교

```javascript
const ES5 = function (name) {
  this.name = name;
};
ES5.staticMethod = function () {
  return this.name + "staticMethod";
};
ES5.prototype.method = function () {
  return this.name + "method";
};

const ES6 = class {
  // 생성자
  constructor(name) {
    this.name = name;
  }

  // static method : 생성자 함수(클래스)만이 호출할 수 있음.
  static staticMethod() {
    return this.name + "staticMethod";
  }

  // prototype method
  method() {
    return this.name + "method";
  }
};
```

<br/>

## ✨ 클래스 생성

- **클래스 선언**과 **클래스 표현식** 두가지 방식으로 클래스를 생성할 수 있다.
- 클래스 선언 및 클래스 표현식은 **호이스팅되지 않으므로** 클래스에 접근하기 전에 클래스를 선언하지 않으면 `reference error`가 발생한다.

```javascript
// 클래스 선언
class Person {}

// 클래스 표현식
const person = class Person {};
```

- 생성자는 하나만 존재해야 한다. 클래스에 생성자가 두 개 이상 존재하면 `syntax error`가 발생한다.

**예시**

```javascript
class Person {
  // 생성자: 클래스의 필드를 초기화하는 특별 메서드
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hi my name is ${this.name} and I'm ${this.age} years old`);
  }
  farewell() {
    console.log("goodbye friend");
  }
}

const alberto = new Person("Alberto", 26);
alberto.greet(); // Hi my name is Alberto and I'm 26 years old
alberto.farewell(); // goodbye friend
```

<br/>

## ✨ 정적 메서드

- 클래스를 통해서만 접근할 수 있음. 인스턴스에서 호출할 수 없는 메서드
- 메서드 앞에 `static` 키워드를 붙여 정적 메서드 생성

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  static info() {
    console.log("I am a Person class, nice to meet you");
  }
}

const alberto = new Person("Alberto", 26);
alberto.info(); // TypeError
Person.info(); // I am a Person class, nice to meet you
```

<br/>

## ✨ set과 get

- setter와 getter 메서드를 사용하여 클래스 필드값을 설정하거나 가져올 수 있다.
- 메서드 앞에 `set`이나 `get` 키워드를 붙여 setter나 getter 메서드 생성

```javascript
class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
    this.nickname = "";
  }
  set nicknames(value) {
    this.nickname = value;
    console.log(this.nickname);
  }
  get nicknames() {
    console.log(`Your nickname is ${this.nickname}`);
  }
}

const alberto = new Person("Alberto", "Montalesi");

// setter 호출
alberto.nicknames = "Albi"; // Albi
// getter 호출
alberto.nicknames; // "Your nickname is Albi"
```

<br/>

## ✨ 클래스 상속하기

- `extends` 키워드를 이용하여 클래스 상속을 구현할 수 있다.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hi my name is ${this.name} and I'm ${this.age} years old`);
  }
}

class Adult extends Person {
  constructor(name, age, work) {
    this.name = name;
    this.age = age;
    this.work = work;
  }
}

const alberto = new Adult("Alberto", 26, "softward developer"); // ReferenceError
```

- Adult 클래스는 Person 클래스를 상속받기 때문에 Adult 클래스의 생성자를 호출할 때, 먼저 Person 클래스의 생성자를 호출해야 한다.
- 따라서 상속받는 클래스의 생성자 내부에서 `super()`를 호출하여 상위 클래스의 생성자를 호출할 수 있다.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hi my name is ${this.name} and I'm ${this.age} years old`);
  }
}

class Adult extends Person {
  constructor(name, age, work) {
    super(name, age);
    this.work = work;
  }
}
```

```javascript
const Rectangle = class {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
};

const Square = class {
  constructor(width) {
    super(width, width);
  }
};
```

<br/>

# 정리

- **class**는 어떤 사물의 공통 속성을 모아 정의한 추상적인 개념 (구체적인 instance를 생성하기 위해 속성과 메서드를 정의하는 일종의 틀)이고, **instance**는 클래스의 속성을 지니는 구체적인 사례이다.
- 클래스 (생성자 함수)의 prototype 내부에 정의된 메서드를 **prototype method**라고 하고, 이들은 instance가 마치 자신의 것처럼 호출할 수 있다.
- 반면 클래스 (생성자 함수)에 직접 정의한 메서드를 **static method**라고, 이들은 인스턴스에서 호출할 수 없고, 클래스(생성자 함수)를 통해서만 호출할 수 있다.
- **클래스 상속**을 흉내내기 위한 세 가지 방법
  - subclass의 prototype에 superclass의 instance를 부여한 다음, 내부 프로퍼티를 모두 삭제하는 방법
  - 빈 생성자 함수 (Bridge) 활용
  - `Object.create()` 이용
  - 위 세가지 방법 모두 subclass의 prototype 객체의 constructor 프로퍼티가 subclass를 참조해야 한다.
  - 💡 subclass의 prototype 객체의 `__proto__` 프로퍼티가 superclass의 prototype 프로퍼티를 참조하도록 하고, subclass의 prototype 객체에는 불필요한 인스턴스 프로퍼티가 존재하지 않아야 한다.
- ES6에서는 클래스 문법이 도입되어 전보다 쉽게 클래스를 생성하고 상속을 구현할 수 있다.
