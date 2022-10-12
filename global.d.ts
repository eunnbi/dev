declare interface Position {
  current: number;
  prev: number;
}

declare interface PostMetadata {
  date: string;
  title: string;
  category: string;
  preview: string;
}

declare type Post = PostMetadata & {
  id: string;
  content: string;
};

declare interface CareerItem {
  id: number;
  title: string;
  content: string;
  period: string;
}

declare interface ProjectItem {
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
  review: {
    text: string;
    link: string;
    linkName: string;
  };
  tags: string[];
  category: string;
}

declare interface SkillItem {
  id: number;
  tech: string;
}

declare module "react-rotating-text";
