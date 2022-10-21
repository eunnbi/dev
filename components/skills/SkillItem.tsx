import Image from "next/image";
import styled from "styled-components";
import { NextImageWrapper } from "@components/common/NextImageWrapper.styled";

const SkillItem = ({ id, tech }: Skill) => {
  return (
    <Item>
      <ImageWrapper>
        <Image
          src={`/images/skills/${id}.png`}
          layout="fill"
          placeholder="blur"
          blurDataURL={`/images/skills/${id}.png`}
          alt={tech}
        />
      </ImageWrapper>
      <h4>{tech}</h4>
    </Item>
  );
};

export default SkillItem;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  h4 {
    text-align: center;
    margin-bottom: 5px;
  }
`;

const ImageWrapper = styled(NextImageWrapper)`
  position: relative;
  width: 20vw;
  height: 20vw;
  max-width: 100px;
  max-height: 100px;
`;
