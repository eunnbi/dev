import Image from "next/image";
import styled from "styled-components";
import { NextImageWrapper } from "../../common/NextImageWrapper.styled";
import KeywordsRotatingText from "../KeywordsRotatingText";

const KeywordsSection = () => {
  return (
    <Section>
      <KeywordsRotatingText />
      <ImageWrapper>
        <Image src="/images/profile.png" layout="fill" />
      </ImageWrapper>
    </Section>
  );
};

export default KeywordsSection;

const Section = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 5rem 0;
`;

const ImageWrapper = styled(NextImageWrapper)`
  width: 30vw;
  height: 30vw;
  max-width: 250px;
  max-height: 250px;
`;
