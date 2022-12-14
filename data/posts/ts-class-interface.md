---
emoji: π¨
title: ν΄λμ€μ μΈν°νμ΄μ€
date: "2022-06-20"
category: Typescript
preview: "Typescript Class ν΄λμ€ λ§΄λ² μμ±μ νννλ νλ κΈ°λ₯μ νννλ λ©μλ μμ±μ: νλλ₯Ό μ΄κΈ°ννμ¬ μΈμ€ν΄μ€λ₯Ό μμ±νλ νΉλ³ν λ©μλ μ½μ μ΄κΈ°ν: ν΄λμ€ νλλ€μ κ°κ²°ν μ½λλ‘ μ΄κΈ°νν  μ μλ€. μ κ·Ό μ νμ (Access Modifiers) ν΄λμ€ λ©€λ²λ€μ μ κ·Όμ μ μ΄ν  μ μλ μμ½μ΄μ΄λ€. public λ©€λ²: κΈ°λ³Έκ°μΌλ‘, μ΄λμμλ (ν΄λμ€ λ΄λΆ/μΈλΆ) ν΄λμ€ λ©€λ²μ μ κ·Όν  μ μλ€. protected λ©€λ²: ν΄λΉ ν΄λμ€ λ΄λΆμ μμλ°μ νμ ν΄λμ€ λ΄λΆμμλ§ μ κ·Όν  μ μλ€. private λ©€λ²: ν΄λΉ ν΄λμ€ λ΄λΆμμλ§ μ κ·Όν  μ μλ€. μ½κΈ° μ μ© μμ±"
---

## Typescript Class

### ν΄λμ€ λ§΄λ²

- μμ±μ νννλ νλ
- κΈ°λ₯μ νννλ λ©μλ
- μμ±μ: νλλ₯Ό μ΄κΈ°ννμ¬ μΈμ€ν΄μ€λ₯Ό μμ±νλ νΉλ³ν λ©μλ

```ts
class Department {
  // field
  name: string;

  // μμ±μ
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

> **μ½μ μ΄κΈ°ν**: ν΄λμ€ νλλ€μ κ°κ²°ν μ½λλ‘ μ΄κΈ°νν  μ μλ€.
>
> ```ts
> class Department {
>   constructor(public name: string) {
>     //this.name = name;
>   }
> }
> ```

### μ κ·Ό μ νμ (Access Modifiers)

- ν΄λμ€ λ©€λ²λ€μ μ κ·Όμ μ μ΄ν  μ μλ μμ½μ΄μ΄λ€.
- `public` λ©€λ²: κΈ°λ³Έκ°μΌλ‘, μ΄λμμλ (ν΄λμ€ λ΄λΆ/μΈλΆ) ν΄λμ€ λ©€λ²μ μ κ·Όν  μ μλ€.
- `protected` λ©€λ²: ν΄λΉ ν΄λμ€ λ΄λΆμ μμλ°μ νμ ν΄λμ€ λ΄λΆμμλ§ μ κ·Όν  μ μλ€.
- `private` λ©€λ²: ν΄λΉ ν΄λμ€ λ΄λΆμμλ§ μ κ·Όν  μ μλ€.

```ts
class Department {
  // field
  name: string;
  private employees: string[] = [];

