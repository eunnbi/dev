---
emoji: πΈ
title: λΈλΌμ°μ  μ΄λ²€νΈ
date: "2022-01-06"
category: Web
preview: "μ΄λ²€νΈλ? μ΄λ€ νμλ μ¬κ±΄(μΌ)μ΄ μΌμ΄λ¬λ€λ μ νΈ λ§μ°μ€ μ΄λ²€νΈ νΌ μμ μ΄λ²€νΈ ν€λ³΄λ μ΄λ²€νΈ λ¬Έμ μ΄λ²€νΈ css μ΄λ²€νΈ μ΄λ²€νΈ νΈλ€λ¬ μ΄λ²€νΈμ λ°μνλ €λ©΄ μ΄λ²€νΈκ° λ°μνμ λ μ€ννλ ν¨μμΈ νΈλ€λ¬λ₯Ό ν λΉν΄μΌ νλ€. νΈλ€λ¬λ μ¬λ¬ κ°μ§ λ°©λ²μΌλ‘ ν λΉν  μ μλ€. μ΄λ²€νΈ κ°μ²΄ μ΄λ²€νΈλ₯Ό μ λλ‘ λ€λ£¨κΈ° μν΄μλ μ΄λ€ μΌμ΄ λ°μνλμ§ μμΈν μμμΌ νλ€. click μ΄λ²€νΈκ° λ°μνλ€λ©΄ λ§μ°μ€ ν¬μΈν°κ° μ΄λμ μλμ§ keydown μ΄λ²€νΈκ° λ°μνλ€λ©΄ μ΄λ€ ν€κ° λλ Έλμ§ μ΄λ²€νΈκ° λ°μνλ©΄ λΈλΌμ°μ λ μ΄λ²€νΈ κ°μ²΄ (event object)λ₯Ό λ§λ λ€. μ΄λ²€νΈ κ°μ²΄μλ μ΄λ²€νΈμ κ΄ν μμΈν μ λ³΄κ° μκ³ , μ΄λ²€νΈ νΈλ€λ¬μ μΈμ ννλ‘ μ λ¬νλ€."
---

## μ΄λ²€νΈλ?

- μ΄λ€ νμλ μ¬κ±΄(μΌ)μ΄ μΌμ΄λ¬λ€λ μ νΈ
- λ§μ°μ€ μ΄λ²€νΈ
  - `click` : μμ μμμ λ§μ°μ€ μΌμͺ½ λ²νΌμ λλ μ λ λ°μνλ€.
  - `contextMenu` : μμ μμμ λ§μ°μ€ μ€λ₯Έμͺ½ λ²νΌμ λλ μ λ λ°μνλ€.
  - `mouseover`μ `mouseout`: λ§μ°μ€ μ»€μλ₯Ό μμ μλ‘ μμ§μ΄κ±°λ μ»€μλ μμ λ°μΌλ‘ μμ§μμ λ λ°μνλ€.
  - `mousedown`κ³Ό `mouseup`: μμ μμμ λ§μ°μ€ μΌμͺ½ λ²νΌμ λλ₯΄κ³  μκ±°λ λ§μ°μ€ λ²νΌμ ν λ λ°μνλ€.
  - `mousemove` : λ§μ°μ€λ₯Ό μμ§μΌ λ λ°μνλ€.
- νΌ μμ μ΄λ²€νΈ
  - `submit` : μ¬μ©μκ° formμ μ μΆν  λ λ°μνλ€.
  - `focus` : μ¬μ©μκ° inputκ³Ό κ°μ μμμ ν¬μ»€μ€ν  λ λ°μνλ€.
- ν€λ³΄λ μ΄λ²€νΈ
  - `keydown`, `keyup`: μ¬μ©μκ° ν€λ³΄λ λ²νΌμ λλ₯΄κ±°λ λ λ λ°μνλ€.
- λ¬Έμ μ΄λ²€νΈ
  - `DOMContentLoaded`: HTMLμ΄ μ λΆ λ‘λ λ° μ²λ¦¬λμ΄ DOMμ μμ±μ΄ μλ£λμμ λ λ°μ
