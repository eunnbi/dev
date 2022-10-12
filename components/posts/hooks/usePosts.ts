import { useContext } from "react";
import { useRecoilValue } from "recoil";
import { CategoriesContext } from "../../../context/posts/CategoriesContext";
import { PostsContext } from "../../../context/posts/PostsContext";
import { postFilterIndex } from "../../../store/postFilter";

export const usePosts = () => {
  const filterIndex = useRecoilValue(postFilterIndex);
  const categories = useContext(CategoriesContext);
  const posts = useContext(PostsContext);
  return filterIndex === 0
    ? posts
    : posts.filter((post) => post.category === categories[filterIndex]);
};
