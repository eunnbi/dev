---
emoji: π§Έ
title: ν΄λμ€
date: "2022-01-07"
category: Javascript
preview: "class: κ°μ²΄ μ§ν₯ νλ‘κ·Έλλ°μμ κ΅¬μ²΄μ μΈ instanceλ₯Ό μμ±νκΈ° μν΄ νλ(λ³μ)μ λ©μλλ₯Ό μ μνλ μΌμ’μ νμ΄λ€. ν΄λμ€ λ©€λ²: νλ, λ©μλ (μμ±μ ν¬ν¨). instance: ν΄λμ€λ₯Ό ν΅ν΄ λ§λ  κ°μ²΄, ν΄λμ€μ μμ±μ μ§λλ μ€μ‘΄νλ κ°μ²΄ (κ΅¬μ²΄μ μΈ μμ). superclass: μμ ν΄λμ€, subclass: νμ ν΄λμ€. νμ ν΄λμ€λ μμ ν΄λμ€μ λ©€λ²λ₯Ό μμνλ©΄μ νλ(λ³μ)μ λ©μλκ° μΆκ° νΉμ λ³κ²½λλ€. μμ±μ ν¨μμ νλ‘ν νμ, ν΄λ‘μ λ₯Ό μ΄μ©νμ¬ ν΄λμ€λ₯Ό κ΅¬νν  μ μλ€. classμ λ©€λ²λ instanceκ° μμνλμ§ (μ°Έμ‘°νλμ§)μ λν μ¬λΆμ λ°λΌ static memberμ prototype memberλ‘ λλλ€."
---

# ν΄λμ€

- `class`: κ°μ²΄ μ§ν₯ νλ‘κ·Έλλ°μμ **κ΅¬μ²΄μ μΈ instanceλ₯Ό μμ±**νκΈ° μν΄ νλ(λ³μ)μ λ©μλλ₯Ό μ μνλ μΌμ’μ **ν**μ΄λ€.
  - ν΄λμ€ λ©€λ²: νλ, λ©μλ (μμ±μ ν¬ν¨)
- `instance`: ν΄λμ€λ₯Ό ν΅ν΄ λ§λ  κ°μ²΄, ν΄λμ€μ μμ±μ μ§λλ μ€μ‘΄νλ κ°μ²΄ (κ΅¬μ²΄μ μΈ μμ)
- `superclass`: μμ ν΄λμ€, `subclass`: νμ ν΄λμ€
  - νμ ν΄λμ€λ μμ ν΄λμ€μ λ©€λ²λ₯Ό μμνλ©΄μ νλ(λ³μ)μ λ©μλκ° μΆκ° νΉμ λ³κ²½λλ€.

<br/>

# μλ°μ€ν¬λ¦½νΈμ ν΄λμ€ (ES5 κΈ°μ€)

- μμ±μ ν¨μμ νλ‘ν νμ, ν΄λ‘μ λ₯Ό μ΄μ©νμ¬ ν΄λμ€λ₯Ό κ΅¬νν  μ μλ€.
- classμ λ©€λ²λ instanceκ° μμνλμ§ (μ°Έμ‘°νλμ§)μ λν μ¬λΆμ λ°λΌ `static member`μ `prototype member`λ‘ λλλ€.

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

- Constructorμ prototype νλ‘νΌν° λ΄λΆμ μλ λ©μλλ₯Ό λ§νλ€.
  - μ μμμμλ `getArea` λ©μλ
- instanceμ `__proto__` νλ‘νΌν°λ prototype νλ‘νΌν°λ₯Ό μ°Έμ‘°νκ³  μμ΄ instanceμ `__proto__` νλ‘νΌν°λ₯Ό ν΅ν΄ getArea λ©μλλ₯Ό νΈμΆν  μ μλ€.
- μ΄λ `__proto__` νλ‘νΌν°λ μλ΅ κ°λ₯νλ―λ‘ instanceμμ μ§μ  νΈμΆν  μ μλ€.

**static method**

- Constructorμ prototype νλ‘νΌν° λ΄λΆμ μκ³  μμ±μ ν¨μ(Constructor)μ λ΄λΆμ μλ λ©μλλ₯Ό λ§νλ€.
  - μ μμμμλ `isRectangle` λ©μλ
  - instanceμμ μ§μ  νΈμΆν  μ μλ€.