- css μ΄λ²€νΈ
  - `trasitionend` : css μ λλ©μ΄μμ΄ μ’λ£λμμ λ λ°μ

<br/>

## μ΄λ²€νΈ νΈλ€λ¬

- μ΄λ²€νΈμ λ°μνλ €λ©΄ μ΄λ²€νΈκ° λ°μνμ λ μ€ννλ ν¨μμΈ νΈλ€λ¬λ₯Ό ν λΉν΄μΌ νλ€.
- νΈλ€λ¬λ μ¬λ¬ κ°μ§ λ°©λ²μΌλ‘ ν λΉν  μ μλ€.

**HTML μμμ `on<event>`μμ±**

```html
<input value="ν΄λ¦­ν΄ μ£ΌμΈμ." onclick="alert('ν΄λ¦­!')" type="button" />
```

**DOM νλ‘νΌν° `on<event>`**

```html
<input id="elem" type="button" value="ν΄λ¦­ν΄ μ£ΌμΈμ." />
<script>
  elem.onclick = function () {
    alert("κ°μ¬ν©λλ€.");
  };
</script>
```

- `onclick` νλ‘νΌν°μ μμ±μ νλλ°μ μκΈ° λλ¬Έμ νλμ μ΄λ²€νΈμ λν΄ λ³΅μμ νΈλ€λ¬λ₯Ό ν λΉν  μ μλ€.

**target.addEventListener(type, listener)**

- νΉμ  μ΄λ²€νΈκ° targetμ μ λ¬λ  λλ§λ€ νΈμΆν  μ½λ°±ν¨μλ₯Ό μ§μ νλ€.
- μμ  λ κ°μ§ λ°©λ²κ³Ό λ¬λ¦¬ νλμ μ΄λ²€νΈμ λν΄ λ³΅μμ νΈλ€λ¬λ₯Ό ν λΉν  μ μλ€.
- μ΄λ€ μ΄λ²€νΈλ `addEventListener` λ©μλλ₯Ό μ¨μ¬μΌλ§ νΈλ€λ¬ ν λΉμ΄ κ°λ₯νλ€. (ex. `DOMContentLoaded`)
- `type`: μ²« λ²μ§Έ μΈμλ‘λ λ°μν  μ΄λ²€νΈ μ νμ λ¬Έμμ΄ ννλ‘ μ λ¬νλ€. (`click`, `input`, `change` λ±)
- `listener`: λ λ²μ§Έ μΈμλ‘λ ν΄λΉ `target`μκ² μ΄λ²€νΈκ° λ°μνμ λ νΈμΆν  ν¨μλ₯Ό μ λ¬νλ€. (react to the event)

**target.removeEventListener(type, listener)**

- νΈλ€λ¬λ₯Ό μ­μ νλ €λ©΄ νΈλ€λ¬ ν λΉ μ μ¬μ©ν ν¨μλ₯Ό λλ²μ§Έ μΈμλ‘ κ·Έλλ‘ μ λ¬ν΄μΌ νλ€.

```js
// BAD
elem.addEventListener("click", () => alert("κ°μ¬ν©λλ€!"));
elem.removeEventListener("click", () => alert("κ°μ¬ν©λλ€!"));
```

```js
// GOOD
function handler() {
  alert("κ°μ¬ν©λλ€!");
}
input.addEventListener("click", handler);
input.removeEventListener("click", handler);
```

