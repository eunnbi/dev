import { useContext } from "react";
import { CategoriesContext } from "@contexts/posts/CategoriesContext";
import { PostsContext } from "@contexts/posts/PostsContext";
import { useRecoilValue } from "recoil";
import { postFilterState } from "@stores/postFilterState";

export const usePosts = () => {
  const categories = useContext(CategoriesContext);
  const posts = useContext(PostsContext);
  const filterIndex = useRecoilValue(postFilterState);
  return filterIndex === 0
    ? posts
    : posts.filter(post => post.category === categories[filterIndex]);
};
