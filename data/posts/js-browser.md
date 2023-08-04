---
emoji: 🌐
title: JS on browser
date: "2022-01-07"
category: Javascript
preview: "DOM이란? Document Object Model 문서 객체 모델 HTML, XML 문서의 모든 요소들을 계층적으로 표현하여 문서 내 요소들을 생성, 수정, 삭제할 수 있도록 돕는 인터페이스이다. DOM Node DOM은 Node의 계층 구조로 이루어져 있다. 각 노드는 부모와 자식들을 가질 수 있다. HTML에 있는 tag들뿐만 아니라 text, 주석도 node가 된다. DOM Element Element는 Node의 특정 타입, Node.ELEMENT_NODE를 말한다. HTML의 태그들이 DOM Element가 된다. DOM에서 HTML 요소 찾기 document.getElementbyId('') 인자로 찾으려는 요소의 id를 문자열 형태로 전달 (대소문자 구분) id는 유일한 값이므로, 하나의 element만 리턴한다."
---

# DOM이란?

- `Document Object Model`
- 문서 객체 모델
- HTML, XML 문서의 **모든 요소들을 계층적으로 표현**하여 문서 내 요소들을 **생성, 수정, 삭제**할 수 있도록 돕는 **인터페이스**이다.

## DOM Node

- DOM은 Node의 계층 구조로 이루어져 있다.
- 각 노드는 부모와 자식들을 가질 수 있다.
- HTML에 있는 tag들뿐만 아니라 text, 주석도 node가 된다.

> **Node Type**
>
> - [Node.nodeType - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType)
>
> ```
> Node.ELEMENT_NODE
> Node.ATTRIBUTE_NODE
> Node.TEXT_NODE
> Node.CDATA_SECTION_NODE
> Node.PROCESSING_INSTRUCTION_NODE
> Node.COMMENT_NODE
> Node.DOCUMENT_NODE
> Node.DOCUMENT_TYPE_NODE
> Node.DOCUMENT_FRAGMENT_NODE
> Node.NOTATION_NODE
> ```

## DOM Element

- Element는 Node의 특정 타입, `Node.ELEMENT_NODE`를 말한다.
- HTML의 태그들이 DOM Element가 된다.

<br/>

# DOM에서 HTML 요소 찾기

**document.getElementbyId("")**

- 인자로 찾으려는 요소의 id를 문자열 형태로 전달 (대소문자 구분)
- id는 유일한 값이므로, 하나의 element만 리턴한다.

**document.getElementsByClassName("")**

- 인자로 찾으려는 요소의 class 이름을 문자열 형태로 전달 (대소문자 구분)
- 해당 class 이름을 가지는 모든 element 목록을 리턴한다. (순회 가능)
- 다수의 class 이름을 모두 포함하고 있는 element를 찾을 수 있다.
  - 인자로 class 이름들을 스페이스로 구분하여 전달

```js
// class 이름에 'red'와 'blue' 모두를 포함하는 element를 리턴한다.
document.getElementsByClassName("red blue");
```

**document.getElementsByTagName("div")**

- 인자로 찾을 element의 태그 이름을 전달한다.
- 해당 태그를 가진 모든 element를 리턴한다.

**document,querySelector("")**

- 인자로 받은 CSS선택자를 통해, element를 찾아 리턴한다.
- `ID`로 찾기: `document.querySelector('#div_1');`
  - id 이름 앞에 `#`을 붙여 인자로 전달한다.
  - 위 예시는 id가 'div_1'인 element를 찾아 리턴한다.
- `Class`로 찾기: `document.querySelector('.my');`
  - class 이름 앞에 `.`을 붙여 인자로 전달한다.
  - 만약 해당 class 이름을 가진 element가 2개 이상이라면 첫 번째 element를 리턴한다.
  - 위 예시는 class 이름이 'my'인 element 중 *첫 번째 element*를 찾아 리턴한다.
- `Tag`로 찾기: `document.querySelector('h1');`
  - 인자로 태그명을 문자열로 전달한다.
  - 만약 해당 태그명을 가진 element가 2개 이상이라면 첫 번째 element를 리턴한다.
  - div태그를 가지는 element 중 *첫 번째 element*를 리턴한다.
- `,`로 구분하기: `document.querySelector('.red, .green');`
  - 선택자를 ','로 구분하여 전달하면 여러 개의 선택자 중 첫 번째로 발견되는 선택자를 가진 element를 리턴한다.

