import styled from "styled-components";
import Image from "next/image";
import { useCallback } from "react";
import { MY_INFO_LINKS } from "../../constants/info";
import { NextImageWrapper } from "../common/NextImageWrapper.styled";
import KeywordsRotatingText from "../Keywords/KeywordsRotatingText";
import { Tooltip, IconButton } from "@mui/material";
import { BsGithub } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

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
      <ImageWrapper>
        <Image
          src="/images/profile.png"
          layout="fill"
          placeholder="blur"
          blurDataURL="/images/profile.png"
        />
      </ImageWrapper>
      <KeywordsRotatingText fontSize="2rem" textAlign="center" />
      <div>
        {MY_INFO_LINKS.map((link, index) => (
          <Tooltip key={index} title={link.type}>
            <IconButton href={link.link}>{iconPicker(link.type)}</IconButton>
          </Tooltip>
        ))}
      </div>
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
