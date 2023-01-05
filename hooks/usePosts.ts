import { useContext } from "react";
import { PostsContext } from "@contexts/posts/PostsContext";
import { useRecoilValue } from "recoil";
import { postFilterState } from "@stores/postFilterState";

export const usePosts = () => {
  const posts = useContext(PostsContext);
  const filter = useRecoilValue(postFilterState);
  return filter === "All"
    ? posts
    : posts.filter(post => post.category === filter);
};
