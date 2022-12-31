---
emoji: 📱
title: 반응형 웹 만들기 (viewport와 media query)
date: "2022-06-16"
category: Web
preview: "요즘 PC뿐만 아니라 스마트폰, 태블릿 등 다양한 디스플레이를 통해서 웹사이트를 접속한다. 이러한 시대적 변화에 따라 접속하는 디스플레이 종류에 맞게 화면을 제공하는 웹사이트를 반응형 웹이라고 한다. viewportsms 사용자가 시각적으로 볼 수 있는 웹페이지 영역을 말한다. 컴퓨터나 휴대폰과 같은 장치에 요소가 표현되는 영역을 말한다.  Media Query는 미디어 매체에 따라 다른 스타일을 적용할 수 있게 한다. 둥일한 웹 페이지를 다양한 환경의 사용자들에게 최적화된 경험을 제공할 수 있게 해준다.👍 반응형 웹 사이트 제작에 반드시 필요한 기술이다!"
---

> 요즘 PC뿐만 아니라 스마트폰, 태블릿 등 다양한 디스플레이를 통해서 웹사이트를 접속한다. 이러한 시대적 변화에 따라 접속하는 **디스플레이 종류에 맞게 화면을 제공하는 웹사이트를 반응형 웹이라고 한다.**

<br/>

# viewport

- **사용자가 시각적으로 볼 수 있는 웹페이지 영역**을 말한다.
- 컴퓨터나 휴대폰과 같은 장치에 요소가 표현되는 영역을 말한다.

```html
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
```

- `width(height)` : 뷰포트의 가로(세로) 크기를 지정한다.
  - px 단위의 수치를 이용할 수 있지만, 대부분 특수 키워드인 `device-width(device-height)`를 사용한다.
  - `width=device-width` : 페이지 너비를 기기의 스크린 너비로 설정한다.
- `initial-scale` : 첫 페이지 로딩 시 화면 확대/축소 크기를 지정한다. (0 ~ 10 사이의 소수)
  - `initial-scale=1.0`: 첫 페이지 로딩 시 확대 및 축소되지 않은 원래 크기를 사용하도록 한다.
- `minimum-scale` : 화면을 축소할 수 있는 최소 크기를 지정한다. (0 ~ 10 사이의 소수)
- `maximum-scale` : 화면을 확대할 수 있는 최대 크기를 지정한다. (0 ~ 10 사이의 소수)
- `user-scalable` : 사용자가 화면을 확대 및 축소할 수 있는지 지정한다. (yes or no)

<br/>

# Media Query

- **미디어 매체에 따라 다른 스타일을 적용할 수 있게 한다.**
- 동일한 웹 페이지를 다양한 환경의 사용자들에게 최적화된 경험을 제공할 수 있게 해준다.👍
- 반응형 웹 사이트 제작에 반드시 필요한 기술이다!

`@media mediaqueries { /* style rules */}`

- 미디어 타입: **all**, braille, embossed, handheld, **print**, projection, **screen**, speech, tty, tv
  - 화면을 출력하는 디스플레이가 있는 미디어들은 대부분 `screen`에 속한다.
  - `print`: 인쇄
  - `all` : 모든 미디어 타입
- 미디어 특성 : **width**, height, device-width, device-height, **orientation**, aspect-ratio, device-aspect-ratio, color, color-index, monochrome, resolution, scan, grid
  - `width` : 뷰포트의 너비 (브라우저 창의 너비)
  - `orientation`: 세로모드 (portrait) / 가로모드 (landscape)

**Example**

```css
/* 미디어 타입이 screen이면 적용 */
@media screen {
  ...;
}

/* 미디어 타입이 screen이고 width가 768px 이상이면 적용. */
@media screen and (min-width: 768px) {
  ...;
}

/* width가 768px 이상이고 1024px 이하이면 적용
   and는 연결된 모든 표현식이 참이면 적용된다. */
@media (min-width: 768px) and (max-width: 1024px) {
  ...;
}

/* 미디어 장치가 color-index를 지원하면 적용 */
@media  (color-index) {
  ...;
}

/* 쉼표로 연결된 미디어 쿼리 중 하나라도 참이면 적용된다. */
@media screen and (min-width: 768px), screen and (orientation: portrait), ... {
  ...;
}

/* not 키워드는 하나의 media_query 전체를 부정합니다.  
  → not (screen and (min-width: 768px)) */
@media not screen and (min-width: 768px) {
  ...;
}

/* 첫 번째 미디어 쿼리에만 not 키워드가 적용되며, 
두 번째 미디어 쿼리(print)에는 영향이 없다. */
@media not screen and (min-width: 768px), print {
  ...;
}
```

<br/>

## 모바일과 데스크탑, 누가 먼저? 🤔

미디어 쿼리의 분기점으로 대부분 `width` 값을 사용하는데, 이때 `min`을 쓸지 `max`를 쓸지 고민될 때가 있다.

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

## ✨ 미디어 쿼리 쉽게 작성하기

### mixin (scss)

- `mixin`를 사용하면 미디어 쿼리를 유지보수하기 쉬워진다.
- 분기점을 변수로 만들고, `@content`로 내용이 비워져 있는 믹스인을 작성한다.

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

- `@include`로 불러와 믹스인을 사용한다.

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

- styled-components를 사용한다면 `ThemeProvider`를 이용하여 미디어 쿼리를 쉽게 작성할 수 있다.

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
// 사용방법
const Main = styled.main`
  display: flex;
  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
  }
`;
```
