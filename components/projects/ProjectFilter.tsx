import { useContext } from "react";
import Filter from "@components/common/Filter";
import { CategoriesContext } from "@contexts/projects/CategoriesContext";
import { useFilterIndex, useChangeFilter } from "@hooks/useFilter";

const ProjectFilter = () => {
  const categories = useContext(CategoriesContext);
  const filterIndex = useFilterIndex(categories);
  const selectFilter = useChangeFilter("/projects");
  return (
    <Filter
      filters={categories}
      filterIndex={filterIndex}
      selectFilter={selectFilter}
    />
  );
};

export default ProjectFilter;
