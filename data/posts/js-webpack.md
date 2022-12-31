---
emoji: 🌠
title: Webpack 사용해보기
date: "2022-12-30"
category: Javascript
preview: "Webpack이란? 오픈 소스 모듈 번들러이다. Webpack에서의 모듈은 웹 애플리케이션을 구성하는 모든 자원을 말한다. 웹 애플리케이션을 제작하는데 사용되는 파일 하나하나가 모두 모듈이다. HTML, CSS, Javascript, Images, Font 등 모듈 번들링은 웹 애플리케이션을 구성하는 자원(모듈)들을 하나 이상의 번들로 병합하는 동작을 말한다. Webpack이 필요한 이유 모듈 번들러를 사용하기 전에는 기능별로 자바스크립트 파일을 <script>로 포함했다. 하지만, 너무 많은 script를 로드할 시 웹사이트의 로딩 속도가 길어지고, 사용자 경험이 나빠진다. 또한, 다른 js 파일에서 같은 이름의 전역변수를 사용한다면 의도치 않는 동작이 발생할 수 있다. 위 두 문제를 해결하기 위해서 모든 프로젝트 코드가 포함된 큰 자바스크립트 파일을 사용하는 것은 가독성과 유지보수에 있어서 비효율적이다. Webpack을 사용한다면 안전한 모듈 번들링 웹 애플리케이션의 빠른 로딩 속도와 높은 성능"
---

# Webpack이란?

- 오픈 소스 모듈 번들러이다.
- Webpack에서의 모듈은 웹 애플리케이션을 구성하는 모든 자원을 말한다.
  - 웹 애플리케이션을 제작하는데 사용되는 파일 하나하나가 모두 모듈이다.
  - HTML, CSS, Javascript, Images, Font 등
- 모듈 번들링은 웹 애플리케이션을 구성하는 자원(모듈)들을 하나 이상의 번들로 병합하는 동작을 말한다.

<br/>

# Webpack이 필요한 이유

- 모듈 번들러를 사용하기 전에는 기능별로 자바스크립트 파일을 `<script>`로 포함했다.
- 하지만, 너무 많은 script를 로드할 시 웹사이트의 로딩 속도가 길어지고, 사용자 경험이 나빠진다.
- 또한, 다른 js 파일에서 같은 이름의 전역변수를 사용한다면 의도치 않는 동작이 발생할 수 있다.
- 위 두 문제를 해결하기 위해서 모든 프로젝트 코드가 포함된 큰 자바스크립트 파일을 사용하는 것은 가독성과 유지보수에 있어서 비효율적이다.

Webpack을 사용한다면...

**안전한 모듈 번들링**

- Webpack를 사용하면 다른 자바스크립트 파일에 같은 이름의 전역변수가 있어도 정상적으로 동작된다.
- 그 이유는 `IIFE`(Immediately Invoked Function Expressions, 즉시 실행함수)를 사용하여 변수의 스코프 문제를 해결하기 때문이다.
  - IIFE 내부에서 정의된 변수는 함수 범위의 스코프를 가지고, 외부에서 접근이 불가능하다.
  - 스크립트 파일을 IIFE로 감싸주면 파일별로 다른 스코프를 갖기 때문에 안전하게 스크립트 파일(모듈)을 번들링할 수 있다.

**웹 애플리케이션의 빠른 로딩 속도와 높은 성능**

- 로드할 자바스크립트 파일 개수가 줄어들기 때문에 빠른 로딩 속도를 경험할 수 있다.
- 또한, 초기 페이지 로딩 속도를 높이기 위해 당장 필요하지 않은 자원들은 나중에 요청하는 Lazy Loading도 있다.
  - Code Splitting 기능을 이용하여 원하는 모듈을 원하는 타이밍에 로딩할 수 있다.

<br/>

# Webpack의 주요 개념