> **κ°μ²΄ ννμ μ΄λ²€νΈ νΈλ€λ¬**
>
> - `addEventListener` λ©μλλ₯Ό μ¬μ©νλ©΄ ν¨μλΏλ§ μλλΌ κ°μ²΄λ₯Ό μ΄λ²€νΈ νΈλ€λ¬λ‘ ν λΉν  μ μλλ°, μ΄λ²€νΈκ° λ°μνλ©΄ κ°μ²΄μ `handleEvent` λ©μλλ₯Ό νΈμΆνλ€.
>
> ```js
> class Menu {
>   handleEvent(event) {
>     switch (event.type) {
>       case "mousedown":
>         elem.innerHTML = "λ§μ°μ€ λ²νΌμ λλ μ΅λλ€.";
>         break;
>       case "mouseup":
>         elem.innerHTML += " κ·Έλ¦¬κ³  λ²νΌμ λμ΅λλ€.";
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

## μ΄λ²€νΈ κ°μ²΄

- μ΄λ²€νΈλ₯Ό μ λλ‘ λ€λ£¨κΈ° μν΄μλ μ΄λ€ μΌμ΄ λ°μνλμ§ μμΈν μμμΌ νλ€.
  - `click` μ΄λ²€νΈκ° λ°μνλ€λ©΄ λ§μ°μ€ ν¬μΈν°κ° μ΄λμ μλμ§
  - `keydown` μ΄λ²€νΈκ° λ°μνλ€λ©΄ μ΄λ€ ν€κ° λλ Έλμ§
- μ΄λ²€νΈκ° λ°μνλ©΄ λΈλΌμ°μ λ **μ΄λ²€νΈ κ°μ²΄** (event object)λ₯Ό λ§λ λ€.
  - μ΄λ²€νΈ κ°μ²΄μλ μ΄λ²€νΈμ κ΄ν μμΈν μ λ³΄κ° μκ³ , μ΄λ²€νΈ νΈλ€λ¬μ μΈμ ννλ‘ μ λ¬νλ€.
  - `event.type`: μ΄λ²€νΈ νμ (`click`, `change` λ±)
  - `event.currentTarget` : μ΄λ²€νΈλ₯Ό μ²λ¦¬νλ μμ, μ€ν μ€μΈ νΈλ€λ¬κ° ν λΉλ μμ

> μ°Έκ³ : [Introduction of Browser Events](https://ko.javascript.info/introduction-browser-events)

<br/>

## μ΄λ²€νΈ λ²λΈλ§

- **ν μμμ μ΄λ²€νΈκ° λ°μνλ©΄, μ΄ μμμ ν λΉλ μ΄λ²€νΈ νΈλ€λ¬κ° λμνκ³ , μ΄μ΄μ λΆλͺ¨ μμμ ν΄λΉ μ΄λ²€νΈμ λν νΈλ€λ¬κ° λμνλ€. κ°μ₯ μμμ μ‘°μ μμλ₯Ό λ§λ  λκΉμ§ μ΄ κ³Όμ μ΄ λ°λ³΅λλ€.**

```html
<form onclick="alert('form')">
  FORM
  <div onclick="alert('div')">
    DIV
    <p onclick="alert('p')">P</p>
  </div>
</form>
```

`p` μμλ₯Ό ν΄λ¦­νλ©΄...

1. `p` μμμ ν λΉλ `onclick` νΈλ€λ¬κ° λμνλ€.
2. `div` μμμ ν λΉλ νΈλ€λ¬κ° λμνλ€.
3. `form` μμμ ν λΉλ νΈλ€λ¬κ° λμνλ€.

- μ¦, `p` μμλ₯Ό ν΄λ¦­νλ©΄ `p`, `div`, `form` μμλ‘ 3κ°μ alert μ°½μ΄ λ¬λ€.
- λͺ¨λ  μ΄λ²€νΈκ° λ²λΈλ§λλ κ²μ μλλ€. `focus` μ΄λ²€νΈμ κ°μ΄ λ²λΈλ§λμ§ μμ μ΄λ²€νΈλ μμ§λ§, κ±°μ λͺ¨λ  μ΄λ²€νΈκ° λ²λΈλ§λλ€.

### event.target

- λΆλͺ¨ μμμ νΈλ€λ¬λ μ΄λ²€νΈκ° μ νν μ΄λμ λ°μνλμ§ λ±μ λν μ λ³΄λ₯Ό μ΄λ²€νΈ κ°μ²΄μ `target` νλ‘νΌν°λ₯Ό ν΅ν΄ μ»μ μ μλ€.
- μ΄λ²€νΈκ° λ°μν κ°μ₯ μμͺ½μ μμλ₯Ό `target`μ΄λΌκ³  λΆλ¦¬κ³ , μ΄λ²€νΈ κ°μ²΄μ `target` μμ±μΌλ‘ μ κ·Όν  μ μλ€.
- λ²λΈλ§μ΄ μ§νλμ΄λ `event.target`μ λ³νμ§ μλλ€.
- cf) `event.currentTarget`: μ€ν μ€μΈ νΈλ€λ¬κ° ν λΉλ μμλ₯Ό μ°Έμ‘°νλ€.

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
// formμ ν΄λ¦­νμ λ: target - FORM, currentTarget - FORM
// divλ₯Ό ν΄λ¦­νμ λ: target - DIV, currentTarget - FORM
// pλ₯Ό ν΄λ¦­νμ λ: target - P, currentTarget - FORM
```

