import { useContext } from "react";
import { CategoriesContext } from "@contexts/posts/CategoriesContext";
import Filter from "@components/common/Filter";
import { useSetRecoilState } from "recoil";
import { postFilterState } from "@stores/postFilterState";
import { usePostFilter } from "@hooks/useFilter";

const PostFilter = () => {
  const categories = useContext(CategoriesContext);
  const filter = usePostFilter();
  const setFilter = useSetRecoilState(postFilterState);
  return <Filter filters={categories} filter={filter} setFilter={setFilter} />;
};

export default PostFilter;
