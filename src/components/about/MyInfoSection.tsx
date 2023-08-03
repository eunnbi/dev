import styled from "styled-components";
import Image from "next/image";
import KeywordsRotatingText from "@/components/common/KeywordsRotatingText";
import { MY_INFO_LINKS } from "data/info";
import { AiOutlineMail } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import IconLink from "../common/IconLink";

export default function MyInfoSection() {
  const iconPicker = (type: string) => {
    switch (type) {
      case "github":
        return <BsGithub />;
      case "email":
        return <AiOutlineMail />;
    }
  };
  return (
    <Section>
      <Image
        src="/images/profile.png"
        alt="강은비의 프로필 미모티콘"
        width={100}
        height={100}
        priority
        className="profile-image"
      />
      <KeywordsRotatingText fontSize="2rem" textAlign="center" />
      <LinkBox>
        {MY_INFO_LINKS.map(({ link, type, label }) => (
          <IconLink key={link} href={link} aria-label={label}>
            {iconPicker(type)}
          </IconLink>
        ))}
      </LinkBox>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  .profile-image {
    object-fit: contain;
  }
`;

const LinkBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
