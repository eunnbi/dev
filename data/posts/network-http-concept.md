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

### HTTP Method

- **GET**: 리소스 조회를 요청하는 메서드이다.
- **POST**: 데이터 생성을 요청하는 메서드이다. 요청 시 데이터를 함께 전송한다. (파일 전송 가능)
- **PUT**: 존재하는 리소스에 대한 수정을 요청하는 메서드이다. 요청 시 데이터를 함께 전송한다. 이때, 받은 데이터로 존재하는 리소스를 전체 수정한다. 만약 해당 리소스가 없다면 생성한다.
- **PATCH**: 존재하는 리소스에 대한 수정을 요청하는 메서드이다. PUT과 다르게, 리소스 일부만 수정하는 메서드이다.
- **DELETE**: 존재하는 리소스에 대한 삭제를 요청하는 메서드이다.
- **HEAD**: 서버의 헤더 정보를 요청하는 메서드이다. GET과 비슷하지만, 데이터가 아닌 헤더 정보를 요청한다. 이에 따라 HTTP 응답 메세지에는 Body 없이 HTTP 헤더 정보와 상태줄만 있다.

> **HTTP Method 비교**
>
> ![HTTP Method Comparison](3.png)
>
> - 안전: 계속 메소드를 호출해도 리소스를 변경하지 않는다는 뜻
> - 멱등: 메소드를 계속 호출해도 결과가 똑같다는 뜻
> - 캐시 가능: 데이터를 효율적으로 가져올 수 있다는 뜻 (실제로는 GET과 HEAD만 주로 캐싱이 쓰인다.)

## HTTP Response 구조

- Status line
  - response의 상태를 간략하게 나타내주는 부분
  - http version, status code, status message로 구성된다.
- Headers: request의 headers와 거의 비슷하지만, response에서만 사용되는 header들이 있다.
  - 예를 들어 response에서는 User-Agent 대신에 Server 헤더가 사용된다.
- Body: request의 body와 동일하며, 데이터를 전송할 필요가 없을 경우 body가 비어있다.

![HTTP Response Message](2.png)

### HTTP 상태 코드

**100번대**: `Informational`

- 요청이 수신되어 처리중임을 나타낸다.

**200번대**: `Successful`

- 요청 정상 처리
- **200 : OK**, GET 요청에 대한 성공
- **201 : Created**, 요청 성공해서 새로운 리소스 생성됨.
- **202 : Accepted**, 요청이 접수되었으나 처리가 완료되지 않았음.
- **204 : No Content**, 성공했으나 응답 본문에 데이터가 없음.
- **205 : Reset Content**, 성공했으나 클라이언트의 화면을 새로고침하도록 권고

**300번대** `Redirection`

- 요청을 완료하려면 추가 행동이 필요
- **301 : Moved Permanently**, 요청한 자원이 새 URL에 존재, 리다이렉트시 요청 메서드가 GET으로 변하고, 본문이 제거될 수 있음
- **302 : Found**, 요청한 자원의 URL이 일시적으로 변경됨. 새롭게 변경된 URI는 나중에 만들어질 수 있음. 그러므로, 클라이언트는 향후의 요청도 반드시 동일한 URI로 해야 함. 리다이렉트시 요청 메서드가 GET으로 변하고, 본문이 제거될 수 있음.
- **303 : See Other**, 요청한 자원이 임시 주소에 존재. 클라이언트가 요청한 리소스를 다른 URI에서 GET 요청을 통해 얻어야 할 때, 서버가 클라이언트로 직접 보내는 응답
- **304 : Not Modified**, 요청한 자원이 변경되지 않았으므로 클라이언트에서 캐싱된 자원을 사용하도록 권고. ETag와 같은 정보를 활용하여 변경 여부를 확인 (캐시 목적으로 사용됨)
- **307 : Temporary Redirect,** 클라리언트가 요청한 리소스가 다른 URI에 있으며, 이전 요청과 동일한 메소드를 사용하여 요청해야 함. 302와 비슷, 리다이렉트시 요청 메서드와 본문 유지(요청 메서드를 변경하면 안된다.)
- **308 : Permanent Redirect,** 요청한 자원이 새 URL에 존재, 301과 비슷, 리다이렉트시 요청 메서드와 본문 유지(처음 POST를 보내면 리다이렉트도 POST 유지)

**400번대**: `Client Error`

- 클라이언트 오류, 잘못된 문법 등으로 서버가 요청을 수행할 수 없음
- **400 : Bad Request**, 잘못된 요청(잘못된 문법으로 요청)
- **401 : Unauthorized**, 권한 없이 요청. 클라이언트가 해당 리소스에 대한 인증이 필요함.
- **403 : Forbidden**, 서버에서 해당 자원에 대해 접근 금지
- **404 : Not Found**, 요청 리소스를 찾을 수 없음.
- **405 : Method Not Allowed**, 허용되지 않은 요청 메서드
- **409 : Conflict**, 최신 자원이 아닌데 업데이트하는 경우. ex) 파일 업로드 시 버전 충돌

**500번대**: `Server Error`

- 서버 오류, 서버가 정상 요청을 처리하지 못함
- **500 : Internal Sever Error**, 서버가 처리 방법 모름
- **501 : Not Implemented**, 요청한 동작에 대해 서버가 수행할 수 없는 경우
- **503 : Service Unavailable**, 서버가 과부하 또는 유지 보수로 내려간 경우
