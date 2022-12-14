---
emoji: π¦
title: λ°μ½λ μ΄ν°
date: "2022-12-28"
category: Typescript
preview: "ν΄λμ€, μμ±, λ©μλ, μ κ·Όμ μ΄μ, λ§€κ°λ³μ λ±μ μ¬μ©ν  μ μλ νΉλ³ν ν¨μμ΄λ€. λ°μ½λ μ΄ν° ν¨μλ₯Ό μ¬μ©ν  λλ λ°μ½λ μ΄ν° ν¨μ μ΄λ¦ μμ @λ₯Ό λΆμΈλ€. ν΄λμ€, μμ±, λ©μλ, μ κ·Όμ μ΄μ, λ§€κ°λ³μμ λ°λΌ λ°μ½λ μ΄ν° ν¨μκ° μ λ¬λ°λ μΈμκ° λ€λ₯΄λ€. λ°μ½λ μ΄ν°λ₯Ό μ¬μ©νκΈ° μν΄ tsconfig.json νμΌμ compilerOptionsμμ targetμ es6μΌλ‘ μ€μ νκ³ , experimentalDecoratorsμ trueλ‘ μ€μ νλ€. ν΄λμ€ λ°μ½λ μ΄ν° ν΄λμ€ μ μΈμ κ΄μ°°νκ±°λ μμ± λ° λ©μλλ₯Ό μΆκ° λ° μμ ν  λ μ¬μ©ν  μ μλ€. ν΄λμ€κ° μ μΌν μΈμλ‘ μ λ¬λλ€. ν΄λμ€ μ¬μ μ ν΄λμ€ λ°μ½λ μ΄ν° ν¨μμμ μλ‘μ΄ ν΄λμ€λ₯Ό λ°ννμ¬ μμ± λ° λ©μλλ₯Ό μΆκ° λ° μμ ν  μ μλ€. ν΄λμ€ λ°μ½λ μ΄ν° ν¨μμμ μ¬μ μν μμ± λ° λ©μλκ° μλ ν΄λμ€μ μμ± λ° λ©μλλ³΄λ€ μ°μ λλ€."
---

## λ°μ½λ μ΄ν°λ?

- ν΄λμ€, μμ±, λ©μλ, μ κ·Όμ μ΄μ, λ§€κ°λ³μ λ±μ μ¬μ©ν  μ μλ νΉλ³ν ν¨μμ΄λ€.
- λ°μ½λ μ΄ν° ν¨μλ₯Ό μ¬μ©ν  λλ λ°μ½λ μ΄ν° ν¨μ μ΄λ¦ μμ `@`λ₯Ό λΆμΈλ€.
- ν΄λμ€, μμ±, λ©μλ, μ κ·Όμ μ΄μ, λ§€κ°λ³μμ λ°λΌ λ°μ½λ μ΄ν° ν¨μκ° μ λ¬λ°λ μΈμκ° λ€λ₯΄λ€.
- λ°μ½λ μ΄ν°λ₯Ό μ¬μ©νκΈ° μν΄ `tsconfig.json` νμΌμ `compilerOptions`μμ `target`μ `es6`μΌλ‘ μ€μ νκ³ , `experimentalDecorators`μ `true`λ‘ μ€μ νλ€.

<br/>

## ν΄λμ€ λ°μ½λ μ΄ν°