- `static method`λ μμ±μ ν¨μλ₯Ό ν΅ν΄μλ§ νΈμΆν  μ μλ€.
- μ€μ λ‘ rect1 μΈμ€ν΄μ€μμ isRectangle λ©μλλ₯Ό κ²μν  λ μ°μ  rect1μ ν΄λΉ λ©μλκ° μλμ§ κ²μνκ³ , μμΌλ `rect1.__proto__`λ₯Ό κ²μνκ³  μμΌλκΉ, `rect1.__proto__.__proto__(= Object.prototype)`λ₯Ό κ²μνκ³ , μμΌλκΉ Errorκ° λ°μνλ€. (Prototype Chainμ ν΅ν΄ κ²μ)

![Comparison of Static method and Prototype method](1.png)

<br/>

# ν΄λμ€ μμ

Prototype Chainμ νμ©ν΄ ν΄λμ€ μμμ κ΅¬νν  μ μλ€.

**μμ**

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

- `Rectangle.prototype` λ΄λΆμ λ©μλλ₯Ό μμλ°κΈ° μν΄ `Square.prototype` κ°μ²΄μ `Rectangle instance` ν λΉνλ€.
- `sq.__proto__` = `Square.prototype` = `Rectangle's instance`
  ![Prototype Chain Example](2.png)
- λ¬Έμ  1 : `Square.prototype`μ κ°(μμ±)μ΄ λ€μ΄μλ€.
  - λ¨μ½ Square.prototype.width (λλ height)μ κ°μ λΆμ¬νκ³  sq.width (λλ height)λ₯Ό μ­μ νλ€λ©΄ Prototype Chainingμ μν΄ μλ±ν κ°μ΄ λμ¬ μ μλ€.
- λ¬Έμ  2: `sq.constructor` == `Rectangle`
  - `sq.__proto__.constructor` = `Square.prototype.constructor` = `Rectangle`

> π‘ νμ ν΄λμ€λ‘ μ¬μ©ν  μμ±μ ν¨μμ prototypeμ μμ ν΄λμ€μ instanceλ₯Ό λΆμ¬νλ κ²λ§μΌλ‘ ν΄λμ€ μμμ κ΅¬νν  μ μμ§λ§ κ΅¬μ‘°μ μΌλ‘ μμ μ±μ΄ λ¨μ΄μ§λ€.

<br/>

## ν΄λμ€μ κ΅¬μ²΄μ μΈ λ°μ΄ν°λ₯Ό μ§λμ§ μκ² νκΈ°

1. μ²«λ²μ§Έ λ°©λ²: νμ ν΄λμ€λ₯Ό μΌμ μμ±μ ν¨μμ prototypeμ μμ ν΄λμ€μ instanceλ₯Ό λΆμ¬νκ³  λμ νμ ν΄λμ€μ prototype κ°μ²΄μ νλ‘νΌν°λ€μ μ λΆ μ§μ°κ³  freezeνλ€.

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

2. λλ²μ§Έ λ°©λ²: μ’ λ λμ€μ μΈ λ°©λ²μΌλ‘ νμ ν΄λμ€μ prototypeμ μ§μ  μμ ν΄λμ€μ instanceλ₯Ό λΆμ¬νλ λμ  μλ¬΄λ° νλ‘νΌν°λ₯Ό μμ±νμ§ μλ λΉ μμ±μ ν¨μ(Bridge)λ₯Ό νλ λ λ§λ€μ΄μ λΉ μμ±μ ν¨μμ prototypeμ μμ ν΄λμ€μ prototypeλ₯Ό λΆμ¬νκ³ , νμ ν΄λμ€μ prototypeμλ Bridgeμ instanceλ₯Ό ν λΉνλ€.

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

- μ¦μμ€νν¨μμμ λΉ μμ±μ ν¨μ `Bridge`λ₯Ό λ§λ€κ³  ν΄λ‘μ λ₯Ό νμ©νμ¬ `Bridge`λ₯Ό κΈ°μ΅νλ ν¨μλ₯Ό λ¦¬ν΄ν¨μΌλ‘μ¨ λΆνμν λ©λͺ¨λ¦¬μ λΆνμν ν¨μ μ μΈμ μ€μλ€.

