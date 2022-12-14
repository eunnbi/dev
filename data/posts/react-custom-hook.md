---
emoji: ๐งช
title: Custom Hook
date: "2022-01-30"
category: React
preview: "๐ก ์ปค์คํ ํ์ ์ด์ฉํด ์ปดํฌ๋ํธ ๋ก์ง์ ํจ์๋ก ๋ง๋ค์ด ์ฌ์ฌ์ฉํ  ์ ์๋ค.์ปค์คํ ํ์ ์ด๋ฆ์ด use๋ก ์์ํ๋ ์๋ฐ์คํฌ๋ฆฝํธ ํจ์์ด๋ค. ๋ค๋ฅธ Hook (๋ฆฌ์กํธ์์ ์ ๊ณตํ๋ ํ ๋ฑ)์ ํธ์ถํ  ์ ์๋ค. ๊ฐ์ Hook์ ์ฌ์ฉํ๋๋ผ๋ state๋ฅผ ๊ณต์ ํ์ง ์๋๋ค. ๊ฐ๊ฐ์ Hook์ ๋ํ ํธ์ถ์ ์๋ก ๋๋ฆฝ๋ state๋ฅผ ๋ฐํํ๋ค. React ๊ด์ ์์ ๋จ์ํ ๊ฐ ์ปดํฌ๋ํธ์์ useState์ useEffect๋ฅผ ํธ์ถํ ๊ฒ์ด๊ธฐ ๋๋ฌธ์ ๊ฐ ์ปดํฌ๋ํธ์ state์ effect๋ ๋๋ฆฝ์ ์ด๋ค. Hook์ ํจ์์ด๊ธฐ ๋๋ฌธ์ ์ธ์๋ฅผ ํตํด Hook๋ผ๋ฆฌ ์ ๋ณด๋ฅผ ์ ๋ฌํ  ์ ์๋ค."
---

> ๐ก ์ปค์คํ ํ์ ์ด์ฉํด ์ปดํฌ๋ํธ ๋ก์ง์ ํจ์๋ก ๋ง๋ค์ด ์ฌ์ฌ์ฉํ  ์ ์๋ค.

## ์์

```jsx
// FriendStatus
import React, { useState, useEffect } from "react";

function FriendStatus(props) {
  // ์ค๋ณต ๋ก์ง ์์
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
  // ๋

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
  // ์ค๋ณต ๋ก์ง ์์
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
  // ๋

  return (
    <li style={{ color: isOnline ? "green" : "black" }}>{props.friend.name}</li>
  );
}
```

### โจ ์ปค์คํ ํ์ ๋ง๋ค์ด ์ค๋ณต ๋ก์ง ์ต์ํํ๊ธฐ

- ์ปค์คํ ํ์ **์ด๋ฆ์ด use๋ก ์์ํ๋ ์๋ฐ์คํฌ๋ฆฝํธ ํจ์**์ด๋ค.
- ๋ค๋ฅธ `Hook`(๋ฆฌ์กํธ์์ ์ ๊ณตํ๋ ํ ๋ฑ)์ ํธ์ถํ  ์ ์๋ค.

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

### โจ ์ปค์คํ ํ ์ฌ์ฉํ๊ธฐ

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

- ๊ฐ์ Hook์ ์ฌ์ฉํ๋๋ผ๋ **state๋ฅผ ๊ณต์ ํ์ง ์๋๋ค.**
- ๊ฐ๊ฐ์ Hook์ ๋ํ ํธ์ถ์ ์๋ก **๋๋ฆฝ**๋ state๋ฅผ ๋ฐํํ๋ค.
- React ๊ด์ ์์ ๋จ์ํ ๊ฐ ์ปดํฌ๋ํธ์์ `useState`์ `useEffect`๋ฅผ ํธ์ถํ ๊ฒ์ด๊ธฐ ๋๋ฌธ์ **๊ฐ ์ปดํฌ๋ํธ์ state์ effect๋ ๋๋ฆฝ์ **์ด๋ค.

### โจ Hook์์ Hook์ผ๋ก ์ ๋ณด ์ ๋ฌํ๊ธฐ

`Hook`์ ํจ์์ด๊ธฐ ๋๋ฌธ์ ์ธ์๋ฅผ ํตํด `Hook` ๋ผ๋ฆฌ ์ ๋ณด๋ฅผ ์ ๋ฌํ  ์ ์๋ค.

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

- ์ง๊ธ ์ ํ๋์ด ์๋ ์น๊ตฌ์ ์จ๋ผ์ธ ์ํ ์ฌ๋ถ๋ฅผ ์ ์ ์๋ค.
- `recipientID`๊ฐ ์๋ฐ์ดํธ๋๋ฉด `useFriendStatus` Hook์ ์ด๋ฏธ ์ ํ๋์ด ์๋ ์น๊ตฌ์ ๊ตฌ๋์ ํด์งํ๊ณ  ์๋ก ์ ํ๋ ์น๊ตฌ์ ์ํ๋ฅผ ๊ตฌ๋ํ  ๊ฒ์ด๋ค.

<br/>

> - Custom Hook์ ์ฌ์ฉํ์ฌ ์ปดํฌ๋ํธ์ ๋ก์ง์ ๋ทฐ์ ๋ถ๋ฆฌํ  ์ ์๋ค.
> - ์ค๋ณต ๋ก์ง์ ์ ๊ฑฐํ๊ณ  Custom Hook์ ์ฌ์ฌ์ฉํ๋๋ก ํ  ์ ์๋ค.
> - Custom Hook์ ํจ์์ด๊ณ , ํจ์๋ ๋จ์ผ์ฑ์์์น์ ๋ฐ๋ผ์ผ ํ๋ค. (ํ๋์ ์ผ์ ํ๋ ๋๋ ทํ ์ด๋ฆ์ ํจ์)

์ฐธ๊ณ : [React ๊ณต์๋ฌธ์](https://ko.reactjs.org/docs/hooks-custom.html)
