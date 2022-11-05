import fs from "fs";
import path from "path";

const projectsDirectory = path.join(process.cwd(), "data", "projects");

export const getSortedProjectsData = (): Project[] => {
  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjectsData: Project[] = fileNames.map(fileName => {
    const id = fileName.replace(/\.json$/, "");
    const fullPath = path.join(projectsDirectory, fileName);
    const jsonData = fs.readFileSync(fullPath, "utf-8");
    const data: Project = { id, ...JSON.parse(jsonData) };
    return data;
  });
  // Sort posts by date
  return allProjectsData;
};

export const getProjectIds = () => {
  const fileNames = fs.readdirSync(projectsDirectory);
  const projectIds = fileNames.map(fileName => ({
    params: { id: fileName.replace(/\.json$/, "") }
  }));
  return projectIds;
};

export const getProjectData = (id: string) => {
  const fullPath = path.join(projectsDirectory, `${id}.json`);
  const jsonData = fs.readFileSync(fullPath, "utf-8");
  const data: Project = { id, ...JSON.parse(jsonData) };
  return data;
};