3. μΈλ²μ§Έ λ°©λ²: `Object.create()` μ΄μ©

- `Object.create()` ν¨μμ μΈμλ‘ μμ ν΄λμ€μ νλ‘ν νμ κ°μ²΄λ₯Ό μ λ¬νκ³ , λ°νλ κ°μ²΄λ₯Ό νμ ν΄λμ€μ νλ‘ν νμ κ°μ²΄κ° μ°Έμ‘°νλλ‘ νλ€.
- νμ ν΄λμ€μ prototype κ°μ²΄μ `__proto__` νλ‘νΌν°κ° μμ ν΄λμ€μ prototypeμ μ°Έμ‘°νλ€.

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

> π‘ subclassμ prototype λ΄λΆμ `__proto__` νλ‘νΌν°κ° superclassμ prototype κ°μ²΄λ₯Ό μ°Έμ‘°νκ³ , subclassμ prototypeμλ λΆνμν μΈμ€ν΄μ€ νλ‘νΌν°κ° λ¨μ μμ§ μλλ‘ μμμ κ΅¬ννλ©΄ λλ€.

<br/>

## constructor λ³΅κ΅¬νκΈ°

- subclassμ prototype κ°μ²΄μ constructor νλ‘νΌν°κ° subclassλ₯Ό λ°λΌλ³΄λλ‘ νλ©΄ λλ€.

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

## μμ ν΄λμ€ μ κ·Ό μλ¨ μ κ³΅

- νμ ν΄λμ€μ λ©μλμμ μμ ν΄λμ€μ λ©μλμ μ κ·Όνκ³  μΆμ λκ° μλ€.
- λ€λ₯Έ κ°μ²΄ μ§ν₯ μΈμ΄λ€μ ν΄λμ€ λ¬Έλ² μ€ νλμΈ `super` κ΅¬ννκΈ°
- μμ ν΄λμ€ μ κ·Ό μλ¨μΈ `super` λ©μλ μΆκ°

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
sq.getArea(); // size is : 100 (subclassμ λ©μλ μ€ν)
console.log(sq.super("getArea")()); // 100  (superclassμ λ©μλ μ€ν)
```

- superclassμ μμ±μ ν¨μμ μ κ·Όνκ³ μ ν  λλ `this.super()`, superclassμ λ©μλμ μ κ·Όνκ³ μ ν  λλ `this.super(propName)`μ κ°μ΄ μ¬μ©νλ©΄ λλ€.

<br/>

# ES6μ ν΄λμ€

## ES5μ ES6 ν΄λμ€ λ¬Έλ² λΉκ΅

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
  // μμ±μ
  constructor(name) {
    this.name = name;
  }

  // static method : μμ±μ ν¨μ(ν΄λμ€)λ§μ΄ νΈμΆν  μ μμ.
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

## β¨ ν΄λμ€ μμ±

- **ν΄λμ€ μ μΈ**κ³Ό **ν΄λμ€ ννμ** λκ°μ§ λ°©μμΌλ‘ ν΄λμ€λ₯Ό μμ±ν  μ μλ€.
- ν΄λμ€ μ μΈ λ° ν΄λμ€ ννμμ **νΈμ΄μ€νλμ§ μμΌλ―λ‘** ν΄λμ€μ μ κ·ΌνκΈ° μ μ ν΄λμ€λ₯Ό μ μΈνμ§ μμΌλ©΄ `reference error`κ° λ°μνλ€.

```javascript
// ν΄λμ€ μ μΈ
class Person {}

