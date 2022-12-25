import styled from "styled-components";
import Image from "next/image";
import MyInfoLinks from "./MyInfoLinks";
import KeywordsRotatingText from "@components/common/KeywordsRotatingText";

const MyInfoSection = () => {
  return (
    <Section>
      <Image
        src="/images/profile.png"
        alt="강은비의 프로필 미모티콘"
        width={100}
        height={100}
        priority
      />
      <KeywordsRotatingText fontSize="2rem" textAlign="center" />
      <MyInfoLinks />
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  img {
    object-fit: contain;
  }
`;

export default MyInfoSection;
