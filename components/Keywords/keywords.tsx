export const KEYWORDS = [
  {
    id: 1,
    title: "Web Frontend",
    contents: [
      "Typescript와 함께 ReactJS 라이브러리를 주로 다루고 있습니다.",
      "최근에는 NextJS 프레임워크를 공부하고 있습니다.",
    ],
    references: [
      {
        link: "https://velog.io/@eunnbi/series",
        name: "프론트엔드 개발 공부 내용 보러가기",
      },
    ],
    icon: "🖥️  ",
  },
  {
    id: 2,
    title: "User Experience",
    contents: [
      "사용자 경험이 좋은 웹을 만들기 위해 노력합니다.",
      "처음 쓰는 앱이라도 평소에 쓰던 것처럼 사용성이 좋은 웹을 만들겠습니다.",
    ],
    references: [],
    icon: "👥  ",
  },
  {
    id: 3,
    title: "Communication",
    contents: [
      "협업 과정에서 원활한 의사소통이 이루어지도록 노력합니다.",
      "경청의 자세와 명확한 의사전달을 중요시합니다.",
    ],
    references: [
      {
        link: "https://velog.io/@eunnbi/Project-%EB%B0%B1%EC%97%94%EB%93%9C%EC%99%80-%ED%98%91%EC%97%85%ED%95%98%EA%B8%B0#%EF%B8%8F-%EB%AA%85%ED%99%95%ED%95%9C-%EC%9D%98%EC%82%AC%EC%A0%84%EB%8B%AC",
        name: "velog - 백엔드와 소통하기",
      },
    ],
    icon: "📢 ",
  },
];

export interface IKeyword {
  id: number;
  title: string;
  references: Reference[];
  contents: string[];
  icon: string;
}
interface Reference {
  link?: string;
  name?: string;
}
