---
emoji: π±
title: λ°μν μΉ λ§λ€κΈ° (viewportμ media query)
date: "2022-06-16"
category: Web
preview: "μμ¦ PCλΏλ§ μλλΌ μ€λ§νΈν°, νλΈλ¦Ώ λ± λ€μν λμ€νλ μ΄λ₯Ό ν΅ν΄μ μΉμ¬μ΄νΈλ₯Ό μ μνλ€. μ΄λ¬ν μλμ  λ³νμ λ°λΌ μ μνλ λμ€νλ μ΄ μ’λ₯μ λ§κ² νλ©΄μ μ κ³΅νλ μΉμ¬μ΄νΈλ₯Ό λ°μν μΉμ΄λΌκ³  νλ€. viewportsms μ¬μ©μκ° μκ°μ μΌλ‘ λ³Ό μ μλ μΉνμ΄μ§ μμ­μ λ§νλ€. μ»΄ν¨ν°λ ν΄λν°κ³Ό κ°μ μ₯μΉμ μμκ° ννλλ μμ­μ λ§νλ€.  Media Queryλ λ―Έλμ΄ λ§€μ²΄μ λ°λΌ λ€λ₯Έ μ€νμΌμ μ μ©ν  μ μκ² νλ€. λ₯μΌν μΉ νμ΄μ§λ₯Ό λ€μν νκ²½μ μ¬μ©μλ€μκ² μ΅μ νλ κ²½νμ μ κ³΅ν  μ μκ² ν΄μ€λ€.π λ°μν μΉ μ¬μ΄νΈ μ μμ λ°λμ νμν κΈ°μ μ΄λ€!"
---

> μμ¦ PCλΏλ§ μλλΌ μ€λ§νΈν°, νλΈλ¦Ώ λ± λ€μν λμ€νλ μ΄λ₯Ό ν΅ν΄μ μΉμ¬μ΄νΈλ₯Ό μ μνλ€. μ΄λ¬ν μλμ  λ³νμ λ°λΌ μ μνλ **λμ€νλ μ΄ μ’λ₯μ λ§κ² νλ©΄μ μ κ³΅νλ μΉμ¬μ΄νΈλ₯Ό λ°μν μΉμ΄λΌκ³  νλ€.**

<br/>

# viewport

- **μ¬μ©μκ° μκ°μ μΌλ‘ λ³Ό μ μλ μΉνμ΄μ§ μμ­**μ λ§νλ€.
- μ»΄ν¨ν°λ ν΄λν°κ³Ό κ°μ μ₯μΉμ μμκ° ννλλ μμ­μ λ§νλ€.

```html
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
```

- `width(height)` : λ·°ν¬νΈμ κ°λ‘(μΈλ‘) ν¬κΈ°λ₯Ό μ§μ νλ€.
  - px λ¨μμ μμΉλ₯Ό μ΄μ©ν  μ μμ§λ§, λλΆλΆ νΉμ ν€μλμΈ `device-width(device-height)`λ₯Ό μ¬μ©νλ€.
  - `width=device-width` : νμ΄μ§ λλΉλ₯Ό κΈ°κΈ°μ μ€ν¬λ¦° λλΉλ‘ μ€μ νλ€.
- `initial-scale` : μ²« νμ΄μ§ λ‘λ© μ νλ©΄ νλ/μΆμ ν¬κΈ°λ₯Ό μ§μ νλ€. (0 ~ 10 μ¬μ΄μ μμ)
  - `initial-scale=1.0`: μ²« νμ΄μ§ λ‘λ© μ νλ λ° μΆμλμ§ μμ μλ ν¬κΈ°λ₯Ό μ¬μ©νλλ‘ νλ€.
- `minimum-scale` : νλ©΄μ μΆμν  μ μλ μ΅μ ν¬κΈ°λ₯Ό μ§μ νλ€. (0 ~ 10 μ¬μ΄μ μμ)
- `maximum-scale` : νλ©΄μ νλν  μ μλ μ΅λ ν¬κΈ°λ₯Ό μ§μ νλ€. (0 ~ 10 μ¬μ΄μ μμ)
- `user-scalable` : μ¬μ©μκ° νλ©΄μ νλ λ° μΆμν  μ μλμ§ μ§μ νλ€. (yes or no)

<br/>

# Media Query

- **λ―Έλμ΄ λ§€μ²΄μ λ°λΌ λ€λ₯Έ μ€νμΌμ μ μ©ν  μ μκ² νλ€.**
- λμΌν μΉ νμ΄μ§λ₯Ό λ€μν νκ²½μ μ¬μ©μλ€μκ² μ΅μ νλ κ²½νμ μ κ³΅ν  μ μκ² ν΄μ€λ€.π
- λ°μν μΉ μ¬μ΄νΈ μ μμ λ°λμ νμν κΈ°μ μ΄λ€!

`@media mediaqueries { /* style rules */}`

- λ―Έλμ΄ νμ: **all**, braille, embossed, handheld,Β **print**, projection,Β **screen**, speech, tty, tv
  - νλ©΄μ μΆλ ₯νλ λμ€νλ μ΄κ° μλ λ―Έλμ΄λ€μ λλΆλΆ `screen`μ μνλ€.
  - `print`: μΈμ
  - `all` : λͺ¨λ  λ―Έλμ΄ νμ
