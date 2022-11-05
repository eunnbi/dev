import { useContext } from "react";
import { PostContext } from "../contexts/posts/PostContext";

export const usePostInfo = () => {
  return useContext(PostContext);
};
