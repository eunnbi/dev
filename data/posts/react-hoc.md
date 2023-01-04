---
emoji: 📈
title: High-order Component
date: "2022-01-20"
category: React
preview: "코드를 작성하다보면, 자주 반복해서 작성하게 되는 코드들이 있다. 주로 그런 코드들을 함수화하여 사용한다. 컴포넌트도 마찬가지이다. 컴포넌트를 작성할 때 반복되는 코드들은, HoC를 만들어서 해결할 수 있다. HoC는 컴포넌트를 전달받아 새 컴포넌트를 반환하는 함수이다. 주로 컴포넌트 로직을 재사용하기 위해 사용한다. 반복되는 코드를 없애기 위해 하나의 함수, HoC을 작성한다. 고차 컴포넌트명 앞에 with를 붙인다. 인자로 컴포넌트를 받고, 새 컴포넌트를 반환한다. 이때 반환된 컴포넌트는 인자로 받은 컴포넌트를 렌더링한다. 이때 인자로 받은 컴포넌트의 원래 props들을 그대로 전달하고, 필요에 따라 추가 props도 전달한다. Closure 개념이 사용되었다. HoC이 종료되어도 반환된 컴포넌트는 인자로 전달받은 컴포넌트를 기억해야 한다!"
---

# HoC

`High-order Component (고차 컴포넌트)`

- 코드를 작성하다보면, 자주 반복해서 작성하게 되는 코드들이 있다. 주로 그런 코드들을 함수화하여 사용한다.
- 컴포넌트도 마찬가지이다. 컴포넌트를 작성할 때 반복되는 코드들은, HoC를 만들어서 해결할 수 있다.
- HoC는 **컴포넌트를 전달받아 새 컴포넌트를 반환하는 함수**이다.
- 주로 **컴포넌트 로직을 재사용**하기 위해 사용한다.

## 반복되는 코드 (비슷한 로직을 갖는 컴포넌트)

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

## HoC 작성하기

- 반복되는 코드를 없애기 위해 하나의 함수, `HoC`을 작성한다.
- 고차 컴포넌트명 앞에 with를 붙인다.

> 인자로 컴포넌트를 받고, 새 컴포넌트를 반환한다. 이때 반환된 컴포넌트는 인자로 받은 컴포넌트를 렌더링한다. 이때 인자로 받은 컴포넌트의 원래 `props` 들을 그대로 전달하고, 필요에 따라 추가 `props`도 전달한다.

> Closure 개념이 사용되었다. HoC이 종료되어도 반환된 컴포넌트는 인자로 전달받은 컴포넌트를 기억해야 한다!

```jsx
// withRequest.js
import React, { Component } from "react";

// 커링 함수
const withRequest = url => WrappedComponent => {
  return props => {
    const [data, setData] = useState(null);
    const initialize = async () => {
      try {
        const response = await axios.get(url); // url를 기억해야 함.
        setState(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    useEffect(() => {
      initialize();
    }, []);

    return (
      <WrappedComponent {...this.props} data={data} /> // WrapperComponent를 기억해야 함.
    );
  };
};

export default withRequest;
```

## HoC 사용하기

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

> 앞서 예시로 작성한 고차 컴포넌트가 리덕스의 connect 함수와 사용방법이 유사하다고 생각했는데 공식 문서를 읽어보니 connect 함수도 고차 컴포넌트라고 한다.

> 앞서 설명한 예시 말고도 다앙한 방식으로 고차 컴포넌트를 작성할 수 있다.

> [React 공식문서 - 고차 컴포넌트](https://ko.reactjs.org/docs/higher-order-components.html)
