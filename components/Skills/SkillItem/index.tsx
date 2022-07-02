import GaugeBar from "../GaugeBar";
import { Item, Image, Label } from "./SkillItem.styles";

interface SkillItemProps {
  id: number;
  skill: string;
  percentage: number;
}

const SkillItem = ({ id, skill, percentage }: SkillItemProps) => {
  return (
    <Item>
      <Image src={`images/skills/${id}.png`} />
      <div className="SkillsItem-gauge">
        <div>
          <Label>
            <span>{skill}</span>
            <span>{percentage}%</span>
          </Label>
          <GaugeBar gauge={percentage} />
        </div>
      </div>
    </Item>
  );
};

export default SkillItem;
