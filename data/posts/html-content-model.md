---
emoji: 🏹
title: Content Model
date: "2023-01-23"
category: HTML
preview: "HTML5 이전에는 태그들을 인라인 요소와 블록 요소로 구분했다.하지만, HTML5에서는 명확한 정보구조, 설계 및 구성을 위해 카테고리를 정의하여 비슷한 성격끼리 태그를 그룹화했는데 이를 콘텐츠 모델이라고 한다. 어떤 요소에 어떤 콘텐츠가 포함되어야 하는 가와 어떤 요소가 어떤 요소를 포함할 수 있는지 정의하는 것이라 할 수 있다. 콘텐츠 모델에는 총 7개의 카테고리가 있다. 각각의 요소들은 하나 또는 여러 개의 카테고리에 속한다. Metadata Content, Flow Content. Sectioning Content, Heading Content, Phrasing Content, Embedded Content, Interactive Content"
---

# Content Model이란?

HTML5 이전에는 태그들을 인라인 요소와 블록 요소로 구분했다.하지만, HTML5에서는 **명확한 정보구조, 설계 및 구성을 위해 카테고리를 정의하여 비슷한 성격끼리 태그를 그룹화**했는데 이를 콘텐츠 모델이라고 한다. **어떤 요소에 어떤 콘텐츠가 포함되어야 하는 가와 어떤 요소가 어떤 요소를 포함할 수 있는지 정의하는 것이라 할 수 있다.**

> 참고: [Block Level Element vs Inline Level Element](https://sunny-wish-861.notion.site/Block-Inline-6f2d99dcf178408ea4fd3138c616d090)

콘텐츠 모델에는 총 7개의 카테고리가 있다. 각각의 요소들은 하나 또는 여러 개의 카테고리에 속한다.

> Metadata Content, Flow Content. Sectioning Content, Heading Content, Phrasing Content, Embedded Content, Interactive Content

![Content Modal Diagram](1.png)

## Metadata Content

- 콘텐츠의 스타일, 동작을 설정하거나 문서 간 관계 등 브라우저에 직접적으로 표시되지 않는 문서의 정보를 포함하는 요소들이 있다.
- base, link, meta, noscript, script, style, title
- 대부분 `<head>`내에 작성되는 태그들이다.

```html
<head>
  <meta charset="utf-8" />
  <meta name="description" content="생활코딩의 소개자료" />
  <meta
    name="keywords"
    content="코딩, coding, 생활코딩, 프로그래밍, html, css, javascript"
  />
  <meta name="author" content="egoing" />
  <meta http-equiv="refresh" content="30" />
</head>
```

## Flow Content

- 문서의 자연스러운 흐름에 의해 배치되는 요소들을 포함한다.
- Metadata Content에 해당하는 일부 태그들만 Flow Content에서 제외되며 대부분이 Flow Content에 포함한다.
- a, abbr, address area (if it is a descendant of a map element), article, aside, audio, b, bdo, blockquote, br, button, canvas, cite, code, datalist, del, details, dfn, div, dl, em, embed, fieldset, figure, footer, form, h1 ~ h6, header, hgroup, hr, i, iframe, img, input, ins, kbd, keygen, label, map, mark, math, menu, meter, nav, noscript, object, ol, output, p, pre, progress, q, ruby, samp, script, section, select, small, span, strong, style (if the scoped attribute is present), sub, sup, svg, table, textarea, time, ul, var, video, wbr, 텍스트

## Sectioning Content

- Heading content와 footer의 범위를 정의하는 콘텐츠를 말한다.
- 문서의 구조와 관련된 요소들을 포함한다.
- article, aside, nav, section

## Heading Content

- Section content의 header를 정의하는 콘텐츠를 말한다.
- 제목을 나타내는 태그들을 포함한다.
- h1, h2, h3, h4, h5, h6, hgroup

## Phrasing Content

- 문서의 텍스트 또는 텍스트를 꾸며주는 문단 내부 레벨로 사용되는 요소들이 포함된다.
- a (if it contains only phrasing content), abbr, area (if it is a descendant of a map element), audio, b, bdo, br, button, canvas, cite, code, datalist, del (if it contains only phrasing content), dfn, em, embed, i, iframe, img, input, ins (if it contains only phrasing content), kbd, keygen, label, map (if it contains only phrasing content), mark, math, meter, noscript, object, output, progress, q, ruby, samp, script, select, small, span, strong, sub, sup, svg, textarea, time, var, video, wbr, 텍스트

## Embedded Content

- 외부 콘텐츠를 표현하는 요소들이 포함되며 오디오나 비디오, 이미지 등 멀티미디어 관련 요소들이 이에 해당한다.
- audio, canvas, embed, iframe, img, math, object, svg, video

## Interacitve Content

- 사용자와 상호작용을 하는 요소들이 포함되며 대표적으로 form 요소들이 이에 해당한다.
- a, audio (if the controls attribute is present), button, details, embed, iframe, img (if the usemap attribute is present), input (if the type attribute is not in the hidden state), keygen, label, menu (if the type attribute is in the toolbar state), object (if the usemap attribute is present), select, textarea, video (if the controls attribute is present)
