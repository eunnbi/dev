declare interface Position {
  current: number;
  prev: number;
}

declare interface PostMetadata {
  date: string;
  title: string;
  category: string;
  preview: string;
  emoji: string;
}

declare type Post = PostMetadata & {
  id: string;
  content: string;
};

declare type PostContextType = {
  current: Post;
  prev: Pick<Post, "title" | "id"> | null;
  next: Pick<Post, "title" | "id"> | null;
};

declare interface Career {
  id: number;
  title: string;
  content: string;
  period: string;
}

declare interface Project {
  id: string;
  title: string;
  period: string;
  overview: string;
  images: string[];
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

declare interface Skill {
  id: number;
  tech: string;
}

declare module "react-rotating-text";
