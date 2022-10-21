import { useContext } from "react";
import { CategoriesContext } from "@context/posts/CategoriesContext";
import Filter from "@components/common/Filter";
import { useFilterIndex, useChangeFilter } from "@hooks/useFilter";

const PostFilter = () => {
  const categories = useContext(CategoriesContext);
  const filterIndex = useFilterIndex(categories);
  const selectFilter = useChangeFilter("/posts");

  return (
    <Filter
      filters={categories}
      filterIndex={filterIndex}
      selectFilter={selectFilter}
    />
  );
};

export default PostFilter;
