# ✍️ Devlog

## ~ 2022.10.19

### NextJS

- `dynamic routing`된 페이지의 경우 `getStaticPaths`와 `getStaticProps`를 이용하여 Pre-rendering (`Static Generation`)
- `Pre-rendering`에 필요한 데이터들은 `data` 폴더에서 관리
- `pages` 단위에서 주입된 데이터가 하위 컴포넌트에서 사용할 수 있도록 `context api` 이용하여 `props drilling` 문제 해결

### Typescript

- `tsconfig`에서 절대경로 설정

  - 파일 위치가 달라져도 경로 수정하지 않아도 됨.
  - 최하위의 폴더의 경우 상대 경로로 인해 import 경로가 길어지는 것을 방지할 수 있음.

- 타입스크립트 타입들은 `global.d.ts`에서 관리
  - 전에는 `types` 폴더를 만들어서 관리했는데 타입 선언이 필요한 경우 import해야 하는 번거로움이 있었음.
  - 이제 `global.d.ts`에서 관리하니 import 없이 바로 타입을 사용할 수 있음.

### SEO

- 검색 엔진 최적화를 위해 `head` 태그 내 `meta data` 추가 (title, author, description, og:image 등)

- 추후 `semantic tag`를 적재적소에 사용하도록 리팩토링

### Deployment

- 현재 `vercel`에서 배포중
- `preview deployments`를 막기 위해 `shell script` 작성 및 `Ignored Build Step` 설정
- [How do I use the "Ignored Build Step" field on Vercel?
  You can enable the "Ignored Build Step](https://vercel.com/guides/how-do-i-use-the-ignored-build-step-field-on-vercel)

## 2022.10.20

- 아이폰 사파리 `height: 100vh` 버그 문제 해결
- 🐛 [bug issue](https://github.com/eunnbi/dev/issues/5)

- 블로그를 옮길수록 이미지 파일이 많아질 것이라고 예상됨. 그래서 이미지 파일 최적화 방식을 찾아봐야 함.

- project 관련 데이터 관리 방식을 바꿔야 할 것 같음. (json 파일로 관리)
- [Next.js: Reading and Display Data from a Local JSON File](https://www.kindacode.com/article/next-js-reading-and-display-data-from-a-local-json-file/)

- meta 태그와 SEO에 대해 더 공부해서 페이지별 meta data 개선

## 2022.11.05

- projects data를 `json` 파일로 관리

- 데이터 모델별 이미지가 많아짐에 따라 [이미지 경로 규칙](https://github.com/eunnbi/dev/issues/6)을 정함
- `next/image`를 통해 이미지 최적화에 더 신경 쓸 예정

- `nextjs 13 version`이 출시되어서 마이그레이션 진행 예정

> 잠시 멈추고 방학되면 다시 개발 시작!

## 2022.12.22

- 최신 버전으로 업데이트!
  ```cmd
  npm i next@latest react@latest react-dom@latest eslint-config-next@latest
  # or
  yarn add next@latest react@latest react-dom@latest eslint-config-next@latest
  # or
  pnpm up next react react-dom eslint-config-next --latest
  ```
  - Link 컴포넌트와 Image 컴포넌트 리팩터링 (레거시 코드 수정)
  - app 디렉토리는 아직 beta 버전이라서 보류
- babel 대신 SWC 사용
  > 블로그 포스팅 : [Next.js compiler](https://www.eunnbi.dev/posts/next-compiler)
- 자바스크립트와 타입스크립트 관련 블로그들 옮기는 중, 12월 이내로 완료 예정

## 2023.01.01

- 자바스크립트와 타입스크립트, web 관련 블로그 옮기기 완료
- nextjs, react 블로그 옮기는 중
- next 버전 13.1.1으로 업그레이트해서 `modularizeImports` 옵션 사용
- [next.config.js](https://github.com/eunnbi/dev/blob/main/next.config.js#L4)에서 html 태그의 lang 속성 설정

## 2023.01.24

- nextjs, react 블로그 옮기기 완료
- semantic tag 관련 블로그 작성 및 프로젝트 리팩토링
- Network 관련 블로그 옮기기 작업 예정

## 2023.08.05

- Page Router에서 App Router로 마이그레이션 완료
- 전역 상태 라이브러리로 Recoil에서 Zustand로 마이그레이션 완료
- Top Loader 컴포넌트 추가

## 📝 Tasks

- [x] 아이폰 사파리 `height: 100vh` 버그 해결
- [x] projects data 관리 방식 개선
- [x] meta 태그, SEO 공부
- [x] `semantic tag` 공부 및 적용
- [x] nextjs 13 마이그레이션 (-ing)
- [ ] 블로그 옮기기 (-ing)
- [ ] 페이지 렌더링 최적화 (페이지 전환이 느림)
