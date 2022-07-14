export function getProjectsData() {
  const PROJECTS = [
    {
      id: 1,
      title: "World Movie 프로젝트",
      images: [
        "/images/projects/2.PNG",
        "/images/projects/2.PNG",
        "/images/projects/2.PNG",
      ],
      period: "2022.01 (1차 완성), 2022.06 (반응형 디자인 적용)",
      overview: "설명 추가",
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
      review: `컴포넌트 설계와 디자이너 부재 등 여러 아쉬움이 있었지만 좋은 사람들과 함께 
              첫 프로젝트를 완주했다는 것이 행운이라고 생각한다. 프론트 팀을 이끈 사람으로서 
              나의 부족한 점을 많이 발견했으나 그 만큼 내가 더 성장할 수 있다는 뜻이기 때문에 매우 값진 경험이었다.🤩`,
      reviewLink: "https://github.com/eunnbi/movie-app/blob/main/STUDY.md",
      github: "https://github.com/eunnbi/movie-app",
      link: "https://eunnbi.github.io/world-movie/",
      tags: ["첫 React 프로젝트", "React Query로의 전환"],
    },
    {
      id: 2,
      title: "모아모아 프로젝트",
      images: [
        "/images/projects/2.PNG",
        "/images/projects/2.PNG",
        "/images/projects/2.PNG",
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
      id: 3,
      title: "Bookmark 프로젝트",
      images: [
        "/images/projects/2.PNG",
        "/images/projects/2.PNG",
        "/images/projects/2.PNG",
      ],
      period: "2022.06 ~",
      overview: "설명 추가",
      feStacks: [
        "TypeScript",
        "React",
        "Redux",
        "React Query",
        "Styled Components",
      ],
      beStacks: [],
      deployStacks: ["Netlify"],
      member: "개인 프로젝트",
      review: `컴포넌트 설계와 디자이너 부재 등 여러 아쉬움이 있었지만 좋은 사람들과 함께 
              첫 프로젝트를 완주했다는 것이 행운이라고 생각한다. 프론트 팀을 이끈 사람으로서 
              나의 부족한 점을 많이 발견했으나 그 만큼 내가 더 성장할 수 있다는 뜻이기 때문에 매우 값진 경험이었다.🤩`,
      reviewLink:
        "https://velog.io/@eunnbi/Project-%EB%AA%A8%EC%95%84%EB%AA%A8%EC%95%84-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-2",
      github: "https://github.com/eunnbi/bookmark",
      link: "https://eunnbi-bookmark.netlify.app/",
      tags: [
        "React Component Pattern",
        "Mobile First Design",
        "첫 백엔드 개발",
      ],
    },
    {
      id: 4,
      title: "petBook 프로젝트",
      images: [
        "/images/projects/2.PNG",
        "/images/projects/2.PNG",
        "/images/projects/2.PNG",
      ],
      period: "2022.06 ~",
      overview: "설명 추가",
      feStacks: [
        "TypeScript",
        "React",
        "Redux",
        "React Query",
        "Styled Components",
      ],
      beStacks: [],
      deployStacks: ["Netlify"],
      member: "개인 프로젝트",
      review: `컴포넌트 설계와 디자이너 부재 등 여러 아쉬움이 있었지만 좋은 사람들과 함께 
              첫 프로젝트를 완주했다는 것이 행운이라고 생각한다. 프론트 팀을 이끈 사람으로서 
              나의 부족한 점을 많이 발견했으나 그 만큼 내가 더 성장할 수 있다는 뜻이기 때문에 매우 값진 경험이었다.🤩`,
      reviewLink:
        "https://velog.io/@eunnbi/Project-%EB%AA%A8%EC%95%84%EB%AA%A8%EC%95%84-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-2",
      github: "https://github.com/eunnbi/bookmark",
      link: "https://eunnbi-bookmark.netlify.app/",
      tags: ["첫 NextJS 프로젝트", "디자이너와의 협업"],
    },
  ];
  return PROJECTS;
}
