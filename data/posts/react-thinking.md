---
emoji: 💡
title: React로 사고하기
date: "2022-01-14"
category: React
preview: "💡 React는 지속적으로 데이터가 변화하는 대규모 애플리게이션을 만들기 위한 좋은 방법이다. 💜 예시: 상품들을 검색할 수 있는 데이터 테이블 만드는 과정. UI를 컴포넌트 계층 구조로 나누기. 단일 책임 원칙에 따라 컴포넌트를 만든다. 하나의 컴포넌트는 한 가지 일만 하는 것이 이상적이다. 하나의 컴포넌트가 커지게 된다면 이는 작은 하위 컴포넌트로 분리되어야 한다. 각 컴포넌트가 하나의 데이터 모델을 나타내도록 분리해야 한다."
---

> 💡 React는 지속적으로 데이터가 변화하는 대규모 애플리게이션을 만들기 위한 좋은 방법이다.

**💜 예시: 상품들을 검색할 수 있는 데이터 테이블 만드는 과정**

![Product Data Table UI Example](1.png)
![Product Data (category, price, stocked, name)](2.png)

# UI를 컴포넌트 계층 구조로 나누기

- **단일 책임 원칙**에 따라 컴포넌트를 만든다.
  - 하나의 컴포넌트는 한 가지 일만 하는 것이 이상적이다.
  - 하나의 컴포넌트가 커지게 된다면 이는 작은 하위 컴포넌트로 분리되어야 한다.
- 각 컴포넌트가 하나의 데이터 모델을 나타내도록 분리해야 한다.

![Component Structure Example](3.png)

1. `FilterableProductTable`(노란색): 예시 전체를 포괄한다.
2. `SearchBar`(파란색): 유저의 입력을 받는다.
3. `ProductTable`(연두색): 유저의 입력을 기반으로 데이터를 필터링 해서 보여준다.
4. `ProductCategoryRow`(하늘색): 각 카테고리의 헤더를 보여준다.
5. `ProductRow`(빨강색): 각각의 제품에 해당하는 행을 보여준다.

💡 컴포넌트 계층 구조

- `FilterableProductTable`
  - `SearchBar`
  - `ProductTable`
    - `ProductCategoryRow`
    - `ProductRow`

# React로 정적인 버전 만들기

- 렌더링은 되지만 아무 동작도 없는 버전으로 만들기
- **재사용이 가능한 컴포넌트**를 만든다.
- props를 이용해 데이터를 전달한다.
  - props는 부모 컴포넌트가 자식 컴포넌트에게 데이터를 전달할 때 사용된다.
- 정적 버전을 만들 때 state를 사용하지 않는다.
  - state는 시간이 지남에 따라 바뀌는 데이터를 다룰 때 사용한다.

# 최소한으로 필요한 state 결정

- **애플리케이션이 필요로 하는 최소한의 상태**를 생각해봐야 한다. 상태 업데이트에 따라 컴포넌트가 리렌더링되기 때문에 이 결정이 매우 중요하다.
- 예시 애플리케이션이 갖고 있는 데이터
  - 제품의 원본 목록
  - 유저가 입력한 검색어
  - 체크박스의 값
  - 필터링된 제품들의 목록
- 아래의 세가지 질문을 통해 애플리케이션에 필요한 `state`는 무엇인지 파악
  - 부모로부터 props를 통해 전달됩니까?
  - 시간이 지나도 변하지 않나요?
  - 컴포넌트 안의 다른 state나 props를 가지고 계산 가능한가요?
- 제품의 원본 목록은 props를 통해 전달되고 데이터가 변하지 않으므로 state가 아니다.
- 검색어와 체크박스의 값은 props를 통해 전달되지 않으며, 시간이 지남에 따라 변하고, 다른 것들로부터 계산되지 않으므로 state이다.
- 필터링된 제품 목록은 제품의 원본 목록, 검색어, 체크박스의 값을 조합해서 계산해낼 수 있으므로 state가 아니다.

# state가 어느 컴포넌트에 있어야 할지 찾기

- 어떤 컴포넌트가 state를 변경하거나 소유할지 찾아야 한다.
  - 특정 state를 기반으로 렌더링하는 모든 컴포넌트를 찾는다.
  - 공통 소유 컴포넌트 (common owner component)를 찾는다. (계층 구조 내에서 특정 state가 있어야 하는 모든 컴포넌트들의 상위에 있는 하나의 컴포넌트)
  - 공통 혹은 더 상위에 있는 컴포넌트가 state를 가져야 한다.
  - state를 소유할 적절한 컴포넌트를 찾지 못했다면, state를 소유하는 컴포넌트를 하나 만들어서 공통 소유 컴포넌트로 추가한다.
- 앞서 결정한 state는 검색어와 체크박스의 값이다. 이를 필요로 하는 컴포넌트는 SearchBar와 ProductTable이다.
  - ProductTable은 state를 바탕으로 상품 목록을 필터링해야 하고 SearchBar는 검색어와 체크박스의 상태를 표시해주어야 한다.
- 공통 소유 컴포넌트는 FilterableProductTable이므로 FilterableProductTable 컴포넌트가 state를 소유해야 한다.

# 역방향 데이터 흐름 추가하기

- 사용자가 폼을 변경할 때마다 사용자의 입력을 반영할 수 있도록 state를 업데이트하기를 원한다.
  - 즉, SearchBar 컴포넌트에서 상위 컴포넌트인 FiterableProductTable의 state를 변경해야 한다.
- props를 통해 자식 컴포넌트에게 상태 업데이트 로직이 담긴 함수를 전달하면 된다.

참고: [React 공식문서](https://ko.reactjs.org/docs/thinking-in-react.html)