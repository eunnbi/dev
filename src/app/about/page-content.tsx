"use client";

import CareerSection from "@/components/about/CareerSection";
import MyInfoSection from "@/components/about/MyInfoSection";
import ProjectsSection from "@/components/project/ProjectsSection";
import SkillSection from "@/components/about/SkillSection";
import styled from "styled-components";

export default function AboutPage({ projects }: { projects: Project[] }) {
  return (
    <Main>
      <MyInfoSection />
      <CareerSection />
      <SkillSection />
      <ProjectsSection projects={projects} />
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  margin: 2rem auto 6rem;
`;
