---
emoji: 📸
title: 브라우저 이벤트
date: "2022-01-06"
category: Web
preview: "이벤트란? 어떤 행위나 사건(일)이 일어났다는 신호 마우스 이벤트 폼 요소 이벤트 키보드 이벤트 문서 이벤트 css 이벤트 이벤트 핸들러 이벤트에 반응하려면 이벤트가 발생했을 때 실행하는 함수인 핸들러를 할당해야 한다. 핸들러는 여러 가지 방법으로 할당할 수 있다. 이벤트 객체 이벤트를 제대로 다루기 위해서는 어떤 일이 발생했는지 상세히 알아야 한다. click 이벤트가 발생했다면 마우스 포인터가 어디에 있는지 keydown 이벤트가 발생했다면 어떤 키가 눌렸는지 이벤트가 발생하면 브라우저는 이벤트 객체 (event object)를 만든다. 이벤트 객체에는 이벤트에 관한 상세한 정보가 있고, 이벤트 핸들러에 인수 형태로 전달한다."
---

## 이벤트란?

- 어떤 행위나 사건(일)이 일어났다는 신호
- 마우스 이벤트
  - `click` : 요소 위에서 마우스 왼쪽 버튼을 눌렀을 때 발생한다.
  - `contextMenu` : 요소 위에서 마우스 오른쪽 버튼을 눌렀을 때 발생한다.
  - `mouseover`와 `mouseout`: 마우스 커서를 요소 위로 움직이거나 커서나 요소 밖으로 움직였을 때 발생한다.
  - `mousedown`과 `mouseup`: 요소 위에서 마우스 왼쪽 버튼을 누르고 있거나 마우스 버튼을 텔 때 발생한다.
  - `mousemove` : 마우스를 움직일 때 발생한다.
- 폼 요소 이벤트
  - `submit` : 사용자가 form을 제출할 때 발생한다.
  - `focus` : 사용자가 input과 같은 요소에 포커스할 때 발생한다.
- 키보드 이벤트
  - `keydown`, `keyup`: 사용자가 키보드 버튼을 누르거나 뗄 때 발생한다.
- 문서 이벤트
  - `DOMContentLoaded`: HTML이 전부 로드 및 처리되어 DOM에 생성이 완료되었을 때 발생
- css 이벤트
  - `trasitionend` : css 애니메이션이 종료되었을 때 발생

<br/>

## 이벤트 핸들러

- 이벤트에 반응하려면 이벤트가 발생했을 때 실행하는 함수인 핸들러를 할당해야 한다.
- 핸들러는 여러 가지 방법으로 할당할 수 있다.

**HTML 요소의 `on<event>`속성**

```html
<input value="클릭해 주세요." onclick="alert('클릭!')" type="button" />
```

**DOM 프로퍼티 `on<event>`**

```html
<input id="elem" type="button" value="클릭해 주세요." />
<script>
  elem.onclick = function () {
    alert("감사합니다.");
  };
</script>
```

- `onclick` 프로퍼티와 속성은 하나밖에 없기 때문에 하나의 이벤트에 대해 복수의 핸들러를 할당할 수 없다.

**target.addEventListener(type, listener)**

- 특정 이벤트가 target에 전달될 때마다 호출할 콜백함수를 지정한다.
- 앞선 두 가지 방법과 달리 하나의 이벤트에 대해 복수의 핸들러를 할당할 수 있다.
- 어떤 이벤트는 `addEventListener` 메서드를 써여야만 핸들러 할당이 가능하다. (ex. `DOMContentLoaded`)
- `type`: 첫 번째 인자로는 반응할 이벤트 유형을 문자열 형태로 전달한다. (`click`, `input`, `change` 등)
- `listener`: 두 번째 인자로는 해당 `target`에게 이벤트가 발생했을 때 호출할 함수를 전달한다. (react to the event)

**target.removeEventListener(type, listener)**

- 핸들러를 삭제하려면 핸들러 할당 시 사용한 함수를 두번째 인수로 그대로 전달해야 한다.

```js
// BAD
elem.addEventListener("click", () => alert("감사합니다!"));
elem.removeEventListener("click", () => alert("감사합니다!"));
```

```js
// GOOD
function handler() {
  alert("감사합니다!");
}
input.addEventListener("click", handler);
input.removeEventListener("click", handler);
```

> **객체 형태의 이벤트 핸들러**
>
> - `addEventListener` 메서드를 사용하면 함수뿐만 아니라 객체를 이벤트 핸들러로 할당할 수 있는데, 이벤트가 발생하면 객체의 `handleEvent` 메서드를 호출한다.
>
> ```js
> class Menu {
>   handleEvent(event) {
>     switch (event.type) {
>       case "mousedown":
>         elem.innerHTML = "마우스 버튼을 눌렀습니다.";
>         break;
>       case "mouseup":
>         elem.innerHTML += " 그리고 버튼을 뗐습니다.";
>         break;
>     }
>   }
> }
>
> let menu = new Menu();
> elem.addEventListener("mousedown", menu);
> elem.addEventListener("mouseup", menu);
> ```

