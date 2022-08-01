import Image from "next/image";
import GaugeBar from "../GaugeBar";
import { ISkill } from "../../../constants/skills";
import { Item, Label, Heading } from "./SkillItem.styles";
import { BsLink45Deg } from "react-icons/bs";

const SkillItem = ({ id, tech, percentage, link }: ISkill) => {
  return (
    <Item>
      <Image
        src={`/images/skills/${id}.png`}
        width={40}
        height={40}
        placeholder="blur"
        blurDataURL={`/images/skills/${id}.png`}
      />
      <div className="SkillsItem-gauge">
        <div>
          <Heading>
            <Label>
              <span>{tech}</span>
              {link && (
                <a href={link} target="_blank" rel="noreferrer">
                  <BsLink45Deg />
                </a>
              )}
            </Label>
            <span>{percentage}%</span>
          </Heading>
          <GaugeBar gauge={percentage} />
        </div>
      </div>
    </Item>
  );
};

export default SkillItem;
