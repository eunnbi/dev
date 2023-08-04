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
  // Sort projects by order
  return allProjectsData.sort(({ order: a }, { order: b }) => {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  });
};

export const getProjectIds = () => {
  const fileNames = fs.readdirSync(projectsDirectory);
  const projectIds = fileNames.map(fileName => ({
    id: fileName.replace(/\.json$/, "")
  }));
  return projectIds;
};

export const getProjectData = (id: string) => {
  const fullPath = path.join(projectsDirectory, `${id}.json`);
  const jsonData = fs.readFileSync(fullPath, "utf-8");
  const data: Project = { id, ...JSON.parse(jsonData) };
  return data;
};
