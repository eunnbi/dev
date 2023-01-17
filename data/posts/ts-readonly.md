---
emoji: 📚
title: readonly
date: "2022-07-11"
category: Typescript
preview: "값을 읽기 전용으로 설정해주는 Typescript의 타입시스템 기능이다. - 함수의 매개변수가 변경되는 것을 방지하기 위해 사용된다. - 함수에 참조형 데이터를 인수로 전달하면 주소값이 전달되기 때문에 함수 내부에서 프로퍼티 값을 마음대로 변경할 수 있다. - 이러한 경우, 함수 내부에서 원본 데이터를 변경하지 않기 위해서 매개변수 타입에 readonly를 사용한다. readonly number[] - 배열의 요소를 읽을 수 있지만, 쓸 수는 없다. - length를 읽을 수 있지만, 바꿀 수는 없다. - 배열을 변경하는 메서드를 호출할 수 없다. (push, pop 등 X)"
---

값을 **읽기 전용**으로 설정해주는 Typescript의 타입시스템 기능이다.

- 값이 변경되는 것을 방지하기 위해 주로 사용된다. (함수의 매개 변수 등)
- 함수에 참조형 데이터를 인수로 전달하면 주소값이 전달되기 때문에 함수 내부에서 프로퍼티 값을 마음대로 변경할 수 있다.
- 이러한 경우, 함수 내부에서 원본 데이터를 변경하지 않기 위해서 매개변수 타입에 `readonly`를 사용한다.

> 👉 참고: [pass by value vs pass by reference](https://www.eunnbi.dev/posts/js-data-type#%F0%9F%92%A1-pass-by-value-&-pass-by-reference)

> **Example**
>
> `readonly number[]`
>
> - 배열의 요소를 읽을 수 있지만, 쓸 수는 없다.
> - `length`를 읽을 수 있지만, 바꿀 수는 없다.
> - 배열을 변경하는 메서드를 호출할 수 없다. (`push`, `pop` 등 X)

- `readonly`는 **얕게(`shallow`) 동작**한다는 것에 유의해야 한다.

```typescript
const dates: readonly Date[] = [new Date()];
dates.push(new Date()); // ERROR: 'readonly Date[]' 형식에 'push' 속성이 없습니다.
dates[0].setFullYear(2037); // 정상: dates[0]은 Date 객체를 반환하고 이 객체는 readonly가 아니다.
// dates에만 readonly가 적용됨.
```

```typescript
interface Outer {
  inner: {
    x: number;
  };
}

const o: Readonly<Outer> = { inner: { x: 0 } }; // Readonly 제너릭 사용
o.inner = { x: 1 }; // ERROR: 읽기 전용 속성이기 때문에 'inner'에 할당할 수 없다.
o.inner.x = 1; // 정상: readonly는 inner에 적용된 것이지, x에 적용되지 않는다.
```
