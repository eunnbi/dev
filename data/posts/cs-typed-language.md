---
emoji: 🔮
title: 정적타입 언어 vs 동적타입 언어
date: "2021-10-30"
category: CS
preview: "타입이란? 자료형 : int, short, float, string, 객체 등 정적타입 언어란? Statically typed language 컴파일 시 변수의 타입이 결정되는 언어 변수에 들어갈 값의 형태에 따라 직접 변수의 타입을 명시해줘야 함. 컴파일 시 자료형에 맞지 않는 값이 들어있으면 컴파일 에러 발생 Java, C, C++, C#, Scala,  Fortran, Haskell, ML, Pascal 등 👍 정적타입 언어의 장점 타입 에러로 인한 문제점을 초기에 발견할 수 있어 타입 관련한 런타임 오류를 방지할 수 있고 타입의 안정성이 높음. 특히, 사용자에게 배포되는 앱의 경우 타입 관련한 검증을 컴파일 시에 하지 않고 런타임에 하게 되면 앱 사용 시 타입 불일치로 인한 크래시의 발생 위험이 높아짐. 컴파일 시에 미리 타입을 결정하기 때문에 실행 속도가 빠름. 코드의 가독성이 좋음. 다수의 협업이나 프로젝트의 장기 개발 및 유지보수에 유리함. 😒 정적타입 언어의 단점 매번 코드 작성시 변수형을 결정해줘야 하는 번거로움이 있음."
---

# 타입이란?

- 자료형 : int, short, float, string, 객체 등

<br/>

# 정적타입 언어란?

`Statically typed language`

- 컴파일 시 변수의 타입이 결정되는 언어
- 변수에 들어갈 값의 형태에 따라 직접 변수의 타입을 명시해줘야 함.
- 컴파일 시 자료형에 맞지 않는 값이 들어있으면 컴파일 에러 발생
- Java, C, C++, C#, Scala,  Fortran, Haskell, ML, Pascal 등

## 👍 정적타입 언어의 장점

- 타입 에러로 인한 문제점을 초기에 발견할 수 있어 타입 관련한 런타임 오류를 방지할 수 있고 타입의 안정성이 높음.
- 특히, 사용자에게 배포되는 앱의 경우 타입 관련한 검증을 컴파일 시에 하지 않고 런타임에 하게 되면 앱 사용 시 타입 불일치로 인한 크래시의 발생 위험이 높아짐.
- 컴파일 시에 미리 타입을 결정하기 때문에 실행 속도가 빠름
- 코드의 가독성이 좋음. 다수의 협업이나 프로젝트의 장기 개발 및 유지보수에 유리함.

## 😒 정적타입 언어의 단점

- 매번 코드 작성시 변수형을 결정해줘야 하는 번거로움이 있음.

<br/><br/>

# 동적타입 언어란?

`Dynamically typed language`

- 컴파일 시 자료형을 정하는 것이 아니라 런타임 시 자료형이 결정됨.
- 타입 없이 변수만 선언하여 값을 지정할 수 있음.
- Groovy, Python, JavaScript, Ruby, Smalltalk, Lisp, Objective-C, PHP, Prolog 등

## 👍 동적타입 언어의 장점

- 런타임까지 타입에 대한 결정을 끌고 갈 수 있기 때문에 유연성이 높음
- 타입 관련하여 지켜야 할 규칙이 적기 때문에 상대적으로 코드가 짧고 Learning-Curve가 낮다.

## 😒 동적타입 언어의 단점

- 실행 도중에 변수에 예상치 못한 자료형이 들어와 TypeError를 발생할 수 있음.
- 타입 관련 Error는 런타임 시 확인할 수 밖에 없기 때문에, 코드가 길고 복잡해질 경우 타입 에러를 찾기가 어려워짐.
- 이러한 불편함을 해소하기 위해 TypeScript나 Flow 등을 사용할 수 있음.

참고: [정적타입 언어 vs. 동적타입 언어 특징 비교하기](https://devuna.tistory.com/82)