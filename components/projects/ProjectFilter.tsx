import { useContext } from "react";
import Filter from "@components/common/Filter";
import { CategoriesContext } from "@contexts/projects/CategoriesContext";
import { useSetRecoilState } from "recoil";
import { projectFilterState } from "@stores/projectFilterState";
import { useProjectFilterIndex } from "@hooks/useFilterIndex";

const ProjectFilter = () => {
  const categories = useContext(CategoriesContext);
  const filterIndex = useProjectFilterIndex();
  const setFilterIndex = useSetRecoilState(projectFilterState);
  return (
    <Filter
      filters={categories}
      filterIndex={filterIndex}
      setFilterIndex={setFilterIndex}
    />
  );
};

export default ProjectFilter;
