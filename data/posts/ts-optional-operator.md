---
emoji: π»
title: Optional Chaining / Property / Parameter
date: "2022-06-21"
category: Typescript
preview: "Optional Chaining Operator κ°μ²΄μ νλ‘νΌν°μ λ©μλμ μ κ·Όν  μ μλ μ°μ°μμ΄λ€. - λ§μ½ κ°μ²΄κ° undefined νΉμ nullμ΄λΌλ©΄, μλ¬λ₯Ό λ°μνλ λμ  undefinedλ₯Ό λ°ννλ€. - κ°μ²΄κ° undefined νΉμ nullμΌ μ μμ λ κ°μ²΄μ νλ‘νΌν°λ λ©μλμ μ κ·Όμ λ¨μνν  μ μλ€. (short-circuit) Optional Property - νμμ μ΄μ§ μμ νλ‘νΌν°λ ?λ₯Ό μ¬μ©νμ¬ μ΅μλ νλ‘νΌν°λ‘ μ§μ ν  μ μλ€. Optional Paramter - ν¨μ νΈμΆ μ νμμ μΌλ‘ λ°μμ€μ§ μμλ λλ νλΌλ―Έν°κ° μλ€λ©΄, ν¨μ κ΅¬νν  λ ?λ₯Ό μ¬μ©νμ¬ μ΅μλ νλΌλ―Έν°λ‘ μ§μ ν  μ μλ€. - λ§μ½ μ΅μλ νλΌλ―Έν°μ μΈμκ°μ μ λ¬νμ§ μμλ€λ©΄ undefined κ°μ΄ λ€μ΄μ¨λ€."
---

# Optional Chaining Operator

- κ°μ²΄μ νλ‘νΌν°μ λ©μλμ μ κ·Όν  μ μλ μ°μ°μμ΄λ€.
- λ§μ½ κ°μ²΄κ° `undefined` νΉμ `null`μ΄λΌλ©΄, μλ¬λ₯Ό λ°μνλ λμ  `undefined`λ₯Ό λ°ννλ€.
- κ°μ²΄κ° `undefined` νΉμ `null`μΌ μ μμ λ **κ°μ²΄μ νλ‘νΌν°λ λ©μλμ μ κ·Όμ λ¨μν**ν  μ μλ€. (`short-circuit`)

```ts
const adventurer = {
  name: "Alice",
  cat: {
    name: "Dinah"
  }
};

// const dogName = adventurer.dog && adventurer.dog.name;
const dogName = adventurer.dog?.name; // μ½λκ° κ°κ²°ν΄μ§.
console.log(dogName); // undefined
console.log(adventurer.someNonExistentMethod?.()); // undefined
```

<br/>

# Optional Property

- νμμ μ΄μ§ μμ νλ‘νΌν°λ `?`λ₯Ό μ¬μ©νμ¬ μ΅μλ νλ‘νΌν°λ‘ μ§μ ν  μ μλ€.

```ts
interface CompanyInfo {
  name: string;
  chairman?: string;
}

const obj1: CompanyInfo = {
  name: "FaceBook"
};

const obj2: CompanyInfo = {
  name: "Twitter",
  chairman: ""
};
```

<br/>

# Optional Paramter

- ν¨μ νΈμΆ μ νμμ μΌλ‘ λ°μμ€μ§ μμλ λλ νλΌλ―Έν°κ° μλ€λ©΄, ν¨μ κ΅¬νν  λ `?`λ₯Ό μ¬μ©νμ¬ μ΅μλ νλΌλ―Έν°λ‘ μ§μ ν  μ μλ€.
- λ§μ½ μ΅μλ νλΌλ―Έν°μ μΈμκ°μ μ λ¬νμ§ μμλ€λ©΄ `undefined` κ°μ΄ λ€μ΄μ¨λ€.

```ts
function makeUser(name: stirng, age?: number) {
  console.log(name);
  if (age === undefined) {
    console.log(age);
  }
}

makeUser("deemmun", 100); // deemmun 100
makeUser("deemmun"); // deemmun
```
