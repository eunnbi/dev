---
emoji: 🖼️
title: 이미지 최적화
date: "2022-06-19"
category: Nextjs
preview: "Image 컴포넌트는 img 태그의 확장이다. 공식문서에 따르면, 우수한 Core Web Vitals를 달성하기 위해 Image 컴포넌트에 기본으로 최적화 기능이 포함되어 있다. 이때 Core Web Vitals은 사용자 경험을 측정하는 중요한 척도이고, Google 검색 순위에 반영이 된다. lazy loading은 이미지를 로드하는 시점을 필요할 때까지 지연시키는 기술을 말한다. 스크린 밖에 있는 이미지들은 로딩을 지연시키고, 화면에 보이는 이미지만 로드하여 페이지 로드 속도를 개선할 수 있다. next/image를 사용하면 자동으로 lazy loading이 적용된다."
---

> NextJS에서 `Image` 컴포넌트를 제공하는 것을 모르고 `img` 태그를 썼는데 아래와 같이 배포 로깅에서 warning 메시지를 발견했다. 그래서 `img` 태그를 `Image` 컴포넌트로 바꾸었고 그 과정에서 공부한 내용들을 정리해보려고 한다.
> ![](1.png)

> **👀 NextJS 공식문서**
>
> - [API reference - next/image](https://nextjs.org/docs/api-reference/next/image)
> - [Image Optimization](https://nextjs.org/docs/basic-features/image-optimization)

<br/>

# 왜 Image 컴포넌트를 사용해야 할까? 🤔

Image 컴포넌트는 img 태그의 확장이다. 공식문서에 따르면, 우수한 Core Web Vitals를 달성하기 위해 Image 컴포넌트에 **기본으로 최적화 기능이 포함**되어 있다. 이때 [Core Web Vitals](https://nextjs.org/learn/seo/web-performance)은 **사용자 경험을 측정하는 중요한 척도**이고, Google 검색 순위에 반영이 된다.

<br/>

## 대표적인 기능

### lazy loading

- 이미지를 로드하는 시점을 필요할 때까지 지연시키는 기술을 말한다.
- 스크린 밖에 있는 이미지들은 로딩을 지연시키고, 화면에 보이는 이미지만 로드하여 페이지 로드 속도를 개선할 수 있다.
- lazy loading을 구현하기 위해서는 Intersection Observer나 scroll 이벤트를 사용해 뷰포트에 element가 보일 때 이미지를 로드하도록 구현해야 한다.
- 혹은 img 태그에 `loading="lazy"` 속성을 추가한다.
- 하지만, next/image를 사용하면 자동으로 lazy loading이 적용된다.
- 만약 lazy loading이 필요없을 때는 priority prop를 true로 설정하면 된다.

### 이미지 사이즈 최적화

- next/image는 디바이스 크기별로 srcSet을 미리 지정해두고, 사용자의 디바이스에 맞는 이미지를 로드할 수 있게 지원한다.
- 그리고, 이미지를 webp와 같은 용량이 작은 포맷으로 이미지를 변환해서 제공한다.
- 디바이스에 맞는 크기의 이미지를 제공하고, webp 포맷으로 변경되어, 로드되는 이미지 용량을 줄일 수 있다.

### placeholder 제공

- 이미지 로드되기 전까지 이미지가 들어가는 영역의 높이가 0이었다가 이미지가 로드된 후 영역의 높이가 늘어나 레이아웃이 흔들리는 경우가 많다.
- 레이아웃이 흔들리는 현상을 방지하기 위해 placeholder를 제공한다.
- 이미지 로드되기 전 이미지 크기만큼의 대체 이미지를 보여줌으로써 이미지가 로드된 후에 레이아웃이 흔들리지 않도록 한다.

> **Image 컴포넌트의 장점** 👍
>
> - **Improved Performance** : webp와 같은 작은 용량의 이미지 형식을 사용하여 디바이스 사이즈에 맞게 최적화된 이미지를 제공한다.
> - **Visual Stability** : 이미지 로드 전 placeholder를 제공하여 [Cumulative Layout Shift (CLS)](https://nextjs.org/learn/seo/web-performance/cls)를 방지할 수 있다.
> - **Faster Page Loads** : lazy loading이 자동으로 적용되어 초기 페이지 로드 속도가 빠르다.
> - **Asset Flexibility** : 외부에 저장되어 있는 이미지까지도 리사이징이 가능하다.

<br/>

> Image 컴포넌트를 사용하면 img 태그를 사용했을 때보다 사용자 경험이 향상이 되고 기본으로 최적화 기능을 제공하니 img 태그 대신 Image 컴포넌트를 사용하기로 결정했다.

# 🖼️ Image 컴포넌트 사용하기 (Next.js 13 기준)

## Required Props

### src

1. 정적으로 불러온 이미지 파일
2. 외부 이미지 경로

> 이때 외부 이미지 경로를 사용할 때는 `next.config.js`에서 `domains`이나 `remotePatterns` 설정을 해야 한다.

```javascript
module.exports = {
  images: {
    domains: ["image.tmdb.org"]
  }
};
```

```js
// wildcard pattern 지원
// protocol, port, pathname 제한 가능
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "example.com",
        port: "",
        pathname: "/account123/**"
      }
    ]
  }
};
```

### width & height

- 정적으로 불러오는 이미지 파일과 fill props가 true인 이미지를 제외하고 width랑 height 값이 필수적으로 들어가야 한다.
- width와 height를 필수적으로 입력해야 하는 이유는 `CLS`를 방지하기 위해서이다.

### alt

- 이미지 대체 텍스트
- 스크린 리더기와 검색 엔진에게 이미지를 설명하기 위해 사용된다.

## Optional Props

### loader

- 이미지 url을 반한하는 함수이다.
- `src`, `width`, `height` 총 3개의 인자가 전달된다.

```jsx
import Image from "next/image";

const myLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
};

const MyImage = props => {
  return (
    <Image
      loader={myLoader}
      src="me.png"
      alt="Picture of the author"
      width={500}
      height={500}
    />
  );
};
```

### fill

- `true` or `false`
- width나 height값을 지정하지 않고, 부모 요소 크기만큼 이미지를 채우고 싶을 때 사용된다.
- 이때 부모 요소의 `position` 속성값이 `relative`, `fixed`, `absolute`여야 한다.

### sizes

- breakpoint마다 이미지 너비에 대한 정보를 제공하는 문자열이다.
- 브라우저가 다운로드할 이미지의 크기를 결정하는 데 사용된다. 브라우저는 페이지에 있는 이미지의 크기를 아직 모르기 때문에 뷰포트와 동일하거나 더 큰 이미지를 선택하여 다운로드한다.
- sizes 속성을 사용하면 이미지가 뷰포트보다 작을 것이라고 브라우저에게 알릴 수 있다.
- fill prop값이 true이고, sizes 속성을 사용하지 않았다면 이미지가 `100vw` 크기로 다운로드된다.

```jsx
import Image from "next/image";
const Example = () => (
  <div className="grid-element">
    <Image
      src="/example.png"
      fill
      sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
    />
  </div>
);
```

### placeholder

- 이미지가 로드되는 동안 표시될 대체 이미지 사용 여부
- **사용자들에게 이미지가 로드되고 있다는 것을 명확히 전달할 수 있다.**
- `empty` (기본) : 대체 이미지가 없다.
- `blur` : `blurDataURL` props 값이 대체 이미지로 사용된다.
  - `src`가 정적으로 불러온 이미지이고 확장자가 .jpg, .png, .webp, .avif라면 **blurDataURL이 자동으로 채워진다.**
  - `src`가 동적으로 불러오는 이미지라면 **blurDataURL props 값을 반드시 전달**해야 한다.

### blurDataURL

- 이미지가 로드되는 동안 표시될 대체 이미지 URL
- `placeholder="blur"`를 사용할 때 함께 이 props를 사용한다.
- base64로 인코딩된 이미지여야 하고 작은 크기의 이미지(10px 이하)를 권장한다. 더 큰 이미지를 사용하면 애플리케이션 성능이 저하될 수 있다.
- [generate a solid color blur data URL](https://png-pixel.com/)

> [👉 더 많은 optional props 알아보기](https://nextjs.org/docs/api-reference/next/image#optional-props)
