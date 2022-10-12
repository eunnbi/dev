import SkillItem from "./SkillItem";
import styled from "styled-components";

const SkillList = ({ skills }: { skills: SkillItem[] }) => {
  return (
    <List>
      {skills.map((skill) => (
        <SkillItem key={skill.id} id={skill.id} tech={skill.tech} />
      ))}
    </List>
  );
};

export default SkillList;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;
