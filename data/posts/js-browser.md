---
emoji: ๐
title: JS on browser
date: "2022-01-07"
category: Javascript
preview: "DOM์ด๋? Document Object Model ๋ฌธ์ ๊ฐ์ฒด ๋ชจ๋ธ HTML, XML ๋ฌธ์์ ๋ชจ๋  ์์๋ค์ ๊ณ์ธต์ ์ผ๋ก ํํํ์ฌ ๋ฌธ์ ๋ด ์์๋ค์ ์์ฑ, ์์ , ์ญ์ ํ  ์ ์๋๋ก ๋๋ ์ธํฐํ์ด์ค์ด๋ค. DOM Node DOM์ Node์ ๊ณ์ธต ๊ตฌ์กฐ๋ก ์ด๋ฃจ์ด์ ธ ์๋ค. ๊ฐ ๋ธ๋๋ ๋ถ๋ชจ์ ์์๋ค์ ๊ฐ์ง ์ ์๋ค. HTML์ ์๋ tag๋ค๋ฟ๋ง ์๋๋ผ text, ์ฃผ์๋ node๊ฐ ๋๋ค. DOM Element Element๋ Node์ ํน์  ํ์, Node.ELEMENT_NODE๋ฅผ ๋งํ๋ค. HTML์ ํ๊ทธ๋ค์ด DOM Element๊ฐ ๋๋ค. DOM์์ HTML ์์ ์ฐพ๊ธฐ document.getElementbyId('') ์ธ์๋ก ์ฐพ์ผ๋ ค๋ ์์์ id๋ฅผ ๋ฌธ์์ด ํํ๋ก ์ ๋ฌ (๋์๋ฌธ์ ๊ตฌ๋ถ) id๋ ์ ์ผํ ๊ฐ์ด๋ฏ๋ก, ํ๋์ element๋ง ๋ฆฌํดํ๋ค."
---

# DOM์ด๋?

- `Document Object Model`
- ๋ฌธ์ ๊ฐ์ฒด ๋ชจ๋ธ
- HTML, XML ๋ฌธ์์ **๋ชจ๋  ์์๋ค์ ๊ณ์ธต์ ์ผ๋ก ํํ**ํ์ฌ ๋ฌธ์ ๋ด ์์๋ค์ **์์ฑ, ์์ , ์ญ์ **ํ  ์ ์๋๋ก ๋๋ **์ธํฐํ์ด์ค**์ด๋ค.

## DOM Node

- DOM์ Node์ ๊ณ์ธต ๊ตฌ์กฐ๋ก ์ด๋ฃจ์ด์ ธ ์๋ค.
- ๊ฐ ๋ธ๋๋ ๋ถ๋ชจ์ ์์๋ค์ ๊ฐ์ง ์ ์๋ค.
- HTML์ ์๋ tag๋ค๋ฟ๋ง ์๋๋ผ text, ์ฃผ์๋ node๊ฐ ๋๋ค.

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

- Element๋ Node์ ํน์  ํ์, `Node.ELEMENT_NODE`๋ฅผ ๋งํ๋ค.
- HTML์ ํ๊ทธ๋ค์ด DOM Element๊ฐ ๋๋ค.

<br/>

# DOM์์ HTML ์์ ์ฐพ๊ธฐ

**document.getElementbyId("")**

- ์ธ์๋ก ์ฐพ์ผ๋ ค๋ ์์์ id๋ฅผ ๋ฌธ์์ด ํํ๋ก ์ ๋ฌ (๋์๋ฌธ์ ๊ตฌ๋ถ)
- id๋ ์ ์ผํ ๊ฐ์ด๋ฏ๋ก, ํ๋์ element๋ง ๋ฆฌํดํ๋ค.

**document.getElementsByClassName("")**

- ์ธ์๋ก ์ฐพ์ผ๋ ค๋ ์์์ class ์ด๋ฆ์ ๋ฌธ์์ด ํํ๋ก ์ ๋ฌ (๋์๋ฌธ์ ๊ตฌ๋ถ)
- ํด๋น class ์ด๋ฆ์ ๊ฐ์ง๋ ๋ชจ๋  element ๋ชฉ๋ก์ ๋ฆฌํดํ๋ค. (์ํ ๊ฐ๋ฅ)
- ๋ค์์ class ์ด๋ฆ์ ๋ชจ๋ ํฌํจํ๊ณ  ์๋ element๋ฅผ ์ฐพ์ ์ ์๋ค.
  - ์ธ์๋ก class ์ด๋ฆ๋ค์ ์คํ์ด์ค๋ก ๊ตฌ๋ถํ์ฌ ์ ๋ฌ

```js
// class ์ด๋ฆ์ 'red'์ 'blue' ๋ชจ๋๋ฅผ ํฌํจํ๋ element๋ฅผ ๋ฆฌํดํ๋ค.
document.getElementsByClassName("red blue");
```

**document.getElementsByTagName("div")**

