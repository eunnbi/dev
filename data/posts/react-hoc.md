---
emoji: ๐
title: High-order Component
date: "2022-01-20"
category: React
preview: "์ฝ๋๋ฅผ ์์ฑํ๋ค๋ณด๋ฉด, ์์ฃผ ๋ฐ๋ณตํด์ ์์ฑํ๊ฒ ๋๋ ์ฝ๋๋ค์ด ์๋ค. ์ฃผ๋ก ๊ทธ๋ฐ ์ฝ๋๋ค์ ํจ์ํํ์ฌ ์ฌ์ฉํ๋ค. ์ปดํฌ๋ํธ๋ ๋ง์ฐฌ๊ฐ์ง์ด๋ค. ์ปดํฌ๋ํธ๋ฅผ ์์ฑํ  ๋ ๋ฐ๋ณต๋๋ ์ฝ๋๋ค์, HoC๋ฅผ ๋ง๋ค์ด์ ํด๊ฒฐํ  ์ ์๋ค. HoC๋ ์ปดํฌ๋ํธ๋ฅผ ์ ๋ฌ๋ฐ์ ์ ์ปดํฌ๋ํธ๋ฅผ ๋ฐํํ๋ ํจ์์ด๋ค. ์ฃผ๋ก ์ปดํฌ๋ํธ ๋ก์ง์ ์ฌ์ฌ์ฉํ๊ธฐ ์ํด ์ฌ์ฉํ๋ค. ๋ฐ๋ณต๋๋ ์ฝ๋๋ฅผ ์์ ๊ธฐ ์ํด ํ๋์ ํจ์, HoC์ ์์ฑํ๋ค. ๊ณ ์ฐจ ์ปดํฌ๋ํธ๋ช ์์ with๋ฅผ ๋ถ์ธ๋ค. ์ธ์๋ก ์ปดํฌ๋ํธ๋ฅผ ๋ฐ๊ณ , ์ ์ปดํฌ๋ํธ๋ฅผ ๋ฐํํ๋ค. ์ด๋ ๋ฐํ๋ ์ปดํฌ๋ํธ๋ ์ธ์๋ก ๋ฐ์ ์ปดํฌ๋ํธ๋ฅผ ๋ ๋๋งํ๋ค. ์ด๋ ์ธ์๋ก ๋ฐ์ ์ปดํฌ๋ํธ์ ์๋ props๋ค์ ๊ทธ๋๋ก ์ ๋ฌํ๊ณ , ํ์์ ๋ฐ๋ผ ์ถ๊ฐ props๋ ์ ๋ฌํ๋ค. Closure ๊ฐ๋์ด ์ฌ์ฉ๋์๋ค. HoC์ด ์ข๋ฃ๋์ด๋ ๋ฐํ๋ ์ปดํฌ๋ํธ๋ ์ธ์๋ก ์ ๋ฌ๋ฐ์ ์ปดํฌ๋ํธ๋ฅผ ๊ธฐ์ตํด์ผ ํ๋ค!"
---

# HoC

`High-order Component (๊ณ ์ฐจ ์ปดํฌ๋ํธ)`

- ์ฝ๋๋ฅผ ์์ฑํ๋ค๋ณด๋ฉด, ์์ฃผ ๋ฐ๋ณตํด์ ์์ฑํ๊ฒ ๋๋ ์ฝ๋๋ค์ด ์๋ค. ์ฃผ๋ก ๊ทธ๋ฐ ์ฝ๋๋ค์ ํจ์ํํ์ฌ ์ฌ์ฉํ๋ค.
- ์ปดํฌ๋ํธ๋ ๋ง์ฐฌ๊ฐ์ง์ด๋ค. ์ปดํฌ๋ํธ๋ฅผ ์์ฑํ  ๋ ๋ฐ๋ณต๋๋ ์ฝ๋๋ค์, HoC๋ฅผ ๋ง๋ค์ด์ ํด๊ฒฐํ  ์ ์๋ค.
- HoC๋ **์ปดํฌ๋ํธ๋ฅผ ์ ๋ฌ๋ฐ์ ์ ์ปดํฌ๋ํธ๋ฅผ ๋ฐํํ๋ ํจ์**์ด๋ค.
- ์ฃผ๋ก **์ปดํฌ๋ํธ ๋ก์ง์ ์ฌ์ฌ์ฉ**ํ๊ธฐ ์ํด ์ฌ์ฉํ๋ค.

## ๋ฐ๋ณต๋๋ ์ฝ๋ (๋น์ทํ ๋ก์ง์ ๊ฐ๋ ์ปดํฌ๋ํธ)