<br/>

## 이벤트 객체

- 이벤트를 제대로 다루기 위해서는 어떤 일이 발생했는지 상세히 알아야 한다.
  - `click` 이벤트가 발생했다면 마우스 포인터가 어디에 있는지
  - `keydown` 이벤트가 발생했다면 어떤 키가 눌렸는지
- 이벤트가 발생하면 브라우저는 **이벤트 객체** (event object)를 만든다.
  - 이벤트 객체에는 이벤트에 관한 상세한 정보가 있고, 이벤트 핸들러에 인수 형태로 전달한다.
  - `event.type`: 이벤트 타입 (`click`, `change` 등)
  - `event.currentTarget` : 이벤트를 처리하는 요소, 실행 중인 핸들러가 할당된 요소

> 참고: [Introduction of Browser Events](https://ko.javascript.info/introduction-browser-events)

<br/>

## 이벤트 버블링

- **한 요소에 이벤트가 발생하면, 이 요소에 할당된 이벤트 핸들러가 동작하고, 이어서 부모 요소의 해당 이벤트에 대한 핸들러가 동작한다. 가장 상위의 조상 요소를 만날 때까지 이 과정이 반복된다.**

```html
<form onclick="alert('form')">
  FORM
  <div onclick="alert('div')">
    DIV
    <p onclick="alert('p')">P</p>
  </div>
</form>
```

`p` 요소를 클릭하면...

1. `p` 요소에 할당된 `onclick` 핸들러가 동작한다.
2. `div` 요소에 할당된 핸들러가 동작한다.
3. `form` 요소에 할당된 핸들러가 동작한다.

- 즉, `p` 요소를 클릭하면 `p`, `div`, `form` 순서로 3개의 alert 창이 뜬다.
- 모든 이벤트가 버블링되는 것은 아니다. `focus` 이벤트와 같이 버블링되지 않은 이벤트도 있지만, 거의 모든 이벤트가 버블링된다.

### event.target

- 부모 요소의 핸들러는 이벤트가 정확히 어디서 발생했는지 등에 대한 정보를 이벤트 객체의 `target` 프로퍼티를 통해 얻을 수 있다.
- 이벤트가 발생한 가장 안쪽의 요소를 `target`이라고 불리고, 이벤트 객체의 `target` 속성으로 접근할 수 있다.
- 버블링이 진행되어도 `event.target`은 변하지 않는다.
- cf) `event.currentTarget`: 실행 중인 핸들러가 할당된 요소를 참조한다.

```html
<body>
  <form id="form">
    FORM
    <div>
      DIV
      <p>P</p>
    </div>
  </form>
  <script src="script.js"></script>
</body>
```

```js
// script.js
const form = document.querySelector("form");
form.addEventListener("click", function (e) {
  console.log("target", e.target.tagName);
  console.log("currentTarget", e.currentTarget.tagName);
});
// form을 클릭했을 때: target - FORM, currentTarget - FORM
// div를 클릭했을 때: target - DIV, currentTarget - FORM
// p를 클릭했을 때: target - P, currentTarget - FORM
```

### 버블링 중단하기

- 이벤트 객체의 메서드인 `event.stopPropagation()`을 사용하면 된다.

<br/>

## 이벤트 캡처링

> **표준 DOM 이벤트에서 정의한 이벤트 흐름**
>
> 1. 캡처링 단계: 이벤트가 하위 요소로 전파되는 단계
> 2. 타깃 단계: 이벤트가 실제 타깃 요소에 전달되는 단계
> 3. 버블링 단계: 이벤트가 상위 요소로 전파되는 단계

- 이벤트 캡처링은 **이벤트가 최상위 조상에서 시작해 실제 타깃 요소까지 전파되는 것**을 말한다.
- `on<event>`프로퍼티나 HTML 속성, `addEventListener` 메서드를 이용해 할당된 핸들러는 캡처링에 대해 전혀 알 수 없다. 두 번째 혹은 세번째 단계의 이벤트 흐름에 대해서만 동작한다.
- 캡처링 단계에서 이벤트를 잡아내려먼 `addEventListener` 메서드의 `capture` 옵션을 `true`로 설정해야 한다.

```js
elem.addEventListener(..., {capture: true});
// false (default): 핸들러는 타깃 단계와 버블링 단계에서 동작
// true: 핸들러는 캡처링 단계와 타깃 단계에서 동작
```

**Example**

