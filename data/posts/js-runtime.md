---
emoji: ⚡️
title: 자바스크립트 런타임
date: "2021-10-31"
category: Javascript
preview: "자바스크립트 런타임 - 런타임이란 프로그래밍 언어가 구동되는 환경을 말한다. - 따라서 자바스크립트 런타임이란 자바스크립트가 구동되는 환경을 말한다. - 자바스크립트 런타임 종류 : 웹 브라우저 (크롬, 파이어폭스, IE 등), Node.js 💚 Node.js Chrome V8 JavaScript 엔진으로 빌드된 자바스크립트 런타임이다. - 웹 브라우저 밖에서도 자바스크립트를 실행할 수 있는 환경 - 즉, JavaScript 를 웹 브라우저에서 독립시킨 것으로 Node.js를 설치하게 되면 터미널에서 Node.js를 입력하여 브라우저 없이 다양한 자바스크립트 애플리케이션을 바로 실행할 수 있다. - Non-blocking I/O와 싱글 스레드 이벤트 루프를 통한 높은 처리 성능을 가지고 있는 것이 특징이다. - 그외에도 Apache HTTP Server 또는 IIS와 같은 소프트웨어 없이 웹 서버의 역할을 할 수 있도록 하는 내장 라이브러리를 포함하고 있다. - 그래서 자바스크립트로 서버를 개발하는 것도 Node.js를 이용하면 가능하다."
---

- 런타임이란 프로그래밍 언어가 구동되는 환경을 말한다.
- 따라서 자바스크립트 런타임이란 자바스크립트가 구동되는 환경을 말한다.
- 자바스크립트 런타임 종류 : Node.js, 웹 브라우저 (크롬, 파이어폭스, IE 등)

# 💚 Node.js

> Chrome V8 JavaScript 엔진으로 빌드된 자바스크립트 런타임이다.

- **웹 브라우저 밖에서도 자바스크립트를 실행할 수 있는 환경**
- 즉, JavaScript를 웹 브라우저에서 독립시킨 것으로 Node.js를 설치하게 되면 터미널에서 Node.js를 입력하여 브라우저 없이 다양한 자바스크립트 애플리케이션을 바로 실행할 수 있다.
- **Non-blocking I/O**와 **싱글 스레드 이벤트 루프**를 통한 높은 처리 성능을 가지고 있는 것이 특징이다.
- 그외에도 Apache HTTP Server 또는 IIS와 같은 소프트웨어 없이 웹 서버의 역할을 할 수 있도록 하는 내장 라이브러리를 포함하고 있다.
- 그래서 자바스크립트로 서버를 개발하는 것도 Node.js를 이용하면 가능하다.

## V8 엔진이란?

- V8은 **웹 브라우저를 만드는 데 기반을 제공하는 오픈 소스 자바스크립트 엔진**이다.
- 구글 크롬 브라우저와 안드로이드 브라우저에 탑재되어 있다.
- 웹어셈블리 (WebAssembly) 엔진이기도 하다.
- 자바스크립트를 바이트코드로 컴파일하고 실행한다.

```
참고 : 웹어셈블리
- C나 C++와 같은 프로그래밍 언어를 컴파일하여 어느 브라우저에서나 빠르게 실행되는 형식으로 바꿔주는 기술
- 보통 웹 애플리케이션 개발시에는 JavaScript를 사용해 동적인 부분을 개발하는데 C나 C++에 비해서는 느리다.
- 게임이나 동영상 편집 등과 같은 고성능 웹 애플리케이션을 개발할 때 브라우저의 동작을 빠르게 하기 위해 C나
  C++와 같은 언어로 개발할 수 있게 한다.
- 자바스크립트의 실행 속도 부분을 보완해준다.
```

### V8의 구성

- **Memory Heap** : 선언된 변수와 객체의 메모리 할당에 사용되는 비정형 메모리
- **Call Stack** : 실행 컨텍스트가 쌓이는 곳
- `Call Stack`이 하나이기 때문에 자바스크립트는 싱글스레드 프로그래밍 언어이다.
- **여러 작업을 동시에 처리하지 못하고, 하나의 작업만 처리할 수 있다.**

> - **프로세스** : 운영체제에서 할당하는 작업의 단위이다. 노드나 웹 브라우저 같은 프로그램은 개별적인 프로세스이다. 프로세스 간에는 메모리 등의 자원을 공유하지 않는다
> - **스레드** : 스레드는 프로세스 내에서 실행되는 흐름의 단위이다. 프로세스는 스레드를 여러 개 생성해 여러 작업을 동시에 처리할 수 있다. 스레드들은 부모 프로세스의 자원을 공유한다. 같은 주소의 메모리에 접근 가능하므로 데이터를 공유할 수 있다.

