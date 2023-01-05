import { useContext } from "react";
import Filter from "@components/common/Filter";
import { CategoriesContext } from "@contexts/projects/CategoriesContext";
import { useSetRecoilState } from "recoil";
import { projectFilterState } from "@stores/projectFilterState";
import { useProjectFilter } from "@hooks/useFilter";

const ProjectFilter = () => {
  const categories = useContext(CategoriesContext);
  const filter = useProjectFilter();
  const setFilter = useSetRecoilState(projectFilterState);
  return <Filter filters={categories} filter={filter} setFilter={setFilter} />;
};

export default ProjectFilter;