- ν΄λμ€ μ μΈμ κ΄μ°°νκ±°λ μμ± λ° λ©μλλ₯Ό μΆκ° λ° μμ ν  λ μ¬μ©ν  μ μλ€.
- ν΄λμ€κ° μ μΌν μΈμλ‘ μ λ¬λλ€.

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
console.log((person as any).type); // component (νμ λ¨μΈ νμν¨!)
console.log((person as any).version); // 0.0.1
```

### ν΄λμ€ μ¬μ μ

- ν΄λμ€ λ°μ½λ μ΄ν° ν¨μμμ μλ‘μ΄ ν΄λμ€λ₯Ό λ°ννμ¬ μμ± λ° λ©μλλ₯Ό μΆκ° λ° μμ ν  μ μλ€.
- ν΄λμ€ λ°μ½λ μ΄ν° ν¨μμμ μ¬μ μν μμ± λ° λ©μλκ° μλ ν΄λμ€μ μμ± λ° λ©μλλ³΄λ€ μ°μ λλ€.

```ts
function Component<T extends { new (...args: any[]): {} }>(target: T) {
  // μ¬μ μ
  return class extends target {
    // μμ±
    type: string = "component";
    version: string = "0.1.0";

    constructor(...args: any[]) {
      super(...args);
    }
    // λ©μλ
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

## λ°μ½λ μ΄ν° ν©ν λ¦¬

- λ°μ½λ μ΄ν° ν¨μλ₯Ό κ°μΈλ λνΌ ν¨μ, λ°μ½λ μ΄ν° ν¨μλ₯Ό λ°ννλ ν¨μ
- μ¬μ©μλ‘λΆν° μΈμλ₯Ό μ λ¬λ°μ μ μλ€.

```ts
// λ°μ½λ μ΄ν° ν©ν λ¦¬
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

## λ©ν° λ°μ½λ μ΄ν°

- νλμ λμμ λν΄ μ¬λ¬ λ°μ½λ μ΄ν° ν¨μλ₯Ό μ¬μ©νλ κ²μ λ§νλ€.
- λ°μ½λ μ΄ν°λ λ€μ μμλ‘ μ²λ¦¬λλ€.
  - κ° λ°μ½λ μ΄ν° ννμμ μμμ μλ λ°©ν₯μΌλ‘ νκ°λλ€.
  - μλμμ μλ‘ λ°μ½λ μ΄ν° ν¨μλ₯Ό νΈμΆνλ€.

> **λ°μ½λ μ΄ν°λ ν΄λμ€λ₯Ό μ μΈ λ° μ μν  λ μ€νλλ€.**

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

## λ©μλ λ°μ½λ μ΄ν°

- λ©μλ μ μΈ μμ μ¬μ©λκ³ , λ©μλ μ μΈμ νμΈ, μμ , κ΅μ²΄νλλ° μ¬μ©λλ€.
- μ΄ 3κ°μ μΈμλ₯Ό μ λ¬λ°λλ€.
  - `target`: ν΄λμ€(μμ±μ ν¨μ)μ νλ‘ν νμ κ°μ²΄
  - `name`: λ©μλ μ΄λ¦
  - `descriptor`: λ©μλμ λν μΈλΆ μ λ³΄ (configurable, writable λ±)

```ts
function Write(able: boolean = true) {
  return function (target: any, name: string, desc: PropertyDescriptor) {
    desc.writable = able;
  };
}

class Product {
  constructor(public title: string, private price: number) {}

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

## μ κ·Ό μ μ΄μ λ°μ½λ μ΄ν°

- μ κ·Ό μ μ΄μ μ μΈ μμ μ¬μ©λκ³ , μ κ·Ό μ μ΄μμ λν μ μΈ νμΈ, μμ , κ΅μ²΄νλλ° μ¬μ©λλ€.
- μ΄ 3κ°μ μΈμλ₯Ό μ λ¬λ°λλ€.
  - `target`: ν΄λμ€(μμ±μ ν¨μ)μ νλ‘ν νμ κ°μ²΄
  - `name`: μ κ·Ό μ μ΄μ μ΄λ¦
  - `descriptor`: μ κ·Ό μ μ΄μμ λν μΈλΆ μ λ³΄ (configurable, enumerable, get, set)

```ts
function Configurable(remove: boolean) {
  return function (target: any, name: string, desc: PropertyDescriptor) {
    desc.configurable = remove;
  };
}

class Rectangle {
  public color?: string = "#000";

  constructor(private _width: number, private _height: number) {}

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

## μμ± λ°μ½λ μ΄ν°

- μμ± μ μΈ μμ μ¬μ©λκ³ , μμ± μ μΈ νμΈ, μμ , κ΅μ²΄νλλ° μ¬μ©λλ€.
- μ΄ 2κ°μ μΈμλ₯Ό μ λ¬λ°λλ€.
  - `target`: ν΄λμ€(μμ±μ ν¨μ)μ νλ‘ν νμ κ°μ²΄
  - `name`: μμ± μ΄λ¦

```ts
// μμ±μ μ½κ±°λ μΈ λ λ‘κ·Έλ₯Ό λ¨κΈ°λ λ°μ½λ μ΄ν°
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
btn.type = "λ²νΌ"; // SET: type => λ²νΌ
```

> μ°Έκ³ : [Object.defineProperty()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)

<br/>

## λ§€κ°λ³μ λ°μ½λ μ΄ν°

- ν΄λμ€μ μμ±μ ν¨μ νΉμ λ©μλμ λ©κ°λ³μμ μ£Όλ‘ μ¬μ©λλ€.
- μ΄ 3κ°μ μΈμλ₯Ό μ λ¬λ°λλ€.
  - `target`: μμ±μ ν¨μμ λ§€κ°λ³μμ μ¬μ©νλ€λ©΄ ν΄λμ€κ° μ λ¬λκ³ , λ©μλμ λ§€κ°λ³μμ μ¬μ©νλ€λ©΄ ν΄λμ€μ νλ‘ν νμ κ°μ²΄κ° μ λ¬λλ€.
  - `name`: λ©μλ μ΄λ¦ (λ§μ½ μμ±μ ν¨μμ λ§€κ°λ³μλΌλ©΄ `undefined`κ° μ λ¬λλ€)
  - `index`: λ§€κ°λ³μ μμ (0λΆν° μμ)

```ts
function Log(target: any, name: string, index: number) {
  console.log(
    target.name === undefined ? target.constructor.name : target.name
  );
  console.log(`
    λ§€κ°λ³μ μμ: ${index}, 
    λ©€λ² μ΄λ¦: ${name === undefined ? "constructor" : name}
  `);
}

class Product {
  constructor(@Log public title: string, @Log private price: number) {}

  getPriceWithTax(@Log tax: number) {
    return this.price * (1 + tax);
  }
}
```

```
Product
λ§€κ°λ³μ μμ: 0,
λ©€λ² μ΄λ¦: getPriceWithTax

Product
λ§€κ°λ³μ μμ: 1,
λ©€λ² μ΄λ¦: constructor

Product
λ§€κ°λ³μ μμ: 0,
λ©€λ² μ΄λ¦: constructor

λ§€κ°λ³μκ° μ­μμΌλ‘ μΆλ ₯λ¨.
```

<br/>

## autobind λ°μ½λ μ΄ν° λ§λ€κΈ°

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

- μ μμμ κ²°κ³Όλ‘ λ²νΌμ ν΄λ¦­νμ λ `undefined`κ° μΆλ ₯λλ€.
- κ·Έ μ΄μ λ μ½λ°±ν¨μλ₯Ό μ€νν  λ `addEventListener` λ©μλμ μΈμλ‘ μ λ¬λ μ½λ°±ν¨μ λ΄λΆμ `this`λ μ΄λ°΄νΈ λμμΌλ‘ λ°μΈλ©λλ€.
- showMessage λ©μλλ₯Ό μ½λ°±ν¨μλ‘ μ λ¬νκΈ° λλ¬Έμ λ©μλ λ΄λΆμ `this`λ μΈμ€ν΄μ€κ° μλ buttonμ μ°Έμ‘°νλ€.

**ν΄κ²°**

1. `bind` λ©μλ μ΄μ©

```ts
button?.addEventListener("click", p.showMessage.bind(p));
```

2. ν΄λμ€λ₯Ό μ μν  λ λ©μλ λ΄λΆμ `this`κ° μΈμ€ν΄μ€λ₯Ό μ°Έμ‘°νλλ‘ λͺμνκΈ°

- μ΄ λ°©λ²μ λ©μλ λ°μ½λ μ΄ν°λ₯Ό μ΄μ©νμ¬ κ΅¬νν  μ μλ€.

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

- λ°μ½λ μ΄ν° ν¨μμμ λ°νλ κ°μ λ©μλμ μλ‘μ΄ property descriptorμΌλ‘ μ¬μ©λλ€.
- μ΄μ  λ©μλλ₯Ό νΈμΆν  λλ§λ€ `get`μ΄ μ€νλκ³  bind λ©μλλ₯Ό μ΄μ©ν΄ λͺμμ μΌλ‘ μΈμ€ν΄μ€λ₯Ό `this`λ‘ λ°μΈλ©ν μλ‘μ΄ λ©μλλ₯Ό λ°ννλ€.

<br/>

> μ°Έκ³ : [typestack/class-validator](https://github.com/typestack/class-validator)
