---
emoji: 🔍
title: 구글 검색엔진 최적화 가이드 정리
date: "2022-12-22"
category: Web
preview: "색인: 페이지를 저장하는 곳. 각 페이지의 색인 항목은 해당 페이지의 URL를 명시한다. 크롤링: 신규 또는 업데이트된 웹페이지를 찾는 프로세스 크롤러: 웹에서 페이지를 크롤링한 다음 색인을 생성하는 자동 소프트웨어 Googlebot: 구글 크롤러 이름 SEO: 검색엔진 최적화, 즉 검색엔진에서 찾기 쉽도록 사이트를 개선하는 프로세스 robots.txt: 크롤러가 사이트에서 액세스할 수 있는 URL을 알려주는 파일, 검색결과에 표시되어도 유용하지 않을 수 있는 페이지인 경우 해당 페이지가 크롤링되지 않는 것이 좋을 수 있다. 크롤링하고 싶지 않은 페이지를 알리기 위해 해당 파일이 사용된다."
---

> [구글의 검색엔진 최적화 기본 가이드](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)와 [웹사이트 검색엔진 최적화 유지관리](https://developers.google.com/search/docs/fundamentals/get-started)를 읽고 정리한 포스트입니다.

> - **색인**: 페이지를 저장하는 곳. 각 페이지의 색인 항목은 해당 페이지의 URL를 명시한다.
> - **크롤링**: 신규 또는 업데이트된 웹페이지를 찾는 프로세스
> - **크롤러**: 웹에서 페이지를 크롤링한 다음 색인을 생성하는 자동 소프트웨어
> - **Googlebot**: 구글 크롤러 이름
> - **SEO**: 검색엔진 최적화, 즉 검색엔진에서 찾기 쉽도록 사이트를 개선하는 프로세스
> - **robots.txt**: 크롤러가 사이트에서 액세스할 수 있는 URL을 알려주는 파일, 검색결과에 표시되어도 유용하지 않을 수 있는 페이지인 경우 해당 페이지가 크롤링되지 않는 것이 좋을 수 있다. 크롤링하고 싶지 않은 페이지를 알리기 위해 해당 파일이 사용된다.

> [URL 검사 도구](https://support.google.com/webmasters/answer/9012289?hl=ko): Google이 콘텐츠를 보고 렌더링하는 방식을 정확히 확인할 수 있으며 사이트의 여러 색인 생성 문제를 파악하고 수정할 수 있다.

<br/>

## SEO의 필요성

- 검색 엔진 최적화가 제대로 되어있지 않으면 구글에서 검색 노출이 잘되지 않는다. 즉, 구글 검색을 통한 사이트 유입이 적다.
- 크롤러가 페이지를 쉽게 방문하여 색인을 생성하도록 SEO가 잘 이루어져야 한다.
- SEO가 잘 이루어져 있을수록 검색 결과 상단에 노출된다.

<br/>

## 구글 및 사용자가 내 콘텐츠를 이해할 수 있도록 하기

### 고유하고 정확한 페이지 제목 만들기

- `title` 태그는 사용자는 물론 검색엔진에 특정 페이지의 주제가 무엇인지 알려준다.
- 고유하고 페이지 내용을 정확하게 설명하고 효과적으로 전달하는 제목 👍
  - 제목은 짧고 유익해야 하며,텍스트가 너무 길거나 관련성이 낮은 것으로 판단되면 구글에서 텍스트 중 일부만 표시하거나 검색결과에 자동으로 생성된 제목 링크를 표시할 수 있다.
- 페이지 내용과 관련이 없는 제목, '제목 없음'이나 '제목 1'과 같이 불분명한 제목, 여러 페이지에 동일한 제목을 사용하는 경우, 불필요한 키워드로 채워진 제목, 긴 텍스트의 제목 👎

### 매타 설명 태그 사용하기

- 페이지의 메타 설명 태그는 검색엔진에 페이지 내용을 요악하여 제공한다.
- 페이지마다 고유한 설명, 페이지 콘텐츠를 정확하게 요약한 설명 👍
  - 사용자에게 정보를 전달하고 흥미를 유발할 수 있는 설명
  - 텍스트 길이에 제한이 없지만, Google 검색에 완전히 표시될 정도로 길고 사용자에게 유용하다고 판단되는 모든 정보를 담고 있는 것이 좋다.
- 여러 페이지에 단일한 메타 설명 태그, 페이지 내용과 관련 없는 설명, 일반적인 설명, 키워드로만 채워진 메타 설명 태그, 문서의 전체 내용을 복사하여 붙여넣는 경우 👎

> 참고: [우수한 메타 설명 태그 만드는 방법](https://developers.google.com/search/docs/appearance/snippet?hl=ko#meta-descriptions)

### heading 태그 사용하여 중요한 텍스트 강조하기

- heading 태그를 사용해 중요한 주제를 표시하고 콘텐츠의 계층 구조를 만들어 사용자가 쉽게 문서를 탐색할 수 있도록 한다.
- 페이지 내용 중 중요한 부분과 덜 중요한 부분이 무엇인지 생각하고 heading 태그를 어디에 사용하는 것이 적절한지 판단한다. 페이지에서 필요한 부분에만 heading 태그를 사용한다. 👍
- 페이지 구조를 정의하는 데 도움 되지 않는 heading 태그에 텍스트를 배치하는 경우, heading 태그 크기를 무질서하게 섞어 쓰는 경우, 과도하게 사용하는 경우 👎

### 구조화된 데이터 마크업 추가하기

다음과 같이 비즈니스와 관련된 여러가지 항목을 마크업할 수 있다.

- 판매 중인 제품
- 업체 위치
- 제품 또는 비즈니스 관련 동영상
- 영업시간
- 이벤트 목록
- 레시피
- 회사 로고 및 기타

위와 같은 데이터를 지원되는 마크업과 함께 추가하면 페이지 노출에 도움이 된다.

> [구조화된 데이터 마크업에 대해 더 알아보기](https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=ko#addstructureddata)

<br/>

## Google 검색결과에 사이트가 표시되는 방식 관리하기

### 사이트 계층 구조 구성하기

> **검색 엔진의 URL 사용 방식 이해**
>
> - `http`와 `https`를 구분하고, `www` 버전과 `www` 아닌 버전을 구분한다.
> - 대소문자를 구분한다. 하지만, 호스트 이름과 프로토콜에 대해서는 대소문자를 구분하지 않는다.
> - 콘텐츠가 `hash`에 상관없이 동일한 경우가 보통이기 때문에 검색 엔진이 `hash`를 무시할 때가 많다.
> - `https://example.com/`과 `https://example.com`은 동일하다.
> - `https://example.com/fish`와 `https://example.com/fish/`은 다르다.

- 웹사이트 탐색은 방문자가 원하는 콘텐츠를 빨리 찾을 수 있도록 도움을 줄 때 중요한 역할을 한다. 또한 검색엔진이 중요하다고 생각하는 콘텐츠를 이해하고 특정 페이지가 어떤 역할을 하는지 파악하는 데 유용하다.
- **탐색경로 목록 사용하기**
  - 탐색 경로: 페이지 상단 또는 하단에 한 행으로 위치한 내부 링크
  - 탐색경로를 이용하여 이전 섹션이나 루트 페이지로 빠르게 돌아갈 수 있다.
  - 자연스러운 탐색 경로 만들기 👍
  - 탐색 링크가 서로 복잡하게 얽히도록 만드는 경우, 콘텐츠를 너무 잘게 나누어 탐색이 어려운 경우 👎
- **유용한 404 페이지 표시하기**
  - [맞춤 404 페이지](https://developers.google.com/search/docs/crawling-indexing/http-network-errors#pagegone) 👍
  - 404 페이지가 검색엔진에서 색인이 생성되도록 허용하는 경우, robots.txt 파일을 통해 크롤링되는 것을 차단하는 경우, '찾을 수 없음', '404'와 같은 막연한 메시지만 제공하는 경우, 404 페이지에 사이트와 관련 없고, 일관성 없는 디자인을 사용하는 경우 👎
- **의미 있고 친숙한 URL 사용하기**
  - ex. 인식할 수 있는 단어가 거의 없는 긴 URL: `https://www.brandonsbaseballcards.com/folder1/22447478/x2/14032015.html`
  - ex. 의미 있고 친숙한 URL: `https://www.brandonsbaseballcards.com/article/ten-rarest-baseball-cards.html`
  - URL에 의미 있고 간단한 단어 사용하기, 디렉토리 구조를 간단하게 만들기 👍
  - 불필요한 매개변수가 있는 긴 URL, `page1.html`과 같은 일반적인 페이지 이름, `baseball-cards-baseball-cards-baseballcards.html`과 같은 과도한 키워드를 사용하는 경우, 하위 디렉터리가 깊게 중첩되는 경우, 내용과 관계없는 디렉터리 이름을 사용하는 경우 👎

### 콘텐츠 최적화하기

- 사이트를 재미있고 유용하기 만들어야 한다.
- 사용자가 무엇을 원하는지 이해하고 그에 맞는 콘텐츠를 제공해야 한다.
- 콘텐츠의 신뢰성, 전문성이 높아야 한다.
- 가독성 있는 텍스트, 철자법 및 문법 실수를 줄여야 한다.
- 주제에 관해 적절한 양의 콘텐츠를 제공해야 한다.
- 주제를 명확하게 구성해야 한다
  - 하나의 콘텐츠 추제가 어디에서 시작되고 끝나는지 잘 알 수 있게 콘텐츠를 구성해야 한다.
- 신선하고 콘텐츠 만들기
  - 새로운 콘텐츠를 기존의 방문자층을 계속 유지해줄 뿐만 아니라 새로운 방분자를 유치하는 데 도움이 된다.
- 사용자의 주의를 분산시키는 광고를 표시하지 않아야 한다.
- 링크 텍스트는 연결된 페이지의 내용을 파악할 수 있는 간결한 설명을 제공해야 한다.
- 링크 텍스트는 일반 텍스트와 구분되어야 한다.
  - CSS를 사용하여 링크 텍스트를 일반 텍스트로 보여지지도록 하지 않기
- 내부 링크용 텍스트도 고려하기
  - 내부 링크용 텍스트를 사용하는데 신경쓰면 사용자 및 구글이 사이트를 탐색하기 쉬워진다.
- [링크 대상에 주의해야 한다!](https://developers.google.com/search/docs/fundamentals/seo-starter-guide#linkwithcaution)

<br/>

## 이미지 최적화하기

### HTML 이미지 사용하기

- `img` 또는 `picture` 태그 사용하기 👍
  - 시맨틱 HTML 마크업을 사용하면 크롤러가 이미지를 찾고 처리할 수 있다.
  - 이미지에 `loading="lazy"` 속성을 사용하면 페이지를 더 빠르게 로드할 수 있다.
- CSS를 사용하여 이미지 표시하기 👎

### alt 속성 사용하기

- 대체 텍스트를 사용하여 이미지 로딩이 되지 않을 경우 설명을 보이게 한다.
- 또한 사용자가 스크린 리더와 같은 보조 술을 이용하여 사이트를 보고 있을 때 이미지에 관한 정보를 제공한다.
- 간단하지만 설명이 담긴 파일 이름과 대체 텍스트 사용하기 👍
- `image1.jpg`, `1.jpg`와 같은 일반적인 파일 이름을 사용하는 경우 매우 긴 파일 이름을 작성하는 경우, 대체 텍스트를 키워드로 채워 넣거나 전체 문장을 복사하여 붙여넣는 경우 👎
  - 일반적인 파일 이름을 사용하는 경우 사이트에 수천 개의 이미지가 있으면 이미지의 이름을 자동 지정하는 것이 좋다.

### 검색엔진이 내 이미지를 찾을 수 있도록 돕기

- [이미지 사이트맵](https://developers.google.com/search/docs/crawling-indexing/sitemaps/image-sitemaps?hl=ko)을 사용하면 구글에게 사이트에서 찾은 이미지에 관해 자세한 정보를 제공할 수 있다.
  - 구글 이미지 검색 결과에 이미지가 표시될 가능성이 높아진다.

### 표준 이미지 형식 사용하기

- 대부분의 브라우저는 `jpeg`, `gif`, `png`, `bmp`, `webP` 이미지 형식 지원한다.

<br/>

## 사이트를 모바일 친화적으로 만들기

> [기기 간 차이점 이해하기](https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=ko#mobile)

- 대다수의 사람들이 휴대기기를 이용하여 구글에서 검색한다. 그래서 모바일 친화적인 사이트의 중요성이 높아지고 있다.
- 웹사이트에서 모바일 환경을 지원하도록 구현하는 방법은 여러가지이다.
  - 반응형 웹 디자인 (권장)
    - `meta name="viewport` 태그를 사용하여 브라우저에 콘텐츠 조정 방법을 알린다.
  - 동적 게재 (Dynamic Serving)
    - Vary HTTP 헤더를 사용하여 사용자 에이전츠를 따라 변경사항을 알린다.
  - 별도 URL
    - `rel="canonical"` 및 `rel="alternate"` 요소가 있는 `<link>` 태그를 페이지에 추가하여 두 URL 간의 관계를 알린다.
    - 크롤링이 가능한지를 확인해야 한다.
- 데스크톱 사이트에 있는 구조화된 데이터, 이미지, 동영상, 메타 데이터가 모바일 사이트에도 포함되어 있는지 확인한다.
- [구글의 모바일 친화성 테스트](https://search.google.com/test/mobile-friendly?hl=ko)를 통해 구글 검색 결과 페이지에서 사이트의 페이지가 모바일 친화적 라벨 표시 기준을 충족하는지 확인할 수 있다.

> 참고: [Mobile site and mobile-first indexing best practices](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing?hl=ko)

<br/>

## 웹사이트 검색엔진 최적화 유지관리

### 구글의 사이트 크롤링 및 색인 방법 제어

> 참고: [구글 검색의 작동 원리](https://developers.google.com/search/docs/fundamentals/how-search-works)

- **리소스**: 구글에서 크롤링해야 하는 모든 리소스 (이미지, css 파일 등) 또는 페이지에 구글이 엑세스할 수 있는지 확인한다. 즉, 리소스가 robots.txt 규칙으로 차단되지 않았으며 사용자가 엑세스할 수 있어야 한다.
  - [URL 검사 도구](https://support.google.com/webmasters/answer/9012289)를 이용해 리소스 엑세스 가능 여부를 확인할 수 있다.
  - 차단된 리소스는 URL 검사 도구에 개별 URL 수준으로만 표시된다.
- **robots.txt**: 이 파일에 작성된 규칙을 사용하여 크롤링을 방지한다. 사이트에서 요청으로 서버에 과부화를 줄 수 있는 중복 콘텐츠나 중요하지 않은 리소스 (아이콘이나 로고와 같이 자주 사용되는 작은 그래픽)의 크롤링을 차단한다.
  - [콘텐츠 액세스를 차단하는 방법 자세히 알아보기](https://developers.google.com/search/docs/crawling-indexing/control-what-you-share)
- **사이트맵**: 사이트에 중요한 페이지를 구글에 알려주는 매우 중요한 방법이다.
  - 구글이 사이트에서 크롤링할 페이지를 찾고 우선순위를 지정할 수 있다.
  - 콘텐츠가 빠르게 변경되는 사이트나 링크를 통해 검색되지 않을 수 있는 페이지에 특히 중요하다. 또한, 이미지나 동영상과 같이 텍스트가 아닌 콘텐츠를 크롤링하는데 중요하다.
  - [사이드맵에 관해 자세히 알아보기](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)
- [다국적 또는 다국어 사이트](https://developers.google.com/search/docs/fundamentals/get-started#internationalized-or-multi-lingual-sites)
  - `hreflang`을 시용하여 여러 언어로 된 사이트의 페이지에 관해 구글에 알린다.
- [페이지 또는 사이트 이전 가이드라인](https://developers.google.com/search/docs/fundamentals/get-started#migrating-a-page-or-a-site)
- **링크를 크롤링 가능하게 설정한다.**:
  - Google에서는 `href` 속성에 인식 가능한 URL이 포함된 `<a>` 태그인 경우에만 링크를 추적할 수 있다.
- **자바스크립트 사용**
  - [웹사이트의 자바스크립트에 관한 Google의 권장사항](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)을 따른다.
- **무한 스크롤 페이지**: Google에서 무한 스크롤 페이지를 스크롤하는 데 문제가 있을 수 있다. 해당 페이지를 크롤링하려는 경우 페이지로 나눈 버전을 제공한다.
  - [검색 친화적인 무한스크롤 페이지 자세히 알아보기](https://developers.google.com/search/blog/2014/02/infinite-scroll-search-friendly)

<br/>

### 구글에서 내 사이트를 이해하도록 돕기

- 사이트의 주요 정보를 그래픽이 아닌 텍스트로 제공한다.
- 구글에서는 다양한 파일 형식을 파싱하고 색인을 생성할 수 있지만 페이지 콘텐츠를 이해하는데 가장 안전한 방법은 텍스트이다.

**가이드라인 준수**

> 주의: [검색 Essentials](https://developers.google.com/search/docs/essentials)를 따라야 한다. 일부 가이드라인을 따르지 않으면 구글 색인에서 사이트가 삭제될 수 있다.

> 참고: [콘텐츠별 가이드라인](https://developers.google.com/search/docs/fundamentals/get-started#content-specific-guidelines)

- 동영상: 썸네일 제적, 민감하거나 불법인 컨텐츠 제공 X
- 이미지: 이미지 메타데이터 및 대체 텍스트 제공
- 팟캐스팅, 아동용 콘텐츠, 뉴스 등
