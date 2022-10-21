import { useContext } from "react";
import { PostContext } from "../context/posts/PostContext";

export const usePostInfo = () => {
  return useContext(PostContext);
};
