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
  review: string;
  reviewLink: string;
  tags: string[];
}