### λ²λΈλ§ μ€λ¨νκΈ°

- μ΄λ²€νΈ κ°μ²΄μ λ©μλμΈ `event.stopPropagation()`μ μ¬μ©νλ©΄ λλ€.

<br/>

## μ΄λ²€νΈ μΊ‘μ²λ§

> **νμ€ DOM μ΄λ²€νΈμμ μ μν μ΄λ²€νΈ νλ¦**
>
> 1. μΊ‘μ²λ§ λ¨κ³: μ΄λ²€νΈκ° νμ μμλ‘ μ νλλ λ¨κ³
> 2. νκΉ λ¨κ³: μ΄λ²€νΈκ° μ€μ  νκΉ μμμ μ λ¬λλ λ¨κ³
> 3. λ²λΈλ§ λ¨κ³: μ΄λ²€νΈκ° μμ μμλ‘ μ νλλ λ¨κ³

- μ΄λ²€νΈ μΊ‘μ²λ§μ **μ΄λ²€νΈκ° μ΅μμ μ‘°μμμ μμν΄ μ€μ  νκΉ μμκΉμ§ μ νλλ κ²**μ λ§νλ€.
- `on<event>`νλ‘νΌν°λ HTML μμ±, `addEventListener` λ©μλλ₯Ό μ΄μ©ν΄ ν λΉλ νΈλ€λ¬λ μΊ‘μ²λ§μ λν΄ μ ν μ μ μλ€. λ λ²μ§Έ νΉμ μΈλ²μ§Έ λ¨κ³μ μ΄λ²€νΈ νλ¦μ λν΄μλ§ λμνλ€.
- μΊ‘μ²λ§ λ¨κ³μμ μ΄λ²€νΈλ₯Ό μ‘μλ΄λ €λ¨Ό `addEventListener` λ©μλμ `capture` μ΅μμ `true`λ‘ μ€μ ν΄μΌ νλ€.

```js
elem.addEventListener(..., {capture: true});
// false (default): νΈλ€λ¬λ νκΉ λ¨κ³μ λ²λΈλ§ λ¨κ³μμ λμ
// true: νΈλ€λ¬λ μΊ‘μ²λ§ λ¨κ³μ νκΉ λ¨κ³μμ λμ
```

**Example**

```html
<!DOCTYPE html>
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
        e => alert(`μΊ‘μ³λ§: ${elem.tagName}`),
        true
      );
      elem.addEventListener("click", e => alert(`λ²λΈλ§: ${elem.tagName}`));
    }
  </script>
</body>
```

`p` μμλ₯Ό ν΄λ¦­νλ©΄...

1.  μΊ‘μ²λ§ λ¨κ³ (μ²«λ²μ§Έ λ¦¬μ€λ): `HTML` -> `BODY` -> `FORM` -> `DIV`
2.  νκΉ λ¨κ³: `P` (μ²«λ²μ§Έ λ¦¬μ€λμ νκΉ λ¨κ³μ λλ²μ§Έ λ¦¬μ€λμ νκΉ λ¨κ³, μ΄ λ λ²)
3.  λ²λΈλ§ λ¨κ³ (λλ²μ§Έ λ¦¬μ€λ): `DIV` -> `FORM` -> `BODY` -> `HTML`

