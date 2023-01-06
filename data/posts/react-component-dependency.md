---
emoji: 🎨
title: 컴포넌트의 의존성 관리
date: "2022-06-29"
category: React
preview: "👉 컴포넌트, 다시 생각하기 영상을 보고 정리한 내용입니다. React 컴포넌트의 의존성 파악하기 1. 💅 스타일: css, scss, css-in-js 등등 2. ⚓ 로직: UI 조작에 필요한 커스텀 로직, custom hook 3. 🌐 전역 상태: 현재 UI를 표현하기 위해 유저 액선을 통해 만들어진 상태 4. 👇 props: 상위 컴포넌트에 대한 의존성 5. 🚀 리모트 데이터 스키마: API 서버에서 내려주는 데이터의 모양 page 기반 라우팅을 한다면 컴포넌트들은 루트 컴포넌트에 대한 의존성을 가지게 된다. 컴포넌트에 새로운 정보를 추가할 경우 하위 컴포넌트의 props, useEffect 등을 수정해야 할 수 있다."
---

> 👉 [컴포넌트, 다시 생각하기](https://www.youtube.com/watch?v=HYgKBvLr49c) 영상을 보고 정리한 내용입니다.

# React 컴포넌트의 의존성 파악하기

1. 💅 스타일: css, scss, css-in-js 등등
2. ⚓ 로직: UI 조작에 필요한 커스텀 로직, custom hook
3. 🌐 전역 상태: 현재 UI를 표현하기 위해 유저 액선을 통해 만들어진 상태
4. 👇 props: 상위 컴포넌트에 대한 의존성
5. 🚀 리모트 데이터 스키마: API 서버에서 내려주는 데이터의 모양

page 기반 라우팅을 한다면 컴포넌트들은 **루트 컴포넌트에 대한 의존성**을 가지게 된다. 컴포넌트에 새로운 정보를 추가할 경우 하위 컴포넌트의 `props`, `useEffect` 등을 수정해야 할 수 있다.

> 예시 : Article 컴포넌트에 새로운 정보 추가
> ![예시 : Article 컴포넌트에 새로운 정보 추가하는 경우 수정 과정](1.png)

# 의존성 관리를 위한 4가지 원칙

## 1. 비슷한 관심사라면 함께 두기

- 비슷한 관심사, 즉 **서로의 의존성이 깊다면** 한 폴더에 같이 두는 것이 좋다.
- 컴포넌트를 수정할 때, 컴포넌트가 의존하는 파일을 찾기 쉽다.
- 📁 `Component` 폴더
  - `Component.tsx` or `index.tsx` (컴포넌트 렌더링)
  - `Component.styles.ts` (컴포넌트 스타일)
  - `useComponent.ts` (컴포넌트 로직)

> 👀 지금까지 styled component가 많아져도 컴포넌트와 한 파일 내에 두었는데 앞으로는 스타일 관련 파일을 따로 만들어 한 폴더 내에 두도록 해야겠다. 그리고 custom hook은 hook 폴더에 넣어 일괄적으로 관리했는데 앞으로는 공통으로 사용되는 훅만 hook 폴더에 넣고, 특정 컴포넌트에서만 사용되는 훅은 해당 컴포넌트 폴더에서 관리해야겠다.

## 2. 데이터를 ID 기반으로 전역적으로 관리하기

- 이 원칙은 리모트 데이터 스키마와 관련이 있다.
- 데이터를 ID를 기반으로 전역적으로 관리하면 상위 컴포넌트에서 props로 id만 전달하면 하위 컴포넌트는 id를 이용해 데이터에 바로 접근할 수 있다.
- 데이터가 아닌 id를 props로 전달하기 때문에 리모트 데이터 스키마가 바뀌어도 props를 수정할 필요가 없다.

> 👀 `React Query`와 접목시켜보자! 상위 컴포넌트에서 data가 아닌 queryKey를 props로 전달하면 하위 컴포넌트에서는 `queryClient.getQueryData(queryKey)`를 이용하여 전역에서 queryKey로 관리되는 데이터를 바로 가져올 수 있다.

## 3. 의존성 그대로 드러내기

- 의존성을 `props namimg`에 드러내면 컴포넌트 간 의존성이나 모델에 대한 의존성을 명확히 파악할 수 있고 어떻게 의존성을 느슨하게 만들어야 하는지 눈에 보인다.

![UserCard 컴포넌트 UI 예시](2.png)

```typescript
// 1. Bad 👎
interface UserCardProps {
  leftImageThumbnailUrl: string;
  title: string;
  title2: string;
  caption: string;
  rightDotColor: string;
  rightCaption: string;
}

// 2. 의존하는 모델을 그대로 드러내기 (User와 Image 모델)
interface UserCardProps {
  userImageThumbnailUrl: string;
  userName: string;
  userNickname: string;
  userTotalFollwerCount: number;
  userLastActivityAt: Date;
}

// 3. 모델 간의 연결 정보를 그래도 드러내기 (User -> Image)
interface UserCardProps {
  user: {
    name: string;
    nickname: string;
    totalFollwerCount: number;
    lastActivityAt: Date;
    image: {
      thumbnailUrl: string;
    };
  };
}
// 한 컴포넌트에서 여러 모델을 사용하는 것은 관심사 분리가 안된 것이다. 👎

// 4. 의존하는 모델에 따라 컴포넌트 분리하기
interface UserCardProps {
  user: {
    name: string;
    nickname: string;
    totalFollwerCount: number;
    lastActivityAt: Date;
    image: {
      thumbnailUrl: string;
    };
  };
}

interface AvatarProps {
  image: {
    thumbnailUrl: string;
  };
}
// 컴포넌트 간의 의존성이 크다. (컴포넌트의 재사용성이 낮다) 👎

// 5. user와 image 데이터가 아닌 데이터 ID를 props로 받아온다면 컴포넌트 간 의존성이 느슨해질 것이다.
interface UserCardProps {
  userId: string;
}

interface AvatarProps {
  imageId: string;
}
```

> 👀 `props naming`이 중요하다는 것을 알고 있었지만, 어떻게 이름을 지어야 할지 항상 고민이 있었다. 하지만, 이제는 의존하는 모델을 드러내는 이름을 사용해야 겠다. 또한, **모델의 연결 정보**도 `props naming`에 드러낼 수 있다는 것을 새롭게 배웠다. 하지만, 중요한 것은 **관심사를 분리**하는 것과 **컴포넌트 간의 의존성을 느슨하게** 하는 것이다. 한 컴포넌트에서 여러 모델을 사용하지 않도록 관심사를 분리하고, 컴포넌트를 분리하면서 생긴 의존성을 느슨하게 하면 훨씬 **재사용성이 높아진 컴포넌트**를 만들 수 있다.

## 4. 모델 기준으로 컴포넌트 분리하기

- 현재 개발할 때 편리한 것보다 나중에 변경할 때 편리하기 위한다는 관점에서 컴포넌트를 나누는 것이 좋다.
- 즉, 유지보수가 편하도록 컴포넌트를 나누어야 한다.
- 컴포넌트는 리모트 데이터 스키마에 따라 변하는 경우가 많기 때문에 **리모트 데이터 스키마 변화에 잘 대응하도록** 모델을 기준으로 컴포넌트를 분리해야 한다.
- **✨ 같은 모델에 의존하는 컴포넌트 재사용하고, 다른 모델에 의존하는 컴포넌트는 분리해야 한다.**

> 👀 지금까지 UI에 따라 컴포넌트를 재사용했는데, 모델 기준으로 컴포넌트를 분리해야 한다는 새로운 인사이트를 얻었다. 모델이 다르지만, 현재 UI가 같다고 컴포넌트를 재사용하게 되면, 추후 모델에 따라 UI 변경사항이 생기면 아주 곤란해진다.
