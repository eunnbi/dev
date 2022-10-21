import { useContext } from "react";
import { CategoriesContext } from "@context/posts/CategoriesContext";
import { PostsContext } from "@context/posts/PostsContext";
import { useFilterIndex } from "./useFilterHash";

export const usePosts = () => {
  const categories = useContext(CategoriesContext);
  const posts = useContext(PostsContext);
  const filterIndex = useFilterIndex(categories);
  return filterIndex === 0
    ? posts
    : posts.filter(post => post.category === categories[filterIndex]);
};
