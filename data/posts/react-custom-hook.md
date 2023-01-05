---
emoji: 🧪
title: Custom Hook
date: "2022-01-30"
category: React
preview: "💡 커스텀 훅을 이용해 컴포넌트 로직을 함수로 만들어 재사용할 수 있다.커스텀 훅은 이름이 use로 시작하는 자바스크립트 함수이다. 다른 Hook (리액트에서 제공하는 훅 등)을 호출할 수 있다. 같은 Hook을 사용하더라도 state를 공유하지 않는다. 각각의 Hook에 대한 호출은 서로 독립된 state를 반환한다. React 관점에서 단순히 각 컴포넌트에서 useState와 useEffect를 호출한 것이기 때문에 각 컴포넌트의 state와 effect는 독립적이다. Hook은 함수이기 때문에 인자를 통해 Hook끼리 정보를 전달할 수 있다."
---

> 💡 커스텀 훅을 이용해 컴포넌트 로직을 함수로 만들어 재사용할 수 있다.

## 예시

```jsx
// FriendStatus
import React, { useState, useEffect } from "react";

function FriendStatus(props) {
  // 중복 로직 시작
  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });
  // 끝

  if (isOnline === null) {
    return "Loading...";
  }
  return isOnline ? "Online" : "Offline";
}
```

```jsx
// FriendListItem
import React, { useState, useEffect } from "react";

function FriendListItem(props) {
  // 중복 로직 시작
  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });
  // 끝

  return (
    <li style={{ color: isOnline ? "green" : "black" }}>{props.friend.name}</li>
  );
}
```

### ✨ 커스텀 훅을 만들어 중복 로직 최소화하기

- 커스텀 훅은 **이름이 use로 시작하는 자바스크립트 함수**이다.
- 다른 `Hook`(리액트에서 제공하는 훅 등)을 호출할 수 있다.

```jsx
import { useState, useEffect } from "react";

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return isOnline;
}
```

<br/>

### ✨ 커스텀 훅 사용하기

```jsx
function FriendStatus(props) {
  const isOnline = useFriendState(props.friend.id);
  if (isOnline === null) {
    return "Loading...";
  }
  return isOnline ? "Online" : "Offline";
}
```

```jsx
function FriendListItem(props) {
  const isOnline = useFriendState(props.friend.id);
  return (
    <li style={{ color: isOnline ? "green" : "black" }}>{props.friend.name}</li>
  );
}
```

- 같은 Hook을 사용하더라도 **state를 공유하지 않는다.**
- 각각의 Hook에 대한 호출은 서로 **독립**된 state를 반환한다.
- React 관점에서 단순히 각 컴포넌트에서 `useState`와 `useEffect`를 호출한 것이기 때문에 **각 컴포넌트의 state와 effect는 독립적**이다.

### ✨ Hook에서 Hook으로 정보 전달하기

`Hook`은 함수이기 때문에 인자를 통해 `Hook` 끼리 정보를 전달할 수 있다.

```jsx
const friendList = [
  { id: 1, name: "Phoebe" },
  { id: 2, name: "Rachel" },
  { id: 3, name: "Ross" }
];

function ChatRecipientPicker() {
  const [recipientID, setRecipientID] = useState(1);
  const isRecipientOnline = useFriendStatus(recipientID);

  return (
    <>
      <Circle color={isRecipientOnline ? "green" : "red"} />
      <select
        value={recipientID}
        onChange={e => setRecipientID(Number(e.target.value))}
      >
        {friendList.map(friend => (
          <option key={friend.id} value={friend.id}>
            {friend.name}
          </option>
        ))}
      </select>
    </>
  );
}
```

- 지금 선택되어 있는 친구의 온라인 상태 여부를 알 수 있다.
- `recipientID`가 업데이트되면 `useFriendStatus` Hook은 이미 선택되어 있는 친구의 구독을 해지하고 새로 선택된 친구의 상태를 구독할 것이다.

<br/>

> - Custom Hook을 사용하여 컴포넌트의 로직을 뷰와 분리할 수 있다.
> - 중복 로직을 제거하고 Custom Hook을 재사용하도록 할 수 있다.
> - Custom Hook은 함수이고, 함수는 단일책임원칙을 따라야 한다. (하나의 일을 하는 뚜렷한 이름의 함수)

참고: [React 공식문서](https://ko.reactjs.org/docs/hooks-custom.html)
