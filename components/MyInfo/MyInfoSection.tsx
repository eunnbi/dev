import { MY_INFO_LINKS } from "../../constants/info";
import styled from "styled-components";
import Image from "next/image";
import { NextImageWrapper } from "../common/NextImageWrapper.styled";
import KeywordsRotatingText from "../Keywords/KeywordsRotatingText";
import { Tooltip, IconButton } from "@mui/material";

const MyInfoSection = () => {
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
          <Tooltip key={index} title={link.label}>
            <IconButton href={link.link}>{link.icon}</IconButton>
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