- `event.eventPhase` : νμ¬ μ΄λ²€νΈ νλ¦ λ¨κ³ (μΊ‘μ²λ§ = 1, νκΉ = 2, λ²λΈλ§ = 3)

> μ°Έκ³ : [Event Bubbling and Capturing](https://ko.javascript.info/bubbling-and-capturing)

<br/>

## μ΄λ²€νΈ μμ

> μ°Έκ³ : [Event Delegation](https://ko.javascript.info/event-delegation)

- μΊ‘μ²λ§κ³Ό λ²λΈλ§μ νμ©νλ©΄ μ΄λ²€νΈ νΈλ€λ§ ν¨ν΄μΈ μ΄λ²€νΈ μμ(event delegation)μ κ΅¬νν  μ μλ€.
- μ΄λ²€νΈ μμμ μ¬μ©νλ©΄ **μμλ§λ€ νΈλ€λ¬λ₯Ό ν λΉνμ§ μκ³ , μμμ κ³΅ν΅ μ‘°μμ μ΄λ²€νΈ νΈλ€λ¬λ₯Ό λ¨ νλλ§ ν λΉν΄λ μ¬λ¬ μμμ λν μ΄λ²€νΈλ₯Ό νκΊΌλ²μ λ€λ£° μ μλ€.**
  - κ³΅ν΅ μ‘°μμ ν λΉν νΈλ€λ¬μμ `event.target`λ₯Ό μ΄μ©νλ©΄ μ€μ  μ΄λ μμμμ μ΄λ²€νΈκ° λ°μνλμ§ μ μ μκΈ° λλ¬Έμ΄λ€.
- λ§μ νΈλ€λ¬λ₯Ό ν λΉνμ§ μμλ λκΈ° λλ¬Έμ μ½λκ° κ°κ²°ν΄μ§κ³ , λ©λͺ¨λ¦¬κ° μ μ½λλ€.
- νμ§λ§, μ΄λ²€νΈ μμμ κ΅¬ννκΈ° μν΄μλ μ΄λ²€νΈκ° λ°λμ λ²λΈλ§λμ΄μΌ νλ€.
  - νμ§λ§, λͺ¨λ  μ΄λ²€νΈκ° λ²λΈλ§ λλ κ²μ μλλ€.
  - `event.stopPropagation()`μ μ¬μ©νλλ° μ μν΄μΌ νλ€.

**Example 1**

```html
<!DOCTYPE html>
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
          // this === event.currentTarget (νμ΄ν ν¨μ X)
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
<!DOCTYPE html>
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
<!DOCTYPE html>
<body>
  <div id="menu">
    <button data-action="save">μ μ₯νκΈ°</button>
    <button data-action="load">λΆλ¬μ€κΈ°</button>
    <button data-action="search">κ²μνκΈ°</button>
  </div>

  <script>
    class MenuHandler {
      save() {
        alert("μ μ₯νκΈ°");
      }

      load() {
        alert("λΆλ¬μ€κΈ°");
      }

      search() {
        alert("κ²μνκΈ°");
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
<!DOCTYPE html>
<body>
  μ²« λ²μ§Έ μΉ΄μ΄ν°:
  <input type="button" value="1" data-counter />
  λ λ²μ§Έ μΉ΄μ΄ν°:
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
<!DOCTYPE html>
<body>
  <button data-toggle-id="subscribe-mail">κ΅¬λ νΌ λ³΄μ¬μ£ΌκΈ°</button>
  <form id="subscribe-mail" hidden>λ©μΌ μ£Όμ: <input type="email" /></form>

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

> 1. κ³΅ν΅ μ‘°μμ νλμ νΈλ€λ¬λ₯Ό ν λΉνλ€.
> 2. νΈλ€λ¬ λ΄μμ `event.target`λ₯Ό μ¬μ©ν΄ μ΄λ²€νΈκ° λ°μν μμκ° μ΄λμΈμ§ μμλΈλ€.
> 3. μμμ λ°λΌ λ€λ₯΄κ² μ΄λ²€νΈλ₯Ό μ²λ¦¬νλ€.

<br/>

## λΈλΌμ°μ μ κΈ°λ³Έλμ

> μ°Έκ³ : [Default Browser Action](https://ko.javascript.info/default-browser-action)

- μλΉμμ μ΄λ²€νΈλ λ°μ μ¦μ λΈλΌμ°μ μ μν΄ νΉμ  λμμ΄ μλμΌλ‘ μ€νλλ€.
  - λ§ν¬λ₯Ό ν΄λ¦­νλ©΄ ν΄λΉ URLλ‘ μ΄λνλ€.
  - νΌ μ μ‘ λ²νΌμ ν΄λ¦­νλ©΄ μλ²μ νΌμ΄ μ μ‘λλ€.
  - λ§μ°μ€ λ²νΌμ λλ₯Έ μ±λ‘ κΈμ μμμ μ»€μλ₯Ό μμ§μ΄λ©΄ κΈμκ° μ νλλ€.
- νμ§λ§, μ΄λ° λΈλΌμ°μ  κΈ°λ³Έ λμ λμ  μλ°μ€ν¬λ¦½νΈλ₯Ό μ΄μ©ν΄ μ§μ  λμμ κ΅¬νν΄μΌ νλ κ²½μ°κ° μλ€.
- μ΄λ²€νΈ κ°μ²΄μ λ©μλμΈ `event.preventDefault()` λ₯Ό μ¬μ©νμ¬ λΈλΌμ°μ μ κΈ°λ³Έλμμ λ§μ μ μλ€.
- λν, μ΄λ²€νΈ νΈλ€λ¬μμ `false`λ₯Ό λ°ννλ λ°©λ²λ μλ€. νμ§λ§, μ΄ λ°©λ²μ `on<event>` μμ±μ ν΅ν΄ ν λΉλ νΈλ€λ¬μμλ§ κ°λ₯νλ€.
- λΈλΌμ°μ μ κΈ°λ³Έλμμ λ§μ κ²½μ°, `event.defaultPrevented` κ°μ΄ `true`μ΄κ³ , μλλΌλ©΄ `false`μ΄λ€.
- `addEventListener` λ©μλμ `passive: true` μ΅μμ λΈλΌμ°μ μκ² κΈ°λ³Έλμμ λ§μ§ μμ κ²μ΄λΌλ μ λ³΄λ₯Ό μ λ¬νλ€.
  - λͺ¨λ°μΌ κΈ°κΈ°μμλ μ¬μ©μκ° μ€ν¬λ¦°μ μκ°λ½μ λκ³  μμ§μΌ λ λ°μνλ `touchmove`μ `touchstart` μ΄λ²€νΈκ° μλ€. μ΄λ° μ΄λ²€νΈλ κΈ°λ³Έμ μΌλ‘ μ€ν¬λ‘€λ§μ λ°μμν¨λ€.
  - λΈλΌμ°μ λ `preventDefault`κ° μ΄λμμλ νΈμΆλμ§ μμλ€κ³  νλ¨λλ©΄, κ·Έμ μμΌ μ€ν¬λ₯Όλ§μ μ§ννλ€. μ΄ κ³Όμ μμ λΆνμν μ§μ°μ΄ λ°μνλ€.
  - `passive: true` μ΅μμ μ΄μ©νλ©΄ λΈλΌμ°μ λ μμ°μ€λ½κ² μ€ν¬λ‘€λ§μ λ°μμν¬ κ²μ΄λ€.
  - λͺλͺ λΈλΌμ°μ μμ `touchstart`μ `touchmove` μ΄λ²€νΈμ `passive`μ κΈ°λ³Έκ°μ `true`μ΄λ€.
