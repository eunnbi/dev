---
emoji: 🐳
title: 블로킹/논블로킹, 동기/비동기
date: "2021-11-10"
category: CS
preview: "Blocking vs Non-blocking - 제어권: 함수를 실행할 권리, 제어권을 가진 함수를 자신의 코드를 끝까지 실행한 후, 자신을 호출한 함수에게 돌려준다. Blocking - 다른 함수를 호출할 때 제어권도 함께 넘겨주고, 작업이 끝난 후에 돌려받는 방식 - A함수가 B함수를 호출하면 B에게 제어권을 넘긴다. - 제어권을 넘겨받는 B는 함수를 실행하고 A는 제어권을 넘겨줬기 때문에 잠시 함수 실행을 멈춘다. - B 함수 실행이 다 끝나면 A 함수는 제어권을 돌려받아 다시 함수를 실행한다.  Non-blocking - 다른 함수를 호출할 때 제어권을 넘기지 않고, 자신이 갖고 있는다. - A함수가 B함수를 호출하면, B함수는 실행되지만, 제어권은 넘기지 않는다. - A함수에게 제어권이 있으므로 B함수를 실행한 이후에도 계속 함수를 실행한다."
---

# Blocking vs Non-blocking

- **제어권**: 함수를 실행할 권리, 제어권을 가진 함수를 자신의 코드를 끝까지 실행한 후, 자신을 호출한 함수에게 돌려준다.

## Blocking

- 다른 함수를 호출할 때 제어권도 함께 넘겨주고, 작업이 끝난 후에 돌려받는 방식
- A함수가 B함수를 호출하면 B에게 제어권을 넘긴다.
- 제어권을 넘겨받는 B는 함수를 실행하고 A는 제어권을 넘겨줬기 때문에 잠시 함수 실행을 멈춘다.
- B함수의 실행이 다 끝나면 A함수는 제어권을 돌려받아 다시 함수를 실행한다.
  ![Blocking vs Non-blocking (1)](1.png)

## Non-blocking

- 다른 함수를 호출할 때 제어권을 넘기지 않는다.
- A함수가 B함수를 호출하면, B함수는 실행되지만, 제어권은 넘기지 않는다.
- A함수에게 제어권이 있으므로 B함수를 실행한 이후에도 계속 함수를 실행한다.
  ![Blocking vs Non-blocking (2)](2.png)

<br/>

# Synchronous vs Asynchronous

- 동기와 비동기의 차이는 **호출된 함수의 작업 완료 여부를 신경쓰는지**의 여부의 차이이다.

## Synchronous

- 함수 A가 함수 B를 호출한 뒤, 함수 B의 실행이 다 끝났는지 리턴값을 계속 확인하면서 끝나는 시간에 맞춰 다시 작업을 수행하는 방식

## Asynchronous

- 함수 A가 함수 B를 호출할 때 콜백 함수를 함께 전달해서, 함수 B의 작업이 완료되면 함께 보낸 콜백 함수를 실행한다.
- 함수 A는 함수 B를 호출한 이후로 함수 B의 작업 완료 여부에는 신경쓰지 않는다.

<br/>

# 블로킹과 논블로킹, 동기와 비동기 비교

## Sync-Blocking

- 함수 A는 함수 B의 리턴값을 필요로 한다. 그래서 제어권을 함수 B에게 넘겨주고, 함수 B가 실행을 완료하여 리턴값과 제어권을 돌려줄 때까지 기다린다.

## Sync-Nonblocking

- 함수 A는 함수 B를 호출하지만, 제어권을 넘기지 않고 함수를 계속 실행한다. 하지만 함수 A는 함수 B의 리턴값이 필요로 하기 때문에, 중간중간 B 함수에게 함수 실행을 완료했는지 물어본다.

## Async-Nonblocking

- 함수 A는 함수 B를 호출하지만, 제어권을 넘기지 않고 함수를 계속 실행한다.
- 함수 B를 호출할 때 콜백함수를 함께 전달하여 함수 B는 자신의 작업이 끝나면 함수 A가 준 콜백 함수를 실행한다.

## Async-Blocking

- 함수 A는 함수 B를 호출할 때 콜백함수를 보내고 함수 A는 함수 B에게 제어권을 넘긴다
- 함수 A는 함수 B의 작업의 완료 여부에는 관심이 없지만 제어권을 넘겼으므로 끝날 때까지 기다려야 한다.

![](3.png)