import type { NextPage } from "next";
import { useEffect } from "react";
import CustomHead from "@components/common/CustomHead";
import KeywordsSection from "@components/about/keywords/KeywordsSection";
import styled from "styled-components";

const HomePage: NextPage = () => {
  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);
  return (
    <>
      <CustomHead page="Home" />
      <Main>
        <KeywordsSection />
      </Main>
    </>
  );
};

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-y: hidden;
  height: calc(100vh - 60px);
  @media ${({ theme }) => theme.device.mobile} {
    height: calc(var(--vh, 1vh) * 100 - 60px);
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default HomePage;
