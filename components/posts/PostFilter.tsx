import { useContext } from "react";
import { CategoriesContext } from "@contexts/posts/CategoriesContext";
import Filter from "@components/common/Filter";
import { useSetRecoilState } from "recoil";
import { postFilterState } from "@stores/postFilterState";
import { usePostFilterIndex } from "@hooks/useFilterIndex";

const PostFilter = () => {
  const categories = useContext(CategoriesContext);
  const filterIndex = usePostFilterIndex();
  const setFilterIndex = useSetRecoilState(postFilterState);
  return (
    <Filter
      filters={categories}
      filterIndex={filterIndex}
      setFilterIndex={setFilterIndex}
    />
  );
};

export default PostFilter;
