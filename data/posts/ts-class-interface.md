---
emoji: 🎨
title: 클래스와 인터페이스
date: "2022-06-20"
category: Typescript
preview: "Typescript Class 클래스 맴버 속성을 표현하는 필드 기능을 표현하는 메서드 생성자: 필드를 초기화하여 인스턴스를 생성하는 특별한 메서드 약식 초기화: 클래스 필드들을 간결한 코드로 초기화할 수 있다. 접근 제한자 (Access Modifiers) 클래스 멤버들에 접근을 제어할 수 있는 예약어이다. public 멤버: 기본값으로, 어디에서나 (클래스 내부/외부) 클래스 멤버에 접근할 수 있다. protected 멤버: 해당 클래스 내부와 상속받은 하위 클래스 내부에서만 접근할 수 있다. private 멤버: 해당 클래스 내부에서만 접근할 수 있다. 읽기 전용 속성"
---

## Typescript Class

### 클래스 맴버

- 속성을 표현하는 필드
- 기능을 표현하는 메소드
- 생성자: 필드를 초기화하여 인스턴스를 생성하는 특별한 메소드

```ts
class Department {
  // field
  name: string;

  // 생성자
  constructor(n: string) {
    this.name = n;
  }

  // method
  describe() {
    console.log("Department: " + this.name);
  }
}

const accounting = new Department("Accounting");
accounting.describe(); // Department: Accounting
```

> **약식 초기화**: 클래스 필드들을 간결한 코드로 초기화할 수 있다.
>
> ```ts
> class Department {
>   constructor(public name: string) {
>     //this.name = name;
>   }
> }
> ```

### 접근 제한자 (Access Modifiers)

- 클래스 멤버들에 접근을 제어할 수 있는 예약어이다.
- `public` 멤버: 기본값으로, 어디에서나 (클래스 내부/외부) 클래스 멤버에 접근할 수 있다.
- `protected` 멤버: 해당 클래스 내부와 상속받은 하위 클래스 내부에서만 접근할 수 있다.
- `private` 멤버: 해당 클래스 내부에서만 접근할 수 있다.

```ts
class Department {
  // field
  name: string;
  private employees: string[] = [];

  // 생성자
  constructor(n: string) {
    this.name = n;
  }

  // methods
  describe() {
    console.log("Department: " + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("Accounting");
accounting.describe(); // Department: Accounting
accounting.addEmployee("Max");
accounting.addEmployee("Manu");
accounting.employees[2] = "Anna"; // ERROR (employees는 private 멤버이기 때문에 해당 클래스 내부에서만 접근할 수 있다.)
console.log(accounting.name); // Accounting (name은 public 멤버이기 때문에 클래스 외부에서도 접근할 수 있다.)
accounting.printEmployeeInfo(); // 2 ["Max", "Manu"]
```

### 읽기 전용 필드

- `readonly` 키워드를 이용해 인스턴스가 처음 생성되는 시점에만 필드값이 수정가능하도록 설정할 수 있다.
- 인스턴스가 생성된 이후 수정되어서는 안되는 필드 변수 앞에 `readonly` 키워드를 붙인다.

```ts
class Department {
  // field
  private readonly id: string;
  public name: string;
  private employees: string[] = [];

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
```

### 상속

- `extends` 키워드를 이용해 클래스 상속을 구현할 수 있다.
- 상위 클래스의 모든 필드와 메서드를 하위 클래스가 상속받는다.
- 하위 클래스의 생성자 내부에서 `super()`를 호출하여 상위 클래스를 생성해야 한다.
- 중복 필드 및 메서드를 최소화할 수 있다.

```ts
// Deparment 클래스의 필드와 메서드를 상속받는다.
class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    console.log(this.id, this.employees); // ERROR
  }
  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}
```

- 이때 `Department` 클래스의 `employees` 필드와 `id` 필드는 `private` 멤버이기 때문에 해당 클래스 내에서만 접근이 가능하고, 상속받은 하위 클래스 내에서는 접근할 수 없다.
- `private` 대신 `protected` 접근 수정자를 사용하면 상속받은 하위 클래스 내에서도 멤버에 접근할 수 있다.

```ts
class Department {
  protected employees: string[] = []; // private -> protected

  // 생성자
  constructor(
    protected id: string, // private -> protected
    public name: string
  ) {}

  // methods
  // ...
}
class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    console.log(this.id); // OK
  }
  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}
```

### getter와 setter

- `getter`와 `setter` 메서드를 사용하여 클래스 필드 값을 설정하거나 가져올 수 있다.

```ts
class AccountingDepartment extends Department {
  private lastReport: string;

  // getter: 메서드 앞에 get 키워드를 붙인다.
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  // setter: 메서드 앞에 set 키워드를 붙인다.
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports.length === 0 ? "" : reports[reports.length - 1];
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const accounting = new AccountingDepartment("d2", ["Max"]);
// setter와 getter는 괄호 없이 호출한다.
accounting.mostRecentReport = "John"; // setter 호출
console.log(accounting.mostRecentReport); // getter 호출
```