  // μμ±μ
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
accounting.employees[2] = "Anna"; // ERROR (employeesλ private λ©€λ²μ΄κΈ° λλ¬Έμ ν΄λΉ ν΄λμ€ λ΄λΆμμλ§ μ κ·Όν  μ μλ€.)
console.log(accounting.name); // Accounting (nameμ public λ©€λ²μ΄κΈ° λλ¬Έμ ν΄λμ€ μΈλΆμμλ μ κ·Όν  μ μλ€.)
accounting.printEmployeeInfo(); // 2 ["Max", "Manu"]
```

### μ½κΈ° μ μ© νλ

- `readonly` ν€μλλ₯Ό μ΄μ©ν΄ μΈμ€ν΄μ€κ° μ²μ μμ±λλ μμ μλ§ νλκ°μ΄ μμ κ°λ₯νλλ‘ μ€μ ν  μ μλ€.
- μΈμ€ν΄μ€κ° μμ±λ μ΄ν μμ λμ΄μλ μλλ νλ λ³μ μμ `readonly` ν€μλλ₯Ό λΆμΈλ€.

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

### μμ

- `extends` ν€μλλ₯Ό μ΄μ©ν΄ ν΄λμ€ μμμ κ΅¬νν  μ μλ€.
- μμ ν΄λμ€μ λͺ¨λ  νλμ λ©μλλ₯Ό νμ ν΄λμ€κ° μμλ°λλ€.
- νμ ν΄λμ€μ μμ±μ λ΄λΆμμ `super()`λ₯Ό νΈμΆνμ¬ μμ ν΄λμ€λ₯Ό μμ±ν΄μΌ νλ€.
- μ€λ³΅ νλ λ° λ©μλλ₯Ό μ΅μνν  μ μλ€.

```ts
// Deparment ν΄λμ€μ νλμ λ©μλλ₯Ό μμλ°λλ€.
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

- μ΄λ `Department` ν΄λμ€μ `employees` νλμ `id` νλλ `private` λ©€λ²μ΄κΈ° λλ¬Έμ ν΄λΉ ν΄λμ€ λ΄μμλ§ μ κ·Όμ΄ κ°λ₯νκ³ , μμλ°μ νμ ν΄λμ€ λ΄μμλ μ κ·Όν  μ μλ€.
- `private` λμ  `protected` μ κ·Ό μμ μλ₯Ό μ¬μ©νλ©΄ μμλ°μ νμ ν΄λμ€ λ΄μμλ λ©€λ²μ μ κ·Όν  μ μλ€.

```ts
class Department {
  protected employees: string[] = []; // private -> protected

  // μμ±μ
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

### getterμ setter

- `getter`μ `setter` λ©μλλ₯Ό μ¬μ©νμ¬ ν΄λμ€ νλ κ°μ μ€μ νκ±°λ κ°μ Έμ¬ μ μλ€.

```ts
class AccountingDepartment extends Department {
  private lastReport: string;

  // getter: λ©μλ μμ get ν€μλλ₯Ό λΆμΈλ€.
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  // setter: λ©μλ μμ set ν€μλλ₯Ό λΆμΈλ€.
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
// setterμ getterλ κ΄νΈ μμ΄ νΈμΆνλ€.
accounting.mostRecentReport = "John"; // setter νΈμΆ
console.log(accounting.mostRecentReport); // getter νΈμΆ
```

### μ μ  νλμ λ©μλ

- μΈμ€ν΄μ€μμ μ κ·Όν  μ μλ νλμ λ©μλ
- `static` ν€μλλ₯Ό μ΄μ©νλ€.
- ν΄λμ€λ₯Ό ν΅ν΄μλ§ μ κ·Όν  μ μλ€.

```ts
class Department {
  static fiscalYear = 2020; // μ μ  νλ
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    console.log(this.fiscalYear); // ERROR (μΈμ€ν΄μ€μμ μ μ  λ©€λ²μ μ κ·Όν  μ μλ€.)
    console.log(Department.fiscalYear); // ν΄λμ€λ₯Ό ν΅ν΄μλ§ μ μ  λ©€λ²μ μ κ·Όν  μ μλ€.
  }

  // μ μ  λ©μλ
  static createEmployee(name: string) {
    return { name };
  }

  // ...
}

const employee1 = Department.createEmployee("Max");
console.log(employee1, Department.fiscalYear); // { name: "Max" } 2020
```

### μΆμ ν΄λμ€

- νλ μ΄μμ μΆμ λ©μλλ₯Ό ν¬ν¨νλ ν΄λμ€λ₯Ό λ§νλ€.
- μΆμ λ©μλλ μ μΈλΆλ μμ§λ§ κ΅¬νλΆλ μλ λ©μλλ₯Ό λ§νλ€.
- `abstract` ν€μλλ₯Ό μ΄μ©ν΄ μΆμ ν΄λμ€μ λ©μλλ₯Ό λ§λ λ€.
- μΆμ ν΄λμ€λ₯Ό μμλ°μ μΆμ λ©μλμ κ΅¬νλΆλ₯Ό μμ±ν  μ μλ€.
- μΆμν΄λμ€λ μΈμ€ν΄μ€νν  μ μκ³ , μμ ν΄λμ€λ‘μμ μ­ν μ ν  μ μλ€.

```ts
abstract class μΆμν΄λμ€ {
  // ...
  abstract λ°ννμ λ©μλμ΄λ¦();
  // ...
}
```

```ts
abstract class Department {
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {}

