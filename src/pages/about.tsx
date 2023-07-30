import type { InferGetStaticPropsType } from "next";
import CustomHead from "@/components/common/CustomHead";
import CareerSection from "@/components/about/CareerSection";
import MyInfoSection from "@/components/about/MyInfoSection";
import ProjectsSection from "@/components/about/ProjectsSection";
import SkillSection from "@/components/about/SkillSection";
import styled from "styled-components";
import { getSortedProjectsData } from "@/lib/projects";

const AboutPage = ({
  projects
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <CustomHead page="About" />
      <Main>
        <MyInfoSection />
        <CareerSection />
        <SkillSection />
        <ProjectsSection projects={projects} />
      </Main>
    </>
  );
};

export default AboutPage;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  margin: 2rem auto 6rem;
`;

export const getStaticProps = async () => {
  const projects = getSortedProjectsData();
  return {
    props: {
      projects
    }
  };
};
