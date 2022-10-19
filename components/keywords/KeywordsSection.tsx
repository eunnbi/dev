import Image from "next/image";
import styled from "styled-components";
import KeywordsRotatingText from "./KeywordsRotatingText";
import { NextImageWrapper } from "@components/common/NextImageWrapper.styled";

const KeywordsSection = () => {
  return (
    <Section>
      <KeywordsRotatingText />
      <ImageWrapper>
        <Image src="/images/profile.png" layout="fill" alt="profile" />
      </ImageWrapper>
    </Section>
  );
};

export default KeywordsSection;

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

const ImageWrapper = styled(NextImageWrapper)`
  width: 30vw;
  height: 30vw;
  max-width: 250px;
  max-height: 250px;
  min-width: 150px;
  min-height: 150px;
`;
