import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import ProjectDetailMain from "@components/projects/ProjectDetailMain";
import CustomHead from "@components/common/CustomHead";
import styled from "styled-components";
import { getProjectData, getProjectIds } from "@lib/projects";

const ProjectPage = ({
  project
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <CustomHead
        page={project.title}
        description={project.overview}
        image={
          project.images.length === 0
            ? undefined
            : `/images/projects/${project.images[0]}`
        }
      />
      <ProjectDetailMain project={project} />
    </>
  );
};

export default ProjectPage;

export const getStaticPaths = async () => {
  const paths = getProjectIds();
  return { paths, fallback: false };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params!.id;
  const project = getProjectData(id as string);
  return {
    props: {
      project
    }
  };
};
