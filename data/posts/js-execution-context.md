---
emoji: 🎯
title: 실행 컨텍스트
date: "2021-12-21"
category: Javascript
preview: "Execution context - 실행할 코드에 제공할 환경 정보를 모아놓은 객체이다. - VariableEnvironment, LexicalEnvironment, ThisBinding으로 구성된다. - 실행 컨텍스트에는 전역 컨텍스트와 함수 컨텍스트가 있다. - 처음 자바스크립트 코드를 실행하는 순간 전역 컨텍스트가 생성되고, 콜 스택에 쌓인다. - 그 다음, 함수가 호출될 때마다 함수 컨텍스트가 생성되어 콜 스택에 쌓인다. 함수 컨텍스트 생성 후 함수가 실행되는데, 함수 내에서 사용되는 변수들은 렉시컬 환경 객체에서 찾고 없다면 스코프 체인에 따라 올라가며 찾는다. - 함수 실행이 마무리되면 해당 컨텍스트는 콜 스택에서 제거된다. - 전체 자바스크립트 코드가 종료되면 전역 컨텍스트는 콜 스택에서 제거된다."
---

# Execution context

- **실행할 코드에 제공할 환경 정보를 모아놓은 객체**이다.
- `VariableEnvironment`, `LexicalEnvironment`, `ThisBinding`으로 구성된다.
- 실행 컨텍스트에는 전역 컨텍스트와 함수 컨텍스트가 있다.
- 처음 자바스크립트 코드를 실행하는 순간 전역 컨텍스트가 생성되고, 콜 스택에 쌓인다.
- 그 다음, 함수가 호출될 때마다 함수 컨텍스트가 생성되어 콜 스택에 쌓인다.
- 함수 컨텍스트 생성 후 함수가 실행되는데, 함수 내에서 사용되는 변수들은 렉시컬 환경 객체에서 찾고 없다면 스코프 체인에 따라 올라가며 찾는다.
- 함수 실행이 마무리되면 해당 컨텍스트는 콜 스택에서 제거된다.
- 전체 자바스크립트 코드가 종료되면 전역 컨텍스트는 콜 스택에서 제거된다.
- 즉, **자바스크립트의 코드가 실행되기 위해 변수 객체, 렉시컬 환경, this 정보들을 담고 있는 객체**를 실행 컨텍스트라고 부른다.

<br/>

## Variable Environment

- **현재 컨텍스트 내의 식별자들에 대한 정보, 외부 환경 정보**가 담겨 있다.
- 실행 컨텍스트를 생성할 시점에는 `LexicalEnvironment`와 동일한 내용으로 구성되어 있지만, 함수 실행 도중 변경사항이 생겨도 반영되지 않고 `LexicalEnvironment`에만 반영한다.
- 따라서 `VariableEnvironment`는 초기(최초) 상태를 유지한다.

<br/>

## Lexical Environment

- 실행 컨텍스트를 생성할 시점에 `VariableEnvironment`와 동일하지만, 변경사항이 실시간으로 반영된다.
- `environmentRecord`와 `outerEnvironmentReference`로 구성되어 있다.

### Environment Record

- `environmentRecord`에는 **현재 컨텍스트와 관련된 식별자 정보**들이 저장된다.
  - 매개변수명, 변수의 식별자, 함수명 등이 있다.
- 컨텍스트 내부 전체를 처음부터 끝까지 훑어나가며 _순서대로_ 식별자 정보들을 수집한다.
- 이때 `Hoisting`이 발생한다.
  - 코드를 실행하기 전에 함수, 변수 등 식별자의 메모리 공간을 미리 할당하는 것을 말한다.
  - 그래서 식별자의 선언문이 해당 스코프의 최상단에 옮겨진 것처럼 동작한다.

### Outer Environment Reference

- `outerEnvironmentReference`는 **현재 호출된 함수가 선언될 당시의 `Lexical Environment`를 참조**한다.
- 코드 상에서 어떤 변수에 접근하려 하면 현재 컨텍스트의 `LexicalEnvrinonemt`를 탐색해서 발견되면 그 값을 반환하고, 발견하지 못하면 `outerEnvironmentReference`가 참조하고 있는 `LexicalEnvironment`를 탐색하는 과정을 거친다. 계속 찾지 못할 경우 전역 컨텍스트의 `LexicalEnvironment`까지 탐색해 나가며 해당 변수의 **Scope Chain**을 따라 탐색한다.

  ```js
  var a = 1; // 전역 컨텍스트
  function outer() {
    // outer 컨텍스트
    function inner() {
      // inner 컨텍스트
      console.log(a);
      var a = 3;
      console.log(a);
    }
    inner(); // outer의 LexcicalEnvironemnt = outerEnvironmentReference
    console.log(a);
  }
  outer(); // 전역 컨텍스트의 LexcicalEnvironemnt = outerEnvironmentReference
  console.log(a);
  ```

> **Scope**: 식별자의 유효 범위
>
> - 안쪽 스코프에서 바깥쪽 스코프로 접근할 수 있지만 반대는 불가능하다.
> - 전역 스코프와 지역 스코프
> - 지역 변수는 전역 변수보다 우선순위가 더 높다.
> - 중첩 스코프 : 가장 인접한 스코프 우선 참조
> - `var`로 선언된 변수: **전역 스코프 or 함수 스코프**
> - `let`이나 `const`로 선언한 변수: **블록 스코프**
>
> ```js
> // 중첩 스코프
> var foo = function(){
> 	var = a = 3, b = 5;
> 	var bar = function(){
> 		var b = 7, c = 11;  // a = 3, b = 7, c = 11
> 		a += b + c;  // a = 21, b = 7, c = 11
> 	};
> 	// a = 3, b = 5, c : not defined (function scope)
> 	bar();
> 	// a = 21, b = 5
> }
> ```

<br/>

## This Binding

- `thisBinding`에는 **this로 지정된 객체가 저장**된다.
- 실행 컨텍스트가 생성될 당시에 this가 지정되지 않은 경우 `thisBinding`에는 *전역 객체*가 저장된다.
- 그 밖에 함수를 호출하는 방법에 따라 this에 저장되는 대상이 다르다.
