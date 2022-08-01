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
  role?: string;
  review: Review;
  tags: string[];
}

interface Review {
  text: string;
  link: string;
  linkName: string;
}
