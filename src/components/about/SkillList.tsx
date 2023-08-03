import styled from "styled-components";
import Image from "next/image";

export default function SkillList({ skills }: { skills: Skill[] }) {
  return (
    <List>
      {skills.map(({ id, tech }) => (
        <Item key={id}>
          <ImageWrapper>
            <Image
              src={`/images/skills/${id}.png`}
              fill
              placeholder="blur"
              sizes="100px"
              blurDataURL={`/images/skills/${id}.png`}
              alt={tech}
            />
          </ImageWrapper>
          <h4>{tech}</h4>
        </Item>
      ))}
    </List>
  );
}

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

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

const ImageWrapper = styled.div`
  position: relative;
  width: 20vw;
  height: 20vw;
  max-width: 100px;
  max-height: 100px;
`;
