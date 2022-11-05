import { useContext } from "react";
import { CategoriesContext } from "@contexts/posts/CategoriesContext";
import { PostsContext } from "@contexts/posts/PostsContext";
import { useFilterIndex } from "./useFilter";

export const usePosts = () => {
  const categories = useContext(CategoriesContext);
  const posts = useContext(PostsContext);
  const filterIndex = useFilterIndex(categories);
  return filterIndex === 0
    ? posts
    : posts.filter(post => post.category === categories[filterIndex]);
};
