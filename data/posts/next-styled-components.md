---
emoji: 💄
title: Next.js에서 styled-components 사용하기
date: "2022-07-16"
category: Nextjs
preview: " NextJS는 기본적으로 페이지를 pre-rendering한다. Server에서 html 파일을 구성하여 브라우저 측에 전달해 렌더링한다. 이후 JS 파일이 로드되어 자바스크립트 코드가 적용된다.자바스크립트 코드가 적용이 되지 않은 페이지가 미리 렌더링되기 때문에 CSS-in-JS로 스타일링을 하면 스타일이 적용되지 않은 html 코드가 먼저 렌더링되는 문제가 발생하게 된다. NextJS는 이에 대한 해결책을 제시한다. html 파일에 CSS-in-JS 형식으로 작성된 스타일 요소들을 주입시켜서 스타일이 뒤늦게 적용되는 문제를 해결할 수 있다."
---

> **시작하기 전에**<br/>
> NextJS는 기본적으로 페이지를 `pre-rendering`한다. Server에서 html 파일을 구성하여 브라우저 측에 전달해 렌더링한다. 이후 JS 파일이 로드되어 자바스크립트 코드가 적용된다.<br/> [👉 NextJS의 페이지 렌더링 방식](https://www.eunnbi.dev/posts/next-pre-rendering)<br/>[👉 브라우저 렌더링 과정](https://www.eunnbi.dev/posts/web-browser#%EB%A0%8C%EB%8D%94%EB%A7%81-%EC%97%94%EC%A7%84)

<br/>

# CSS-in-JS와 Pre-Rendering

자바스크립트 코드가 적용이 되지 않은 페이지가 미리 렌더링되기 때문에 `CSS-in-JS`로 스타일링을 하면 **스타일이 적용되지 않은 html 코드가 먼저 렌더링**되는 문제가 발생하게 된다.<br/>
NextJS는 이에 대한 해결책을 제시한다. **`html` 파일에 `CSS-in-JS` 형식으로 작성된 스타일 요소들을 주입**시켜서 스타일이 뒤늦게 적용되는 문제를 해결할 수 있다.<br/>
[👉 NextJS 공식문서 - Customizing 'renderPage'](https://nextjs.org/docs/advanced-features/custom-document#customizing-renderpage)

```tsx
import Document, { DocumentContext, DocumentInitialProps } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ]
      };
    } finally {
      sheet.seal();
    }
  }
}
```

<br/>

# babel 설정

Next.js는 페이지 접속 시 `SSR`를 이용하고 이후 페이지 이동 시 `CSR`를 이용하여 페이지를 렌더링한다. 이때 `server`와 `client`에서 생성하는 **class 해시값이 달라 충돌**로 인해 문제가 발생한다.

> 👀 참고 : styled-component로 만들어진 컴포넌트는 내부적으로 태그의 `className`이 해시값으로 적용된다.

👉 `babel-plugin-styled-components`를 설치하고 `.babelrc` 파일을 설정하도록 하자~

```cmd
yarn add babel-plugin-styled-components
```

```json
{
  "presets": ["next/babel"],
  "plugins": [
    [
      "styled-components",
      {
        "ssr": true,
        "displayName": true,
        "preprocess": true
      }
    ]
  ]
}
```

# Next.js compiler 설정

`babel-plugin-styled-components` 대신 최신 버전의 Next.js compiler를 사용할 수 있다.

> [👉 Next.js compiler - styled components](https://nextjs.org/docs/advanced-features/compiler#styled-components)

```js
module.exports = {
  compiler: {
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    styledComponents: boolean | {
      // Enabled by default in development, disabled in production to reduce file size,
      // setting this will override the default for all environments.
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
      // Not supported yet.
      minify?: boolean,
      // Not supported yet.
      transpileTemplateLiterals?: boolean,
      // Not supported yet.
      pure?: boolean,
    },
  },
}
```
