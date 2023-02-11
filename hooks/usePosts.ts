import { useContext } from "react";
import { PostsContext } from "@contexts/posts/PostsContext";
import { useRouter } from "next/router";

export const usePosts = () => {
  const router = useRouter();
  const posts = useContext(PostsContext);
  const category = router.query.category as string;
  return category && category !== "All"
    ? posts.filter(post => post.category === category)
    : posts;
};
