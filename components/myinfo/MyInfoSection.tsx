import styled from "styled-components";
import Image from "next/image";
import { NextImageWrapper } from "../common/NextImageWrapper.styled";
import KeywordsRotatingText from "../keywords/KeywordsRotatingText";
import MyInfoLinks from "./MyInfoLinks";

const MyInfoSection = () => {
  return (
    <Section>
      <ImageWrapper>
        <Image
          src="/images/profile.png"
          layout="fill"
          placeholder="blur"
          blurDataURL="/images/profile.png"
          alt="profile"
        />
      </ImageWrapper>
      <KeywordsRotatingText fontSize="2rem" textAlign="center" />
      <MyInfoLinks />
    </Section>
  );
};

export default MyInfoSection;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

const ImageWrapper = styled(NextImageWrapper)`
  width: 100px;
  height: 100px;
`;
