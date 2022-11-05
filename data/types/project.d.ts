interface Project {
  id: string;
  title: string;
  period: string;
  overview: string;
  imageCnt: number;
  tags: string[];
  category: "Personal" | "Team";
  stacks: {
    feStacks: string[];
    deployStacks: string[];
    beStacks: string[];
  };
  links: {
    github: string;
    siteUrl: string;
  };
  participation: {
    member: string;
    role?: string;
  };
  review: {
    text: string;
    link: string;
    linkName: string;
  };
}