- ์ธ์๋ก ์ฐพ์ element์ ํ๊ทธ ์ด๋ฆ์ ์ ๋ฌํ๋ค.
- ํด๋น ํ๊ทธ๋ฅผ ๊ฐ์ง ๋ชจ๋  element๋ฅผ ๋ฆฌํดํ๋ค.

**document,querySelector("")**

- ์ธ์๋ก ๋ฐ์ CSS์ ํ์๋ฅผ ํตํด, element๋ฅผ ์ฐพ์ ๋ฆฌํดํ๋ค.
- `ID`๋ก ์ฐพ๊ธฐ: `document.querySelector('#div_1');`
  - id ์ด๋ฆ ์์ `#`์ ๋ถ์ฌ ์ธ์๋ก ์ ๋ฌํ๋ค.
  - ์ ์์๋ id๊ฐ 'div_1'์ธ element๋ฅผ ์ฐพ์ ๋ฆฌํดํ๋ค.
- `Class`๋ก ์ฐพ๊ธฐ: `document.querySelector('.my');`
  - class ์ด๋ฆ ์์ `.`์ ๋ถ์ฌ ์ธ์๋ก ์ ๋ฌํ๋ค.
  - ๋ง์ฝ ํด๋น class ์ด๋ฆ์ ๊ฐ์ง element๊ฐ 2๊ฐ ์ด์์ด๋ผ๋ฉด ์ฒซ ๋ฒ์งธ element๋ฅผ ๋ฆฌํดํ๋ค.
  - ์ ์์๋ class ์ด๋ฆ์ด 'my'์ธ element ์ค *์ฒซ ๋ฒ์งธ element*๋ฅผ ์ฐพ์ ๋ฆฌํดํ๋ค.
- `Tag`๋ก ์ฐพ๊ธฐ: `document.querySelector('h1');`
  - ์ธ์๋ก ํ๊ทธ๋ช์ ๋ฌธ์์ด๋ก ์ ๋ฌํ๋ค.
  - ๋ง์ฝ ํด๋น ํ๊ทธ๋ช์ ๊ฐ์ง element๊ฐ 2๊ฐ ์ด์์ด๋ผ๋ฉด ์ฒซ ๋ฒ์งธ element๋ฅผ ๋ฆฌํดํ๋ค.
  - divํ๊ทธ๋ฅผ ๊ฐ์ง๋ element ์ค *์ฒซ ๋ฒ์งธ element*๋ฅผ ๋ฆฌํดํ๋ค.
- `,`๋ก ๊ตฌ๋ถํ๊ธฐ: `document.querySelector('.red, .green');`
  - ์ ํ์๋ฅผ ','๋ก ๊ตฌ๋ถํ์ฌ ์ ๋ฌํ๋ฉด ์ฌ๋ฌ ๊ฐ์ ์ ํ์ ์ค ์ฒซ ๋ฒ์งธ๋ก ๋ฐ๊ฒฌ๋๋ ์ ํ์๋ฅผ ๊ฐ์ง element๋ฅผ ๋ฆฌํดํ๋ค.

```js
// ๋ณต์กํ ์ ํ์
const el = document.querySelector("div.user-panel.main input[name=login]");
```

- ์ ์์ ๋ ํด๋์ค ์ด๋ฆ์ผ๋ก `user-panel`์ `main`์ ๊ฐ์ง `div` ํ๊ทธ ์์ (`<div class="user-panel main">`), `name` ์์ฑ์ด `login`์ธ `input` ์์๋ค ์ค ์ฒซ ๋ฒ์งธ element ๋ฆฌํด

**document.querySelectorAll("")**

- ์์ ๋ณด์๋ `document.querySelector("")`์ ์ฌ์ฉ๋ฒ์ ๋์ผํ๋ค.
- ๋ค๋ง `document.querySelector("")`๋ ์ฒซ ๋ฒ์งธ element๋ง์ ๋ฐํํ๋ค๋ฉด, `document.querySelectorAll("")`์ ์ธ์๋ก ์ ๋ฌํ CSS ์ ํ์๋ก ์ฐพ์ ๋ชจ๋  element ๋ชฉ๋ก์ ๋ฆฌํดํ๋ค.

<br/>

# DOM์ HTML ์์ ์ถ๊ฐํ๊ธฐ

**document.createElement(tagName)**

- ํ๊ทธ๋ช์ ์ธ์๋ก ์ ๋ฌํ์ฌ ํ๊ทธ๋ช์ ํด๋นํ๋ ์๋ก์ด ์์๋ฅผ ๋ฐํํ๋ค.

**Node.appendChild(node)**

- `Node`์ ์์ ๋ธ๋ ๋ฆฌ์คํธ ์ค ์ธ์๋ก ์ ๋ฌ๋ฐ์ ๋ธ๋๋ฅผ ๋ง์ง๋ง ์์์ผ๋ก ์ถ๊ฐํ๋ค.

**Node.insertBefore(newNode, referenceNode)**

