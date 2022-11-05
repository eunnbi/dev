import styled from "styled-components";
import Image from "next/image";
import { NextImageWrapper } from "@components/common/NextImageWrapper.styled";

const SkillList = ({ skills }: { skills: Skill[] }) => {
  return (
    <List>
      {skills.map(skill => (
        <SkillItem key={skill.id} id={skill.id} tech={skill.tech} />
      ))}
    </List>
  );
};

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

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

export default SkillList;
