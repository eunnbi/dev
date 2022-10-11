import SkillItem from "./SkillItem";
import styled from "styled-components";
import { ISkill } from "../../constants/skills";

const SkillList = ({ skills }: { skills: ISkill[] }) => {
  return (
    <List>
      {skills.map((skill) => (
        <SkillItem
          key={skill.id}
          id={skill.id}
          tech={skill.tech}
          percentage={skill.percentage}
          link={skill?.link}
        />
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
