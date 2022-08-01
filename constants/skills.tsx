export interface ISkill {
  id: number;
  tech: string;
  percentage: number;
  link?: string;
}

export const SKILLS_LANG = [
  {
    id: 1,
    tech: "JavaScript",
    percentage: 90,
    link: "https://velog.io/@eunnbi/series/%EC%9B%B9-%EA%B0%9C%EB%B0%9C-%EC%A7%80%EC%8B%9D",
  },
  {
    id: 2,
    tech: "TypeScript",
    percentage: 80,
    link: "https://velog.io/@eunnbi/series/TS",
  },
];

export const SKILLS_LIB = [
  {
    id: 3,
    tech: "ReactJS",
    percentage: 89,
    link: "https://velog.io/@eunnbi/series/React",
  },
  {
    id: 4,
    tech: "Redux",
    percentage: 87,
  },
  {
    id: 5,
    tech: "Redux Saga",
    percentage: 60,
  },
  {
    id: 6,
    tech: "React Query",
    percentage: 85,
  },
  {
    id: 7,
    tech: "Styled Components",
    percentage: 88,
  },
  {
    id: 8,
    tech: "NextJS",
    percentage: 50,
    link: "https://velog.io/@eunnbi/series/NextJS",
  },
];

export const SKILLS_TOOLS = [
  {
    id: 9,
    tech: "Git",
    percentage: 85,
  },
  {
    id: 10,
    tech: "Github",
    percentage: 85,
  },
];
