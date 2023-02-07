---
emoji: 🤖
title: Package Manager 비교하기 (npm, yarn, pnpm)
date: "2023-02-07"
category: Javascript
preview: "현재 많이 사용하고 있는 Package Manager 3개가 있다. npm, yarn (yarn classic, yarn berry), pnpm. 위 3가지 패키지 관리자들은 다음과 같은 기본적인 기능을 제공하고 있다. metadata 작성 및 관리. 모든 dependencies 일괄 설치 및 업데이트. dependencies 추가, 업데이트, 삭제. 스크립트 실행. 패캐지 퍼블리쉬. 보안 검사 기능적으로 비슷해보이지만, 내부 동작은 매우 다르다. npm과 yarn은 flat한 node_modules 폴더에 dependencies를 설치한다. 반면, pnpm은 dependencies를 중첩된 node_modules 폴더에 효율적으로 저장하고, yarn berry(>= v2)는 plug and play (pnp) 기능이 있다. 이 세가지 패키지 관리자는 각각 어떤 특징을 갖고 있는지 비교해보도록 하자."
---

현재 많이 사용하고 있는 Package Manager 3개가 있다.

1. `npm`
2. `yarn` (yarn classic, yarn berry)
3. `pnpm`

위 3가지 패키지 관리자들은 다음와 같은 기본적인 기능을 제공하고 있다.

- metadata 작성 및 관리
- 모든 dependencies 일괄 설치 및 업데이트
- dependencies 추가, 업데이트, 삭제
- 스크립트 실행
- 패캐지 퍼블리쉬
- 보안 검사

기능적으로 비슷해보이지만, 내부 동작은 매우 다르다. npm과 yarn은 `flat`한 node_modules 폴더에 dependencies를 설치한다. 반면, pnpm은 dependencies를 중첩된 node_modules 폴더에 효율적으로 저장하고, yarn berry(>= v2)는 plug and play (pnp) 기능이 있다. 이 세가지 패키지 관리자는 각각 어떤 특징을 갖고 있는지 비교해보도록 하자.

# npm

메타데이터가 작성된 `package.json`, dependencies를 `node_modules`라는 폴더에 설치하는 것, 커스텀 스크립트, public & private 패키지 레지스트리와 같은 개념들이 모두 npm에 의해 도입되었다.

> 참고: **dependencies vs devDependencies**
>
> - `dependencies` : 애플리케이션 로직을 구현하는 것과 연관이 있는 패키지 (jquery, react, chart 등)
> - `devDependencies` : 개발할 때 도움을 주는 개발용 보조 패키지 (typescript, eslint, @types/~ 등)
> - `dependencies`는 배포할 때 포함되지만 `devDependencies`는 개발할 때만 필요한 라이브러리기 때문에 배포할 때 포함되지 않는다. 구분하여 설치해줘야 빌드 시간도 줄어들고, 배포할 때 불필요한 패키지를 포함하지 않는다.

# yarn classic (< v2)

페이스북에서 만든 자바스크립트 패키지 관리자로, npm이 갖고 있던 보안, 성능 문제 등을 해결하기 위해 만들어졌다.

**Parallel installation of packages**

- 주요 차이점 중 하나는 패키지 설치 프로세스를 처리하는 방법이다.
- npm에서 여러 패키지를 설치할 때, 하나의 패키지가 완전히 설치될 때까지 기다린 후 다른 패키지를 설치한다. 즉, 패키지 설치 작업이 순차적으로 진행된다.
- 반면, yarn은 여러 패키지를 설치할 때 병렬로 설치하여 패키지 설치 속도 측면에서 yarn이 npm보다 빠르다.

**Security**

- npm은 자동으로 패키지에 포함된 다른 패키지 코드를 실행한다. 이 특징은 편리하지만 보안에 취약할 수 있다.
- yarn은 `yarn.lock` 또는 `package.json` 파일에 있는 패키지만을 설치한다.
- 하지만 npm은 업데이트에 따라 보안성도 크게 향상되었다.

