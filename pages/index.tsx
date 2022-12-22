import type { NextPage } from "next";
import Image from "next/image";
import { useEffect } from "react";
import CustomHead from "@components/common/CustomHead";
import styled from "styled-components";
import KeywordsRotatingText from "@components/common/KeywordsRotatingText";

const HomePage: NextPage = () => {
  return (
    <>
      <CustomHead page="Home" />
      <Main>
        <Section>
          <KeywordsRotatingText />
          <ImageWrapper>
            <Image src="/images/profile.png" alt="profile" fill priority />
          </ImageWrapper>
        </Section>
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
  &::-webkit-scrollbar {
    display: none;
  }
  @supports (-webkit-appearance: none) and (stroke-color: transparent) {
    height: -webkit-fill-available;
  }
`;

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  transform: translateY(-60px);
  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column-reverse;
    justify-content: center;
    gap: 3rem;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 30vw;
  height: 30vw;
  max-width: 250px;
  max-height: 250px;
  min-width: 150px;
  min-height: 150px;
  img {
    object-fit: contain;
  }
`;

export default HomePage;
