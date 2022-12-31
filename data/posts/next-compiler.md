---
emoji: 🖤
title: Next.js Compiler
date: "2022-12-23"
category: Nextjs
preview: "Next.js 공식 문서에 따르면, Next.js 13 컴파일러는 SWC를 사용한다. 최신 버전의 자바스크립트/타입스크립트 코드들을 모든 브라우저에서 지원하는 유효한 코드로 변환한다. 최신 자바스크립트를 읽지 못하는 브라우저에서도 코드가 동일하게 동작한다. SWC는 코드를 최소화해주는 기능도 있다. 이 기능을 사용하기 위해서 version 12.3.0에서는 next.config.js에서 설정이 필요하고, version 13에서는 기본 기능이다. Next.js 12 버전이 나오기 전에는, SWC 대신 babel를 사용했다. babel도 최신 버전의 자바스크립트/타입스크립트 코드를 모든 브라우저에서 지원하는 유효한 코드로 변환한다. 하지만, 속도 측면에서 느리다는 평가를 받는다. Next.js 12 버전에서는 Rust 프로그래밍 언어로 작성된 SWC로 대체했고, 전보다 빠른 리프레시와 빌드 속도를 경험할 수 있게 되었다. 컴파일 속도가 더 빠른 이유 중 하나가 Rust 프로그래밍 언어이다."
---

## SWC

- [Next.js 공식 문서](https://nextjs.org/docs/advanced-features/compiler)에 따르면, Next.js 13 컴파일러는 SWC를 사용한다.
- **최신 버전의 자바스크립트/타입스크립트 코드들을 모든 브라우저에서 지원하는 유효한 코드로 변환한다.**
  - 최신 자바스크립트를 읽지 못하는 브라우저에서도 코드가 동일하게 동작한다.
- SWC는 **코드를 최소화해주는 기능**도 있다. 이 기능을 사용하기 위해서 version 12.3.0에서는 next.config.js에서 설정이 필요하고, version 13에서는 기본 기능이다.

```js
// next.config.js
// Next.js 12.3.0
module.exports = {
  swcMinify: true
};
```

> 참고: [SWC 공식문서](https://swc.rs/)

<br/>

### SWC vs Babel

- Next.js 12 버전이 나오기 전에는, SWC 대신 babel를 사용했다.
- babel도 최신 버전의 자바스크립트/타입스크립트 코드를 모든 브라우저에서 지원하는 유효한 코드로 변환한다. 하지만, 속도 측면에서 느리다는 평가를 받는다.
- Next.js 12 버전에서는 Rust 프로그래밍 언어로 작성된 SWC로 대체했고, 전보다 빠른 리프레시와 빌드 속도를 경험할 수 있게 되었다.
- 컴파일 속도가 더 빠른 이유 중 하나가 [Rust](https://prev.rust-lang.org/en-US/documentation.html) 프로그래밍 언어이다.

<br/>

## Next.js 13 Compiler의 지원 기능

> 직접 사용해보거나 사용해보고 싶은 기능들 위주로 정리

### Styled-components

```js
module.exports = {
  compiler: {
    styledComponents: boolean | {
      // Enabled by default in development, disabled in production to reduce file size,
      displayName?: boolean,
      // Enabled by default.
      ssr?: boolean,
      // Enabled by default.
      fileName?: boolean,
      // Empty by default.
      topLevelImportPaths?: string[],
      // Defaults to ["index"].
      meaninglessFileNames?: string[],
      // Enabled by default.
      cssProp?: boolean,
      // Empty by default.
      namespace?: string,
    },
  },
}
```

### Remove Console

```js
// remove all console.* calls
module.exports = {
  compiler: {
    removeConsole: true
  }
};
```

```js
// remove console.* calls except console.error
module.exports = {
  compiler: {
    removeConsole: {
      exclude: ["error"]
    }
  }
};
```

### Modularize Imports (v13.1.0 stable)

- import를 모듈화하는 기능이다. 이 기능의 장점은 **Tree shaking**이 된다는 점이다.
  - Tree shaking은 사용하지 않은 코드를 제거하는 것을 말한다.
- 많은 인기 있는 npm 패키지는 다른 모듈을 다시 export하는 단일 파일을 제공하기 위해 "배럴 파일"을 사용한다.

```js
import { IconButton, Tooltip, Tabs, Tab } from "@mui/material";
```

- 번들러는 배럴 파일을 이해하고 사용되지 않는 re-export를 제거할 수 있다.
- 하지만, 이 과정은 re-export된 모든 파일을 파싱/컴파일하는 것을 포함한다.
- 일부 npm 패키지는 수천 개의 모듈을 다시 내보내는 배럴 파일을 제공하기 때문에 컴파일 시간이 느려진다.
- Next.js는 이 문제를 해결하기 위해 배럴 파일을 이용한 import문을 direct import문으로 자동 변환해주는 기능을 제공한다. 이 기능을 사용하기 위해서는 next.config.js의 `modularizeImports` 옵션을 설정해야 한다.

```js
// Before (with barrel file)
import { IconButton, Tooltip, Tabs, Tab } from "@mui/material";

// After (with modularized imports from plugin)
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
```

```js
// next.config.js
module.exports = {
  modularizeImports: {
    "@mui/material": {
      transform: "@mui/material/{{member}}"
    }
  }
};
```

> [Modularize Imports 기능에 대해 더 알아보기](https://nextjs.org/docs/advanced-features/compiler#modularize-imports)

<br/>

> **그 밖에 다양한 지원 기능들**
>
> - [Jest](https://nextjs.org/docs/advanced-features/compiler#jest)
> - [Relay](https://nextjs.org/docs/advanced-features/compiler#relay)
> - [Remove React Properties](https://nextjs.org/docs/advanced-features/compiler#remove-react-properties)
> - [Emotion](https://nextjs.org/docs/advanced-features/compiler#emotion)
