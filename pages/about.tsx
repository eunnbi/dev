import type { NextPage } from "next";
import CareerSection from "../components/Career/CareerSection";
import CustomHead from "../components/common/CustomHead";
import MyInfoSection from "../components/MyInfo/MyInfoSection";
import SkillsSection from "../components/Skills/SkillSection";
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
  margin-top: 80px;
`;