```jsx
// Post.js
import React, { Component } from "react";
import axios from "axios";

const Post = () => {
  const [data, setData] = useState(null);
  const initialize = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      setState(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    initialize();
  }, []);

  if (!data) return null;
  return <div>{JSON.stringify(data)}</div>;
};

export default Post;
```

```jsx
// Comments.js
import React, { Component } from "react";
import axios from "axios";

const Comments = () => {
  const [data, setData] = useState(null);
  const initialize = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/comments?postId=1"
      );
      setState(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    initialize();
  }, []);

  if (!data) return null;
  return <div>{JSON.stringify(data)}</div>;
};

export default Comments;
```

## HoC ์์ฑํ๊ธฐ

- ๋ฐ๋ณต๋๋ ์ฝ๋๋ฅผ ์์ ๊ธฐ ์ํด ํ๋์ ํจ์, `HoC`์ ์์ฑํ๋ค.
- ๊ณ ์ฐจ ์ปดํฌ๋ํธ๋ช ์์ with๋ฅผ ๋ถ์ธ๋ค.

> ์ธ์๋ก ์ปดํฌ๋ํธ๋ฅผ ๋ฐ๊ณ , ์ ์ปดํฌ๋ํธ๋ฅผ ๋ฐํํ๋ค. ์ด๋ ๋ฐํ๋ ์ปดํฌ๋ํธ๋ ์ธ์๋ก ๋ฐ์ ์ปดํฌ๋ํธ๋ฅผ ๋ ๋๋งํ๋ค. ์ด๋ ์ธ์๋ก ๋ฐ์ ์ปดํฌ๋ํธ์ ์๋ `props` ๋ค์ ๊ทธ๋๋ก ์ ๋ฌํ๊ณ , ํ์์ ๋ฐ๋ผ ์ถ๊ฐ `props`๋ ์ ๋ฌํ๋ค.

> Closure ๊ฐ๋์ด ์ฌ์ฉ๋์๋ค. HoC์ด ์ข๋ฃ๋์ด๋ ๋ฐํ๋ ์ปดํฌ๋ํธ๋ ์ธ์๋ก ์ ๋ฌ๋ฐ์ ์ปดํฌ๋ํธ๋ฅผ ๊ธฐ์ตํด์ผ ํ๋ค!

```jsx
// withRequest.js
import React, { Component } from "react";

// ์ปค๋ง ํจ์
const withRequest = url => WrappedComponent => {
  return props => {
    const [data, setData] = useState(null);
    const initialize = async () => {
      try {
        const response = await axios.get(url); // url๋ฅผ ๊ธฐ์ตํด์ผ ํจ.
        setState(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    useEffect(() => {
      initialize();
    }, []);

    return (
      <WrappedComponent {...this.props} data={data} /> // WrapperComponent๋ฅผ ๊ธฐ์ตํด์ผ ํจ.
    );
  };
};

export default withRequest;
```

## HoC ์ฌ์ฉํ๊ธฐ

```jsx
import React, { Component } from "react";
import withRequest from "./withRequest";

const url = "https://jsonplaceholder.typicode.com/posts/1";

const Post = ({ data }) => {
  if (!data) return null;
  return <div>{JSON.stringify(this.props.data)}</div>;
};

export default withRequest(url)(Post);
```

```jsx
import React, { Component } from "react";
import withRequest from "./withRequest";

const url = "https://jsonplaceholder.typicode.com/comments?postId=1";

const Comment = ({ data }) => {
  if (!data) return null;
  return <div>{JSON.stringify(data)}</div>;
};

export default withRequest(url)(Comments);
```

> ์์ ์์๋ก ์์ฑํ ๊ณ ์ฐจ ์ปดํฌ๋ํธ๊ฐ ๋ฆฌ๋์ค์ connect ํจ์์ ์ฌ์ฉ๋ฐฉ๋ฒ์ด ์ ์ฌํ๋ค๊ณ  ์๊ฐํ๋๋ฐ ๊ณต์ ๋ฌธ์๋ฅผ ์ฝ์ด๋ณด๋ connect ํจ์๋ ๊ณ ์ฐจ ์ปดํฌ๋ํธ๋ผ๊ณ  ํ๋ค.

> ์์ ์ค๋ชํ ์์ ๋ง๊ณ ๋ ๋ค์ํ ๋ฐฉ์์ผ๋ก ๊ณ ์ฐจ ์ปดํฌ๋ํธ๋ฅผ ์์ฑํ  ์ ์๋ค.

> [React ๊ณต์๋ฌธ์ - ๊ณ ์ฐจ ์ปดํฌ๋ํธ](https://ko.reactjs.org/docs/higher-order-components.html)
