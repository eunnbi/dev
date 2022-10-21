import { useContext } from "react";
import { useFilterIndex } from "./useFilter";
import { ProjectsContext } from "@context/projects/ProjectsContext";
import { CategoriesContext } from "@context/projects/CategoriesContext";

export const useProjects = () => {
  const projects = useContext(ProjectsContext);
  const categories = useContext(CategoriesContext);
  const filterIndex = useFilterIndex(categories);
  return filterIndex === 0
    ? projects
    : projects.filter(project => project.category === categories[filterIndex]);
};
