import { useContext } from "react";
import { PostsContext } from "@contexts/posts/PostsContext";

export const usePosts = () => {
  return useContext(PostsContext);
};
