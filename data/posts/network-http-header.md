---
emoji: 🎨
title: HTTP Header
date: "2021-11-03"
category: Network
preview: "HTTP Header는 클라이언트와 서버가 요청 또는 응답할 때 부가적인 정보를 전송할 수 있도록 한다.  General Header (공통 헤더), Request Header (요청 헤더), Response Header (응답 헤더), Entity Header (엔티티 헤더)  General Header는 요청 및 응답 메시지 모두에서 사용 가능한 일반 목적의 (기본적인) 헤더이다. Entity Header는 요청 및 응답 메시지 모두에서 사용 가능한 Entity(본문, 리소스 등)에 대한 정보를 포함하는 헤더이다."
---

# HTTP Header 개념

HTTP Header는 클라이언트와 서버가 요청 또는 응답할 때 부가적인 정보를 전송할 수 있도록 한다.

![HTTP Header](1.png)

# HTTP Header 분류

- General Header (공통 헤더)
- Request Header (요청 헤더)
- Response Header (응답 헤더)
- Entity Header (엔티티 헤더)

## General Header

- 요청 및 응답 메시지 모두에서 사용 가능한 일반 목적의 (기본적인) 헤더
- **Date**: HTTP 메시지를 생성한 일시
- **Connection**: 현재의 HTTP 메시지 전송이 완료된 후 클라이언트와 서버 간 연결의 유지 여부를 제어한다.
  - `Connection: keep-alive`: 현재 커넥션을 유지
  - `Connection: close`: 현재 커넥션 종료
- **Cache-Control**: 캐싱을 허용할지 말지를 정하기 위해 사용된다.
- Pragma / Trailer

## Entity Header

- 요청 및 응답 메시지 모두에서 사용 가능한 Entity(본문, 리소스 등)에 대한 정보를 포함하는 헤더
  - HTTP 메시지 내 포함된 선택적인 리소스에 대한 구체적인 미디어 타입 등의 설명이 담겨 있다. (HTTP 메시지는 이미지, 비디오, 오디오, HTML 문서, 전자메일 등의 리소스들을 운반할 수 있다.)
- **Content-Length**
  - 전달되는 데이터 및 리소스의 바이트 길이 또는 크기 (10진수)
  - 응답 메시지 Body의 길이를 지정하거나 특정 지정된 리소스의 길이를 지정한다.
- **Content-Type**
  - 리소스의 미디어 타입(MIME)과 문자열 인코딩(UTF-8 등)을 지정한다. 이는 Accept 헤더와 대응된다.
  - 타입 및 서브타입으로 구성된다.
    - 타입(type): application, audio, font, image, multipart 등
    - 서브타입(subtype): 각 타입별로 수십에서 수백개 정도 존재
  - `Content-Type: text/html; charset=utf-8`: 리소스가 html 텍스트 문서이고 인코딩 방식이 utf-8임을 나타낸다.
- **Content-Language**: 해당 리로스와 가장 잘 어울리는 사용자 언어
  - `Content-Language: en-US`
- **Content-Encoding**: 미디어 타입의 압축 방식
  - gzip, compress, deflate, identity, br 등
- **Content-Location**: 리소스의 실제 위치를 알려준다.
- **Content-Disposition**: 응답 Body를 브라우저가 어떻게 표시해야 할지 알려준다.
  - `Content-Disposition: inline`: 웹페이지 화면에 표시됨.
  - `Content-Disposition: attachment; filename='filename.csv'`: 다운로드
  - 다운로드되길 원하는 파일은 attachment로 값을 설정하고, filename 옵션으로 파일명까지 지정해줄 수 있다. (파일용 서버인 경우 자주 사용)
- **Content-Security-Policy**: 다른 외부 파일들을 불러오는 경우, 차단할 소스와 불러올 소스를 명시한다.
  - XSS 공격에 대한 방어가 가능하다.
  - 허용한 외부 소스에서만 파일을 가져올 수 있다.
  - `Content-Security-Policy: default-src https`: https를 통해서만 파일을 가져온다.
  - `Content-Security-Policy: default-src 'self'`: 자신의 도메인의 파일들만 가져온다.
  - `Content-Security-Policy: default-src 'none'`: 파일을 가져올 수 없다.
- **Location**: 리소스가 리다이렉트(redirect)된 때에 이동된 주소, 또는 새로 생성된 리소스 주소를 명시한다.
  - 300번대 응답이나 201 Created 응답일 때 어느 페이지로 이동할지를 알려준다.
  - 새로 생성된 리소스의 경우 HTTP 상태 코드`201 Created`가 반환된다.
  - 300번대 응답의 경우 `HTTP/1.1 302 Found Location: /` 응답이 왔다면 브라우저는 `/` 경로로 redirect한다.
