---
emoji: ⚙️
title: 타입스크립트 설정 (tsconfig.json)
date: "2022-06-15"
category: Typescript
preview: "타입스크립트 프로그램은 자바스크립트로 컴파일되고, 실행된다. 이때 tsconfig.json에 명시된 설정들을 바탕으로 컴파일된다. 프로젝트에서 tsc라는 명령어를 치면 타입스크립트 설정 파일에 정의된 내용을 기준으로 변환 작업(컴파일)을 진행한다. tsconfig.json에는 매우 많은 설정 옵션들이 존재한다.😱 그래서 주로 사용하는 옵션들만 정리해보겠다!📝 컴파일 대상 파일 설정 관련 옵션 ✨ 컴파일 대상 파일들을 선택하고 제외하는 옵션이다. files - 타입스크립트 변환 명령어(tsc)를 입력할 때마다 컴파일 대상 파일의 경로를 지정하지 않고 미리 정의해놓을 수 있다. - 타겟 파일의 수가 적을 때 사용하는 것이 좋다."
---

타입스크립트 프로그램은 자바스크립트로 컴파일되고, 실행된다. 이때 `tsconfig.json`에 명시된 설정들을 바탕으로 컴파일된다. 프로젝트에서 `tsc`라는 명령어를 치면 타입스크립트 설정 파일에 정의된 내용을 기준으로 변환 작업(컴파일)을 진행한다.

`tsconfig.json`에는 매우 많은 설정 옵션들이 존재한다.😱 그래서 주로 사용하는 옵션들만 정리해보겠다!📝

<br/>

# 컴파일 대상 파일 설정 관련 옵션

✨ 컴파일 대상 파일들을 선택하고 제외하는 옵션이다.

## 1. files

- 타입스크립트 변환 명령어(`tsc`)를 입력할 때마다 컴파일 대상 파일의 경로를 지정하지 않고 미리 정의해놓을 수 있다.
- 타겟 파일의 수가 적을 때 사용하는 것이 좋다.

```json
{
  "files": ["app.ts", "./utils/math.ts"]
}
```

## 2. include

- 컴파일 대상 파일이 많을 때는 개별로 지정하지 않고 `pattern`을 이용하여 대상 파일들을 지정할 수 있다.

```json
{
  "include": ["src/**/*"]
  // src 디렉터리와 src의 하위 디렉터리에 있는 모든 파일을 컴파일 대상으로 포함한다는 의미
}
```

> ✔️ 와일드 카드 패턴
>
> - `*` : 해당 디렉토리의 모든 파일 검색
> - `?` : 해당 디렉토리 안에 파일의 이름 중 한 글자라도 맞으면 해당
> - `**` : 하위 디렉토리를 재귀적으로 접근(하위 디렉토리의 하위 디렉토리가 존재하는 경우 반복해서 접근)

## 3. exclude

- `include`와 반대되는 옵션으로 컴파일 대상이 아닌 파일 경로를 지정한다.

```json
{
  "exclude": ["node_modules"]
}
```

<br/>

# compilerOptions 옵션

✨ 컴파일 대상 파일들을 어떻게 변환할지 정하는 옵션이다.

## 1. target

- 타입스크립트 파일을 어떤 버전의 자바스크립트 변환할지 정하는 옵션
- `es3` (default), `es5`, `es6`, `es2015`, `es2016`, `es2017`, `es2018`, `es2019`, `es2020`, `es2021`, `es2022`, `esnext`
- [tsconfig - target](https://www.typescriptlang.org/tsconfig#target)

## 2. lib

- 컴파일 시 포함할 라이브러리 목록을 지정하는 옵션

```json
"compilerOptions": {
    "target": "es5",
    "lib": ["dom"],
    //  DOM관련 API의 타입을 사용할 수 있다.
}
```

## 3. module

- 자바스크립트 파일간의 `import`를 구현할 때의 문법을 결정하는 옵션
- `es6`, `es2015`, `es2020`, `esnext` : `import` 문법 사용
- `commonjs` : `require` 문법 사용

## 4. isolatedModules

- 각 파일들을 모듈로 만들지 결정하는 옵션
- 파일에서 `import` 또는 `export`를 사용하면 그 파일은 모듈이 된다.
- `true`: 모듈로 소스코드를 작성하지 않으면 에러를 발생한다.

## 5. allowJs

- 타입스크립트 컴파일 작업 시 자바스크립트 파일도 포함할 수 있는지 지정하는 옵션
- `true` or `false`

## 6. jsx

- `jsx`가 자바스크립트 파일에서 내보내지는 방식을 제어하는 옵션
- `preserve`: `jsx`를 변경하지 않고 `.jsx` 파일을 내보낸다.
- `react`: `React.createElement` 호출로 변경된 `jsx`로 `.js` 파일을 내보낸다.
- `react-native` : preserve와 같이 `jsx`를 변경하지 않지만 `.js` 파일을 내보낸다.

## 7. noEmit, noEmitOnError

- 컴파일 완료된 결과 파일을 저장할지 여부를 설정하는 옵션
- 컴파일 오류 발생 시 자바스크립트 소스 파일이나 소스맵 파일 저장 여부를 설정하는 옵션
- `true` or `false`

## 8. sourceMap

- sourcemap file 생성 여부를 설정하는 옵션
- `true` or `false`
- [tsconfig - sourceMap](https://www.typescriptlang.org/tsconfig#sourceMap)

## 9. rootDir, outDir

- `rootDir`: 컴파일 대상 시작 폴더
- `outDir`: 컴파일 후 생성되는 js 파일이 저장될 폴더명
- input 디렉터리와 동일한 디렉터리 구조로 컴파일 결과를 내보낸다.

## 10. removeComments

- 컴파일 시 주석 제거 여부를 설정하는 옵션
- `true` or `false`

## 11. baseUrl

- 절대적이지 않은 모듈 이름을 확인하기 위해 기본 디렉토리를 설정하는 옵션

## 12. paths

- `baseUrl`를 기준으로 파일 경로를 매핑하도록 설정하는 옵션

```json
{
  "baseUrl": "./",
  "paths": {
    "@components/*": ["components/*"],
    "@pages/*": ["pages/*"],
    "@lib/*": ["lib/*"]
  }
}
```

## 13. noImplicitAny

- 변수들이 미리 정의된 타입을 가져야 하는지 여부를 설정하는 옵션
- ❗ 타입스크립트는 타입 정보를 가질 때 장점을 발휘할 수 있기 때문에, 되도록이면 `true`로 설정해줘야 한다.
  - 타입 에러를 사전에 발견하기 수월해지고, 코드 자동완성을 통해 생산성이 향상된다.

## 14. strictNullChecks

- `null`과 `undefined`가 모든 타입에서 허용되는지 여부를 설정하는 옵션
- `null`과 `undefined` 관련된 오류를 런타임 때 마주하는 것이 아니라 사전에 방지하기 위해서는 `strictNullChecks`를 `true`로 설정하는 것이 좋다.

```ts
// true로 설정되었다고 가정
const el = document.getElementById("status");
el.textContent = "ready"; // 변수 el의 타입이 null일 가능성 존재

if (el) {
  el.textContent = "ready";
}
el!.textContent = "ready"; // non-null assertion
```

## 15. strict

- 모든 엄격한 타입 체크 옵션 활성화 여부를 결정
