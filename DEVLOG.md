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

- project 관련 데이터 관리 방식을 바꿔야 할 것 같음. (post 관련 데이터처럼)

## 📝 Tasks

- [ ] `semantic tag` 공부 및 적용
- [x] 아이폰 사파리 `height: 100vh` 버그 해결
- [ ] 블로그 옮기기
