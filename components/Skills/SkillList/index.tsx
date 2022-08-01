import SkillItem from "../SkillItem";
import { ISkill } from "../../../constants/skills";

const SkillList = ({ skills }: { skills: ISkill[] }) => {
  return (
    <ul>
      {skills.map((skill) => (
        <SkillItem
          key={skill.id}
          id={skill.id}
          tech={skill.tech}
          percentage={skill.percentage}
          link={skill?.link}
        />
      ))}
    </ul>
  );
};

export default SkillList;
