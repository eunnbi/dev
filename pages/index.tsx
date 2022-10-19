import type { NextPage } from "next";
import CustomHead from "@components/common/CustomHead";
import KeywordsSection from "@components/keywords/KeywordsSection";
import styled from "styled-components";

const HomePage: NextPage = () => {
  return (
    <>
      <CustomHead page="Home" />
      <Main>
        <KeywordsSection />
      </Main>
    </>
  );
};

export default HomePage;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-y: hidden;
  height: calc(100vh - 60px);
  &::-webkit-scrollbar {
    display: none;
  }
`;
