import { useContext } from "react";
import { ProjectsContext } from "@contexts/projects/ProjectsContext";

export const useProjects = () => {
  return useContext(ProjectsContext);
};
