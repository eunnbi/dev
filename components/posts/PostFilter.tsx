import { useContext } from "react";
import { CategoriesContext } from "@contexts/posts/CategoriesContext";
import Filter from "@components/common/Filter";
import { useRecoilState } from "recoil";
import { postFilterState } from "@stores/postFilterState";

const PostFilter = () => {
  const categories = useContext(CategoriesContext);
  const [filter, setFilter] = useRecoilState(postFilterState);
  return <Filter filters={categories} filter={filter} setFilter={setFilter} />;
};

export default PostFilter;
