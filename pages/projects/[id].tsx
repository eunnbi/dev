import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import ProjectDetails from "../../components/projects/ProjectDetailSection";
import CustomHead from "../../components/common/CustomHead";
import ProjectHeader from "../../components/projects/ProjectHeader";
import { PROJECTS } from "../../data/projects";
import styled from "styled-components";

const ProjectPage = ({
  project,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <CustomHead page={project.title} />
      <Main>
        <ProjectHeader title={project.title} />
        <ProjectDetails project={project} />
      </Main>
    </>
  );
};

export default ProjectPage;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  align-items: center;
  padding-top: 1.5rem;
`;

export const getStaticPaths = async () => {
  const paths = PROJECTS.map((project) => ({
    params: { id: String(project.id) },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params!.id;
  const project = PROJECTS.find(
    (project) => String(project.id) === id
  ) as ProjectItem;
  return {
    props: {
      id,
      project,
    },
  };
};
