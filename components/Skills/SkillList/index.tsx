import SkillItem from "../SkillItem";
import { SkillType } from "../skills";

const SkillList = ({ skills }: { skills: SkillType[] }) => {
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