- λ―Έλμ΄ νΉμ± : **width**, height, device-width, device-height, **orientation**, aspect-ratio, device-aspect-ratio, color, color-index, monochrome, resolution, scan, grid
  - `width` : λ·°ν¬νΈμ λλΉ (λΈλΌμ°μ  μ°½μ λλΉ)
  - `orientation`: μΈλ‘λͺ¨λ (portrait) / κ°λ‘λͺ¨λ (landscape)

**Example**

```css
/* λ―Έλμ΄ νμμ΄ screenμ΄λ©΄ μ μ© */
@media screen {
  ...;
}

/* λ―Έλμ΄ νμμ΄ screenμ΄κ³  widthκ° 768px μ΄μμ΄λ©΄ μ μ©. */
@media screen and (min-width: 768px) {
  ...;
}

/* widthκ° 768px μ΄μμ΄κ³  1024px μ΄νμ΄λ©΄ μ μ©
   andλ μ°κ²°λ λͺ¨λ  ννμμ΄ μ°Έμ΄λ©΄ μ μ©λλ€. */
@media (min-width: 768px) and (max-width: 1024px) {
  ...;
}

/* λ―Έλμ΄ μ₯μΉκ° color-indexλ₯Ό μ§μνλ©΄ μ μ© */
@mediaΒ  (color-index) {
  ...;
}

/* μΌνλ‘ μ°κ²°λ λ―Έλμ΄ μΏΌλ¦¬ μ€ νλλΌλ μ°Έμ΄λ©΄ μ μ©λλ€. */
@media screen and (min-width: 768px), screen and (orientation: portrait), ... {
  ...;
}

/* not ν€μλλ νλμ media_query μ μ²΄λ₯Ό λΆμ ν©λλ€.Β Β 
  β not (screen and (min-width: 768px)) */
@mediaΒ notΒ screen and (min-width: 768px) {
  ...;
}

/* μ²« λ²μ§Έ λ―Έλμ΄ μΏΌλ¦¬μλ§ not ν€μλκ° μ μ©λλ©°, 
λ λ²μ§Έ λ―Έλμ΄ μΏΌλ¦¬(print)μλ μν₯μ΄ μλ€. */
@media not screen and (min-width: 768px), print {
  ...;
}
```

<br/>

## λͺ¨λ°μΌκ³Ό λ°μ€ν¬ν, λκ° λ¨Όμ ? π€

λ―Έλμ΄ μΏΌλ¦¬μ λΆκΈ°μ μΌλ‘ λλΆλΆ `width` κ°μ μ¬μ©νλλ°, μ΄λ `min`μ μΈμ§ `max`λ₯Ό μΈμ§ κ³ λ―Όλ  λκ° μλ€.

**Mobile First**

```css
.title {
  font-size: 12px;
}

@media (min-width: 640px) {
  .title {
    font-size: 14px;
  }
}

@media (min-width: 768px) {
  .title {
    font-size: 16px;
  }
}

@media (min-width: 1024px) {
  .title {
    font-size: 18px;
  }
}
```

**Desktop First**

```css
.title {
  font-size: 18px;
}

@media (max-width: 1023px) {
  .title {
    font-size: 16px;
  }
}

@media (max-width: 767px) {
  .title {
    font-size: 14px;
  }
}

@media (max-width: 639px) {
  .title {
    font-size: 12px;
  }
}
```

<br/>

## β¨ λ―Έλμ΄ μΏΌλ¦¬ μ½κ² μμ±νκΈ°

### mixin (scss)

- `mixin`λ₯Ό μ¬μ©νλ©΄ λ―Έλμ΄ μΏΌλ¦¬λ₯Ό μ μ§λ³΄μνκΈ° μ¬μμ§λ€.
- λΆκΈ°μ μ λ³μλ‘ λ§λ€κ³ , `@content`λ‘ λ΄μ©μ΄ λΉμμ Έ μλ λ―Ήμ€μΈμ μμ±νλ€.

```scss
// Break Point
$tablet: 768px;
$laptop: 1020px;
$desktop: 1400px;

// Mixins
// Mobile First
@mixin tablet {
  @media (min-width: #{$tablet}) {
    @content;
  }
}

@mixin laptop {
  @media (min-width: #{$laptop}) {
    @content;
  }
}

@mixin desktop {
  @media (min-width: #{$desktop}) {
    @content;
  }
}
```

- `@include`λ‘ λΆλ¬μ λ―Ήμ€μΈμ μ¬μ©νλ€.

```scss
@import ... .logo {
  width: 20px;

  @include desktop {
    width: 40px;
  }
}
```

<br/>

### theme (styled-components)

- styled-componentsλ₯Ό μ¬μ©νλ€λ©΄ `ThemeProvider`λ₯Ό μ΄μ©νμ¬ λ―Έλμ΄ μΏΌλ¦¬λ₯Ό μ½κ² μμ±ν  μ μλ€.

```javascript
// Break Point
const deviceSizes = {
  mobile: "400px",
  tablet: "820px",
  laptop: "900px"
};

// Desktop First
const device = {
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
  laptop: `screen and (max-width: ${deviceSizes.laptop})`
};

const theme = {
  device
};

export default theme;
```

```jsx
// src/App.js

import theme from ...;

function App(){
	return (
    	<ThemeProvider theme={theme}>
        //...
        </ThemeProvider>
    )
}
```

```jsx
// μ¬μ©λ°©λ²
const Main = styled.main`
  display: flex;
  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
  }
`;
```
