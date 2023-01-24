---
emoji: 👑
title: Semantic Tag
date: "2023-01-23"
category: HTML
preview: "Semantic은 '의미의', '의미론적인'라는 뜻을 가진다. 따라서 시맨틱 태그란 의미가 있는 태그를 말한다. div나 span과 같이 의미가 없는 태그는 태그 이름만 보고는 어떤 내용이 있는지 전혀 유추할 수 없지만, form, table, article 등 시맨틱 태그들은 어떤 내용이 있는지 명확하게 정의한다. 검색엔진은 태그를 기반으로 페이지 내 콘텐츠들을 이해하고 수집한다. 검색엔진이 사이트의 콘텐츠를 쉽게 이해할 수 있도록 제목은 h1 ~ h6 태그를 사용하여 나타내는 등 의미에 맞는 올바른 태그를 사용하는 것이 중요하다. 사용자가 스크린 리더를 사용하여 페이지를 탐색할 때 도움이 된다. W3C에 따르면 '시맨틱 웹을 사용하면 애플리케이션, 기업 및 커뮤니티에서 데이터를 공유하고 재사용할 수 있다'고 한다. (시맨틱 태그는 개발자 모두에게 명확한 의미를 전달한다.)"
---

# Semantic Tag란?

`Semantic`은 '의미의', '의미론적인'라는 뜻을 가진다. 따라서 시맨틱 태그란 **의미가 있는 태그**를 말한다.

`div`나 `span`과 같이 의미가 없는 태그는 태그 이름만 보고는 어떤 내용이 있는지 전혀 유추할 수 없지만, `form`, `table`, `article` 등 시맨틱 태그들은 어떤 내용이 있는지 명확하게 정의한다.

## Semantic tag 사용의 장점

- 검색엔진은 태그를 기반으로 페이지 내 콘텐츠들을 이해하고 수집한다. 검색엔진이 사이트의 콘텐츠를 쉽게 이해할 수 있도록 제목은 h1 ~ h6 태그를 사용하여 나타내는 등 의미에 맞는 올바른 태그를 사용하는 것이 중요하다.
- 사용자가 스크린 리더를 사용하여 페이지를 탐색할 때 도움이 된다.
- W3C에 따르면 "시맨틱 웹을 사용하면 애플리케이션, 기업 및 커뮤니티에서 데이터를 공유하고 재사용할 수 있다"고 한다. (시맨틱 태그는 개발자 모두에게 명확한 의미를 전달한다.)

# Semantic Tag 종류

![HTML Semantic Tag](1.png)

> article, aside, details, figcaption, figure, footer, header, main, nav, section, summary, time, mark

## article

- **독립적이고 자체적인 콘텐츠**를 포함한다. 콘텐츠 자체로 의미가 있어야 하며, 사이트의 나머지 부분과는 독립적으로 배포할 수 있어야 한다.
- article 요소를 사용할 수 있는 예시: 게시물 (포럼, 블로그), 신문 기사들, 사용자 의견, 제품 카드

```html
<article>
  <h2>Google Chrome</h2>
  <p>
    Google Chrome is a web browser developed by Google, released in 2008. Chrome
    is the world's most popular web browser today!
  </p>
</article>

<article>
  <h2>Mozilla Firefox</h2>
  <p>
    Mozilla Firefox is an open-source web browser developed by Mozilla. Firefox
    has been the second most popular web browser since January, 2018.
  </p>
</article>

<article>
  <h2>Microsoft Edge</h2>
  <p>
    Microsoft Edge is a web browser developed by Microsoft, released in 2015.
    Microsoft Edge replaced Internet Explorer.
  </p>
</article>
```

## section

- 문서의 섹션을 정의한다.
- W3C에 따르면, 섹션은 일반적으로 **제목이 있는 콘텐츠의 주제별 그룹**이다.
- section 요소 내에는 제목이 있는 것이 일반적이다.

```html
<section>
  <h1>WWF</h1>
  <p>
    The World Wide Fund for Nature (WWF) is an international organization
    working on issues regarding the conservation, research and restoration of
    the environment, formerly named the World Wildlife Fund. WWF was founded in
    1961.
  </p>
</section>

<section>
  <h1>WWF's Panda symbol</h1>
  <p>
    The Panda has become the symbol of WWF. The well-known panda logo of WWF
    originated from a panda named Chi Chi that was transferred from the Beijing
    Zoo to the London Zoo in the same year of the establishment of WWF.
  </p>
</section>
```

> 💡 **article vs section**<br/>
>
> - article은 독립적인 콘텐츠를 정의하기 때문에, section보다 더 구체적인 의미를 갖는다.
> - 여러 개의 section을 article로 묶을 수 있고, 여러 개의 article을 section으로 묶을 수 있다.
>
> ```html
> <article>
>   사람
>   <section>여자</section>
>   <section>남자</section>
> </article>
> ```
>
> ```html
> <section id="content">
>   <article>블로그 글 1</article>
>   <article>블로그 글 2</article>
>   <article>블로그 글 3</article>
> </section>
> ```

## header

