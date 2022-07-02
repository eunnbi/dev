import SkillItem from "../SkillItem";
import { SkillType } from "../skills";

const SkillList = ({ skills }: { skills: SkillType[] }) => {
  return (
    <ul>
      {skills.map((skill) => (
        <SkillItem
          key={skill.id}
          id={skill.id}
          skill={skill.tech}
          percentage={skill.percentage}
        />
      ))}
    </ul>
  );
};

export default SkillList;