## libuv

- 노드는 `V8`과 더불어 `libuv`라는 라이브러리를 사용한다.
- libuv 라이브러리는 노드의 특성인 **이벤트 기반, 논 블로킹 I/O 모델**을 구현하고 있다.

### 이벤트 기반

- 이벤트 기반(Event-driven)이란 **이벤트가 발생할 때 미리 지정해둔 작업을 수행하는 방식**을 의미한다.
- 즉, 이벤트 기반 시스템에서는 특정 이벤트가 발생할 때 무엇을 할지 미리 등록해두고, 이를 이벤트 리스너에 콜백함수를 등록한다.
- 이후 이벤트가 발생하면 리스너에 등록해둔 콜백함수를 호출하며, 이벤트가 끝난 후 노드는 다음 이벤트가 발생할 때까지 대기한다.

### 이벤트 루프

- 이벤트 루프는 여러 이벤트가 **동시**에 발생했을 때 **어떤 순서**로 콜백함수를 호출할지를 판단한다.
- 노드는 이벤트가 종료될 때까지 이벤트 처리를 위한 작업을 반복
- 이벤트 루프를 잘 활용하면 오래 걸리는 작업을 효율적으로 처리할 수 있다.

### 논 블로킹 I/O

- 파일 시스템 접근, 네트워크를 통한 요청 작업은 입력(Input)/출력(Output)의 일종이며, 이러한 작업을 할 때 노드는 논 블로킹 방식으로 처리한다.
- Nodejs에서 논블로킹 메서드는 비동기로 실행되고, Thread pool에서 처리된다.

> **Blocking** vs **Non-blocking**
>
> - 제어권: 함수를 실행할 권리
> - `Blocking`
>   - 다른 함수를 호출할 때 제어권도 함께 넘겨주고, 작업이 끝난 후에 돌려받는 방식
>   - 제어권을 넘겨줬기 때문에 현재 실행되고 있는 함수는 실행을 멈춘다.
> - `Non-blocking`: 다른 함수를 호출할 때 제어권을 넘기지 않고 실행만 시키는 방식
>   - 제어권은 현재 실행되고 있는 함수에게 있으므로 함수를 호출하고 나서도 계속 실행된다.
>   - 제어권을 넘기지 않고 실행시킴으로써 함수가 동시에 실행될 수 있다.
> - Nodejs에서 블로킹 메서드는 **동기**로 실행되고 논블로킹 메서드는 **비동기**로 실행된다.

> **Synchronous** vs **Asynchronous**
>
> - 호출된 함수의 작업 완료 여부를 신경쓰는지에 대한 차이를 갖고 있다.
> - `Synchronous` (동기)
>   - 함수 A가 함수 B를 호출한 뒤, 함수 B의 실행이 다 끝났는지 리턴값을 계속 확인하면서 끝나는 시간에 맞춰 다시 작업을 수행하는 방식
> - `Asynchronous` (비동기)
>   - 함수 A가 함수 B를 호출할 때 콜백 함수를 함께 전달해서, 함수 B의 작업이 완료되면 함께 보낸 콜백 함수를 실행한다.
>   - 함수 A는 함수 B를 호출한 이후로 함수 B의 작업 완료 여부에는 신경쓰지 않는다.

![Node.js Architecture](1.png)

> 👉 Node.js는 싱글스레드, 논 블로킹 모델로 싱글 스레드가 혼자서 일을 처리하지만 모든 I/O 작업에 대해서는 논블로킹 방식으로 처리한다.

<br/>

# 🌐 웹 브라우저

- 웹 브라우저에도 V8엔진이 탑재되어 있다.
- 자바스크립트 실행 환경이 웹 브라우저이면 웹 브라우저에서 제공하는 API를 사용할 수 있다.
  - setTimeout, DOM, AJAX(HTTP 요청)등과 같은 **비동기 메소드**가 있다.

## 이벤트 루프

- 여러 이벤트가 동시에 발생했을 때 어떤 순서로 콜백함수를 호출할지를 판단
- 콜 스택과 콜백 큐를 주시함.
- 콜 스택이 비어질 때까지 기다린 후 콜백 큐에 있는 함수를 콜 스택에 추가한다.

## 콜백 큐

- 비동기로 실행되야 하는 콜백함수가 보관되는 영역
- 예를 들어 자바스크립트에서 `setTimeout(cd, 5000)`을 호출하게 되면 Web API는 타이머를 동작시켜 5초 후에 콜백 큐에 cd를 쌓는다.

> 자바스크립트에서 **비동기 처리**를 가능하게 해준다.

![V8 Engine, Web APIs, Event Loop, and Callback Queue](2.png)
