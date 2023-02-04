---
emoji: 📌
title: HTTP 개념
date: "2021-10-31"
category: Network
preview: " HTTP는 인터넷 상에서 데이터를 주고 받기 위해 서버/클라이언트 모델을 따르는 통신규약을 말한다. 웹에서 브라우저와 서버 간에 데이터를 주고받을 때 HTTP를 따른다. 통신이 끝나면 상태를 유지하지 않는 stateless 프로토콜이다. 즉, 각각의 요청이 서로 독립적이다. 다수의 요청 처리 및 서버의 부하를 줄일 수 있는 이점이 생긴다. HTTP는 일반적으로 TCP/IP 통신 위에서 동작하며 기본 포트는 80번이다."
---

# HTTP 기본 개념

`Hypertext Transfer Protocal`

- HTTP는 **인터넷 상에서 데이터를 주고 받기 위해 서버/클라이언트 모델을 따르는 통신규약**을 말한다.
- 웹에서 브라우저와 서버 간에 데이터를 주고받을 때 HTTP를 따른다.

# HTTP 특징

- 통신이 끝나면 상태를 유지하지 않는 `stateless` 프로토콜이다.
- 즉, 각각의 요청이 서로 독립적이다.
- 다수의 요청 처리 및 서버의 부하를 줄일 수 있는 이점이 생긴다.
- HTTP는 일반적으로 TCP/IP 통신 위에서 동작하며 기본 포트는 80번이다.

# HTTP Request & Response

- 클라이언트란 요청을 보내는 쪽을 말하며 웹 관점에서는 브라우저를 말한다.
- 서버란 요청을 받는 쪽을 말하며 일반적으로 데이터나 서비스를 제공하는 컴퓨터 및 프로그램을 말한다.

## HTTP Request 구조

- Start line
  - http method: GET, POST, PUT, DELETE 등 (요청의 의도를 드러낸다.)
  - request target: HTTP Reqest가 전송되는 목표 주소
  - http version: version에 따라 request 메시지 구조가 다를 수 있어 version을 명시한다. (1.1, 2.0)
- Headers: request에 대한 추가 정보가 담겨 있다. "key: value" 형태로 구성되어 있다.
  - Host: 요청을 받을 서버의 host 이름
  - User-agent: 요청을 보내는 클라이언트에 대한 정보 (예를 들어, 웹 브라우저에 대한 정보)
  - Accept: 해당 요청이 받을 수 있는 응답 타입
  - Connection: 해당 요청이 끝난 후에 클라이언트와 서버가 계속해서 네트워크 커넥션을 유지할 것인지 아니면 끊을 것인지에 대한 지시하는 부분
  - Content-Type: 해당 요청이 보내는 메시지 body의 타입. 예를 들어, JSON을 보내면 application/json
  - Content-Length: 메시지 body의 길이
  - Authorization 인증 토큰을 서버로 보낼 때 사용
  - Cookie "key=value" 형태의 쿠키값 (자동으로 헤더에 담겨진다.)
- Body: request가 전송하는 데이터를 담고 있는 부분. body가 없는 request도 있다.

![HTTP Request Message](1.png)

## HTTP Response 구조

- Status line
  - response의 상태를 간략하게 나타내주는 부분
  - http version, status code, status message로 구성된다.
- Headers: request의 headers와 거의 비슷하지만, response에서만 사용되는 header들이 있다.
  - 예를 들어 response에서는 User-Agent 대신에 Server 헤더가 사용된다.
- Body: request의 body와 동일하며, 데이터를 전송할 필요가 없을 경우 body가 비어있다.

![HTTP Response Message](2.png)