- Webpack은 Entry point부터 시작하여 dependency graph를 만들고 이를 기반으로 모듈들을 번들링한다.
- 하나의 파일이 다른 파일에 의존할 때, webpack은 이것을 의존성으로 취급한다.

> [Dependency Graph](https://webpack.kr/concepts/dependency-graph/)

## Entry

- 번들링을 위해 필요한 최초 진입점을 말한다.
- 쉽게 말하자면 프로젝트를 불러올 때 가장 먼저 필요한 파일 (프로젝트 시작 폴더)

```js
// webpack.config.js
module.exports = {
  entry: "./src/app.js"
};
```

- 엔트리 포인트는 여러개가 될 수도 있다.
- 싱글 페이지 애플리케이션이 아니라 특정 페이지로 진입했을 때 서버에 페이지를 요청하고 받는 멀티 페이지 애플리케이션에 적합하다.

```js
module.exports = {
  login: "./src/LoginView.js",
  main: "./src/MainView.js"
};
```

> [엔트리 포인트에 대해 더 알아보기](https://webpack.kr/concepts/entry-points)

<br/>

## Output

- 번들된 파일의 위치와 파일명을 지정한다.
- `path.resolve()`는 인수로 넘어온 경로들을 조합하여 유효한 파일 경로를 만들어주는 Node.js API이다.
  - 참고: [Node.js path api](https://nodejs.org/api/path.html)

```js
const path = require("path");

module.exports = {
  // ./dist/bundle.js
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
```

- filename 속성에 여러가지 옵션을 넣을 수 있다.

```js
// 파일 이름에 entry 속성을 포함하는 옵션
module.exports = {
  output: {
    filename: "[name].bundle.js"
  }
};
```

```js
// 파일 이름에 웹팩 내부적으로 사용하는 모듈 ID를 포함하는 옵션
module.exports = {
  output: {
    filename: "[id].bundle.js"
  }
};
```

```js
// 매 빌드시 마다 고유 해시 값을 붙이는 옵션
module.exports = {
  output: {
    filename: "[name].[hash].bundle.js"
  }
};
```

```js
// 웹팩의 각 모듈 내용을 기준으로 생생된 해시 값을 붙이는 옵션
module.exports = {
  output: {
    filename: "[chunkhash].bundle.js"
  }
};
```

> [Output 설정에 대해 더 알아보기](https://webpack.kr/configuration/output)

<br/>

## Loader

- webpack은 기본적으로 Javascript와 JSON 파일만 이해할 수 있다.
- loader를 사용하면 webpack이 다른 유형의 파일을 처리하거나, 모듈로 변환하여 dependency graph에 추가할 수 있다.
- css-loader, file-loader, babel-loader, ts-loader 등등
  - [다양한 Loader 종류](https://webpack.js.org/loaders/)

**예시**

```js
// webpack.config.js
module.exports = {
  module: {
    // 다양한 유형의 모듈을 처리하는 방법을 지정할 수 있다.
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/ // node_modules 폴더 내 ts 파일들은 제외
      },
      {
        test: /\.css$/,
        use: "css-loader"
      },
      {
        test: /\.scss$/,
        use: ["css-loader", "sass-loader"]
      }
    ]
  }
};
```

- `test`: 로더를 적용할 파일 유형 (일반적으로 정규표현식 사용)
- `use`: 해당 파일에 적용할 로더 이름
- 특정 파일에 대해 여러 개의 로더를 사용하는 경우 오른쪽에서 왼쪽 순으로 적용된다.
  - scss 파일에 대해 sass 로더로 전처리(css 파일로 변환)한 다음 css 로더를 적용한다.
  - 만약 css 파일이 인라인 스타일 태그로 추가되는 것을 원한다면 가장 왼쪽에 `style-loader`를 추가하면 된다.

> [Loader 설정에 대해 더 알아보기](https://webpack.kr/concepts/loaders)

<br/>

## Plugin

- Webpack의 기본적인 동작에 추가적인 기능을 제공하는 속성이다.

```js
// webpack.config.js
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()]
};
```

- [HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/): Webpack에서 빌드한 결과물로 HTML 파일을 생성해주는 플러그인
- [ProgressPlugin](https://webpack.js.org/plugins/progress-plugin/#root): Webpack의 빌드 진행율을 표시해주는 플러그인
- [다양한 plugin 목록](https://webpack.kr/plugins)

<br/>

## Resolve

- resolve 옵션을 이용해 모듈을 해석하는 방식을 변경할 수 있다.
- `alias` 속성을 이용해 특정 모듈의 별칭을 지정할 수 있다.

```js
const path = require("path");

module.exports = {
  resolve: {
    alias: {
      // 특정 모듈의 별칭 지정
      Utilities: path.resolve(__dirname, "src/utilities/"),
      xyz$: path.resolve(__dirname, "path/to/file.js")
    }
  }
};
```

```js
// 상대 경로를 사용하는 대신 별칭을 사용할 수 있다.
import Utility from "../../utilities/utility";
import Utility from "Utilities/utility";
```

- `extensions` 속성을 이용해 모듈을 `import`를 할 때 확장자를 생략할 수 있다.
- 기본값은 `['.js', '.json', '.wasm']`이다. 배열의 앞의 확장자부터 적용한다.

```js
module.exports = {
  resolve: {
    extensions: [".ts", "..."] // '...': 기본값
  }
};
```

```ts
import ProjectForm from "./components/project-form"; // ts 확장자로 해석됨.
```

> 이 밖에도 [resolve](https://webpack.kr/configuration/resolve) 옵션에 다양한 속성들이 존재한다.

<br/>

# Webpack Dev Server

- webpack dev server는 개발 과정에서 유용하게 쓰이는 도구이다.
- webpack의 빌드 대상 파일을 변경하고 저장하면 자동으로 webpack이 빌드한 후 브라우저를 새로고침 해준다.
- 파일이 변경될 때마다 매번 webpack 명령어를 실행하지 않아도 된다.
- 하지만, webpack dev server를 실행하여 빌드를 하는 경우에는 빌드한 결과물이 프로젝트 폴더에 보이지 않는다. 결과물이 메모리에 저장되고 파일이 생성되지 않기 때문이다.
- 그래서 webpack dev server는 개발할 때 유용한 도구이고, 개발이 완료되면 webpack 명령어를 이용해 빌드 파일을 생성해야 한다.

> 컴퓨터 구조 관점에서 파일 입출력보다 메모리 입출력이 속도가 더 빠르고 컴퓨터 자원이 덜 소모된다.

```json
// package.json
{
  "scripts": {
    "dev": "webpack serve",
    "build": "webpack"
  }
}
```

### DevServer

- `webpack.config.js`에서 설정할 수 있는 옵션으로, webpack dev server(version >= 4.0.0)의 동작에 영향을 미친다.
- 프록시 서버, 파일 압축 여부 등을 설정할 수 있다.
- [devServer 옵션 더 알아보기](https://webpack.kr/configuration/dev-server/#root)

<br/>

# Source Map

- 배포용으로 빌드한 파일과 원본 파일을 서로 연결시켜주는 기능이다.
- 배포된 파일에서 에러가 날 경우 소스맵을 이용하여 배포용 파일의 특정 부부닝 원본 소스의 어떤 부분인지 확인할 수 있다.
- 이렇게 디버깅의 편의성을 제공한다.
- 소스맵 생성 여부와 방법을 제어할 수 있는 [Devtool 옵션](https://webpack.kr/configuration/dev-server/#root)이 있고, 이 옵션으로 원하는 source mapping을 선택할 수 있다.

> 🚀 [Typescript와 Webpack 및 Webpack Dev Server를 함께 사용한 프로젝트](https://github.com/eunnbi/typescript-practice/tree/main/drag-and-drop)