  abstract describe(): void; // μΆμ λ©μλ μ μΈλΆ

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

// μΆμ ν΄λμ€λ₯Ό μμλ°λ νμ ν΄λμ€λ μΆμ ν΄λμ€κ° μλλΌλ©΄ μΆμ λ©μλμ κ΅¬νλΆλ₯Ό λ°λμ μμ±ν΄μΌ νλ€.
class ITDepartment extends Department {
  constructor(id: string, private admins: string[]) {
    super(id, "IT");
  }

  describe() {
    console.log("IT Department - ID: " + this.id);
  }
}
```

### μ±κΈν€ ν¨ν΄

- μ±κΈν€ ν¨ν΄μ νΉμ  ν΄λμ€μ μΈμ€ν΄μ€λ₯Ό μ νν νλλ§ κ°λλ‘ νλ ν¨ν΄μ λ§νλ€.
- μ±κΈν€ ν¨ν΄μ `private` μμ±μλ₯Ό μ΄μ©ν΄ κ΅¬ννλ€.

```ts
// Departmentκ° μΆμ ν΄λμ€ μλ.
class AccountingDepartment extends Department {
  private static instance: AccountingDepartment; // μΈμ€ν΄μ€λ₯Ό μ μ₯νλ private μ μ  νλ

  // private μμ±μ
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

console.log(accounting, accounting2); // κ°μ μΈμ€ν΄μ€
```

<br/>

## Typescript Interface

- μνΈ κ°μ μ μν μ½μ νΉμ κ·μΉμ λ§νλ€.

```ts
// 1. κ°μ²΄ νμ μ μ
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
// extends ν€μλλ₯Ό μ¬μ©νμ¬ μΈν°νμ΄μ€ νμ₯μ΄ κ°λ₯νλ€.
// λ μ΄μμ μΈν°νμ΄μ€ νμ₯ κ°λ₯
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
// 2. ν¨μνμ μ§μ 
interface SumFunction {
  (a: number, b: number): number;
}
const sum: SumFunction = (a: number, b: number): number => {
  return a + b;
};
```

### Interfaceμ ν¨κ» ν΄λμ€ κ΅¬ννκΈ°

- `implements` ν€μλλ₯Ό μ΄μ©νμ¬ μΈν°νμ΄μ€λ₯Ό ν΄λμ€λ‘ κ΅¬νν  μ μλ€.
- μΈν°νμ΄μ€λ₯Ό μ μν μμ±λ€μ ν΄λμ€μ νλμ λ©μλλ‘ κ΅¬νν΄μΌ νλ€.
- μΈν°νμ΄μ€μμ μ μν μμ±λ€ μ΄μΈμ νλλ λ©μλλ₯Ό μΆκ°ν  μ μλ€.
- μ¬λ¬ κ°μ μΈν°νμ΄μ€ κ΅¬νμ΄ κ°λ₯νλ€.

```ts
class ν΄λμ€μ΄λ¦ implements μΈν°νμ΄μ€1, μΈν°νμ΄μ€2, .. {}
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

### μ½κΈ° μ μ© μΈν°νμ΄μ€ μμ±

- `readonly` ν€μλλ₯Ό μ¬μ©νμ¬ κ°μ μ½κΈ° μ μ©μΌλ‘ μ€μ ν  μ μλ€.
- κ°μ΄ λ³κ²½λλ κ²μ λ°©μ§νκΈ° μν΄ μ£Όλ‘ μ¬μ©λλ€.

```ts
interface Greetable {
  readonly name: string; // μ½κΈ° μ μ© μμ±
  greet(phrase: string): void;
}

class Person implements Greetable {
  constructor(public name: string, public age: number) {}
  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
}

const user = new Person("Max", 30);
user.name = "Manu"; // ERROR (nameμ μ½κΈ° μ μ© μμ±μ΄κΈ° λλ¬Έμ κ° λ³κ²½μ΄ λΆκ°λ₯νλ€.)
```
