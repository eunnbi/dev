import { useContext } from "react";
import { ProjectsContext } from "@contexts/projects/ProjectsContext";
import { CategoriesContext } from "@contexts/projects/CategoriesContext";
import { useProjectFilterIndex } from "./useFilterIndex";

export const useProjects = () => {
  const projects = useContext(ProjectsContext);
  const categories = useContext(CategoriesContext);
  const filterIndex = useProjectFilterIndex();
  return filterIndex === 0
    ? projects
    : projects.filter(project => project.category === categories[filterIndex]);
};