- `Node`์ ์์ ๋ธ๋์ธ `referenceNode` ์์ ์๋ก์ด ๋ธ๋๋ฅผ ์ถ๊ฐํ๋ค.
- ๋ง์ฝ `referenceNode`๊ฐ `null`์ด๋ผ๋ฉด, ์๋ก์ด ๋ธ๋๋ ์์ ๋ธ๋์ ๋ฆฌ์คํธ์ ๋์ ์ถ๊ฐ๋๋ค.

**Element.append(param1, ... paramN)**

- `Element`์ ๋ง์ง๋ง ์์์ผ๋ก ์ธ์๋ก ์ ๋ฌ๋ฐ์ ๋ธ๋๋ ๋ฌธ์์ด์ ์ถ๊ฐํ๋ค.

**Element.prepend(param1, ... paramN)**

- `Element`์ ์ฒซ๋ฒ์งธ ์์์ผ๋ก ์ธ์๋ก ์ ๋ฌ๋ฐ์ ๋ธ๋๋ ๋ฌธ์์ด์ ์ถ๊ฐํ๋ค.

<br/>

# ํด๋์ค๋ช ์ถ๊ฐ, ์์ , ์ญ์ ํ๊ธฐ

**className vs classList**

- `className`๊ณผ `classList`๋ DOM ์์์ ํ๋กํผํฐ์ด๋ค.
- className๋ ๋ง ๊ทธ๋๋ก ์์์ ํด๋์ค๋ช์ ๋งํ๊ณ , className ํ๋กํผํฐ ๊ฐ์ ๋ฐ๊พธ๋ฉด ์์์ ํด๋์ค๋ช ์ ์ฒด๊ฐ ์์ ๋๋ค.
- classList๋ ์์์ ํด๋์ค๋ช์ ๋ฐํํ์ง๋ง, ํด๋์ค๋ช์ ํ๋์ฉ ์ถ๊ฐ ๋ฐ ์ญ์ ํ  ์ ์๋ค.

> ์์๊ฐ ์ฌ๋ฌ ํด๋์ค๋ช์ ๊ฐ์ง ๊ฒฝ์ฐ, className์ ์ด์ฉํ์ฌ ํด๋์ค๋ช์ ์์ ํ๋ ๊ฒ๋ณด๋ค, classList๋ฅผ ์ด์ฉํ๋ ๊ฒ์ด ๊ฐํธํ๋ค.

## ํด๋์ค๋ช ์ฝ๊ธฐ

```html
<!DOCTYPE html>
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

## ํด๋์ค๋ช ์ถ๊ฐ, ์์ , ์ญ์ 

```js
header.className = "class";
console.log(header.className); // "class" (ํด๋์ค๋ช ์ ์ฒด๊ฐ ์์ ๋จ)
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
  // darkMode.classList.toggle("hidden"); // ์ด ํ ์ค๋ก ์ค์ผ ์ ์์.
});
```

**Element.classList.contains(class)**

- ์ธ์๋ก ์ ๋ฌ๋ฐ์ ํด๋์ค๋ช์ด ์์์ class ์์ฑ์ ํฌํจ๋์ด ์๋ค๋ฉด `true`, ์๋๋ผ๋ฉด `false`๋ฅผ ๋ฐํํ๋ค.

**Element.classList.add(class1, class2, ..., classN)**

- ์ธ์๋ก ์ ๋ฌ๋ฐ์ ํด๋์ค๋ช์ ์์์ class ์์ฑ์ ์ถ๊ฐํ๋ค.
- ์ด๋ฏธ ์กด์ฌํ๋ค๋ฉด ๋ฌด์ํ๋ค.

**Element.classList.remove(class1, class2, ..., classN)**

- ์ธ์๋ก ์ ๋ฌ๋ฐ์ ํด๋์ค๋ช์ ์์์ class ์์ฑ์์ ์ ๊ฑฐํ๋ค.

**Element.classList.toggle(class)**

- ์ธ์๋ก ์ ๋ฌ๋ฐ์ ํด๋์ค๋ช์ด `classList`์ ์๋ค๋ฉด ํด๋น ํด๋์ค๋ช์ ์ ๊ฑฐํ๊ณ  ์๋ค๋ฉด ์ถ๊ฐํ๋ค.

<br/>

## innerHTML, innerText, textContent

- innerHTML๊ณผ innerText๋ Element์ ์์ฑ์ด๊ณ , textContent๋ Node์ ์์ฑ์ด๋ค.
- innerHTML: Element ๋ด์ HTML, XML
- innerText: Element ๋ด์์ ์ฌ์ฉ์์๊ฒ '๋ณด์ฌ์ง๋' ํ์คํธ ๊ฐ
  - `css`๋ก ์ธํด ํ๋ฉด์ ๋ณด์ฌ์ง์ง ์๋ ํ์คํธ ๊ฐ์ ํฌํจํ์ง ์๋๋ค.
- textContent: Node ๋ด ํ์คํธ ๊ฐ
  - `css`๋ก ์ธํด ํ๋ฉด์ ๋ณด์ฌ์ง์ง ์๋ ํ์คํธ ๊ฐ๋ ํฌํจ๋๋ค.
