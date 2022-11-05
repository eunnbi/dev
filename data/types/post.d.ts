interface PostMetadata {
  date: string;
  title: string;
  category: string;
  preview: string;
  emoji: string;
}

type Post = PostMetadata & {
  id: string;
  content: string;
};

type PostContextType = {
  current: Post;
  prev: Pick<Post, "title" | "id"> | null;
  next: Pick<Post, "title" | "id"> | null;
};
