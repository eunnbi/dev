import type { InferGetStaticPropsType } from "next";
import CustomHead from "@components/common/CustomHead";
import Heading from "@components/common/Heading";
import ProjectsSection from "@components/projects/ProjectsSection";
import styled from "styled-components";
import { getSortedProjectsData } from "@lib/projects";
import { CategoriesContext } from "@contexts/projects/CategoriesContext";
import { ProjectsContext } from "@contexts/projects/ProjectsContext";
import ProjectFilter from "@components/projects/ProjectFilter";

const ProjectsPage = ({
  projects,
  categories
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <CustomHead page="Projects" />
      <Main>
        <Heading title="Projects" />
        <CategoriesContext.Provider value={categories}>
          <ProjectsContext.Provider value={projects}>
            <ProjectFilter />
            <ProjectsSection />
          </ProjectsContext.Provider>
        </CategoriesContext.Provider>
      </Main>
    </>
  );
};

export default ProjectsPage;

const Main = styled.main`
  margin: 30px 0 60px;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const getStaticProps = async () => {
  const projects = getSortedProjectsData();
  const categories = ["All", ...projects.map(project => project.category)];
  return {
    props: {
      projects,
      categories: categories.filter(
        (category, index) => categories.indexOf(category) === index
      )
    }
  };
};
