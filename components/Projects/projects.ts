export const STATUS = ["진행 중", "배포 중"];

export interface ProjectType {
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
  role: string;
  review: string;
  reviewLink: string;
  tags: string[];
}

export const PROJECTS = [
  {
    id: 1,
    title: "모아모아 프로젝트",
    images: [
      "images/projects/2.png",
      "images/projects/2.png",
      "images/projects/2.png",
    ],
    period: "2022.03 ~ 2022.04",
    overview: "설명 추가",
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
    review: `컴포넌트 설계와 디자이너 부재 등 여러 아쉬움이 있었지만 좋은 사람들과 함께 
        첫 프로젝트를 완주했다는 것이 행운이라고 생각한다. 프론트 팀을 이끈 사람으로서 
        나의 부족한 점을 많이 발견했으나 그 만큼 내가 더 성장할 수 있다는 뜻이기 때문에 매우 값진 경험이었다.🤩`,
    reviewLink:
      "https://velog.io/@eunnbi/Project-%EB%AA%A8%EC%95%84%EB%AA%A8%EC%95%84-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-2",
    github: "https://github.com/Asset-management-service/frontend",
    link: "https://moamoadev.shop/",
    tags: ["첫 협업 프로젝트", "가계부와 커뮤니티의 만남"],
  },
  {
    id: 2,
    title: "모아모아 프로젝트",
    images: [
      "images/projects/2.png",
      "images/projects/2.png",
      "images/projects/2.png",
    ],
    period: "2022.03 ~ 2022.04",
    overview: "설명 추가",
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
    review: `컴포넌트 설계와 디자이너 부재 등 여러 아쉬움이 있었지만 좋은 사람들과 함께 
        첫 프로젝트를 완주했다는 것이 행운이라고 생각한다. 프론트 팀을 이끈 사람으로서 
        나의 부족한 점을 많이 발견했으나 그 만큼 내가 더 성장할 수 있다는 뜻이기 때문에 매우 값진 경험이었다.🤩`,
    reviewLink:
      "https://velog.io/@eunnbi/Project-%EB%AA%A8%EC%95%84%EB%AA%A8%EC%95%84-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-2",
    github: "https://github.com/Asset-management-service/frontend",
    link: "https://moamoadev.shop/",
    tags: ["첫 협업 프로젝트", "가계부와 커뮤니티의 만남"],
  },
];