> yarn classic은 2020년부터 유지보수 모드로 전환되었다. 그리고 1.x 버전은 모두 레거시로 간주하고 yarn classic으로 이름이 바뀌었다. 현재는 yarn berry에서 개발과 개선이 이루어지고 있다.

# pnpm

pnpm은 2017년에 만들어진 패키지 관리자이다. pnpm 개발자들이 생각한 npm과 yarn의 가장 큰 문제점은 프로젝트 간에 사용되는 dependencies의 중복 저장이다. 두 패키지 관리자 모두 node_moduels 폴더 내부에 flat하게 패키지를 설치하여 관리한다. (패키지 모두 동일한 디렉토리에 flat하게 저장됨)

pnpm은 이러한 설치 방식 대신, [content-addressable storage](https://pnpm.io/next/symlinked-node-modules-structure)를 사용한다. pnpm은 홈 디렉토리의 글로벌 저장소(`~/.pnpm-store`)에 모든 패키지를 저장하고, 모든 버전의 dependecies는 node_modules 폴더에 단 한번만 설치한다. node_modules 폴더 내에서는 `symbolic link`를 사용하여 dependencies의 중첩된 구조를 생성하고, 모든 패키지 파일은 저장소에 대한 `hard link`로 구성되어 있다. 이 방식을 통해 single source of truth가 이루어지고, 상당한 디스크 공간을 절약할 수 있다.

![pnpm node_modules folder](1.png)

# yarn berry

yarn berry는 2020년에 출시되었으며, yarn classic의 업그레이드 버전이다. yarn berry는
node_modules를 생성하는 대신 `.pnp.cjs` 파일에 의존성을 찾을 수 있는 lookup 파일이 생성된다. 이는 중첩된 폴더 구조가 아닌 단일파일이기 때문에 패키지의 의존성과, 각 버전의 패키지가 어디에 위치하는지를 한눈에 쉽게 알 수 있다. 또한, 모든 패키지는 `.yarn/cache` 폴더 내부에 `zip` 파일로 저장되므로, node_modules 폴더보다 디스크 공간을 더 적게 차지한다.

```cjs
/* react 패키지 중에서 */
["react", [
  /* npm:17.0.1 버전은 */
  ["npm:17.0.1", {
    /* 이 위치에 있고 */
    "packageLocation": "./.yarn/cache/react-npm-17.0.1-98658812fc-a76d86ec97.zip/node_modules/react/",
    /* 이 의존성들을 참조한다. */
    "packageDependencies": [
      ["loose-envify", "npm:1.4.0"],
      ["object-assign", "npm:4.1.1"]
    ],
  }]
]],
```

# Lock 파일

- 모든 패키지 관리자는 각자 다른 형태의 lock 파일이 존재한다.
- lock 파일이란 매 설치시 항상 같은 버전을 설치하고, 예측가능한 특성을 보장하기 위해 정확한 의존성 버전을 저장하고 있는 파일을 의미한다.
- package.json에는 정확한 버전이 아닌 `>= 1.2.5`와 같은 형식의 버전 범위 (semantic versioning) 로 작성되어 있는 경우도 있어, lock 파일이 없다면 매 설치마다 설치하는 버전이 달라질 수 있다.
- 이 lock 파일은 npm@5 부터 `package-lock.json`, pnpm은 `pnpm-lock.yaml`, yarn은 `yarn.lock` 형태로 존재한다.
- 어떠한 환경에서든지 같은 버전을 설치하는 것을 보장하기 위해 lock 파일은 버전 컨트롤 내부에 포함시키는 것이 좋다.

![Semantic Versionsing](2.png)

> 참고
>
> - [JavaScript package managers compared - npm, Yarn, or pnpm?](https://doppelmutzi.github.io/packageManagers/)
> - [node_modules로부터 우리를 구원해 줄 Yarn Berry](https://toss.tech/article/node-modules-and-yarn-berry)
