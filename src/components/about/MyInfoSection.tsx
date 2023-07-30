import styled from "styled-components";
import Image from "next/image";
import KeywordsRotatingText from "@components/common/KeywordsRotatingText";
import { useCallback } from "react";
import { MY_INFO_LINKS } from "@data/info";
import { Tooltip, IconButton } from "@mui/material";
import { AiOutlineMail } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

const MyInfoSection = () => {
  const iconPicker = useCallback((type: string) => {
    switch (type) {
      case "github":
        return <BsGithub />;
      case "email":
        return <AiOutlineMail />;
    }
  }, []);
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
      <Links>
        {MY_INFO_LINKS.map((link, index) => (
          <Tooltip key={index} title={link.type}>
            <IconButton href={link.link}>{iconPicker(link.type)}</IconButton>
          </Tooltip>
        ))}
      </Links>
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

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  a {
    color: ${({ theme }) => (theme.name === "light" ? "gray" : "white")};
    padding: 0;
  }
`;

export default MyInfoSection;
