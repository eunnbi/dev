import { useContext } from "react";
import { usePostFilter } from "./hooks/usePostFilter";
import { CategoriesContext } from "@context/posts/CategoriesContext";
import Filter from "@components/common/Filter";

const PostFilter = () => {
  const categories = useContext(CategoriesContext);
  const { filterIndex, selectFilter } = usePostFilter();

  return (
    <Filter
      filters={categories}
      filterIndex={filterIndex}
      selectFilter={selectFilter}
    />
  );
};

export default PostFilter;
