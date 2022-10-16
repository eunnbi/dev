import type { NextPage } from "next";
import CareerSection from "../components/career/CareerSection";
import CustomHead from "../components/common/CustomHead";
import MyInfoSection from "../components/myinfo/MyInfoSection";
import SkillsSection from "../components/skills/SkillSection";
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
  gap: 80px;
  margin-top: 60px;
`;