// ν΄λμ€ ννμ
const person = class Person {};
```

- μμ±μλ νλλ§ μ‘΄μ¬ν΄μΌ νλ€. ν΄λμ€μ μμ±μκ° λ κ° μ΄μ μ‘΄μ¬νλ©΄ `syntax error`κ° λ°μνλ€.

**μμ**

```javascript
class Person {
  // μμ±μ: ν΄λμ€μ νλλ₯Ό μ΄κΈ°ννλ νΉλ³ λ©μλ
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

## β¨ μ μ  λ©μλ

- ν΄λμ€λ₯Ό ν΅ν΄μλ§ μ κ·Όν  μ μμ. μΈμ€ν΄μ€μμ νΈμΆν  μ μλ λ©μλ
- λ©μλ μμ `static` ν€μλλ₯Ό λΆμ¬ μ μ  λ©μλ μμ±

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

## β¨ setκ³Ό get

- setterμ getter λ©μλλ₯Ό μ¬μ©νμ¬ ν΄λμ€ νλκ°μ μ€μ νκ±°λ κ°μ Έμ¬ μ μλ€.
- λ©μλ μμ `set`μ΄λ `get` ν€μλλ₯Ό λΆμ¬ setterλ getter λ©μλ μμ±

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

// setter νΈμΆ
alberto.nicknames = "Albi"; // Albi
// getter νΈμΆ
alberto.nicknames; // "Your nickname is Albi"
```

<br/>

## β¨ ν΄λμ€ μμνκΈ°

- `extends` ν€μλλ₯Ό μ΄μ©νμ¬ ν΄λμ€ μμμ κ΅¬νν  μ μλ€.

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

- Adult ν΄λμ€λ Person ν΄λμ€λ₯Ό μμλ°κΈ° λλ¬Έμ Adult ν΄λμ€μ μμ±μλ₯Ό νΈμΆν  λ, λ¨Όμ  Person ν΄λμ€μ μμ±μλ₯Ό νΈμΆν΄μΌ νλ€.
- λ°λΌμ μμλ°λ ν΄λμ€μ μμ±μ λ΄λΆμμ `super()`λ₯Ό νΈμΆνμ¬ μμ ν΄λμ€μ μμ±μλ₯Ό νΈμΆν  μ μλ€.

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

# μ λ¦¬

- **class**λ μ΄λ€ μ¬λ¬Όμ κ³΅ν΅ μμ±μ λͺ¨μ μ μν μΆμμ μΈ κ°λ (κ΅¬μ²΄μ μΈ instanceλ₯Ό μμ±νκΈ° μν΄ μμ±κ³Ό λ©μλλ₯Ό μ μνλ μΌμ’μ ν)μ΄κ³ , **instance**λ ν΄λμ€μ μμ±μ μ§λλ κ΅¬μ²΄μ μΈ μ¬λ‘μ΄λ€.
- ν΄λμ€ (μμ±μ ν¨μ)μ prototype λ΄λΆμ μ μλ λ©μλλ₯Ό **prototype method**λΌκ³  νκ³ , μ΄λ€μ instanceκ° λ§μΉ μμ μ κ²μ²λΌ νΈμΆν  μ μλ€.
- λ°λ©΄ ν΄λμ€ (μμ±μ ν¨μ)μ μ§μ  μ μν λ©μλλ₯Ό **static method**λΌκ³ , μ΄λ€μ μΈμ€ν΄μ€μμ νΈμΆν  μ μκ³ , ν΄λμ€(μμ±μ ν¨μ)λ₯Ό ν΅ν΄μλ§ νΈμΆν  μ μλ€.
- **ν΄λμ€ μμ**μ νλ΄λ΄κΈ° μν μΈ κ°μ§ λ°©λ²
  - subclassμ prototypeμ superclassμ instanceλ₯Ό λΆμ¬ν λ€μ, λ΄λΆ νλ‘νΌν°λ₯Ό λͺ¨λ μ­μ νλ λ°©λ²
  - λΉ μμ±μ ν¨μ (Bridge) νμ©
  - `Object.create()` μ΄μ©
  - μ μΈκ°μ§ λ°©λ² λͺ¨λ subclassμ prototype κ°μ²΄μ constructor νλ‘νΌν°κ° subclassλ₯Ό μ°Έμ‘°ν΄μΌ νλ€.
  - π‘ subclassμ prototype κ°μ²΄μ `__proto__` νλ‘νΌν°κ° superclassμ prototype νλ‘νΌν°λ₯Ό μ°Έμ‘°νλλ‘ νκ³ , subclassμ prototype κ°μ²΄μλ λΆνμν μΈμ€ν΄μ€ νλ‘νΌν°κ° μ‘΄μ¬νμ§ μμμΌ νλ€.
- ES6μμλ ν΄λμ€ λ¬Έλ²μ΄ λμλμ΄ μ λ³΄λ€ μ½κ² ν΄λμ€λ₯Ό μμ±νκ³  μμμ κ΅¬νν  μ μλ€.
