export interface IProject {
  id: number;
  title: string;
  period: string;
  feStacks: string[];
  deployStacks: string[];
  beStacks: string[];
  overview: string;
  github: string;
  link: string;
  images: string[];
  member: string;
  role?: string;
  review: Review;
  tags: string[];
}

interface Review {
  text: string;
  link: string;
  linkName: string;
}

export const PROJECTS = [
  {
    id: 1,
    title: "World Movie 프로젝트",
    images: [
      "/images/projects/1.png",
      "/images/projects/4.png",
      "/images/projects/2.png",
      "/images/projects/3.png",
    ],
    period: "2022.01 (1차 완성), 2022.06 (반응형 디자인 적용)",
    overview: `전 세계 영화 정보 제공 애플리케이션입니다.
    카테고리 별로 (현재 상영중인 영화, 인기 있는 영화, 평점 높은 영화) 영화 정보를 제공합니다.
    검색 기능을 통해 사용자가 좋아하는 영화를 찾을 수 있고, 좋아하는 영화는 즐겨찾기에 추가할 수 있습니다.`,
    feStacks: [
      "JavaScript",
      "React",
      "React Router",
      "React Query",
      "Styled Components",
      "Sass",
    ],
    beStacks: [],
    deployStacks: ["GitHub pages"],
    member: "개인 프로젝트",
    review: {
      text: `React를 이용한 첫 프로젝트라서 부족한 점이 많지만, 배운 내용들을 꾸준히 기록하면서
      React와 친해지려고 노력했다. 우아한 테크 세미나를 듣고 나서 Redux와 Redux Thunk 대신 React Query를 처음으로 사용해보았다.
      Server state를 관리하는 것에 적합한 라이브러리를 발견했고, 앞으로도 React Query를 꾸준히 쓸 것이다.`,
      link: "https://github.com/eunnbi/movie-app/blob/main/STUDY.md",
      linkName: "World Movie 프로젝트하면서 배운 것들",
    },
    github: "https://github.com/eunnbi/world-movie",
    link: "https://eunnbi.github.io/world-movie/",
    tags: ["첫 React 프로젝트", "React Query로의 전환"],
  },
  {
    id: 2,
    title: "모아모아 프로젝트",
    images: [
      "/images/projects/10.png",
      "/images/projects/11.png",
      "/images/projects/12.png",
      "/images/projects/13.png",
      "/images/projects/14.png",
      "/images/projects/15.png",
      "/images/projects/16.png",
      "/images/projects/17.png",
    ],
    period: "2022.03 ~ 2022.04",
    overview: `자산 관리를 위한 가계부와 커뮤니티 서비스를 제공합니다. 모아모아 가계부는 수익지출 내역을 기록할 수 있을 뿐만 아니라 머니로그를 작성할 수 있습니다.
    하루에 딱 10분, 오늘 소비를 되돌아보고, 내일을 계획하여 건강한 소비 습관을 기르고 평생의 자산 관리를 위한 기반을 다질 수 있습니다.
    자신의 머니로그와 모아모아가 제공하는 가계부 통계를 모아모아 커뮤니티에 바로 공유할 수 있는 기능이 있어 나의 건강한 소비를 자랑할 수 있고, 수익 지출 관리 비법을 서로 공유할 수 있습니다.
    모아모아 커뮤니티는 서로의 자산관리와 소비 습관을 응원하는 관계를 이어주고 다양한 정보를 공유하는 공간을 제공합니다.`,
    feStacks: [
      "JavaScript",
      "React",
      "Redux",
      "React Query",
      "Styled Components",
    ],
    beStacks: ["Spring Framework", "MySQL", "Redis"],
    deployStacks: ["AWS EC2", "AWS S3"],
    member: "백엔드 2명 / 프론트 2명 / 기획 1명",
    role: "👉 본 프로젝트에서 프론트 포지션으로 프론트 팀을 주도했습니다.",
    review: {
      text: `컴포넌트 설계와 디자이너 부재 등 여러 아쉬움이 있었지만 좋은 사람들과 함께 
      첫 프로젝트를 완주했다는 것이 행운이라고 생각한다. 협업과 개발 프로세스를 경험하며,
      백엔드분들과 현명하게 의사소통하고 협업할 수 있는 방법을 배울 수 있었다. 프론트 팀을 이끌면서 
      나의 부족한 점을 많이 발견했으나 그 만큼 내가 더 성장할 수 있다는 뜻이기 때문에 매우 값진 경험이었다.🤩`,
      link: "https://velog.io/@eunnbi/Project-%EB%AA%A8%EC%95%84%EB%AA%A8%EC%95%84-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0",
      linkName: "모아모아 프로젝트 회고글 보러가기",
    },
    github: "https://github.com/Asset-management-service/frontend",
    link: "https://moamoadev.shop/",
    tags: ["첫 협업 프로젝트", "가계부와 커뮤니티의 만남"],
  },
  {
    id: 3,
    title: "Link Memo 프로젝트",
    images: [
      "/images/projects/5.png",
      "/images/projects/6.png",
      "/images/projects/7.png",
      "/images/projects/8.png",
      "/images/projects/9.png",
    ],
    period: "2022.06 ~ 2022.07",
    overview: `나에게 도움이 되는 자료의 링크 주소나 나중에 볼 링크 주소를 메모 형식으로 저장하고 관리할 수 있는 애플리케이션입니다.
    링크 주소를 나만의 카테고리별로 저장할 수 있고, 검색 기능을 통해 저장된 링크 주소 메모를 쉽게 찾을 수 있습니다.
    자주 방문하는 링크 주소는 즐겨찾기에 추가할 수 있습니다.`,
    feStacks: [
      "TypeScript",
      "React",
      "Redux",
      "React Query",
      "Styled Components",
    ],
    beStacks: ["Python", "Flask", "PostgreSQL"],
    deployStacks: ["Netlify", "AWS Lambda"],
    member: "개인 프로젝트",
    review: {
      text: `모아모아 프로젝트 이후 컴포넌트 설계에 대한 부족함을 느껴 리액트 컴포넌트 설계에 대해 공부도 할겸 이 프로젝트를 시작했다.
      Component & Hooks Pattern을 이용하고, 컴포넌트의 의존성을 분석하며 컴포넌트를 설계했다. "관심사 분리"에 많은 신경을 썼고, 
      "관심사 분리"가 왜 중요한지 다시 리마인드 할 수 있었다. React는 개발자의 자율성이 높은 라이브러리라서 컴포넌트를 다양한 방식으로 설계할 수 있다. 
      하지만, 자율성이 부여된 만큼 컴포넌트 설계와 성능에 신경을 써야 하고, 클린코드를 작성해야 한다는 책임감을 가져야 한다는 것을 느꼈다. 😁`,
      link: "https://velog.io/@eunnbi/Project-Link-Memo-Project-%ED%9A%8C%EA%B3%A0",
      linkName: "Link Memo 프로젝트 회고글 보러가기",
    },
    github: "https://github.com/eunnbi/link-memo",
    link: "https://link-memo.netlify.app/",
    tags: ["React Component Pattern", "Mobile First Design", "첫 백엔드 개발"],
  },
  {
    id: 4,
    title: "PetBook 프로젝트",
    images: [],
    period: "2022.06 ~ (진행중)",
    overview: `이색 반려동물과 함께하는 집사님들을 위한 정보제공 포털 및 커뮤니티 서비스를 목표로 하고 있습니다.
    주변에서 우리 아이와 같은 반려동물 친구를 찾거나, 찾기 힘들었던 전문 종합 동물 병원을 쉽게 찾아보실 수 있는 서비스를 제공합니다. 또한,
    집사님들의 노하우를 공유할 있는 게시판 공간을 제공하여 이색 반려동물의 정보를 찾는 것에 대한 어려움을 해소할 수 있습니다.`,
    feStacks: [
      "TypeScript",
      "React",
      "Redux",
      "React Query",
      "Styled Components",
    ],
    beStacks: ["Spring Framework", "MySQL", "Redis"],
    deployStacks: ["Netlify", "Heroku"],
    member: "백엔드 3명 / 프론트엔드 3명 / 디자이너 1명",
    role: "👉 본 프로젝트에서 프론트엔드 포지션을 맡았습니다.",
    review: {
      text: "",
      link: "",
      linkName: "",
    },
    github: "https://github.com/K-Slave",
    link: "",
    tags: ["첫 NextJS 프로젝트", "디자이너와의 협업"],
  },
  {
    id: 5,
    title: "고려대학교 여름 해커톤 (AIMECO)",
    images: [],
    period: "2022.08.19 ~ 2022.08.21",
    overview: ``,
    feStacks: ["Typescript", "NextJS", "Emotion"],
    beStacks: ["Supabase"],
    deployStacks: ["Netlify"],
    member: "기획자 1명 / 개발자 4명",
    role: "👉 본 프로젝트에서 개발자 포지션을 맡았습니다.",
    review: {
      text: "",
      link: "",
      linkName: "",
    },
    github: "https://github.com/woog2roid/devel5pers-connecthon",
    link: "https://devel5per-connecthon.herokuapp.com/",
    tags: ["3일 해커톤", "서버리스 웹 어플리케이션"],
  },
];