- 문서나 섹션의 header를 정의한다.
- 페이지의 제목과 같은 **소개 내용**과 **탐색 링크**를 포함한다.
- 일반적으로 **하나 이상의 heading tag** (h1 ~ h6), **로고**, **저자 정보**를 포함한다.
- 하나의 HTML 문서가 여러 header 요소를 가질 수 있지만, footer, address, header 요소 안에 위치해서는 안된다.

```html
<article>
  <header>
    <h1>What Does WWF Do?</h1>
    <p>WWF's mission:</p>
  </header>
  <p>
    WWF's mission is to stop the degradation of our planet's natural
    environment, and build a future in which humans live in harmony with nature.
  </p>
</article>
```

## footer

- 문서나 섹션의 footer를 정의한다.
- **저자 및 저작권 정보, 연락처 청보, 사이트맵** 등의 내용을 포함한다.

```html
<footer>
  <p>Author: Hege Refsnes</p>
  <p><a href="mailto:hege@example.com">hege@example.com</a></p>
</footer>
```

## nav

- **사이트의 탐색 링크를 정의한다.**
- 메뉴, 목차 등에 사용된다.
- 문서의 모든 링크가 nav 요소 안에 있어야 하는 것은 아니다. nav 요소는 탐색 링크의 주요 블록으로 사용된다.

```html
<nav>
  <a href="/html/">HTML</a>
  <a href="/css/">CSS</a>
  <a href="/js/">JavaScript</a>
  <a href="/jquery/">jQuery</a>
</nav>
```

## aside

- 페이지 콘텐츠 이외의 **간접적으로 문서와 관련된 콘텐츠**를 나타낸다.
- **광고, 사이드바, 콜아웃 상자**로 사용된다.

```html
<p>
  My family and I visited The Epcot center this summer. The weather was nice,
  and Epcot was amazing! I had a great summer together with my family!
</p>
<aside>
  <p>
    The Epcot center is a theme park at Walt Disney World Resort featuring
    exciting attractions, international pavilions, award-winning fireworks and
    seasonal special events.
  </p>
</aside>
<p>
  My family and I visited The Epcot center this summer. The weather was nice,
  and Epcot was amazing! I had a great summer together with my family!
</p>
```

## figure, figcaption

- figure 요소는 **삽화, 사진, 다이어그램, 코드 목록과 같은 자체적인 콘텐츠**를 정의한다.
- figcaption 요소는 **figure 요소에 대한 캡션**을 정의하고, figure 요소의 첫번째 또는 마지막 자식으로 배치될 수 있다.
- img 요소는 figure 요소와 다르게 실제 이미지 및 그림을 정의한다.

```html
<figure>
  <img src="pic_trulli.jpg" alt="Trulli" />
  <figcaption>Fig1. - Trulli, Puglia, Italy.</figcaption>
</figure>
```

## main

- 페이지의 지배적인 콘텐츠 영역을 정의한다.

```html
<main>
  <h1>Most Popular Browsers</h1>
  <p>Chrome, Firefox, and Edge are the most used browsers today.</p>
  <article>
    <h2>Google Chrome</h2>
    <p>
      Google Chrome is a web browser developed by Google, released in 2008.
      Chrome is the world's most popular web browser today!
    </p>
  </article>
  <article>
    <h2>Mozilla Firefox</h2>
    <p>
      Mozilla Firefox is an open-source web browser developed by Mozilla.
      Firefox has been the second most popular web browser since January, 2018.
    </p>
  </article>
  <article>
    <h2>Microsoft Edge</h2>
    <p>
      Microsoft Edge is a web browser developed by Microsoft, released in 2015.
      Microsoft Edge replaced Internet Explorer.
    </p>
  </article>
</main>
```

## time

- 날짜 및 시간을 정의한다.

```html
<p>Open from <time>10:00</time> to <time>21:00</time> every weekday.</p>

<p>I have a date on <time datetime="2008-02-14 20:00">Valentines day</time>.</p>
```

## mark

- 하이라이트 표시를 필요로 하는 문자를 정의

```html
<p>Do not forget to buy <mark>milk</mark> today.</p>
```

## details, summary

- details 요소는 사용자가 보거나 숨길 수 있는 추가 세부 정보를 정의한다.
- summary 요소는 details 요소에 대한 가시적 제목을 정의한다.

```html
<details>
  <summary>Epcot Center</summary>
  <p>
    Epcot is a theme park at Walt Disney World Resort featuring exciting
    attractions, international pavilions, award-winning fireworks and seasonal
    special events.
  </p>
</details>
```

> 💡 **HTML 태그를 정하는 팁**
>
> - 사용할 태그를 결정하기 전 **"어떤 요소가 데이터를 가장 잘 설명하고 나타낼까?"** 자문해 본다.
> - HTML 태그는 스타일 기반이 아닌 **데이터를 기반으로 결정되어야 한다.**
>   - 예를 들어, 블로그 글 제목 스타일이 단락과 같은 디자인이더라도, p 태그가 아닌 heading 태그(h1 ~ h6)를 사용해야 한다.
>   - 어떻게 보여야 하는지 스타일을 정의하는 것은 CSS의 몫이다.

> 참고: [w3schools - HTML Semantic Elements](https://www.w3schools.com/html/html5_semantic_elements.asp)
