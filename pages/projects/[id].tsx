import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import ProjectDetails from "../../components/Projects/ProjectDetails";
import CustomHead from "../../components/common/CustomHead";
import ProjectHeading from "../../components/Projects/ProjectDetails/ProjectHeading";
import { PROJECTS } from "../../constants/projects";
import styles from "../../styles/Project.module.css";

const ProjectPage: NextPage = ({
  project,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <CustomHead page={project.title} />
      <main className={styles.main}>
        <ProjectHeading title={project.title} />
        <ProjectDetails project={project} />
      </main>
    </>
  );
};

export default ProjectPage;

export const getStaticPaths = async () => {
  const paths = PROJECTS.map((project) => ({
    params: { id: String(project.id) },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params!.id;
  const project = PROJECTS.find((project) => String(project.id) === id);
  return {
    props: {
      id,
      project,
    },
  };
};