```html
<!doctype html>
<body>
  <form>
    FORM
    <div>
      DIV
      <p>P</p>
    </div>
  </form>

  <script>
    for (let elem of document.querySelectorAll("*")) {
      elem.addEventListener(
        "click",
        e => alert(`캡쳐링: ${elem.tagName}`),
        true
      );
      elem.addEventListener("click", e => alert(`버블링: ${elem.tagName}`));
    }
  </script>
</body>
```

`p` 요소를 클릭하면...

1.  캡처링 단계 (첫번째 리스너): `HTML` -> `BODY` -> `FORM` -> `DIV`
2.  타깃 단계: `P` (첫번째 리스너의 타깃 단계와 두번째 리스너의 타깃 단계, 총 두 번)
3.  버블링 단계 (두번째 리스너): `DIV` -> `FORM` -> `BODY` -> `HTML`

- `event.eventPhase` : 현재 이벤트 흐름 단계 (캡처링 = 1, 타깃 = 2, 버블링 = 3)

> 참고: [Event Bubbling and Capturing](https://ko.javascript.info/bubbling-and-capturing)

<br/>

## 이벤트 위임

> 참고: [Event Delegation](https://ko.javascript.info/event-delegation)

- 캡처링과 버블링을 활용하면 이벤트 핸들링 패턴인 이벤트 위임(event delegation)을 구현할 수 있다.
- 이벤트 위임을 사용하면 **요소마다 핸들러를 할당하지 않고, 요소의 공통 조상에 이벤트 핸들러를 단 하나만 할당해도 여러 요소에 대한 이벤트를 한꺼번에 다룰 수 있다.**
  - 공통 조상에 할당한 핸들러에서 `event.target`를 이용하면 실제 어느 요소에서 이벤트가 발생했는지 알 수 있기 때문이다.
- 많은 핸들러를 할당하지 않아도 되기 때문에 코드가 간결해지고, 메모리가 절약된다.
- 하지만, 이벤트 위임을 구현하기 위해서는 이벤트가 반드시 버블링되어야 한다.
  - 하지만, 모든 이벤트가 버블링 되는 것은 아니다.
  - `event.stopPropagation()`을 사용하는데 유의해야 한다.

**Example 1**

```html
<!doctype html>
<html>
  <body>
    <table id="bagua-table">
      <tr>
        <th colspan="3">
          <em>Bagua</em> Chart: Direction, Element, Color, Meaning
        </th>
      </tr>
      <tr>
        <td class="nw">
          <strong>Northwest</strong> <br />Metal <br />Silver <br />Elders
        </td>
        <td class="n">
          <strong>North</strong> <br />Water <br />Blue <br />Change
        </td>
        <td class="ne">
          <strong>Northeast</strong> <br />Earth <br />Yellow <br />Direction
        </td>
      </tr>
      <tr>
        <td class="w">
          <strong>West</strong> <br />Metal <br />Gold <br />Youth
        </td>
        <td class="c">
          <strong>Center</strong> <br />All <br />Purple <br />Harmony
        </td>
        <td class="e">
          <strong>East</strong> <br />Wood <br />Blue <br />Future
        </td>
      </tr>
      <tr>
        <td class="sw">
          <strong>Southwest</strong> <br />Earth <br />Brown <br />Tranquility
        </td>
        <td class="s">
          <strong>South</strong> <br />Fire <br />Orange <br />Fame
        </td>
        <td class="se">
          <strong>Southeast</strong> <br />Wood <br />Green <br />Romance
        </td>
      </tr>
    </table>

    <script>
      const table = document.getElementById("bagua-table");

      let selectedTd;
      table.addEventListener("click", function (event) {
        const target = event.target;
        while (target !== this) {
          // this === event.currentTarget (화살표 함수 X)
          if (target.tagName === "TD") {
            highlight(target);
            return;
          }
          target = target.parentNode;
        }
      });
      function highlight(node) {
        if (selectedTd) {
          selectedTd.classList.remove("highlight");
        }
        selectedTd = node;
        selectedTd.classList.add("highlight");
      }
    </script>
  </body>
</html>
```

**Example 2**

```html
<!doctype html>
<html>
  <head>
    <link rel="stylesheet" href="messages.css" />
    <meta charset="utf-8" />
  </head>

  <body>
    <div id="container">
      <div class="pane">
        <h3>Horse</h3>
        <p>
          The horse is one of two extant subspecies of Equus ferus. It is an
          odd-toed ungulate mammal belonging to the taxonomic family Equidae.
          The horse has evolved over the past 45 to 55 million years from a
          small multi-toed creature, Eohippus, into the large, single-toed
          animal of today.
        </p>
        <button class="remove-button">[x]</button>
      </div>
      <div class="pane">
        <h3>Donkey</h3>
        <p>
          The donkey or ass (Equus africanus asinus) is a domesticated member of
          the horse family, Equidae. The wild ancestor of the donkey is the
          African wild ass, E. africanus. The donkey has been used as a working
          animal for at least 5000 years.
        </p>
        <button class="remove-button">[x]</button>
      </div>
      <div class="pane">
        <h3>Cat</h3>
        <p>
          The domestic cat (Latin: Felis catus) is a small, typically furry,
          carnivorous mammal. They are often called house cats when kept as
          indoor pets or simply cats when there is no need to distinguish them
          from other felids and felines. Cats are often valued by humans for
          companionship and for their ability to hunt vermin.
        </p>
        <button class="remove-button">[x]</button>
      </div>
    </div>

    <script>
      const container = document.querySelector("#container");
      container.addEventListener("click", function (e) {
        if (e.target.className !== "remove-button") return;
        container.removeChild(e.target.parentNode);
      });
    </script>
  </body>
</html>
```

**Example 3**

```html
<!doctype html>
<body>
  <div id="menu">
    <button data-action="save">저장하기</button>
    <button data-action="load">불러오기</button>
    <button data-action="search">검색하기</button>
  </div>

  <script>
    class MenuHandler {
      save() {
        alert("저장하기");
      }

      load() {
        alert("불러오기");
      }

      search() {
        alert("검색하기");
      }

      handleEvent(event) {
        switch (event.type) {
          case "click":
            const action = event.target.dataset.action;
            if (action) {
              this[action]();
            }
            break;
          default:
            break;
        }
      }
    }
    const menu = document.querySelector("#menu");
    const handler = new MenuHandler();
    menu.addEventListener("click", handler);
  </script>
</body>
```

**Example 4**

```html
<!doctype html>
<body>
  첫 번째 카운터:
  <input type="button" value="1" data-counter />
  두 번째 카운터:
  <input type="button" value="2" data-counter />

  <script>
    document.addEventListener("click", function (event) {
      if (event.target.dataset.counter != undefined) {
        event.target.value++;
      }
    });
  </script>
</body>
```

**Example 5**

```html
<!doctype html>
<body>
  <button data-toggle-id="subscribe-mail">구독 폼 보여주기</button>
  <form id="subscribe-mail" hidden>메일 주소: <input type="email" /></form>

  <script>
    document.addEventListener("click", function (event) {
      const id = event.target.dataset.toggleId;
      if (!id) return;
      const elem = document.getElementById(id);
      elem.hidden = !elem.hidden;
    });
  </script>
</body>
```

> 1. 공통 조상에 하나의 핸들러를 할당한다.
> 2. 핸들러 내에서 `event.target`를 사용해 이벤트가 발생한 요소가 어디인지 알아낸다.
> 3. 요소에 따라 다르게 이벤트를 처리한다.

<br/>

## 브라우저의 기본동작

> 참고: [Default Browser Action](https://ko.javascript.info/default-browser-action)

- 상당수의 이벤트는 발생 즉시 브라우저에 의해 특정 동작이 자동으로 실행된다.
  - 링크를 클릭하면 해당 URL로 이동한다.
  - 폼 전송 버튼을 클릭하면 서버에 폼이 전송된다.
  - 마우스 버튼을 누른 채로 글자 위에서 커서를 움직이면 글자가 선택된다.
- 하지만, 이런 브라우저 기본 동작 대신 자바스크립트를 이용해 직접 동작을 구현해야 하는 경우가 있다.
- 이벤트 객체의 메서드인 `event.preventDefault()` 를 사용하여 브라우저의 기본동작을 막을 수 있다.
- 또한, 이벤트 핸들러에서 `false`를 반환하는 방법도 있다. 하지만, 이 방법은 `on<event>` 속성을 통해 할당된 핸들러에서만 가능하다.
- 브라우저의 기본동작을 막은 경우, `event.defaultPrevented` 값이 `true`이고, 아니라면 `false`이다.
- `addEventListener` 메서드의 `passive: true` 옵션은 브라우저에게 기본동작을 막지 않을 것이라는 정보를 전달한다.
  - 모바일 기기에서는 사용자가 스크린에 손가락을 대고 움직일 때 발생하는 `touchmove`와 `touchstart` 이벤트가 있다. 이런 이벤트는 기본적으로 스크롤링을 발생시킨다.
  - 브라우저는 `preventDefault`가 어디에서도 호출되지 않았다고 판단되면, 그제서야 스크를링을 진행한다. 이 과정에서 불필요한 지연이 발생한다.
  - `passive: true` 옵션을 이용하면 브라우저는 자연스럽게 스크롤링을 발생시킬 것이다.
  - 몇몇 브라우저에서 `touchstart`와 `touchmove` 이벤트의 `passive`의 기본값은 `true`이다.
