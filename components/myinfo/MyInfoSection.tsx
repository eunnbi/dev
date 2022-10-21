import styled from "styled-components";
import Image from "next/image";
import MyInfoLinks from "./MyInfoLinks";
import KeywordsRotatingText from "@components/keywords/KeywordsRotatingText";

const MyInfoSection = () => {
  return (
    <Section>
      <Image
        src="/images/profile.png"
        placeholder="blur"
        blurDataURL="/images/profile.png"
        alt="profile"
        width={100}
        height={100}
      />
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