### 정적 필드와 메서드

- 인스턴스에서 접근할 수 없는 필드와 메서드
- `static` 키워드를 이용한다.
- 클래스를 통해서만 접근할 수 있다.

```ts
class Department {
  static fiscalYear = 2020; // 정적 필드
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    console.log(this.fiscalYear); // ERROR (인스턴스에서 정적 멤버에 접근할 수 없다.)
    console.log(Department.fiscalYear); // 클래스를 통해서만 정적 멤버에 접근할 수 있다.
  }

  // 정적 메서드
  static createEmployee(name: string) {
    return { name };
  }

  // ...
}

const employee1 = Department.createEmployee("Max");
console.log(employee1, Department.fiscalYear); // { name: "Max" } 2020
```

### 추상 클래스

- 하나 이상의 추상 메서드를 포함하는 클래스를 말한다.
- 추상 메서드는 선언부는 있지만 구현부는 없는 메서드를 말한다.
- `abstract` 키워드를 이용해 추상 클래스와 메서드를 만든다.
- 추상 클래스를 상속받아 추상 메서드의 구현부를 작성할 수 있다.
- 추상클래스는 인스턴스화할 수 없고, 상위 클래스로서의 역할을 할 수 있다.

```ts
abstract class 추상클래스 {
  // ...
  abstract 반환타입 메서드이름();
  // ...
}
```

```ts
abstract class Department {
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {}

  abstract describe(): void; // 추상 메서드 선언부

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

// 추상 클래스를 상속받는 하위 클래스는 추상 클래스가 아니라면 추상 메서드의 구현부를 반드시 작성해야 한다.
class ITDepartment extends Department {
  constructor(id: string, private admins: string[]) {
    super(id, "IT");
  }

  describe() {
    console.log("IT Department - ID: " + this.id);
  }
}
```

### 싱글톤 패턴

- 싱글톤 패턴은 특정 클래스의 인스턴스를 정확히 하나만 갖도록 하는 패턴을 말한다.
- 싱글톤 패턴은 `private` 생성자를 이용해 구현한다.

```ts
// Department가 추상 클래스 아님.
class AccountingDepartment extends Department {
  private static instance: AccountingDepartment; // 인스턴스를 저장하는 private 정적 필드

  // private 생성자
  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  static getInstance() {
    if (!AccountingDepartment.instance) {
      AccountingDepartment.instance = new AccountingDepartment("d2", []);
    }
    return AccountingDepartment.instance;
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

console.log(accounting, accounting2); // 같은 인스턴스
```

<br/>

## Typescript Interface

- 상호 간에 정의한 약속 혹은 규칙을 말한다.

```ts
// 1. 객체 타입 정의
interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
}

const user: Person = {
  name: "Max",
  age: 30,
  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
};
```

```ts
// extends 키워드를 사용하여 인터페이스 확장이 가능하다.
// 둘 이상의 인터페이스 확장 가능
interface Developer extends Person {
  language: string;
}

/*
interface Developer {
	age: number;
	name: string;
	language: string;
}
*/
```

```ts
// 2. 함수타입 지정
interface SumFunction {
  (a: number, b: number): number;
}
const sum: SumFunction = (a: number, b: number): number => {
  return a + b;
};
```

### Interface와 함께 클래스 구현하기

- `implements` 키워드를 이용하여 인터페이스를 클래스로 구현할 수 있다.
- 인터페이스를 정의한 속성들을 클래스의 필드와 메서드로 구현해야 한다.
- 인터페이스에서 정의한 속성들 이외의 필드나 메서드를 추가할 수 있다.
- 여러 개의 인터페이스 구현이 가능하다.

```ts
class 클래스이름 implements 인터페이스1, 인터페이스2, .. {}
```

```ts
interface Greetable {
  name: string;
  greet(phrase: string): void;
}

class Person implements Greetable {
  constructor(public name: string, public age: number) {}
  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
}

const user = new Person("Max", 30);
user.greet("Hi there - I am"); // Hi there - I am Max
```

### 읽기 전용 인터페이스 속성

- `readonly` 키워드를 사용하여 값을 읽기 전용으로 설정할 수 있다.
- 값이 변경되는 것을 방지하기 위해 주로 사용된다.

```ts
interface Greetable {
  readonly name: string; // 읽기 전용 속성
  greet(phrase: string): void;
}

class Person implements Greetable {
  constructor(public name: string, public age: number) {}
  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
}

const user = new Person("Max", 30);
user.name = "Manu"; // ERROR (name은 읽기 전용 속성이기 때문에 값 변경이 불가능하다.)
```
