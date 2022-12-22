---
emoji: ⛅
title: Geolocation, Weather API (위치와 날씨)
date: "2022-01-08"
category: Javascript
preview: "Geolocation API 사용자의 현재 위치를 가져오는 API - success : GeolocationPosition 객체를 유일한 매개변수로 받는 콜백함수 - error: GeolocationPositionError 객체를 유일한 매개변수로 받는 콜백함수 - GeolocationPosition 인터페이스: 주어진 시간에 장치가 위치한 지점을 나타냄. - Position.coords: 주어진 시간의 위치 - Position.coords.latitude / Position.coords.longitude 등 - Position.timestamp: 위치를 기록한 시간 - GeolocationPositionError: 에러 발생 이유를 나타냄 - Error.code / Error.message"
---

## Geolocation API

**사용자의 현재 위치를 가져오는 API**<br/>

- `navigator.geolocation.getCurrentPosition(success, error, options);`
- success : `GeolocationPosition` 객체를 유일한 매개변수로 받는 콜백함수
- error: `GeolocationPositionError` 객체를 유일한 매개변수로 받는 콜백함수
- `GeolocationPosition` 객체: **주어진 시간에 장치가 위치한 지점**을 나타냄
  - `Position.coords`: 주어진 시간의 위치
    - `Position.coords.latitude` / `Position.coords.longitude` 등
  - `Position.timestamp`: 위치를 기록한 시간
- `GeolocationPositionError` 객체: **에러 발생 이유**를 나타냄
  - `Error.code` / `Error.message`

> 참고: [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)

<br/>

## Weather API

[API call by geographic coordinates! (lat, lon, API_KEY)](https://openweathermap.org/api)

<br/>

## fetch 함수

**브라우저에서 제공하는 API 호출 함수!**

- 첫 번째 인자로 접근하고자 하는 `URL`, 두 번째 인자로 옵션 객체를 받고 `Promise` 객체를 반환한다.
- 반환된 객체는 API 호출이 성공했을 경우 응답 객체 (`response`)를 `resolve`하고, 실패했을 경우 예외 객체(`error`)를 `reject`한다.

```javascript
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data));
```

- `response.json()`: 응답 객체로부터 `JSON` 포맷의 응답 전문을 자바스크립트 객체로 변환하여 얻을 수 있다.
