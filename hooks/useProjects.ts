import { useContext } from "react";
import { ProjectsContext } from "@contexts/projects/ProjectsContext";
import { useProjectFilter } from "./useFilter";

export const useProjects = () => {
  const projects = useContext(ProjectsContext);
  const filter = useProjectFilter();
  return filter === "All"
    ? projects
    : projects.filter(project => project.category === filter);
};