- **Last-Modified**: 리소스를 마지막으로 갱신한 일시

## Request Header

- HTTP 요청에서 사용되지만 메시지와 관련이 없는 HTTP 헤더
- 보통 fetch될 리소스나 클라이언트 자체에 대한 정보를 포함한다.
- **Host**: 요청받을 서버의 호스트명 및 포트번호 (HTTP 1.1이후부터 필수항목)
  - `Host: <host>:<port_Optional>`
  - Host 필드에 도메인명 및 호스트명 모두를 포함한 전체 URI 지정이 필요하다.
- **User-Agent**: 클라이언트 소프트웨어(브라우저, OS) 명칭 및 버전 번호
  - `User-Agent: <product> / <product-version> <comment>`
- **Accept**: 클라이언트가 원하는 미디어 타입 및 우선순위를 알린다
  - `Accept: */*`: 어떤 미디어 타입도 가능
  - `Accept: image/*`: 모든 이미지 유형
  - `Accept: text/html`: html text 유형
- **Accept-Charset**: 클라이언트가 원하는 문자 집합
- **Accept-Encoding**: 클라이언트가 원하는 문자 인코딩 방식
- **Accept-Language**: 클라이언트가 원하는 언어
  - 위 4가지 항목은 HTTP Entity Header 중 Content-Type, Content-Type charset=xxx, Content-Encoding, Content-Language과 일대일로 대응된다.
- **Cookie**: 클라이언트 로컬에 저장된 쿠키 정보
- **Authorization**: 사용자가 서버에 인가된 사용자임을 증명할 때 사용한다.
  - `Authorization: <type> <credentials>`
  - 보통 JWT나 Bearer 토큰(인증토큰)을 서버로 보낼 때 사용하며 자격이 증명되지 않을 경우 401 Unauthorized 상태를 알려준다.
  - type: 인증 타입으로 보통 Basic과 Bearer을 사용한다.
  - credentials: 보통 서버에서 발급된 토큰을 사용한다.
- **Origin**: 요청이 어느 주소에서 시작되었는지를 나타낸다.
  - scheme: 사용하는 프로토콜
  - hostname: 서버 이름 또는 ip
  - port: 서버에 열린 tcp 포트
  - `Origin: null`
  - `Origin: <scheme> "://" <hostname> [ ":" <port> ]`

## Response Header

- 위치 또는 서버 자체에 대한 정보(이름, 버전)와 같이 응답에 대한 부가적인 정보를 갖는 헤더
- **Server**: 서버 소프트웨어 정보
- **Set-Cookie**: 서버 측에서 쿠키 정보를 설정할 때 사용한다.
- **Expires**: 리소스가 지정된 일시까지 캐시로써 유효함을 나타낸다. 즉, 응답 컨텐츠가 언제 만료되는지를 나타낸다.
  - `Expires: Thu, 26 Jul 2018 07:28:00 GMT`
  - Cache-Control과 별개로 응답에 Expires 헤더 항목을 가질 수 있다.
  - 단, Cache-Control의 max-age가 있는 경우 이 헤더는 무시된다.
- **Age**: 캐시 관련 정보로, max-age 시간 내에서 얼마나 흘렀는지 초 단위로 알려준다.
- **ETag**: HTTP 컨텐츠가 바뀌었는지를 검사할 수 있는 태그 (쿠키/캐시 관련)
- **Access-Control-Allow-Origin**
  - `Access-Control-Allow-Origin: www.zerocho.com`
  - 요청을 보내는 주소와 요청을 받는 주소가 다르면 CORS 에러가 발생한다.
  - 서버에서 이 헤더에 클라이언트의 주소를 적어주어야 CORS 에러가 나지 않는다.
  - 프로토콜, 서브도메인, 도메인, 포트 중 하나만 달라도 CORS 에러가 난다.
  - `Access-Control-Allow-Origin: *`: 만약 주소를 일일이 지정하기 싫다면 와일드 카드 `*`으로 모든 주소에 CORS 요청을 허용되지만 그만큼 보안이 취약해진다.
- **Allow**: 리소스에 대해 서버 측에서 지원 가능한 HTTP 메소드의 리스트를 나타낸다.
  - `Allow: GET, HEAD`

> 참고
>
> - [[Network] HTTP 헤더의 종류 및 항목](https://gmlwjd9405.github.io/2019/01/28/http-header-types.html)
> - [[HTTP-Header] HTTP 헤더란? 그리고 Header의 종류](https://wonit.tistory.com/308?category=749910)
