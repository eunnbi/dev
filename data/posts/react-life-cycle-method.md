---
emoji: ♻️
title: Life Cycle Method
date: "2022-01-12"
category: React
preview: "'리액트를 다루는 기술'이라는 책을 읽고 배운 것을 바탕으로 작성되었다. 생명주기 메서드란? 컴포넌트가 브라우저 화면 상에 나타나고, 업데이트되고, 사라지게될 때 호출되는 메서드들이다. 추가적으로 컴포넌트에서 에러가 발생했을 때 호출되는 메서드도 있다. 생명주기 메서드는 클래스형 컴포넌트에서만 사용할 수 있다. 총 세 가지 카테고리로 나뉜다: Mount, Update, Unmount. DOM이 생성되고 컴포넌트가 브라우저에 렌더링되는 것을 마운트라고 한다."
---

> "리액트를 다루는 기술"이라는 책을 읽고 배운 것을 바탕으로 작성되었다.

<br/>

# 생명주기 메서드란?

- 컴포넌트가 브라우저 화면 상에 나타나고, 업데이트되고, 사라지게될 때 호출되는 메서드들이다. 추가적으로 컴포넌트에서 에러가 발생했을 때 호출되는 메서드도 있다.
- 생명주기 메서드는 클래스형 컴포넌트에서만 사용할 수 있다.
- 총 세 가지 카테고리로 나뉜다: `Mount`, `Update`, `Unmount`

![The summary of the component's life cycle method](1.png)

## Mount

**DOM이 생성되고 컴포넌트가 브라우저에 렌더링되는 것**을 마운트라고 한다.

- `constructor`
- `getDerivedStateFromProps`
- `render`
- `componentDidMount`

### constructor

- 컴포넌트의 생성자 함수이고, state를 초기화 할 수 있다.
- 컴포넌트가 생성될 때 가장 먼저 실행되는 메서드이다.

### getDerivedStateFromProps

- **props값을 state로 사용하고 싶을 때** 사용한다.
- 다른 생명주기 메서드와 달리 `static` 키워드를 붙여야 한다.
- 객체를 반환하면 이 객체가 state로 설정되고, 반면 null이 반환되면 아무 일도 발생하지 않는다.
- 이 메서드는 컴포넌트가 Mount되기 전에 호출되고, 업데이트되기 전에도 매번 호출된다.

```javascript
static getDerivedStateFromProps(nextProps, prevState){
    if (nextProps.value !== prevState.value){
        return { color: nextProps.color };
    }
    return null;
}
```

### render

- 렌더링할 React 엘리먼트를 반환하는 메서드이다.

### componentDidMount

- **Mount가 완료된 후** 호출되는 메서드이다.
- DOM이 생성되고 렌더링이 완료되었기 때문에 DOM에 접근할 수 있다.
- `axios`, `fetch` 등을 이용해 해당 컴포넌트에서 필요로 하는 데이터를 가져올 수 있다.

<br/>

## Update

> **컴포넌트가 리렌더링 되는 경우**
>
> - props 변경될 때
> - state가 변경될 때 (`setState()`)
> - `this.forceUpdate()`가 호출되었을 때
> - 부모 컴포넌트가 리렌더링될 때

### getDerivedStateFromProps

- 이 메서드는 초기 렌더링 전에도 실행되고, 리렌더링 전에도 실행된다.
- props 변화에 따라 state에도 변화를 주고 싶을 때 사용한다.

### shouldComponentUpdate

- **props나 state가 변경되었을 때, 리렌더링 여부를 결정하는 메서드**
- 이 메서드는 true 혹은 false를 반환해야 하며, true를 반환하면 다음 생명주기 메서드가 계속 실행되고, false를 반환하면 작업을 중지한다.
- 만약 `this.forceUpdate()` 함수가 호출되어 업데이트가 진행되는 상태라면 위 메서드는 실행되지 않고, 바로 render 메서드를 실행한다.

```javascript
shouldComponentUpdate(nextProps, nextState){
    console.log("shouldComponentUpdate", nextProps, nextState);
    return nextState.number % 10 !== 4; // 숫자의 마지막 자리가 4면 업데이트하지 않는다.
}
```

### render

### getSnapshotBeforeUpdate

- 업데이트 전의 DOM을 읽을 수 있다.
- 메서드의 반환값은 `componentDidUpdate`의 세 번째 파라미터(`snapshot`)로 전달된다.

```javascript
getSnapshotBeforeUpdate(prevState, prevState){
	if (prevState.array !== this.state.array){
        const { scrollTop, scrollHeight } = this.list;
        return { scrollTop, scrollHeight };
    }
}
```

### componentDidUpdate

- **리렌더링이 완료된 후 호출되는 메서드**이다.
- `prevProps`, `prevState` 파라미터를 통해 업데이트 전의 컴포넌트의 `props`와 `state` 값에 접근할 수 있다.
- `getSnapshotBeforeUpdate` 메서드에서 반환된 값이 있다면 세번째 파라미터로 전달받을 수 있다.

```javascript
// 스크롤바 유지
componentDidUpdate(prevProps, prevState, snapshot){
    if (snapshot){
        const { scrollTop } = this.list;
        if (scrollTop === snapshot.scrollTop) return;
        const diff = this.scrollHeight - snapshot.scrollHeight;
        this.list.scrollTop += diff;
    }
}
```

<br/>

## Unmount

**컴포넌트를 DOM에서 제거하는 것**을 언마운트라 한다.

### componentWillUnmount

- Unmount 되기 전에 실행된다.
- DOM에 직접 등록했던 이벤트 핸들러를 제거하고, 만약에 setTimeout, setInterval 함수로 타이머를 등록했다면 clearTimeout, clearInterval 함수로 제거해야 한다.
- 만약 외부 라이브러리를 사용했고, 해당 라이브러리에 `dispose` 기능이 있다면 이 메서드 안에서 호출하면 된다.

### componentDidCatch

- 이 메서드는 `v16`에서 새롭게 도입되었으며, **컴포넌트 렌더링 도중에 에러가 발생했을 때 호출된다.**

```javascript
class ErrorBoundary extends Component {
    state = {
        error: false
    };

    constructor (props){
       super(props);
    }

    componentDidCatch(error, info){
    	this.setState({
       	    error: true;
    	});
    }

    render() {
        if (this.state.error){
            return <h1>Error!</h1>
        }
        return this.props.children;
    }

}

export default ErrorBoundary;
```

<br/>

![The summary of the component's life cycle method](1.png)

> 참고: [React lifecycle methods diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