```js
// 복잡한 선택자
const el = document.querySelector("div.user-panel.main input[name=login]");
```

- 위 예제는 클래스 이름으로 `user-panel`와 `main`을 가진 `div` 태그 안에 (`<div class="user-panel main">`), `name` 속성이 `login`인 `input` 요소들 중 첫 번째 element 리턴

**document.querySelectorAll("")**

- 앞서 보았던 `document.querySelector("")`와 사용법은 동일하다.
- 다만 `document.querySelector("")`는 첫 번째 element만을 반환했다면, `document.querySelectorAll("")`은 인자로 전달한 CSS 선택자로 찾은 모든 element 목록을 리턴한다.

<br/>

# DOM에 HTML 요소 추가하기

**document.createElement(tagName)**

- 태그명을 인수로 전달하여 태그명에 해당하는 새로운 요소를 반환한다.

**Node.appendChild(node)**

- `Node`의 자식 노드 리스트 중 인수로 전달받은 노드를 마지막 자식으로 추가한다.

**Node.insertBefore(newNode, referenceNode)**

- `Node`의 자식 노드인 `referenceNode` 앞에 새로운 노드를 추가한다.
- 만약 `referenceNode`가 `null`이라면, 새로운 노드는 자식 노드의 리스트의 끝에 추가된다.

**Element.append(param1, ... paramN)**

- `Element`의 마지막 자식으로 인수로 전달받은 노드나 문자열을 추가한다.

**Element.prepend(param1, ... paramN)**

- `Element`의 첫번째 자식으로 인수로 전달받은 노드나 문자열을 추가한다.

<br/>

# 클래스명 추가, 수정, 삭제하기

**className vs classList**

- `className`과 `classList`는 DOM 요소의 프로퍼티이다.
- className는 말 그대로 요소의 클래스명을 말하고, className 프로퍼티 값을 바꾸면 요소의 클래스명 전체가 수정된다.
- classList도 요소의 클래스명을 반환하지만, 클래스명을 하나씩 추가 및 삭제할 수 있다.

> 요소가 여러 클래스명을 가질 경우, className을 이용하여 클래스명을 수정하는 것보다, classList를 이용하는 것이 간편하다.

## 클래스명 읽기

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
  </head>
  <body>
    <h1 id="header" class="class1 class2">Hello World</h1>
    <script src="src/script.js"></script>
  </body>
</html>
```

```js
// script.js
const header = document.querySelector("#header");
console.log(header.className); // "class1 class2"
console.log(header.classList); // { "0": "class1", "1": "class2" } [object DOMTokenList]
console.log(header.classList.item(0)); // "class1"
```

## 클래스명 추가, 수정, 삭제

```js
header.className = "class";
console.log(header.className); // "class" (클래스명 전체가 수정됨)
```

```js
const darkModeBtn = document.querySelector(".dark-mode-btn");
const darkMode = document.querySelector(".dark-mode");
darkModeBtn.addEventListener("click", function () {
  if (darkMode.classList.contains("hidden")) {
    darkMode.classList.remove("hidden");
  } else {
    darkMode.classList.add("hidden");
  }
  // darkMode.classList.toggle("hidden"); // 이 한 줄로 줄일 수 있음.
});
```

**Element.classList.contains(class)**

- 인수로 전달받은 클래스명이 요소의 class 속성에 포함되어 있다면 `true`, 아니라면 `false`를 반환한다.

**Element.classList.add(class1, class2, ..., classN)**

- 인수로 전달받은 클래스명을 요소의 class 속성에 추가한다.
- 이미 존재한다면 무시한다.

**Element.classList.remove(class1, class2, ..., classN)**

- 인수로 전달받은 클래스명을 요소의 class 속성에서 제거한다.

**Element.classList.toggle(class)**

- 인수로 전달받은 클래스명이 `classList`에 있다면 해당 클래스명을 제거하고 없다면 추가한다.

<br/>

## innerHTML, innerText, textContent

- innerHTML과 innerText는 Element의 속성이고, textContent는 Node의 속성이다.
- innerHTML: Element 내의 HTML, XML
- innerText: Element 내에서 사용자에게 '보여지는' 텍스트 값
  - `css`로 인해 화면에 보여지지 않는 텍스트 값은 포함하지 않는다.
- textContent: Node 내 텍스트 값
  - `css`로 인해 화면에 보여지지 않는 텍스트 값도 포함된다.
