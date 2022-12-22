import type { NextPage } from "next";
import CareerSection from "../components/about/career/CareerSection";
import CustomHead from "@components/common/CustomHead";
import MyInfoSection from "@components/about/myinfo/MyInfoSection";
import SkillsSection from "@components/about/skills/SkillSection";
import styled from "styled-components";

const AboutPage: NextPage = () => {
  return (
    <>
      <CustomHead page="About" />
      <Main>
        <MyInfoSection />
        <CareerSection />
        <SkillsSection />
      </Main>
    </>
  );
};

export default AboutPage;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  margin: 2rem 0;
`;
