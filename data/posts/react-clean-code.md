---
emoji: 🧹
title: Frontend Clean Code
date: "2022-07-05"
category: React
preview: ""
---

> 👉 [토스ㅣSLASH 21 - 실무에서 바로 쓰는 Frontend Clean Code](https://www.youtube.com/watch?v=edWbHp_k_9Y) 영상을 보고 정리한 내용입니다.

# 실무에서의 클린 코드

클린코드라고 하면 '명확한 이름', '중복 줄이기'를 먼저 말하지만, 실무에서의 클린코드는 좀 더 섬세하게 코드를 정리하는 스킬이 필요하다.

흐름 파악이 어렵고 도메인 맥락 표현이 안 되어 동료에게 물어봐야 알 수 있는 코드는 유지보수할 때 시간이 오래 걸리고, 추후에 기능을 추가하기도 어렵다.

실무에서의 클린 코드는 **유지보수 시간을 단축시킬 수 있고, 버그가 났을 때 디버깅 시간도 단축되는 코드**를 말한다.

# 🤦‍♀️ 안일한 코드 추가

새로운 파일을 만들고 코드를 짤 때는 클린했지만, 기능을 추가하는 상황에서 안일하게 코드를 추가하면 어지러운 코드가 될 수 있다. 반드시 큰 그림을 보며 코드를 추가해야 한다.

1. 하나의 목적인 코드가 흩뿌려져 있다. => 하나의 목적인 코드는 뭉쳐두기
2. 하나의 함수가 여러가지 일을 한다. => 함수는 한가지 일만 하도록 쪼개기
3. 함수의 세부 구현 단계가 제각각이다. => 세부 구현 단계 통일 (함수 위계 맞추기)

클린 코드는 **짧은 코드가 아니라 원하는 로직을 빠르게 찾을 수 있는 코드**이다!<br/>
원하는 로직을 빠르게 찾으려면...

1. **응집도**를 높여 하나의 목적인 코드를 뭉쳐두어야 한다.
2. **단일 책임 원칙**에 따라 함수는 한 가지 일만 하도록 한다.
3. **추상화**를 통해 함수 세부 구현 단계를 통일해야 한다.

<br/>

# 🚀 로직을 빠르게 찾을 수 있는 코드

## 1. 응집도

💖 **같은 목적의 코드는 뭉쳐 두자**

같은 목적의 코드를 하나로 뭉치는 방법 중 하나가 **커스텀 훅**을 이용하는 것이다. **당장 몰라도 되는 디테일**만 커스텀 훅 안에 뭉쳐서 숨겨두면 짧은 코드만 보고도 빠르게 코드의 목적을 파악할 수 있다. 하지만 **코드 파악에 필수적인 핵심 정보**까지 뭉쳐서 커스텀 훅에 숨겨두면 여러 모듈을 넘나들며 흐름을 파악해야 한다.

```jsx
function QuestionPage() {
  const [openPopup] = useMyExportPopup(export.id);
  return <button onClick={openPopup}>질문하기</button>;
}
```

- 위 코드는 어떤 팝업을 여는지 파악이 되지 않는다. 왜냐하면 팝업의 제목, 내용, 확인 버튼 클릭 시 액션 함수가 다 커스텀 훅 내부에 있기 때문이다.
- 어떤 팝업을 여는지 파악하기 위해서는 커스텀 훅 내부를 봐야 한다.

```jsx
function QuestionPage() {
  const [openPopup] = usePopup();
  const handleClick = () => {
    openPopup({
      title: "보험 질문하기",
      content: <div>전문가가 설명드려요</div>,
      onConfirm: submitQuestion(export.id)
    });
  }
  const submitQuestion = (export) = () => {
    await sendQuestion(export.id);
    alert("질문을 전송했습니다!");
  }
  return <button onClick={openPopup}>질문하기</button>;
}
```

- 반면 위의 코드는 팝업 제목, 내용, 확인 버튼 클릭 시 액션 함수를 커스텀 훅이 반환한 팝업을 여는 함수의 인자로 전달한다.
- 그래서 굳이 커스텀 훅 내부의 세부 구현 (팝업을 열고 닫을 때 사용하는 상태, 컴포넌트 세부 마크업 등) 을 보지 않아도 어떤 기능을 하는 팝업을 여는지 로직을 빠르게 파악할 수 있다.
- 팝업 제목, 내용, 확인 액션 함수와 같은 핵심 데이터는 다르지만 세부구현은 동일하다면, 커스텀 훅을 재사용할 수 있다.

> 👉 **선언적 프로그래밍** : 핵심 데이터만 전달받고 세부 구현은 뭉쳐 숨겨 두는 개발 스타일
>
> - "무엇"을 하는 함수인지 빠르게 이해할 수 있다.
> - "무엇"만 바꿔서 쉽게 재사용이 가능하다.

> 커스텀 훅을 사용하여 컴포넌트 로직을 분리할 때 숨겨도 될 세부 구현과 남겨야 할 핵심 데이터를 나누어, 세부 구현은 커스텀 훅 내부에 숨기고, 핵심 데이터는 바깥에서 인자로 넘기도록 구현한다. 그러면 커스텀 훅 내부의 세부 구현을 보지 않아도 컴포넌트 로직을 빠르게 파악할 수 있다.

## 2. 단일 책임

💖 **한가지 일을 하는 뚜렷한 이름의 함수를 만들자**

이미 있는 함수에 기능을 추가하는 것보다 한 가지 일만 하는 명확한 이름의 함수들로 쪼개는 것이 좋다. 리액트 컴포넌트도 마찬가지이다. 하나의 리액트 컴포넌트에 계속 로직을 추가하는 것보다 한가지 일을 하는 컴포넌트로 분리해야 한다.

**Example 1**

```jsx
const onClick = async () => {
  log("제출 버튼 클릭");
  await openConfirm();
};
<button onClick={onClick} />;
```

- 버튼의 클릭 이벤트 함수에 로그 찍는 함수와 API 호출 함수가 있어, 2가지 일을 한다.

```jsx
<LogClick message="제출 버튼 클릭">
  <button onClick={openConfirm} />
</LogClick>
```

- LogClick이라는 컴포넌트를 만들어 버튼을 감싸게 하고 LogClick 컴포넌트에서 props로 전달받은 메시지를 찍는 함수를 실행하면, 버튼의 클릭 이벤트 함수에서는 API 호출에만 신경쓸 수 있다.
- 또한, message prop값만 다르게 하여 LogClick 컴포넌트를 재사용할 수 있다.

**Example 2**

```jsx
// IntersectionObserver 세부 구현 코드와 API 호출이 섞여 있는 경우
const targetRef = useRef(null);
useEffect(() => {
  const observer = new InsersectionObserver(([{ isIntersecting }]) => {
    if (isIntersecting) {
      fetchCats(nextPage);
    }
  });

  if (targetRef && targetRef.current) {
    observer.observe(targetRef.current);
  }

  return () => {
    observer.unobserve(targetRef.current);
  };
}, [targetRef]);

return <div ref={targetRef}>더보기</div>;
```

```jsx
<InsersectionArea onImpression={() => fetchCats(nextPage)}>
  <div>더보기</div>
</InsersectionArea>
```

- IntersectionArea라는 컴포넌트를 만들어서 옵저버 세부 구현 코드는 숨겨두고, API 호출 함수를 props로 넘겨주도록 하여 옵저버 세부 코드와 API 호출을 분리할 수 있다.
- API 호출 함수를 props로 넘기기 때문에 API 호출 함수만 다르게 하여 IntersectionArea 컴포넌트를 재사용할 수 있다.

> 기본적인 단일 책임 원칙을 함수 및 컴포넌트를 구현할 때 지켜야 하며, 한가지 일을 하는 뚜렷한 이름의 함수 및 컴포넌트들은 재사용이 용이하다.

<br/>

## 3. 추상화

💖 **핵심 개념을 뽑아내자**

얼마나 추상화할 것인가??

```jsx
// level 1 (함수 전달)
<ConfirmButton onConfirm={() => showMessage("성공")}>전송</ConfirmButton>
```

```jsx
// level 2 (메시지만 전달)
<ConfirmButton message="성공">전송</ConfirmButton>
```

```jsx
// level 3
<ConfirmButton />
```

> **상황에 따라 필요한 만큼 추상화하면 된다.** 하지만, 너무 이르게 추상화를 해버리면 나중에 추상화를 깨버려야 하는 상황이 발생할 수 있다.

🤦‍♀️ 추상화 수준이 섞여 있으면 코드 파악이 어렵다.

```jsx
<Title>별점을 매겨주세요</Title> // 높은 추상화
<div>
	{STARS.map(() => <Star/>)} {/* 낮은 추상화 */}
</div>
<Reviews/> // 높은 추상화
{rating !== 0 && (   // 중간 추상화
	<>
    	<Agreement/>
    	<Button rating={rating} />
    </>
)}
```

> **추상화 단계가 비슷하도록 정리한다. 추상화 수준이 높은 것끼리, 낮은 것끼리 모은다.**

```jsx
<Title>별점을 매겨주세요</Title>
<Stars/>
<Reviews/>
<AgreementButton show={rating !== 0} />
```

> **클린 코드를 작성하기 위해서는...**
>
> 1. 담대하게 기존 코드 수정하기, 구조 뜯기를 두려워하지 말자!
> 2. 큰 그림 보는 연습히기, 기능 추가 자체는 클린해도, 전체적으로는 어지러울 수 있다.
> 3. 코드 개선에 대해 팀원들과 이야기하기
> 4. 문서로 적어보기, 코드가 향후 어떤 점에서 위험할 수 있는지, 어떻게 개선할 수 있을지 적어보자

> 👀 React를 사용하면서 항상 clean code를 작성하려고 노력하지만, 방법을 몰라 리팩토링을 포기하는 경우가 있었다. 하지만 이제는 내가 작성한 기존 코드를 어떻게 수정해야 clean code가 될 수 있을지 방법을 찾아 나갈 수 있을 것 같다. 👍
